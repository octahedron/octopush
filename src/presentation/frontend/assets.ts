import fs from 'fs';

export function includeChunkManifest() {
  if (process.env.NODE_ENV !== 'production') return '';
  // prettier-ignore
  return `<script>window.__WEBPACK_MANIFEST__ = ${fs.readFileSync('./dist/web/chunk-manifest.json')};</script>`;
}

export let includeAsset = (path: string) => path;
if (process.env.NODE_ENV === 'production') {
  const assetManifest = JSON.parse(fs.readFileSync('./dist/web/asset-manifest.json') as any);
  includeAsset = path => assetManifest[path];
}