let btn = document.getElementById("artistButton");

btn.addEventListener("click", () => {
  const song = document.getElementById("Artist");
  const userArtist = song.value.trim();

  console.log(userArtist);
  getArtist(userArtist);
});

async function getArtist(userArtist) {
  const API_KEY = "f254a021297d512e5c9f1b0eadee95d2";
  const api_url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${(userArtist)}&api_key=${API_KEY}&format=json`;

    //used chatgpt for support with listing each name instead of a single
  try {
    const response = await fetch(api_url);
    const data = await response.json();

    const similarArtists = data.similarartists.artist;

    const artistsList = similarArtists.map(artist => {
        const name = artist.name;
        return { name };
      });

    displayArtists(artistsList);
  } catch {
  }
}

function displayArtists(artists) {
    const artistPlace = document.getElementById("song");
  //used chatgpt for support with listing each name instead of a single
    artistPlace.innerHTML = artists
      .map(artist => {
        return `
          <div style="margin-bottom: 10px;">
            <p><strong>${artist.name}</strong></p>
          </div>
        `;
      })
      .join("");
  }  