
interface MenuRoutes {
  path: string,
  menuName: string,
  icon: string
}

export const menuRoutes: MenuRoutes[] = [
  {
    path: '/',
    menuName: 'Início',
    icon: ''
  },
  {
    path: '/login',
    menuName: 'Login',
    icon: ''
  },
  {
    path: '/sign-up',
    menuName: 'Cadastro',
    icon: ''
  },
]
