import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <main className="h-screen grid place-content-center">
        <div className="">
          <h1>BetterPPL. От комьюнити.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            voluptatum?
          </p>
          <div>
            <button>Скачать Тотемы</button>
            <button>Сборки</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
