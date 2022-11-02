import Head from 'next/head'
import styles from './Layout.module.css'
import Link from 'next/link'

export const siteTitle = 'sakait-blog'

export default function Layout({children, title}) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta name="google-site-verification" content="g0Mvuu_M1JqGTuvUqHRnF-dS6eRa9QA6jbJCSsI6XAM" />
        </Head>
        <header className={styles.header}>
          <div><Link href="/"><a>{siteTitle}</a></Link></div>
        </header>
        <div className={styles.contents}>
          <main className={styles.main}>{children}</main>
        </div>
        {/* <aside>TODO: This is aside</aside> */}
        <footer className={styles.footer}>©2021-{(new Date()).getFullYear()} <a href="https://github.com/sakait-pc" target="_blank" rel="noopener noreferrer">{siteTitle}</a></footer>
      </div>
    </>
  )
}