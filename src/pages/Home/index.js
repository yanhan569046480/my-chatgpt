import React, { useContext, useEffect, useState } from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { breadcrumbsStyles } from '../../utils/utils';

export default function Home() {
  return;
  <Box>
    <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyles.breadcrumbs}>
      <Typography sx={breadcrumbsStyles.typo}>Home</Typography>
    </Breadcrumbs>
  </Box>;
}
