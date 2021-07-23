import { Container, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import HomeStyle from "../pages/HomeStyle.module.css";
import { FcTodoList } from "react-icons/fc";
import Grid from "@material-ui/core/Grid";


class HomePage extends Component {
  render() {
    return (
      <>
        <Container fixed style={{ padding: "0" }}>
          <Typography component="div" className={HomeStyle.typography}>
            <header>
              <h1 className={HomeStyle.title}>
                ToDo App
                <FcTodoList />
              </h1>
            </header>
            <main>
              <Grid container spacing={0} className={HomeStyle.grid}>
                <Grid item lg={9} className={HomeStyle.Input}>
                  <InputLabel htmlFor="standard-adornment-amount">
                    ToDo Work
                  </InputLabel>
                  <Input id="work" fullWidth/>
                </Grid>
                <Grid item lg={3} className={HomeStyle.btn}>
                  <Button variant="outlined" size="large" >
                    ADD ToDo
                  </Button>
                </Grid>
              </Grid>
            </main>
          </Typography>
        </Container>
      </>
    );
  }
}

export default HomePage;
