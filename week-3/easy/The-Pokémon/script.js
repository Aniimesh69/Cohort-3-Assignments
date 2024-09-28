const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const cardContainer = document.getElementById("card-container");

// Handle form submission
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const numCards = document.getElementById("num-cards").value;
  const category = document.getElementById("category").value;

  // Determine range of Pokémon IDs to fetch based on category
  let idRange;
  switch (category) {
    case "Fire":
      idRange = [1, 10]; // Fire-type Pokémon have IDs 1-10
      break;
    case "Water":
      idRange = [11, 20]; // Water-type Pokémon have IDs 11-20
      break;
    case "Grass":
      idRange = [21, 30]; // Grass-type Pokémon have IDs 21-30
      break;
    case "Bug":
      idRange = [31, 40]; // Bug-type Pokémon have IDs 31-40
      break;
    case "Normal":
      idRange = [41, 50]; // Normal-type Pokémon have IDs 41-50
      break;
    case "Electric":
      idRange = [51, 60]; // Electric-type Pokémon have IDs 51-60
      break;
    case "Ground":
      idRange = [61, 70]; // Ground-type Pokémon have IDs 61-70
      break;
    case "Fairy":
      idRange = [71, 80]; // Fairy-type Pokémon have IDs 71-80
      break;
    case "Poison":
      idRange = [81, 90]; // Poison-type Pokémon have IDs 81-90
      break;
    case "Psychic":
      idRange = [91, 100]; // Psychic-type Pokémon have IDs 91-100
      break;
    // Add more cases for other categories
  }

  // Clear the card container
  cardContainer.innerHTML = "";

  // Fetch Pokémon data from API
  let count = 0;
  let currentId = idRange[0];
  function fetchPokemon() {
    if (count >= numCards) return;
    fetch(`${apiUrl}${currentId}`)
      .then((response) => response.json())
      .then((data) => {
        // Render Pokémon card
        const cardHtml = `
                    <div class="card">
                        <h2>${data.name}</h2>
                        <img src="${data.sprites.front_default}" alt="${data.name}">
                        <p>Type: ${data.types[0].type.name}</p>
                    </div>
                `;
        cardContainer.innerHTML += cardHtml;
        count++;
        currentId++;
        fetchPokemon();
      });
  }
  fetchPokemon();
});
