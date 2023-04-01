import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

import Card from '../components/card'
import Toast from '../components/toast'
import Intro from '../components/intro'

import { useState, useEffect } from 'react'

const p = Poppins({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ pinList, setPinList ] = useState([])
  const [ errorMesaage, setErrorMessage ] = useState(null)

  function fetchData(id){
    setIsLoading(true)
    fetch('/api/id', {
        method: 'POST',
        body: JSON.stringify({ id })
      })
        .then(res => res.json())
        .then(res => { 
          setPinList([res, ...pinList])
          setIsLoading(false)
        })
        .catch(err => {
          // setErrorMessage(err)
          console.log(err)
          setIsLoading(false)
        })
  }

  return (
    <>
      <Head>
        <title>Pinloader</title>
        <meta name="description" content="An website to download" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={p.variable + 'container mx-auto p-8'}>
            <Intro 
              isLoading={isLoading}
              fetchData={fetchData}
            />

            <ul>
                {
                    pinList.map((i, id) => <Card key={id + '_pin'} {...i} />)
                }
            </ul>

            {
              errorMesaage !== null && <Toast message={errorMesaage}/>
            }
      </main>
    </>
  )
}
