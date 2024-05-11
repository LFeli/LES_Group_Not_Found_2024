import {
  ChevronDown,
  Files,
  Flag,
  HandHeart,
  Handshake,
  LogOut,
  Pencil,
  Plus,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteCookie, getCookie } from '@/utils/cookie'

const user = getCookie({ name: 'omdAuth' })

export function UserMenu() {
  const navigate = useNavigate()
  function handleLogOut() {
    deleteCookie({ name: 'omdAuth' })
    navigate('/login', { replace: true })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className="group space-x-4 bg-transparent">
          <span className="font-rubik text-base">Olá {user?.nome}</span>

          <ChevronDown className="duration-50000 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[200px] bg-yellow-50">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
          <Plus className="h-4 w-4" />
          <span>Criar Postagem</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
          <Pencil className="h-4 w-4" />
          <span>Editar perfil</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Navegação</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link to={'/app/postagens'}>
          <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
            <Files className="h-4 w-4" />
            <span>Meus Posts</span>
          </DropdownMenuItem>
        </Link>

        <Link to={'/app/postagens'}>
          <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
            <HandHeart className="h-4 w-4" />
            <span>Fazer doação</span>
          </DropdownMenuItem>
        </Link>

        <Link to={'/app/postagens'}>
          <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
            <Handshake className="h-4 w-4" />
            <span>Contribuições</span>
          </DropdownMenuItem>
        </Link>

        <Link to={'/app/postagens'}>
          <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
            <Flag className="h-4 w-4" />
            <span>Denúncias</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <span onClick={handleLogOut}>
          <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </span>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
