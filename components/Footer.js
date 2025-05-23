import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <a href="/" className="footer">
        <footer>
          <img src="/bfsio-logo.png" alt="Banana For Scale Logo" className={styles.logo} />
        </footer>
      </a>
      <p className="copyright">copyright MMXXV - bfsio dot net</p>
    </>
  )
}
