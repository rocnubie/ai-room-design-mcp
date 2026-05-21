import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "ai-room-design-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for AI Room Design (https://airoom-design.com). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://ai-room-design/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Room Design — Styles\n\nAI Room Design helps users redesign rooms and visualize new interior layouts with AI-generated previews.\n\n## Site basics\n- Site ID: ai-room-design\n- Website: https://airoom-design.com\n- Default locale: en\n- Locales: en\n\n## Public feature scope\n- image gen\n\n## Official website\nhttps://airoom-design.com",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://ai-room-design/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Room Design Pricing\n\nCanonical pricing page: https://airoom-design.com/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://ai-room-design/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nAI Room Design helps users redesign rooms and visualize new interior layouts with AI-generated previews.\n\n## Where can I get help?\nsupport@airoom-design.com\n\n## Which site is this?\nai-room-design (AI Room Design)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://ai-room-design/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://airoom-design.com\n- Pricing: https://airoom-design.com/pricing\n- Support: support@airoom-design.com",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (AI Room Design)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Room Design — Styles\n\nAI Room Design helps users redesign rooms and visualize new interior layouts with AI-generated previews.\n\nCanonical website: https://airoom-design.com" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for AI Room Design.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Room Design Pricing\n\nOfficial pricing: https://airoom-design.com/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for AI Room Design (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://airoom-design.com\n- Pricing: https://airoom-design.com/pricing\n- Support: support@airoom-design.com" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_ai_room_design",
    {
      description: "Summarize what the site is, who it's for, and how it works. — AI Room Design",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what AI Room Design (https://airoom-design.com) is, who it's for, and how it works. Reference the canonical resources at site://ai-room-design/styles and site://ai-room-design/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_ai_room_design",
    {
      description: "Recommend a starting image-generation style for a stated goal. — AI Room Design",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with AI Room Design (https://airoom-design.com). Ask me what the subject is, recommend one style preset from site://ai-room-design/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
