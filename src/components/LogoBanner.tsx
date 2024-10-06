import React from 'react';

const LogoBanner: React.FC = () => {
  const logos = [
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/footer-logo.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/lipton-logo.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/Tetley_logo.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/Twinings_Tea_logo.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/dilmah.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/bewleys.png',
    'https://ld-magento-72.template-help.com/magento_mag-3886/pub/media/logo/logo/resized/150/fauchon.png',
  ];

  return (
    <div className="bg-white py-6 w-full px-[12vw]">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="w-34 h-auto">
            <img
              src={logo}
              alt={`Brand logo ${index + 1}`}
              className="object-contain w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
