#!/bin/sh
cat > /usr/share/nginx/html/env.js <<'EOF'
window.__env = {
  VITE_API_URL: "${VITE_API_URL:-}",
  VITE_BACKEND_BASE_URL: "${VITE_BACKEND_BASE_URL:-}"
}
EOF
