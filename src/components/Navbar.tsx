import Nav from './Nav'

const Navbar = () => {
    
    return <header className='backdrop-blur-xl rounded-2xl bg-primary-bg mx-auto flex z-[20] w-full top-0 justify-between items-center p-6'>
        <h1 className='text-primary-text-yellow'>TypeTrek...</h1>
        <Nav/>
    </header>
}

export default Navbar