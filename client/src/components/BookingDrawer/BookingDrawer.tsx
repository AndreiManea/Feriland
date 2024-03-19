import {
  useSteps,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
  Text,
  Button,
  Menu,
  MenuItem,
  MenuList,
  VStack,
  Icon,
  MenuButton,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice';
import bookingImg from '../../assets/BookingFormBg.jpg';
import CalendarSection from '../MasterVillaPage/DetailsSection/CalendarSection/CalendarSection';
import { useState } from 'react';
import Counter from '../MasterVillaPage/DetailsSection/StickyCalendar/Counter/Counter';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const steps = [
  { title: 'First', description: 'Booking Details' },
  { title: 'Second', description: 'Choose Cabin' },
  { title: 'Third', description: 'Final Details' },
];
const BookingDrawer = () => {
  // Global state
  const dispatch = useAppDispatch();
  const isBookingDrawerOpen = useAppSelector(
    state => state.bookings.isBookingDrawerOpen
  );

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const totalGuests = adults + children;

  return (
    <Drawer
      placement="right"
      size="full"
      isOpen={isBookingDrawerOpen}
      onClose={() => dispatch(setBookingDrawerOpen(false))}
    >
      <DrawerOverlay />
      <DrawerContent
        bgImage={bookingImg}
        bgPosition="center" // Controls the position of the background image.
        bgRepeat="no-repeat" // Defines how the background image repeats.
        bgSize="cover" // Specifies the size of the background image.
        width="100%" // Set the width of the element
        justifyContent="center"
        position="relative"
      >
        <DrawerCloseButton background="white" size="lg" />
        <DrawerBody
          m="0 auto"
          w="50vw"
          backdropFilter="blur(20px)"
          color="white"
          backgroundColor="rgba(0,0,0, .69)"
          borderRadius="1rem"
          flex="none"
          alignSelf="center"
          overflow="visible"
          height="70vh"
          display="flex"
          flexDirection="column"
        >
          <Stepper size="lg" index={activeStep} colorScheme="green">
            {steps.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription style={{ color: 'white' }}>
                    {step.description}
                  </StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          <Text fontSize="xx-large" mt="1rem">
            Start Booking
          </Text>
          <CalendarSection />
          <Menu
            matchWidth
            onClose={() => setIsOpen(prev => !prev)}
            onOpen={() => setIsOpen(prev => !prev)}
          >
            <MenuButton
              as={Button}
              rightIcon={
                <Icon
                  as={isOpen ? ChevronUpIcon : ChevronDownIcon}
                  w={8}
                  h={8}
                />
              }
              mt="2rem"
              w="40%"
              height="auto"
              position="relative"
              // background="transparent"
              border={`${!isOpen ? '0' : '2px'}`}
              borderTop={` ${!isOpen ? '1px' : '2px'} solid ${!isOpen ? 'rgb(221, 221, 221)' : 'black'}`}
              paddingLeft={2.5}
            >
              <Text fontSize="large" position="absolute" top={2} left={2}>
                Guests
              </Text>
              <Text fontSize="0.875rem" textAlign="left" p="26px 36px 0px 0px">
                {totalGuests === 1
                  ? `${totalGuests} guest`
                  : `${totalGuests} guests`}
              </Text>
            </MenuButton>
            <MenuList
              marginTop="-9px"
              boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px"
              borderRadius="4px"
              border="none"
              paddingTop={0}
              paddingBottom="16px"
              height="auto"
            >
              <VStack p={4}>
                <Counter label="Adults" value={adults} setValue={setAdults} />
                <Counter
                  label="Children"
                  value={children}
                  setValue={setChildren}
                />
              </VStack>
              <Text
                color="rgb(34, 34, 34)"
                marginTop="8px"
                marginBottom="16px"
                padding="0 16px"
              >
                This place has a maximum of 6 guests, not including infants.
                Pets aren't allowed.
              </Text>
              <MenuItem
                as={Button}
                justifyContent="flex-end"
                color="#547c39"
                _hover={{ background: 'transparent' }}
                _focus={{ background: 'transparent' }}
                p={0}
                paddingRight="10px"
              >
                <Text
                  textDecoration="underline"
                  marginBottom={0}
                  _hover={{ background: '#F7F7F7', borderRadius: '8px' }}
                  p="10px"
                >
                  Close
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
