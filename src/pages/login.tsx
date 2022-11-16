/* eslint-disable @typescript-eslint/no-misused-promises */
import { ReactElement } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CopyrightOutlined } from '@mui/icons-material';
import Head from 'next/head';

export default function Login(): ReactElement {
  const { push } = useRouter();

  const handleLogin = async (): Promise<boolean> => {
    return await push('/login');
  };

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack alignItems="center" justifyContent="center" mt={24} flex={1}>
        <Image src="/images/logo.svg" width={315} height={55} alt="logo" />
        <Stack mt={6} gap={2} width="100%">
          <Typography mt={2} variant="h4" color="primary" fontWeight="700">
            Login
          </Typography>
          <TextField variant="outlined" name="email" label="E-mail" fullWidth />
          <TextField
            variant="outlined"
            name="password"
            label="Senha"
            fullWidth
          />

          <Link href="/forgot-password">
            <Typography onClick={() => console.log('Clicked')}>
              Esqueci minha senha :(
            </Typography>
          </Link>

          <Button
            variant="contained"
            size="large"
            fullWidth={false}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" width="100%" justifyContent="center" mt={8}>
        <Typography textAlign="center">copyright</Typography>
        <CopyrightOutlined />
      </Stack>
    </Container>
  );
}
