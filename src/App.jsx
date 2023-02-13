import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <h1>WatchBrowser</h1>
      <p>yes mhm</p>
      <a href="https://github.com" className={styles.button}>
        Download on GitHub <span className="material-symbols-outlined">arrow_forward</span>
      </a>
      <a href="https://apps.apple.com" className={styles.button}>
        Download on the App Store <span className="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  )
}
