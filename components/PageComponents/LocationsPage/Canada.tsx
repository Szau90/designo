import classes from "./Locations.module.css";
import React from "react";
import dynamic from "next/dynamic";

const Canada = () => {
  const MapWithNoSSR = dynamic(() => import("../../Maps/Canada/Map"), {
    ssr: false,
  });
  return (
    <>
      <main className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.content}>
              <h1>Canada</h1>
              <div className={classes.contact}>
                <div>
                  <p> Designo Central Office</p>
                  <p> 3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div>
                  <p>Contact</p>
                  <p>P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
                </div>
              </div>
            </div>
          </div>
          <div id="map" className={classes.map}>
            <MapWithNoSSR />
          </div>
        </div>
      </main>
    </>
  );
};

export default Canada;
