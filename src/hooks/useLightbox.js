import { useState } from 'react';

const useLightbox = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const handleImageClick = (imageSrc, imageAlt) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
  };

  return {
    lightboxImage,
    lightboxAlt,
    handleImageClick,
    closeLightbox
  };
};

export default useLightbox;

