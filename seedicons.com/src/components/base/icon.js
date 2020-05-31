import React from 'react'

function Icon( props ) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size}
      height={props.size}
      dangerouslySetInnerHTML={{ __html: props.content }}
      fill='currentColor'
    />
  )
}

export default Icon
