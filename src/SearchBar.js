import Button from 'react-bootstrap/Button'

const SearchBar = ({
  updateQuery,
  queryVal,
  filterProducts,
  cancelFilterProducts,
  isFiltering,
}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='search for products'
        onChange={(e) => updateQuery(e.target.value)}
        value={queryVal}
      />
      <Button
        disabled={!queryVal}
        onClick={filterProducts}
      >
        search
      </Button>
      <Button
        disabled={!isFiltering}
        onClick={cancelFilterProducts}
      >
        clear
      </Button>
    </div>
  )
}

export default SearchBar;
