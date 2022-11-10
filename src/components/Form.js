import { useFormContext } from '../context/FormContext';
import { FormInputs } from './FormInputs';
import { Header } from './Header';

export const Form = () => {
  const { data } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  return (
    <form className='form flex-col' onSubmit={handleSubmit}>
      <Header />

      <FormInputs />
    </form>
  );
};
