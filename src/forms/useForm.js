import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    let newErrors = errors
    newErrors[event.target.name] = false
    setErrors(newErrors)
  };

  return {
    handleChange,
    values,
    setValues,
    errors,
    setErrors,
  }
};

export default useForm;