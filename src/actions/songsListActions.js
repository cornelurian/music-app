import * as types from "./actionTypes";

export const toggleSortList = () => {
  return { type: types.TOGGLE_SORT_ORDER };
};

export const changeSortBy = value => {
  return { type: types.CHANGE_SORT_BY, by: value };
};
