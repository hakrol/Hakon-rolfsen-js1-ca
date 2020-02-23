const characterURL = "https://rickandmortyapi.com/api/character/";

fetch(characterURL)
  .then(handleAPI)
  .then(createCharacters)
  .catch(handleAPIError);

function handleAPI(response) {
  return response.json();
}

function handleAPIError(error) {
  window.location.href = "error.html";
}

function createCharacters(json) {
  console.dir(json);

  const characterInformation = json.results;
  const cardContainer = document.querySelector(".row.results");

  let HTML = "";

  characterInformation.forEach(insertHTML);

  function insertHTML(results) {
    if (results.type) {
    } else {
      results.type = "Unknown";
    }

    HTML += `<div class="col-sm-6 col-md-4 col-lg-3">                
            <div class="card">    
            <img class="image" src="${results.image}" alt="${results.name}">
            <div class="details">
              <h4 class="name">${results.name}</h4>
              <p>Type: ${results.type}</p>    
              <p>Episode count: ${results.episode.length}</p>                                  
              <a class="btn btn-primary" href="details.html?id=${results.id}">Details</a>
          </div>
      </div>
  </div>`;

    cardContainer.innerHTML = HTML;
  }
}
