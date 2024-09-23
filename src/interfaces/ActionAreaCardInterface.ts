export interface ActionAreaCardInterface{
    id:string;
    path: string;
    image?: string,
    alt: string,
    title: string,
    description: string,

}

const ActionAreaCardmock: ActionAreaCardInterface[]=[
    {
        id:"1",
        path: '/portfolio-project/interessi',
        image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'colori',
        title: 'Interessi',
        description: 'Scopri di più sui miei interessi!',

    },
    {
        id:"2",
        path: '/portfolio-project/portfolio',
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'lavorare',
        title: 'Portfolio',
        description: 'Ecco il mio Portfolio!',

    },
    {
        id:"3",
        path: '/portfolio-project/contatti',
        image: "https://images.unsplash.com/photo-1578234070702-2dd970cdae30?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'lavorare',
        title: 'Contatti',
        description: 'Ecco i miei contatti!',

    },


];
export default ActionAreaCardmock;

