import classes from "./Locations.module.css";
import Image from "next/image";
import OrangeBtn from "@/components/ui/OrangeBtn";
import { useRouter } from "next/router";

const Locations = () => {
  const router = useRouter();

  const action = () => {
    router.push("/locations");
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.first}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-canada.svg"}
                width={202}
                height={202}
                alt={"passionate"}
              />
            </div>
            <div className={classes.content}>
              <h3>Canada</h3>
              <OrangeBtn name="See Location" action={action} />
            </div>
          </div>
          <div className={classes.second}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-australia.svg"}
                width={202}
                height={202}
                alt={"resourceful"}
              />
            </div>
            <div className={classes.content}>
              <h3>Australia</h3>
              <OrangeBtn name="See Location" action={action} />
            </div>
          </div>
          <div className={classes.third}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-united-kingdom.svg"}
                width={202}
                height={202}
                alt={"friendly"}
              />
            </div>
            <div className={classes.content}>
              <h3>United Kingdom</h3>
              <OrangeBtn name="See Location" action={action} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
