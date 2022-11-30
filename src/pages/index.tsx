import Head from 'next/head'
import { Header, HouseCard } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alugueis - Pagina Inicial</title>
      </Head>
      <Header />
      <main>
        <div className="container mx-auto">
          <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
          </div>
        </div>
      </main>
    </>
  )
}
