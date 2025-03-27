/**
 * @author: @AngularClass
 */

const webpack = require('webpack');

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
  default:
    const config = require('./config/webpack.dev')({env: 'development'});
    
    // Add externals for Electron modules
    config.externals = {
      ...config.externals,
      electron: 'require("electron")',
      '@electron/remote': 'require("@electron/remote")'
    };

    // Add target configuration
    config.target = 'electron-renderer';

    // Add Node.js configuration
    config.node = {
      __dirname: false,
      __filename: false,
      global: true
    };

    // Add Node.js polyfills
    config.resolve = {
      ...config.resolve,
      fallback: {
        path: require.resolve('path-browserify'),
        fs: false,
        crypto: false,
        stream: false,
        util: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
        net: false,
        tls: false,
        child_process: false,
        dns: false,
        tty: false,
        constants: false,
        module: false,
        zlib: false,
        events: false,
        buffer: false,
        string_decoder: false,
        querystring: false,
        punycode: false,
        process: false,
        vm: false,
        domain: false,
        dgram: false,
        cluster: false,
        v8: false,
        readline: false,
        repl: false,
        timers: false,
        _stream_duplex: false,
        _stream_passthrough: false,
        _stream_readable: false,
        _stream_transform: false,
        _stream_writable: false
      }
    };
    module.exports = config;
}
