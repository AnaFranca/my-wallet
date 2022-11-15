import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { ReactElement } from 'react';
import { SectionTitle } from '../modules/SectionTitle';
import {
  ArticleOutlined,
  BarChartOutlined,
  HelpOutline,
  ChevronRightOutlined,
} from '@mui/icons-material';
import { ButtonCard } from '../modules/ButtonCard';

export function ExchangeContainer(): ReactElement {
  const { palette } = useTheme();

  return (
    <Stack direction="row" spacing={3}>
      <Box width="50%" display="flex" flexDirection="column" gap={2}>
        <SectionTitle title="Saldo" />
        <Box bgcolor={palette.grey[300]} borderRadius="8px" px={3} py={1}>
          <Typography variant="h5">R$ 0,00</Typography>
          <Typography variant="body2"> Disponivel para investir</Typography>
        </Box>
        <Box bgcolor={palette.grey[300]} borderRadius="8px" px={3} py={1}>
          <Typography variant="h5">R$ 0,00</Typography>
          <Typography variant="body2"> Disponivel para investir</Typography>
        </Box>
        <SectionTitle
          title="Meus Ativos"
          description="Disponivel para investir"
        />
        <Box bgcolor={palette.grey[300]} borderRadius="8px" px={3} py={1}>
          <Typography variant="body1">Você ainda não comprou ativos</Typography>
        </Box>
        <SectionTitle title="Favoritos" />

        <ButtonCard title="Itau unibanco" description="R$ 250,25" />
        <ButtonCard title="Itau unibanco" description="R$ 250,25" />
        <ButtonCard title="Itau unibanco" description="R$ 250,25" />
      </Box>

      <Box width="50%" display="flex" flexDirection="column" gap={2}>
        <SectionTitle title="Ordens Pendentes" />
        <Box bgcolor={palette.grey[300]} borderRadius="8px" px={3} py={1}>
          <Typography variant="body1">Não há nenhuma movimentação</Typography>
        </Box>
        <SectionTitle title="Ultimas Movimentações" />
        <Box bgcolor={palette.grey[300]} borderRadius="8px" px={3} py={1}>
          <Typography variant="body1">Não há nenhuma movimentação</Typography>
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column">
          <Button
            fullWidth={false}
            size="large"
            startIcon={<ArticleOutlined />}
            style={{ justifyContent: 'flex-start' }}
          >
            Extratos e notas
          </Button>
          <Button
            fullWidth={false}
            size="large"
            startIcon={<BarChartOutlined />}
            style={{ justifyContent: 'flex-start' }}
          >
            Ativar TradeMap
          </Button>
          <Button
            fullWidth={false}
            size="large"
            startIcon={<HelpOutline />}
            style={{ justifyContent: 'flex-start' }}
          >
            Me Ajuda
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
