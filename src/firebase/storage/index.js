import { firebase, firestore } from "../firebase";

export const uploadFile = async (storagePath, filename, file) => {
  return new Promise(function(resolve, reject) {
    var storageRef = firebase.storage().ref(`${storagePath}${filename}`);
    storageRef
      .put(file)
      .then(function(snapshot) {
        snapshot.ref.getDownloadURL().then(async function(downloadURL) {
          console.log("File available at: ", downloadURL);
          // await firestore
          //   .collection("fs_test_images")
          //   .add({ name: filename, url: downloadURL });
          // console.log("File Upload Entire Process Success !!!");
          resolve(downloadURL);
        });
      })
      .catch(error => {
        console.log("Firebase file upload error:");
        console.log(error);
        // return error;
        reject(error);
      });
  });
};

export const firebaseStorage = {
  uploadFile
};
