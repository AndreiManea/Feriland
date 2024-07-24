import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: `"Kaftan Serif", serif`,
  body: `"Satoshi", sans-serif`,
};

const components = {
  Text: {
    baseStyle: {
      fontSize: '1.2em',
    },
  },
  Heading: {
    sizes: {
      h3: {
        fontSize: '2.625rem', // 42px
      },
      h2: {
        fontSize: '3.5rem', // 56px
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
