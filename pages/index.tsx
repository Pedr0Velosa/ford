import Head from 'next/head'
import Integrantes from '../src/components/Integrantes';
import Footer from '../src/components/Footer'

function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Integrantes />
      <Footer />
    </>
  );
}

export default Home
