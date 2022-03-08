import { StyledSelect } from "../StyledSelect";

export const SelectPopover = ({ id, name, states, currentValue, onChange = () => {} }) => {
  const selectOptions = {
    id,
    name,
    data: states,
    currentValue,
    onChange,
  }

  return (
    <StyledSelect {...selectOptions} />
  );

}