import React, { useEffect } from "react";
import { useHistory } from "react-router";
import CardsCss from "../css/components/Cards.module.css";

const Cards = ({ id, name, email, avatar, age }) => {
  const history = useHistory();
  const DeleteUser = () => {
    const Conformation = window.confirm(
      "Are you sure you want to delete this user"
    );
    if (Conformation) {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/User?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => document.getElementById(id).remove())
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={CardsCss.Card} id={id}>
      {name && <h1 className={CardsCss.name}>{name}</h1>}
      {email && <p className={CardsCss.email}>{email}</p>}
      {age && <p className={CardsCss.age}>{age} year old</p>}
      <div className={CardsCss.bottomBtnWarper}>
        <span
          className={CardsCss.bottomBtn}
          onClick={() => history.push(`/editUser/${id}`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
          </svg>
        </span>
        <span
          className={CardsCss.bottomBtn}
          onClick={DeleteUser}
          style={{ borderColor: "#ff0000cc" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ff0000cc"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Cards;
