import { Global } from "@emotion/react";

export const Font = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Spoqa Han Sans';
          font-weight: 700;
          font-display: block;
          src: local('Spoqa Han Sans Bold'),
            url('./fonts/SpoqaHanSansBold.woff2') format('woff2'),
            url('./fonts/SpoqaHanSansBold.woff') format('woff'),
            url('./fonts/SpoqaHanSansBold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Spoqa Han Sans';
          font-weight: 400;
          font-display: block;
          src: local('Spoqa Han Sans Regular'),
            url('./fonts/SpoqaHanSansRegular.woff2') format('woff2'),
            url('./fonts/SpoqaHanSansRegular.woff') format('woff'),
            url('./fonts/SpoqaHanSansRegular.ttf') format('truetype');
        }
        * {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          font-family: 'Spoqa Han Sans';
          line-height: 1.48;
        }
      `}
    />
  );
};
