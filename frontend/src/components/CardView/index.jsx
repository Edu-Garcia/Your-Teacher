import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ContactButtons, Container, DetailsCard, ImageCard } from "./styles"
import { filesURL } from "../../config/url";
import { NoPhotography, MailOutline, WhatsApp, Delete } from '@mui/icons-material';
import { Auth } from '../../context/AuthContext';
import { StyledDialog } from "../StyledDialog";
import api from "../../config/api";

export const CardView = ({ props }) => {
  
  const { username, user: loggedUser, token } = useContext(Auth)
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const navigate = useNavigate();

  const { announcement_id, image_name, cost, teacher } = props;
  const { state, city, attendance, user } = teacher;
  const { capitalized_fullname: fullname, email, phone, user_id } = user;
  const image = `${filesURL}/${image_name}`

  const helloMessage = `Olá%20${fullname},%20me%20chamo%20${username}.%20Encontrei%20seu%20anúncio%20na%20plataforma%20YourTeacher.`;
  const defaultMessage = `${helloMessage}%20Estou%20interessado%20em%20aprender%20com%20você.`;

  const handleMail = (e) => {
    const email = e.target.value;
    window.open(`mailto:${email}?subject=Anúncio%20YourTeacher;body=${defaultMessage}`);
  }
  
  const handleMessage = (e) => {
    const phone = e.target.value
    window.open(`https://web.whatsapp.com/send?phone=55${phone}&text=${defaultMessage}`);
  }
  
  const handleDelete = (value) => {
    const announcement_id = value
    console.log(announcement_id)

    try {
      if (token) {
        api.delete(`/api/announcements/${announcement_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(response => {
          console.log(response)
          navigate('/search', { replace: true });
        });
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <ImageCard>
        {image_name
          ? <img src={image} alt="Foto do anúncio" />
          : <NoPhotography />
        }
      </ImageCard>
      <DetailsCard>
        <span className="nome">{fullname}</span>
        <span className="local_atendimento">{city}, {state}</span>
        <span className="tipo_atendimento">{attendance === 'all' ? 'Remoto e Presencial' : attendance}</span>
        <span className="valor">R$ {cost}/hora</span>
      </DetailsCard>
      <ContactButtons>
        <button className="email" value={email} onClick={handleMail}>
          <MailOutline /> 
          Email
        </button>
        <button className="whatsapp" value={phone} onClick={handleMessage}>
          <WhatsApp /> 
          WhatsApp
        </button>
        {loggedUser.user_id === user_id && (
          <button 
            className="delete" 
            value={announcement_id} 
            onClick={() => setIsDialogVisible(true)}
          >
            <Delete /> 
            Excluir Anúncio
          </button>
        )}
      </ContactButtons>
      {isDialogVisible && (
        <StyledDialog
          title='Você tem certeza?' 
          onClose={() => setIsDialogVisible(false)}
        >
          <div className="dialogText">
            <p>
              Todas as informações desse anúncio serão excluídos da plataforma.
            </p>
          </div>
          <div className="buttonsDialog">
            <button className='cancel' onClick={() => setIsDialogVisible(false)}>
              Cancelar
            </button>
            <button className='delete' onClick={() => handleDelete(announcement_id)}>
              Excluir
            </button>
          </div>
        </StyledDialog>
      )}
    </Container>
  )
}