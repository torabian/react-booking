import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export class Snippet extends React.Component {
  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.code}
        language="js"
        className=" line-numbers"
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={'document-code-snippet'}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <span className="document-pre-line-number">{i + 1}</span>

                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
}
