import { useMutation } from '@tanstack/react-query'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'sonner'

import { signIn, signInBody, signInResponse } from '@/api/sign-in'

interface AuthContextType {
  user: signInResponse | undefined
  login: (data: signInBody) => Promise<void>
  isLogin: boolean
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextType)

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('You need an AuthContext to use this Context')
  }
  return context
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<signInResponse | undefined>(undefined)

  const { mutateAsync: signInFn, isPending: isLogin } = useMutation({
    mutationFn: signIn,
    onSuccess(data) {
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))
    },
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  async function login({ email, password }: signInBody) {
    try {
      await signInFn({
        email,
        password,
      })
      toast.success('Login efetuado com sucesso!')
    } catch {
      toast.error(
        'Ocorreu um erro ao efetuar o login, por favor tente novamente.',
      )
    }
  }

  function signOut() {
    setUser(undefined)
    localStorage.removeItem('user')
    toast.success('Logout efetuado com sucesso!')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        isLogin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
