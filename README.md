# henryguidry.com — Jekyll site

## Deploy on GitHub Pages
1. Create a repo named `YOUR-USERNAME.github.io` (or any name).
2. Upload/push all these files to the `main` branch.
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → `main` / root.
4. Live in ~1 minute at `https://YOUR-USERNAME.github.io`.

## Before you push
- `_config.yml`: set `url`, `author.email`, `author.github`, `author.linkedin`, and the `currently` list.
- Search the repo for `TODO` and fill those in.

## Write a post
Add `_posts/YYYY-MM-DD-some-title.md`:
```
---
layout: post
title: My post
categories: projects        # or blog → controls the URL
tags: [homelab, splunk]
description: One-line summary shown on the home page.
mermaid: true               # only if the post has ```mermaid blocks
---
```

## Custom domain
Buy a domain, add a `CNAME` file containing it (e.g. `henryguidry.com`), set the domain in Settings → Pages, and point DNS at GitHub Pages (4 A records + `www` CNAME per GitHub docs). Update `url` in `_config.yml`.

## Preview locally (optional)
Needs Ruby: `bundle install && bundle exec jekyll serve` → http://localhost:4000
