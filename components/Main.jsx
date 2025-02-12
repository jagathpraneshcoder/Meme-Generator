import { useState } from "react"
export default function Main() {

    const[ meme , setMeme ] = useState({
        topText : "Something Up", 
        bottomText : "Something Down",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })

    function handleClick(event){
        let { value , name} = event.currentTarget
         
        setMeme( prev=>({
            ...prev,
            [name] : value
        }) )
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleClick}
                        value = {meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleClick}
                        value = {meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}