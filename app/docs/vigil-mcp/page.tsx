import type { Metadata } from "next";
import Link from "next/link";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/docs/vigil-mcp", {
  title: "Connect Vigil to Claude, ChatGPT, Codex, Cursor, or any AI agent | Appnary Docs",
  description:
    "Connect the Vigil MCP server to Claude, ChatGPT, Codex, Cursor, or any MCP client. Sign-in with your Shopify store, read-only by default, rate limits, and a Bearer token fallback.",
});

const MCP_URL = "https://cp.appnary.com/api/vigil/mcp";

const tools = [
  { name: "scan_store", what: "Scan the theme, app embeds, live storefront scripts, and change history.", access: "Read", limit: "10 per minute" },
  { name: "warm_live_page", what: "Upload storefront HTML you fetched yourself, when Shopify rate-limits the live scan.", access: "Read", limit: "5 per minute" },
  { name: "list_blocked_hosts", what: "List the hosts Vigil currently blocks on the storefront.", access: "Read", limit: "No limit" },
  { name: "block_host", what: "Turn off a script host on the storefront (same as Turn off in Vigil).", access: "Turn off", limit: "20 per minute" },
  { name: "unblock_host", what: "Turn a blocked host back on (same as Undo in Vigil).", access: "Turn off", limit: "20 per minute" },
];

export default function VigilMcpDocsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24 sm:pt-28">
      <p className="text-sm font-medium text-aqua">Docs</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Connect Vigil to your AI agent
      </h1>
      <p className="mt-6 text-lg text-foreground/80">
        Vigil has a Model Context Protocol (MCP) server. An AI client can scan your Shopify store, read the
        live storefront, and, if you allow it, turn a risky script off. You sign in with your store. You do
        not copy a token.
      </p>
      <p className="mt-4 text-foreground/80">
        MCP server URL: <code className="rounded bg-foreground/5 px-1.5 py-0.5 text-sm">{MCP_URL}</code>
      </p>
      <p className="mt-4 text-foreground/80">
        Vigil is in beta. You need Vigil installed on the store and staff access to that store. Join the
        waitlist on the <Link className="underline" href="/vigil">Vigil page</Link> to get access.
      </p>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Connect with sign-in (recommended)</h2>
      <p className="mt-4 text-foreground/80">
        Use this for Claude, ChatGPT, Codex, Cursor, and any other AI agent that supports MCP sign-in. The model does not matter: Claude Opus, Sonnet, GPT, or any other works the same. The client registers itself, then opens a
        Shopify sign-in. Menu names change, so if they differ, look for custom connectors or an MCP server
        and paste the URL.
      </p>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground/80">
        <li>
          <strong>Claude (claude.ai and Claude Desktop):</strong> Settings, then Connectors, then add a custom connector. Paste the MCP server URL.
        </li>
        <li>
          <strong>Claude Code:</strong> run <code className="text-sm">claude mcp add --transport http vigil {MCP_URL}</code>, then type <code className="text-sm">/mcp</code> and pick vigil to sign in.
        </li>
        <li>
          <strong>Codex:</strong> run <code className="text-sm">codex mcp add vigil --url {MCP_URL}</code>. Codex opens the sign-in. Later, <code className="text-sm">codex mcp login vigil</code> signs in again.
        </li>
        <li>
          <strong>ChatGPT:</strong> Settings, then Connectors. Add a custom MCP connector with the URL. Developer
          mode may be needed on your plan.
        </li>
        <li>
          <strong>Cursor:</strong> add this to <code className="text-sm">~/.cursor/mcp.json</code>. Cursor opens the sign-in the first time it connects. In the Cursor CLI, run <code className="text-sm">cursor-agent mcp login vigil</code>.
        </li>
        <li>
          <strong>Gemini CLI:</strong> run <code className="text-sm">gemini mcp add -t http vigil {MCP_URL}</code>, then <code className="text-sm">/mcp auth vigil</code> inside Gemini.
        </li>
        <li>
          <strong>OpenCode:</strong> sign-in does not work in OpenCode 2.0 yet. Use an agent token (below): <code className="text-sm">opencode mcp add vigil --url {MCP_URL} --header &quot;Authorization=Bearer YOUR_TOKEN&quot;</code>.
        </li>
        <li>
          <strong>Any other AI agent</strong> (VS Code, Windsurf, Gemini CLI, and others): add a remote or HTTP MCP server with the URL. If the client takes JSON, use the one below.
        </li>
      </ul>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-foreground/5 p-4 text-sm">
        <code>{`{
  "mcpServers": {
    "vigil": {
      "url": "${MCP_URL}"
    }
  }
}`}</code>
      </pre>
      <p className="mt-4 text-foreground/80">
        Your browser opens Shopify, which uses the store you are signed in to. Then Vigil shows the store, the
        client, and the turn-off choice. Turn-off is off unless you tick it. Wrong store? Click Choose another store
        and enter its <code className="text-sm">myshopify.com</code> domain.
      </p>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Bearer token fallback</h2>
      <p className="mt-4 text-foreground/80">
        If a client cannot sign in, create an agent token in Vigil, on the Agent page. The token is shown once.
        Creating a new token stops the old one. Send it as a header:
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-foreground/5 p-4 text-sm">
        <code>{`{
  "mcpServers": {
    "vigil": {
      "url": "${MCP_URL}",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}`}</code>
      </pre>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Tools</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-foreground/15">
              <th className="py-2 pr-4 font-semibold">Tool</th>
              <th className="py-2 pr-4 font-semibold">What it does</th>
              <th className="py-2 pr-4 font-semibold">Access</th>
              <th className="py-2 font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.name} className="border-b border-foreground/10 align-top">
                <td className="py-2 pr-4 font-mono text-xs">{tool.name}</td>
                <td className="py-2 pr-4 text-foreground/80">{tool.what}</td>
                <td className="py-2 pr-4 text-foreground/80">{tool.access}</td>
                <td className="py-2 text-foreground/80">{tool.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Read-only by default</h2>
      <p className="mt-4 text-foreground/80">
        A new connection, or a new token, can read and scan but cannot change the storefront. To let it turn a
        script off, tick Allow turn off during sign-in, or on the Agent page when you create a token. If an
        agent tries <code className="text-sm">block_host</code> or <code className="text-sm">unblock_host</code>
        without that permission, it gets a message that says where to enable it.
      </p>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Rate limits</h2>
      <p className="mt-4 text-foreground/80">
        Limits apply per connection or token, per minute, as listed above. Past the limit, the server returns
        HTTP 429 with a <code className="text-sm">Retry-After</code> header and a message with the seconds to
        wait. A well-behaved client waits and retries once.
      </p>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Revoke a connection</h2>
      <p className="mt-4 text-foreground/80">
        In Vigil, open Agent, then Connected apps, then Revoke. Access stops at once. Uninstalling Vigil deletes
        every token and connection for the store.
      </p>

      <h2 className="mt-14 text-2xl font-bold text-foreground">Security notes</h2>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground/80">
        <li>Tokens are stored hashed. Vigil never shows a token again after it is created.</li>
        <li>Each token and connection works for one store only.</li>
        <li>Vigil asks Shopify for theme read access only. It reads no customer or order records. It keeps only the name or email of the staff member who connects a client.</li>
      </ul>
    </article>
  );
}
