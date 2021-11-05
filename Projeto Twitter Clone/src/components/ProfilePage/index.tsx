import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";
import ProfileImg from "../../assets/img.jpg";
import Feed from "../Feed";

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar src={ProfileImg} alt="Foto de perfil" />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Costa</h1>
        <h2>@matheusz_98</h2>

        <p>Desenvolvedor front-end.</p>

        <ul>
          <li>
            <LocationIcon />
            Canoas, RS
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de outubro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>80</strong>
          </span>
          <span>
            <strong>20 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
