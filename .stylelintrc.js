module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        ignore: ["stylelint-commands", "after-comment"]
      }
    ],
    "declaration-colon-space-after": "always",
    indentation: [
      2,
      {
        except: ["value"]
      }
    ],
    "max-empty-lines": 2,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "ignores"]
      }
    ],
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "%", "s", "px", "vh", "vw", "deg"]
  },
  plugins: [ 'stylelint-scss' ]
};
