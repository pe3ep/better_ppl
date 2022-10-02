import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bars2Icon } from '@heroicons/react/24/outline'
import ThemeChanger from '../ThemeChanger'

const Navigation = ({ children }: any) => {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])
  return (
    <>
      <header
        className={`transition fixed w-full ${
          small
            ? 'bg-neutral-900/90 backdrop-blur-xl border-b border-zinc-800/50'
            : ''
        }`}>
        <div className={`container mx-auto py-4 `}>
          <div className="px-6 grid grid-flow-col grid-cols-3 items-center">
            <div className="mr-auto">
              <div className="flex items-center">
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
                  <img src="/static/logo.png" height={32} width={32} />
                </Link>
              </motion.div>
            </div>
            <div className="ml-auto lg:hidden">
              <div>
                <Bars2Icon className="w-6 h-6" />
              </div>
            </div>
            <div className="ml-auto hidden lg:flex">pc-nav</div>
          </div>
        </div>
      </header>

      {children}
    </>
  )
}

export default Navigation
