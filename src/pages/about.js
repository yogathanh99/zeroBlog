import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Author from "../components/author"
import SEO from "../components/seo"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <Author />
      </Content>
    </Layout>
  )
}

export default IndexPage
