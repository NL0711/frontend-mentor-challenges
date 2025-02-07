import './Ticket.css'
import PropTypes from 'prop-types';

export default function Ticket({avatar, data}) {
  const ticket = Math.random().toString(36).slice(2,9);

  return (
    <main className="ticket-container">
      <div className="ticket-bg">
        <div className="ticket-info">
          <div className="event-info">
            <img className = "ticket-logo" src="/assets/images/logo-full.svg" />
            <span className="event-date">Jan 31, 2024 / sjad</span>
          </div>
          <div className="profile-info">
            <div className = "ticket-avatar">
              <img className = "ticket-avatar-img" src={avatar.imgURL} alt="avatar"/>
            </div>
            <div className="profile-desc">
              <span className="profile-name">{data.name}</span>
              <address className="profile-email">{data.email}</address>
            </div>
          </div>
          <div className="ticket-no">
            {ticket}
          </div>
        </div>
      </div>
    </main>
  )
}

Ticket.propTypes = {
  avatar: PropTypes.shape({
    imgURL: PropTypes.string,
    errorImgType: PropTypes.string,
    errorImgSize: PropTypes.string,
    isValid: PropTypes.bool,
  }).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    git: PropTypes.string,
  }).isRequired,
}
