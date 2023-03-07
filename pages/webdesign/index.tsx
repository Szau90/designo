import Categories from "../../components/HomeComponents/Categories";
import Banner from "../../components/PageComponents/Banner";
import WebDesignPortfolio from "../../components/PageComponents/WebDesignPortfolio";
import Head from "next/head";
import Leaf from "@/components/PageComponents/Leaf";
import { useRouter } from "next/router";

const WebDesign = () => {
  const router = useRouter();
  const title = "Web Design";
  const text =
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.";
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
      <Banner title={title} text={text} />
      <Leaf page={router.pathname} />
      <WebDesignPortfolio />
      <Categories page={router.pathname} />
    </>
  );
};

export default WebDesign;
