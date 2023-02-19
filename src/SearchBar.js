import Button from 'react-bootstrap/Button'

const SearchBar = ({
  updateQuery,
  queryVal,
  filterProducts
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
    </div>
  )
}

export default SearchBar;
