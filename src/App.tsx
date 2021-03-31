import React, { FormEvent, useRef, useState } from "react";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Container, CssBaseline, Grid, MuiThemeProvider } from '@material-ui/core';
import theme from "./theme";
import { UsersList } from "./components/List";
import { UsersProvider } from "./components/UsersProvider";

function App() {


  return (

    <UsersProvider>

      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Title >Iniciando com React</Title>
          <Grid container>
            <Grid item xs={6}>
              <Form />
            </Grid>
            <Grid item xs={6}>
              <UsersList />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>

    </UsersProvider>
  );
}

export default App;

//.ts - TypeScript - JSX
//.js - JavaScript

//.jsx

//f(x) => html

//Angular - Framework, arquitetura de modules, injecao de dependencia, formularios, camada http
//React - Biblioteca
