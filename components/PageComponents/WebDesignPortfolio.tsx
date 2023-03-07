import Image from "next/image";
import Card from "../ui/Card";
import classes from "./WebDesignPortfolio.module.css";

const WebDesignPortfolio = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.firstRow}>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-express.jpg"
                  alt="express"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Express</h3>
                  <p>
                    A multi-carrier shipping website for ecommerce businesses
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-transfer.jpg"
                  alt="transfer"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Transfer</h3>
                  <p>
                    Site for low-cost money transfers and sending money within
                    seconds
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-photon.jpg"
                  alt="photon"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Photon</h3>
                  <p>
                    A state-of-the-art music player with high-resolution audio
                    and DSP effects
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className={classes.secondRow}>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-builder.jpg"
                  alt="builder"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Builder</h3>
                  <p>
                    Connects users with local contractors based on their
                    location
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-blogr.jpg"
                  alt="blogr"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>blogr</h3>
                  <p>
                    Blogr is a platform for creating an online blog or
                    publication
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-camp.jpg"
                  alt="camp"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>camp</h3>
                  <p>
                    Get expert training in coding, data, design, and digital
                    marketing
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDesignPortfolio;
