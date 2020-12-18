import React from 'react'
import './index.css'
import aboutUs from './images/aboutUs.png'
import buy from './images/buy.png'

export default function SB_bar() {
    return (
        <div>
            <section className="sectionAboutUs">
                <h1>О нас</h1>
                <div className="divAboutUs">
                    <div>
                        <img src={aboutUs} alt=""/>
                    </div>
                    <div>
                        <p>There are many variations of passages of Lorem Ipsum<br/>available, but the majority have suffered alteration in some<br/>form, by injected humour, or randomised words which don't<br/>look even slightly believable. If you are going to use a<br/>passage of Lorem Ipsum, you need to be sure there isn't<br/>anything embarrassing hidden in the middle of text. All the<br/>Lorem Ipsum generators on the Internet tend to repeat<br/>predefined chunks as necessary, making this the first true<br/>generator on the Internet. It uses a dictionary of over 200<br/>Latin words, combined with a handful of model sentence<br/>structures, to generate Lorem Ipsum which looks<br/>reasonable. The generated Lorem Ipsum is therefore always<br/>free from repetition, injected humour, or non-characteristic<br/>words etc.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
