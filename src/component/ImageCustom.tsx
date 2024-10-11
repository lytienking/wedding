import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageProps } from "./type";
import "react-lazy-load-image-component/src/effects/blur.css";
const ImageCustom = (props: ImageProps) => (
  <div className="image-item">
    <LazyLoadImage
      alt={props.alt}
      src={props.src}
      placeholderSrc={props.lowResSrc}
    />
  </div>
);

export default ImageCustom;
