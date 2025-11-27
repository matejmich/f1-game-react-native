import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useShallow } from 'zustand/react/shallow';
import GameLayout from '../components/GameLayout';
import RedButton from '../components/RedButton';
import colors from '../constants/colors';
import { Circuit, circuits } from '../constants/f1_lineup';
import { useScoringStore } from '../stores/ScoringStore';
import gamesList from './gameList';

const OPTIONS_COUNT = 3;

export default function TrackQuiz() {
  const allTracks = Object.values(circuits);
  const gameInfo = gamesList.find((game) => game.id === '3');

  const [trackOrder, setTrackOrder] = useState(() => shuffleTracks(allTracks));
  const [currentTurn, setCurrentTurn] = useState(0);
  const [chosenTrack, setChosenTrack] = useState<Circuit | null>(null);
  const [currentOptions, setCurrentOptions] = useState<Circuit[]>([]);
  const [score, setScore] = useState(0);

  const { scores, setScores } = useScoringStore(
    useShallow((state) => ({
      scores: state.scores,
      setScores: state.setScores,
    })),
  );
  const storeScore = scores['3'];

  useEffect(() => {
    const currentTrack = trackOrder[currentTurn];
    if (!currentTrack) return;

    setChosenTrack(currentTrack);

    const optionsWithoutCurrent = allTracks.filter((c) => c.name !== currentTrack.name);

    const incorrect = getRndTracks(optionsWithoutCurrent);

    const result = new Array(OPTIONS_COUNT);
    const correctIndex = Math.floor(Math.random() * OPTIONS_COUNT);

    result[correctIndex] = currentTrack;

    let wrongIdx = 0;
    for (let i = 0; i < OPTIONS_COUNT; i++) {
      if (!result[i]) {
        result[i] = incorrect[wrongIdx++];
      }
    }

    setCurrentOptions(result);
  }, [currentTurn, trackOrder]);

  const handleAnswer = (option: Circuit) => {
    const isCorrect = option.name === trackOrder[currentTurn].name;

    const nextScore = isCorrect ? score + 1 : score;

    // last question
    if (currentTurn >= trackOrder.length - 1) {
      const finalScore = nextScore / trackOrder.length;

      if (storeScore === undefined || finalScore > storeScore) {
        setScores('3', finalScore);
      }
    }

    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setCurrentTurn((prev) => prev + 1);
  };

  const restartGame = () => {
    setTrackOrder(() => shuffleTracks(allTracks));
    setCurrentTurn(0);
    setChosenTrack(null);
    setCurrentOptions([]);
    setScore(0);
  };

  if (currentTurn >= trackOrder.length) {
    return (
      <GameLayout title="Congrats finished!">
        <View style={styles.finishedContainer}>
          <Text style={styles.statsText}>
            You scored: {score} / {trackOrder.length}
          </Text>
          <RedButton onPress={restartGame} title="Restart" />
        </View>
      </GameLayout>
    );
  }

  return (
    <GameLayout title={gameInfo?.name || ''} description={gameInfo?.description || ''}>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Highest score: {(storeScore || 0) * allTracks.length}</Text>
        <Text style={styles.statsText}>
          Score: {score} / {trackOrder.length}
        </Text>
        <Text style={styles.statsText}>
          Turn: {currentTurn + 1} / {trackOrder.length}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        {chosenTrack && (
          <Image
            // FIXME: solve ts error
            // @ts-ignore
            source={chosenTrack.image}
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
              // borderColor: 'blue',
              // borderWidth: 1,
              alignSelf: 'center',
            }}
          />
        )}
      </View>
      <View style={styles.optionsContainer}>
        {currentOptions.map((option) => (
          <TouchableOpacity
            key={option.name}
            onPress={() => handleAnswer(option)}
            style={styles.optionButton}
          >
            <Text style={styles.optionCountry}>{option.country}</Text>
            <Text style={styles.optionName}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </GameLayout>
  );
}

function getRndTracks(list: Circuit[]) {
  const copy = [...list];
  const result = [];
  while (result.length < OPTIONS_COUNT - 1 && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return result;
}

function shuffleTracks(allTracks: Circuit[]) {
  const shuffled = [...allTracks].sort(() => Math.random() - 0.5);
  return shuffled;
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '50%',
    // borderColor: 'purple',
    // borderWidth: 2,
  },
  statsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  statsText: {
    fontFamily: 'Orbitron-Medium',
    color: colors.white,
    marginVertical: 4,
  },
  optionsContainer: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    paddingHorizontal: 32,
  },
  optionButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  optionCountry: {
    color: colors.white,
    fontFamily: 'Orbitron-Medium',
    fontSize: 16,
  },
  optionName: {
    color: colors.white,
    fontFamily: 'Orbitron-Medium',
    fontSize: 12,
  },
  finishedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 24,
    flex: 1,
  },
});
