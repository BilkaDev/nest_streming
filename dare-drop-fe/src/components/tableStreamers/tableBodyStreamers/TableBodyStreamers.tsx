import { Avatar, Box, TableBody, TableCell, TableRow } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useNavigate } from 'react-router-dom';

import { mergeSx } from '../../../utils/mergeSx/mergeSx';
import { getSingleStreamerUrl } from '../../../AppRoute';

import * as styles from './TableBodyStreamers.styles';
import { TableBodyStreamersType } from './TableBodyStreamers.types';

export const TableBodyStreamers = ({
  data,
  onMutate
}: TableBodyStreamersType) => {
  const navigate = useNavigate();
  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Box
            sx={mergeSx(styles.center, styles.pointer)}
            onClick={() => navigate(getSingleStreamerUrl(data.id))}
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
            <ThumbUpOffAltIcon
              onClick={() => onMutate({ type: 'upvotes', id: data.id })}
              sx={styles.pointer}
            />{' '}
            {data.upvotes}
          </Box>
        </TableCell>
        <TableCell>
          <Box sx={styles.center}>
            <ThumbDownOffAltIcon
              onClick={() => onMutate({ type: 'downvotes', id: data.id })}
              sx={styles.pointer}
            />
            {data.downvotes}
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
