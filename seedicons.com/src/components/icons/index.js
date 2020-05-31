import React from 'react'
import { Icon } from '../base'
import { IconsGrid, IconFrame, IconCont, Content, SidebarCont } from './styled'

const Sidebar = () => {
  return (
    <SidebarCont>
      <h3>Style</h3>
      <ul>
        <li>Stroke</li>
        <li>Fill</li>
      </ul>
      <h3>Categories</h3>
      <ul>
        <li>All</li>
        <li>Arrows</li>
      </ul>
    </SidebarCont>
  )
}

export const IconGrid = icons => {
  const iconArr = Object.values(icons.icons)

  return (
    <Content>
      {/* <Sidebar /> */}
      <IconsGrid>
        {iconArr.map(icon => (
          <IconCont key={icon.name} title={`Download ${icon.name}.svg`}>
            <IconFrame>
              <Icon name={icon.name} content={icon.contents} />
            </IconFrame>
          </IconCont>
        ))}
      </IconsGrid>
    </Content>
  )
}
