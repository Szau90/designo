import classes from "./OrangeBtn.module.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const OrangeBtn: React.FC<{
  name: string;
  action: () => void;
}> = (props) => {
  return (
    <button
      className={`${classes.button} ${jost.className}`}
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};

export default OrangeBtn;
