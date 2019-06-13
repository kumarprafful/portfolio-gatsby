import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, gatsby} from 'gatsby'

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    {
      site{
        siteMetadata {
          title
        }
      }
    }
    `)
  return (
    <Helmet title={`${data.site.siteMetadata.title} | ${title}`} />
  )
}

export default Head;
