const distFolder = './dist';
const srcFolder = './src';

export const paths = {
  dist: {
    html: `${distFolder}/`,
    js: `${distFolder}/js/`,
    styles: `${distFolder}/css/`,
    img: `${distFolder}/images/`,
    fonts: `${distFolder}/fonts/`,
    favicon: `${distFolder}/favicons/`,
  },
  src: {
    html: `${srcFolder}/pages/*.html`,
    js: `${srcFolder}/js/app.js`,
    styles: `${srcFolder}/scss/common.scss`,
    img: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,svg,webp}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    favicon: `${srcFolder}/favicons/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    js: `${srcFolder}/js/**/*.js`,
    styles: `${srcFolder}/scss/**/*.scss`,
    img: `${srcFolder}/images/**/*.{jpg,jpeg,svg,ico,png,gif,webp}`,
    favicon: `${srcFolder}/favicons/*.{jpg,jpeg,svg,ico,png}`,
  },
  clean: distFolder,
  distFolder: distFolder,
  srcFolder: srcFolder,
};
