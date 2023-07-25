import React from 'react'
import {Pattaya} from 'next/font/google'

const pattaya = Pattaya({
    subsets : ['latin'],
    weight : ['400']

})
type Props = {}

export default function layout({children}: {children:React.ReactNode }) {
  return (
    <main className={pattaya.className}>{children}</main>
  )
}