# Graph Report - .  (2026-06-11)

## Corpus Check
- Corpus is ~6,357 words - fits in a single context window. You may not need a graph.

## Summary
- 74 nodes · 65 edges · 14 communities (9 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Compiler Options|TypeScript Compiler Options]]
- [[_COMMUNITY_PWA Manifest|PWA Manifest]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_App Root Layout|App Root Layout]]
- [[_COMMUNITY_Package Scripts|Package Scripts]]
- [[_COMMUNITY_Docs & CI Workflows|Docs & CI Workflows]]
- [[_COMMUNITY_App Pages|App Pages]]
- [[_COMMUNITY_TypeScript Root Config|TypeScript Root Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 5 edges
3. `GitHub Actions CI (lint / typecheck / build)` - 4 edges
4. `Vercel hosting` - 3 edges
5. `paths` - 2 edges
6. `Next.js` - 2 edges
7. `Post-deploy HTTP health check (sushilove.vercel.app)` - 2 edges
8. `eslintConfig` - 1 edges
9. `nextConfig` - 1 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- `GitHub Actions CI (lint / typecheck / build)` --references--> `Next.js`  [INFERRED]
  .github/workflows/ci.yml → README.md
- `GitHub Actions CI (lint / typecheck / build)` --references--> `Vercel hosting`  [EXTRACTED]
  .github/workflows/ci.yml → README.md
- `Post-deploy HTTP health check (sushilove.vercel.app)` --references--> `Vercel hosting`  [EXTRACTED]
  .github/workflows/ci.yml → README.md

## Import Cycles
- None detected.

## Communities (14 total, 5 thin omitted)

### Community 0 - "TypeScript Compiler Options"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 1 - "PWA Manifest"
Cohesion: 0.18
Nodes (10): background_color, description, display, icons, lang, name, orientation, short_name (+2 more)

### Community 2 - "Dev Dependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.25
Nodes (7): dependencies, next, react, react-dom, name, private, version

### Community 4 - "App Root Layout"
Cohesion: 0.40
Nodes (3): geist, metadata, viewport

### Community 5 - "Package Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 6 - "Docs & CI Workflows"
Cohesion: 0.60
Nodes (5): Next.js, Vercel hosting, GitHub Actions CI (lint / typecheck / build), Post-deploy HTTP health check (sushilove.vercel.app), Telegram CI failure notification

## Knowledge Gaps
- **53 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TypeScript Root Config`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Runtime Dependencies`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `scripts` connect `Package Scripts` to `Runtime Dependencies`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._