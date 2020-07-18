import React from "react";

import PublishIcon from '@material-ui/icons/Publish';

import cssStyles from "../styles/css/default.css";
import cssModules from "../styles/css_modules/default.css";
import sassStyles from "../styles/sass/default.sass";
import scssStyles from "../styles/scss/default.scss";
import stylable from "../styles/stylable/default.st.css";
import styleObjects from "../styles/style_objects/index.js";
import styledComponents from "../styles/styled_components/index.js";

const DropzoneChildrenA = () => (
  <div style={{ padding: "5px", color: "lightBlue", fontSize: "50px" }}>
    <PublishIcon fontSize="inherit" color="inherit" />
  </div>
);

export default DropzoneChildrenA;
