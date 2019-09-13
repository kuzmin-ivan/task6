import { letterWords } from './letter-word-bank';
import { getRandomArbitrary } from './actionsUtil';
import { ILetter } from '../reducers/types';

const minWordsInLetter = 100;
const minWordsInLetterTheme = 2;
const maxWordsInLetterTheme = 5;
const maxWordsInLetter = 300;
const signs = ['.', '!', '?', '...'];

const senders = new Map([
  ['ya-mini-logo.png', 'Команда Яндекс.Почты'],
  ['elon_musk.png', 'Илон Маск'],
  ['henry_ford.png', 'Генри Форд'],
  ['nikola_tesla.png', 'Никола Тесла'],
  ['thomas_edison.png', 'Томас Едисон'],
  ['albert_einstein.png', 'Альберт Эйнштейн'],
  ['abraham_lincoln.png', 'Авраам Линкольн']
]);

function genSentence(isTheme: boolean): string {
  const words = [];
  let count = 0;
  if (isTheme) {
    count = getRandomArbitrary(minWordsInLetterTheme, maxWordsInLetterTheme);
  } else {
    count = getRandomArbitrary(minWordsInLetter, maxWordsInLetter);
  }
  for (let i = 0; i < count; i++) {
    words.push(letterWords[getRandomArbitrary(0, letterWords.length - 1)]);
  }
  let index = 0;
  while (index < words.length - 5) {
    words[index] += ',';
    index += getRandomArbitrary(5, 15);
  }
  words[words.length - 1] += signs[getRandomArbitrary(0, signs.length - 1)];
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1, words[0].length);
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    sentence += `${words[i]} `;
  }
  return sentence;
}

function genLetterText(isTheme: boolean): string {
  let count = 0;
  let letter = '';
  if (isTheme) {
    count = 3;
  } else {
    count = getRandomArbitrary(minWordsInLetter, maxWordsInLetter);
  }
  while (!(letter.split(' ').length >= count)) {
    letter += genSentence(isTheme);
  }
  return letter;
}

function getLetterDate() {
  const date = new Date();
  const rusNames = new Map([
    [0, 'янв'],
    [1, 'фев'],
    [2, 'март'],
    [3, 'апр'],
    [4, 'мая'],
    [5, 'июн'],
    [6, 'июл'],
    [7, 'авг'],
    [8, 'сен'],
    [9, 'окт'],
    [10, 'нояб'],
    [11, 'дек']
  ]);

  return `${date.getDate()} ${rusNames.get(date.getMonth())}`;
}

function getRandomKey(collection: Map<string, string>) {
  const keys = Array.from(collection.keys());
  return keys[Math.floor(Math.random() * keys.length)];
}
let nextLetterId = 0;

export function generateRandomLetter(): ILetter {
  const senderImage = getRandomKey(senders);
  const sender = senders.get(senderImage) || '';
  const date = getLetterDate();
  const letterTheme = genLetterText(true);
  const text = genLetterText(false);

  return {
    letterTheme,
    text,
    date,
    sender,
    senderImage,
    showing: true,
    removing: false,
    visible: false,
    checked: false,
    isRead: false,
    id: nextLetterId++
  };
}
