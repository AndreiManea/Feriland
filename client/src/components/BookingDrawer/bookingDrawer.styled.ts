import bookingImg from '../../assets/BookingFormBg.jpg';

export const styles = {
  drawerContent: {
    bgImage: bookingImg,
    bgPosition: 'center',
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  drawerBody: {
    m: '0 auto',
    w: '50vw',
    backdropFilter: 'blur(20px)',
    color: 'white',
    backgroundColor: 'rgba(0,0,0, .69)',
    borderRadius: '1rem',
    flex: 'none',
    alignSelf: 'center',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    pt: 6,
    pb: 6,
  },
  menuButton: (isOpen: boolean) => ({
    mt: '2rem',
    w: '40%',
    height: 'auto',
    position: 'relative',
    border: '0',
    paddingLeft: 2.5,
    borderTop: `${!isOpen ? '1px' : '2px'} solid ${!isOpen ? 'rgb(221, 221, 221)' : 'black'}`,
  }),
  menuList: {
    marginTop: '-9px',
    boxShadow:
      'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    borderRadius: '4px',
    border: 'none',
    paddingTop: 0,
    paddingBottom: '16px',
    height: 'auto',
  },
  guestText: {
    fontSize: '0.875rem',
    textAlign: 'left',
    p: '26px 36px 0px 0px',
  },
  closeButton: {
    background: 'white',
    size: 'lg',
  },
  stepperButton: {
    w: '20%',
    mt: 7,
  },
};
