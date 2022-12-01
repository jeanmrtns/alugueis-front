import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <img src="https://github.com/jeanmrtns.png" alt="Profile image" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <Link href="/perfil">
            <DropdownMenu.Item className="DropdownMenuItem">
              Perfil
            </DropdownMenu.Item>
          </Link>
          <Link href="/imoveis">
            <DropdownMenu.Item className="DropdownMenuItem">
              Seus imoveis
            </DropdownMenu.Item>
          </Link>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
