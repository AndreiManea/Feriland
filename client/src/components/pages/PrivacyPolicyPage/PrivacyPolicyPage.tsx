import { Heading, Text, Box, VStack } from '@chakra-ui/react';

export const PrivacyPolicyPage = () => {
  return (
    <Box backgroundColor="rgb(234, 229, 223)" p={8}>
      <Heading
        as="h1"
        fontSize={{ lg: '3rem' }}
        mb={4}
        mt="12.5svh"
        textAlign="center"
      >
        Privacy Policy
      </Heading>

      {/* Data Collected */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          1. Data Collected
        </Heading>
        <Text fontSize="1.2rem">
          During the booking process, we collect the following personal data:
          <ul style={{ listStyleType: 'none' }}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Home address</li>
            <li>Personal Numeric Code (CNP)</li>
            <li>Selected dates of stay</li>
            <li>Cabin type and number of guests</li>
            <li>Total booking amount</li>
            <li>Any additional information provided by the guest</li>
          </ul>
        </Text>
      </VStack>

      {/* How We Use Your Data */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          3. How We Use Your Data
        </Heading>
        <Text fontSize="1.2rem">
          Your data is used for the following purposes:
          <ul style={{ listStyleType: 'none' }}>
            <li>To process and confirm your booking</li>
            <li>To communicate with you regarding your stay</li>
            <li>To ensure compliance with local regulations</li>
            <li>To provide personalized services during your stay</li>
            <li>To process payments securely</li>
          </ul>
        </Text>
      </VStack>

      {/* Third-Party Sharing */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          4. Third-Party Sharing
        </Heading>
        <Text fontSize="1.2rem">
          We will not share your data with any third-party services, except
          where required to process payments securely via LibraPay, or as
          required by law. We may also share data to comply with local
          regulations, such as with law enforcement or governmental authorities
          if needed.
        </Text>
      </VStack>

      {/* Cookies and Tracking */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          5. Cookies and Tracking
        </Heading>
        <Text fontSize="1.2rem">
          Our website uses cookies to enhance your browsing experience and
          improve our services. By using our website, you consent to the use of
          cookies.
        </Text>
      </VStack>

      {/* Your Rights */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          6. Your Rights
        </Heading>
        <Text fontSize="1.2rem">
          You have the right to:
          <ul style={{ listStyleType: 'none' }}>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of any incorrect or incomplete data</li>
            <li>
              Request deletion of your data, subject to legal retention
              requirements
            </li>
          </ul>
        </Text>
      </VStack>

      {/* Contact Us */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size="lg" mt={6} mb={2}>
          7. Contact Us
        </Heading>
        <Text fontSize="1.2rem">
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
