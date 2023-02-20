import Button from 'react-bootstrap/Button'

const SearchBar = ({
  updateQuery,
  queryVal,
  filterProducts,
  cancelFilterProducts,
}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='search for products'
        onChange={(e) => updateQuery(e.target.value)}
        value={queryVal}
      />
      <Button onClick={filterProducts}>search</Button>
      <Button
        disabled={!queryVal}
        onClick={cancelFilterProducts}
      >
        clear
      </Button>
    </div>
  )
}

export default SearchBar;
