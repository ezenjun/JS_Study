import { atom } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

export  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });