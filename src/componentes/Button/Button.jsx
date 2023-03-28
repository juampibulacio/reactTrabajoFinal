import styles from "./button.module.css";

const Button = (props) => {
  function handleClick() {
  }

  const styleButton = {
    backgroundColor: props.color,
  };

  return (
    <button
      disabled={props.disabled}
      className={styles.btn}
      style={styleButton}
      onClick={handleClick}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;