import {ADD_TO_ADDRESS,REMOVE_FROM_ADDRESS} from '../ActionType';
const AddressRaducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_ADDRESS:
      return [...state, action.payload];

    case REMOVE_FROM_ADDRESS:
      const deletearray2 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletearray2;
    default:
      return state;
  }
};
export default AddressRaducer;