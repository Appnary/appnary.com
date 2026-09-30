export type Product = {
  id: string
  name: string
  url: string
  category: "Cloud & AI" | "Developer tools" | "Commerce" | "More from us"
  tagline: string
  description: string
  tags: string[]
  color: string
  background: string
  status?: string
}

// Product descriptions reflect the public sites.
export const products: Product[] = [
  { id: "cloudploy", name: "CloudPloy", url: "https://cloudploy.com", category: "Cloud & AI", tagline: "Your next deploy starts with a prompt.", description: "Deploy to your own cloud from Claude Code, Cursor, or any MCP client. Connect your AI tools and put deployment into your existing workflow.", tags: ["Cloud deployment", "MCP", "DevOps"], color: "#2563eb", background: "#eaf0fc", status: "Waitlist open" },
  { id: "skaleagents", name: "SkaleAgents", url: "https://skaleagents.com", category: "Cloud & AI", tagline: "A second pair of eyes for your infrastructure.", description: "An AI DevOps control plane for code and infrastructure reviews. Find specialist agents, reuse prompts, and bring findings back to your editor through MCP.", tags: ["AI agents", "Infrastructure", "MCP"], color: "#7753bd", background: "#f0ebf8" },
  { id: "crontinel", name: "Crontinel", url: "https://crontinel.com", category: "Developer tools", tagline: "Hear about failures before your users do.", description: "Monitor scheduled jobs, queues, workers, and AI agent runs. Open-source SDKs and a hosted dashboard help catch the failures an uptime check can miss.", tags: ["Monitoring", "Open source", "Developer tools"], color: "#cf6035", background: "#f7ebe5" },
  { id: "toolblip", name: "Toolblip", url: "https://toolblip.com", category: "Developer tools", tagline: "Small tools. Less friction.", description: "Free, browser-based tools for the jobs you do every day. Format JSON, convert files, work with text, and more. No signup required.", tags: ["Browser tools", "Free", "Privacy-first"], color: "#29846b", background: "#e8f1eb" },
  { id: "amazingplugins", name: "AmazingPlugins", url: "https://amazingplugins.com", category: "Commerce", tagline: "Quiet plugins. Better stores.", description: "Focused, free plugins for WooCommerce store owners. Starting with accessibility, each plugin tackles a specific problem in your store.", tags: ["WooCommerce", "WordPress", "Free plugins"], color: "#bc673b", background: "#f7ece0" },
  { id: "harun", name: "harun.dev", url: "https://harun.dev", category: "More from us", tagline: "Meet the engineer behind the work.", description: "Harun R. Rayhan’s home on the web. Software engineering, cloud architecture, and DevOps consulting, with notes from the work along the way.", tags: ["Engineering", "Consulting", "Writing"], color: "#656253", background: "#eeece5" },
]
