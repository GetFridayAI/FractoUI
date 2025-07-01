import {useState} from 'react';
import { SearchField } from '../../components/Input/SearchField';
import "../less/inputFieldPages.less";

const SearchFieldPage = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="searchfield-section">
      <div className="searchfield-container">
        <h3>Search Field</h3>
        <div className="fieldWrapper">
          <SearchField
            isDisabled={false}
            searchString={searchText}
            onChange={(text) => setSearchText(text)} />
        </div>
      </div>

    </div>
  );
};

export default SearchFieldPage;