// Render svg as an Image component

import React from 'react';
import {Image} from 'react-native';

import dimensions from '../../utils/dimensions';
import {IImage} from './types';

export const AImage: React.FC<IImage> = ({
  image: RenderImage,
  imageHeight,
  imageWidth,
  fill,
  imageUrl,
}) => {
  imageWidth = imageWidth ?? dimensions.viewWidth(22);
  imageHeight = imageHeight ?? dimensions.viewHeight(22);
  if (imageUrl) {
    return (
      <Image
        source={{
          uri: imageUrl,
          width: imageWidth,
          height: imageWidth,
        }}
      />
    );
  }
  return <RenderImage width={imageWidth} height={imageHeight} fill={fill} />;
};
