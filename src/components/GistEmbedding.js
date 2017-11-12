// @flow
import React from 'react';
export default class Gist extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id || this.props.file !== nextProps.file;
  }

  componentDidMount() {
    this._updateIframeContent();
  }
  componentDidUpdate(prevProps, prevState) {
    this._updateIframeContent();
  }

  _calculateUrl() {
    if (this.props.file) {
      return 'https://gist.github.com/' + this.props.id + '.js?file=' + this.props.file;
    } else {
      return 'https://gist.github.com/' + this.props.id + '.js';
    }
  }

  _updateIframeContent() {
    var iframe = this.iframe;

    var doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    var gistLink = this._calculateUrl();
    var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
    var styles = '<style>*{font-size:12px;}</style>';
    var resizeScript =
      'onload="parent.document.getElementById(\'gist-' +
      this.props.id +
      "').style.height=document.body.scrollHeight + 'px'\"";
    var iframeHtml =
      '<html><head><base target="_parent">' +
      styles +
      '</head><body ' +
      resizeScript +
      '>' +
      gistScript +
      '</body></html>';

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const gistTitle = 'gist-' + this.props.id;
    return (
      <iframe
        ref={iframe => {
          this.iframe = iframe;
        }}
        width="100%"
        frameBorder={0}
        id={gistTitle}
        title={gistTitle}
      />
    );
  }
}
