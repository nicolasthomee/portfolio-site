import { NavLink, Link, useLocation } from 'react-router-dom'
import './layout.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
]

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="nav">
        
        <nav className="nav__links" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
      </header>

      <main className="content" role="main">
        {children}
      </main>

      <footer className="footer">
        <p className="footer__location">
          Baseado em Guarapuava/PR · Disponível para trabalho remoto e internacional
        </p>
        <p className="footer__copyright">
          © 2025 · Desenvolvido por <Link to="/">Nicolas Thome</Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout

