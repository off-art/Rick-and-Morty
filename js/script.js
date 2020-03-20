  const name = document.querySelector('.name'),
        searchOutput = document.querySelector('.search-output'),
        species = document.querySelector('.species'),
        type = document.querySelector('.type'),
        form = document.querySelector('.form');

  let inputValue = '',
      output = '';

  name.addEventListener('change', () => {

    searchOutput.innerHTML = '';
    output = '';
    inputValue = name.value.replace(' ', '+');

    fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
      .then(res => res.json())
      .then(data => {

        let characters = data.results;        
        const totalPages = data.info.pages;
        if (totalPages > 1) {
          for (i = 2; i <= totalPages; i++) {
            let page = i;
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}&name=${inputValue}`)
              .then(res => res.json())
              .then(data => {
                characters = characters.concat(data.results);
                if (page === totalPages) {
                  renderCharacters(characters);
                }
              })
          }
        } else {
          renderCharacters(characters);
        }
      })
  });
  species.addEventListener('change', () => {

    searchOutput.innerHTML = '';

    output = '';

    inputValue = species.value.replace(' ', '+');

    fetch(`https://rickandmortyapi.com/api/character/?species=${inputValue}`)
      .then(res => res.json())
      .then(data => {

        let characters = data.results;

        const totalPages = data.info.pages;

        if (totalPages > 1) {

          for (i = 2; i <= totalPages; i++) {

            let page = i;
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}&species=${inputValue}`)
              .then(res => res.json())
              .then(data => {

                characters = characters.concat(data.results);

                if (page === totalPages) {

                  renderCharacters(characters);

                }
              })
          }

        } else {

          renderCharacters(characters);

        }
      })

  });
  type.addEventListener('change', () => {

    searchOutput.innerHTML = '';

    output = '';

    inputValue = type.value.replace(' ', '+');

    fetch(`https://rickandmortyapi.com/api/character/?type=${inputValue}`)
      .then(res => res.json())
      .then(data => {

        let characters = data.results;

        const totalPages = data.info.pages;

        if (totalPages > 1) {

          for (i = 2; i <= totalPages; i++) {

            let page = i;
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}&type=${inputValue}`)
              .then(res => res.json())
              .then(data => {

                characters = characters.concat(data.results);

                if (page === totalPages) {

                  renderCharacters(characters);

                }
              })
          }

        } else {

          renderCharacters(characters);

        }
      })

  });

  function renderCharacters(characters) {

    characters.forEach(character => {
      console.log(character);

      output +=
        `<div class="item">
  <div class="card-group">
      <div class="card card-singel-carc"><div class="card-image-crc"><img src="${character.image}" alt="${character.name}" class="img-fluid rep-image" />
  <div class="header-top">
      <h2 class="title-card-carc">${character.name}</h2>
      <p class="card-para-carc">id: ${character.id}</p>
          </div>
      </div>
          <div class="card-body card-body-carc">
              <div class="table-responsive">
                  <table class="table">
                      <thead class="table-carc-header">
                          <tr>
                              <th>Column 1</th>
                              <th>Column 2</th>
                          </tr>
                      </thead>
                       <tbody>
                  <tr>
                      <td class="first-crc-stat table-text-crc titletext">Status</td>
                      <td class="table-text-crc">${character.status}</td>
                  </tr>
                  <tr>
                      <td class="first-crc-stat table-text-crc titletext">Species</td>
                      <td class="table-text-crc">${character.species}</td>
                  </tr>
                  <tr>
                      <td class="first-crc-stat table-text-crc titletext">Gender</td>
                      <td class="table-text-crc">${character.gender}</td>
                  </tr>
                  <tr>
                      <td class="first-crc-stat table-text-crc titletext">Origin</td>
                      <td class="table-text-crc">${character.origin.name}</td>
                  </tr>
                  <tr>
                      <td class="first-crc-stat table-text-crc titletext">Last location</td>
                      <td class="table-text-crc">${character.location.name}</td>
                  </tr>
              </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</div>`

    });

    searchOutput.innerHTML = output;
  }
