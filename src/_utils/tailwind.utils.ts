import { tailwindMergeConfig } from '@/_configs/tailwindMerge.config';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';


const twMerge = extendTailwindMerge({
  extend: tailwindMergeConfig,
});
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const tv = createTV({
  twMerge: true,
  twMergeConfig: tailwindMergeConfig,
});
