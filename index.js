function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  
  parseInt(n)
  
  for (let i= 0; i < lis.length; i++) {
    lis[i].innerHTML = lis[i] + n;
  }
}

function deepestChild() {
  
}