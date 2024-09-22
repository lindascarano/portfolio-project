
import githubLogo from '/loghi/github-mark.png';
import linkedinLogo from '/loghi/LI-In-Bug.png';

export interface ContactListInterface {
  id: string;
  icon:string;
  text?: string;
  path:string;
  width:number;
}

const ContactListInterfacemock: ContactListInterface[] = [
  {
    id: "1",
    icon: githubLogo,
    text:"My GitHub",
    path:"https://github.com/lindascarano",
    width:35,
   
  },
  {
    id: "2",
    icon: linkedinLogo,
    text:"My LinkedIn®",
    path: "https://www.linkedin.com/in/linda-scarano-2b204653/",
    width:37,
  },

];
export default ContactListInterfacemock;
