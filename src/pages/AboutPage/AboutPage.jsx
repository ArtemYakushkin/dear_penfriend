import {
  Wrapper,
  BoxLeft,
  BoxRight,
  Img,
  Text,
  Span,
  TextTop,
  List,
  Item,
} from "./AboutPage.styled";
import { ContainerContent } from "../../components/ContainerContent/ContainerContent.styled";
import avatar from "../../image/main-avatar.jpg";

const About = () => {
  return (
    <ContainerContent>
      <Wrapper>
        <BoxLeft>
          <Img src={avatar} alt="avatar" />
        </BoxLeft>
        <BoxRight>
          <Text>
            Привіт. Мене звати Анна і я авторка ідеї створення
            <Span> Dear Penfriend</Span>. Що це і навіщо?
          </Text>
          <Text>
            Треба спробувати, щоб зрозуміти. Тож мерщій реєструватися і
            занурюватися в атмосферу дружнього спілкування. Якщо більш детально
            і є час, розповім про реалізацію моєї ідеї.
          </Text>
          <Text>
            Я вчитель англійської і в важкий час пандемії стала викладати
            онлайн. Знайшла своїх учнів і свою систему викладання. Але{" "}
            <Span>2022</Span> рік вніс печальні корективи в систему через війну.
            Учні стали більш замкнуті і тема друзів взагалі визивала сум. Тож
            виникла ідея знаходити друзів в будь-який час зі всього світу.
            Розповіла чоловіку про свою ідею і він втілив її в той вигляд, який
            Ви зараз бачите.
          </Text>
          <Text>
            Тож реєструйтесь, знайомтесь з правилами і вперед в подорож дружби,
            підтримки, прояву своїх талантів і англійської атмосфери. Я готова
            стати Вашим першим
            <Span> penfriend</Span> - другом по листуванню:
          </Text>
          <TextTop>
            "Dear penfriend, Hi. My name is Anna. What is your name"?
          </TextTop>
          <List>
            <Item>
              <Text>Автор:</Text>
              <Span>Анна Якушкіна</Span>
            </Item>
            <Item>
              <Text>Дизайнер та розробник:</Text>
              <Span>Артем Якушкін</Span>
            </Item>
          </List>
        </BoxRight>
      </Wrapper>
    </ContainerContent>
  );
};

export default About;
