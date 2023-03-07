import Australia from "@/components/PageComponents/LocationsPage/Australia";
import Canada from "@/components/PageComponents/LocationsPage/Canada";
import UnitedKingdom from "@/components/PageComponents/LocationsPage/UnitedKingdom";
import Head from "next/head";

const Locations = () => {
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
      <Canada />
      <Australia />
      <UnitedKingdom />
    </>
  );
};

export default Locations;
