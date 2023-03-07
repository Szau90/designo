import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./Categories.module.css";
import Image from "next/image";

const Categories: React.FC<{ page: string }> = ({ page }) => {
  const [homePage, setHomePage] = useState(false);
  const [webdesignPage, setWebdesignPage] = useState(false);
  const [appdesignPage, setAppdesignPage] = useState(false);
  const [graphicdesignPage, setGraphicdesignPage] = useState(false);
  const [flex, setFlex] = useState(false);

  const exp = page;
  useEffect(() => {
    switch (exp) {
      case "/":
        setHomePage(true);

        break;
      case "/webdesign":
        setWebdesignPage(true);
        setFlex(true);

        break;
      case "/appdesign":
        setAppdesignPage(true);
        setFlex(true);

        break;
      case "/graphicdesign":
        setGraphicdesignPage(true);
        setFlex(true);

        break;
    }
  }, []);

  return (
    <>
      <div className={flex ? classes.flexWrapper : classes.wrapper}>
        <div className={flex ? classes.flex : classes.box}>
          <div className={webdesignPage ? classes.hide : ""}>
            <div className={homePage ? classes.first : classes.shrink}>
              <div className={classes.main}>
                <h2>Web design</h2>
                <Link href={"/webdesign"}>
                  View Projects{" "}
                  <Image
                    src={"/images/icon-right-arrow.svg"}
                    width={7}
                    height={10}
                    alt={"arrow right"}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={flex ? classes.flex2 : classes.secondCol}>
            <div className={appdesignPage ? classes.hide : classes.second}>
              <div className={classes.main}>
                <h2>App design</h2>
                <Link href={"/appdesign"}>
                  View Projects{" "}
                  <Image
                    src={"/images/icon-right-arrow.svg"}
                    width={7}
                    height={10}
                    alt={"arrow right"}
                  />
                </Link>
              </div>
            </div>
            <div className={graphicdesignPage ? classes.hide : classes.third}>
              <div className={classes.main}>
                <h2>Graphic design</h2>
                <Link href={"/graphicdesign"}>
                  View Projects{" "}
                  <Image
                    src={"/images/icon-right-arrow.svg"}
                    width={7}
                    height={10}
                    alt={"arrow right"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
