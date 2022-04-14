import React from "react";
import { RadioGroup } from "./common";
import { Modal } from "./Modal";
import { GENDERS, GenderOptions } from "./constant";
import { ErrorBoundary } from "./ErrorBoundary";
import style from "./app.module.css";
import "./style.css";

export class App extends React.Component {
  state = {
    login: "",
    password: "",
    isModalVisible: false,
    getNews: true,
    gender: GENDERS.MAN,
    errorLogin: "",
    errorPassword: "",
  };
  keyPressHandler = (event) => {
    if (event.keyCode === 27) {
      this.modalCloseHandler();
      console.log("ss");
    }
  };
  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("keyup", this.keyPressHandler);
  }
  componentWillUnmount() {
    const body = document.querySelector("body");
    body.removeEventListener("keyup", this.keyPressHandler);
  }

  FindGenderLabel = () => {
    return GenderOptions.find(({ value, label }) => {
      return value === this.state.gender;
    });
  };
  handleInputName = (event) => {
    this.setState({ login: event.target.value });
  };
  handleInputPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleRegistrationBtn = () => {
    if (this.state.login.length < 5) {
      this.setState({ errorLogin: "Минимальная длина поля 5 символов" });
    } else {
      this.setState({ errorLogin: "" });
    }
    if (this.state.password.length < 5) {
      this.setState({ errorPassword: "Минимальная длина поля 5 символов" });
    } else {
      this.setState({ errorPassword: "" });
    }
    if (this.state.login.length >= 5 && this.state.password.length >= 5) {
      this.setState({
        isModalVisible: true,
      });
    }
  };
  handleCheckbox = () => {
    this.setState({ getNews: !this.state.getNews });
  };
  modalCloseHandler = () => {
    this.setState({ isModalVisible: false });
  };
  toggleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    const {
      login,
      password,
      isModalVisible,
      getNews,
      gender,
      errorLogin,
      errorPassword,
    } = this.state;

    return (
      <div className={style.wrapper}>
        <span className={style.title}>Зарегистрироваться</span>
        <form action="" className={style.form}>
          <input
            placeholder="Логин"
            type="text"
            value={login}
            onChange={this.handleInputName}
            className={style.inputform}
          />
          {errorLogin && <span>{errorLogin}</span>}
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={this.handleInputPassword}
            className={style.inputform}
          />
          {errorPassword && <span>{errorPassword}</span>}
          <RadioGroup
            options={GenderOptions}
            value={gender}
            onChange={this.toggleGender}
          />
          <div className={style.getnews}>
            Подписаться на новости
            <input
              type="checkbox"
              onChange={this.handleCheckbox}
              checked={getNews}
            />
          </div>
          <button
            type="button"
            onClick={this.handleRegistrationBtn}
            className={style.submitbtn}
          >
            Зарегистрироваться
          </button>
        </form>
        <ErrorBoundary>
          {isModalVisible && (
            <Modal
              login={login}
              password={password}
              getNews={getNews}
              gender={this.FindGenderLabel().label}
              onClose={this.modalCloseHandler}
              onClick={this.modalCloseHandler}
            />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}
