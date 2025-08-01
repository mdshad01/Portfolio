import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] px-4 py-4 rounded-md bg-primary border border-white/10 focus:border-accent font-light text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
