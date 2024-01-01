import Image from 'next/image'
import styles from './page.module.css'
import { Homepage } from '@/components/homepage'

export default function Home() {
  return (
    <main className=' h-screen w-screen'>
      <div className='h-screen w-screen'>
        <Homepage></Homepage>
      </div>
    </main>
  )
}
