import React, {
  useEffect, useReducer,
} from 'react';
import {
  GeneralContext, GeneralDispatch,
} from './Context';
import {
  INITIAL_STATE, reducer,
} from './duck/reducer';
import { setClasses } from './duck/actions';

export const GeneralProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GeneralContext.Provider value={state}>
      <GeneralDispatch.Provider value={dispatch}>
        {children}
      </GeneralDispatch.Provider>
    </GeneralContext.Provider>
  );
};
