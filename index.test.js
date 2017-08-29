const stylelint = require('stylelint')

describe('stylelint-config-styled-components', () => {
  it('does not allow vendor prefixes in values', () => {
    const css = 'a { display: -webkit-flex; }'
    expect.assertions(2)

    return stylelint
      .lint({
        code: css,
        formatter: 'string',
        config: {
          extends: './index'
        }
      })
      .then(result => {
        expect(result.errored).toBe(true)
        expect(result.output.includes('value-no-vendor-prefix')).toBe(true)
      })
  })

  it('does not allow vendor prefixes in properties', () => {
    const css = 'a { -webkit-transform: scale(1); }'
    expect.assertions(2)

    return stylelint
      .lint({
        code: css,
        formatter: 'string',
        config: {
          extends: './index'
        }
      })
      .then(result => {
        expect(result.errored).toBe(true)
        expect(result.output.includes('property-no-vendor-prefix')).toBe(true)
      })
  })

  it('disables no-empty-source', () => {
    const css = '\n'
    expect.assertions(1)

    return stylelint
      .lint({
        code: css,
        config: {
          extends: [
            'stylelint-config-standard',
            './index'
          ]
        }
      })
      .then(result => {
        expect(result.errored).toBe(false)
      })
  })

  it('disables no-missing-end-of-source-newline', () => {
    const css = 'a { color: pink; }'
    expect.assertions(1)

    return stylelint
      .lint({
        code: css,
        config: {
          extends: [
            'stylelint-config-standard',
            './index'
          ]
        }
      })
      .then(result => {
        expect(result.errored).toBe(false)
      })
  })
})
