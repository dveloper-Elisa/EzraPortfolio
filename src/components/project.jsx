
import { useState } from "react"

const Project = ({imgurl,imageText}) => {
    const [text, setText] = useState(false)
    return (

            <div className={`grid grid-col-3 justify-center gap-5 bg-slate-700 max-w-[100/3] rounded-md border border-blue-500 p-2 hover:bg-slate-800 hover:text-white`} onMouseOver={()=>{return setText(true)}} onMouseOut={()=>{return setText(false)}}>

                <img src={imgurl} alt="project phot here" className="w-dvw h-40 rounded-md"/>
                {text &&  <i className="bg-red-400 text-center text-white absolute left-0 right-0 flex items-center justify-center" style={{width:'50%'}}>
                   {imageText}  
                </i>}

            </div>

    )
}


export default Project