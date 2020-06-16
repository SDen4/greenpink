const blocks = document.querySelectorAll('.last-orders_block');

for(let i=0; i<blocks.length; i++) {
  let block = blocks[i];
  block.addEventListener('click', () => {
    block.classList.toggle("enlarge");

    for (let j=0;j<blocks.length; j++) {
      let block2 = blocks[j];
      if( i !== j ) {
        block2.classList.remove("enlarge")
      };
    };

    //close enlarged block by pushing esc button
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 27) {
        block.classList.remove("enlarge");
      };
    });
  });
};