import { useEffect, useState } from 'react';
import { StyledPopover } from '../StyledPopover';
import { Container, ClearSpan, LabelPopover, ButtonPopover } from "./styles"
import { Refresh } from '@mui/icons-material'
import { fetchCitiesForState, fetchStates, parseCities, parseStates } from '../../utils/ibge';
import { StyledSelect } from '../StyledSelect';

export const FilterContainer = () => {

  const [presentialChecked, setPresentialChecked] = useState(false);
  const [remoteChecked, setRemoteChecked] = useState(false);
  const [selectValues, setSelectValues] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleClearFilters = () => {
    setPresentialChecked(false);
    setRemoteChecked(false);
    setSelectValues({
      cleared: true
    });
    setStates([]);
    setCities([]);
  }

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
    console.log('states:', states)
  }, [selectValues.cleared]);

  useEffect(() => {
    setCities([{ label: 'Carregando...', value: '' }]);
    fetchCitiesForState(selectValues.state).then(parseCities).then(setCities);
    console.log('cities:', cities)
  }, [selectValues.state]);

  const handleSelectChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;

    if(name === 'state') {
      setSelectValues({ [name]: value })
    } else {
      setSelectValues({ ...selectValues, [name]: value })
    }
  }

  console.log('selectValues:', selectValues)

  return (
    <Container>
      <StyledPopover name="Atendimento">
        <LabelPopover>Tipo de Atendimento:</LabelPopover>
        <ButtonPopover 
          value="presencial" 
          state={presentialChecked}
          onClick={() => setPresentialChecked(!presentialChecked)}
        >
          Presencial
        </ButtonPopover>
        <ButtonPopover 
          value="remoto" 
          state={remoteChecked}
          onClick={() => setRemoteChecked(!remoteChecked)}
        >
          Remoto
        </ButtonPopover>
      </StyledPopover>
      <StyledPopover name="Local" width="8rem">
        <LabelPopover>Estado:</LabelPopover>
          <StyledSelect
            id='state' 
            name='state'
            data={states}
            currentValue={selectValues.state}
            onChange={handleSelectChange}
          />
        <LabelPopover>Cidade:</LabelPopover>
          <StyledSelect 
            id='city' 
            name='city' 
            data={cities} 
            currentValue={selectValues.city}
            onChange={handleSelectChange}
          />
      </StyledPopover>
      <StyledPopover name="Preço" width="8rem">
        <h1>teste</h1>
      </StyledPopover>
      <StyledPopover name="Grau de ensino" width="12rem">
        <h1>teste</h1>
      </StyledPopover>
      <ClearSpan onClick={handleClearFilters}>
        <Refresh />
        Limpar Filtros
      </ClearSpan>
    </Container>
  )
}