#!/bin/bash
set -e

APP_DIR="."
NGINX_DIR="/var/www/portfolio"
NODE_VERSION="24"

echo "Starting deployment..."

source ~/.nvm/nvm.sh
if ! command -v nvm >/dev/null 2>&1; then
    echo "nvm not found. Installing nvm..."

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    \. "$HOME/.nvm/nvm.sh"
fi

nvm install $NODE_VERSION

# ---- Deploy ----
cd "$APP_DIR"

git pull origin main
npm install
npm run build

sudo rm -rf "$NGINX_DIR/"
sudo cp -r dist "$NGINX_DIR/"

sudo chown -R www-data:www-data "$NGINX_DIR/"

echo "Deployment successful!"