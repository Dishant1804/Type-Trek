import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import TypingPage from './components/TypingPage';

function App() {
  return (
    <Router>
      <div className='flex flex-col '>
        <header>
          <nav className='pr-24'>
            <div className='flex justify-between text-primary-text-yellow backdrop-blur-xl rounded-2xl bg-primary-bg mx-auto z-[20] w-full top-0  items-center p-6 pl-32'>
              <NavLink to='/'>TypeTrek...</NavLink>
              <NavLink to="https://github.com/Dishant1804/Type-Trek" target="_blank">GitHub</NavLink>
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
