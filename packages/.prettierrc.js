module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@grow/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
