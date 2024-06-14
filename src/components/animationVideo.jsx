


const Videos = ({src,title}) => {
    return (

            <div className="grid grid-col-3 justify-center gap-5 bg-slate-700 max-w-[100/3] rounded-md border-[2px] border-blue-500 p-2 hover:bg-slate-800 hover:text-white">

                <video src={src} alt="Videos animation here" className="h-80" controls/>
                <p className="bottom-3 text-white">
                    {title}
                </p>

            </div>

    )
}


export default Videos