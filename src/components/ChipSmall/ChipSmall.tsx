import type { ReactNode } from "react";
import style from "./ChipSmall.module.css";

interface ChipSmallProps {
  children: ReactNode;
}

function ChipSmall({ children }: ChipSmallProps) {
  return (
   
    <div className={style.chipWrapper}>
      {children}
    </div>
  );
}

export default ChipSmall;
