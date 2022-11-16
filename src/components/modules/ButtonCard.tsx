/* COMMIT DE DEPLOY */
import { ChevronRightOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ReactElement } from 'react';

interface ButtonCardProps {
  title: string;
  description: string;
  // image:string;
}

export function ButtonCard({
  title,
  description,
}: ButtonCardProps): ReactElement {
  const { palette } = useTheme();

  return (
    <Box
      bgcolor={palette.grey[300]}
      borderRadius="8px"
      px={3}
      py={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Box bgcolor="#99C24D" borderRadius="50%" width="48px" height="48px" />
        <Box ml={1}>
          <Typography variant="body1" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="caption">{description}</Typography>
        </Box>
      </Box>

      <IconButton size="large">
        <ChevronRightOutlined fontSize="large" />
      </IconButton>
    </Box>
  );
}
