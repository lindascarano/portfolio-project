export interface ActionAreaCardInterface{
    id:string;
    path: string;
    image: string,
    alt: string,
    title: string,
    description: string,

}

const ActionAreaCardmock: ActionAreaCardInterface[]=[
    {
        id:"1",
        path: '/portfolio-project/interessi',
        image: "https://images.unsplash.com/photo-1516986018469-1f121d166270?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'colori',
        title: 'Interessi',
        description: 'Scopri di più sui miei interessi!',

    },
    {
        id:"2",
        path: '/portfolio-project/lavori',
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'lavorare',
        title: 'Lavori',
        description: 'Scopri di più sui miei lavori!',

    },
    {
        id:"2",
        path: '/portfolio-project/contatti',
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'lavorare',
        title: 'Contatti',
        description: 'Ecco i miei contatti!',

    },


];
export default ActionAreaCardmock;

