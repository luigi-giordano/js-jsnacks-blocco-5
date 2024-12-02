const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

const names = people.map(person => person.name);
console.log(names.join(', '));
// Prende ciascun oggetto (person) come input.
// Restituisco solo la proprietà name dell'oggetto.

// Dopo aver ottenuto l'array dei nomi, utilizziamo il metodo join per convertirlo in una stringa,
// separando i nomi con una virgola e uno spazio (, ).

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'