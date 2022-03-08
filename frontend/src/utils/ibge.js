import axios from 'axios';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

const sortByLabelAscending = (a, b) => {
  return a.label.localeCompare(b.label);
}

export const parseStates = (states) => {
  const data = states.data.map((state) => {
    const { nome, sigla } = state

    return {label: nome, value: sigla};
  }).sort(sortByLabelAscending);

  const defaultOptions = {label: 'Selecione o estado...', value: ''}
  return [defaultOptions, ...data];
}

export const parseCities = (cities) => {
  const data = cities.data.map((city) => {
    const { nome } = city

    return {label: nome, value: nome};
  }).sort(sortByLabelAscending);

  const defaultOptions = {label: 'Selecione a cidade...', value: ''}
  return [defaultOptions, ...data];
}

export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`;
  return axios.get(url);
}

export const fetchCitiesForState = (state) => {
  if (!state) return Promise.resolve({data: []});
  
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
  return axios.get(url);
}