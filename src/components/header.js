import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">Prafful Kumar</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/gallery">Galleria</Link></li>

        </ul>
      </nav>
    </header>

  )
}

export default Header;
