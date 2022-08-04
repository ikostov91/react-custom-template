export const SMALL_DROPDOWN_STYLES = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: '#9e9e9e',
    minHeight: '28px',
    boxShadow: null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    minHeight: '28px',
    padding: '0 6px'
  }),

  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    minHeight: '28px'
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    padding: '0px'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '0px'
  })
};
