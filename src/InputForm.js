import React, { useState } from "react";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    // margin: theme.spacing(2),
    width: "350px",
  },
  input1: {
    // margin: theme.spacing(2),
    marginTop: "2rem",
    marginLeft: "5rem",
  },
  input2: {
    marginTop: "12rem",
    marginLeft: "5rem",
  },
  button: {
    marginLeft: "5rem",
    marginTop: "3rem",
    // margin: theme.spacing(2),
  },
  container: {},
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function InputForm() {
  const classes = useStyles();

  // let [locdata, setlocdata] = useState();

  // let handleChange = ({ target }) => {
  //   setlocdata(target.value);
  // };

  // let findebus = () => {
  //   alert(locdata);
  // };

  let inputUrduc = React.createRef();
  let inputUrde = React.createRef();

  function texapoxvel() {
    let urduc = inputUrduc.current.value;
    let urde = inputUrde.current.value;
    alert(`Texapoxvum enq ${urduc}-ic ${urde}`);
  }

  return (
    <Grid
      container
      className={classes.container}
      direction="column-reverse"
      justifyContent="flex-end"
      alignItems="baseline"
    >
      <Grid item className={classes.button}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#008B8B",
            color: "white",
            width: "350px",
            boxShadow: `2px 2px 10px #008B8B`,
          }}
          onClick={texapoxvel}
        >
          GO-i knopken
        </Button>
      </Grid>
      <Grid item className={classes.input1}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Urde"
            variant="outlined"
            id="mui-theme-provider-standard-input"
            inputRef={inputUrde}
          />
        </ThemeProvider>
      </Grid>
      <Grid item className={classes.input2}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Urduc"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            // value={locdata}
            // onChange={handleChange()}
            inputRef={inputUrduc}
          />
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}
