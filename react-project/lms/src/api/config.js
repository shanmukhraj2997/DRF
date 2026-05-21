const runtimeEnv = typeof window !== 'undefined' ? window.__env || {} : {}
const API_BASE_URL = runtimeEnv.VITE_BACKEND_BASE_URL || runtimeEnv.VITE_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:8000'

console.log('Runtime env:', runtimeEnv)
console.log('Build env VITE_API_URL:', import.meta.env.VITE_API_URL)

export default API_BASE_URL