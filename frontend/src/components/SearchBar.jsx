import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import {useLocation} from 'react-router-dom';


const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible , setVisible] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true);
    } else {
      setVisible(false);
    }
  },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 py-4 flex items-center justify-center'>

      <div className='flex items-center gap-3 border border-gray-400 px-5 py-2 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none text-sm bg-transparent'
          type="text"
          placeholder='Search'
        />
        <img className='w-4 opacity-70' src={assets.search_icon} alt="" />
      </div>

      {/* Cross Icon — same line */}
      <img
        onClick={() => setShowSearch(false)}
        className='w-4 ml-4 cursor-pointer opacity-70 hover:opacity-100 transition'
        src={assets.cross_icon}
        alt="close"
      />
    </div>
  ) : null;
};

export default SearchBar;
