import React, { Component, createRef } from "react";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import defaultStyles from "./styles/defaultStyles.js";
import defaultClassNames from "./styles/defaultClassNames.js";

import flexRow from "./styles/style_objects/flexPositions/row.js";
import flexColumn from "./styles/style_objects/flexPositions/column.js";

import cbCodes from "./cbCodes";

class FilesList extends Component {
  renderFilePreview = (
    file,
    options,
    style,
    addStyle,
    className,
    addClassName
  ) => {
    return (
      <div
        style={{
          ...style.listItemFilePreviewContainer,
          ...addStyle.listItemFilePreviewContainer
        }}
        className={`${className.listItemFilePreviewContainer} ${addClassName.listItemFilePreviewContainer}`}
      >
        {/* img, for jpeg */}
        {file.type === "image/jpeg" && (
          <img
            src={file.preview}
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          />
        )}
        {/* img, for jpg */}
        {file.type === "image/jpg" && (
          <img
            src={file.preview}
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          />
        )}
        {/* img, for png */}
        {file.type === "image/png" && (
          <img
            src={file.preview}
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          />
        )}
        {/* iFrame, for PDFs */}
        {file.type === "application/pdf" && (
          <iframe
            src={file.preview}
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          />
        )}
        {file.type === "video/quicktime" && (
          <div
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          >
            <source src={file.preview} type="video/quicktime" />
            <video poster={file.preview} />
          </div>
        )}
        {file.type === "video/mp4" && (
          <div
            style={{
              ...style.listItemFilePreview,
              ...addStyle.listItemFilePreview
            }}
            className={`${className.listItemFilePreview} ${addClassName.listItemFilePreview}`}
          >
            <source src={file.preview} type="video/mp4" />
            <video poster={file.preview} />
          </div>
        )}
        {file.type === "video/mp3" && <div></div>}
      </div>
    );
  };

  renderFileInfo = (
    file,
    options,
    style,
    addStyle,
    className,
    addClassName
  ) => {
    const formatFileSize = (bytesFileSize, fileSizeFormat) => {
      if (fileSizeFormat === null || fileSizeFormat === undefined) {
        let division;
        division = bytesFileSize / 1000; // KB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " KB";
        }
        division = bytesFileSize / 1000000; // MB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " MB";
        }
        division = bytesFileSize / 1000000000; // GB
        if (division < 1000) {
          return parseFloat(division.toFixed(2)) + " GB";
        }
      }
      if (fileSizeFormat === "KB") {
        return bytesFileSize / 1000;
      }
      if (fileSizeFormat === "MB") {
        return bytesFileSize / 1000000;
      }
      if (fileSizeFormat === "GB") {
        return bytesFileSize / 1000000000;
      }
    };

    let centerLayoutStyle = {};
    //
    // column - top
    //
    if (options.fileInfoPos === "topLeft") {
      centerLayoutStyle = flexColumn.topLeft;
    }
    if (options.fileInfoPos === "topCenter") {
      centerLayoutStyle = flexColumn.topCenter;
    }
    if (options.fileInfoPos === "topRight") {
      centerLayoutStyle = flexColumn.topRight;
    }
    //
    // column - center
    //
    if (options.fileInfoPos === "centerLeft") {
      centerLayoutStyle = flexColumn.centerLeft;
    }
    if (options.fileInfoPos === "center") {
      centerLayoutStyle = flexColumn.center;
    }
    if (options.fileInfoPos === "centerRight") {
      centerLayoutStyle = flexColumn.centerRight;
    }
    //
    // column - bottom
    //
    if (options.fileInfoPos === "bottomLeft") {
      centerLayoutStyle = flexColumn.bottomLeft;
    }
    if (options.fileInfoPos === "bottomCenter") {
      centerLayoutStyle = flexColumn.bottomCenter;
    }
    if (options.fileInfoPos === "bottomRight") {
      centerLayoutStyle = flexColumn.bottomRight;
    }

    return (
      <div
        style={{
          ...centerLayoutStyle,
          ...style.listItemFileInfoContainer,
          ...addStyle.listItemFileInfoContainer
        }}
        className={`${className.listItemFileInfoContainer} ${addClassName.listItemFileInfoContainer}`}
      >
        {options.showFileName === true && (
          <p
            style={{
              ...style.listItemFileInfo,
              ...addStyle.listItemFileInfo
            }}
            className={`${className.listItemFileInfo} ${addClassName.listItemFileInfo}`}
          >
            {file.name}
          </p>
        )}
        {options.showFilePath === true && (
          <p
            style={{
              ...style.listItemFileInfo,
              ...addStyle.listItemFileInfo
            }}
            className={`${className.listItemFileInfo} ${addClassName.listItemFileInfo}`}
          >
            {file.path}
          </p>
        )}
        {options.showFileSize === true && (
          <p
            style={{
              ...style.listItemFileInfo,
              ...addStyle.listItemFileInfo
            }}
            className={`${className.listItemFileInfo} ${addClassName.listItemFileInfo}`}
          >
            {formatFileSize(file.size)}
          </p>
        )}
        {options.showFileType === true && (
          <p
            style={{
              ...style.listItemFileInfo,
              ...addStyle.listItemFileInfo
            }}
            className={`${className.listItemFileInfo} ${addClassName.listItemFileInfo}`}
          >
            {file.type}
          </p>
        )}
      </div>
    );
  };

  renderFiles = (files, options, style, addStyle, className, addClassName) => {
    if (files && files.length > 0) {
      return files.map((file, index) => {
        let addListItemBr = true;

        if (index === files.length - 1) {
          addListItemBr = false;
        }

        return (
          <div
            key={index}
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <div
              style={{
                ...style.filesListItem,
                ...addStyle.filesListItem
              }}
              className={`${className.filesListItem} ${addClassName.filesListItem}`}
            >
              {options.showFilePreview === true &&
                options.showFileInfo === true && (
                  <div
                    style={{
                      ...{
                        width: "100%",
                        height: "100%"
                      },
                      ...flexColumn.center
                    }}
                  >
                    {options.filePreviewPos === "top" && (
                      <div
                        style={{
                          ...{
                            // border: "dotted red 10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFilePreview(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                        <div style={{ width: "0px", height: "10px" }} />
                        {this.renderFileInfo(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                      </div>
                    )}
                    {options.filePreviewPos === "bottom" && (
                      <div
                        style={{
                          ...{
                            // border: "dotted red 10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFileInfo(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                        <div style={{ width: "0px", height: "10px" }} />
                        {this.renderFilePreview(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                      </div>
                    )}
                    {options.filePreviewPos === "left" && (
                      <div
                        style={{
                          ...{
                            // border: "dotted red 10px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFilePreview(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                        <div style={{ width: "10px", height: "0px" }} />
                        {this.renderFileInfo(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                      </div>
                    )}
                    {options.filePreviewPos === "right" && (
                      <div
                        style={{
                          ...{
                            // border: "dotted red 10px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%"
                          },
                          ...{}
                        }}
                      >
                        {this.renderFileInfo(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                        <div style={{ width: "10px", height: "0px" }} />
                        {this.renderFilePreview(
                          file,
                          options,
                          style,
                          addStyle,
                          className,
                          addClassName
                        )}
                      </div>
                    )}
                  </div>
                )}

              {options.showFilePreview === true &&
                options.showFileInfo === false && (
                  <div
                    style={{
                      ...{
                        width: "100%",
                        height: "100%"
                      },
                      ...flexColumn.center
                    }}
                  >
                    {this.renderFilePreview(
                      file,
                      options,
                      style,
                      addStyle,
                      className,
                      addClassName
                    )}
                  </div>
                )}

              {options.showFilePreview === false &&
                options.showFileInfo === true && (
                  <div
                    style={{
                      ...{ width: "100%", height: "100%" },
                      ...{},
                      ...flexColumn.center
                    }}
                  >
                    {this.renderFileInfo(
                      file,
                      options,
                      style,
                      addStyle,
                      className,
                      addClassName
                    )}
                  </div>
                )}
            </div>
            {/* addListItemBr === true && <br /> */}
            {addListItemBr === true && (
              <div style={{ width: "0px", height: "10px" }} />
            )}
          </div>
        );
      });
    } else {
      return (
        <div>
          <p style={{ color: "white" }}>No Files Found</p>
        </div>
      );
    }
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

    const { files } = this.props;

    let {
      showFileInfo,
      showFileName,
      showFilePath,
      showFilePreview,
      showFileSize,
      showFileType,
      showFileIconType
    } = this.props;

    const { filePreviewPos, fileInfoPos } = this.props;

    if (showFilePreview === true) {
      showFileIconType = false;
    }

    return (
      <div
        style={{
          ...style.filesListContainer,
          ...{
            overflowY: files.length < 2 ? "hidden" : "scroll"
          },
          ...addStyle.filesListContainer
        }}
        className={`${className.filesListContainer} ${addClassName.filesListContainer}`}
      >
        {this.renderFiles(
          files,
          {
            showFileInfo,
            showFileName,
            showFilePath,
            showFilePreview,
            showFileSize,
            showFileType,
            showFileIconType,
            filePreviewPos,
            fileInfoPos
          },
          style,
          addStyle,
          className,
          addClassName
        )}
      </div>
    );
  }
}

FilesList.defaultProps = {
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  files: [],
  //
  showFileInfo: true,
  showFileName: true,
  showFilePath: false,
  showFilePreview: false,
  showFileSize: false,
  showFileType: false,
  showFileIconType: false,
  //
  filePreviewPos: "right", // "top" "bottom" "left" "right"
  fileInfoPos: "center"
};

export default FilesList;
