import { ButtonHome } from "../components/ButtonHome";
import Contact from "../components/Contact";


import { TitleBox } from "../components/TitleBox";
import ContactListInterfacemock from "../interfaces/ContactListInterface";
import TextBoxInterfacemock from "../interfaces/TitleBoxInterface";

export function Contatti() {
  return (
    <>
    
      <TitleBox prop={TextBoxInterfacemock[0]}></TitleBox>
      <Contact list={ContactListInterfacemock[1]}></Contact>
      <ButtonHome></ButtonHome>
    </>
  );
}
