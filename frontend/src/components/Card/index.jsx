import { ButtonCard, Container, DetailsCard, ImageCard } from "./styles"
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { filesURL } from "../../config/url";

export const Card = ({ props }) => {

  const { 
    image_name,
    cost, 
    school_level,
    teacher,
    discipline
  } = props;

  const { state, city, attendance, user } = teacher;

  const { capitalized_fullname: fullname } = user;

  const { name: disciplineName } = discipline;

  const image = `${filesURL}/${image_name}`
  
  return (
    <Container>
      <ImageCard>
        {image_name 
          ? <img src={image} alt="" />
          : <NoPhotographyIcon />
        }
      </ImageCard>
      <DetailsCard>
        <span className="nome">{fullname}</span>
        <span className="local_atendimento">
          {city}, {state} - {attendance === 'all' ? 'Remoto e Presencial' : attendance}
        </span>
        <span className="valor">R$ {cost}/hora</span>
        <span className="school_level">{school_level}</span>
        <span className="discipline">
          <div className="tag">
            {disciplineName}
          </div>
        </span>
      </DetailsCard>
      <ButtonCard>Detalhes do Anúncio</ButtonCard>
    </Container>
  )
}