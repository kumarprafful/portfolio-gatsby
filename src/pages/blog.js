import React from 'react';
import Layout from "../components/layout"
import {graphql, Link, useStaticQuery} from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
      edges {
        node {
          frontmatter{
            title
            date
          }
          fields {
            slug
          }
          }
        }
      }
    }
    `)

  console.log(data)
  return (
    <>

      <Layout >
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge)=> {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h3>{edge.node.frontmatter.date}</h3>
              </Link>
            </li>
          )
        })}
      </ol>
      </Layout>
    </>
  )
}

export default BlogPage
