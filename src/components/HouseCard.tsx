import Link from 'next/link'
import { Bed, Car } from 'phosphor-react'

export function HouseCard() {
  return (
    <div className="flex items-start gap-4 p-2 rounded border border-zinc-200">
      <img
        className="h-96 w-96 rounded"
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="w-full">
        <header className="flex items-center justify-between">
          <strong>Casa do seu Jose</strong>
        </header>

        <div>
          <span className="block mt-4">Pocos de Caldas - MG</span>
          <span>Codigo: 154</span>

          <span className="flex gap-4 mt-4">
            <Bed size={24} /> 2
          </span>

          <span className="flex gap-4 mt-4">
            <Car size={24} /> 1
          </span>
        </div>

        <footer className="flex flex-col mt-28 gap-4 self-end justify-self-end">
          <span>R$350.000,00</span>
          <Link
            href="/1234"
            className="bg-red-600 w-52 px-2 py-4 rounded block text-center text-zinc-50 font-bold hover:bg-red-500 transition-colors"
          >
            Saber mais
          </Link>
        </footer>
      </div>
    </div>
  )
}
