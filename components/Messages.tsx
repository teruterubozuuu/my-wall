import React from 'react'
import { Panel, PanelContent, PanelHeader, PanelTitle } from './ui/panel/panel'

export default function Messages() {
  return (
    <Panel notch='md'>
        <PanelHeader>
            <PanelTitle>Teruterubozu</PanelTitle>
        </PanelHeader>
        <PanelContent>
            <p>Hi! This looks so cool!</p>
        </PanelContent>
    </Panel>
  )
}
