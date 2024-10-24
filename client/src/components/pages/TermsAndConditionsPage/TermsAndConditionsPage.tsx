import { Heading, Text, Box, VStack, Link } from '@chakra-ui/react';

export const TermsAndConditionsPage = () => {
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
        Terms and Conditions
      </Heading>

      {/* Company Information */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          1. Company Information
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          <strong>Company Name:</strong> FERI LAND CONSULTING S.R.L.
          <br />
          <strong>Company Registration Number:</strong> J2/1786/2023
          <br />
          <strong>VAT number (CUI):</strong> RO49146964
          <br />
          <strong>Address:</strong> Str. Cincinat Pavelescu, Nr. 10, Arad, Arad,
          România
          <br />
          <strong>Phone Number:</strong> +40737515716
          <br />
          <strong>Email:</strong> contact@feriland.ro
        </Text>
      </VStack>

      {/* Description of Services */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          2. Description of Services
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          Feriland is a luxury nature retreat offering bespoke accommodations
          such as cabins and villas, along with a range of wellness services
          like wood-fired hot tubs, saunas, and outdoor activities. Guests can
          immerse themselves in the tranquility of nature while enjoying modern
          luxury in our cabins.
        </Text>
      </VStack>
      {/* Pricing and Currencies */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          3. Pricing and Currencies
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          Prices are displayed in RON. If payments can be made in other
          currencies, conversions will be based on the current exchange rates.
          Prices for bookings are subject to change without notice, but any
          changes will not affect confirmed bookings.
        </Text>
      </VStack>

      {/* Booking and Payment Terms */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          4. Booking and Payment Terms
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          By making a booking, you confirm that you have read and accepted our
          terms and conditions. Payment is processed securely through our
          payment provider. You will be required to accept the terms and
          conditions during the checkout process to complete your booking.
        </Text>
      </VStack>
      {/* Cancellation and Refund Policy */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          5. Cancellation and Refund Policy
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          <strong>Cancellation by the guest:</strong> All bookings are
          non-refundable. Once a booking is confirmed, cancellations made at any
          time will not be eligible for a refund.
          <br />
          <strong>No Refund Policy:</strong> Please be aware that we do not
          offer refunds for any reason, including changes in travel plans or
          unforeseen circumstances. We encourage guests to carefully review
          their booking before confirming.
        </Text>
      </VStack>
      {/* Privacy Policy */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          6. Privacy Policy
        </Heading>
        <Text
          fontSize={{
            base: '0.9rem',
            md: '1.1rem',
            lg: '1.2rem',
          }}
          mb="0"
        >
          Your privacy is important to us. Please refer to our detailed{' '}
          <Link
            href={'/privacy-policy'}
            position="relative"
            color={'#547c39'}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: -1,
              left: 0,
              height: '1px',
              bg: '#547c39',
              width: '0%',
              transition: 'width 0.4s ease-in-out',
            }}
            transition="0.3s ease-in-out"
            _hover={{
              _after: {
                width: '100%',
              },
            }}
          >
            privacy policy{' '}
          </Link>
          to understand how we collect, use, and protect your personal data.
        </Text>
      </VStack>
      {/* Complaints and Dispute Resolution */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          7. Complaints and Dispute Resolution
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          If you have any complaints or issues with your booking or stay at
          Feriland, please contact us at contact@feriland.ro/+40737515716. We
          are committed to resolving any issues promptly and fairly.
        </Text>
      </VStack>
      {/* Check-Out Process */}
      <VStack gap="0.5rem" alignItems="flex-start">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={6} mb={2}>
          8. Check-Out Process
        </Heading>
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }}>
          In order to proceed with your booking, you must accept our terms and
          conditions by ticking the checkbox provided on the check-out page. If
          the box is not checked, you will not be able to complete your booking.
        </Text>
      </VStack>
    </Box>
  );
};
