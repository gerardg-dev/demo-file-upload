import React from "react";

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const DropzoneChildrenB = () => (
  <div style={{ padding: "5px", color: "lightGreen", fontSize: "50px" }}>
    <ArrowDownwardIcon fontSize="inherit" color="inherit" />
  </div>
);

export default DropzoneChildrenB;
