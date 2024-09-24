import lettura from "/interessi/kimberly-farmer-lUaaKCUANVI-unsplash.jpg";
import pittura from "/interessi/anna-kolosyuk-D5nh6mCW52c-unsplash.jpg";
import viaggi from "/interessi/denisse-leon-J7CjWufjmg4-unsplash.jpg";
import musica from "/interessi/andrey-matveev-UgM8JMcU9K8-unsplash.jpg";

export interface InterestaInterface {
  id: string;
  image: string;
  text: string;
}

const InterestaInterfacemock: InterestaInterface[] = [
  {
    id: "1",
    image: lettura,
    text: "Lettura",
  },
  {
    id: "2",
    image: pittura,
    text: "Pittura",
  },
  {
    id: "3",
    image: viaggi,
    text: "Viaggi",
  },
  {
    id: "3",
    image: musica,
    text: "Musica",
  },
];
export default InterestaInterfacemock;
