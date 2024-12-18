import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;