var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Score = 0;
var p2Score = 0;
var p1Count = document.getElementById('p1-score');
var p2Count = document.getElementById('p2-score');
var countLimit = document.getElementById('count-limit');
var limitChoice = document.getElementsByTagName('input')[0];
limitChoice.value = 5;
var reset = function() {
  p1Score = 0;
  p2Score = 0;
  p1Count.textContent = p1Score;
  p2Count.textContent = p2Score;
  p1Count.style.color = 'black';
  p2Count.style.color = 'black';
};

p1Button.addEventListener('click', function() {
  if(p1Score < Number(limitChoice.value) && p2Score < Number(limitChoice.value)) {
    p1Score += 1;
    p1Count.textContent = p1Score;
    if(p1Score === Number(limitChoice.value)) {
      p1Count.style.color = 'green';
    };
  };
});
p2Button.addEventListener('click', function() {
  if(p1Score < Number(limitChoice.value) && p2Score < Number(limitChoice.value)) {
    p2Score += 1;
    p2Count.textContent = p2Score;
    if(p2Score === Number(limitChoice.value)) {
      p2Count.style.color = 'green';
    };
  };
});
limitChoice.addEventListener('change', function() {
  countLimit.innerHTML = limitChoice.value;
  reset();
});

resetButton.addEventListener('click', function() {
  reset();
});
