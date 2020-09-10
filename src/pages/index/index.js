import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Typography, IconButton, Grid, Tooltip } from "@material-ui/core"
import { ArrowDownward, GitHub, Instagram, LinkedIn, AttachFile, Twitter } from '@material-ui/icons'

import styles from './index.module.scss'
import Layout from "../../components/layout"
import Head from "../../components/head"

import { TopProjects } from '../../data/data'

import dp from '../../images/dp.jpg'
import dpe from '../../images/dpe.jpg'
import resume from '../../images/ResumePraffulKumar.pdf'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />

            <div className={`${styles.container} ${styles.header}`}>
                <div className={`${styles.content}`}>
                    <div className={styles.handleBar}>
                        <hr />
                        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/praffulkumar/">
                            <Tooltip title="LinkedIN">
                                <IconButton className={styles.icon}>
                                    <LinkedIn />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a target="_blank" rel="noopener" href="https://github.com/kumarprafful">
                            <Tooltip title="GitHub">
                                <IconButton className={styles.icon}>
                                    <GitHub />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a target="_blank" rel="noopener" href="https://www.instagram.com/prprafful/">
                            <Tooltip title="Instagram">
                                <IconButton className={styles.icon}>
                                    <Instagram />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a target="_blank" rel="noopener" href="https://twitter.com/prprafful">
                            <Tooltip title="Twitter">
                                <IconButton className={styles.icon}>
                                    <Twitter />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a target="_blank" rel="noopener" href={resume}>
                            <Tooltip title="Resume">
                                <IconButton className={styles.icon}>
                                    <AttachFile />
                                </IconButton>
                            </Tooltip>
                        </a>
                        <hr />
                    </div>
                    <div className={styles.headerContent}>
                        <Typography variant="h1">Prafful Kumar</Typography>
                        <Typography variant="h4">Engineer. Artist...</Typography>
                    </div>
                </div>
            </div>
{/* 
            <div className={`${styles.container} ${styles.projectionSection}`}>
                <Typography variant="h1">Projects</Typography>
                <div className={styles.projects}>
                    <Grid container spacing={3}>
                        {
                            TopProjects.map(project => (
                                <Grid className={styles.cardGrid} item xs={12} md={4} key={project.key}>
                                    <div className={styles.card}>
                                        <div className={styles.image}>
                                            <img src={project.thumbnail} />
                                        </div>

                                        <div className={styles.text}>
                                            <div className={styles.meta}>
                                                <Typography variant="h5">{project.name}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                <div className={styles.footMessage}>
                    <Typography variant="h6">More Projects</Typography>
                </div>
            </div>
            <div className={styles.container}></div>
            <div className={`${styles.container} ${styles.footer}`}></div> */}

        </Layout>
    )
}

export default IndexPage
