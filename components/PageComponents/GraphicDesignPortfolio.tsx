import Image from "next/image";
import Card from "../ui/Card";
import classes from "./GraphicDesignPortfolio.module.css";

const GraphicDesignPortfolio = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <Card>
            <div className={classes.asd}>
              <Image
                src="/images/image-change.jpg"
                alt="express"
                width={350}
                height={320}
              />
              <div className={classes.content}>
                <h3>Tim Brown</h3>
                <p>A book cover designed for Tim Browns new release, Change</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className={classes.asd}>
              <Image
                src="/images/image-boxed-water.jpg"
                alt="transfer"
                width={350}
                height={320}
              />
              <div className={classes.content}>
                <h3> Boxed water</h3>
                <p>A simple packaging concept made for Boxed Water</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className={classes.asd}>
              <Image
                src="/images/image-science.jpg"
                alt="photon"
                width={350}
                height={320}
              />
              <div className={classes.content}>
                <h3>Science!</h3>
                <p>
                  A poster made in collaboration with the Federal Art Project
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default GraphicDesignPortfolio;
