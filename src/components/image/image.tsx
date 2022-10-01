// Render svg as an Image component

import React from 'react';
import dimensions from '../../utils/dimensions';
import {IImage} from './types';

export const AImage: React.FC<IImage> = ({
  image: Image,
  imageHeight,
  imageWidth,
  fill,
  url,
}) => {
  imageWidth = imageWidth ?? dimensions.viewWidth(21);
  imageHeight = imageHeight ?? dimensions.viewHeight(21);
  return <Image width={imageWidth} height={imageHeight} fill={fill} />;
};
