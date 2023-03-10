import Leaf from "@/components/PageComponents/Leaf";
import Head from "next/head";
import { useRouter } from "next/router";
import Categories from "../components/HomeComponents/Categories";
import Features from "../components/HomeComponents/Features";
import Hero from "../components/HomeComponents/Hero";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <meta name="description" content="Home Page"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Hero />
      <Leaf page={router.pathname} />
      <Categories page={router.pathname} />
      <Features />
    </>
  );
};

export default Home;
