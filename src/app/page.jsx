import GetStarted from "@/components/homepage-sections/get_started/GetStarted";
import styles from "./page.module.css";
import Services from "@/components/homepage-sections/our_services/Services";
import AboutUs from "@/components/homepage-sections/about_us/AboutUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <GetStarted id="getStarted" />
      <AboutUs id="aboutUs" />
      <Services id="services" />
    </main>
  );
}
