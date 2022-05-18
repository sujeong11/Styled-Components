import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

const DownButton = styled.button`
  margin-right: -28px;
  z-index: 100;
  border: 0;
  background-color: #ffffff;
  
  svg {
    background-color: #ffffff;
    cursor: pointer;
  }
`;

const Input = styled.input.attrs({ 
  type: "text",
})`
  width: 600px;
  padding: 8px 30px;
  background-color: #ffffff;
`;

const SearchButton = styled.button`
  margin-left: -32px;
  border: 0;
  background-color: #ffffff;
  
  svg {
    background-color: #ffffff;
    cursor: pointer;
  }
`;

function Search() {
  return (
    <Container>
      <DownButton>
        <FontAwesomeIcon icon={faCaretDown} size='lg' />
      </DownButton>
      <form>
        <Input 
          placeholder='검색어를 입력하세요' 
        />
      </form>
      <SearchButton type='submit'>
        <FontAwesomeIcon icon={faSearch} size='lg' />
      </SearchButton>
    </Container>
  )
}

export default Search