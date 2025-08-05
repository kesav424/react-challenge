import { tailwindMergeConfig } from '@/_configs/tailwindMerge.config';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV, type VariantProps } from 'tailwind-variants';

export type { VariantProps }

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
