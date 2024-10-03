import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Features from "../components/home/Features";
import Creatorpass from "../components/home/Creatorpass";
import Creators from "../components/home/Creators";

function Home() {
  return (
    <Layout
      page="home" title="Welcome to Hoobe - Your Source for Quality Content"
      description="Discover the best resources, articles, and templates at Hoobe. Join our community and elevate your knowledge today!"
      keywords="home, welcome, quality content, resources, articles, community, Hoobe">
      <Hero />
      <Trusted />
      <Features />
      <Creatorpass />
      <Creators />
    </Layout>
  );
}

export default Home;
