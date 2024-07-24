import {
  HeadingContainer,
  Heading,
  DetailsContainer,
  TextRegular,
  DotDivider,
} from '../DetailsSection.styled';

const DetailsHeader = () => {
  return (
    <HeadingContainer>
      <Heading>Entire Master Villa</Heading>
      <DetailsContainer>
        <TextRegular>6 Guests</TextRegular>
        <DotDivider />
        <TextRegular>2 Bedrooms</TextRegular>
        <DotDivider />
        <TextRegular>1.5 Baths</TextRegular>
        <DotDivider />
        <TextRegular>Ciubar</TextRegular>
      </DetailsContainer>
    </HeadingContainer>
  );
};

export default DetailsHeader;
