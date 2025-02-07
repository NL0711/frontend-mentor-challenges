import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import Ticket from './components/Ticket';
import { useState } from 'react';


function App() {
  //lift up the submit state from form to app
  const[submitted, setsubmitted] = useState(false);
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
    setAvatar(img);
  }

  const handleDragEnter = e => {
    e.preventDefault();
    console.log("Drag Enter");
    setisInDropArea(true);
  }

  const handleDragLeave = e => {
    e.preventDefault();
    console.log("Drag Leave");
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
        [e.target.name]: e.target.value
        }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: error
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(isValid(data)) {
      if (avatar.imgURL === "") {
        setAvatar(prevState => ({
          ...prevState,
          isValid: false, 
        }));
      } else {
        setsubmitted(true);
      }
    }
  }

  return (
    <>
      <header>
        <img id="logo" src="/assets/images/logo-full.svg" alt="Coding Conf logo" />
      </header>
      <main className="container">
        <Title
          setsubmitted={setsubmitted}
          data={data} 
        />
        {!submitted //debugging line for ticket
          ? 
          <Form 
            handleSubmit={handleSubmit} 
            handleDrop={handleDrop} 
            handleDragEnter={handleDragEnter} 
            handleDragLeave={handleDragLeave}
            handleOnBlur={handleOnBlur}
            isInDropArea={isInDropArea}
            error={error}
            avatar={avatar}
          />
          :
          <Ticket
            avatar={avatar}
            data={data}
          />
        }
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">NL077</a>.
      </div>
    </>
  )
}

export default App
