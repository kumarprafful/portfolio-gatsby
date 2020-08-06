import React, { useEffect } from "react"
import { Link } from 'gatsby'
import axios from 'axios'
import Helmet from 'react-helmet'
import SideBar from "./sidebar"
import Drawer from '@material-ui/core/Drawer';
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  useEffect(() => {
    let API_URL = 
    console.log(API_URL)
    axios.post(
      process.env.API_URL + '/log_user/users',
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const [state, setState] = React.useState({
    right: false,
  })
  const toggle = (side, open) => event => {
    if (event.type === "keydown" && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open })
  }
  return (
    <div className={layoutStyles.container}>
      <Helmet>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <div className={layoutStyles.sidebar}>
        <SideBar />
      </div>
      <div className={layoutStyles.leftoutContent}>
        <span className={layoutStyles.menuButton} onClick={toggle('right', true)}><i className="fa fa-bars"></i></span>
        {props.children}
      </div>
      <Drawer anchor="right" open={state.right} onClose={toggle('right', false)}>
        <div className={layoutStyles.rightDrawer}>
          <span className={layoutStyles.menuButton} onClick={toggle('right', false)}><i className="fa fa-times"></i></span>
          <div className={layoutStyles.sideNavbar}>
            <ul>
              <Link activeClassName={layoutStyles.active} to="/"><li>Home</li></Link>
              <Link activeClassName={layoutStyles.active} to="/projects"><li>Projects</li></Link>
              <Link activeClassName={layoutStyles.active} to="/blog"><li>Blog</li></Link>
              <Link activeClassName={layoutStyles.active} to="/gallery"><li>Gallery</li></Link>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Layout
