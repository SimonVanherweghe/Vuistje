import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import { useQueryParam, StringParam } from "use-query-params"
import ShareUrl from "../components/shareUrl"
import Vuist from "../components/vuist"
import SEO from "../components/seo"

import style from "./show.module.css"

const ShowPage = ({ location }) => {
  const [data, setData] = useState(null)

  const [id] = useQueryParam("id", StringParam)
  const domain = location.origin ? location.origin : ""

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/.netlify/functions/show?id=${id}`)
      const data = await r.json()
      setData(data)
    }
    getData()
  }, [id])

  return (
    <Layout>
      <SEO title="Deel dit vuistje" />
      {data ? (
        <>
          <Vuist />
          <ShareUrl value={`${domain}/vuistje/${id}`} />
          <Content {...data} />
        </>
      ) : (
        <p className={style.loading}>Vuistje aan het ballen...</p>
      )}
    </Layout>
  )
}

export default ShowPage
