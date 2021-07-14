const preparedBackgroundUrls = {
  cover: 'https://raw.githubusercontent.com/Hexlet/assets/master/images/presentation-background-cover.png',
  center: 'https://raw.githubusercontent.com/Hexlet/assets/master/images/presentation-background-center.png',
  common: 'https://raw.githubusercontent.com/Hexlet/assets/master/images/presentation-background-common.png',
  hexlet: 'https://raw.githubusercontent.com/Hexlet/assets/master/images/presentation-background-hexlet-next.png',
};

export function handleBackground(maybeUrl: string): CSSProperties {
  const url = preparedBackgroundUrls[maybeUrl] ?? maybeUrl
  const style = {
    background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  // if (!style.background)
  //   delete style.background

  return style
}
