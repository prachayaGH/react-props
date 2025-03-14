import PropTypes from "prop-types";

function Button({ text, buttonStyle }) {
  return <button className={buttonStyle}>{text}</button>;
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
};

export default Button;
