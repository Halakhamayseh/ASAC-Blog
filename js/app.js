'use strict';
let form = document.getElementById('form');
function UserForm(authorName, articleTitle, subjects, content, day, month, year,likes) {
  this.authorName = authorName;
  this.articleTitle = articleTitle;
  this.subjects = subjects;
  this.content = content;
  this.day = day;
  this.month = month;
  this.year = year;
  this.likes = likes;
  this. count = 0;
  objectArray.push(this);
}
let objectArray = [];
getItem();
let count = 0;
form.addEventListener('submit', SHander);
function SHander(event) {
  event.preventDefault();
  let authorName = event.target.authorName.value;
  let articleTitle = event.target.articleTitle.value;
  let subjects = event.target.subjects.value;
  let content = event.target.content.value;
  let day = event.target.day.value;
  let month = event.target.month.value;
  let year = event.target.year.value;
  let likes = event.target.likes.value;
  // console.log(year);
  if (event.target.likes.value === 'yes') {
    count++;
  }
  let object = new UserForm(authorName, articleTitle, subjects, content, day, month, year,likes);
  setItem();
  render();
  // console.log(object);
    
}
function setItem() {
  localStorage.setItem('localKey', JSON.stringify(objectArray));
  console.log(objectArray);
}
function getItem() {
  if (localStorage.getItem('localKey') !== null) {
    objectArray = JSON.parse(localStorage.getItem('localKey'));
  }
}

// let divImg = document.getElementById('imge');
let div = document.getElementById('formResult');
function render() {
  div = '';
  for (let i = 0; i < objectArray.length; i++) {
    let articleTitle = document.createElement('p');
    articleTitle.innerText = objectArray[i].articleTitle;
    div.appendChild(articleTitle);
    console.log(objectArray[i].articleTitle);
    let authorName = document.createElement('p');
    authorName.innerText = objectArray[i].authorName;
    div.appendChild(authorName);
    let data = document.createElement('p');
    data.innerText = 'Data:', objectArray[i].day, '-', objectArray[i].month, '-', objectArray[i].year;
      div.appendChild(data);
      let note = document.createElement('p');
      note.innerText = objectArray[i].content;
      div.appendChild(note);

  }
  
  // divImg.appendChild(img);
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
