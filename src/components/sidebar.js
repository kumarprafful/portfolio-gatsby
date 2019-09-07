import React from 'react'
import sidebarStyles from './sidebar.module.scss'
import user from '../images/user.png'
import pdf from '../images/ResumePraffulKumar.pdf'

const SideBar = () => {
  return (
    <div className={sidebarStyles.container}>
      <div className={sidebarStyles.dp}>
        <img src={user} alt="Prafful Kumar" />
      </div>
      <h2>Prafful Kumar</h2>
      <p>Full Stack Developer and Deep Learning Enthusiast.</p>
      <div className={sidebarStyles.extLinks}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kumarprafful"><i className="fa fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/praffulkumar/"><i className="fa fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/prprafful"><i className="fa fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href={pdf}><i className="fa fa-file"></i></a>
      </div>
    </div>
  )
}

export default SideBar