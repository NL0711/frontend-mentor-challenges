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

  const [avatar, setAvatar] = useState({
    imgURL: "",
    errorImgType: "",
    errorImgSize: "",
    isValid: true,
  });

  const[isInDropArea, setisInDropArea] = useState(false);

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setisInDropArea(false);
    const file = e.dataTransfer.files[0];
    const img = {
      imgURL: "",
      errorImgType: "",
      errorImgSize: "",
      isValid: true,
    };

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      img.errorImgType = "incorrect type";
      img.isValid = false;
    }
    else if (file.size > 500*1024) {
      img.errorImgSize = "under 500 KB";
      img.isValid = false;
    }
    if(img.isValid) {
      console.log("aa")
      img.imgURL = URL.createObjectURL(file);
    }
    setAvatar(prev => ({
      ...prev,
      ...img
      }));
  }

  const handleDragEnter = e => {
    e.preventDefault();
    setisInDropArea(true);
  }

  const handleDragLeave = e => {
    e.preventDefault();
    setisInDropArea(false);
  }

  const validateForm = ({name, value}) => {
    let error = "";
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    switch (name) {
      case "email":
        error = emailRegex.test(value) ? "" : "Please enter a valid email address"
        break
      case "name":
      case "git":
        error = value.trim() !== "" ? "" : `Please enter a ${name === "git" ? "GitHub username" : "name"}`
        break
    }
    return error;
  }

  const isValid = () => Object.values(error).every((err) => err === "")

  const handleOnBlur = e => {
    const error = validateForm(e.target);
    setData((data) => ({
        ...data,
        [e.target.id]: e.target.value
        }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: error
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(isValid(data)) {
      const ticket = Math.random().toString(36).slice(2);
      console.log(ticket);
    }
    else{
      console.log("siajd");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="avatar">
        <label className="field-name">Upload Avatar</label>
        <div id="drag-drop-text">
          <p>Drag and drop or click to upload</p>
          <img src='/assets/images/icon-upload.svg' />
        </div>
        <div 
          id="drag-drop-bg"
          onDragOver={e => {e.preventDefault()}}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          style={{
            border: isInDropArea ? "2px dashed green" : "",
          }}
        >
        {
          avatar.imgURL != "" && 
            <div id="preview-avatar">
              <img id="avatar-img" src={avatar.imgURL} />
            </div>
        } 
        </div>
        <div className="info">
          {avatar.isValid
            ?
            <div className='info'>
              <img src="/assets/images/icon-info.svg" alt="Info" />
              <span>Upload your photo (JPG or PNG, max size: 500KB)</span>
            </div>
            : <ErrorMsg>{`Please upload a JPG or PNG image file ${avatar.errorImgSize}`}</ErrorMsg> 
          }
        </div>
      </div>
      <div>
        <label className="field-name">Full Name</label>
        <input 
          id="name"
          name="name"
          onBlur={handleOnBlur}
          type="text"/>
        {error.name !== "" && <ErrorMsg>{error.name}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">Email Address</label>
        <input
          id="email" 
          name="email" 
          onBlur={handleOnBlur}
          type="email" 

          placeholder="example@email.com" />
        {error.email !== "" && <ErrorMsg>{error.email}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">GitHub Username</label>
        <input 
          id="git" 
          name="git" 
          onBlur={handleOnBlur}
          type="text"
          placeholder="@yourusername" />
        {error.git !== "" && <ErrorMsg>{error.git}</ErrorMsg>}
      </div>
      <button type="submit" className="submit">Generate My Ticket</button>
    </form>
  )
}