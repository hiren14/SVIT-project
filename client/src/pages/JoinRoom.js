const JoinRoom = () => {
    const joinRoomHandler = () => {
        window.location.href = '/form'
    }
    return(
        <div className="w-full h-full bg-bg flex items-center justify-center flex-col">
            <input type='text' placeholder="Room Code" className="p-2 text-2xl rounded bg-bg shadow-inner shadow-black"></input>
            <button onClick={joinRoomHandler} className='p-2 mt-5 pl-4 pr-4 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Join</button>
        </div>
    )
}

export default JoinRoom