// Documentation
// https://react-dropzone.netlify.com/
// https://github.com/react-dropzone/react-dropzone

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

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

const DropzoneInput = props => {
  const style = { ...defaultStyles.style, ...props.style };
  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };
  const className = { ...defaultClassNames.className, ...props.className };
  const addClassName = {
    ...defaultClassNames.addClassName,
    ...props.addClassName
  };

  const { dropzoneStyle, dropzoneClassName } = props;

  const { setFiles, multipleFiles, animateDrop } = props;

  const {
    fileExtensions,
    minBytesFileSize,
    maxBytesFileSize,
    dropzoneTextA,
    dropzoneTextB
  } = props;

  const { fileUploadCb } = props;

  const { children } = props;
  const { dropzoneChildrenA, dropzoneChildrenB } = props;

  const onDrop = useCallback(
    acceptedFiles => {
      // Files Not Accepted
      if (acceptedFiles && acceptedFiles.length === 0) {
        if (fileUploadCb !== null) {
          let code = cbCodes.wrongFileRequirements;
          fileUploadCb(code, { fileNum: 0, totalFiles: 0 });
        }
      }

      // Files Accepted
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: multipleFiles,
    accept: fileExtensions,
    minSize: minBytesFileSize,
    maxSize: maxBytesFileSize
  });

  const renderElementA = () => {
    if (dropzoneChildrenA === null) {
      return (
        <div
          style={{
            ...style.dropzoneTextA,
            ...addStyle.dropzoneTextA
          }}
          className={`${className.dropzoneTextA} ${addClassName.dropzoneTextA}`}
        >
          {dropzoneTextA}
        </div>
      );
    } else {
      return <div>{dropzoneChildrenA}</div>;
    }
  };

  const renderElementB = () => {
    if (dropzoneChildrenB === null) {
      return (
        <div
          style={{
            ...style.dropzoneTextB,
            ...addStyle.dropzoneTextB
          }}
          className={`${className.dropzoneTextB} ${addClassName.dropzoneTextB}`}
        >
          {dropzoneTextB}
        </div>
      );
    } else {
      return <div>{dropzoneChildrenB}</div>;
    }
  };

  const renderElements = () => {
    if (animateDrop === true && isDragActive === false) {
      return <div>{renderElementA()}</div>;
    }
    if (animateDrop === true && isDragActive === true) {
      return <div>{renderElementB()}</div>;
    }

    return <div>{renderElementA()}</div>;
  };

  return (
    <div
      {...getRootProps()}
      style={dropzoneStyle}
      className={dropzoneClassName}
    >
      <input {...getInputProps()} />
      {renderElements()}
      {children}
    </div>
  );
};

DropzoneInput.defaultProps = {
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  dropzoneStyle: {},
  dropzoneClassName: "",
  //
  multipleFiles: false, // true, false
  animateDrop: true,
  //
  fileExtensions:
    "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // min and max file size in bytes (1 Megabyte = 1048576 Bytes)
  minBytesFileSize: 0,
  maxBytesFileSize: 1000000000, // 100mb
  dropzoneTextA:
    "DropzoneInput.js - Drag 'n' drop some files here, or click to select files",
  dropzoneTextB: "DropzoneInput.js - Drop the files here...",
  //
  fileUploadCb: null,
  //
  dropzoneChildrenA: null,
  dropzoneChildrenB: null
  //
};

export default DropzoneInput;
