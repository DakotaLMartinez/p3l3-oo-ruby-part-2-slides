import React from 'react'

function Repl({ src, width, height, noembed }) {
  const replUrl = `${src.split('#')[0]}?lite=true&${noembed ? '' : '&embed=true'}`
  const styles = {};
  width && (styles.width = width);
  height && (styles.height = height);
  return (
    <>
      <br />
      <iframe
        frameborder="0"
        src={src}
        style={styles}
        className="frame"
      ></iframe>
      <br />
      <a href={src} target="_blank" rel="noreferrer">View on Repl.it</a>
    </>
  )
}

export default Repl