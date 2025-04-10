"use client"
import React from 'react'
import { useNode, useEditor } from '@craftjs/core'
const RenderNode = ({render}) => {
    const {id} = useNode()
    const {actions, query, isActive} = useEditor((_,query)=>({
        isActive: query.getEvent('selected').contains(id)
    }))
    const {isHover, dom, name, moveable, deletable, connectors:{drag}, parent} = useNode((node)=>({
        isHover: node.events.hovered,
        dom: node.dom,
        name: node.data.custom.displayName || node.data.displayName,
        moveable: query.node(node.id).isDraggable(),
        deletable:query.node(node.id).isDeletable(),
        parent: node.data.parent,
        props: node.data.props
    }))


  return (
    <div>

        {render}
    </div>
  )
}

export default RenderNode