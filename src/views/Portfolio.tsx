import TextBoxInterfacemock from "../interfaces/TitleBoxInterface";
import { TitleBox } from "../components/TitleBox";
import { ButtonHome } from "../components/ButtonHome";

import ContactListInterfacemock from "../interfaces/ContactListInterface";
import Contact from "../components/Contact";
import Board from "../components/TicTacToe";

export function Portfolio() {
  return (
    <>
      <TitleBox prop={TextBoxInterfacemock[1]}></TitleBox>
      <Contact list={ContactListInterfacemock[0]}></Contact> <Board></Board>
      <ButtonHome></ButtonHome>
    </>
  );
}
