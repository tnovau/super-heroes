import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const scrollPageToTop = () => window.scrollTo(0, 0);

const ScrollToTop = () => {
  const [pathname, setPathname] = useState();
  const { location } = useHistory();

  useEffect(() => {
    if (pathname !== location.pathname) {
      setPathname(location.pathname);
      scrollPageToTop();
    }
  }, [pathname, location.pathname]);

  return null;
};

export default ScrollToTop;
