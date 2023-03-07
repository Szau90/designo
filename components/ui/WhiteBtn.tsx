import classes from "./WhiteBtn.module.css";

const WhiteBtn: React.FC<{
  name: string;
  action: () => void;
  disabled: boolean;
}> = (props) => {
  const { disabled, action, name } = props;

  return (
    <button disabled={disabled} className={classes.button} onClick={action}>
      {name}
    </button>
  );
};

export default WhiteBtn;
