// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics');

//axios

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
  response.data.topics.forEach( item => {
    let newTab = new CreateTab(item)
    topics.appendChild(newTab)
  })
})

function CreateTab(content) {
  let tab = document.createElement('div');

  //classes
  tab.classList.add('tab');

  //text content
  tab.textContent = content;

  // event listener for click
  tab.addEventListener('click', () => {
      tab.classList.toggle('active-tab');
    })

  return tab
};

