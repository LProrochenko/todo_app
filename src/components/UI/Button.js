import styles from './Button.module.css';

const Button = (props) => {
  // props
  const { children, disabled = false, ...rest } = props;

  return (
    <button {...rest} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
