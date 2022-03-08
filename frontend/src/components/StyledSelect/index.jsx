export const StyledSelect = ({ id, name, data, currentValue, onChange = () => {} }) => {

  console.log('id', id)
  console.log('name', name)

  return (
    <select id={id || name} name={name || id} value={currentValue || ''} onChange={onChange}>

      {data.map(({label, value}) => {
        return (
          <option 
            key={value} 
            value={value} 
            label={label}
          >
            {label}
          </option>
        )
      })}
    </select>
  )
}