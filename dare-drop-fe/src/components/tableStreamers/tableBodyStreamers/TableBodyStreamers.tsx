import {
  Avatar,
  Box,
  IconButton,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Link } from 'react-router-dom';

import { mergeSx } from '../../../utils/mergeSx/mergeSx';
import { getSingleStreamerUrl } from '../../../AppRoute';

import * as styles from './TableBodyStreamers.styles';
import { TableBodyStreamersType } from './TableBodyStreamers.types';

export const TableBodyStreamers = ({
  data,
  onMutate
}: TableBodyStreamersType) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Box
            to={getSingleStreamerUrl(data.id)}
            sx={mergeSx(styles.center, styles.link)}
            component={Link}
          >
            <Avatar
              alt={'avatar image'}
              src={'https://xsgames.co/randomusers/avatar.php?g=male'}
            />
            {data.name}
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={styles.center}>
            <IconButton
              arial-label="upvotes"
              onClick={() => onMutate({ type: 'upvotes', id: data.id })}
            >
              <ThumbUpOffAltIcon />
            </IconButton>
            {data.upvotes}
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={styles.center}>
            <IconButton
              arial-label="downvotes"
              onClick={() => onMutate({ type: 'downvotes', id: data.id })}
            >
              <ThumbDownOffAltIcon />
            </IconButton>
            {data.downvotes}
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
