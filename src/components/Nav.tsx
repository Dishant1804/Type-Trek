import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Navlinks = () => {
    return (
        <>
            <NavLink to='./TypingPage.tsx'>Typing page</NavLink>
            <NavLink to='./CharactersMapping.tsx'>dashboard</NavLink>
            <NavLink to='./CountdownTimer.tsx'>About developer</NavLink>
        </>
    );
};

const Nav = () => {
    return (
        <nav className='w-1/3'>
            <Router>
                <div className='flex justify-between'>
                    <Navlinks />
                </div>
            </Router>
        </nav>
    );
};

export default Nav;
