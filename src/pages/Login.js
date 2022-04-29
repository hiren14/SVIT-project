const Login = () => {
    return(
        <div className="w-full h-full bg-bg flex flex-row items-center justify-center">
            <div className='w-1/4 h-1/2 flex flex-col justify-start items-center bg-bg shadow-xl rounded-lg'>
                <div className='mt-5 text-2xl font-bold'>Login</div>
                <input type='text' placeholder='Username' className='mt-8 p-1 w-3/4 bg-sub-bg rounded text-lg'></input>
                <input type='password' placeholder='Password' className='mt-4 p-1 w-3/4 bg-sub-bg rounded text-lg'></input>
                <button className='p-2 mt-5 text-lg rounded bg-button shadow-lg hover:shadow-xl active:shadow-md transition-all delay-75'>Login</button>
                <div className="w-full mt-5 flex items-center">
                    <div className="text-sm ml-2 text-gray-600">New user? <a href="/register" className="text-blue-500 cursor-pointer">Register</a></div>
                </div>
            </div>
        </div>
    )
}

export default Login