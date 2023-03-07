import classes from "./OrangeBtn.module.css";

const OrangeBtn: React.FC<{
  name: string;
  action: () => void;
}> = (props) => {
  return (
    <button className={classes.button} onClick={props.action}>
      {props.name}
    </button>
  );
};

export default OrangeBtn;
