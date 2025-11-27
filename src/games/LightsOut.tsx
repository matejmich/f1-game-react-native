import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useShallow } from 'zustand/shallow';
import GameLayout from '../components/GameLayout';
import RedButton from '../components/RedButton';
import colors from '../constants/colors';
import { useScoringStore } from '../stores/ScoringStore';
import gamesList from './gameList';

type GameState = 'idle' | 'running' | 'timing' | 'finished';

// time range is from 150 to 3150 ms where anything below 150 ms is considered a perfect and anything above 3000 ms is considered too slow to count

export default function LightsOut() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [readyTime, setReadyTime] = useState<number | null>(null);
  const [falseStart, setFalseStart] = useState(false);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  const gameInfo = gamesList.find((game) => game.id === '1');

  const { scores, setScores } = useScoringStore(
    useShallow((state) => ({
      scores: state.scores,
      setScores: state.setScores,
    })),
  );
  const storedScore = scores['1'];
  const storedTime = 3150 - storedScore * 3000;

  const startGame = () => {
    const randomDelay = generateRandomTimer();
    setGameState('running');

    setTimeout(() => setLights([true, false, false, false, false]), 1000);
    setTimeout(() => setLights([true, true, false, false, false]), 2000);
    setTimeout(() => setLights([true, true, true, false, false]), 3000);
    setTimeout(() => setLights([true, true, true, true, false]), 4000);
    setTimeout(() => setLights([true, true, true, true, true]), 5000);
    // start the timer after all lights are on
    setTimeout(() => {
      setGameState('timing');
      setLights([false, false, false, false, false]);
      setReadyTime(Date.now());
    }, 5000 + randomDelay);
  };

  const generateRandomTimer = () => {
    return Math.random() * (3 * 1000); // between 0 and 3 seconds + 5 seconds for lights
  };

  const stopGame = () => {
    if (gameState !== 'timing' || !readyTime) {
      setGameState('finished');
      setFalseStart(true);
      return;
    }
    const reactionTime = Date.now() - readyTime;
    const score = 1 - (reactionTime - 150) / 3000;
    const currentBest = scores['1'] || 0;
    if (score > currentBest) {
      setScores('1', score);
    }
    setReactionTime(reactionTime);
    setGameState('finished');
    setLights([false, false, false, false, false]);
  };

  const resetGame = () => {
    setGameState('idle');
    setLights([false, false, false, false, false]);
    setFalseStart(false);
    setReactionTime(null);
  };

  return (
    <GameLayout title={gameInfo?.name || ''} description={gameInfo?.description || ''}>
      <View style={styles.statsContainer}>
        {storedScore && (
          <Text style={styles.statsText}>
            Best time: {storedTime === 0 ? 'under 150 ms' : `${storedTime} ms`}
          </Text>
        )}
      </View>
      <Lights lights={lights} />
      {gameState === 'idle' ? (
        <RedButton onPress={startGame} title="Start" />
      ) : gameState === 'running' || gameState === 'timing' ? (
        <RedButton onPress={stopGame} title="Go!" />
      ) : (
        <>
          {reactionTime && <Text>Your reaction time: {reactionTime} ms</Text>}
          {falseStart && (
            <Text style={{ color: 'red' }}>False start! Wait for the lights to go off.</Text>
          )}
          <RedButton onPress={resetGame} title="Restart" />
        </>
      )}
    </GameLayout>
  );
}

function Lights({ lights }: { lights: boolean[] }) {
  return (
    <View style={styles.lightsOuter}>
      {lights.map((on, index) => (
        <View key={index} style={on ? styles.lightOn : styles.lightOff} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lightsOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  lightOn: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  lightOff: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
  statsText: {
    fontFamily: 'Orbitron-Medium',
    color: colors.white,
    marginVertical: 4,
    textAlign: 'center',
  },
  statsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});
