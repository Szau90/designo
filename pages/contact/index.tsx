import Locations from "@/components/PageComponents/AboutPage/Locations";
import ContactForm from "@/components/PageComponents/ContactPage/ContactForm";
import Leaf from "@/components/PageComponents/Leaf";
import Head from "next/head";
import { useRouter } from "next/router";

const Contact = () => {
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
      <ContactForm />
      <Locations />
      <Leaf page={router.pathname} />
    </>
  );
};

export default Contact;
