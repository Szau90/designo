import classes from "./Locations.module.css";
import React from "react";
import dynamic from "next/dynamic";

const UnitedKingdom = () => {
  const MapWithNoSSR = dynamic(() => import("../../Maps/United Kingdom/Map"), {
    ssr: false,
  });
  return (
    <>
      <main className={classes.UkWrapper}>
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.content}>
              <h1>United Kingdom</h1>
              <div className={classes.contact}>
                <div>
                  <p> Designo UK Office</p>
                  <p> 13 Colorado Way</p>
                  <p>Rhyd-y-fro SA8 9GA</p>
                </div>
                <div>
                  <p>Contact</p>
                  <p>P : 078 3115 1400</p>
                  <p>M : contact@designo.uk</p>
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

export default UnitedKingdom;
