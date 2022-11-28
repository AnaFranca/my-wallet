/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
  footerTitle?: string;
  footerDescription?: string;
  onClick?: () => void;
}

export function ListCard({
  title,
  content = [],
  footerTitle,
  footerDescription,
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
        {footerTitle && (
          <Stack
            direction="row"
            justifyContent="space-between"
            mt={2}
            role="row"
          >
            <Typography>{footerTitle}</Typography>
            <Typography fontWeight="600">{footerDescription}</Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
