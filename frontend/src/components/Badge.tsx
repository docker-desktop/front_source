interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: "Default" | "Dark" | "Red" | "Green" | "Yellow" | "Indigo" | "Purple" | "Pink"
}

const Badge = ({type, children, className=""}: IBadgeProps) => {
  switch (type) {
    case "Default":
      return (
        <span className={`bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Dark":
      return (
        <span className={`bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Red":
      return (
        <span className={`bg-red-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Green": 
      return (
        <span className={`bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Indigo":
      return (
        <span className={`bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Pink":
      return (
        <span className={`bg-pink-100 text-pink-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Purple":
      return (
        <span className={`bg-purple-100 text-purple-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
    case "Yellow":
      return (
        <span className={`bg-yellow-100 text-yellow-800 font-medium me-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
      )
  }
}

export default Badge