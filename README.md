# FHCpeBoard 启动器

烽火 CPE 数据看板（Scripting 版）启动器备份仓库。

本仓库仅备份**启动器**（`.scripting` 及其源码 `index.tsx` / `script.json`），与 Gitee 上发布的 UI 云端文件（`fhcpeweb.html` 等）分开管理。

## 目录
- `FHCpeBoard/` — 正式启动器（launcher v1.1.4，对应 Gitee 正式线）
- `FHCpeBoardtest/` — 测试启动器（launcher v1.1.5，对应 Gitee 测试线）

## 使用
将对应 `.scripting` 导入 Scripting App 即可；如需改源码，编辑 `index.tsx` 后用 Scripting 重新打包。
