import {
  ADD_TO_CARD,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CARD,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_ADDRESS,
  ADD_TO_ADDRESS
} from '../ActionType';

export const addItemtocard = data => ({
  type: ADD_TO_CARD,
  payload: data,
});

export const removeFromcard = index => ({
  type: REMOVE_FROM_CARD,
  payload: index,
});
// ---------------------------wishlist ----------------------

export const addItemtowishlist = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromwishlist = index => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
// ---------------------------Address ----------------------

export const addAddress = data => ({
  type: ADD_TO_ADDRESS,
  payload: data,
});

export const deleteAddress = index => ({
  type: REMOVE_FROM_ADDRESS,
  payload: index,
});
