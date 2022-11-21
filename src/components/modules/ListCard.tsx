import {
  Card,
  CardContent,
  Divider,
  Typography,
  Box,
  Stack,
  Button,
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
  onClick?: () => void;
}

export function ListCard({
  title,
  content = [],
  onClick,
}: ListCardProps): ReactElement {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">{title}</Typography>
          {onClick != null && <Button onClick={onClick}>Adicionar</Button>}
        </Stack>
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
