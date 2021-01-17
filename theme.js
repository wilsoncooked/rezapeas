/**
 * Returns if a component has been mounted yet
 */
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(setIsMounted, 0, true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return isMounted;
}
