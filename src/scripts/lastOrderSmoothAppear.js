const { default: move } = require("./bouquetsAcco");

const blocks = document.querySelectorAll('.last-orders_block');

//detection of element visibility 
function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return (top + height >= 0) && (height + window.innerHeight >= bottom); 
};

addEventListener('scroll', () => {
  for (let block of blocks) {
    if ( isPartiallyVisible(block) ) {
      block.classList.add("last-orders_block_active");
    };
  };
});