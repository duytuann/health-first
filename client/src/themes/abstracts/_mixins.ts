const transitionFade = (what = 'fade-in', time = '2s', how = 'ease-in') =>
    `
    opacity: 1;
    animation-name: ${what === 'fade-in' ? 'fadeInOpacity' : 'fadeOutOpacity'};
    animation-iteration-count: 1;
    animation-timing-function: ${how};
    animation-duration: ${time};
    
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOutOpacity {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;

const position = (place: string, type: string, coordinate: string) =>
    `
    position: ${place};
    ${type}: ${coordinate};
  `;

const mixins = {
    transitionFade,
    position,
};

export default mixins;
