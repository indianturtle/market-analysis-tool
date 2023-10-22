
import TextField from '@mui/material/TextField';

function CustomNumberInput(props) {
  const { label, value, onChange, ...otherProps } = props;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue)) {
      // Ensure that the input is a number
      onChange(event);
    }
  };

  return (
    <TextField //style={{ backgroundColor: 'white' }}
      type="number"
      label={label}
      value={value}
      onChange={handleChange}
      variant='filled'
      {...otherProps}
    />
  );
}

export default CustomNumberInput;
