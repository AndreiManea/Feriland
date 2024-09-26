import { HStack, Image, keyframes } from '@chakra-ui/react';
import fullLogo from '../../assets/Logo.svg';

const Loader = () => {
  const pulse = keyframes`
    0% { transform: scale(0.4); }
    50% { transform: scale(0.6); }
    100% { transform: scale(0.4); }
  `;
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
      <Image animation={`${pulse} 1.2s infinite ease-in-out`} src={fullLogo} />
    </HStack>
  );
};

export default Loader;
