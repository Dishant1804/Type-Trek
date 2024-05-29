import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import TypingPage from './components/TypingPage';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <header>
          <nav className='pr-24 mt-2'>
            <div className='flex justify-between text-primary-text-yellow backdrop-blur-xl rounded-2xl bg-primary-bg mx-auto z-[20] w-full top-0  items-center p-4 pl-32'>
              <div className='text-xl'>
                <NavLink to='/'>TypeTrek</NavLink>
                <FontAwesomeIcon icon={faTerminal} className='ms-2 me-2' />
              </div>
              <div className='text-xl'>
                <NavLink to="https://github.com/Dishant1804/Type-Trek" target="_blank">GitHub</NavLink>
                <FontAwesomeIcon icon={faGithub} className='ms-2 me-2'/>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TypingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
