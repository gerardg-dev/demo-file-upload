import React, { Component } from "react";
import { connect } from "react-redux";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import cssStyles from "./styles/css/default.css";
import cssModules from "./styles/css_modules/default.css";
import sassStyles from "./styles/sass/default.sass";
import scssStyles from "./styles/scss/default.scss";
import stylable from "./styles/stylable/default.st.css";
import styleObjects from "./styles/style_objects/index.js";
import styledComponents from "./styles/styled_components/index.js";

import FileUploader from "../../../../../../components/wedevlopUI/FileUploader";

import Heading from "./ui/Heading";
import Subheading from "./ui/Subheading";
import Body from "./ui/Body";
import SeeCodeButton from "./ui/SeeCodeButton";
import ExternalComponent from "./ui/ExternalComponent";
import DropzoneChildrenA from "./ui/DropzoneChildrenA";
import DropzoneChildrenB from "./ui/DropzoneChildrenB";

import { uploadFile } from "../../../../../../thunks/app_starter/Firebase/Storage";

class ExamplesWeDevlopUIFileUpload extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  fileUploadCb = (code, meta) => {
    let message = ":)";
    let error = meta && meta.error ? meta.error : undefined;
    let fileNum = meta && meta.fileNum ? meta.fileNum : undefined;
    let totalFiles = meta && meta.totalFiles ? meta.totalFiles : undefined;

    if (code === "wrong-file-requirements") {
      message = `File ${fileNum} of ${totalFiles} does not meet the requirements.`;
      NotificationManager.warning(message);
    }

    if (code === "file-upload-in-process") {
      message = `Uploading file ${fileNum} of ${totalFiles}`;
      NotificationManager.info(message, code);
    }

    if (code === "file-upload-success") {
      message = `File ${fileNum} of ${totalFiles} successfully uploaded!`;
      NotificationManager.success(message, code);
    }

    if (code === "file-upload-error") {
      message = `Error at file ${fileNum} of ${totalFiles}!`;
      NotificationManager.error(message, code);
    }
  };

  render() {
    return (
      <div style={styleObjects.container}>
        <h1 style={styleObjects.demo}>
          <strong>DEMO</strong>
        </h1>

        <Heading text="REPO" />
        <Subheading text="GITHUB REPOSITORY" />
        <a
          style={styleObjects.button}
          href="https://github.com/gerardg-dev/demo-file-upload"
          target="_blank"
        >
          {"SEE REPO"}
        </a>

        {/* DEMO - REQUIREMENTS -------------------------------------------- */}

        <Heading text="REQUIREMENTS" />

        <Subheading text="YOUR FIREBASE PROJECT KEYS" />
        <Body text="Generate and add your Firebase project keys, set up Storage in the Firebase console." />

        <Subheading text="FIREBASE STORAGE RULES" />
        <Body text="Keep in mind to set read/write rules in your Firebase Storage bucket, otherwise saving media on storage or preview a cropped image will not work properly." />

        {/* DEMO - COMPONENT PROPS ----------------------------------------- */}

        <Heading text="DROPZONE" />

        <Subheading text="DEFAULT FUNCTIONALITY" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/U41zEvEbi2u37IvPMZSw" />

        <Subheading text="DROPZONE TYPE - TEXT" />
        <Body text="By default, dropzoneType is 'dropbox'." />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="text"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            dropzoneTextA: { border: "solid green 3px", color: "white" },
            dropzoneTextB: { border: "solid purple 3px", color: "white" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/HkxRKVlVM8rbegJONJY6" />

        <Subheading text="DROPZONE TEXT - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="text"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            dropzoneContainer: { border: "solid 3px blue" },
            dropzoneText: { border: "solid 3px yellow" },
            dropzoneTextA: { border: "solid green 3px", color: "white" },
            dropzoneTextB: { border: "solid purple 3px", color: "white" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/gPpcUaCEeElaFWkjedkG" />

        <Subheading text="DROPZONE TEXT - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="text"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            dropzoneContainer: "border-blue-3px",
            dropzoneText: "border-yellow-3px",
            dropzoneTextA: "border-green-3px color-white",
            dropzoneTextB: "border-purple-3px color-white"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/6NfOK7263JvlLUVdQPfa" />

        <Subheading text="DROPZONE TYPE - BUTTON" />
        <Body text="By default, dropzoneType is 'dropbox'." />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="button"
          dropzoneTextA="DEMO: Click here to select files"
          animateDrop={false}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/uQLkiO7Zy75tFFkFL0oz" />

        <Subheading text="DROPZONE BUTTON - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="button"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            dropzoneButtonContainer: { border: "solid 3px blue" },
            dropzoneButton: { border: "solid 3px yellow" },
            dropzoneTextA: { border: "solid green 3px" },
            dropzoneTextB: { border: "solid purple 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/M4iMdXfUSsbg8yrB92OV" />

        <Subheading text="DROPZONE BUTTON - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="button"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            dropzoneButtonContainer: "border-blue-3px",
            dropzoneButton: "border-yellow-3px",
            dropzoneTextA: "border-green-3px",
            dropzoneTextB: "border-purple-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/7HRUa5fYc6hpeafvhDkR" />

        <Subheading text="DROPZONE TYPE - DROPBOX" />
        <Body text="By default, dropzoneType is 'dropbox'." />
        <Body text="Preview" />
        <FileUploader
          dropzoneType="dropbox"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/KT356zjZb5H1Nb3StA37" />

        <Subheading text="DROPZONE DROPBOX - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            dropzoneContainer: { border: "solid 3px blue" },
            dropzone: { border: "solid 3px yellow" },
            dropzoneTextA: { border: "solid green 3px" },
            dropzoneTextB: { border: "solid purple 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/xJqGSkYK2jB9CoqSGiRY" />

        <Subheading text="DROPZONE DROPBOX - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            dropzoneContainer: "border-blue-3px",
            dropzone: "border-yellow-3px",
            dropzoneTextA: "border-green-3px",
            dropzoneTextB: "border-purple-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/D5Ka3YVIGblatObUycAT" />

        <Subheading text="FILE TYPE - IMAGE" />
        <Body text="By default, fileType is 'image'" />
        <Body text="fileType is also used to determine if we need to use the cropper input" />
        <Body text="Preview" />
        <FileUploader
          fileType="image"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/5Ko456sfWtjTy6pI4paI" />

        <Subheading text="FILE TYPE - FILES" />
        <Body text="By default, fileType is 'image'" />
        <Body text="fileType is also used to determine if we need to use the cropper input" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/Xk7awhImJIBozmmYDvJR" />

        <Subheading text="MULTIPLE FILES - TRUE" />
        <Body text="By default, multipleFiles is false" />
        <Body text="Setting multipleFiles to true" />
        <Body text="Preview" />
        <FileUploader
          multipleFiles={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/MMAtLEiY5wVLF6OKvItO" />

        <Subheading text="ANIMATE DROP - FALSE" />
        <Body text="By default, animateDrop is true" />
        <Body text="Setting animateDrop to false" />
        <Body text="Preview" />
        <FileUploader
          animateDrop={false}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/Od7DzrsNOXDsByg5N1yg" />

        <Subheading text="FILE EXTENSIONS - ALL IMAGES" />
        <Body text="By default, fileExtensions is set to:" />
        <Body text="'image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'" />
        <Body text="Setting fileExtensions to accept only images with any image extension" />
        <Body text="Preview" />
        <FileUploader
          fileExtensions="image/*"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/uYJoiQQzDLfbyfg7b6lO" />

        <Subheading text="FILE EXTENSIONS - COMPRESSED FILES" />
        <Body text="By default, fileExtensions is set to:" />
        <Body text="'image/png, image/gif, video/*, .rar, .zip, .pdf, .jpg, .jpeg, .psd, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'" />
        <Body text="Setting fileExtensions to accept only images with any image extension" />
        <Body text="Preview" />
        <FileUploader
          fileExtensions=".rar, .zip"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/cDyheWiirlGzJ3MyyuVB" />

        <Subheading text="DEFAULT MIN AND MAX FILE SIZE" />
        <Body text="By default, minimum file size is set to 0 bytes" />
        <Body text="By default, maximum file size is set to 10 mb" />
        <Body text="Minimum or Maximum File Size must be specified in bytes" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/cDyheWiirlGzJ3MyyuVB" />

        <Subheading text="SET MIN AND MAX FILE SIZE" />
        <Body text="In this example, minimum file size is set to 10 mb" />
        <Body text="In this example, maximum file size is set to 100 mb" />
        <Body text="Minimum or Maximum File Size must be specified in bytes" />
        <Body text="Preview" />
        <FileUploader
          minBytesFileSize={10000000}
          maxBytesFileSize={100000000}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/7gv6GnY41J8U4Pxi21Eg" />

        <Subheading text="SELECTED FILES - TITLE" />
        <Body text="By default, showTitle is set to false" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          showTitle={true}
          selectedFilesTitleText="DEMO: TITLE TEXT"
        />
        <SeeCodeButton href="https://carbon.now.sh/0Y6H0juOhKS1bH46hiXv" />

        <Subheading text="SELECTED FILES - FOOTNOTE" />
        <Body text="By default, showFootnote is set to false" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          showFootnote={true}
          selectedFilesFootnoteText="DEMO: FOOTNOTE TEXT"
        />
        <SeeCodeButton href="https://carbon.now.sh/65Hug5RMS93YeORE5I45" />

        <Subheading text="UPLOAD AND CANCEL BUTTONS - SET TEXT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          cancelButtonText="DEMO: CANCEL"
          uploadButtonText="DEMO: UPLOAD"
        />
        <SeeCodeButton href="https://carbon.now.sh/9ObVK4XLlq9gRIp40DhM" />

        <Subheading text="UPLOAD AND CANCEL BUTTONS - OUTSIDE" />
        <Body text="By default, outsideButtonsMarginBottom is set to '-50px'" />
        <Body text="outsideButtonsMarginBottom value should be negative '-50px'" />
        <Body text="At this time, do not set outsideButtonsMarginBottom value greater than '-50px', will cause issues, working on this." />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          cancelButtonText="DEMO: CANCEL"
          uploadButtonText="DEMO: UPLOAD"
          outsideButtons={true}
          // outsideButtonsMarginBottom="-80px"
        />
        <SeeCodeButton href="https://carbon.now.sh/BGo354ubmUuh8WPckQMl" />

        <Subheading text="UPLOAD AND CANCEL BUTTONS - LAYOUT DIRECTION" />
        <Body text="By default, buttonsDirection is set to 'row'" />
        <Body text="Preview" />
        <FileUploader
          buttonsDirection="column"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/PfhkqFZYBhsYwMBZ1lJ6" />

        <Subheading text="UPLOAD AND CANCEL BUTTONS - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            cancelButton: { border: "solid blue 3px" },
            uploadButton: { border: "solid yellow 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/bwgR0czjeuy10TfarVgv" />

        <Subheading text="UPLOAD AND CANCEL BUTTONS - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            cancelButton: "border-blue-3px",
            uploadButton: "border-yellow-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/Yju2oc2GMPnMm47vJDbM" />

        <Subheading text="DROPZONE TEXT A AND TEXT B" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          dropzoneTextA="DEMO: Drag and drop some files here"
          dropzoneTextB="DEMO: Drop them"
        />
        <SeeCodeButton href="https://carbon.now.sh/rBfQwHmjh0a3vrzE6jd1" />

        <Subheading text="DROPZONE TEXT A AND TEXT B - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          dropzoneTextA="DEMO: Drag and drop some files here"
          dropzoneTextB="DEMO: Drop them"
          addStyle={{
            dropzoneTextA: { border: "solid blue 3px" },
            dropzoneTextB: { border: "solid yellow 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/Shk0J8ph3tnU5V0SlSYl" />

        <Subheading text="DROPZONE TEXT A AND TEXT B - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          dropzoneTextA="DEMO: Drag and drop some files here"
          dropzoneTextB="DEMO: Drop them"
          addClassName={{
            dropzoneTextA: "border-blue-3px",
            dropzoneTextB: "border-yellow-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/MdeRTsxTI8pkTRLtF1MZ" />

        <Subheading text="DROPZONE CHILDREN A AND CHILDREN B" />
        <Body text="Use this if you want to show your own components" />
        <Body text="In this example we show icons instead of text" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          dropzoneChildrenA={<DropzoneChildrenA />}
          dropzoneChildrenB={<DropzoneChildrenB />}
        />
        <SeeCodeButton href="https://carbon.now.sh/IhTJCWnLdPzKorOQ5Wz2" />

        <Subheading text="DROPZONE - FILE UPLOAD CALLBACK" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/ATaCVzv6kZ2bfoITA8Vy" />

        {/* DEMO - MODAL ------------------------------------------- */}

        <Subheading text="MODAL - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            selectedFilesAbsoluteContainer: { border: "solid 3px blue" },
            selectedFilesRelativeContainer: { border: "solid 3px yellow" },
            selectedFilesContent: { border: "solid 3px green" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/Xsb42fJgw6w3ISAUS5Qp" />

        <Subheading text="MODAL - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            selectedFilesAbsoluteContainer: "border-blue-3px",
            selectedFilesRelativeContainer: "border-yellow-3px",
            selectedFilesContent: "border-green-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/AffORmE7DXsAWvAaDFaP" />

        {/* DEMO - SINGLE IMAGE UPLOAD ------------------------------------- */}

        <Subheading text="SINGLE IMAGE UPLOAD - IMAGE MAX HEIGHT" />
        <Body text="By default, preview image maxHeight is set to 200px" />
        <Body text="In this example, we set oneImgUpload maxHeight to 100px" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            oneImgUpload: { maxHeight: "100px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/LgtplHL9tQi8r0YPNywW" />

        <Subheading text="SINGLE IMAGE UPLOAD - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            oneImgUploadContainer: { border: "solid 3px blue" },
            oneImgUpload: { border: "solid 3px yellow" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/ZhpxvYQHJTvwJCJvjrSH" />

        <Subheading text="SINGLE IMAGE UPLOAD - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            oneImgUploadContainer: "border-blue-3px",
            oneImgUpload: "border-yellow-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/CxlJnSgb2Wkc6xsz2fub" />

        {/* DEMO - CROPPER ------------------------------------------- */}

        <Heading text="CROPPER" />

        <Subheading text="CROPPER - cropImage" />
        <Body text="By default, cropImage is set to 'false'" />
        <Body text="Will not work if fileType is set to 'files'" />
        <Body text="Will not work if multipleFiles is set to 'true'" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/vEuCWqPfa1EWiyj6zjmI" />

        <Subheading text="CROPPER - cropInputHeight" />
        <Body text="By default, cropInputHeight is set to 200" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          cropInputHeight={100}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/snuV93zUU4bGFa1FTYFG" />

        <Subheading text="CROPPER - aspectRatio - null" />
        <Body text="By default, aspectRatio is set to 'null'." />
        <Body text="When aspectRatio is set to 'null', crop is free form." />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          aspectRatio={null}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/TQUKNx3HFfeewq5CiQKC" />

        <Subheading text="CROPPER - aspectRatio - 16 / 9" />
        <Body text="By default, aspectRatio is set to 'null'." />
        <Body text="When aspectRatio is set to '16 / 9', crop is a rectangle form." />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          aspectRatio={16 / 9}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/pNn021792FTltCyH6fuF" />

        <Subheading text="CROPPER - aspectRatio - 1" />
        <Body text="By default, aspectRatio is set to 'null'." />
        <Body text="When aspectRatio is set to '1', crop is a square form." />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          aspectRatio={1}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/6IsOxufdAcYE6HbXvQvn" />

        <Subheading text="CROPPER - cropBoxMovable - false" />
        <Body text="By default, cropBoxMovable is set to 'true'." />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          cropBoxMovable={false}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/plaBmohecUbA0fuPkvP0" />

        <Subheading text="CROPPER - cropBoxResizable - false" />
        <Body text="By default, cropBoxResizable is set to 'true'." />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          cropBoxResizable={false}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/gPEAgjku88ffrYq6oI6S" />

        <Subheading text="CROPPER - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            cropInput: { border: "solid blue 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/vGvcQiUPeGXzZWLQWZB9" />

        <Subheading text="CROPPER - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            cropInput: "border-blue-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/DmXpYRvwodA4vsfsEed2" />

        {/* DEMO - CROPPER - PREVIEW ---------------------------- */}

        <Heading text="CROPPER - PREVIEW" />

        {/*
          <Body text="This feature is under development." />
        */}

        <Subheading text="CROPPER - showCropPreview" />
        <Body text="By default, cropImage is set to 'false'" />
        <Body text="By default, showCropPreview is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          showCropPreview={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/4NZK88hxxNEMvnTJ8T1e" />

        <Subheading text="CROPPER - circledCropPreview" />
        <Body text="By default, cropImage is set to 'false'" />
        <Body text="By default, showCropPreview is set to 'false'" />
        <Body text="By default, circledCropPreview is set to 'false'" />
        <Body text="Don't forget to set aspectRatio to '1'" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          showCropPreview={true}
          circledCropPreview={true}
          aspectRatio={1}
          cropPreviewHeight="100px"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/0J9b5sHHjBWQDl8m1c86" />

        <Subheading text="CROPPER - cropPreviewHeight" />
        <Body text="By default, cropPreviewHeight is 200px" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          showCropPreview={true}
          cropPreviewHeight="100px"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/nxJ1vHB6w6asvdpxnyPW" />

        <Subheading text="CROP PREVIEW - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          showCropPreview={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            cropPreviewContainer: { border: "solid blue 3px" },
            cropPreview: { border: "solid yellow 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/iIz4EItm63q2MQBSMLyB" />

        <Subheading text="CROP PREVIEW - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          cropImage={true}
          showCropPreview={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            cropPreviewContainer: "border-blue-3px",
            cropPreview: "border-yellow-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/IFJzbC6EUvhLAMi37fAP" />

        {/* DEMO - FILES LIST ---------------------------------------------- */}

        <Heading text="FILES LIST" />

        <Subheading text="FILES LIST - fileType" />
        <Body text="By default, fileType is set to 'image'" />
        <Body text="By setting fileType to 'files', you will see a files list box with all the files details when you select a file." />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/Jme7rzVo13SM4BF4UA3Q" />

        <Subheading text="FILES LIST - multipleFiles" />
        <Body text="By default, fileType is set to 'image'" />
        <Body text="By setting fileType to 'files', you will see a files list box with all the files details when you select a file." />
        <Body text="By default, multipleFiles is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/npzg1KjVFIDy8RgCgBHl" />

        <Subheading text="FILES LIST - fileInfo" />
        <Body text="By default, showFileInfo and showFileName is set to 'true'" />
        <Body text="Setting showFileInfo to 'false' would not show any file information." />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/Gpqll2NmIMhXs9OzFGBZ" />

        <Subheading text="FILES LIST - fileInfo - showFilePath" />
        <Body text="By default, showFilePath is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePath={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/o1hivk6BVXgYdLdeKW5o" />

        <Subheading text="FILES LIST - fileInfo - showFileSize" />
        <Body text="By default, showFileSize is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFileSize={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/LrD5w5hkFhMKVTXuBphR" />

        <Subheading text="FILES LIST - fileInfo - showFileType" />
        <Body text="By default, showFileType is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFileType={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/sJllekXIokxNsZwDCH1o" />

        <Subheading text="FILES LIST - fileInfo - fileInfoPos" />
        <Body text="By default, fileInfoPos is set to 'center'" />
        <Body text="You can set fileInfoPos to 'topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter' or 'bottomRight'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          fileInfoPos="topRight"
          showFilePath={true}
          showFileSize={true}
          showFileType={true}
          showFileIconType={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/2uenxQ3S3vSOvmLwjj7L" />

        <Subheading text="FILES LIST - fileInfo - showFilePreview" />
        <Body text="By default, showFilePreview is set to 'false'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/h7fYzW0HgG8kDmLyLz4S" />

        <Subheading text="FILES LIST - fileInfo - filePreviewPos" />
        <Body text="By default, filePreviewPos is set to 'right'" />
        <Body text="You can set filePreviewPos to 'top', 'bottom', 'left' or 'right'" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          filePreviewPos="top"
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
        />
        <SeeCodeButton href="https://carbon.now.sh/fTtV5cyM5OntNIwvO9OJ" />

        <Subheading text="FILES LIST - filePreview - size" />
        <Body text="You can set the height with the css maxHeight property" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            listItemFilePreviewContainer: { maxHeight: "50px" },
            listItemFilePreview: { maxHeight: "50px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/ViDrISLbTfZwpID5GhQf" />

        <Subheading text="FILES LIST - STYLING WITH STYLE OBJECT" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          showFilePath={true}
          showFileSize={true}
          showFileType={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addStyle={{
            filesListContainer: { border: "solid blue 3px" },
            filesListItem: { border: "solid yellow 3px" },
            listItemFilePreviewContainer: { border: "solid green 3px" },
            listItemFilePreview: { border: "solid red 3px" },
            listItemFileInfoContainer: { border: "solid purple 3px" },
            listItemFileInfo: { border: "solid pink 3px" }
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/pZor8rKEJz6YC5waz3KL" />

        <Subheading text="FILES LIST - STYLING WITH CLASS NAME" />
        <Body text="Preview" />
        <FileUploader
          fileType="files"
          multipleFiles={true}
          showFilePreview={true}
          showFilePath={true}
          showFileSize={true}
          showFileType={true}
          fileUploadCb={this.fileUploadCb}
          uploadFileHandler={this.props.uploadFile}
          addClassName={{
            filesListContainer: "border-blue-3px",
            filesListItem: "border-yellow-3px",
            listItemFilePreviewContainer: "border-green-3px",
            listItemFilePreview: "border-red-3px",
            listItemFileInfoContainer: "border-purple-3px",
            listItemFileInfo: "border-pink-3px"
          }}
        />
        <SeeCodeButton href="https://carbon.now.sh/axPXaae0GWRhuMLf3FnR" />

        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

export default connect(mapStateToProps, {
  uploadFile
})(ExamplesWeDevlopUIFileUpload);
