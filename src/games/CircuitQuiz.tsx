import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import { Circuit, circuits } from '../constants/f1_lineup';

const OPTIONS_COUNT = 3;

export default function TrackQuiz() {
  const allTracks = Object.values(circuits);

  const [trackOrder, setTrackOrder] = useState(() => shuffleTracks(allTracks));
  const [currentTurn, setCurrentTurn] = useState(0);
  const [chosenTrack, setChosenTrack] = useState<Circuit | null>(null);
  const [currentOptions, setCurrentOptions] = useState<Circuit[]>([]);
  const [score, setScore] = useState(0);

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
    if (option.name === trackOrder[currentTurn].name) {
      setScore((s) => s + 1);
    }
    if (currentTurn >= trackOrder.length) return;
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Congrats finished!</Text>
        <View style={styles.finishedContainer}>
          <Text style={styles.statsText}>
            You scored: {score} / {trackOrder.length}
          </Text>
          <TouchableOpacity onPress={restartGame} style={styles.restartButton}>
            <Text style={styles.restartText}>Restart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Do you know this track?</Text>
      <View style={styles.statsContainer}>
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
            style={{ width: 300, height: 300, resizeMode: 'contain' }}
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
    </SafeAreaView>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Orbitron-Bold',
    color: colors.secondary,
  },
  imageContainer: {
    height: '50%',
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
  restartButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 8,
  },
  finishedContainer: {
    alignItems: 'center',
    gap: 16,
    marginTop: 24,
  },
  restartText: {
    color: colors.white,
    fontFamily: 'Orbitron-Bold',
  },
});
