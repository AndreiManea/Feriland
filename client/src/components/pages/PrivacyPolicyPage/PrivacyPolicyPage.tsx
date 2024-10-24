import { Heading, Text, Box, VStack } from '@chakra-ui/react';

export const PrivacyPolicyPage = () => {
  return (
    <Box
      backgroundColor="rgb(234, 229, 223)"
      p={{ base: '1.2rem 0.75rem', md: '1.5rem 1.25rem', lg: '2rem 1.5rem' }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '1.75rem', md: '3rem' }}
        mb={4}
        mt={{ base: '12.5svh', md: '7.5svh', lg: '12.5svh' }}
        textAlign="center"
      >
        Privacy Policy
      </Heading>

      {/* Data Collected */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          1. Data Collected
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          During the booking process, we collect the following personal data:
          <br />
          <strong>Full name</strong>
          <br />
          <strong>Phone number</strong>
          <br />
          <strong>Email address</strong>
          <br />
          <strong>Home address</strong>
          <br />
          <strong>Personal Numeric Code (CNP)</strong>
        </Text>
      </VStack>

      {/* How We Use Your Data */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          2. How We Use Your Data
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          Your data is used for the following purposes:
          <br />
          <strong>To process and confirm your booking</strong>
          <br />
          <strong>To communicate with you regarding your stay</strong>
          <br />
          <strong>To ensure compliance with local regulations</strong>
          <br />
          <strong>To provide personalized services during your stay</strong>
          <br />
          <strong>To process payments securely</strong>
        </Text>
      </VStack>

      {/* Third-Party Sharing */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          3. Third-Party Sharing
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          We will not share your data with any third-party services, except
          where required to process payments securely via LibraPay, or as
          required by law. We may also share data to comply with local
          regulations, such as with law enforcement or governmental authorities
          if needed.
        </Text>
      </VStack>

      {/* Cookies and Tracking */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          4. Cookies and Tracking
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          Our website uses cookies to enhance your browsing experience and
          improve our services. By using our website, you consent to the use of
          cookies.
        </Text>
      </VStack>

      {/* Your Rights */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          6. Your Rights
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          You have the right to:
          <br />
          <strong>Request access to the personal data we hold about you</strong>
          <br />
          <strong>
            Request correction of any incorrect or incomplete data
          </strong>
          <br />
          <strong>
            Request deletion of your data, subject to legal retention
            requirements
          </strong>
        </Text>
      </VStack>

      {/* Contact Us */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          7. Contact Us
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          If you have any questions or concerns about our privacy practices,
          please contact us at:
          <br />
          <strong>Email:</strong> contact@feriland.ro
          <br />
          <strong>Phone:</strong> +40737515716
          <br />
          <strong>Address:</strong> Str. Cincinat Pavelescu, Nr. 10, Arad, Arad,
          România
        </Text>
      </VStack>
    </Box>
  );
};
