import { Fragment } from "react/jsx-runtime";
import { ImageProps } from "../component/type";
import ImageCustom from "../component/ImageCustom";
import getPhotos from "./photos-loader";

const PhotoPage = () => {
  const itemData = getPhotos();
  return (
    <div className="photos-page">
      {itemData.map((item: ImageProps) => (
        <Fragment key={item.src}> 
          <ImageCustom {...item}/>
        </Fragment>
      ))}
    </div>
  );
};

export default PhotoPage;
