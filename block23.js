// grab the section
const puppiesSection = document.querySelector(`#puppies`);
// async allows us to wait on data takes time for response to come back
const getPlayers = async ()  => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`); //awaitng what comes from fetch
  const players = await response.json()//define players json take the response and turns t into something that js can read(a js object)

  return players.data.players//reutning to user the deconstructed data, gathering data property from players 
}

  const renderPlayers = async () => { //render = to show something to U.I (user interface)(what you looking at)
    const players = await getPlayers() // players is equal to the result of us waiting on getplayers
    players.forEach(player => { //using new array for each player we start by creating empty div, add class card which allows us to edit css
      const card = document.createElement(`div`)
      card.classList.add(`Card`)
      //adding child elements to each of the cards (name/img)
      card.innerHTML = ` 
      <h3>${player.name}</h3>
      <img src=${player.imageUrl}>
      `
      puppiesSection.appendChild(card) //adding it to the UI
    });
      
    

  }
renderPlayers() //calling/running the function

 
//grab images
const puppyImages = document.querySelector(`img`);

//when user clicks image
puppyImages.addEventListener(`click`,(event) => {
  
  console.log(players.data.players.breed) 
})

//detai;s pop up 








//click shows details about the player 
//

