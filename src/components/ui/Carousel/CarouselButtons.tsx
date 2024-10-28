import { cn } from "@/utility/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */

interface CarouselButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default forwardRef<HTMLButtonElement, CarouselButtonProps>(
    function CarouselButton({ className, ...rest }, ref) {
      return (
        <button
          ref={ref}
          className={cn('absolute block top-0 bottom-0 p-4 hover:opacity-20 focus-visible:opacity-20 hover:scale-150 focus-visible:scale-150 transition-all ease-in duration-100', className)}
          {...rest}
        />
      );
    }
  );