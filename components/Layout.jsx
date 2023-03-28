import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HanoooT</title>
        <meta name="description" content="ECommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col min-h-screen justify-between'>
        <header className='bg-red-400'>
          header
        </header>
        <main>
          {children}
        </main>
        {/* <footer className='bg-blue-700'> */}
        <footer >
          footer
        </footer>
      </div>
    </>
  )
}

export default Layout