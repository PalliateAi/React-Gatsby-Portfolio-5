import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Subcribe from "../components/Subcribe"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
    <Stats />
    <Subcribe />
  </Layout>
)

export default IndexPage
