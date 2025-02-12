import "./popUpCreateBoard.css"
import React, { useState, useRef, useEffect } from 'react';


export default function PopUpCreateBoard() {
    


    return(
        <div className="PopUpCreateBoard">
            <button className="close">
                <img src="/delete1.png" alt="" />
            </button>
            <h3>
                <p>Create board</p>
                <img src="/img1.jpg" alt="" />
            </h3>
            <section className="background">
                <h4>Background</h4>
                <div className="images">
                    <CardBackground 
                        image="/img1.jpg"
                    />
                    <CardBackground 
                        image="/img1.jpg"
                    />
                    <CardBackground 
                        image="/img.jpg"
                    />
                    <CardBackground 
                        image="/img1.jpg"
                    />
                </div>
                <div className="colors">
                    {["white,grey","blue,blue,white",
                        "var(--blue2),blue","violet,pink"
                        ,"violet,pink,pink","var(--grey3),var(--grey4)"
                    ].map((colors,index)=>{
                       return <CardColor color={colors}/>
                    })

                    }
                </div>
            </section>
            <form action="">
                <label htmlFor="name">Board title</label>
                <input type="text" id="name" className="name" placeholder="Board Name"/>
                <label htmlFor="visibility">Visibility</label>
                <select name="visibility" id="visibility">
                    <option value="Private">
                        Private
                    </option>
                </select>
                <button>Create</button>
                <button>Start with a template</button>
            </form>
            <p>By using images from Unsplash, you agree to their license and Terms of Services</p>
        </div>

    )
}

function CardBackground(props) {

    return (
        <div className="CardBackground">
            <img src={props.image} alt="" />
        </div>
    )
}

function CardColor(props){
    console.log(props)
    return (
        <div className="CardColor"
            style={{
                background: `linear-gradient(150deg,${props.color})`
            }}
        >

        </div>
    )
}