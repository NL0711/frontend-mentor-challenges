import PropTypes from 'prop-types'; 

function ErrorMsg(props) {
  return (
    <div
      className="info"
      style={{
        color: "hsl(7, 71%, 60%)",
      }}
    >
      <img src="/assets/images/icon-info.svg" />
      <span>{props.children}</span>
    </div>
  );
}

ErrorMsg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMsg;
