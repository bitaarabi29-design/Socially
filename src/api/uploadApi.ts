import api from "../lib/axios";

type UploadImageResponse = {
  data?: {
    uuid?: string;
    fileId?: string;
    id?: string;
    file?: {
      uuid?: string;
      id?: string;
    };
  };
  uuid?: string;
  fileId?: string;
  id?: string;
  file?: string;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post<UploadImageResponse>("/api/upload", formData);
  const imageId =
    response.data.data?.uuid ??
    response.data.data?.fileId ??
    response.data.data?.id ??
    response.data.data?.file?.uuid ??
    response.data.data?.file?.id ??
    response.data.uuid ??
    response.data.fileId ??
    response.data.id ??
    response.data.file;

  if (!imageId) {
    throw new Error("Image upload did not return an image ID");
  }

  return imageId;
};
