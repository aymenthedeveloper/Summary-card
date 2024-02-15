const data = [
  {
    'category': 'main_score',
    'score': 76
  },
  {
    "category": "Reaction",
    "score": 80
  },
  {
    "category": "Memory",
    "score": 92
  },
  {
    "category": "Verbal",
    "score": 61
  },
  {
    "category": "Visual",
    "score": 72
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