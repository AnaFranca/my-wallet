import { Box, Divider, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({
  title,
  description,
  ...props
}: SectionTitleProps): ReactElement {
  return (
    <Box display="flex" flexDirection="column" width="100%" {...props}>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="caption" mb={1}>
        {description}
      </Typography>
      <Divider />
    </Box>
  );
}
