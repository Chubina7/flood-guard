import styles from "./page.module.css";

import Section1 from "@/components/homepage-sections/Section-1";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Section1 />
        <Section1 />
        <Section1 />
        <Section1 />
      </div>
    </main>
  );
}
