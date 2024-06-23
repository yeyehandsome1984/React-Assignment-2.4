import styles from './Button.module.css'

function Button({ label, onClickProp }) {
  return (
    <button className={styles.button} onClick={onClickProp}>
      {label}
    </button>
  )
}
export default Button;