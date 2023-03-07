import Link from "next/link";
import Image from "next/image";
import classes from "./MainNavigation.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MainNavigation = () => {
  const router = useRouter();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const homeClickHandler = () => {
    router.push("/");
  };
  const hamburgerClickHandler = () => {
    setShowMobileNavbar((current) => !current);
  };

  return (
    <>
      <div className={classes.box}>
        <div>
          <nav className={classes.nav}>
            <Image
              className={classes.logo}
              onClick={homeClickHandler}
              src={"/images/logo-dark.png"}
              alt={"logo"}
              width={200}
              height={24}
            />
            <div
              className={!showMobileNavbar ? classes.hamburger : classes.hide}
              onClick={hamburgerClickHandler}
            >
              <Image
                src={"/images/icon-hamburger.svg"}
                width={24}
                height={20}
                alt={"hamburger"}
              />
            </div>
            <div
              className={showMobileNavbar ? classes.close : classes.hide}
              onClick={hamburgerClickHandler}
            >
              <Image
                src={"/images/icon-close.svg"}
                width={20}
                height={20}
                alt={"close"}
              />
            </div>
            <ul className={classes.list}>
              <li>
                <Link href={"/about"}>Our company</Link>
              </li>
              <li>
                <Link href={"/locations"}>Locations</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ul className={showMobileNavbar ? classes.mobileMenu : classes.hide}>
        <li>
          <Link href={"/about"}>Our company</Link>
        </li>
        <li>
          <Link href={"/locations"}>Locations</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
