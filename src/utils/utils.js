import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export const iconStyles = {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

export const textFieldStyles = {
  background: '#FFF',
};

export const breadcrumbsStyles = {
  breadcrumbs: {
    '& .MuiBreadcrumbs-separator': {
      fontSize: 16,
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  disabledLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: 'rgb(117, 140, 163)',
    textDecoration: 'none',
  },
  typo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  },
};

export const labelStyles = {
  display: 'flex',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'rgb(5, 26, 46)',
};

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
  },
}));
