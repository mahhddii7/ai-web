import { Zap, Cpu, Shield, BarChart2, Puzzle, Cloud } from "lucide-react";
import type { Feature } from ".";

export const defaultFeatures: Feature[] = [
  {
    icon: <Zap className="size-5" />,
    title: "Automations",
    desc: "Trigger AI workflows from events and APIs to eliminate repetitive tasks.",
    pill: "+40% faster",
  },
  {
    icon: <Cpu className="size-5" />,
    title: "Smart prompts",
    desc: "Reusable prompt blocks with variables, guards and fallbacks.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Security-first",
    desc: "Role-based access, audit logs and secret vault for providers.",
  },
  {
    icon: <BarChart2 className="size-5" />,
    title: "Analytics",
    desc: "Evaluate outputs, track costs and quality across models.",
    pill: "A/B inside",
  },
  {
    icon: <Puzzle className="size-5" />,
    title: "Integrations",
    desc: "Connect with Slack, Github, Notion and 50+ popular tools.",
  },
  {
    icon: <Cloud className="size-5" />,
    title: "Serverless APIs",
    desc: "Ship endpoints with caching, rate limits and monitoring built-in.",
  },
];
