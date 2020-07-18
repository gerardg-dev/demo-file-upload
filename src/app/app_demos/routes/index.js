import React from "react";

import demosURLs from "../../../appURLs/app_demos";

const Demos = () => {
    return (
      <div style={{
				backgroundColor: "lightGray",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
        width: "100%",
        height: "100%"
			}}>
				<h1>DEMOS</h1>
      </div>
    );
}

export default Demos;

Demos.defaultProps = {};
