const path = require(`path`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//https://spectrum.chat/gatsby-js/general/having-issue-related-to-chunk-commons-mini-css-extract-plugin~0ee9c456-a37e-472a-a1a0-cc36f8ae6033
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulVuist {
        edges {
          node {
            id: contentful_id
            from
            to
            message {
              message
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulVuist.edges.forEach(({ node }) => {
    createPage({
      path: `vuistje/${node.id}`,
      component: path.resolve(`./src/templates/vuistje.js`),
      context: {
        id: node.id,
        from: node.from,
        to: node.to,
        message: node.message.message,
      },
    })
  })
}
