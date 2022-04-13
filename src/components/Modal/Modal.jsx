import "./style.css";
import ReactDOM from "react-dom";

export const Modal = (props) => {
  const body = document.querySelector("body");
  const Modal = (
    <div className="modal">
      <span>Вы успешно зарегестрировались</span>
      <span>{props.login}</span>
      <span>{props.password}</span>
      <span>Пол {props.gender}</span>
      <button type="button" onClick={props.onClick} onClose={props.onClose}>OK</button>
      {props.getNews && <span>Вы подписались на новости</span>}
    </div>
  );
  return ReactDOM.createPortal(Modal, body);
};
