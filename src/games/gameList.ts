type Game = {
    id: string;
    name: string;
    description: string;
}

const gamesList: Game[] = [
    { id: '1', name: 'Lights Out', description: 'Test your reaction time.' },
    { id: '2', name: 'Take Turns', description: 'Take the corners.' },
    { id: '3', name: 'Circuit Quiz', description: 'Test your knowledge of F1 circuits.' },
    { id: '4', name: 'Connect driver to team', description: 'Do you know which driver belongs to which team?' },
];

export default gamesList;