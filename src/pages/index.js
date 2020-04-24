import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"
import Vuist from "../components/vuist"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Vuist />
    <Link to="/create" className={style.button}>
      Geef een vuistje
    </Link>
  </Layout>
)

export default IndexPage
