import { useState } from 'react';
import {
  InputLabel,
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  FormControl,
  Button,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  AvailablePlatforms,
  availablePlatforms,
  DEFAULT_PLATFORM
} from '../../../platforms';
import * as styles from './AddStreamer.styles';
import { useSnackbar } from '../../../context/snackbarContext/useSnackbar';
import {
  addStreamerSchema,
  AddStreamerType
} from '../../../api/request/streamers';
import { createStreamer } from '../../../api/request/streamers/streamers.request';
import { useParseError } from '../../../api/error/http-error';

export const AddStreamer = () => {
  const [showForm, setShowForm] = useState(false);
  const [platform, setPlatform] = useState(DEFAULT_PLATFORM);

  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const errorParser = useParseError();

  const { mutate } = useMutation({
    mutationFn: createStreamer,
    onSettled: () => queryClient.invalidateQueries(['streamer']),
    onSuccess: () => showSnackbar('Streamer has been added!', 'success'),
    onError: error => showSnackbar(errorParser({ error }), 'error')
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    setPlatform(event.target.value);
  };
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<AddStreamerType>({
    resolver: zodResolver(addStreamerSchema)
  });

  const PlatformItems = Object.keys(availablePlatforms).map(platform => (
    <MenuItem key={platform} value={platform}>
      {availablePlatforms[platform as AvailablePlatforms].name}
    </MenuItem>
  ));

  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>
        <Typography variant="h5">Add streamer</Typography>
        <AddCircleIcon
          sx={{ cursor: 'pointer' }}
          onClick={() => setShowForm(prev => !prev)}
        />
      </Box>
      {showForm && (
        <Paper>
          <Box
            component="form"
            sx={styles.form}
            onSubmit={handleSubmit(data => {
              const payload = { ...data, platform };
              mutate(payload);
            })}
          >
            <TextField
              variant="standard"
              label={'Streamer name:'}
              {...register('name')}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              fullWidth
            />
            <TextField
              {...register('description')}
              multiline
              rows={4}
              variant="outlined"
              label={'Description'}
              fullWidth
              error={Boolean(errors.description)}
              helperText={errors.description?.message}
            />
            <FormControl>
              <InputLabel sx={styles.selectInput} id="platform-label">
                Platform
              </InputLabel>
              <Select
                sx={styles.select}
                labelId="platform-label"
                id="platform-select"
                value={platform}
                onChange={handleChange}
              >
                {PlatformItems}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" disabled={false}>
              Add
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
