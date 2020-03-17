const counters = document.querySelectorAll('.counters');
const speed = 300;

counters.forEach(counter=>{
  const updateCount = ()=>{
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;
    if(count<target)
    {
      counter.innerText = Math.floor(count + inc);
      setTimeout(updateCount, 1);
    }
    else
    {
        count.innerText = target;
    }
  }
  updateCount();
});
