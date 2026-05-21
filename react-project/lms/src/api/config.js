const runtimeEnv = typeof window !== 'undefined' ? window.__env || {} : {}
const rawBaseUrl =
  runtimeEnv.VITE_BACKEND_BASE_URL ||
  runtimeEnv.VITE_API_URL ||
  import.meta.env.VITE_BACKEND_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  'http://localhost:8000'

const API_BASE_URL = rawBaseUrl.replace(/\/+$/, '')

console.log('Runtime env:', runtimeEnv)
console.log('Build env VITE_BACKEND_BASE_URL:', import.meta.env.VITE_BACKEND_BASE_URL)
console.log('Build env VITE_API_URL:', import.meta.env.VITE_API_URL)

export default API_BASE_URL