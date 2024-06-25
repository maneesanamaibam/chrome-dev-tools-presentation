export async function resizeImage(
  imageFile: File,
  width: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement("img");

      img.src = reader.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const aspect = img.width / img.height;
        canvas.width = width;
        canvas.height = width / aspect;
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        // imageDataUrl = canvas.toDataURL(imageFile.type);
        canvas.toBlob((blob) => {
          resolve(blob as Blob);
        });
      };
    };
    reader.readAsDataURL(imageFile);
    reader.onerror = reject;
  });
}
