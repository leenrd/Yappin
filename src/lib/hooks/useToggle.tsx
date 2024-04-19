import { SetStateAction, useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState<SetStateAction<boolean>>();
  const setToggle = (params?: boolean) => {
    setValue((prev: boolean) => (typeof params === "boolean" ? params : !prev));
  };

  return [value, setToggle];
};

export default useToggle;
