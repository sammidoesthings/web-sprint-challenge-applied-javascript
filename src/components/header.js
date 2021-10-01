const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">                      //headDiv
  //    <span class="date">{ date }</span>      //dateSp
  //    <h1>{ title }</h1>                      //titleH
  //    <span class="temp">{ temp }</span>      //tempSp
  //  </div>
  //

  let headDiv = document.createElement('div');
  headDiv.classList.add('header');

  let dateSp = document.createElement('span');
  headDiv.appendChild(dateSp);
  dateSp.classList.add('date');
  dateSp.textContent = date

  let titleH = document.createElement('h1');
  headDiv.appendChild(titleH);
  titleH.textContent = title

  let tempSp = document.createElement('span');
  headDiv.appendChild(tempSp);
  tempSp.classList.add('temp');
  tempSp.textContent = temp

  return headDiv;
}

// let header1 = Header('here is a title', 'jan 30, 2020', '98F')
// console.log(header1)

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header1 = Header('here is a title', 'jan 30, 2020', '98F')
  const cssSelect = document.querySelector(selector)
  cssSelect.appendChild(header1)
}
headerAppender('body')

export { Header, headerAppender }
