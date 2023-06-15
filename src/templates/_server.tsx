// Environment: server

import * as ReactDOMServer from "react-dom/server";
import * as React from "react";
import { PageContext } from "@yext/pages";
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import {cache} from '@emotion/css';
import Favicon from "../assets/images/yext-favicon.ico";

export { render };

const render = async (pageContext: PageContext<any>) => {
  const { Page, pageProps } = pageContext;
  
  const viewHtml = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <Page {...pageProps} />
    </CacheProvider>
  );
  
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const chunks = extractCriticalToChunks(viewHtml);
  const styles = constructStyleTagsFromChunks(chunks);

  return `<!DOCTYPE html>
    <html lang="<!--app-lang-->">
      <head>
				<link rel="icon" type="image/x-icon" href=${Favicon}>
			</head>
      <body>
        <div id="reactele">${viewHtml}</div>
      </body>
    </html>`;
};