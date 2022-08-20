import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const url = 'http://localhost:3001/';

const Provider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    genders: [],
    activities: [],
    times: [],
    personalities: [],
    districts: [],
    goals: [],
  });

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const genders = await getGenders();
    const activities = await getActivities();
    const districts = await getDistricts();
    const personalities = await getPersonalities();
    const goals = await getGoals();
    const times = await getTimes();
    setState((prevSt) => ({
      ...prevSt,
      loading: false,
      genders,
      activities,
      districts,
      personalities,
      goals,
      times,
    }))
  }

  const getGenders = async () => {
    const response = await fetch(`${url}gender`);
    const data = response.json();
    return data;
  }
  const getActivities = async () => {
    const response = await fetch(`${url}activity`);
    const data = response.json();
    return data;
  }
  const getDistricts = async () => {
    const response = await fetch(`${url}district`);
    const data = response.json();
    return data;
  }
  const getPersonalities = async () => {
    const response = await fetch(`${url}personality`);
    const data = response.json();
    return data;
  }
  const getGoals = async () => {
    const response = await fetch(`${url}goal`);
    const data = response.json();
    return data;
  }
  const getTimes = async () => {
    const response = await fetch(`${url}time`);
    const data = response.json();
    return data;
  }
  const value = {
    ...state,
    getActivities,
    getDistricts,
    getGenders,
    getGoals,
    getPersonalities,
    getTimes,
  }
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export default Provider;
