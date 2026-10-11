#!/usr/bin/env bash
# Deploy Hysterical Ladies to Cloudflare Pages
# Usage: ./deploy-cloudflare.sh [--project-name name]
set -e

PROJECT="${1:-hystericalladies}"

echo "▲ Building Next.js static export…"
npm run build

echo "☁️  Deploying to Cloudflare Pages (project: $PROJECT)…"
npx wrangler pages deploy out --project-name "$PROJECT"

echo "✓ Done. Check https://${PROJECT}.pages.dev"
