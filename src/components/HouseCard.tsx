import Link from 'next/link'
import { Bed, Car } from 'phosphor-react'

interface House {
  nome: string
  cidade: string
  codigo: number
  quartos: number
  espacoGaragem: number
  valor: number
  imagem: string
}

interface HouseCardProps {
  house: House
  notToSell?: boolean
}

export function HouseCard({ house, notToSell = false }: HouseCardProps) {
  return (
    <div className="flex items-start gap-4 p-2 rounded border border-zinc-200">
      <img
        className="h-24 w-24 lg:h-96 lg:w-96 object-cover rounded"
        src={house.imagem}
        alt=""
      />

      <div className="w-full">
        <header className="flex items-center justify-between">
          <strong>{house.nome}</strong>
        </header>

        <div>
          <span className="block mt-4">{house.cidade}</span>
          <span>Codigo: {house.codigo}</span>

          <span className="flex gap-4 mt-4">
            <Bed size={24} /> {house.quartos}
          </span>

          <span className="flex gap-4 mt-4">
            <Car size={24} /> {house.espacoGaragem}
          </span>
        </div>

        <footer className="flex flex-col mt-28 gap-4 self-end justify-self-end">
          <span>R${house.valor}</span>
          {!notToSell && (
            <Link
              href={`/${house.codigo}`}
              className="bg-red-600 w-52 px-2 py-4 rounded block text-center text-zinc-50 font-bold hover:bg-red-500 transition-colors"
            >
              Saber mais
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}
