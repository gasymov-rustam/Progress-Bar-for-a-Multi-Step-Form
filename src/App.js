import { Form } from './components/Form';
import { ProgressBar } from './components/ProgressBar';
import { FormProvider } from './context/FormContext';

export const App = () => {
  return (
    <FormProvider>
      <ProgressBar />
      <Form />
    </FormProvider>
  );
};
