import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Circuit, circuits } from '../constants/f1_lineup';

const OPTIONS_COUNT = 4;

export default function TrackQuiz() {
  const allTracks = Object.values(circuits);

  const [trackOrder, setTrackOrder] = useState(() => shuffleTracks(allTracks));
  const [currentTurn, setCurrentTurn] = useState(0);
  const [chosenTrack, setChosenTrack] = useState<Circuit | null>(null);
  const [currentOptions, setCurrentOptions] = useState<Circuit[]>([]);
  const [score, setScore] = useState(0);

  // Build options whenever currentTurn changes
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
      <SafeAreaView>
        <Text>Finished!</Text>
        <Text>{score}</Text>
        <TouchableOpacity onPress={restartGame}>
          <Text>Restart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      {chosenTrack && (
        <Image
          source={chosenTrack.image}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
      )}

      {currentOptions.map((option) => (
        <TouchableOpacity key={option.name} onPress={() => handleAnswer(option)}>
          <Text>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

// Utility to pick random incorrect options
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
