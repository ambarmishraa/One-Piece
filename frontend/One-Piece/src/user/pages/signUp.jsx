const SignUp = () => {
    return (
        <>
            <div className="auth-wrapper flex items-center justify-center overflow-hidden relative">
                <form action="" method="POST">
                    <div className="w-[500px] h-[500px] backdrop-blur-md bg-black/10 border border-white/50 rounded-xl p-6 shadow-lg flex font-bold justify-center">
                        <div className=" w-[100%] h-[100%] ">
                            <div className="flex justify-center mb-4">
                                <p className="text-white text-3xl">SIGNUP</p>
                            </div>
                            <div className="flex justify-center">
                                <input className="p-2 w-[80%] placeholder-white mb-4 border-white/40 backdrop-blur-md rounded text-white shadow-lg" type="email" placeholder="Email" required />
                            </div>
                            <div className="flex justify-center">
                                <input className="p-2 mb-4 w-[80%] text-white placeholder-white border-white/40 backdrop-blur-md rounded shadow-lg" type="password" placeholder="Password" required />
                            </div>
                            <div className="flex justify-end w-[90%]">
                                <button type="submit"
                                    className="bg-white cursor-pointer w-[35%] hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded">REGISTER
                                </button>
                            </div>
                            <div style={{ backgroundColor: 'transparent', position: 'absolute', bottom: '-1px', zIndex: -1 }}>
                                <img src="/itachi.png" style={{ width: '370px' }} alt="FormImage" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;