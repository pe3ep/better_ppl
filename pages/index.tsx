import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BlurImage from '../components/BlurImage'
const Home: NextPage = () => {
  return (
    <>
      <main className="">
        <div className="grid place-content-center h-screen">
          <div className="mx-4">
            <h1 className="font-manrope font-extrabold text-4xl mb-4 text-center">
              BetterPPL.
              <br />
              От комьюнити.
            </h1>
            <p className="text-center leading-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
              voluptatum?
            </p>
            <div className="flex flex-col gap-2 mt-8 items-center">
              <Link href="/download">
                <a className="px-8 py-3 rounded-full bg-emerald-500 dark:bg-emerald-700 text-white flex gap-2 items-center ">
                  <img src="/static/totem.svg" className="w-5 h-5" alt="" />
                  Скачать Тотемы
                </a>
              </Link>
              <Link href="/download">
                <a className="px-8 py-3 rounded-full bg-zinc-500 dark:bg-zinc-700 text-white flex gap-2 items-center ">
                  <img
                    src="/static/cardboard_box.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  Сборки
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
