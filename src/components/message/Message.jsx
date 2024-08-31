import styles from './message.module.css';

export default function Message({text}) {
  return (
    <div className={styles.message}>{text}</div>
  )
}
