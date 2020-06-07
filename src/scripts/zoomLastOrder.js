const blocks = document.querySelectorAll('.last-orders_block');
const pics = document.querySelectorAll('.last-orders_pic');

for(let i=0; i<pics.length; i++) {
  let block = blocks[i];
  let pic = pics[i];
  pic.addEventListener('click', () => {
    block.classList.toggle("enlarge");
    for (let j=0;j<blocks.length; j++) {
      let block2 = blocks[j];
      if( i !== j ) {
        block2.classList.remove("enlarge")
      }
    }
  });
};

//close enlarged block by pushing esc button
for(let i=0; i<pics.length; i++) {
  let block = blocks[i];
  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {
      block.classList.remove("enlarge");
      block.classList.remove("shrink");
    }
  });
};

// const wrapper = document.querySelector('.last-orders');
// const sectionA = document.querySelector('.section__last-orders');

// console.log(sectionA);

// for(let i=0; i<pics.length; i++) {
//   let pic = pics[i];
//   pic.addEventListener('click', () => {
//     let wrapper = document.querySelector('.last-orders');
//     let sectionA = document.querySelector('.section__last-orders');

//     let elem = document.createElement('div');
//     elem.innerHTML = "<h1>Привет!</h1>";
//     // document.sectionA.insertBefore(elem, wrapper);
    
//     elem.className = 'enlarge';
//     elem.style.backgroundColor = 'red'
//   });
// };