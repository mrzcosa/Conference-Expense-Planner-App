export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    subtle: 'btn-subtle',
  }

  return (
    <button className={`btn ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
