import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'ref' | 'className' | 'children'>

/**
 * Wraps content with the scroll-reveal animation: applies `.reveal` and adds
 * `.is-visible` once it enters the viewport. Extra props (onMouseMove, style…)
 * are forwarded to the rendered element.
 */
export function Reveal({ children, as: Tag = 'div', className = '', ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
