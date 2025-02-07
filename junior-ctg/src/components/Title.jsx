import './Title.css'
import PropTypes from 'prop-types'; 

export default function Title({setsubmitted, data}) {
  return (
    <div id="title">
      {
        setsubmitted === true
        ?
        <div>
          <p className="heading">Your Journey to Coding Conf <br /> 2025 Starts Here!</p>
          <p className="subheading">Secure your spot at next year&apos;s biggest coding conference.</p>
        </div>       
        :
        <div>
          <p className="heading">Congrats, {data.name} <br /> Your ticket is ready.</p>
          <p className="subheading">We&lsquo;ve emailed your ticket to {data.email} and
            will send updates in the run up to the event.</p>
        </div>
      }
    </div>
  )
}

Title.propTypes = {
  setsubmitted: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    git: PropTypes.string,
  }).isRequired,
}