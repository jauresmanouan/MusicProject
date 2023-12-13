import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Liste des notes de musique
const notes = ['Do', 'Do#', 'Ré', 'Ré#', 'Mi', 'Mi#', 'Fa', 'Fa#', 
              'Sol', 'Sol#', 'La', 'La#', 'Si', 'Si#'];

// Fonction pour obtenir une note aléatoire
const getRandomNote = () => {
  const randomIndex = Math.floor(Math.random() * notes.length);
  return notes[randomIndex];
};

// Composant principal de l'application
const MusicApp = () => {
  // État pour stocker la note actuelle
  const [currentNote, setCurrentNote] = useState('');

  // Utilisation de useEffect pour exécuter du code après le rendu initial
  useEffect(() => {
    // Définir un intervalle pour changer la note toutes les 2 secondes
    const intervalId = setInterval(() => {
      const randomNote = getRandomNote();
      setCurrentNote(randomNote);
    }, 3000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau vide signifie que useEffect s'exécute une seule fois après le montage du composant

  // Rendu de l'interface utilisateur
  return (
    <View style={styles.container}>
      <Text style={styles.noteText}>{currentNote}</Text>
    </View>
  );
  
};

// Styles pour l'interface utilisateur
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  noteText: {
    fontSize: 150,
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    color: 'white',
    shadowColor: 'blue',
    shadowOffset: {width: 7, height: 7},
    shadowOpacity: 1,
    shadowRadius: 0,
  },
})

export default MusicApp;
