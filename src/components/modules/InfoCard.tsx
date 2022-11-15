/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';

interface InfoCardProps {
  title: string;
  description?: string;
  buttonTitle: string;
  onClick?: () => void;
}

export function InfoCard({
  title,
  description,
  buttonTitle,
  onClick,
}: InfoCardProps): ReactElement {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth onClick={onClick}>
          {buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
}
