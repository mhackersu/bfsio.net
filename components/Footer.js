import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/bfsio.png" alt="Banana For Scale Logo" className={styles.logo} />
      </footer>
    </>
  )
}
