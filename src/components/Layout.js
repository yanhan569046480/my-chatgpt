import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Fab,
  Fade,
  IconButton,
  Menu,
  Slide,
  Stack,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import logoSVG from '../assets/logo.svg';
import { LightTooltip } from '../utils/utils';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useImmer } from 'use-immer';
import { AuthContext } from './AuthContextProvider';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Layout(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { children } = props;
  const navigate = useNavigate();

  const { activeUser, setActiveUser } = useContext(AuthContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: '#f8f9fc',
          }}
          elevation={0}
        >
          <Toolbar disableGutters>
            <ButtonBase
              onClick={() => navigate('/')}
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 2,
              }}
            >
              <img src={logoSVG} alt="logo" />
            </ButtonBase>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: '#758ca3', ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  {activeUser?.name && (
                    <Button
                      variant="text"
                      sx={{ color: '#758ca3', ml: 2 }}
                      startIcon={<HomeIcon />}
                      onClick={() => navigate('/')}
                    >
                      Home
                    </Button>
                  )}
                </Box>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {activeUser?.name && (
                <Button
                  variant="text"
                  sx={{ color: '#758ca3', ml: 2 }}
                  startIcon={<HomeIcon />}
                  onClick={() => navigate('/')}
                >
                  Home
                </Button>
              )}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {activeUser?.name ? (
                <LightTooltip
                  title={
                    <div>
                      <Button
                        variant="text"
                        onClick={() => {
                          setActiveUser((prev) => {
                            prev.name = '';
                          });
                          navigate('/Login');
                        }}
                        startIcon={<LogoutIcon />}
                        size="small"
                      >
                        Login Out
                      </Button>
                    </div>
                  }
                >
                  <Button
                    variant="text"
                    sx={{ color: '#758ca3', mr: 2 }}
                    startIcon={<PersonIcon />}
                  >
                    {activeUser?.name}
                  </Button>
                </LightTooltip>
              ) : (
                <Stack
                  direction={'row'}
                  spacing={1}
                  alignItems="center"
                  sx={{ color: '#758ca3', mr: 2 }}
                >
                  <Button
                    variant="text"
                    sx={{ color: '#758ca3' }}
                    onClick={() => {
                      navigate('/Login');
                    }}
                    startIcon={<LoginIcon />}
                  >
                    Login
                  </Button>

                  <Button
                    variant="text"
                    sx={{ color: '#758ca3', mr: 1 }}
                    onClick={() => {
                      navigate('/Register');
                    }}
                    startIcon={<HistoryEduIcon />}
                  >
                    Register
                  </Button>
                </Stack>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar id="back-to-top-anchor" />

        <div
          style={{
            padding: '20px',
          }}
        >
          {children}
        </div>
      </Box>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}
