import { useEffect, useState } from 'react';
import { Refresh } from '@mui/icons-material'
import { StyledPopover } from '../StyledPopover';
import { InputCurrency } from '../InputCurrency';
import { StyledSelect } from '../StyledSelect';
import { Container, ClearSpan, LabelPopover, ButtonPopover } from "./styles"
import { fetchCitiesForState, fetchStates, parseCities, parseStates } from '../../utils/ibge';

export const FilterContainer = () => {

  const [presentialChecked, setPresentialChecked] = useState(false);
  const [remoteChecked, setRemoteChecked] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [selectValues, setSelectValues] = useState({});
  const [schoolLevel, setSchoolLevel] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [price, setPrice] = useState();

  const schoolLevelList = [
    { label: 'Selecione a escolaridade...', value: ''},
    { label: 'Infantil', value: 'infantil'},
    { label: 'Fundamental', value: 'fundamental'},
    { label: 'Médio', value: 'medio'},
    { label: 'Superior', value: 'superior'},
    { label: 'Pós-graduação', value: 'pos_graduacao'},
    { label: 'Mestrado', value: 'mestrado'},
    { label: 'Doutorado', value: 'doutorado'},
  ]

  const handleClearFilters = () => {
    setSelectValues({ cleared: cleared, state: cleared });
    setPresentialChecked(false);
    setRemoteChecked(false);
    setCleared(!cleared)
    setStates([]);
    setCities([]);
    setPrice(null)
    setSchoolLevel('');
  }

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, [selectValues.cleared]);

  useEffect(() => {
    setCities([{ label: 'Carregando...', value: '' }]);
    fetchCitiesForState(selectValues.state).then(parseCities).then(setCities);
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
        <LabelPopover>Preço Máximo:</LabelPopover>
        <InputCurrency 
          value={price ? price : ''}
          onChange={(text) => setPrice(text)}
          placeholder="Ex.: 100,00"
        />
      </StyledPopover>
      <StyledPopover name="Grau de ensino" width="12rem">
        <LabelPopover>Escolaridade:</LabelPopover>
        <StyledSelect 
          id='schoolLevel' 
          name='schoolLevel' 
          data={schoolLevelList} 
          currentValue={schoolLevel}
          onChange={(e) => setSchoolLevel(e.target.value)}
        />
      </StyledPopover>
      <ClearSpan onClick={handleClearFilters}>
        <Refresh />
        Limpar Filtros
      </ClearSpan>
    </Container>
  )
}