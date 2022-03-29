import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { CardView } from "../../components/CardView";
import { Calendar } from "../../components/Calendar";
import { Auth } from "../../context/AuthContext";
import { AnnouncementContent, Container, Info } from "./styles";
import api from "../../config/api";

export const AnnouncementView = () => {
  const { username, user: loggedUser, token } = useContext(Auth);
  const { id } = useParams();

  const [announcement, setAnnouncement] = useState(null);
  let isTeacher;
  let idLattes;
  let helloMessage;
  let announcementId;
  let phoneTeacher;

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
    const { teacher, announcement_id } = announcement;
    const { lattes, user } = teacher;
    const { capitalized_fullname: fullname, user_id, phone } = user;

    idLattes = lattes;
    announcementId = announcement_id;
    phoneTeacher = phone;
    helloMessage = `Olá%20${fullname},%20me%20chamo%20${username}.%20Encontrei%20seu%20anúncio%20na%20plataforma%20YourTeacher.`;
    isTeacher = loggedUser.user_id === user_id;
  }

  function capitalize(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

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
            {idLattes && (
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
              <p>{capitalize(announcement.description)}</p>
            </div>
            <div className="discipline">
              <h2>{capitalize(announcement.discipline.name)}</h2>
              <p>{capitalize(announcement.discipline.description)}</p>
            </div>
            <div className="calendar">
              <h2 className="labelCalendar">Horários Disponíveis</h2>
              <Calendar
                isTeacher={isTeacher}
                helloMessage={helloMessage}
                phoneTeacher={phoneTeacher}
                announcement_id={announcementId}
              />
            </div>
          </Info>
        </AnnouncementContent>
      </Container>
    )
  );
}