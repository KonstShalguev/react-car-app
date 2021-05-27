import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class App extends React.Component {
  render() {
    return (
      <Container fixed>
        <TextField id="outlined-basic"
                   label="Поиск"
                   variant="outlined"
                   fullWidth
        />
      </Container>
    );
  }
}
