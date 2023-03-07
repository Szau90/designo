import Banner from "../../components/PageComponents/Banner";
import Categories from "../../components/HomeComponents/Categories";
import AppDesignPortfolio from "@/components/PageComponents/AppDesignPortfolio";
import Head from "next/head";
import { useRouter } from "next/router";
import Leaf from "@/components/PageComponents/Leaf";

const AppDesign = () => {
  const router = useRouter();
  const title = "App Design";
  const text =
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips. ";
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
      <AppDesignPortfolio />
      <Categories page={router.pathname} />
    </>
  );
};

export default AppDesign;
