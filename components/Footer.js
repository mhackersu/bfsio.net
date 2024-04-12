import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <a href="/">
        <footer>
          <img src="/bfsio-logo.png" alt="Banana For Scale Logo" className={styles.logo} />
          <br></br>
          <br></br>
        </footer>
      </a>
    </>
  )
}
