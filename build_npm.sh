rm -rf npm_dist;
mkdir npm_dist;
cp package.json npm_dist/package.json;
cp README.md npm_dist/README.md
cp public/css/styles.css npm_dist/react-booking.css
NODE_ENV=production && rm -rf dist && mkdir dist && npx babel src/components --out-dir npm_dist --copy-files