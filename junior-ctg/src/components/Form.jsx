import './Form.css'

export default function Form() {
  return (
    <form>
      <div className="avatar">
        <p>Upload Avatar</p>
        <p>Drag and drop or click to upload</p>
        <div className="info">
          <img src="/assets/images/icon-info.svg" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </div>
      </div>

      <div className="name">
        <p className="field-name">Full Name</p>
        <input id="name" type="text" />
      </div>

      <div className="email">
        <p className="field-name">Email Address</p>
        <input id="email" type="email" placeholder="example@email.com" />
      </div>

      <div className="git">
        <p className="field-name">GitHub Username</p>
        <input id="git" type="text" placeholder="@yourusername" />
      </div>

      <div>
        <button className="submit">Generate My Ticket</button>
      </div>
    </form>
  )
}