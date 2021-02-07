// Question 2
// Make a call to the following API endpoint: DONE
// https://apsi.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating DONE

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name DONE
// rating DONE
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function fetchData() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results.results;
    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      if (i === 8) break;

      const gameName = data[i].name;
      const gameRating = data[i].rating;
      const gameTags = data[i].tags.length;

      // Made with help from Kasper Bø Bjørnø
      resultsContainer.innerHTML += gameCard(gameName, gameRating, gameTags);
    }
  } catch (error) {
    resultsContainer.innerHTML = "";
    console.error(error);
    // Made with help from Kasper Bø Bjørnø
    resultsContainer.innerHTML = newError("Woops, something went wrong. Please call 404!", error);
  }
}

fetchData();
