import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
export const clm = (...classes) => twMerge(clsx(...classes))
export const cn  = (...classes) => classes.filter(Boolean).join(' ')