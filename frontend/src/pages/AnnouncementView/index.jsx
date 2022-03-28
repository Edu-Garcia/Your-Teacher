import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { CardView } from "../../components/CardView";
import { Auth } from "../../context/AuthContext";
import { AnnouncementContent, Container, Info } from "./styles";
import api from "../../config/api";

export const AnnouncementView = () => {
  const { username, token } = useContext(Auth);
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  let lattes;

  useEffect(() => {
    api.get(`/api/announcements/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then(response => {
      setAnnouncement(response.data[0]);
    });
  }, [])

  if (announcement) {
    lattes = announcement.teacher.lattes;
  }

  function capitalize(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  const idLattes = '4059622988592526';
  const lorem = 'sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

  return (
    announcement && (
      <Container>
        <Header profile={username}/>
        <AnnouncementContent>
          <CardView props={announcement} />
          <Info>
            <div className="biography">
              <h2>Biografia do professor</h2>
              <p>{capitalize(lorem)}</p>
            </div>
            {lattes && (
              <div className="lattes">
                <h2>Currículo Lattes</h2>
                <p>
                  <a href={`http://lattes.cnpq.br/${idLattes}`} target="_blank">
                    {`http://lattes.cnpq.br/${idLattes}`}
                  </a>
                </p>
              </div>
            )}
            <div className="description">
              <h2>{capitalize(announcement.title)}</h2>
              <p>{capitalize(lorem)}</p>
            </div>
            <div className="discipline">
              <h2>{capitalize(announcement.discipline.name)}</h2>
              <p>{capitalize(lorem)}</p>
            </div>
          </Info>
        </AnnouncementContent>
      </Container>
    )
  );
}