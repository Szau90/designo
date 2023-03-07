import classes from "./Locations.module.css";
import React from "react";
import dynamic from "next/dynamic";

const Australia = () => {
  const MapWithNoSSR = dynamic(() => import("../../Maps/Australia/Map"), {
    ssr: false,
  });
  return (
    <>
      <main className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.AuContainer}>
            <div className={classes.content}>
              <h1>Australia</h1>
              <div className={classes.contact}>
                <div>
                  <p> Designo AU Office</p>
                  <p> 19 Balonne Street</p>
                  <p>New South Wales 2443</p>
                </div>
                <div>
                  <p>Contact</p>
                  <p>P : (02) 6720 9092</p>
                  <p>M : contact@designo.au</p>
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

export default Australia;
