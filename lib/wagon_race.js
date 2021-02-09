// TODO: write your code here

const restart = () => {
  const current1ActivePosition = document.querySelector('#player1-race > .active');
  current1ActivePosition.classList.remove('active');
  const current2ActivePosition = document.querySelector('#player2-race > .active');
  current2ActivePosition.classList.remove('active');
  const activeFirstPosition = document.querySelector('#player1-race > td');
  const activeSecondPosition = document.querySelector('#player2-race > td');
  activeFirstPosition.classList.add('active');
  activeSecondPosition.classList.add('active');
};

document.addEventListener('keyup', (event) => {
  if (event.key === 'q') {
    const activePosition = document.querySelector('#player1-race > .active');
    if (activePosition.nextElementSibling) {
      activePosition.nextElementSibling.classList.add("active");
      activePosition.classList.remove("active");
    } else {
      window.confirm("First player wins!");
      restart();
    }
  }
});


document.addEventListener('keyup', (event) => {
  if (event.key === 'p') {
    const activePosition = document.querySelector('#player2-race > .active');
    if (activePosition.nextElementSibling) {
      activePosition.nextElementSibling.classList.add("active");
      activePosition.classList.remove("active");
    } else {
      window.confirm("Second player wins!");
      restart();
    }
  }
});
