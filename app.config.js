const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';


const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.tichikawa14.stickersmash.dev';
  }

  if (IS_PREVIEW) {
    return 'com.tichikawa14.stickersmash.preview';
  }

  return 'com.tichikawa14.stickersmash';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }

  return 'StickerSmash: Emoji Stickers';
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
    buildNumber: '1'
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
    versionCode: 1
  },
});
