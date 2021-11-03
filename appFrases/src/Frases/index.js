import AsyncStorage from '@react-native-async-storage/async-storage';

const Quotes = (key, value) => {
  AsyncStorage.setItem(key, value);
};

Quotes(
  '1',
  'A vingança nunca é plena, mata a alta e a envenena. - Seu Madruga',
);
Quotes(
  '2',
  'Estou falando com a mula, não com os seus carrapatos. - Seu Madruga',
);
Quotes('3', 'Que a força esteja com você. - Star Wars');
Quotes(
  '4',
  'Estradas? Para onde estamos indo, não precisamos de estradas. - Back to the Future',
);
Quotes(
  '5',
  'Ninguém vai bater tão forte como a vida, mas a questão não é o quão forte você consegue bater. É o quão forte você consegue apanhar e continuar seguindo em frente. É o quanto você consegue aguentar e continuar seguindo em frente. A vitória é feita assim. A vida já é difícil normalmente, mas, em alguns momentos, ela pode até te derrubar. No entanto, é preciso levantar sempre. - Rocky Balboa',
);
Quotes('6', 'Houston, temos um problema. - Apollo 13');
Quotes('7', 'Com grandes poderes vêm grandes responsabilidades. - Spider-Man');

export default Quotes;
