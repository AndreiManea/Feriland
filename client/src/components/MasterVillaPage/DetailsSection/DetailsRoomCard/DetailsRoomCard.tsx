import {
  CardContainer,
  TextButtonContainer,
  SubHeading,
  LinkContainer,
  ArrowLink,
  TextSmall,
} from '../DetailsSection.styled';

interface CardProps {
  imgSrc: string;
  imgSet: string;
  altText: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const CardComponent: React.FC<CardProps> = ({
  imgSrc,
  imgSet,
  altText,
  title,
  onClick,
}) => (
  <CardContainer>
    <img
      src={imgSrc}
      srcSet={imgSet}
      sizes="(max-width: 479px) 100vw, 110px"
      loading="lazy"
      width="1000"
      alt={altText}
    />
    <TextButtonContainer>
      <SubHeading>{title}</SubHeading>
      <LinkContainer
        href="#"
        aria-label="open lightbox"
        aria-haspopup="dialog"
        onClick={onClick}
      >
        <ArrowLink>
          <TextSmall>View Images</TextSmall>
          <img
            src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
            loading="lazy"
            alt=""
          />
        </ArrowLink>
      </LinkContainer>
    </TextButtonContainer>
  </CardContainer>
);

export default CardComponent;
