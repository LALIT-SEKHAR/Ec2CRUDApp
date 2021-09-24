import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import AddUserCss from "../css/Screens/AddUser.module.css";

const AddUser = () => {
  const history = useHistory();
  const { id } = useParams();

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    id &&
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/User?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setValue({
            ...value,
            username: data.username ? data.username : "",
            email: data.email ? data.email : "",
            age: data.age ? data.age : "",
          });
        })
        .catch((err) => console.log(err));
  };

  const handelInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/User`,
        {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="largeContainerCenter">
      <span className={AddUserCss.exit} onClick={() => history.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </span>
      <form onSubmit={handelSubmit} className={AddUserCss.formWarper}>
        <fieldset>
          <legend>name</legend>
          <input
            onChange={handelInput}
            value={value.username}
            name="username"
            type="text"
            required
          />
        </fieldset>
        <fieldset>
          <legend>email</legend>
          <input
            onChange={handelInput}
            value={value.email}
            name="email"
            type="email"
            required
          />
        </fieldset>
        {!id && (
          <fieldset>
            <legend>password</legend>
            <input
              onChange={handelInput}
              value={value.password}
              name="password"
              type="password"
              required
            />
          </fieldset>
        )}
        <fieldset>
          <legend>age</legend>
          <input
            onChange={handelInput}
            value={value.age}
            min={1}
            name="age"
            type="number"
            required
          />
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
