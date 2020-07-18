import React, { useState, useEffect } from "react";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import FilesList from "./FilesList";

import cbCodes from "./cbCodes";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import defaultStyles from "./styles/defaultStyles.js";
import defaultClassNames from "./styles/defaultClassNames.js";

const FileUploader = props => {
  const style = { ...defaultStyles.style, ...props.style };
  const addStyle = { ...defaultStyles.addStyle, ...props.addStyle };
  const className = { ...defaultClassNames.className, ...props.className };
  const addClassName = {
    ...defaultClassNames.addClassName,
    ...props.addClassName
  };

  // FileUploader -------------------------------------------------------------

  let {
    showTitle,
    showFootnote,
    cropImage,
    showCropPreview,
    circledCropPreview,
    outsideButtons
  } = props;

  let { cropPreviewHeight, outsideButtonsMarginBottom } = props;

  let {
    fileType,
    dropzoneType,
    selectedFilesTitleText,
    selectedFilesFootnoteText,
    cancelButtonText,
    uploadButtonText,
    buttonsDirection
  } = props;

  let { uploadFileHandler, uploadSuccessCb, uploadErrorCb } = props;

  let { cancelBtnChildren, uploadBtnChildren } = props;

  // DropzoneInput -------------------------------------------------------------

  let { multipleFiles, animateDrop } = props;

  let {
    fileExtensions,
    minBytesFileSize,
    maxBytesFileSize,
    dropzoneTextA,
    dropzoneTextB
  } = props;

  const { fileUploadCb } = props;

  let { dropzoneChildrenA, dropzoneChildrenB } = props;

  // CropperInput --------------------------------------------------------------

  let { cropInputHeight } = props;

  const {
    aspectRatio,
    dragMode,
    guides,
    scalable,
    rotatable,
    cropBoxMovable,
    cropBoxResizable
  } = props;

  // FilesList -----------------------------------------------------------------

  // const { showFilesList } = props;
  let showFilesList = false;

  const {
    showFileInfo,
    showFileName,
    showFilePath,
    showFilePreview,
    showFileSize,
    showFileType,
    showFileIconType
  } = props;

  const { filePreviewPos, fileInfoPos } = props;

  // ---------------------------------------------------------------------------
  // CONDITIONS - CAREFUL DO NOT TOUCH
  // ---------------------------------------------------------------------------

  if (fileType !== "image" && fileType !== "files") fileType = "image";

  // Conditional change of options...
  if (fileType === "files") {
    cropImage = false;
    showFilesList = true;
  }
  if (multipleFiles === true) {
    cropImage = false;
    showFilesList = true;
  }
  if (cropImage === false) {
    showCropPreview = false;
  }
  if (circledCropPreview === true) {
    // should force aspect ratio to 1:1
  }

  // ---------------------------------------------------------------------------
  // STATE
  // ---------------------------------------------------------------------------

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const isFiles = files.length > 0 ? true : false;

  // ---------------------------------------------------------------------------
  // HANDLERS
  // ---------------------------------------------------------------------------

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const handleFileUploadCb = (code, meta) => {
    if (fileUploadCb !== null || fileUploadCb !== undefined) {
      fileUploadCb(code, meta);
    }
  };

  const handleUploadFile = async () => {
    let code = "";

    if (fileType === "image" && cropImage === true) {
      // uploading file...
      code = cbCodes.fileUploadInProcess;
      handleFileUploadCb(code, { fileNum: 1, totalFiles: 1 });
      //
      try {
        await uploadFileHandler(image, files[0].name);
        // file uploaded √
        code = cbCodes.fileUploadSuccess;
        handleFileUploadCb(code, { fileNum: 1, totalFiles: 1 });
      } catch (error) {
        // file upload failed X
        code = cbCodes.fileUploadError;
        handleFileUploadCb(code, {
          error,
          fileNum: 1,
          totalFiles: 1
        });
      }
    }

    if (fileType === "image" && cropImage === false) {
      await files.map(async (file, index) => {
        // uploading file...
        code = cbCodes.fileUploadInProcess;
        handleFileUploadCb(code, {
          fileNum: index + 1,
          totalFiles: files.length
        });
        //
        try {
          await uploadFileHandler(file, file.name);
          // file uploaded √
          code = cbCodes.fileUploadSuccess;
          handleFileUploadCb(code, {
            fileNum: index + 1,
            totalFiles: files.length
          });
        } catch (error) {
          // file upload failed X
          code = cbCodes.fileUploadError;
          handleFileUploadCb(code, {
            error,
            fileNum: index + 1,
            totalFiles: files.length
          });
        }
      });
    }

    if (fileType === "files") {
      await files.map(async (file, index) => {
        // uploading file...
        code = cbCodes.fileUploadInProcess;
        handleFileUploadCb(code, {
          fileNum: index + 1,
          totalFiles: files.length
        });
        //
        try {
          await uploadFileHandler(file, file.name);
          // file uploaded √
          code = cbCodes.fileUploadSuccess;
          handleFileUploadCb(code, {
            fileNum: index + 1,
            totalFiles: files.length
          });
        } catch (error) {
          // file upload failed X
          code = cbCodes.fileUploadError;
          handleFileUploadCb(code, {
            error,
            fileNum: index + 1,
            totalFiles: files.length
          });
        }
      });
    }

    handleCancelCrop();
  };

  // ---------------------------------------------------------------------------
  // DROP ZONE INPUT
  // ---------------------------------------------------------------------------

  const renderDropzoneInput = (style, addStyle, className, addClassName) => {
    if (
      dropzoneType === null ||
      dropzoneType === undefined ||
      dropzoneType.length === 0
    ) {
      dropzoneType = "dropbox";
    }

    let dropzoneContainerStyle = {};
    let dropzoneContainerAddStyle = {};
    let dropzoneStyle = {};
    let dropzoneContainerClassName = "";
    let dropzoneContainerAddClassName = "";
    let dropzoneClassName = "";

    if (dropzoneType === "dropbox") {
      dropzoneContainerStyle = style.dropzoneContainer;
      dropzoneContainerAddStyle = addStyle.dropzoneContainer;
      dropzoneStyle = style.dropzone;
      dropzoneContainerClassName = className.dropzoneContainer;
      dropzoneContainerAddClassName = addClassName.dropzoneContainer;
      dropzoneClassName = className.dropzone;
    }
    if (dropzoneType === "text") {
      dropzoneStyle = style.dropzoneText;
      dropzoneClassName = className.dropzoneText;
    }
    if (dropzoneType === "button") {
      dropzoneContainerStyle = style.dropzoneButtonContainer;
      dropzoneContainerAddStyle = addStyle.dropzoneButtonContainer;
      dropzoneStyle = style.dropzoneButton;
      dropzoneContainerClassName = className.dropzoneButtonContainer;
      dropzoneContainerAddClassName = addClassName.dropzoneButtonContainer;
      dropzoneClassName = className.dropzoneButton;
    }
    return (
      <div
        style={{ ...dropzoneContainerStyle, ...dropzoneContainerAddStyle }}
        className={`${dropzoneContainerClassName} ${dropzoneContainerAddClassName}`}
      >
        <DropzoneInput
          setFiles={setFiles}
          multipleFiles={multipleFiles}
          fileExtensions={fileExtensions}
          minBytesFileSize={minBytesFileSize}
          maxBytesFileSize={maxBytesFileSize}
          animateDrop={animateDrop}
          dropzoneTextA={dropzoneTextA}
          dropzoneTextB={dropzoneTextB}
          dropzoneChildrenA={dropzoneChildrenA}
          dropzoneChildrenB={dropzoneChildrenB}
          fileUploadCb={fileUploadCb}
          //
          style={style}
          addStyle={addStyle}
          className={className}
          addClassName={addClassName}
          //
          dropzoneStyle={{ ...dropzoneStyle, ...addStyle.dropzone }}
          dropzoneClassName={`${dropzoneClassName} ${addClassName.dropzone}`}
        />
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // BUTTONS
  // ---------------------------------------------------------------------------

  const renderButtons = (style, addStyle, className, addClassName) => {
    let separatorStyle = {};
    if (buttonsDirection === "column") {
      separatorStyle = { height: "10px" };
    }
    if (buttonsDirection === "row") {
      separatorStyle = { width: "20px" };
    }

    return (
      <div style={{ display: "flex", flexDirection: buttonsDirection }}>
        <button
          onClick={handleCancelCrop}
          style={{ ...style.cancelButton, ...addStyle.cancelButton }}
          className={`${className.cancelButton} ${addClassName.cancelButton}`}
        >
          {cancelButtonText}
        </button>
        <div style={separatorStyle} />
        <button
          onClick={handleUploadFile}
          style={{ ...style.uploadButton, ...addStyle.uploadButton }}
          className={`${className.uploadButton} ${addClassName.uploadButton}`}
        >
          {uploadButtonText}
        </button>
      </div>
    );
  };

  // ---------------------------------------------------------------------------
  // INPUT CONTENT
  // ---------------------------------------------------------------------------

  const renderInputContent = (style, addStyle, className, addClassName) => {
    // console.log("files");
    // console.log(files);

    return (
      <div
      // style={{ border: "solid orange 10px" }}
      >
        {/* RENDER INPUT TYPE ********************************=************* */}
        {renderDropzoneInput(style, addStyle, className, addClassName)}

        {/* RENDER SELECTED CONTENT ********************************=******* */}

        {files.length > 0 && (
          <div
            style={{
              ...style.selectedFilesAbsoluteContainer,
              ...addStyle.selectedFilesAbsoluteContainer
            }}
            className={`${className.selectedFilesAbsoluteContainer} ${addClassName.selectedFilesAbsoluteContainer}`}
          >
            <div
              style={{
                ...style.selectedFilesRelativeContainer,
                ...addStyle.selectedFilesRelativeContainer
              }}
              className={`${className.selectedFilesRelativeContainer} ${addClassName.selectedFilesRelativeContainer}`}
            >
              <div
                style={{
                  ...style.selectedFilesContent,
                  ...addStyle.selectedFilesContent
                }}
                className={`${className.selectedFilesContent} ${addClassName.selectedFilesContent}`}
              >
                {/* TITLE TEXT ***********************************=********* */}
                {showTitle === true && (
                  <p
                    style={{
                      ...style.selectedFilesTitleText,
                      ...addStyle.selectedFilesTitleText
                    }}
                    className={`${className.selectedFilesTitleText} ${addClassName.selectedFilesTitleText}`}
                  >
                    {selectedFilesTitleText}
                  </p>
                )}

                {/* RENDER CROP INPUT ****************************=********* */}
                {cropImage === true && (
                  <div
                    style={{
                      ...style.imgPreviewAndCropContainer,
                      ...addStyle.imgPreviewAndCropContainer
                    }}
                    className={`${className.imgPreviewAndCropContainer} ${addClassName.imgPreviewAndCropContainer}`}
                  >
                    {/* RENDER CROPPED IMAGE PREVIEW *********************** */}
                    {showCropPreview === true && (
                      <div
                        style={{
                          ...style.cropPreviewContainer,
                          ...{ height: cropPreviewHeight },
                          ...addStyle.cropPreviewContainer
                        }}
                        className={`${className.cropPreviewContainer} ${addClassName.cropPreviewContainer}`}
                      >
                        <div
                          style={{
                            ...style.cropPreview,
                            ...{
                              borderRadius: circledCropPreview ? "1000px" : "",
                              minWidth: circledCropPreview ? "10px" : "",
                              minHeight: circledCropPreview ? "10px" : "",
                              maxWidth: circledCropPreview ? "2000px" : "",
                              maxHeight: circledCropPreview ? "2000px" : ""
                            },
                            ...addStyle.cropPreview
                          }}
                          // className="img-preview"
                          className={`img-preview ${className.cropPreview} ${addClassName.cropPreview}`}
                        />
                      </div>
                    )}

                    {cropImage === true && <br />}

                    {/* RENDER CROPPER ************************************* */}
                    <CropperInput
                      setImage={setImage}
                      imagePreview={files.length > 0 ? files[0].preview : ""}
                      cropInputHeight={cropInputHeight}
                      aspectRatio={aspectRatio}
                      //
                      dragMode={dragMode}
                      guides={guides}
                      scalable={scalable}
                      rotatable={rotatable}
                      cropBoxMovable={cropBoxMovable}
                      cropBoxResizable={cropBoxResizable}
                      //
                      style={style}
                      addStyle={addStyle}
                      className={className}
                      addClassName={addClassName}
                    />
                  </div>
                )}

                {/* RENDER FILES LIST ************************************** */}
                {cropImage === false && showFilesList === true && (
                  <div style={{ width: "100%" }}>
                    {files.length > 0 && (
                      <div style={{ width: "100%" }}>
                        <FilesList
                          // {...props}
                          files={files}
                          showFileInfo={showFileInfo}
                          showFileName={showFileName}
                          showFilePath={showFilePath}
                          showFilePreview={showFilePreview}
                          showFileSize={showFileSize}
                          showFileType={showFileType}
                          showFileIconType={showFileIconType}
                          filePreviewPos={filePreviewPos}
                          fileInfoPos={fileInfoPos}
                          //
                          style={style}
                          addStyle={addStyle}
                          className={className}
                          addClassName={addClassName}
                        />
                      </div>
                    )}
                  </div>
                )}

                {cropImage === false &&
                  showFilesList === false &&
                  multipleFiles === false && (
                    <div
                      style={{
                        ...style.oneImgUploadContainer,
                        ...addStyle.oneImgUploadContainer
                      }}
                      className={`${className.oneImgUploadContainer} ${addClassName.oneImgUploadContainer}`}
                    >
                      <img
                        src={files[0].preview}
                        style={{
                          ...style.oneImgUpload,
                          ...addStyle.oneImgUpload
                        }}
                        className={`${className.oneImgUpload} ${addClassName.oneImgUpload}`}
                      />
                    </div>
                  )}

                {/* FOOTNOTE *************************************=********* */}
                {showFootnote === true && (
                  <p
                    style={{
                      ...style.selectedFilesFootnoteText,
                      ...addStyle.selectedFilesFootnoteText
                    }}
                    className={`${className.selectedFilesFootnoteText} ${addClassName.selectedFilesFootnoteText}`}
                  >
                    <br />
                    {selectedFilesFootnoteText}
                    <br />
                  </p>
                )}

                {/* BUTTONS INSIDE SELECTED CONTENT BOX **********=********* */}
                {outsideButtons === false && (
                  <div style={{ display: "flex" }}>
                    {renderButtons(style, addStyle, className, addClassName)}
                  </div>
                )}
                {/* BUTTONS OUTSIDE SELECTED CONTENT BOX ********************* */}
                {outsideButtons === true && (
                  <div style={{ marginBottom: outsideButtonsMarginBottom }}>
                    {renderButtons(style, addStyle, className, addClassName)}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>{renderInputContent(style, addStyle, className, addClassName)}</div>
  );
};

FileUploader.defaultProps = {
  id: null,
  style: {},
  addStyle: {},
  className: {},
  addClassName: {},
  //
  cropPreviewHeight: "200px",
  cropInputHeight: 300,
  //
  // FileUploader ----------------------------------------------------------------
  //
  dropzoneType: "dropbox", // "dropbox", "text", "button"
  fileType: "image", // "image", "files"
  selectedFilesTitleText: "PREVIEW SELECTED FILES",
  selectedFilesFootnoteText: "* By default, max file size accepted is 1GB.",
  cancelButtonText: "CANCEL",
  uploadButtonText: "UPLOAD",
  buttonsDirection: "row", // "row" "column"
  outsideButtonsMarginBottom: "-50px",
  //
  showTitle: false,
  showFootnote: false,
  outsideButtons: false, // true, false
  //
  cropImage: false, // true, false
  showCropPreview: false, // true, false
  circledCropPreview: false, // true, false
  //
  // DropzoneInput -------------------------------------------------------------
  //
  // conditionals
  //
  multipleFiles: false, // true, false
  animateDrop: true,
  //
  // options
  //
  fileExtensions:
    "image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // // min and max file size in bytes (1 Megabyte = 1048576 Bytes)
  // minBytesFileSize: 0,
  // maxBytesFileSize: 1048576000, // 1000 * 1048576 = 1GB
  dropzoneTextA: "Drag and drop some files here",
  dropzoneTextB: "Drop them",
  //
  dropzoneChildrenA: null,
  dropzoneChildrenB: null
};

export default FileUploader;
