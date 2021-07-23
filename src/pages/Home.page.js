import { Container, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import HomeStyle from "../pages/HomeStyle.module.css";
import { FcTodoList } from "react-icons/fc";
import { MdDoneAll } from "react-icons/md";
import Grid from "@material-ui/core/Grid";

class HomePage extends Component {
  state = {
    work: "",
    todo: [],
  };
  inputHandelChange(value) {
    this.setState({ work: value });
  }
  addTodo() {
    if (this.state.work !== "")
      this.setState({
        todo: [...this.state.todo, { do: this.state.work, status: "waite" }],
        work: "",
      });
  }
  doneHandler(location) {
    this.setState({
      todo: this.state.todo.map((item, index) => {
        if (index === location) {
          item.status = "done";
          return item;
        } else return item;
      }),
    });
  }
  deleteHandler(location) {
    this.setState({
      todo: this.state.todo.filter((item, index) => index !== location),
    });
  }
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
                  <Input
                    value={this.state.work}
                    id="work"
                    fullWidth
                    onChange={(e) => this.inputHandelChange(e.target.value)}
                    onKeyDown={(e) => (e.keyCode === 13 ? this.addTodo() : "")}
                  />
                </Grid>
                <Grid item lg={3} className={HomeStyle.btn}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => this.addTodo()}
                  >
                    ADD ToDo
                  </Button>
                </Grid>
              </Grid>
              <div className={HomeStyle.list}>
                ToDo List :
                <ul>
                  {this.state.todo.map((item, index) => {
                    if (item.status === "done") {
                      return (
                        <li
                          key={index}
                          style={{
                            margin: "12px",
                            backgroundColor: "rgb(25, 160, 25)",
                            padding: "2px 2px 2px 20px",
                            borderRadius: "7px",
                            color: "white",
                          }}
                        >
                          <div className={HomeStyle.li}>
                            <span>{item.do}</span>

                            <span className={HomeStyle.done}>
                              Step is Done!!! <MdDoneAll />
                            </span>
                            <span>
                              <Button
                                style={{ marginRight: "10px" }}
                                variant="contained"
                                color="primary"
                                onClick={() => this.doneHandler(index)}
                              >
                                Done!!
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => this.deleteHandler(index)}
                              >
                                Delete
                              </Button>
                            </span>
                          </div>
                        </li>
                      );
                    } else
                      return (
                        <li
                          key={index}
                          style={{
                            margin: "12px",
                          }}
                        >
                          <div className={HomeStyle.li}>
                            <span>{item.do}</span>
                            <span>
                              <Button
                                style={{ marginRight: "10px" }}
                                variant="contained"
                                color="primary"
                                onClick={() => this.doneHandler(index)}
                              >
                                Done!!
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => this.deleteHandler(index)}
                              >
                                Delete
                              </Button>
                            </span>
                          </div>
                        </li>
                      );
                  })}
                </ul>
              </div>
            </main>
          </Typography>
        </Container>
      </>
    );
  }
}

export default HomePage;
