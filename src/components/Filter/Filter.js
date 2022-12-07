import { FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { addFilter} from "redux/contactSlice";

export function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.phonebook.filter);

    function handleChange (e) {
        dispatch(addFilter(e.target.value));
    }
  
    return (
        <label>
            Find contact by name
            <FilterInput type="text" value={filter} onChange={handleChange} />
        </label>
    )
}