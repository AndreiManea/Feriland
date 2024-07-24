export const styles = {
  menuButton: (isOpen: boolean) => ({
    w: 'full',
    height: 'auto',
    position: 'relative',
    background: 'transparent',
    border: `${!isOpen ? '0' : '2px'}`,
    borderTop: `${!isOpen ? '1px' : '2px'} solid ${!isOpen ? 'rgb(221, 221, 221)' : 'black'}`,
    borderRadius: isOpen ? '12px' : 0,
    paddingLeft: 2.5,
    _hover: {
      borderBottomEndRadius: '12px',
      borderBottomLeftRadius: '12px',
      background: 'transparent',
    },
    _active: {
      background: 'transparent',
    },
  }),
  guestsText: {
    fontSize: '12px',
    position: 'absolute',
    top: 2,
    left: 2,
  },
  totalGuestsText: {
    fontSize: '0.875rem',
    textAlign: 'left',
    p: '26px 36px 0px 0px',
    marginTop: 2,
  },
  menuList: {
    marginTop: '-9px',
    boxShadow:
      'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    borderRadius: '4px',
    border: 'none',
    paddingTop: 0,
    paddingBottom: '16px',
  },
  vStack: {
    p: 4,
  },
  infoText: {
    color: 'rgb(34, 34, 34)',
    marginTop: '8px',
    marginBottom: '16px',
    padding: '0 16px',
  },
  menuItem: {
    justifyContent: 'flex-end',
    _hover: { background: 'transparent' },
    _focus: { background: 'transparent' },
    p: 0,
    paddingRight: '10px',
  },
  closeButtonText: {
    textDecoration: 'underline',
    marginBottom: 0,
    _hover: { background: '#F7F7F7', borderRadius: '8px' },
    p: '10px',
    color: 'black',
  },
};
