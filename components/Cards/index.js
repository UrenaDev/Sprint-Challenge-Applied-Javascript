// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


//axios
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    let articles = response.data.articles
    for(topic in articles) {
      articles[topic].forEach(article => 
      cardsContainer.append(createCard(article)))
    }
  })
  
let cardsContainer = document.querySelector('.cards-container');  

function createCard(topic) {
  let card = document.createElement('div');
  let headline = document.createElement('div');
  let author = document.createElement('div');
  let imgContainer = document.createElement('div');
  let authorImg = document.createElement('img');
  let authorName =document.createElement('span');

  //nesting
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorName);

  //classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //content
  headline.textContent = topic.headline;
  authorName.textContent = topic.authorName;
  authorImg.src = topic.authorPhoto;

  return card
}