import { Container, Content, Name, Date, LastMsg } from "./styles";
import userImg from "../../assets/img/user.png";

export function ChatListItem() {
  return (
    <Container>
      <img
        src="https://kabirnayeem99.github.io/assets/img/profile.png"
        alt=""
      />
      <Content>
        <div>
          <Name>Murilo Lopes</Name>
          <Date>19:00</Date>
        </div>
        <div>
          <LastMsg>
            <p>
              a live vai ficar por quanto tempo no ar depois de terminada? ?
            </p>
          </LastMsg>
        </div>
      </Content>
    </Container>
  );
}
