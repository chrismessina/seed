import React from 'react'
import { Icon } from '../base'
import { IconsGrid, IconCont, Content, Tooltip } from './styled'


export const IconGrid = icons => {
  const iconArr = Object.values(icons.icons)

  return (
    <Content>
      <IconsGrid>
        {iconArr.map(icon => (
          <IconCont key={icon.name} title={`Download ${icon.name}.svg`}>
            <Tooltip>What does that</Tooltip>
            <Icon content={icon.contents} size={24} />
          </IconCont>
        ))}
      </IconsGrid>
    </Content>
  )
}
