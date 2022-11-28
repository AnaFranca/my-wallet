import { ReactElement } from 'react';
import { AppBar, Avatar, Box, InputBase, Stack, Toolbar } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  '&:svg': {
    color: alpha(theme.palette.common.white, 0.15),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = (): ReactElement => {
  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" width="100%" justifyContent="space-between">
            <Image
              src="/images/logo-white.svg"
              width={244}
              height={31}
              alt="logo-header"
            />
            <Stack direction="row">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon color="secondary" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Pesquisar..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Avatar src="/broken-image.jpg" />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
