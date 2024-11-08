# Manual of Me 主题配置指南

## 简介

**Manual of Me** 是 MDFriday 提供的一款主题，适用于 Obsidian 及 Hugo 用户。
该主题旨在帮助用户轻松展示个人内容，下面将详细说明配置文件中的各个字段及其含义。

## 配置文件示例

```yaml
---
friday-plugin: enabled
site: '1'
theme: github.com/mdfriday/theme-manual-of-me
content: MDFriday/theme-manual-of-me/content
Author: # 请填写您的名字或昵称
---
```

## 配置项说明

### 1. **friday-plugin**
- **描述**：表示 MDFriday 插件的启用状态。
- **默认值**：`enabled`
- **说明**：保持此项为 `enabled` 即可，无需修改。该字段是 MDFriday 插件的标志，确保插件正常工作。

### 2. **site**
- **描述**：站点 ID。
- **默认值**：`'47'`（由插件自动生成）
- **说明**：此字段由 MDFriday 插件自动生成，表示您的站点 ID。建议不要更改。

### 3. **theme**
- **描述**：主题的 GitHub 地址。
- **默认值**：`github.com/mdfriday/theme-manual-of-me`
- **说明**：此项指定使用的 Hugo 主题的 GitHub 地址。您可以根据需要更换为其他主题的地址。如果您使用的是默认的 Manual of Me 主题，保持此值不变。

### 4. **content**
- **描述**：内容文件夹路径。
- **默认值**：`MDFriday/theme-manual-of-me/content`
- **说明**：此项定义了主题内容文件夹的位置。初始时，`content` 字段值为`empty`，插件会在用户下载样例文件后自动更新为相对路径。

### 5. **Author**
- **描述**：站点作者的名字或昵称。
- **必填项**：**是**
- **说明**：**此字段为必填项**，您需要填写您的名字或昵称，以便在生成的站点中显示作者信息。如果此项为空，部分内容可能无法正确显示。

## 必填项说明

### **Author**
- **必填**：用户必须在 `Author` 字段填写自己的名字或昵称。这个字段是主题生成时必要的信息，确保作者能够正确显示在站点中。
- **默认值**：无默认值，必须由用户填写。

> ⚠️ **注意**：如果未填写 `Author` 字段，可能会导致主题在显示时无法正确呈现作者信息。

## 使用建议
- 如果您希望使用其他 Hugo 主题，直接在 `theme` 字段中填写新的主题地址即可。
- 内容目录 `content` 在下载样例文件后会自动更新，无需手动更改。但如果您想指向其它的文件位置，记得更新此路径。

---

通过正确配置上述字段，您将能够顺利启用 Manual of Me 主题并展示内容。
如果有任何疑问或需要更多帮助，请访问MDFriday官网主题介绍页面：[theme-manual-of-me](https://mdfriday.com/theme-manual-of-me)。
