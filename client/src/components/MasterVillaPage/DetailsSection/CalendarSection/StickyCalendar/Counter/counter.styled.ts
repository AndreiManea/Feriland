import customTheme from '../../../../../../utils/styles/theme';

export const styles = {
  hStackContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    w: 'full',
    p: 0,
  },
  labelText: {
    flexShrink: 0,
    m: 0,
    flex: 1,
    color: '#222',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  hStackInner: {
    flexShrink: 1,
    flexGrow: 1,
    flex: 1,
    w: 'full',
    justifyContent: 'center',
    p: 0,
  },
  button: {
    size: 'sm',
    borderRadius: '100%',
    background: 'none',
    opacity: '0.43',
    color: customTheme.colors.primary[500],
    border: '1px solid #547c39',
    height: '32px',
    width: '32px',
    _hover: {
      background: 'transparent',
      opacity: 1,
    },
    minWidth: '32px',
    p: 0,
  },
  input: {
    color: '#547c39',
    border: 'none',
    width: '42px',
  },
};
