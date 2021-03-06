import config from 'config';
import {HttpError} from 'react-cornerstone';
import serialize from 'serialize-javascript';
import {ServerStyleSheet} from 'styled-components';
import {includeAsset} from './assets';
import './ui/favicons/android-chrome-192x192.png';
import './ui/favicons/android-chrome-512x512.png';
import appleTouchIcon from './ui/favicons/apple-touch-icon.png';
import './ui/favicons/browserconfig.xml';
import favicon16 from './ui/favicons/favicon-16x16.png';
import favicon32 from './ui/favicons/favicon-32x32.png';
import './ui/favicons/favicon.ico';
import manifest from './ui/favicons/manifest.json';
import './ui/favicons/mstile-144x144.png';
import './ui/favicons/mstile-150x150.png';
import './ui/favicons/mstile-310x150.png';
import './ui/favicons/mstile-310x310.png';
import './ui/favicons/mstile-70x70.png';
import safariPinnedTab from './ui/favicons/safari-pinned-tab.svg';
import logo from './ui/octopus.png';

const clientConfig: string[] = [];
if (process.env.NODE_ENV === 'production') {
  if (config.has('raven')) clientConfig.push(`window.__RAVEN__ ='${config.get('raven')}'`);
  if (config.has('logrocket')) clientConfig.push(`window.__LOGROCKET__ = '${config.get('logrocket')}'`);
}

function renderLayout(body: string, sheet?: ServerStyleSheet, css?: string) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>Octopush</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <link href="//fonts.googleapis.com/css?family=Inconsolata:400,700|Source+Sans+Pro:300,400,700,400italic" rel="stylesheet" type="text/css">
      <link rel="apple-touch-icon" sizes="180x180" href="${appleTouchIcon}">
      <link rel="icon" type="image/png" href="${favicon32}" sizes="32x32">
      <link rel="icon" type="image/png" href="${favicon16}" sizes="16x16">
      <link rel="manifest" href="${manifest}">
      <link rel="mask-icon" href="${safariPinnedTab}" color="#5bbad5">
      <meta name="theme-color" content="#ffffff">
      ${sheet && sheet.getStyleTags()}
      <style>${css}</style>
    </head>
    <body>
      ${body}
    </body>
    </html>
  `;
}

export function render(html: string, state: any, sheet: ServerStyleSheet, ids: string[], css: string) {
  return renderLayout(
    `
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${serialize(state, {isJSON: true})};
        window.__EMOTION_IDS__ = ${JSON.stringify(ids)};
        ${clientConfig.length > 0 && clientConfig.join(';')}
      </script>
      <script src="${includeAsset('vendor.js')}"></script>
      <script src="/socket.io/socket.io.js"></script>
      <script src="${includeAsset('main.js')}"></script>
    `,
    sheet,
    css
  );
}

export function renderError(code: number, error: Error) {
  const title =
    code === HttpError.NOT_FOUND
      ? 'Sorry, that page has gone walkabout'
      : 'Sorry, something totally unexpected has happened';
  const message =
    code === HttpError.NOT_FOUND
      ? "We can't seem to find the page you're looking for"
      : "We're not entirely sure what happened, but rest assured we are looking into it";
  return renderLayout(`
    <div>
      <header class="clearfix">
        <h1 class="ir" style="background-image:url(${logo});">Octopush</h1>
        <div>
          <h2>${title}</h2>
          <pre>${process.env.NODE_ENV === 'development' ? error.stack : message}</pre>
        </div>
      </header>
    </div>
  `);
}
