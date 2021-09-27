import React, {useEffect, useState} from 'react'
import Header from '../Header.js'
import ReactPortLink from './ReactPortLink.js';
import sampleLinks from './sampleLinks.js';
import './ReactPortfolio.css'

export default function ReactPortfolio() {
    const [links, setLinks] = useState(sampleLinks);

    return (
        <section className="links">
            <Header />

            <article className="linkGallery">
                {links.map(link =>
                    //Render singleLink    
                    <ReactPortLink key={link.LinkId} link={link.Link} linkText={link.LinkText}/>
                )}
            </article>

        </section>
    )
}
