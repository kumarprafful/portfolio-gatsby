import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Head from "../../components/head"

import { Projects } from '../../data/data'
import styles from '../../styles/projects.module.scss'

const githubLogo = 'https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg'

const ProjectPage = () => {
  return (
    <Layout>
      <Head title="Projects" />

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <hr />
        </div>

        <div className={styles.body}>
          {
            Projects.map((item, index) => (
              <div className={styles.card}>
                <h3 className="flex-center">{item.name} {item.githubLink ? <a href={item.githubLink} target="_blank"><img className={styles.logo} src={githubLogo} alt='github' /></a> : ''}</h3>
                <img src={item.thumbnail} alt={item.name} />
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
