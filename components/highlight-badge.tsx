import type { PropsWithChildren } from "react";

export const HighlightBadge = ({ children }: PropsWithChildren) => {
  return (
    <div className="tag shadow-lg shadow-PRIMARY_PINK/20">
      <span
        className="bg-gradient-to-br from-PRIMARY_PINK to-PRIMARY_YELLOW 
                    text-transparent bg-clip-text"
      >
        {children}
      </span>
    </div>
  );
};
