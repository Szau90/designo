import classes from "./Banner.module.css";

const Banner: React.FC<{ title: string; text: string }> = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.content}>
            <h1> {props.title}</h1>
            <p> {props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
