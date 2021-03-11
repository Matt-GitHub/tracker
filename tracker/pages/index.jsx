import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/layouts/dashboard";
import Navigation from "../components/shared/navigation";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Track Pal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Dashboard />
      </main>
    </div>
  );
}
