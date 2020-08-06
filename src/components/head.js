import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description, meta }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title,
          description,
          author,
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={`${site.siteMetadata.title} | ${title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Head.defaultProps = {
  meta: [],
  description: ``,
}

Head.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
  title: PropTypes.string
}

export default Head
