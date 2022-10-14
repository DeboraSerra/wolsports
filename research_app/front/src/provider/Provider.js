import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext({
  loading: true,
  activities: [],
  personalities: [],
  districts: [],
  goals: [],
  genders: [],
  isMobile: false,
  success: false,
  successMessage: () => {},
  getApiInfo: async () => {},
  setLoading: () => {},
});

export const url = process.env.REACT_APP_API;

const Provider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    activities: [],
    personalities: [],
    districts: [],
    goals: [],
    genders: [],
    isMobile: false,
    success: false,
  });

  useEffect(() => {
    getInfo();
    setState((prevSt) => ({
      ...prevSt,
      isMobile: window.matchMedia('(max-width: 425px)').matches,
    }))
  }, []);

  const getInfo = async () => {
    const { activities, districts, personalities, goals, genders } = await getApiInfo();
    setState((prevSt) => ({
      ...prevSt,
      loading: false,
      activities,
      districts,
      personalities,
      goals,
      genders
    }))
  }

  const getApiInfo = async () => {
    const response = await fetch(`${url}/info`);
    const data = await response.json();
    return data;
  }

  const successMessage = async () => {
    setState((prevSt) => ({
      ...prevSt,
      success: !state.success,
      loading: false,
    }))
  }

  const setLoading = () => {
    setState((prevSt) => ({
      ...prevSt,
      loading: !state.loading,
    }))
  }

  const value = {
    ...state,
    getApiInfo,
    successMessage,
    setLoading,
  }
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export default Provider;