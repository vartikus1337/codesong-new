const TEST_CONST = '123';
const btn = document.getElementById('btn');
let count = 0;

const users = [
  {
    name: 'basic name',
    level: 'admin',
  }
]

function render() {
  btn.innerHTML = `Count ${count}`;
}
Tex

btn.addEventListener('click', () => {
  // Count from 1 to 10
  if (count < 10) {
    count += 1;
    render();
  }
})

// Another test code

const similar = "oO08 iIlL1 g9qCGQ"
const diacritics_etc = "â é ù ï ø ç Ã Ē Æ œ"

window.toggleFavorite = (alias) => {
  try {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (favorites.indexOf(alias) > -1) {
      favorites = favorites.filter((v) => {
        return v !== alias
      })
    } else {
      favorites.push(alias) 
    }
    localStorage.setItem('favorites', JSON.stringify(Array.from(new Set(favorites))))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('could not save favorite', err)
  }
  renderSelectList()
  return false
}