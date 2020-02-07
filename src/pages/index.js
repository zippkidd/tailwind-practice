import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavLink from "../components/NavLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-orange-600 text-3x"l>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <NavLink to="/page-2">Go to page two</NavLink>
  </Layout>
)

export default IndexPage
