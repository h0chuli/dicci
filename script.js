// script.js
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const wordInput = document.getElementById('wordInput');
const notesInput = document.getElementById('notesInput');
const searchHistory = document.getElementById('searchHistory');
let words = [];

function search() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const result = words.find(word => word.term.toLowerCase() === searchTerm);
  if (result) {
    displayResult(result);
    updateSearchHistory(searchTerm);
  } else {
    searchResults.innerHTML = 'Palabra no encontrada.';
  }
}

function displayResult(result) {
  const html = `
    <h2>${result.term}</h2>
    <p>${result.definition}</p>
    <h3>Notas</h3>
    <p>${result.notes || 'No hay notas disponibles.'}</p>
  `;
  searchResults.innerHTML = html;
}

function addWord() {
  const term = wordInput.value.trim();
  const notes = notesInput.value.trim();
  if (!term) {
    alert('Por favor ingresa una palabra.');
    return;
  }
  const existingWord = words.find(word => word.term.toLowerCase() === term.toLowerCase());
  if (existingWord) {
    alert('La palabra ya existe en el diccionario.');
    return;
  }
  const newWord = { term, definition: '', notes };
  words.push(newWord);
  wordInput.value = '';
  notesInput.value = '';
  displayResult(newWord);
}

function updateSearchHistory(term) {
  const listItem = document.createElement('li');
  listItem.textContent = term;
  searchHistory.prepend(listItem);
}

// Ejemplo de palabras predefinidas
words.push({ term: 'ejemplo', definition: 'Una muestra representativa de algo.' });
words.push({ term: 'diccionario', definition: 'Una colección de palabras o términos junto con sus significados.' });
