/* COMMIT DE DEPLOY */
import { Box, Button, Card, CardActions, CardMedia } from '@mui/material';
import { ReactElement } from 'react';
import { ImageCard } from '../modules/ImageCard';

export function WalletContainer(): ReactElement {
  return (
    <Box width="100%" display="flex" flexWrap="wrap" gap={3}>
      <ImageCard />
      <ImageCard />
      <ImageCard />

      <Card>
        <CardMedia
          component="img"
          height="140"
          image="/images/empty-image.png"
          alt="image-card"
        />
        <CardActions>
          <Button fullWidth>Adicionar carteira</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
