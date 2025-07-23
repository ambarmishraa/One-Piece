const SignUp = () => {
    return (
         <>
            <div>
                <h1 className="font-bold" >Sign Up Page</h1>
                <input className="p-2" type="email" placeholder="Enter your Email" required />
                <input className="p-2" type="password" placeholder="Enter your password" required />
                <a
                    href="/SignUp"
                    className="bg-green-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    SignUp
                </a>
            </div>
            <a href="/SignIn"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Sign In</a>
        </>
    )
}

export default SignUp;