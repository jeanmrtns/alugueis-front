import Head from 'next/head'
import { Header, HouseCard } from '../components'
import { imoveis } from '../utils/imoveis'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alugueis - Pagina Inicial</title>
      </Head>
      <Header />
      <main className="container mx-auto px-2">
        <div className="grid mt-8 lg:grid-cols-2 lg:gap-4">
          {imoveis.map((imovel) => (
            <HouseCard house={imovel} key={imovel.codigo} />
          ))}
        </div>
      </main>
    </>
  )
}
