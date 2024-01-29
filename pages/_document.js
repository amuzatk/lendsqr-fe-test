import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap" />
<script 
src="https://embed.tawk.to/64b56ed8cc26a871b028f37a/1h5ibhvun" 
async /> */}

<link rel="stylesheet" href={process.env.GOOGLE_FONTS_URL} />
<script src={process.env.TAWKTO_SCRIPT_URL} async />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;