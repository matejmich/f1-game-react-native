import CircuitQuiz from "./CircuitQuiz";
import LightsOut from "./LightsOut";

type Game = {
    id: string;
    name: string;
    description: string;
    component?: React.ComponentType;
}

export const gamesList: Game[] = [
    { id: '1', name: 'Lights Out', description: 'Test your reaction time.', component: LightsOut },
    { id: '2', name: 'Take Turns', description: 'Take the corners.' },
    { id: '3', name: 'Circuit Quiz', description: 'Test your knowledge of F1 circuits.', component: CircuitQuiz },
    { id: '4', name: 'Connect driver to team', description: 'Do you know which driver belongs to which team?' },
    { id: '5', name: 'Pitstop incoming', description: 'Pick the right tires considering the conditions.' },
    { id: '6', name: 'Brake check', description: 'Brake the right amount to avoid lockups.' },
];

export default gamesList;