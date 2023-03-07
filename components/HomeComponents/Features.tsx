import classes from "./Features.module.css";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.first}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-passionate.svg"}
                width={202}
                height={202}
                alt={"passionate"}
              />
            </div>
            <div className={classes.content}>
              <h3>Passionate</h3>
              <p>
                {" "}
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className={classes.second}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-resourceful.svg"}
                width={202}
                height={202}
                alt={"resourceful"}
              />
            </div>
            <div className={classes.content}>
              <h3>Resourceful</h3>
              <p>
                {" "}
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients needs.
              </p>
            </div>
          </div>
          <div className={classes.third}>
            <div className={classes.circle}>
              <Image
                src={"/images/illustration-friendly.svg"}
                width={202}
                height={202}
                alt={"friendly"}
              />
            </div>
            <div className={classes.content}>
              <h3>Friendly</h3>
              <p>
                {" "}
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
