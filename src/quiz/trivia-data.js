import he from "he";
let triviaData = [
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the corgi in Cowboy Bebop?",
    correct_answer: "Einstein",
    incorrect_answers: ["Edward", "Rocket", "Joel"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which one of these Manga titles was not created by Urasawa Naoki?",
    correct_answer: "My Father&#039;s Journal",
    incorrect_answers: ["Billy Bat", "20th Century Boys", "Monster"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "What song plays in the ending credits of the anime &quot;Ergo Proxy&quot;?",
    correct_answer: "Paranoid Android",
    incorrect_answers: ["Sadistic Summer", "Bittersweet Symphony", "Mad World"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "Krusty is the guild master of which guild in &quot;Log Horizon&quot;?",
    correct_answer: "D. D. D",
    incorrect_answers: [
      "Silver Sword",
      "West Wind Brigade",
      "Oceanic Systems (Marine Agency)",
    ],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the &quot;Dragon Ball&quot; franchise, what is the name of Goku&#039;s brother?",
    correct_answer: "Raditz",
    incorrect_answers: ["Gohan", "Vegeta", "Bardock"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which person from &quot;JoJo&#039;s Bizarre Adventure&quot; does NOT house a reference to a band, artist, or song earlier than 1980?",
    correct_answer: "Giorno Giovanna",
    incorrect_answers: ["Josuke Higashikata", "Jolyne Cujoh", "Johnny Joestar"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Toriko&quot;, which of the following foods is knowingly compatible with Toriko?",
    correct_answer: "Poison Potato",
    incorrect_answers: ["Mors Oil", "Alpacookie", "Parmesansho Fruit"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who was the Director of the 1988 Anime film &quot;Grave of the Fireflies&quot;?",
    correct_answer: "Isao Takahata",
    incorrect_answers: ["Hayao Miyazaki", "Satoshi Kon", "Sunao Katabuchi"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question: "Which studio made Cowboy Bebop?",
    correct_answer: "Sunrise",
    incorrect_answers: ["Bones", "Madhouse", "Pierriot"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "easy",
    question: "In the Naruto manga, what is the last name of Tsunade?",
    correct_answer: "Senju",
    incorrect_answers: ["Haruno", "Uzumaki", "Yamanaka"],
  },
];

triviaData = triviaData.map((item, i) => {
  return {
    ...item,
    question: he.decode(item.question),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) =>
      he.decode(incorrect)
    ),
  };
});

export default triviaData;
