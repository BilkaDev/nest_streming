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

import {
  AvailablePlatforms,
  availablePlatforms,
  DEFAULT_PLATFORM
} from '../../../platforms';
import {
  addStreamerSchema,
  AddStreamerType
} from '../../../api/request/streamers';

import * as styles from './AddStreamer.styles';
import { useMutationStreamer } from '../../../api/request/streamers/hooks/useMutationStreamer';

export const AddStreamer = () => {
  const [showForm, setShowForm] = useState(false);
  const [platform, setPlatform] =
    useState<AvailablePlatforms>(DEFAULT_PLATFORM);
  const { addStreamerState } = useMutationStreamer();

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as AvailablePlatforms);
  };
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit
  } = useForm<AddStreamerType>({
    resolver: zodResolver(addStreamerSchema)
  });

  const PlatformItems = Object.keys(availablePlatforms).map(platform => (
    <MenuItem key={platform} value={platform}>
      {availablePlatforms[platform as AvailablePlatforms].name}
    </MenuItem>
  ));

  const submitForm = async (data: AddStreamerType) => {
    const payload = { ...data, platform };
    await addStreamerState.mutate(payload, {
      onSuccess: () => {
        reset();
      }
    });
  };

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
            onSubmit={handleSubmit(submitForm)}
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
