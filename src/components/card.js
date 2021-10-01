import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">                                   //cardDiv
  //   <div class="headline">{ headline }</div>           //headlineDiv
  //   <div class="author">                               //authorDiv
  //     <div class="img-container">                      //containerDiv
  //       <img src={ authorPhoto }>                      //photoImg
  //     </div>
  //     <span>By { authorName }</span>                   //authorSp
  //   </div>
  // </div>

    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    let headlineDiv = document.createElement('div')
    cardDiv.appendChild(headlineDiv)
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = article.headline

    let authorDiv = document.createElement('div')
    cardDiv.appendChild(authorDiv)
    authorDiv.classList.add('author')

    let containerDiv = document.createElement('div')
    authorDiv.appendChild(containerDiv)
    containerDiv.classList.add('img-container')

    let photoImg = document.createElement('div')
    containerDiv.appendChild(photoImg)
    photoImg.textContent = article.authorPhoto

    //authorPhoto is a string, so textContent shows the string and not the actual photo image

    let authorSp = document.createElement('span')
    authorDiv.appendChild(authorSp)
    authorSp.textContent = article.authorName

    return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
