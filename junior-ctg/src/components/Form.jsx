import './Form.css'
import ErrorMsg from './ErrorMsg';
import PropTypes from 'prop-types';

export default function Form({
  handleSubmit,
  handleDrop, 
  handleDragEnter, 
  handleDragLeave,
  handleOnBlur,
  isInDropArea,
  error,
  avatar,
}) {
  
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
          avatar.imgURL !== "" && 
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
        {error.name !== "" && <ErrorMsg>{error.name ?? ""}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">Email Address</label>
        <input
          id="email" 
          name="email" 
          onBlur={handleOnBlur}
          type="email" 

          placeholder="example@email.com" />
        {error.email !== "" && <ErrorMsg>{error.email ?? ""}</ErrorMsg>}
      </div>
      <div>
        <label className="field-name">GitHub Username</label>
        <input 
          id="git" 
          name="git" 
          onBlur={handleOnBlur}
          type="text"
          placeholder="@yourusername" />
        {error.git !== "" && <ErrorMsg>{error.git ?? ""}</ErrorMsg>}
      </div>
      <button type="submit" className="submit">Generate My Ticket</button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  isInDropArea: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    git: PropTypes.string,
  }).isRequired,
  avatar: PropTypes.shape({
    imgURL: PropTypes.string,
    errorImgType: PropTypes.string,
    errorImgSize: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
};