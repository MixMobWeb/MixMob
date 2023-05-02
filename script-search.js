<div class="search-container">
  <input type="text" class="search-i" placeholder="Find my Discord handle">
  <button type="button" class="search-clear"></button>
  <button type="button" class="search-b">Search</button>
</div>

<div class="leaderboard-holder-2">
		<div class="lb-top"><p class="byrd-center _17-gray mobile-hide">position</p><div id="w-node-_25b1debf-33da-91aa-			 	f9b8-07ff7c664f8b-357a8d3b" class="div-block-142"><div class="dotted-line-v"></div><p class="byrd-center 		 _17-gray">raider</p><div class="dotted-line-v"></div></div><p class="byrd-center _17-gray">MixPoints</p></div>
    
<div class="lb-content">
	<div class="result-container">
		<div class="rank-nobadge-search"></div>
  <div class="raider-holder">
    <img class="pfp-search" src="" alt="Profile Picture">
    <div class="discord-title-search"></div>
  </div>
  <div class="mixer-holder">
    
    <div class="points-amount-search"></div>
</div>

<div class="source-url-search" style="display:none;"></div>
  </div>
</div>
</div>
<div class="not-found-div"><div class="ladder-notfound-bubble"><div class="text-byrd _20px is-black">oops...</div><p class="para-inter _18px is-black">Looks like that Discord ID isn't on The Ladder yet.<br><a href="https://discord.gg/mixmob" class="link-2">Start questing</a> to rank up.</p><img src="https://assets.website-files.com/6204753c4ec43e44e0607512/63fc3a271ed05136f9e5b6c8_Subtract.svg" loading="lazy" alt="" class="ladder-img-5"></div><img src="https://assets.website-files.com/6204753c4ec43e44e0607512/63fc36530e70bd3d3b68ec86_image%202.png" loading="lazy" sizes="(max-width: 479px) 100vw, 470px" srcset="https://assets.website-files.com/6204753c4ec43e44e0607512/63fc36530e70bd3d3b68ec86_image%202-p-500.png 500w, https://assets.website-files.com/6204753c4ec43e44e0607512/63fc36530e70bd3d3b68ec86_image%202-p-800.png 800w" alt="" class="img"></div>
<style>

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


@media screen and (max-width: 768px) {
	.search-container {
	position: fixed;
  left: 0%;
  top: auto;
  right 0%;
  bottom: 0%;
  padding: 0px 15px 30px;
	}
}

@media screen and (max-width: 768px) {
	.search-clear {
  	padding: 0px 20px;
  }
}


@media screen and (max-width: 768px) {
	.result-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 20px;
  padding-right: 20px;
  padding-left: 10px;
  margin: 0px auto 5px;
	}
}



.search-i {
	background: url(https://uploads-ssl.webflow.com/6204753c4ec43e44e0607512/63fbe295284d8715912d3771_text.svg);
  background-repeat: no-repeat;
  background-position: 11px;
  text-indent: 20px;
	background-color: rgba(16, 16, 23, 0.6);
  padding: 15px;
  border: 2px solid #454f5b;
  border-radius: 8px;
  width: 100%;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #e4e4e4;
  opacity: 1; /* Firefox */
}

.result-container {
  display: none;
}

.leaderboard-holder-2 {
  display: none;
  justify-content: center;
}

.search-b {
  padding: 10px;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.rank-nobadge-search {
  padding-top: 20px;
  padding-bottom: 20px;
}

</style>

<script>
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


</script>

<script>
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

</script>
