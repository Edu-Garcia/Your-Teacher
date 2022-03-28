import { useContext, useState } from 'react';

import { Button } from "../Button"
import { Container } from "./styles"
import { useNavigate } from 'react-router-dom'
import { StyledDropdown } from '../StyledDropdown';
import { SearchField } from '../SearchField';
import { StyledDialog } from '../StyledDialog';
import { Auth } from '../../context/AuthContext';

export const Header = ({ search, textSearch, onChangeSearch, link, buttonText, profile }) => {
  const { token, setToken, user } = useContext(Auth);
  let navigate = useNavigate();

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleDelete = () => {
    try {
      if (token) {
        api.delete(`/api/users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(() => {
          setToken(null);
          navigate('/', { replace: true });
        });
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1 className="homepage" onClick={() => navigate('/', { replace: true })}>YourTeacher</h1>

      {search && (
        <SearchField 
          search 
          value={textSearch}
          onChange={(text) => onChangeSearch(text)}
          placeholder="Procure a disciplina que deseja" 
        />
      )}

      {buttonText && (
        <Button
          color='#51238A'
          background='white'
          onClick={() => navigate(`${link}`)}
        >
          {buttonText}
        </Button>
      )}

      {isDialogVisible && (
        <StyledDialog 
          title='Você tem certeza?' 
          onClose={() => setIsDialogVisible(false)}
        >
          <div className="dialogText">
            <p>
              Além de suas informações, os anúncios feitos na plataforma e os respectivos dados também 
              serão deletados ao excluir sua conta.
            </p>
          </div>
          <div className="buttonsDialog">
            <button className='cancel' onClick={() => setIsDialogVisible(false)}>
              Cancelar
            </button>
            <button className='delete' onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </StyledDialog>
      )}

      {profile && (
        <StyledDropdown 
          className='profile' 
          profile={profile} 
          onOpen={() => setIsDialogVisible(true)} 
        />
      )}
    </Container>
  )
}