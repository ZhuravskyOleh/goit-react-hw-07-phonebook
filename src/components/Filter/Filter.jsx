
import { SearchWrapp, Input, SearchLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';



export const Filter = () => {

  const dispatch = useDispatch();

  const handlerChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  
  return (
    <SearchWrapp>
      <SearchLabel htmlFor="filter">Find contacts by name:</SearchLabel>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
      />
    </SearchWrapp>
  );
}

// Filter.propTypes = {
//   handlerChangeFilter: PropTypes.func.isRequired,
//   // value: PropTypes.string.isRequired,
// };


