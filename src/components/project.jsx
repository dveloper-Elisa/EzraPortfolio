


const Project = ({imgurl,imageText}) => {
    return (

            <div className="grid grid-col-3 justify-center gap-5 bg-slate-700 max-w-[100/3] rounded-md border-[2px] border-blue-500 p-2 hover:bg-slate-800 hover:text-white">

                <img src={imgurl} alt="project phot here" className="h-80"/>
                <p className="bottom-3 text-white">
                    {imageText}
                </p>

            </div>

    )
}


export default Project