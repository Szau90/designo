import classes from "./WhiteBtn.module.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const WhiteBtn: React.FC<{
  name: string;
  action: () => void;
  disabled: boolean;
}> = (props) => {
  const { disabled, action, name } = props;

  return (
    <button disabled={disabled} className={`${classes.button} ${jost.className}`} onClick={action}>
      {name}
    </button>
  );
};

export default WhiteBtn;
