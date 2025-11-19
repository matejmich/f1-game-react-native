import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gamesStyles } from './gamesStyles';

type GameState = 'idle' | 'running' | 'timing' | 'finished';

export default function LightsOut() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [readyTime, setReadyTime] = useState<number | null>(null);
  const [falseStart, setFalseStart] = useState(false);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

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
    <View>
      <Lights lights={lights} />
      <Text>aaa</Text>
      {gameState === 'idle' ? (
        <TouchableOpacity style={gamesStyles.gameButton} onPress={startGame}>
          <Text>Start</Text>
        </TouchableOpacity>
      ) : gameState === 'running' || gameState === 'timing' ? (
        <TouchableOpacity style={gamesStyles.gameButton} onPress={stopGame}>
          <Text>Go!</Text>
        </TouchableOpacity>
      ) : (
        <>
          {reactionTime && <Text>Your reaction time: {reactionTime} ms</Text>}
          {falseStart && (
            <Text style={{ color: 'red' }}>False start! Wait for the lights to go off.</Text>
          )}
          <TouchableOpacity
            style={gamesStyles.gameButton}
            onPress={() => {
              setGameState('idle');
              setFalseStart(false);
              setReactionTime(null);
            }}
          >
            <Text>Restart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

function Lights({ lights }: { lights: boolean[] }) {
  return (
    <View style={styles.lightsOuter}>
      {lights.map((on) => (
        <View style={on ? styles.lightOn : styles.lightOff} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lightsOuter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  light: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  lightOn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  lightOff: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
  },
});
