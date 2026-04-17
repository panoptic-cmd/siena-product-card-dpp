import type { ReactNode } from "react";
import style from "./ChipBig.module.css";


interface ChipBigProps {
  title: ReactNode;
  label: ReactNode;
  icon: ReactNode;
}

function ChipBig({ title, label, icon }: ChipBigProps) {
  return (
   
    <div className={style.chipWrapper}>
      <div className={style.headerGroup}>
        <div className={style.icon}>{icon}</div>
      <h3 className={style.description}>{title}</h3>
      
      </div>
      <span className={style.label}>{label}</span>
    </div>
  );
}

export default ChipBig;
