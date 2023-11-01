export const Navbar = () => {
    return (
        <header className="border-b bg-violet-50 w-full z-[22222222222] backdrop-blur-xl max-lg:px-8 max-[1200px]:px-8 max-[480px]:px-4 fixed">
            <nav className="m-auto flex items-center justify-between py-4 max-w-[1200px]">
                    <h1 className="text-3xl font-sans font-semibold text-[#1b0b3b] m-0 max-lg:text-2xl">Hour.ly</h1>
                <div className="flex gap-4">
                    <button className="flex rounded-full text-violet-600 border-2 font-medium border-violet-600 items-center justify-center px-8 py-2 hover:scale-95 duration-300 max-lg:text-sm max-lg:py-1 max-sm:hidden">
                                Login    
                    </button>
                    <button className="bg-gradient-to-b from-violet-600 to-violet-500 text-white px-8 py-2 rounded-full font-medium hover:scale-95 hover:opacity-80 duration-300 max-lg:text-sm">Register</button>
                </div>
            </nav>
        </header>
    );
};
