import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import Trusted from "../components/home/Trusted";
import Features from "../components/home/Features";
import Creatorpass from "../components/home/Creatorpass";
import Creators from "../components/home/Creators";

function Home() {
  return (
    <Layout page="home">
      <Hero />
      <Trusted />
      <Features />
      <Creatorpass />
      <Creators />
    </Layout>
  );
}

export default Home;
