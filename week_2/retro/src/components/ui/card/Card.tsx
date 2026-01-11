import { type ReactNode } from "react";

function Card({ children }: { children : ReactNode }) {
  return (
    <div className="bg-primary-orange text-white px-6 py-3 border-4 rounded-none border-black shadow-[6px_6px_0_0_black]">
      {children}
    </div>
  );
}


export default Card;