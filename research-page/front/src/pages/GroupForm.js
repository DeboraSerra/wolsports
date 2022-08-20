import react, { useEffect, useState } from 'react';

const GroupForm = () => {
  const [state, setState] = useState({
    email: '',
    name: '',
    phone: '',
    state: '',
    district: '',
    activity: '',
    time: '',
    forFun: true,
    isOpen: 'yes',
    howItWorks: '',
    indication: '',
  });
  const { email, name, phone, state: st, district, activity, time, forFun, isOpen, howItWorks, indication } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevSt) => ({
      ...prevSt,
      [name]: value,
    }));
  }

  useEffect(() => {

  }, [])

  const handleSubmit = () => {

  }
  return (
    <form action="/" method="POST">

    </form>
  )
}

export default GroupForm;
