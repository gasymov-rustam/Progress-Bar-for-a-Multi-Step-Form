import { useFormContext } from '../context/FormContext';
import { Billing } from './Billing';
import { OptIn } from './OptIn';
import { Shipping } from './Shipping';

const display = {
  0: <Billing />,
  1: <Shipping />,
  2: <OptIn />,
};

export const FormInputs = () => {
  const { page } = useFormContext();

  return <div className='form-inputs flex-col'>{display[page]}</div>;
};
