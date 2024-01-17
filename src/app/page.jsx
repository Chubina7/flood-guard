import Section2 from "@/components/homepage-sections/section-2/Section-2";
import styles from "./page.module.css";

import Section1 from "@/components/homepage-sections/section-1/Section-1";
import Section3 from "@/components/homepage-sections/section-3/Section-3";
import Section4 from "@/components/homepage-sections/section-4/Section-4";

export default function Home() {
  // const handleToAboutScroll = () => {
  //   aboutRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <main className={styles.main}>
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
    </main>
  );
}
