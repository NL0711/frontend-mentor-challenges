import './Title.css'
import PropTypes from 'prop-types'; 

export default function Title({submitted, data}) {
  return (
    <div id="title">
      {
        submitted !== true
        ?
        <div>
          <p className="heading">Your Journey to Coding Conf <br /> 2025 Starts Here!</p>
          <p className="subheading">Secure your spot at next year&apos;s biggest coding conference.</p>
        </div>       
        :
        <div>
          <h1 className="heading">Congrats, {data.name} <br /> Your ticket is ready.</h1>
          <h2 className="subheading">We&lsquo;ve emailed your ticket to {data.email} and
            will send updates in the run up to the event.</h2>
        </div>
      }
    </div>
  )
}

Title.propTypes = {
  submitted: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    git: PropTypes.string,
  }).isRequired,
}