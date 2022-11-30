import Link from 'next/link'
import { Dropdown } from './Dropdown'

export function Header() {
  return (
    <header className="bg-green-600 px-2 py-4 flex items-center justify-between">
      <Link href="/">
        <h3 className="text-2xl text-zinc-50 font-bold">Alugueis</h3>
      </Link>

      <div className="flex items-center gap-4">
        <span>Jean Martins</span>
        <Dropdown />
      </div>
    </header>
  )
}
