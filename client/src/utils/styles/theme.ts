import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: `"Kaftan Serif", serif`,
  body: `"Satoshi", sans-serif`,
};

const customTheme = extendTheme({
  fonts,
  colors: {
    primary: {
      500: '#547c39',
    },
  },
});

export default customTheme;
