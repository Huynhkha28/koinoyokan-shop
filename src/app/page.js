import Image from 'next/image'
import Header from '@/components/header'
import Body from '@/components/body'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <Body />
      <Footer />
    </div>

  )
}
