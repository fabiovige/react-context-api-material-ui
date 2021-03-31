import * as React from 'react';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import UsersContext from '../UsersContext';

interface UserListProps {}

export const UsersList: React.FunctionComponent<UserListProps> = (props) => {

    const [users] = React.useContext(UsersContext)

    return (
        <div>
            Lista de usuários
            <List>

            { users.map((user, key) => (
                <ListItem button key={key}>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <ListItemText primary={user.name} secondary={user.email}></ListItemText>
                </ListItem>
            )) }


            </List>
        </div>
    )
}