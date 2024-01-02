import '../styles/globals.css';
import Image from 'next/image';
import MyRadioGroup from './components/TestUIComponent';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <MyRadioGroup />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}> 
      </div>
    </main>
  )
}
