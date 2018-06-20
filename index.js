function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  
  for (let i= 0; i < lis.length; i++) {
    const x = parseInt(n);
    lis[i].innerHTML = lis[i] + x;
  }
}

function deepestChild() {
  
}