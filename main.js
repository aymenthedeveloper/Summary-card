const data = [
  {
    'category': 'main_score',
    'score': 76
  },
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];




var j = 1;
data.forEach(element => {
  setTimeout(() => {
    var i = 0;
    var n = setInterval(inc);
    function inc() {
      document.getElementById(element.category).innerHTML = ++i;
      if (i == element.score){
        clearInterval(n)
      }
    }
  }, 100 * j);
  ++j
})