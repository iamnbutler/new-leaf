'use client'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// TODO: Hook up once appdir support for next-themes lands
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <button onClick={() => setTheme('light')}>
        <SunIcon className="h-6 w-6" />
      </button>

      {theme === 'light' &&
        <button onClick={() => setTheme('dark')}>
          <MoonIcon className="h-6 w-6" />
        </button>
      }
    </div>
  )
}