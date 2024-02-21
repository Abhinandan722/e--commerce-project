import {ADD_TO_CARD, REMOVE_FROM_CARD} from '../ActionType';

const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];

    case REMOVE_FROM_CARD:
      const deletearray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletearray1;

    default:
      return state;
  }
};
export default Reducers;
