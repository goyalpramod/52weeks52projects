import { useNavigate } from "react-router"
import { useEffect } from "react"

const useEscapeToHub = () => {
      const navigate = useNavigate()

  useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
              if (e.key === 'Escape') {
                navigate("/hub")
              }
          }
          window.addEventListener('keydown', handleKeyDown)
          return () => window.removeEventListener('keydown', handleKeyDown)
      }, [navigate])
}

export default useEscapeToHub