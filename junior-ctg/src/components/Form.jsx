import './Form.css'
import ErrorMsg from './ErrorMsg';
import { useState } from 'react';

export default function Form() {
  const [error, setError] = useState({
    name: "",
    email: "",
    git: "",
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    git: "",
  });

  const handleChange = (e) => {
    console.log(data);
    setData((data) => ({
    ...data,
    [e.target.id]: e.target.value
    }));
  }

  const isValid = (data) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    errors.email = !emailRegex.test(data.email) ? "" : "Please enter a valid email address";
    errors.name = data.name.trim() !== "" ? "" : "Please enter a user name";
    errors.git = data.git.trim() !== "" ? "" : "Please enter a git username";

    setError((error) => ({
      ...error,
      ...errors,
    }));

    return Object.values(errors).every((e) => e === "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValid(data)) {
      console.log(data);
    }
    else{
      console.log("siajd");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="avatar">
        <p>Upload Avatar</p>
        <p>Drag and drop or click to upload</p>
        <div className="info">
          <img src="/assets/images/icon-info.svg" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </div>
      </div>
      <div>
        <label className="field-name">Full Name</label>
        <input id="name" name="name" onChange={handleChange} type="text"/>
        {error.name !== "" && <ErrorMsg>{error.name}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">Email Address</label>
        <input id="email" name="email" onChange={handleChange} type="email" placeholder="example@email.com" />
        {error.email !== "" && <ErrorMsg>{error.email}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">GitHub Username</label>
        <input id="git" name="git" onChange={handleChange} type="text"   placeholder="@yourusername" />
        {error.git !== "" && <ErrorMsg>{error.git}</ErrorMsg>}
      </div>
      <button type="submit" className="submit">Generate My Ticket</button>
    </form>
  )
}