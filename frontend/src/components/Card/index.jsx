import { ButtonCard, Container, DetailsCard, ImageCard } from "./styles"
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { filesURL } from "../../config/url";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Card = ({ props }) => {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { 
    announcement_id,
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

  const handleClick = () => {
    setSearchParams({ id: announcement_id });
    navigate(`/search/${announcement_id}`);
  }

  function capitalize(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    <Container>
      <ImageCard>
        {image_name
          ? <img src={image} alt="Foto do anúncio" />
          : <NoPhotographyIcon />
        }
      </ImageCard>
      <DetailsCard>
        <span className="nome">{fullname}</span>
        <span className="local_atendimento">
          {city}, {state} - {attendance === 'all' ? 'Remoto e Presencial' : capitalize(attendance)}
        </span>
        <span className="valor">R$ {cost}/hora</span>
        <span className="school_level">{capitalize(school_level)}</span>
        <span className="discipline">
          <div className="tag">
            {disciplineName}
          </div>
        </span>
      </DetailsCard>
      <ButtonCard onClick={handleClick}>Detalhes do Anúncio</ButtonCard>
    </Container>
  )
}