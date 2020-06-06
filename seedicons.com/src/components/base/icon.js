import React from 'react'

function Icon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={props.size}
      height={props.size}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  )
}

export default Icon
