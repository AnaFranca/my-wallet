import { Card, CardHeader, CardMedia } from '@mui/material';
import { ReactElement } from 'react';

export function ImageCard(): ReactElement {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="/images/travel.jpg"
        alt="image-card"
      />
      <CardHeader title="Carro" />
    </Card>
  );
}
