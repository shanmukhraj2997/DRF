#!/bin/sh
printf '%s\n' 'window.__env = {' \
  "  VITE_API_URL: \"${VITE_API_URL:-}\"," \
  "  VITE_BACKEND_BASE_URL: \"${VITE_BACKEND_BASE_URL:-}\"" \
'}' > /usr/share/nginx/html/env.js
