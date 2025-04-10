'use client'
import React from 'react'
import {useNode} from "@craftjs/core";

const Container = ({children, ...props}) => {
    const { connectors: {connect,drag} } = useNode();

  return (
    <div
    style={{
        height:'full',
        width:'full'
    }}
    {...props}
    ref={(ref) => connect(drag(ref))}
    >
        {children}</div>
  )
}

export default Container