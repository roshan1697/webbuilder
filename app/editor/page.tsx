"use client"

import React from 'react'
import { useNode } from "@craftjs/core";
import { Editor, Frame, Element } from "@craftjs/core";
import Container from '../../components/container';

const TextComponent = ({text}) => {
    
    const { connectors: {connect ,  drag} } = useNode();

    return (
      <div       ref={(ref) => connect(drag(ref))}
>
        <h2>{text}</h2>
      </div>
    )
}
const TextComponent2 = ({text}) => {
    
    const { connectors: { connect, drag } } = useNode();
    return (
        <div
            ref={ref => connect(drag(ref))}
            style={{ border: '1px solid #ddd', padding: '8px', margin: '8px 0' }}
        >      <h1>{text}</h1>
            <p>This is a simple text component.</p>
        </div>
    )
    
    
}
const InputComponent = () =>{
    const { connectors: {connect, drag}} = useNode()
    return <div ref={(ref)=> connect(drag(ref))}>

    </div>
}
const EditorPage = () => {
    return (
        <div>
            <p>these is craftjs</p>
            <Editor resolver={ {TextComponent , Container , TextComponent2} }
                indicator={{transition:'none'}}

            >

                <Frame>
                    <Element is={Container  } canvas>
                        <TextComponent text='hello' />
                        <TextComponent2 text='this is a text'/>
                    </Element>
                </Frame>
            </Editor>
        </div>
    )
}

export default EditorPage