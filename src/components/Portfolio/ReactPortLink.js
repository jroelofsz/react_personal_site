import React from 'react'

export default function ReactPortLink(props) {
    
    return (
        <div className="link">
            <a href={props.link} target="_blank" rel="noreferrer">{props.linkText}</a>
        </div>
    )
}
