const gameCard = (name, rating, tags) => {
  return `
          <div class="result">
            <h2>${name}</h2>
              <p>Rating: ${rating}</p>
              <p>Tags: ${tags}</p>
          </div>
        `;
};
