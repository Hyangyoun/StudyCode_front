import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop 주소값바뀔때마다 스크롤 초기화
export default function ScrollToTop() {
    //useLocation 주소값감지
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}