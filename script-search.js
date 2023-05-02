
fetch('https://api.zerodrop.app/public/22200/leaderboard/points/984300?type=BALANCE', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  let pointList = data.pointList;

  // Generate the list of leaderboard items
  let list = document.querySelector('#list');
  pointList.forEach((point, index) => {
    let discordUsername = point.discordUsername;
    let discordUserAvatarURL = point.discordUserAvatarUrl;
    let amount = point.amount;
    let sourceURL = point.sourceURL;

    let item = document.createElement('li');
    item.classList.add('list-item-search');
    item.innerHTML = `
      <div class="rank">
        <span class="rank-nobadge">${index + 1}</span>
      </div>
      <div class="avatar">
        <img src="${discordUserAvatarURL}" alt="${discordUsername} avatar">
      </div>
      <div class="name">
        <span class="discord-title">${discordUsername}</span>
      </div>
      <div class="points">
        <span class="points-value">${amount}</span>
      </div>
    `;
    list.appendChild(item);
  });    

  // Add the search function
  const searchButton = document.querySelector('.search-b');
  const searchInput = document.querySelector('.search-i');

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    let matchingPoints = pointList.filter(point => point.discordUsername.toLowerCase().includes(searchTerm));
    console.log('Matching points:', matchingPoints);

    if (matchingPoints.length > 0) {
      let matchedPoint = matchingPoints[0];
      let position = pointList.indexOf(matchedPoint) + 1;
      console.log('', matchedPoint);

      document.querySelector('.rank-nobadge-search').textContent = position;
      document.querySelector('.discord-title-search').textContent = matchedPoint.discordUsername.slice(0, -5);
      document.querySelector('.pfp-search').setAttribute('src', matchedPoint.discordUserAvatarUrl);
      document.querySelector('.points-amount-search').textContent = `${matchedPoint.amount}`;
      document.querySelector('.source-url-search').setAttribute('href', matchedPoint.sourceURL);
      document.querySelector('.source-url-search').textContent = matchedPoint.sourceURL;

      // Show the elements
      if (window.innerWidth >= 768) {
      resultContainer.style.display = "grid";
    } else {
      resultContainer.style.display = "flex";
    }
      mixerHolder.style.display = "flex";
      raiderHolder.style.display = "flex";
      leaderboard2.style.display = "block";
      lbTop.style.display = "grid";
      notFoundDiv.style.display = "none";

     
      
    } else {
      document.querySelector('.rank-nobadge-search').textContent = '';
      document.querySelector('.discord-title-search').textContent = '';
      document.querySelector('.pfp-search').setAttribute('src', '');
      document.querySelector('.points-amount-search').textContent = '';
      document.querySelector('.source-url-search').setAttribute('href', '');
      document.querySelector('.source-url-search').textContent = '';

      // Hide the elements
      resultContainer.style.display = "none";
      mixerHolder.style.display = "none";
      raiderHolder.style.display = "none";
      leaderboard2.style.display = "none";
      lbTop.style.display = "none";
      notFoundDiv.style.display = "flex";

      
    }
  });

});


const resultContainer = document.querySelector(".result-container");
const mixerHolder = document.querySelector(".mixer-holder");
const raiderHolder = document.querySelector(".raider-holder");
const leaderboard2 = document.querySelector(".leaderboard-holder-2");
const lbTop = document.querySelector(".lb-top");
const notFoundDiv = document.querySelector(".not-found-div");
const searchClearButton = document.querySelector('.search-clear');
const searchInput = document.querySelector('.search-i');

resultContainer.style.display = "none";
mixerHolder.style.display = "none";
raiderHolder.style.display = "none";
leaderboard2.style.display = "none";
notFoundDiv.style.display = "none";

document.querySelector(".search-b").addEventListener("click", () => {
  const searchQuery = document.querySelector(".search-i").value;
  if (searchQuery.trim() !== "") {
    // code for displaying the elements
    if (window.innerWidth >= 768) {
      resultContainer.style.display = "grid";
    } else {
      resultContainer.style.display = "flex";
    }
    mixerHolder.style.display = "flex";
    raiderHolder.style.display = "flex";
    leaderboard2.style.display = "block";
    
  }
});



document.querySelector('.search-i').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // prevent form submission
    document.querySelector('.search-b').click(); // simulate click on search button
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const leaderboardHolder = document.querySelector('.leaderboard-holder');
  document.querySelector('.search-i').addEventListener('input', () => {
    let searchTerm = document.querySelector('.search-i').value.toLowerCase();
    if (searchTerm === '') {
      leaderboardHolder.style.display = 'block';
      resultContainer.style.display = "none";
			mixerHolder.style.display = "none";
			raiderHolder.style.display = "none";
			leaderboard2.style.display = "none";
			notFoundDiv.style.display = "none";
    } else {
      leaderboardHolder.style.display = 'none';
      
    }
  });
  
  searchClearButton.addEventListener('click', () => {
  searchInput.value = '';
  leaderboardHolder.style.display = 'block';
  resultContainer.style.display = "none";
			mixerHolder.style.display = "none";
			raiderHolder.style.display = "none";
			leaderboard2.style.display = "none";
			notFoundDiv.style.display = "none";
});
  
});

