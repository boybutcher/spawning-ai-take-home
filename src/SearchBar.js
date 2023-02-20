import Button from 'react-bootstrap/Button'
import './SearchBar.css';

const SearchBar = ({
  updateQuery,
  queryVal,
  filterProducts,
  cancelFilterProducts,
  isFiltering,
}) => {
  return (
    <div className='searchBar'>
      <input
        type='text'
        placeholder='search for products'
        onChange={(e) => updateQuery(e.target.value)}
        value={queryVal}
      />
      <Button
        className='searchBarButton'
        disabled={!queryVal}
        onClick={filterProducts}
      >
        search
      </Button>
      <Button
        className='searchBarButton'
        disabled={!isFiltering}
        onClick={cancelFilterProducts}
      >
        clear
      </Button>
    </div>
  )
}

export default SearchBar;
