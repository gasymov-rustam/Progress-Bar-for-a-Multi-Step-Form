import { useFormContext } from '../context/FormContext';

export const Header = () => {
  const {
    page,
    setPage,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  return (
    <header className='form-header'>
      <h2>{title[page]}</h2>

      <div className='button-container'>
        <button
          type='button'
          className={`button ${prevHide}`}
          onClick={handlePrev}
          disabled={disablePrev}
        >
          Prev
        </button>

        <button
          type='button'
          className={`button ${nextHide}`}
          onClick={handleNext}
          disabled={disableNext}
        >
          Next
        </button>

        <button type='submit' className={`button ${submitHide}`} disabled={!canSubmit}>
          Submit
        </button>
      </div>
    </header>
  );
};
