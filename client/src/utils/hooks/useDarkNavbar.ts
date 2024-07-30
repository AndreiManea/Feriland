import { RefObject, useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setDarkNavbar } from '../../redux/slices/stylesSlice';

const useScrollTrigger = (
  sectionRef: RefObject<HTMLElement>,
  threshold: number = 56
) => {
  const [hasLogged, setHasLogged] = useState(false);
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    if (sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top <= threshold && !hasLogged) {
        dispatch(setDarkNavbar(true));
        setHasLogged(true);
      } else if (top > threshold && hasLogged) {
        dispatch(setDarkNavbar(false));
        setHasLogged(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasLogged]);

  return hasLogged;
};

export default useScrollTrigger;
