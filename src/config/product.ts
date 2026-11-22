import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "tenure",
  name: "Tenure",
  category: "Identity & Access",
  tagline: "Joiners, movers and leavers, provisioned on day one.",
  description: "A self-hosted identity lifecycle system for effective-dated worker events, birthright rules, provisioning, termination orchestration, contractors, and reconciliation.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/tenure",
  nav: [{ label: "Workers", badge: "12k" }, { label: "Lifecycle events" }, { label: "Rules" }, { label: "Targets" }, { label: "Reconciliation" }],
  demoUsers: [
    { id: "demo-admin", name: "Maya Chen", email: "maya@northstar.example", role: "admin", label: "Lifecycle administrator" },
    { id: "demo-manager", name: "Jon Bell", email: "jon@northstar.example", role: "rule_owner", label: "Birthright rule owner" },
    { id: "demo-host", name: "Priya Rao", email: "priya@northstar.example", role: "operator", label: "Provisioning operator" },
  ],
  ai: {
    name: "Lifecycle copilot",
    description: "Ask about worker changes, rule impact, target drift, failed provisioning, and termination latency.",
    systemPrompt: "You are Tenure's lifecycle copilot. Answer only from supplied worker, rule, and provisioning context. Cite supporting records and remain advisory. Never publish a rule, provision access, or alter a worker.",
    suggestedQuestions: ["Which terminations missed the SLO?", "Preview the impact of this rule.", "Which targets are drifting?"],
  },
};
