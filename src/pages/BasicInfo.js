import React from "react";
import "../App.css";
import logo from "../assets/Vector.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const BasicInfo = ({ match }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    email: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  console.log(match);
  return (
    <div>
      <table className="icon-table">
        <tbody>
          <tr>
            <th>
              <img className="icon" src={logo} alt="logo" />
            </th>
            <th>
              <div className="line"> </div>
            </th>

            <th>
              <div className="heading">Basic Information</div>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="box inner-info">
        <div> Register with your work email</div>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="work email"
              margin="normal"
              onChange={handleChange("email")}
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;

// <div>
//
//
// </div>

// <table className="inner-table">
// <tbody>
// <tr>Register with your work address</tr>
// <tr>
//   {" "}
//   <input type="text" name="workemail" placeholder="work email" />
// </tr>
// <tr>
//   <input type="text" name="password" placeholder="password" />
// </tr>

// </tbody>
// </table>
