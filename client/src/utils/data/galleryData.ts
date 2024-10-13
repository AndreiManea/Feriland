import bathRoomImg1 from '../../assets/Bathroom1.webp';
import bathRoomImg2 from '../../assets/Bathroom2.webp';
import bathRoomImg3 from '../../assets/Bathroom3.webp';
import bedRoom1Img1 from '../../assets/FirstBedroom1.webp';
import bedRoom1Img2 from '../../assets/FirstBedroom2.webp';
import bedRoom1Img3 from '../../assets/FirstBedroom3.webp';
import bedRoom2Img1 from '../../assets/SecondBedroom1.webp';
import bedRoom2Img2 from '../../assets/SecondBedroom2.webp';
import bedRoom2Img3 from '../../assets/SecondBedroom3.webp';
import livingAreaImg1 from '../../assets/LivingRoom1.webp';
import livingAreaImg2 from '../../assets/LivingRoom2.webp';
import livingAreaImg3 from '../../assets/LivingRoom3.webp';
import kitchenImg1 from '../../assets/Kitchen1.webp';
import kitchenImg2 from '../../assets/Kitchen2.webp';
import kitchenImg3 from '../../assets/Kitchen3.webp';

export const galleryImages = {
  bedRoom1: {
    mainImage: bedRoom1Img1,
    gallery: [bedRoom1Img1, bedRoom1Img2, bedRoom1Img3],
  },
  bedRoom2: {
    mainImage: bedRoom2Img2,
    gallery: [bedRoom2Img1, bedRoom2Img2, bedRoom2Img3],
  },
  bathRoom: {
    mainImage: bathRoomImg2,
    gallery: [bathRoomImg1, bathRoomImg2, bathRoomImg3],
  },
  livingArea: {
    mainImage: livingAreaImg2,
    gallery: [livingAreaImg1, livingAreaImg2, livingAreaImg3],
  },
  kitchen: {
    mainImage: kitchenImg2,
    gallery: [kitchenImg1, kitchenImg2, kitchenImg3],
  },
};
