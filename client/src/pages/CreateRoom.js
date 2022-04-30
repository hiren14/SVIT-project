import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"

function CreateRoom(){
    const [roomCreated,setRoomCreated] = useState(false)

    return(
        <div className='w-full h-full bg-bg flex flex-col items-center justify-center'>
            <input type='text' placeholder="Room Name" className="p-2 text-2xl rounded bg-bg shadow-inner shadow-black"></input>
            <button onClick={() => setRoomCreated(true)} className='peer p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Create</button>
            {
                roomCreated === true
                ?
                    <div className="mt-9 text-2xl">Code</div>
                :
                    console.log()
            }
        </div>
    )
}

export default CreateRoom