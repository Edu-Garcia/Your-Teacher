export const StyledSelect = ({ id, name, data, currentValue, onChange = () => {} }) => {

  return (
    <select id={id || name} name={name || id} value={currentValue || ''} onChange={onChange}>

      {data.map(({label, value}) => {
        return (
          <option 
            key={value} 
            value={value} 
            label={label}
            {...value === '' && {disabled: true}}
          >
            {label}
          </option>
        )
      })}
    </select>
  )
}