import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bed, Car } from 'phosphor-react'
import { Header } from '../../components'
import { imoveis } from '../../utils/imoveis'

export default function House() {
  const router = useRouter()
  const { houseId } = router.query

  const house = imoveis.find((h) => h.codigo === Number(houseId))

  if (!house) router.push('/')

  return (
    <>
      <Head>
        <title>Alugueis - Moradia {houseId}</title>
      </Head>
      <Header />
      <div className="container mx-auto mt-14 px-2">
        <h2 className="text-2xl font-bold">Moradia {houseId}</h2>
        <div className="flex flex-col-reverse lg:flex-row mt-4 items-start gap-4 p-2 rounded border border-zinc-200">
          <img className="h-96 w-96 rounded" src={house?.imagem} alt="" />

          <div className="w-full">
            <header className="flex items-center justify-between">
              <strong>{house?.nome}</strong>
            </header>

            <div>
              <span className="block mt-4">{house?.cidade}</span>
              <span>Codigo: {house?.codigo}</span>

              <span className="flex gap-4 mt-4">
                <Bed size={24} /> {house?.quartos}
              </span>

              <span className="flex gap-4 mt-4">
                <Car size={24} /> {house?.espacoGaragem}
              </span>
            </div>

            <footer className="flex flex-col mt-28 gap-4 self-end justify-self-end">
              <span>R${house?.valor}</span>
              <Link
                href={`/${houseId}/criar-proposta`}
                className="bg-red-600 w-52 px-2 py-4 rounded block text-center text-zinc-50 font-bold hover:bg-red-500 transition-colors"
              >
                Enviar proposta
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
