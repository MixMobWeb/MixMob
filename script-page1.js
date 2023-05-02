<ul id="list0"></ul>

<style>
#list0 li:nth-of-type(n+11) {
  display: none;
}

ul, ol {
    margin-top: 0px;
    margin-bottom: 10px;
    padding-left: 0px;
}


@media screen and (max-width: 479px) {
	.list-item {
	}
}


@media screen and (max-width: 479px) {
	.rank-nobadge {
	grid-column-start: 1;
	grid-row-end: 2;
	grid-row-start: 2;
	}
}

@media screen and (max-width: 479px) {
	.raider-holder {
	grid-column-end: 2;
	grid-column-start: 2;
	grid-row-end: 2;
	grid-row-start: 2;
	}
}

@media screen and (max-width: 479px) {
	.mobile-raider-banner-1 {
	grid-template-columns: 1fr 0.5fr;
  grid-column-end: 4;
  grid-column-start: 1;
  grid-row-end: 1;
  grid-row-start: 1;
	}
}

@media screen and (max-width: 479px) {
	.mobile-raider-banner-2 {
	display: none;
	grid-column-end: 3;
	grid-column-start: 1;
	grid-row-end: 3;
	grid-row-start: 3;
	}
}

@media screen and (max-width: 479px) {
	.mixer-holder {
	grid-column-end: 3;
	grid-column-start: 3;
	grid-row-end: 2;
	grid-row-start: 2;
	}
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
     

      let list = document.querySelector('#list0');

       pointList.forEach((point, index) => {
            let discordUsername = point.discordUsername;
            let discordUserAvatarURL = point.discordUserAvatarUrl;
            let amount = point.amount;

            let item = document.createElement('li');
            item.classList.add('list-item');

        let order = document.createElement('h3');
order.classList.add('rank-nobadge');
if (window.innerWidth >= 768) { // only run on screens wider than 768px (desktop)
  if (index === 0) {
    order.classList.add("rank-badge");
    order.innerHTML = '<img src="https://uploads-ssl.webflow.com/6204753c4ec43e44e0607512/63e54fe9230787cff7d51318_Gold.png" alt="Gold"/>';
  } else if (index === 1) {
    order.classList.add("rank-badge");
    order.innerHTML = '<img src="https://uploads-ssl.webflow.com/6204753c4ec43e44e0607512/63e54fe9e24f5423c4ba432e_Silver.png" alt="Silver"/>';
  } else if (index === 2) {
    order.classList.add("rank-badge");
    order.innerHTML = '<img src="https://uploads-ssl.webflow.com/6204753c4ec43e44e0607512/63e54fe90fae8c146b1aee6f_Bronze.png" alt="Bronze"/>';
  } else {
    order.innerHTML = index + 1;
  }
} else { // run on screens narrower than 768px (mobile)
  order.innerHTML = index + 1;
}
item.appendChild(order);


            let raiderHolder = document.createElement('div');
            raiderHolder.classList.add('raider-holder');
            item.appendChild(raiderHolder);

        let avatar = document.createElement('img');
        avatar.src = discordUserAvatarURL;
        avatar.classList.add('pfp');
        avatar.onerror = function() {
  			avatar.src = 'https://uploads-ssl.webflow.com/6204753c4ec43e44e0607512/63fe4ee8cfb4f113fb00a251_image%202749%20copy.png';
				};
        raiderHolder.appendChild(avatar);

       let username = document.createElement('div');
        username.innerHTML = discordUsername.slice(0, -5);
        username.classList.add('discord-title');
        raiderHolder.appendChild(username);


        let mixerHolder = document.createElement('div');
        mixerHolder.classList.add('mixer-holder');
        item.appendChild(mixerHolder);

        let amountDisplay = document.createElement('div');
        amountDisplay.innerHTML = amount;
        amountDisplay.classList.add('points-amount');
        mixerHolder.appendChild(amountDisplay);

        let dottedLine = document.createElement('div');
        dottedLine.classList.add('dotted-line-h-2');
        item.appendChild(dottedLine);
        
        let mobileRaiderBanner1 = document.createElement('div');
      mobileRaiderBanner1.classList.add('mobile-raider-banner-1');
      item.appendChild(mobileRaiderBanner1);
      
       let mobileRaiderBanner2 = document.createElement('div');
      mobileRaiderBanner2.classList.add('mobile-raider-banner-2');
      item.appendChild(mobileRaiderBanner2);
      
       let mobileLbBannerCopy = document.createElement('div');
       mobileLbBannerCopy.innerHTML += 'RAIDER';
      mobileLbBannerCopy.classList.add('mobile-lb-banner-copy');
      mobileRaiderBanner1.appendChild(mobileLbBannerCopy);
      
     
      
       let mobileLbBannerCopyMix = document.createElement('div');
       mobileLbBannerCopyMix.innerHTML += 'MixPoints';
      mobileLbBannerCopyMix.classList.add('mobile-lb-banner-copy');
      mobileRaiderBanner1.appendChild(mobileLbBannerCopyMix);
      
        list.appendChild(item);
      });
    })
    .catch(error => console.error(error));
    

</script>
