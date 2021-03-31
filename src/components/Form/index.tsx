import { FormEvent, useContext, useRef, useState } from "react";
import { TextField, Button, Box, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { User } from "../../models";
import UsersContext from "../UsersContext";


interface FormProps {
  
}

export const Form: React.FunctionComponent<FormProps> = (props) => {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useContext(UsersContext);
  //react hooks - 16

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);

    setUsers([
      ...users,
      {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
      }
    ]);

  };

  return (
        <form onSubmit={onSubmit}>
          <TextField fullWidth label="Nome" inputRef={nameRef} />
          <TextField fullWidth label="E-mail" inputRef={emailRef} />
          <Box mt={1}>
            <Button type="submit" variant="contained" color="secondary" >Cadastrar</Button>
          </Box>
        </form>

  );
}
