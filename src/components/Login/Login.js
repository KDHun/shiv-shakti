import React, { useRef } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import axios from "axios";
import { authActions } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userNameValue = useRef("");
  const passwordValue = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userNameValue.current.value);
    console.log(passwordValue.current.value);
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        UserName: userNameValue.current.value,
        Password: passwordValue.current.value,
      })
      .then((response) => {
        dispatch(authActions.login(response.data));
        localStorage.setItem("Token", response.data.Token);
        navigate("/generatepdf");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="UserName"
          input={{ type: "text", id: "username", ref: userNameValue }}
        />
        <br />
        <Input
          label="Password"
          input={{ type: "password", id: "password", ref: passwordValue }}
        />
        <br />
        <Button>Login</Button>
      </form>
      <div className={classes.testing}>
        *Use UserName = Password = A for testing!!! 
      </div>
    </Card>
  );
};

export default Login;
