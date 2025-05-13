import { createContext, useContext } from 'react';

export const LocationContext = createContext({
  previousLocation: null,
  currentLocation: null,
});

export const useLocationContext = () => useContext(LocationContext);