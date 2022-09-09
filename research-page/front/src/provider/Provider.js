import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

// export const url = process.env.REACT_APP_API || 'https://wol-sports.web.app';
export const url = 'http://localhost:3001';

const Provider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    activities: [],
    personalities: [],
    districts: [],
    goals: [],
    genders: [],
    isMobile: false,
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
    console.log(response)
    const data = response.json();
    return data;
  }

  const value = {
    ...state,
    getApiInfo,
  }
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export default Provider;
