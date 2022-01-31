import {testReducer, testReducerAction} from '../../types/reducersTypes';

const defaultValue: testReducer = {
  value: 1,
};

export enum SortTypes {
  CHANGE_INC = 'CHANGE_INC',
  CHANGE_DEC = 'CHANGE_DEC',
}

export const testReduce = (state = defaultValue, action: testReducerAction) => {
  switch (action.type) {
    case SortTypes.CHANGE_INC:
      return {...state, value: action.payload.value + 1};
    case SortTypes.CHANGE_DEC:
      return {...state, value: action.payload.value};
    default:
      return state;
  }
};
