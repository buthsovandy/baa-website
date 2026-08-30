import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/** Fades content in the first time it enters the viewport. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** Image that degrades to a warm placeholder instead of a broken icon. */
export function Img({ src, alt = '', className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <span className={`relative block overflow-hidden bg-ink-soft ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
      {failed && (
        <span className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#2a251f] via-[#191612] to-[#0e0c0a]">
          <span className="label text-sand/50">{alt || 'Image'}</span>
        </span>
      )}
    </span>
  )
}

export function Arrow({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-px w-8 bg-current align-middle transition-all duration-500 group-hover:w-12 relative
        after:absolute after:right-0 after:-top-[3px] after:h-[7px] after:w-[7px]
        after:border-r after:border-t after:border-current after:rotate-45 ${className}`}
    />
  )
}

/** Uppercase, letterspaced link with the hairline arrow used all over the design. */
export function ArrowLink({ to, href, children, className = '' }) {
  const inner = (
    <>
      <span className="link-underline">{children}</span>
      <Arrow />
    </>
  )
  const cls = `group inline-flex items-center gap-4 label transition-colors duration-300 ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

/** Thin gold Khmer-inspired ornament used as a quiet accent. */
export function Ornament({ className = '' }) {
  return (
    <svg viewBox="0 0 40 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 2v116M20 14c-8 6-12 14-8 20 3 5 10 4 8-2M20 14c8 6 12 14 8 20-3 5-10 4-8-2M20 52c-8 6-12 14-8 20 3 5 10 4 8-2M20 52c8 6 12 14 8 20-3 5-10 4-8-2M20 92c-5 4-8 9-5 13M20 92c5 4 8 9 5 13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}
