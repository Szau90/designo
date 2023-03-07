import AboutUs from "@/components/PageComponents/AboutPage/AboutUs";
import Locations from "@/components/PageComponents/AboutPage/Locations";
import TheRealDeal from "@/components/PageComponents/AboutPage/TheRealDeal";
import WorldClassTalent from "@/components/PageComponents/AboutPage/WorldClassTalent";
import Leaf from "@/components/PageComponents/Leaf";
import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {
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
      <AboutUs />
      <Leaf page={router.pathname} />
      <WorldClassTalent />
      <Locations />
      <TheRealDeal />
    </>
  );
};

export default About;
