import ErrorMsg from "./app";

class User {
  constructor(name, email, git) {
    this.name =  name;
    this.email = email;
    this.git = git;
  }

  validateEmail() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(this.email);
  }

  validateName() {
    return this.name.trim() !== "";
  }

  validateGit() {
    return this.git.trim() !== "";
  }

  generateToken() {
    return Math.random().toString(36).slice(2);
  }
}

class Form {

  constructor() {
    this.form = document.querySelector('form');
    this.name = document.getElementById("#name");
    this.email = document.getElementById("#email");
    this.git = document.getElementById("#git");

   this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.generateTicket(e);
    });
  }

  validateForm() {
    const user = new User(this.name.value, this.email.value, this.git.value);

    const user_validate = {
      "email": user.validateEmail(),
      "name": user.validateName(),
      "git": user.validateGit(),
    }

    if(!user_validate["email"]) {
      const dom = document.querySelector(".email");
      const div = document.createElement("div");
      dom.appendChild(div);
      ReactDOM.createRoot(div).React.createElement(render(ErrorMsg, { errorType: "email address"}));
      return false;
    }
    return true;
  }

  generateTicket(e) {
    e.preventDefault();
    const user = new User(this.name.value, this.email.value, this.git.value);
    const warning = document.querySelector(".email").querySelector(".info");
    if(warning) {
      warning.remove();
    }

    if(this.validateForm()) {
      const token = user.generateToken();
      console.log(token);
    }
  }
}

new Form();

