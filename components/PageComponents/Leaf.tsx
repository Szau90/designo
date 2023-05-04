import Image from "next/image";
import classes from "./Leaf.module.css";

const Leaf: React.FC<{ page: string }> = (props) => {
  const { page } = props;

  let leaf: string;

  switch (page) {
    case "/":
      leaf = classes.home;

      break;
    case "/webdesign":
      leaf = classes.portfolio;

      break;
    case "/appdesign":
      leaf = classes.portfolio;

      break;
    case "/graphicdesign":
      leaf = classes.portfolio;

      break;
    case "/about":
      leaf = classes.about;

      break;
    case "/contact":
      leaf = classes.contact;

      break;
    default:
      leaf = "";
  }

  const ads = page === "/about" ? classes.secoundLeaf : classes.hide;

  return (
    <>
      <Image
        className={leaf}
        src={"/images/bg-pattern-leaf.svg"}
        width={1006}
        height={594}
        alt={"leaf"}
      />
      <div className={classes.container}>
      <Image
        className={ads}
        src={"/images/bg-pattern-leaf.svg"}
        width={1006}
        height={594}
        alt={"leaf"}
      />
      </div>
    </>
  );
};

export default Leaf;
