const SignIn = () => {
    return (
        <>
            <div className="auth-wrapper flex items-center justify-center overflow-hidden relative">
                <form action="" method="POST">
                    <div className="w-[500px] h-[500px] backdrop-blur-md bg-black/10 border border-white/50 rounded-xl p-6 shadow-lg flex font-bold justify-center">
                        <div className=" w-[100%] h-[100%] ">
                            <div className="flex justify-center mb-4">
                                <p className="text-white text-3xl">LOGIN</p>
                            </div>
                            <div className="flex justify-center">
                                <input className="p-2 w-[80%] text-white mb-4 placeholder-white border-white/40 backdrop-blur-md rounded shadow-lg" type="email" placeholder="Email" required />
                            </div>
                            <div className="flex justify-center">
                                <input className="p-2 mb-4 text-white w-[80%] placeholder-white border-white/40 backdrop-blur-md rounded shadow-lg" type="password" placeholder="Password" required />
                            </div>
                            <div className="flex justify-end w-[90%]">
                                <button type="submit"
                                    className="bg-white w-[35%] cursor-pointer hover:bg-red-600 text-black font-semibold py-2 px-4 rounded">LOGIN</button>
                            </div>
                            <div style={{ backgroundColor: 'transparent', position: 'absolute', bottom: '-1px',  zIndex: -1   }}>
                                <img src="/authentication.png" style={{width:'370px'}} alt="FormImage" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;