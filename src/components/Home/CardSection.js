import React from 'react'

export default function CardSection(props) {
    return (
        <div className="CardSection">
        <h1>{props.title}</h1>
        <div>
            {props.sectionDescription}
        </div>
        </div>
    )
}
