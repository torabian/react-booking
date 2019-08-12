import React from 'react';
import { Snippet } from '../Snippet';

const code = `<script src="https://pixelplux.com/embed/widget.js"></script>
<link rel="stylesheet" href="https://pixelplux.com/embed/css/styles.css" />
<script>
  InterDrop.mount({
    headerText: 'Do you need a booking service like this for your website?',
    bodyText: 'Body',
    term: 26,
    startDelay: 1000
  });
</script>`;
export class EmbedDoc extends React.Component {
  render() {
    return (
      <div>
        <h1>Embed Booking in existing software</h1>
        <p>
          React booking is not only meant to be used in React applications. You
          can use it with VueJs, Angular , or any kind of front-end framework or
          no-framework. We provide a widget based embeddeable that can be droped
          in any application (web not mobile).
          <br />
          Although you can build your own desired version and embed in your
          application, there is a hosted version for people whom are using
          PixelPlux enterprise version. In this section we are going to explore
          how to customise this booking calendar for any website.
        </p>
        <Snippet code={code} />
      </div>
    );
  }
}
