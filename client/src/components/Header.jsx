import { FaSearch, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logo from "../public/logo.png"

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-white shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <img src={logo} alt='estate' className='w-16 max-w-16 h-auto' />
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-200 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search address...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 font-light text-sm'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-brown-main' />
          </button>
        </form>
        <ul className='flex gap-5'>
          <Link to='/'>
            <FaHome className='hidden sm:inline mb-1 text-xl text-brown-main' />
          </Link>
          <Link to='/about'>
            <li className='sm:inline hover:text-gray-200 '>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:text-gray-200'> Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
