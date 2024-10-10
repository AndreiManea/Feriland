import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: `"Kaftan Serif", serif`,
  body: `"Satoshi", sans-serif`,
};

const components = {
  Text: {
    baseStyle: {
      fontSize: '1.2rem',
    },
  },
  Heading: {
    sizes: {
      h5: {
        fontSize: '1.2rem',
      },
      activitiesMobile: { fontSize: '1.4rem' },
      homeHeading: { fontSize: '2rem' },
      h4: {
        fontSize: '1.6rem',
      },
      h3: {
        fontSize: '2.625rem', // 42px
      },
      h2: {
        fontSize: '3.5rem', // 56px
      },
      h1: {
        fontSize: '4rem',
      },
    },
  },
  Switch: {
    baseStyle: {
      track: {
        bg: 'rgb(84, 124, 57)',
        _checked: {
          bg: 'black',
        },
      },
    },
  },
};

const customTheme = extendTheme({
  fonts,
  colors: {
    primary: {
      500: '#547c39',
    },
  },
  components,
});

export default customTheme;
