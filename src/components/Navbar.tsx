import Nav from './Nav'


const Navbar = () => {
    
    return <header className='bg-red-500 sticky mx-auto flex z-[20] w-full top-0 justify-between items-center border-b border-green-500 p-4'>
        <h1>TypeTrek logo</h1>
        <Nav/>
    </header>
}

export default Navbar