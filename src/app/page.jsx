import Image from "next/image";
import styles from "./page.module.css";

import Hero from "/public/images/hero.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.startingPage}>
          <div className={styles.textArea}>
            <h1 className={styles.title}>Flood Guard</h1>
            <p>Smart solutions for safety</p>
            <button>Get Started</button>
          </div>
          <Image
            src={Hero}
            width={400}
            height={300}
            className={styles.heroImage}
          />
        </section>
      </div>
    </main>
  );
}
