import { useEffect } from "react";

export const useDisableScrollBounce = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscroll-hidden-none");
    return () => {
      document.body.classList.remove("overflow-hidden", "overscroll-hidden");
    };
  }, []);
};
