// Remove
const rules = {
  xs: '0', // Todos los tamaños
  sm: '40em', // ~ 640px
  md: '64em', // ~ 1024px
  lg: '90em', // ~1440px
  xl: '120em' // ~1920px
};

const getMedia = (rule) => {
  const rulesKeys = Object.keys(rules);
  const rulesLength = rulesKeys.length;
  const mediaIndex = rulesKeys.indexOf(rule);

  let min = 0;
  let max = 0;

  if (mediaIndex >= 0) {
    min = rules[rule];
    if (mediaIndex >= 0 && mediaIndex < rulesLength - 1) {
      max = rules[rulesKeys[mediaIndex + 1]];
    } else {
      max = min;
    }
  }

  return {
    min,
    max
  };
};

export default {
  up: (rule) => {
    const min = rules[rule] || 0;
    const media = `@media (min-width: ${min})`;

    return media;
  },
  down: (rule) => {
    const max = rules[rule] || 0;
    const media = `@media (max-width: ${max})`;

    return media;
  },
  between: (start, end) => {
    const mediaStart = rules[start] || 0;
    const mediaEnd = rules[end] || 0;
    const media = `@media (min-width: ${mediaStart}) and (max-width: ${mediaEnd})`;

    return media;
  },
  only: (rule) => {
    const { min, max } = getMedia(rule);
    const media = `@media (min-width: ${min}) and (maxn-width: ${max})`;

    return media;
  }
};
