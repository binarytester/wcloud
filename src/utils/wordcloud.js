const { removeStopwords, porBr } = require("stopword");

// Cleaning the text
const cleanText = (text) => {
  // Removendo pontuações e espaços
  let textCleaned = text.trim().split(" ");
  textCleaned = textCleaned.map((word) =>
    word.replace(/[.,/#!$%^&*;:{}=\-_'`~()]/g, "")
  );
  const newString = removeStopwords(textCleaned, porBr);
  return newString;
};

// definindo respectivos pesos das palavras
const weightWords = (text) => {
  const weigths = [];
  const words = [];
  let count = 0;

  let k = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i] == text[j]) {
        count++;
      }
    }
    weigths[k] = count;
    words[k] = text[i];
    k++;
    count = 0;
  }

  return [words, weigths];
};

// Removing duplicates
const removeEqual = (words, weigths) => {
  const palavraMap = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const weight = weigths[i];

    if (!palavraMap.has(word)) {
      // Se a palavra não estiver no mapa, adicione-a com o peso correspondente
      palavraMap.set(word, weight);
    }
  }

  return palavraMap;
};

// transform Map to vetor
const mapToVetor = (map) => {
  let vetorWords = [];

  map.forEach((key, value) => {
    vetorWords.push([value, key]);
  });

  return vetorWords;
};

const createVetorWeights = (text) => {
  let cleanedTxt = cleanText(text);
  let [palavras, pesos] = weightWords(cleanedTxt);
  let semDuplicatas = removeEqual(palavras, pesos);
  let vetorWords = mapToVetor(semDuplicatas);
  return vetorWords;
};

export default createVetorWeights;
