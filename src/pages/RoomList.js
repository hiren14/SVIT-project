const RoomList = () => {
    
    return(
        <div className="w-full h-full bg-bg flex flex-col">
            <div className="w-3/4 m-2 p-2 flex flex-col justify-between bg-bg shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75 cursor-pointer">
                <div className="m-2 text-2xl text-gray-900">Room name: </div>
                <div className="m-2 text-lg text-gray-500">Room code: </div>
                <div className="m-2 text-lg text-gray-500">Total students: </div>
            </div>

        </div>
    )
}

export default RoomList