import React from "react";
import "../App.css";
import logo from "../assets/Vector.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
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
        <div className="grid-container" margin="auto">
          <div class="grid-item work-caption">
            {" "}
            Register with your work address
          </div>
          <div class="grid-item">
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                className={classes.textField}
                label="work email"
                margin="normal"
                onChange={handleChange("email")}
              />
            </form>
          </div>
          <div className="grid-item">
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

          <div className="grid-item terms">
            <FormControlLabel
              control={<Checkbox value="checkedC" color="default" />}
              label="I agree to terms & conditions, cancellation policy and privacy policy."
            />
          </div>
        </div>
      </div>

      <div>
        <table className="icon-table" style={{ "margin-top": "auto" }}>
          <tr>
            <td>
              <Button className={classes.button}> &lt; GO BACK</Button>
            </td>
            <td>
              <Button className={classes.button}> PROCEED &gt;</Button>
            </td>
          </tr>
        </table>
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
