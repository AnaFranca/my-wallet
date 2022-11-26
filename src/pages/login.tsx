/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { ReactElement, useCallback } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CopyrightOutlined } from '@mui/icons-material';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login(): ReactElement {
  const { push } = useRouter();

  const handleSubmit = useCallback(async (): Promise<void> => {
    await push('/');
  }, [push]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Este campo é necessário')
      .email('Digite um e-mail válido'),
    password: Yup.string()
      .required('Este campo é necessário')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Deve conter 8 caracteres, uma letra maiscula, uma minuscula, um número e um caractere especial',
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

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
          <Stack>
            <TextField
              variant="outlined"
              name="email"
              label="E-mail"
              fullWidth
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={!!formik.errors.email}
            />

            <Typography mt={1} variant="caption" color="error">
              {formik.errors.email}
            </Typography>
          </Stack>

          <Stack>
            <TextField
              variant="outlined"
              name="password"
              label="Senha"
              fullWidth
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={!!formik.errors.password}
            />

            <Typography mt={1} variant="caption" color="error">
              {formik.errors.password}
            </Typography>
          </Stack>

          <Link href="/forgot-password">
            <Typography onClick={() => console.log('Clicked')}>
              Esqueci minha senha :(
            </Typography>
          </Link>

          <Button
            variant="contained"
            size="large"
            fullWidth={false}
            onClick={() => formik.handleSubmit()}
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
