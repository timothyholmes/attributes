module.exports = {
  plugins: [],
  recurseDepth: 10,
  source: {
    include: ['lib', 'README.md'],
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc']
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  },
  opts: {
    template: 'node_modules/minami',
    destination: './docs/',
    recurse: true
  }
};
