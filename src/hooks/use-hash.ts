import { useEffect, useState } from "react";

const useHash = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", updateHash);
    updateHash();
  }, []);

  return hash;
};

export default useHash;
