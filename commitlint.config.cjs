module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ["type", "scope", "subject"],
      referenceActions: [
        "close",
        "closes",
        "closed",
        "fix",
        "fixes",
        "fixed",
        "resolve",
        "resolves",
        "resolved",
      ],
      issuePrefixes: ["#"],
      noteKeywords: ["BREAKING CHANGE", "不兼容变更"],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ["header", "hash"],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat", // 增加新功能
        "fix", // 修复问题/BUG
        "docs", // 文档/注释
        "style", // 代码风格相关无影响运行结果的
        "refactor", // 重构
        "test", // 测试相关
        "revert", // 回滚某个更早之前的提交
        "perf", // 优化/性能提升
        "merge", // 分支合并
        "chore", // 依赖更新/脚手架配置修改等
        "types", // 类型定义文件更改
        "ci", // 持续集成
      ],
    ],
  },
};