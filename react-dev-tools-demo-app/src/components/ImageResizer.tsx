import { ChangeEvent, useRef, useState } from "react";
import { resizeImage } from "../utils/resizeImage";

export function ImageResizer() {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [resizedImage, setResizedImage] = useState<Blob>();
  const imgRef = useRef(null);
  const selectedImageString = selectedImageFile
    ? URL.createObjectURL(selectedImageFile)
    : "";
  let width, height;
  const resizeImageString =
    resizedImage instanceof Blob ? URL.createObjectURL(resizedImage) : "";
  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedImageFile(e.target.files?.[0] as File);
  };
  const resizeImageHandler = async () => {
    const resizeImageData = await resizeImage(selectedImageFile as File, 600);
    setResizedImage(resizeImageData);
    console.log("Resized image:", resizeImageData);
  };
  return (
    <>
      <div className="flex flex-col item-center justify-center gap-4 m-5">
        <h3 className="text-teal-500 font-bold text-2xl text-center">
          Image Resizer
        </h3>
        <p>
          <span></span>
          Width: {width} height: {height}
        </p>
        <input
          type="file"
          accept="image/jpeg, image/png"
          id="image-upload"
          name="Select an image"
          onChange={fileUploadHandler}
        />
        <p>Selected image file: {selectedImageFile?.name}</p>
        <button
          className="bg-indigo-500 text-white p-2 rounded-md shadow-md max-w-sm text-center cursor-pointer my-2"
          type="button"
          onClick={resizeImageHandler}
        >
          Resize Image
        </button>
        <div>
          <h5>Selected Image: </h5>
          <img ref={imgRef} src={selectedImageString} alt="" />
        </div>
        <div>
          <h5>Resized Image: </h5>
          <img src={resizeImageString} alt="" />
        </div>
      </div>
    </>
  );
}
