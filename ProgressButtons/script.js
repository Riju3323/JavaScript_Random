const box = document.querySelectorAll('.numberbox');
const bar = document.getElementById('progressbar');
const previous = document.getElementById('prev');
const nexter = document.getElementById('next')

let currentActive = 1;

nexter.addEventListener('click', () => {

  currentActive++;

  if(currentActive > box.length)
  {
    currentActive = box.length;
  }
  update();
})

previous.addEventListener('click', () => {

  currentActive--;

  if(currentActive === 0)
  {
    currentActive = 0;
  }
  update();
})

function update() {
  
  box.forEach((numberbox,idx) => {
    if(idx === currentActive)
    {
      numberbox.classList.add('active')
    }
    else{
      numberbox.classList.remove('active')
    }
  })

  if(currentActive===0)
  {
    prev.disabled = true;
  }
  else if(currentActive===box.length-1)
  {
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}