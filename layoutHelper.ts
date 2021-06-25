export function handleBackground(url: string): CSSProperties {
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
