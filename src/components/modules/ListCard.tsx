import {
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import { ReactElement } from 'react';

export interface ListCardContentProps {
  title: string;
  description?: string;
  value: string;
}

interface ListCardProps {
  title: string;
  content: ListCardContentProps[];
}

export function ListCard({ title, content = [] }: ListCardProps): ReactElement {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        {content.map((item, index) => (
          <Box key={index} mt={2}>
            <Stack
              direction={'row'}
              mb={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="caption">{item.description}</Typography>
              </Box>

              <Typography>{item.value}</Typography>
            </Stack>
            <Divider />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
