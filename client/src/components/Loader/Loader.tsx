import { HStack, Image, keyframes, useBreakpointValue } from '@chakra-ui/react';
import fullLogo from '../../assets/Logo.svg';

const Loader = () => {
  const responsivePulse = useBreakpointValue({
    base: keyframes`
    0% { transform: scale(0.6); }
    50% { transform: scale(0.9); }
    100% { transform: scale(0.6); }
  `,
    md: keyframes`
    0% { transform: scale(0.4); }
    50% { transform: scale(0.6); }
    100% { transform: scale(0.4); }
  `,
  });
  return (
    <HStack
      height="100vh"
      background="rgb(234, 229, 223)"
      width="100vw"
      zIndex="200"
      justifyContent="center"
      alignItems="center"
      position="fixed"
    >
      <Image
        animation={`${responsivePulse} 1.2s infinite ease-in-out`}
        src={fullLogo}
      />
    </HStack>
  );
};

export default Loader;
