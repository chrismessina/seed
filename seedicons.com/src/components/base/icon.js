import React from 'react'

function Icon({ name, size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: props.content }}
      {...props}
    />
  )
}

export default Icon
