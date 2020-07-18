// Documentation
// https://github.com/roadmanfong/react-cropper
// https://www.npmjs.com/package/react-cropper

import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import defaultStyles from "./styles/defaultStyles.js";
import defaultClassNames from "./styles/defaultClassNames.js";

import cbCodes from "./cbCodes";

const cropper = React.createRef(null);

class CropperInput extends Component {
  // demo crop method
  _crop() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL()); // toDataURL()
    // there are better approaches that using toDataURL() specially
    // if we use Firestore blob
  }

  cropper = createRef();

  cropImage = () => {
    const { setImage } = this.props;

    if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
      return;
    }

    this.cropper.current.getCroppedCanvas().toBlob(blob => {
      setImage(blob);
    }, "image/jpeg");
  };

  render() {
    const style = { ...defaultStyles.style, ...this.props.style };
    const addStyle = { ...defaultStyles.addStyle, ...this.props.addStyle };
    const className = {
      ...defaultClassNames.className,
      ...this.props.className
    };
    const addClassName = {
      ...defaultClassNames.addClassName,
      ...this.props.addClassName
    };

    const { imagePreview } = this.props;

    const { cropInputHeight } = this.props;

    const {
      aspectRatio,
      dragMode,
      guides,
      scalable,
      rotatable,
      cropBoxMovable,
      cropBoxResizable
    } = this.props;

    return (
      <Cropper
        style={{
          ...{ height: cropInputHeight },
          ...style.cropInput,
          ...addStyle.cropInput
        }}
        className={`${className.cropInput} ${addClassName.cropInput}`}
        //
        ref={this.cropper}
        src={imagePreview}
        // Cropper.js options
        preview=".img-preview"
        aspectRatio={aspectRatio}
        viewMode={1} // prevents the user to crop outside
        dragMode={dragMode}
        guides={guides}
        scalable={scalable}
        rotatable={rotatable}
        cropBoxMovable={cropBoxMovable}
        cropBoxResizable={cropBoxResizable}
        // crop={this._crop.bind(this)} // calls demo crop method
        crop={this.cropImage}
      />
    );
  }
}

CropperInput.defaultProps = {
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  cropInputHeight: 200,
  aspectRatio: null,
  // dragMode allows user move the crop around the box 'none' 'move' 'crop'
  dragMode: "none",
  guides: false,
  scalable: false,
  rotatable: false,
  cropBoxMovable: true,
  cropBoxResizable: true
};

export default CropperInput;
