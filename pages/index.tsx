import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          O que temos pra hoje?
        </h1>
      </main>
    </div>
  )
}
