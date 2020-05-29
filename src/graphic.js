import 'intersection-observer';
import scrollama from 'scrollama';

function init() {
  const scroller = scrollama();

  scroller
    .setup({
      step: '.step'
    })
    .onStepEnter(response => {
      // { element, index, direction }
    })
    .onStepExit(response => {
      // { element, index, direction }
    });

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

export default { init };
