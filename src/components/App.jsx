import React from "react";
import { RadioGroup } from "./common";
import { Modal } from "./Modal";
import { GENDERS, GenderOptions } from "./constant";
import { ErrorBoundary } from "./ErrorBoundary";

export class App extends React.Component {
  state = {
    login: "",
    password: "",
    isModalVisible: false,
    getNews: true,
    gender: GENDERS.MAN,
  };

  componentDidMount() {
    const body = document.querySelector('body')
    body.onkeypress = (event)=>{
      if(event.keyCode === 27){
        this.modalCloseHandler()
        console.log('ss')
      }
    }
  }
  componentWillUnmount() {
    const body = document.querySelector('body')

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
      return (<span>Минимальная длина поля 5 символов</span>)
    }
    if (this.state.password.length < 5) {
      return (<span>Минимальная длина поля 5 символов</span>)
    }
    else if(this.state.login.length >= 5 && this.state.password.length >= 5){
      this.setState({ isModalVisible: true });
    }
  };
  handleCheckbox = () => {
    this.setState({ getNews: !this.state.getNews });
  };
  modalCloseHandler = () => {
    this.setState({ isModalVisible: false }) };
  toggleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    const { login, password, isModalVisible, getNews, gender } = this.state;

    return (
      <div className="App">
        <form action="">
          <input
            placeholder="Логин"
            type="text"
            value={login}
            onChange={this.handleInputName}
          />
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={this.handleInputPassword}
          />
          <RadioGroup
            options={GenderOptions}
            value={gender}
            onChange={this.toggleGender}
          />
          <div>
            Подписаться на новости
            <input
              type="checkbox"
              onChange={this.handleCheckbox}
              checked={getNews}
            />
          </div>
          <button type="button" onClick={this.handleRegistrationBtn}>
            Зарегестрироваться
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
