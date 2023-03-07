import Image from "next/image";
import Card from "../ui/Card";
import classes from "./AppDesignPortfolio.module.css";

const AppDesignPortfolio = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.firstRow}>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-airfilter.jpg"
                  alt="express"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Airfilter</h3>
                  <p>
                    Solving the problem of poor indoor air quality by filtering
                    the air
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-eyecam.jpg"
                  alt="transfer"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Eyecam</h3>
                  <p>
                    Product that lets you edit your favorite photos and videos
                    at any time
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-faceit.jpg"
                  alt="photon"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Faceit</h3>
                  <p>
                    Get to meet your favorite internet superstar with the faceit
                    app
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className={classes.secondRow}>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-todo.jpg"
                  alt="builder"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Todo</h3>
                  <p>
                    A todo app that features cloud sync with light and dark mode
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className={classes.asd}>
                <Image
                  src="/images/image-loopstudios.jpg"
                  alt="blogr"
                  width={350}
                  height={320}
                />
                <div className={classes.content}>
                  <h3>Loopstudios</h3>
                  <p>A VR experience app made for Loopstudios</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDesignPortfolio;
