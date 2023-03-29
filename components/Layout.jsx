import Head from 'next/head'
import Footer from './footer/Footer'
import Header from './header/Header'
//import React, { Children } from 'react'

export default function Layout({children, title}) {
  return (
    <>
    <Head>
        <title>{ title? title + ' - Editorial Renanteck' : 'Editorial Renanteck'}</title>
        <meta name="description" content="Editorial Renanteck, Tienda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header>
      <Header></Header>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}
