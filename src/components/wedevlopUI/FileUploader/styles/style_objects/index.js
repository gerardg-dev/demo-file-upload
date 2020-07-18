const defaultFontFamily = "Roboto, Open Sans, Segoe UI, sans-serif";
const defaultFontColor = "rgba(0, 0, 0, 1.0)";
const defaultFontSize = "14px";
const defaultFontWeight = 500;

const dropzoneContainer = {
  border: "solid lightBlue 5px",
  borderRadius: "10px",
  backgroundColor: "lightGray",
  width: "100%",
  height: "100%",
  minWidth: "100px",
  minHeight: "100px",
  maxWidth: "400px",
  maxHeight: "300px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const dropzone = {
  border: "dashed white 2px",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  color: "white",
  fontSize: "12px",
  minWidth: "200px",
  minHeight: "100px",
  maxWidth: "200px",
  maxHeight: "100px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const dropzoneText = {
  // border: "solid pink 5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  textAlign: "center",
  minWidth: "200px",
  minHeight: "40px",
  maxWidth: "200px",
  maxHeight: "40px"
};

const dropzoneButtonContainer = {};

const dropzoneButton = {
  // border: "solid yellow 5px",
  backgroundColor: "lightBlue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "200px",
  minHeight: "60px",
  maxWidth: "200px",
  maxHeight: "60px",
  borderRadius: "10px",
  padding: "10px",
  color: "white",
  fontSize: "12px",
  textAlign: "center"
};

const selectedFilesAbsoluteContainer = {
  // border: "solid yellow 5px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "auto"
};

const selectedFilesRelativeContainer = {
  // border: "solid orange 5px",
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "auto"
};

const selectedFilesContent = {
  // border: "solid red 5px",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 1.0)",
  // width: "100%",
  // minWidth: "200px",
  maxWidth: "100%",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const selectedFilesTitleText = {
  // border: "solid lightGray 5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "lightGray",
  fontSize: "12px"
};

const selectedFilesFootnoteText = {
  // border: "solid red 5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "red",
  fontSize: "12px"
};

const cancelButton = {
  // border: "solid darkBlue 5px",
  border: "none",
  backgroundColor: "red",
  minHeight: "35px",
  minWidth: "50px",
  overflow: "hidden",
  borderRadius: "10px",
  color: "white",
  fontSize: "12px"
};

const uploadButton = {
  // border: "solid darkBlue 5px",
  border: "none",
  backgroundColor: "lightGreen",
  minHeight: "35px",
  minWidth: "50px",
  overflow: "hidden",
  borderRadius: "10px",
  color: "white",
  fontSize: "12px"
};

const imgPreviewAndCropContainer = {
  // border: "solid red 5px",
  padding: 0,
  marginBottom: "10px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%"
};

const cropPreviewContainer = {
  // border: "solid pink 5px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px"
};

const cropPreview = {
  // border: "solid lightBlue 3px",
  overflow: "hidden",
  width: "500px",
  height: "200px",
  minWidth: "1px",
  minHeight: "1px",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%"
};

const cropInput = {
  // border: "solid lightGreen 5px",
  marginTop: -15,
  maxWidth: "100%",
  overflow: "hidden"
};

const filesListContainer = {
  borderRadius: "10px",
  width: "100%",
  minWidth: "100px",
  maxWidth: "900px",
  maxHeight: "400px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "10px",
  overflowX: "hidden",
  overflowY: "scroll",
  boxSizing: "contentBox",
  marginBottom: "10px"
};

const filesListItem = {
  // border: "solid yellow 5px",
  display: "flex",
  backgroundColor: "white",
  width: "100%",
  minWidth: "40px",
  minHeight: "2px",
  maxWidth: "600px",
  borderRadius: "8px",
  padding: "10px",
  color: "lightGray"
};

const listItemFilePreviewContainer = {
  // border: "solid red 5px",
  flex: 0.5,
  width: "100%",
  height: "100%",
  backgroundColor: "lightGray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const listItemFilePreview = {
  // border: "solid purple 5px",
  width: "100%",
  height: "100%",
  maxHeight: "150px", // key point is to set the size of the file preview
  objectFit: "contain", // "cover"
  margin: 0
};

const listItemFileInfoContainer = {
  // border: "solid lightGray 5px",
  flex: 0.5,
  width: "100%",
  height: "100%",
  minWidth: "2px",
  minHeight: "2px",
  maxWidth: "100%",
  maxHeight: "100%",
  padding: "10px",
  color: "lightGray"
};

const listItemFileInfo = {
  // border: "solid gray 5px",
  width: "100%",
  height: "100%",
  minWidth: "2px",
  maxWidth: "100%",
  maxHeight: "100%",
  margin: 0,
  fontSize: "12px"
};

const oneImgUploadContainer = {
  // border: "solid red 3px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0)",
  marginBottom: "10px"
};

const oneImgUpload = {
  // border: "solid black 5px",
  width: "100%",
  maxHeight: "200px",
  objectFit: "contain"
};

export default {
  // Dropzone Types ------------------------------------------------------------
  //
  dropzoneContainer,
  dropzone,
  dropzoneText,
  dropzoneButtonContainer,
  dropzoneButton,
  //
  // Modal Layout --------------------------------------------------------------
  //
  selectedFilesAbsoluteContainer,
  selectedFilesRelativeContainer,
  selectedFilesContent,
  //
  // Modal Elements ------------------------------------------------------------
  //
  selectedFilesTitleText,
  selectedFilesFootnoteText,
  cancelButton,
  uploadButton,
  //
  // Container for Cropper and Crop Preview ------------------------------------
  //
  imgPreviewAndCropContainer,
  //
  // Crop Preview
  //
  cropPreviewContainer,
  cropPreview,
  //
  // Cropper
  //
  cropInput,
  //
  // Container for the Files List (files to upload) ----------------------------
  //
  filesListContainer,
  filesListItem,
  //
  // File Preview Box
  //
  listItemFilePreviewContainer,
  listItemFilePreview,
  //
  // File Info Box
  //
  listItemFileInfoContainer,
  listItemFileInfo,
  //
  // Single Img Upload ---------------------------------------------------------
  //
  oneImgUploadContainer,
  oneImgUpload
};
