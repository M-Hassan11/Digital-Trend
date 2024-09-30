'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSearchOutline, IoClose } from 'react-icons/io5';

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setShowSearch(false);
    setSearchQuery('');
  };

  const items: string[] = [
    'Work', 'Services', 'About', 'News', 'Insights', 'Career', 'Contact',
  ];
  
  const servicesDropdownItems: string[] = [
    'Service 1', 'Service 2', 'Service 3', 
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className='md:flex justify-between py-2 px-0 m-6 items-center text-center hidden'>
      <div className='text-xl justify-center text-md sm:text-sm md:text-lg lg:text-xl'>Muhammad Hassan</div>
      <ul className='flex gap-7 relative'>
      {items.map((item) => (
        <li key={item} className='text-lg'>
          {item === 'Services' ? (
            <button onClick={handleToggle} className='flex items-center'>
              Services
            </button>
          ) : (
            <Link href='/' className='text-lg'>
              {item}
            </Link>
          )}
          {item === 'Services' && isDropdownOpen && (
            <ul className='absolute bg-white border mt-1 shadow-lg'>
              {servicesDropdownItems.map((service) => (
                <li key={service} className='p-2 hover:bg-gray-200'>
                  <Link href='/'>{service}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <div className='border-l-2 flex pl-5'>
        <button onClick={handleToggleSearch} className='flex items-center justify-center text-center'>
          <IoSearchOutline size={17} />
        </button>
      </div>
    </ul>

      {showSearch && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center'>
          <button className='absolute top-4 right-4 bg-white p-3 rounded-full text-2xl' onClick={handleClose}>
            <IoClose />
          </button>
          <div className='flex flex-col items-center justify-start mt-20 w-full'>
            <div className='flex items-center relative justify-between w-1/3'>
              <input
                type='text' value={searchQuery} onChange={handleInputChange} className='input-field outline-none bg-white p-5 w-full'
              />
              <label className='label'>Search for...</label>
            <button className='bg-[#00838F] p-5'>
                <IoSearchOutline size={25} className='text-black'/>
            </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
