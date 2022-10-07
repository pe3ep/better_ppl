import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/20/solid'
import ThemeChanger from '../ThemeChanger'
import Menubutton from './Menubutton'
import { useRouter } from 'next/router'

const Navigation = ({ children }: any) => {
  const router = useRouter()
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  const linkList = [
    {
      name: 'Главная',
      icon: <img src="/static/house.svg" className="w-5 h-5" alt="" />,
      slug: '/',
    },
    {
      name: 'Тотемы',
      icon: <img src="/static/totem.svg" className="w-5 h-5" alt="" />,
      slug: '/totems',
    },
    {
      name: 'Сборки',
      icon: <img src="/static/cardboard_box.svg" className="w-5 h-5" alt="" />,
      slug: '/modpacks',
    },
  ]

  return (
    <>
      <header
        className={`transition fixed w-full border-zinc-800/50 ${
          small ? 'bg-neutral-900/90 backdrop-blur-xl border-b ' : ''
        }`}>
        <div className={`container mx-auto py-6 `}>
          <div className="px-6 grid grid-flow-col grid-cols-3 items-center">
            <div className="mr-auto">
              <div className="flex items-center p-2">
                <ThemeChanger />
              </div>
            </div>
            <div className="mx-auto">
              <motion.div
                initial={{ scale: 1 }}
                whileTap={{
                  scale: 0.9,
                  transition: { ease: 'backOut', duration: 0.3 },
                }}>
                <Link href="/">
                  <img src="/static/logo.svg" height={32} width={32} />
                </Link>
              </motion.div>
            </div>
            <div className="ml-auto lg:hidden">
              <Menubutton />
            </div>
            <div className="ml-auto hidden lg:flex">
              <nav className="flex gap-4">
                {linkList.map((item, index) => (
                  <Link href={item.slug}>
                    <a
                      className={`transition flex text-black dark:text-white py-2 px-4 rounded-lg gap-2 ${
                        router.pathname === item.slug
                          ? 'bg-emerald-500 dark:bg-emerald-700'
                          : 'bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 hover:dark:bg-neutral-700 hover:shadow-lg'
                      } items-center`}>
                      {item.icon}
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {children}
    </>
  )
}

export default Navigation
