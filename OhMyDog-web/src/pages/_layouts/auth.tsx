import { PawPrint } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="bg-login flex h-full w-full flex-col justify-between border-r border-foreground/5 bg-green-500 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <PawPrint className="h-5 w-5 " />
          <span className="font-semibold">OhMyDog.</span>
        </div>

        <footer className="text-sm">
          OhMyDog. - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
