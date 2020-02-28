module.exports = {
  "rules": {
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    // These selectors are used as placeholders by
    // styled-components preprocessor
    "selector-type-no-unknown": [true, { ignoreTypes: ["$dummyValue", "/^-styled-/"] }],
    "selector-type-case": ["lower", { ignoreTypes: ["$dummyValue"] }]
  }
}
