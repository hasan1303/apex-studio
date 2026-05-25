export const useTheme = () => {
  const isDark = useState('isDark', () => false)

  const applyTheme = (dark: boolean) => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    }
    isDark.value = dark
  }

  const toggleTheme = () => applyTheme(!isDark.value)

  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(saved ? saved === 'dark' : prefersDark)
    }
  }

  return { isDark, toggleTheme, initTheme }
}
