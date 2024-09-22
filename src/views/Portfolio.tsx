import TextBoxInterfacemock from "../interfaces/TitleBoxInterface";
import { TitleBox } from "../components/TitleBox";
import { ButtonHome } from "../components/ButtonHome";

import ContactListInterfacemock from "../interfaces/ContactListInterface";
import Contact from "../components/Contact";
import DownloadButton from "../components/DownloadButton";

export function Portfolio() {
  return (
    <>
      <DownloadButton></DownloadButton>
      <TitleBox prop={TextBoxInterfacemock[1]}></TitleBox>
      <Contact list={ContactListInterfacemock[0]}></Contact>
      <ButtonHome></ButtonHome>
    </>
  );
}
