import { Input } from 'antd';
import { useState } from 'react';

import './search-input.css';

function SearchInput({ onChangeSearch }) {
  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    onChangeSearch(searchValue);
  };

  return (
    <div className="search-input-container">
      <Input type="search" size="large" placeholder="Type to search..." value={search} onChange={changeHandler} />
    </div>
  );
}

export default SearchInput;