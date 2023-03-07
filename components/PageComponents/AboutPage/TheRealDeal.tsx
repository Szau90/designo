import classes from "./TheRealDeal.module.css";
import Image from "next/image";

const TheRealDeal = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.box}>
          <Image
            src={"/images/image-real-deal-tablet.jpg"}
            width={689}
            height={320}
            alt={"world-class-talent"}
            className={classes.tablet}
          />
          <Image
            src={"/images/image-real-deal-mobile.jpg"}
            width={375}
            height={320}
            alt={"world-class-talent"}
            className={classes.mobile}
          />
          <div className={classes.content}>
            <div className={classes.container}>
              <h2>The real deal</h2>
              <p>
                As strategic partners in our clients' businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <Image
            src={"/images/image-real-deal.jpg"}
            width={476}
            height={640}
            alt={"world-class-talent"}
            className={classes.desktop}
          />
        </div>
      </section>
    </>
  );
};

export default TheRealDeal;
