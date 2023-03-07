import classes from "./AboutUs.module.css";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.box}>
          <Image
            width={689}
            height={320}
            src={"/images/image-about-hero-tablet.jpg"}
            alt={"about us"}
            className={classes.tablet}
          />
          <Image
            width={375}
            height={320}
            src={"/images/image-about-hero-mobile.jpg"}
            alt={"about us"}
            className={classes.mobile}
          />
          <div className={classes.content}>
            <div className={classes.container}>
              <h1>About Us</h1>
              <p>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We've partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We're always looking forward to creating brands,
                products, and digital experiences that connect with our clients'
                audiences.
              </p>
            </div>
          </div>
          <Image
            width={476}
            height={480}
            src={"/images/image-about-hero.jpg"}
            alt={"about us"}
            className={classes.desktop}
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
