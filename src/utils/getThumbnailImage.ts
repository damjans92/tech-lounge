export const getThumbnailImage = (image: string) => {
  const imageName = image.split(".");
  return `${imageName[0]}_tn.${imageName[1]}`;
};
