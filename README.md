<h1 align=center>Hugo Manual of Me Theme | <a href="https://laoyuan.app.mdfriday.com" rel="nofollow">Demo</a></h1>

[![Hugo](https://img.shields.io/badge/hugo-0.134-blue.svg)](https://gohugo.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build with Hugo](https://github.com/mdfriday/theme-manual-of-me/actions/workflows/main.yml/badge.svg)](https://github.com/mdfriday/theme-manual-of-me/actions/workflows/main.yml)

<h3><a href="https://mdfriday.com" rel="nofollow">MD Friday</a> personal branding Hugo theme</h3>

Manual of Me is a personal profile theme designed to showcase who you are, the services you offer, ways to get in touch, 
and opportunities for collaboration. It highlights your experiences, skills, and passions, 
providing a clear and engaging introduction to your personal brand.

![Screenshot](https://raw.githubusercontent.com/mdfriday/theme-manual-of-me/main/images/screenshot.png)

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Shortcodes](#shortcodes)
- [Versioning](#versioning)
- [Contributing](#contributing)

## Features

- Full-Screen Image Preview
- Clean Simple Design
- Light and Mobile-Friendly
- Bilibili Space Shortcode
- Customisable Cover Image

## Requirements

- Hugo 0.112.7 or higher
- Hugoverse 0.1.0 or higher

## Installation

### Install as hugo module

You can also add this theme as a Hugo module instead of a git submodule.

Start with initializing hugo modules, if not done yet:
```
hugo mod init github.com/repo/path
```

Navigate to your hugo project root and add [module] section to your `config.toml`:

```toml
[module]
[[module.imports]]
path = 'github.com/mdfriday/theme-manual-of-me'
```

Then, to load/update the theme module and run hugo:

```sh
hugo mod get -u
hugo server --minify
```

## Configuration

### Site Configuration

There are a few configuration options that you can add to your `config.toml` file.  
You can also see the `yaml` example [here](https://github.com/alex-shpak/hugo-book/blob/master/exampleSite/config.yaml).

```toml
[params]
Author = '老袁讲敏捷'

# Put your customized cover in the `static` folder
CoverImage = 'cover.jpeg'
```

## Shortcodes

### Image

Example:
```javascript
  {{< image src="service.jpeg" alt="Alt text" width="800" >}}
```

### Bilibili

Example:
```javascript
  {{< bilibili image="laoyuan.png" title="老袁讲敏捷的哔哩哔哩空间" text="个人职场教练 | 团队教练 | 研发团队效能顾问 | 作家 微：yyhasawechatID 【老袁讲敏捷】官方号" link="https://space.bilibili.com/36395967/" >}}
```

## Versioning

This theme follows a simple incremental versioning. e.g. `v1`, `v2` and so on. There might be breaking changes between versions.

If you want lower maintenance, use one of the released versions. If you want to live on the bleeding edge of changes, you can use the `main` branch and update your website when needed.

## Contributing

### [Extra credits to contributors](https://github.com/mdfriday/theme-manual-of-me/graphs/contributors)

Contributions are welcome and I will review and consider pull requests.  
Primary goals are:

- Keep it simple.
- Keep minimal (or zero) default configuration.
- Avoid interference with user-defined layouts.
- Avoid using JS if it can be solved by CSS.

Feel free to open issues if you find missing configuration or customisation options.
