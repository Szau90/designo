import GraphicDesignPortfolio from "@/components/PageComponents/GraphicDesignPortfolio";
import Categories from "../../components/HomeComponents/Categories";
import Banner from "../../components/PageComponents/Banner";
import Head from "next/head";
import Leaf from "@/components/PageComponents/Leaf";
import { useRouter } from "next/router";
const GraphicDesign = () => {
  const router = useRouter();

  const title = "Graphic Design";
  const text =
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.";
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
      <GraphicDesignPortfolio />
      <Categories page={router.pathname} />
    </>
  );
};

export default GraphicDesign;
