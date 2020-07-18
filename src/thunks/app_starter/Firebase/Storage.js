import { firebaseStorage } from "../../../firebase/storage";

const storagePath = "demo_file_upload/";

export const uploadFile = (file, filename) => {
  return async dispatch => {
    try {
      const upload = await firebaseStorage.uploadFile(
        storagePath,
        filename,
        file
      );
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
