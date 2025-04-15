
import { Brain } from "lucide-react"
import { Link } from "react-router-dom"

type LogoProps = {
  size?: 'small' | 'medium' | 'large'
  textColor?: string
  withText?: boolean
}

export function Logo({ 
  size = 'medium', 
  textColor = 'text-white',
  withText = true
}: LogoProps) {
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    medium: { icon: 32, text: 'text-xl' },
    large: { icon: 48, text: 'text-3xl' },
  }
  
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="rounded-full bg-gradient-to-br from-vibrant-pink to-bright-orange p-1.5 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow">
        <Brain 
          size={sizes[size].icon} 
          className="text-white" 
          strokeWidth={2.5}
        />
      </div>
      {withText && (
        <span className={`font-bold ${sizes[size].text} ${textColor} tracking-tight`}>
          InsightHub
        </span>
      )}
    </Link>
  )
}
