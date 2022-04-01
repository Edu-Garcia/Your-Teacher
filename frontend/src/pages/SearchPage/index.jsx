import React, { useContext, useEffect, useState } from 'react';

import { Container, ListCards } from './styles';
import { Header } from '../../components/Header';
import { FilterContainer } from '../../components/FilterContainer';
import { Card } from '../../components/Card';
import { Auth } from '../../context/AuthContext';

import api from '../../config/api';
import SearchOffIcon from '@mui/icons-material/SearchOff';

export const SearchPage = () => {
  const { token, setUser, username, user } = useContext(Auth);

  const [announcements, setAnnouncements] = useState([]);

  const [textSearch, setTextSearch] = useState('')
  const [myAnnouncements, setMyAnnouncements] = useState(false);
  const [presentialChecked, setPresentialChecked] = useState(false);
  const [remoteChecked, setRemoteChecked] = useState(false);
  const [cleared, setCleared] = useState(false);
  const [selectValues, setSelectValues] = useState({});
  const [schoolLevel, setSchoolLevel] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [price, setPrice] = useState('');

  const changeSearch = (text) => {
    setTextSearch(text)
  }
  const changePresentialChecked = (value) => {
    setPresentialChecked(value)
  }
  const changeMyAnnouncements = (value) => {
    setMyAnnouncements(value)
  }
  const changeRemoteChecked = (value) => {
    setRemoteChecked(value)
  }
  const changeCleared = (value) => {
    setCleared(value)
  }
  const changeSelectValues = (value) => {
    setSelectValues(value)
  }
  const changeSchoolLevel = (value) => {
    setSchoolLevel(value)
  }
  const changeStates = (value) => {
    setStates(value)
  }
  const changeCities = (value) => {
    setCities(value)
  }
  const changePrice = (value) => {
    setPrice(value)
  }

  const filterProps = { 
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
    changePrice 
  }

  useEffect(() => {
    try {
      api.get('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then((response) => {
        setUser(response.data);
      });
      
      api.get('/api/announcements', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then((response) => {
        setAnnouncements(response.data);
      });
    } catch (error) {
      console.log(error)
    }
  }, []);

  let filteredAnnouncements = [];
  
  if (announcements) {

    filteredAnnouncements = announcements.filter((item) => {
      return myAnnouncements 
        ? item.teacher.user.user_id === user.user_id
        : item.teacher.user.user_id !== user.user_id
    })

    // Input Search Filter
    filteredAnnouncements = textSearch 
      ? filteredAnnouncements.filter((item) => {
          const disciplineName = item.discipline.name.toLowerCase();
          const disciplineNameNormalize = disciplineName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          if (disciplineName.indexOf(textSearch) !== -1 || disciplineNameNormalize.indexOf(textSearch) !== -1) {
            return item;
          }
      }) 
      : filteredAnnouncements;

    // Attendance Filter
    if (presentialChecked && remoteChecked) {
      filteredAnnouncements = filteredAnnouncements.filter((item) => (
        item.teacher.attendance.toLowerCase() === 'all'
      ))
    } else {
      if (presentialChecked) {
        filteredAnnouncements = filteredAnnouncements.filter((item) => (
          item.teacher.attendance.toLowerCase() === 'presencial'
        ))
      }

      if (remoteChecked) {
        filteredAnnouncements = filteredAnnouncements.filter((item) => (
          item.teacher.attendance.toLowerCase() === 'remoto'
        ))
      }
    }

    // Local Filter
    filteredAnnouncements = typeof selectValues.state === 'string'
      ? filteredAnnouncements.filter((item) => (
          item.teacher.state === selectValues.state
        )) 
      : filteredAnnouncements;
    
    filteredAnnouncements = selectValues.city
    ? filteredAnnouncements.filter((item) => (
        item.teacher.city === selectValues.city
      )) 
    : filteredAnnouncements;

    // Price Filter
    filteredAnnouncements = price
    ? filteredAnnouncements.filter((item) => (
        parseFloat(item.cost)<=parseFloat(price)
      ))
    : filteredAnnouncements;
    
    // SchoolLevel Filter
    filteredAnnouncements = schoolLevel
    ? filteredAnnouncements.filter((item) => (
        item.school_level.toLowerCase() === schoolLevel.toLowerCase()
      )) 
    : filteredAnnouncements;
  }


  return (
    <Container>
      <Header 
        search 
        textSearch={textSearch}
        onChangeSearch={changeSearch}
        profile={username}
      />
      <FilterContainer props={filterProps} />
        {filteredAnnouncements.length
          ? (
            <ListCards>
              {filteredAnnouncements.map((item) => {
                return <Card key={item.announcement_id} props={item} />
              })}
            </ListCards>
          )
          : (
            <div className='not-found'>
              <SearchOffIcon />
              <span>Nenhum resultado encontrado</span>
            </div>
          )
        }
    </Container>
  )
}