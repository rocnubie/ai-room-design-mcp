# AI Room Design MCP Server

> AI Room Design - Interior Visualization with AI

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-ai-room-design-mcp)](https://lobehub.com/mcp/rocnubie-ai-room-design-mcp)
[![Zero Config](https://img.shields.io/badge/setup-zero--config-7c3aed)](#installation)
[![Read Only](https://img.shields.io/badge/server-read--only-2ea44f)](#tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![smithery](https://smithery.ai/badge/ai-room-design)](https://smithery.ai)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)

<p align="center"><a href="https://airoom-design.com"><img src="./assets/logo.png" alt="AI Room Design" width="96" /></a></p>

A Model Context Protocol server that exposes the canonical AI Room Design knowledge surface — image generation workflows and styles, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://airoom-design.com

## 🎨 About AI Room Design

AI Room Design (airoom-design.com) is a browser-based interior design tool that uses artificial intelligence to reimagine living spaces from a single photo. Users upload an image of any room, select a target style and customization options, and receive a fully redesigned visualization in seconds. The platform supports over eight room types — living rooms, bedrooms, kitchens, bathrooms, dining rooms, offices, kids' rooms, and balconies — and applies more than twenty distinct design styles powered by models including Google Gemini 2.5. A free tier with five monthly projects makes it accessible without a paid commitment, while premium plans support higher volume and batch workflows.

## Key Features

- **Photo-based redesign**: Upload a room photo and receive an AI-generated rendering in a chosen style, covering structural elements, furniture arrangement, flooring, and lighting.
- **20+ design styles**: Presets span Modern Minimalist, Scandinavian, Japanese Zen, Industrial, Mid-Century Modern, Bohemian, Coastal, Luxury Modern, Art Deco, and Rustic Farmhouse, among others.
- **Granular customization**: Controls for floor type (wood, marble, concrete), accent lighting, and renovation depth (full renovation down to a quick refresh) let users shape how far the AI diverges from the original room.
- **Text-to-room generation**: Describe a space in plain text to generate a room concept from scratch, without requiring a source photo.
- **Smart Space Planning and Intelligent Enhancement**: Tools for layout suggestions and image quality improvement sit alongside the core style-transfer workflow.
- **Batch processing**: Multiple rooms or property units can be processed together, reducing turnaround time for larger projects.
- **Download and share**: Finished renderings export directly for use in presentations, listings, or social media.

## Use Cases

- A homeowner planning a renovation uses the tool to preview a Scandinavian living room layout before committing to new furniture purchases.
- A real estate agent virtually stages an empty apartment with a Luxury Modern interior to improve listing photos without physical staging costs.
- An interior designer generates a dozen concept variants for a client pitch in the time it would take to sketch one by hand.
- A short-term rental host refreshes the look of a dated bedroom by testing different color schemes and floor types before contacting a contractor.
- A property developer processes renderings for an entire multi-unit building in batch, producing consistent marketing visuals across all units.

## Who Is It For

AI Room Design targets anyone who needs to visualize interior changes quickly and without professional design software. Homeowners exploring renovation ideas form the broadest segment — the free tier and simple four-step workflow lower the barrier for people with no design background. Real estate agents and property developers benefit from virtual staging that speeds up listing preparation. Interior designers and architects can use it as a rapid ideation layer, generating style variants to show clients before moving into detailed planning. Home staging consultants and renovation advisors will find the batch processing and export features practical for client-facing deliverables. The platform does not require design expertise; anyone comfortable uploading a photo can produce a plausible redesign.

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (AI Room Design)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for AI Room Design.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for AI Room Design (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://ai-room-design/styles` — Supported image-generation styles and presets.
- `site://ai-room-design/pricing` — Canonical pricing entry point.
- `site://ai-room-design/faq` — Short FAQ generated from public site metadata.
- `site://ai-room-design/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_ai_room_design`
Summarize what the site is, who it's for, and how it works. — AI Room Design

### `try_image_style_ai_room_design`
Recommend a starting image-generation style for a stated goal. — AI Room Design

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install ai-room-design-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/ai-room-design-mcp.git
cd ai-room-design-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "ai-room-design-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/ai-room-design-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://airoom-design.com
- Pricing: https://airoom-design.com/pricing
- Support: support@airoom-design.com

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
