import { ButtonCard, Container, DetailsCard, ImageCard } from "./styles"

export const Card = ({ props }) => {

  const { 
    image,
    fullname = 'Eduardo Garcia', 
    city = 'Gravataí', 
    state = 'RS', 
    attendance = 'all', 
    cost = '25,00', 
    schoolLevel = 'Fundamental', 
    discipline = 'Português',
  } = props
  
  return (
    <Container>
      <ImageCard>
        {image 
          ? <img src={image} alt="" />
          : <span>Sem Foto</span>
        }
      </ImageCard>
      <DetailsCard>
        <span className="nome">{fullname}</span>
        <span className="local_atendimento">
          {city}, {state} - {attendance === 'all' ? 'Remoto e Presencial' : attendance}
        </span>
        <span className="valor">R$ {cost}/hora</span>
        <span className="school_level">{schoolLevel}</span>
        <span className="discipline">
          <div className="tag">
            {discipline}
          </div>
        </span>
      </DetailsCard>
      <ButtonCard>Detalhes do Anúncio</ButtonCard>
    </Container>
  )
}