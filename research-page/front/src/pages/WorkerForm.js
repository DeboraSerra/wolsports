import react, { useEffect, useState } from 'react';

const WorkerForm = () => {
  const [state, setState] = useState({
    email: '',
    name: '',
    phone: '',
    state: '',
    district: '',
    activity: '',
    time: '',
    needCref: false,
    cref: '',
    howItWorks: '',
    indication: '',
  });

  const handleChange = ({ target }) => {
    const { name, checked } = target;
    let { value } = target;
    if (checked !== undefined) value = checked;
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

export default WorkerForm;
