import { useContext, useEffect, useState } from 'react';
import { Refresh } from '@mui/icons-material'
import { StyledPopover } from '../StyledPopover';
import { InputCurrency } from '../InputCurrency';
import { StyledSelect } from '../StyledSelect';
import { Container, ClearSpan, LabelPopover, ButtonPopover, ActiveButton } from "./styles"
import { fetchCitiesForState, fetchStates, parseCities, parseStates } from '../../utils/ibge';

export const FilterContainer = ({props}) => {

  const {
    myAnnouncements,
    presentialChecked,
    remoteChecked,
    cleared,
    selectValues,
    schoolLevel,
    states,
    cities,
    price,
    changeMyAnnouncements,
    changePresentialChecked, 
    changeRemoteChecked, 
    changeCleared, 
    changeSelectValues, 
    changeSchoolLevel, 
    changeStates, 
    changeCities, 
    changePrice,
    isTeacher
  } = props;

  const schoolLevelList = [
    { label: 'Selecione a escolaridade...', value: ''},
    { label: 'Infantil', value: 'infantil'},
    { label: 'Fundamental', value: 'fundamental'},
    { label: 'Médio', value: 'médio'},
    { label: 'Superior', value: 'superior'},
    { label: 'Pós-graduação', value: 'pós_graduação'},
    { label: 'Mestrado', value: 'mestrado'},
    { label: 'Doutorado', value: 'doutorado'},
  ]

  const handleClearFilters = () => {
    changeSelectValues({ cleared: cleared, state: cleared });
    changeMyAnnouncements(false);
    changePresentialChecked(false);
    changeRemoteChecked(false);
    changeCleared(!cleared)
    changeStates([]);
    changeCities([]);
    changePrice('');
    changeSchoolLevel('');
  }

  useEffect(() => {
    fetchStates().then(parseStates).then(changeStates);
  }, [selectValues.cleared]);

  useEffect(() => {
    changeCities([{ label: 'Carregando...', value: '' }]);
    fetchCitiesForState(selectValues.state).then(parseCities).then(changeCities);
  }, [selectValues.state]);

  const handleSelectChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;

    if(name === 'state') {
      changeSelectValues({ [name]: value })
    } else {
      changeSelectValues({ ...selectValues, [name]: value })
    }
  }

  return (
    <Container>
      {isTeacher && 
        <ActiveButton 
          state={myAnnouncements}
          onClick={() => changeMyAnnouncements(!myAnnouncements)}
        >
          Meus Anúncios
        </ActiveButton>
      }
      <StyledPopover name="Atendimento">
        <LabelPopover>Tipo de Atendimento:</LabelPopover>
        <ButtonPopover 
          value="presencial" 
          state={presentialChecked}
          onClick={() => changePresentialChecked(!presentialChecked)}
        >
          Presencial
        </ButtonPopover>
        <ButtonPopover 
          value="remoto" 
          state={remoteChecked}
          onClick={() => changeRemoteChecked(!remoteChecked)}
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
          value={price}
          onChange={(text) => changePrice(text)}
          placeholder="Ex.: 100.00"
        />
      </StyledPopover>
      <StyledPopover name="Grau de ensino" width="12rem">
        <LabelPopover>Escolaridade:</LabelPopover>
        <StyledSelect 
          id='schoolLevel' 
          name='schoolLevel' 
          data={schoolLevelList} 
          currentValue={schoolLevel}
          onChange={(e) => changeSchoolLevel(e.target.value)}
        />
      </StyledPopover>
      <ClearSpan onClick={handleClearFilters}>
        <Refresh />
        Limpar Filtros
      </ClearSpan>
    </Container>
  )
}