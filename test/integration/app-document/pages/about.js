import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>About</title>
      <meta name="description" content="About us" key="description" />
    </Head>

    <div className="page-about">about</div>
    <Link href="/">
      <a id="home-link">home</a>
    </Link>
  </div>
)
