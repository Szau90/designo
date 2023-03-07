import classes from "./Hero.module.css";
import Image from "next/image";
import WhiteBtn from "../ui/WhiteBtn";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const action = () => {
    router.push("/appdesign");
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.content}>
            <div className={classes.text}>
              <h1>
                Award-winning custom designs and digital branding solutions
              </h1>

              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
            </div>

            <div className={classes.action}>
              <WhiteBtn disabled={false} action={action} name={"Learn More"} />
            </div>
          </div>
          <div className={classes.images}>
            <Image
              src={"/images/image-hero-phone.png"}
              alt={"phone"}
              width={624}
              height={913}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
