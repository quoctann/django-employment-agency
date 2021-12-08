import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainComponent from "./components/Main-component";
import HeaderComponent from "./components/Header-component";
import { useStyles } from "./DefaultLayout-styles";
import { Box, useScrollTrigger } from "@material-ui/core";
import { getAuthLS, LS_KEY } from '../../src/helpers/localStorage';

const rolePaths = {
  EMPLOYEE: 'NHAN VIEN',
  ADMIN: 'QUAN LY',
}

export default function ({ children, setToken, ...rest }) {
  const classes = useStyles();
  const check = getAuthLS(LS_KEY.AUTH_TOKEN)
  // const check = 'QUAN LY';
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mainRef, setMainRef] = useState();
  const trigger = useScrollTrigger({ target: mainRef });

  useEffect(() => {
    if (trigger) {
      setOpenDrawer(false)
    }
  }, [trigger])

  return (
    <Box className={classes.root}>
      <CssBaseline />

      {/*  */}
      <HeaderComponent
        classes={classes}
        setToken={setToken}
        open={openDrawer}
        setOpen={setOpenDrawer}
        {...rest}
        mainRef={mainRef}
      />

      {/*  */}
      <MainComponent classes={classes} children={children} open={openDrawer} setRef={setMainRef} />

      {/*  */}
    </Box>
  );
}
