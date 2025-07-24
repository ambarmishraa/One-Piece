const AnimeList = () => {
    return (
        <div className="animeListing-wrapper justify-center items-center flex">
            <div className="w-[500px] h-[500px] bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl">
                <div className="flex justify-center mb-4 mt-4">
                    <p className="text-black text-3xl">List Your Anime</p>
                </div>
                <form action="" method="POST">
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Anime Name" required />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Author Name" required />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Genre(s)" required />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Rating" required />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Price" required />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-2 w-[80%] text-black mb-4 placeholder-black border-white/40 backdrop-blur-md rounded shadow-lg" type="text" placeholder="Description" required />
                    </div>      
                    <div className="flex justify-center">
                        <button type="submit"
                            className="bg-green-500 w-[80%] cursor-pointer hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AnimeList;