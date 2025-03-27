module.exports = {
  target: 'electron-renderer',
  externals: {
    electron: 'require("electron")',
    '@electron/remote': 'require("@electron/remote")'
  },
  resolve: {
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
  }
}; 