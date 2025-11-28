import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Home, Settings } from 'lucide-react'
import { useThemeStore } from '@/store/themeStore'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/ectopic', label: 'Ectopic' },
  { path: '/preeclampsia', label: 'Preeclampsia' },
  { path: '/gdm', label: 'GDM' },
  { path: '/placental', label: 'Placental' },
  { path: '/cholestasis', label: 'Cholestasis' },
  { path: '/pph', label: 'PPH' },
  { path: '/loss', label: 'Pregnancy Loss' },
  { path: '/labor', label: 'Labor' },
  { path: '/gyn-emergencies', label: 'GYN Emergencies' },
  { path: '/cases', label: 'Cases' },
  { path: '/assessment', label: 'Assessment' },
  { path: '/glossary', label: 'Glossary' },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                OBGYN Master
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Link to="/settings">
                <Button variant="ghost" size="icon" aria-label="Settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center space-x-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent',
                      location.pathname === item.path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground'
                    )}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Link
            to="/"
            className={cn(
              'flex flex-col items-center justify-center rounded-lg py-2 text-xs',
              location.pathname === '/'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Home className="h-5 w-5 mb-1" />
            <span>Home</span>
          </Link>
          <Link
            to="/cases"
            className={cn(
              'flex flex-col items-center justify-center rounded-lg py-2 text-xs',
              location.pathname === '/cases'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <div className="h-5 w-5 mb-1 flex items-center justify-center font-bold">C</div>
            <span>Cases</span>
          </Link>
          <Link
            to="/assessment"
            className={cn(
              'flex flex-col items-center justify-center rounded-lg py-2 text-xs',
              location.pathname === '/assessment'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <div className="h-5 w-5 mb-1 flex items-center justify-center font-bold">A</div>
            <span>Assess</span>
          </Link>
          <Link
            to="/settings"
            className={cn(
              'flex flex-col items-center justify-center rounded-lg py-2 text-xs',
              location.pathname === '/settings'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Settings className="h-5 w-5 mb-1" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </>
  )
}
