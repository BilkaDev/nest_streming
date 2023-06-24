import { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { StreamerResponse } from '../../../api/request/streamers';
import { useSnackbar } from '../../../context/snackbarContext/useSnackbar';
import { AppRoute } from '../../../AppRoute';

import * as styles from './StreamerRecord.styles';

export const StreamerRecord = () => {
  const { id: streamerId } = useParams();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const streamersDataCache = queryClient.getQueryData<
    AxiosResponse<StreamerResponse>
  >(['streamer']);

  const streamer = streamersDataCache?.data.find(
    item => item.id === streamerId
  );
  useEffect(() => {
    if (!streamer) {
      showSnackbar('Not found streamer...', 'error');
      navigate(AppRoute.streamer);
    }
  }, []);
  if (!streamer) return null;
  return (
    <Box>
      <Card sx={styles.container}>
        <Box sx={styles.imageContainer}>
          <CardMedia
            component="img"
            image="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="Live from space album cover"
          />
          <Box sx={styles.playIcon}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Box>
        </Box>
        <CardContent sx={styles.details}>
          <Typography component="div" variant="h5">
            {streamer.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Streaming on: {streamer.platform}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {streamer.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
