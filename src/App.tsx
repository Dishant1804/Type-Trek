import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTerminal } from '@fortawesome/free-solid-svg-icons';
import TypingPage from './components/TypingPage';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen overflow-hidden'>
        <header>
          <nav className='pr-24 mt-2'>
            <div className='flex justify-between text-primary-text-yellow backdrop-blur-xl rounded-2xl bg-primary-bg mx-auto z-[20] w-full top-0  items-center p-4 pl-32'>
              <div className='text-xl'>
                <NavLink to='/'>TypeTrek</NavLink>
                <FontAwesomeIcon icon={faTerminal} className='ms-2 me-2' />
              </div>
              <div className='text-xl'>
                <NavLink to="https://github.com/Dishant1804/Type-Trek" target="_blank">GitHub</NavLink>
                <FontAwesomeIcon icon={faGithub} className='ms-2 me-2' />
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TypingPage />} />
          </Routes>
        </main>
        <footer className="flex justify-center p-4 text-primary-text-yellow mt-auto">
          <aside>
            <p>Made with <FontAwesomeIcon icon={faHeart} /> by <span className='hover:underline cursor-pointer'>
            <a href="https://github.com/Dishant1804" target='_blank'>Dishant</a></span></p>
          </aside>
        </footer>
      </div>
    </Router>
  );
}

export default App;
