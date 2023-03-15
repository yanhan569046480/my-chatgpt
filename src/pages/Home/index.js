import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import chatSVG from '../../assets/chat.svg';
import sqlSVG from '../../assets/sql.svg';
import reportSVG from '../../assets/report.svg';
import englishSVG from '../../assets/english.svg';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 8px 0',
    cursor: 'pointer',
  },
  img: {
    width: 64,
    height: 64,
    margin: '0 0 8px 0',
  },
  desc: {
    display: 'flex',
    textAlign: 'left',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const swiperRef = useRef();
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, mt: 30 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Item>
            <Box
              className={classes.cardContent}
              onClick={() => {
                navigate('/chat');
              }}
            >
              <img src={chatSVG} alt="chat" className={classes.img} />
              <Box>AI聊天</Box>
            </Box>

            <Box className={classes.desc}>
              AI聊天描述AI聊天描述AI聊天描述AI聊天描述
              AI聊天描述AI聊天描述AI聊天描述AI聊天描述
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Item>
            <Box
              className={classes.cardContent}
              onClick={() => {
                navigate('/sql');
              }}
            >
              <img src={sqlSVG} alt="sql" className={classes.img} />
              <Box>生成SQL</Box>
            </Box>

            <Box className={classes.desc}>
              生成SQL描述生成SQL描述生成SQL描述生成SQL描述
              生成SQL描述生成SQL描述生成SQL描述生成SQL描述
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Item>
            <Box
              className={classes.cardContent}
              onClick={() => {
                navigate('/report');
              }}
            >
              <img src={reportSVG} alt="report" className={classes.img} />
              <Box>编写报告</Box>
            </Box>

            <Box className={classes.desc}>
              编写报告描述编写报告描述编写报告描述编写报告描述
              编写报告描述编写报告描述编写报告描述编写报告描述
            </Box>
          </Item>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Item>
            <Box
              className={classes.cardContent}
              onClick={() => {
                navigate('/english');
              }}
            >
              <img src={englishSVG} alt="english" className={classes.img} />
              <Box>英语纠错</Box>
            </Box>

            <Box className={classes.desc}>
              英语纠错描述英语纠错描述英语纠错描述英语纠错描述
              英语纠错描述英语纠错描述英语纠错描述英语纠错描述
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
