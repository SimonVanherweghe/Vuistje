import React from "react"

import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"

import style from "../../styles/controls.module.css"

import SEO from "../../components/seo"
import { useIndentity } from "../../hooks/useIdentity"

const AdminPage = ({ data }) => {
  const identity = useIndentity()
  const handleLogout = () => {
    identity.logout()
  }

  return (
    <Layout>
      <SEO title="Admin" />
      <button className={style.button} onClick={handleLogout}>
        Logout
      </button>
      <ul className={style.table}>
        {data.allContentfulVuist.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/vuistje/${node.id}`}>{node.createdAt}</Link>
            <span>{node.from}</span>
            <span>{node.to}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default AdminPage

export const query = graphql`
  query {
    allContentfulVuist(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id: contentful_id
          from
          to
          createdAt(formatString: "DD-MM-YYYY HH:mm")
        }
      }
    }
  }
`
