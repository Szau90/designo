"use client";

import classes from "./Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WhiteBtn from "../ui/WhiteBtn";

const Footer = () => {
  const router = useRouter();
  const homeClickHandler = () => {
    router.push("/");
  };
  const action = () => {
    router.push("/contact");
  };
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.card}>
          <div className={classes.callToAction}>
            <div className={classes.text}>
              <h1>Lets talk about your project</h1>
              <p>
                {" "}
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <div className={classes.action}>
              <WhiteBtn
                disabled={false}
                action={action}
                name={"get in touch"}
              />
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.box}>
            <div className={classes.nav}>
              <Image
                className={classes.logo}
                onClick={homeClickHandler}
                src={"/images/logo-light.png"}
                alt={"logo"}
                width={200}
                height={24}
              />
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
            </div>
            <div className={classes.contact}>
              <div className={classes.address}>
                <p> Designo Central Office</p>
                <p> 3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className={classes.info}>
                <p>Contact Us (Central Office)</p>
                <p> P : +1 253-863-8967</p>
                <p> M : contact@designo.co</p>
              </div>
              <div className={classes.social}>
                <Image
                  src={"/images/icon-facebook.svg"}
                  alt={"facebook"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/images/icon-youtube.svg"}
                  alt={"youtube"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/images/icon-twitter.svg"}
                  alt={"twitter"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/images/icon-pinterest.svg"}
                  alt={"pinterest"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/images/icon-instagram.svg"}
                  alt={"instagram"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
