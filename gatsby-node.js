const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions
  return new Promise(resolve => {
    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      deletePage(page)
      createPage({
        ...page,
        path: '/'
      })
    }
    resolve()
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`{
    allContentfulBlogPost{
      edges {
        node {
          slug
        }
      }
    }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
