import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Search() {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faCaretDown} size='lg' />
      </button>
      <form>
        <input type='text' placeholder='검색어를 입력하세요' />
      </form>
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch} size='lg' />
      </button>
    </div>
  )
}

export default Search