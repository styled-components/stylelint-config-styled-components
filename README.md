# `stylelint-config-styled-components`

The shareable stylelint config for [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components)

[![npm version][version-badge]][version-url]
[![build status][build-badge]][build-url]
[![greenkeeper badge][greenkeeper-badge]][greenkeeper-url]

## Why

When using [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components)
a couple of stylelint rules throw errors that you cannot prevent. Like 
'[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)' or 
'[no-missing-end-of-source-newline](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline)'.

This shareable config will automatically disable rules that cause unresolvable conflicts. Besides
those rules vendor prefixed [properties](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)
and [values](https://stylelint.io/user-guide/rules/value-no-vendor-prefix) will throw an error since
styled-components automatically generates vendor prefixes for your css. Note that if you want to
change any of these rules you can always override them in your stylelint config.

## Installation

```
npm install stylelint-config-styled-components --save-dev
```

## [Documentation](https://www.styled-components.com/docs/tooling#)

**The documentation for this config lives on [the styled-components website](https://www.styled-components.com/docs/tooling#)!**

- [Interpolation tagging](https://www.styled-components.com/docs/tooling#interpolation-taggingp)
- [Tags](https://www.styled-components.com/docs/tooling#tags)
- [sc-custom](https://www.styled-components.com/docs/tooling#sc-custom)
- [Syntax Notes](https://www.styled-components.com/docs/tooling#syntax-notes)

## License

[MIT](http://ismay.mit-license.org/)

[version-badge]: https://img.shields.io/npm/v/stylelint-config-styled-components.svg
[version-url]: https://www.npmjs.com/package/stylelint-config-styled-components
[build-badge]: https://travis-ci.org/styled-components/stylelint-config-styled-components.svg?branch=master
[build-url]: https://travis-ci.org/styled-components/stylelint-config-styled-components
[greenkeeper-badge]: https://badges.greenkeeper.io/styled-components/stylelint-config-styled-components.svg
[greenkeeper-url]: https://greenkeeper.io/
