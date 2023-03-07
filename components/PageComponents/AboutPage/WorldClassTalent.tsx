import classes from "./WorldClassTalent.module.css";
import Image from "next/image";

const WorldClassTalent = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.box}>
          <Image
            src={"/images/image-world-class-talent.jpg"}
            width={476}
            height={640}
            alt={"world-class-talent"}
            className={classes.desktop}
          />
          <Image
            src={"/images/image-world-class-talent-tablet.jpg"}
            width={689}
            height={320}
            alt={"world-class-talent"}
            className={classes.tablet}
          />
          <Image
            src={"/images/image-world-class-talent-mobile.jpg"}
            width={375}
            height={320}
            alt={"world-class-talent"}
            className={classes.mobile}
          />
          <div className={classes.content}>
            <div className={classes.container}>
              <h2>World-class talent</h2>
              <p>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand's story and mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldClassTalent;
