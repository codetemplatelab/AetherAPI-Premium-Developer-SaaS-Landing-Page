import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Code2, 
  Cpu,
  Github,
  Slack,
  Database,
  Cloud,
  Layers,
  Terminal
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'API', href: '#api' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES = [
  {
    title: 'Instant API Deployment',
    description: 'Push your code and we handle the rest. Global deployment in under 60 seconds.',
    icon: Zap,
  },
  {
    title: 'Auto-generated Docs',
    description: 'Interactive OpenAPI documentation generated automatically from your endpoints.',
    icon: Code2,
  },
  {
    title: 'Secure Auth Layer',
    description: 'Built-in OAuth2, JWT, and API key management with granular scope control.',
    icon: Shield,
  },
  {
    title: 'Global Edge Network',
    description: 'Low-latency responses served from 250+ edge locations worldwide.',
    icon: Globe,
  },
  {
    title: 'Real-time Analytics',
    description: 'Deep insights into your API performance, error rates, and user behavior.',
    icon: BarChart3,
  },
  {
    title: 'Developer SDKs',
    description: 'Native SDKs for JavaScript, Python, Go, and Rust generated on the fly.',
    icon: Cpu,
  },
];

export const INTEGRATIONS = [
  { name: 'GitHub', icon: Github, color: '#181717' },
  { name: 'Slack', icon: Slack, color: '#4A154B' },
  { name: 'MongoDB', icon: Database, color: '#47A248' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Stripe', icon: Layers, color: '#008CDD' },
  { name: 'Terminal', icon: Terminal, color: '#4D4D4D' },
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 'INR 999',
    description: 'Perfect for side projects and early prototypes.',
    features: [
      '10,000 requests / month',
      '3 API Endpoints',
      'Community Support',
      'Basic Analytics',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'INR 2,499',
    description: 'For scaling startups needing more power.',
    features: [
      '500,000 requests / month',
      'Unlimited Endpoints',
      'Priority Support',
      'Advanced Analytics',
      'Custom Domains',
    ],
    cta: 'Start Scaling',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'INR 5,999',
    description: 'Mission-critical infrastructure for large teams.',
    features: [
      'Unlimited requests',
      'Dedicated Infrastructure',
      '24/7 Phone Support',
      'SLA Guarantee',
      'Custom Integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Backend Engineer @ TechFlow',
    content: 'AetherAPI transformed our deployment workflow. We went from weekly releases to multiple times a day.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Marcus Thorne',
    role: 'CTO @ NexaScale',
    content: 'The edge network performance is unmatched. Our latency dropped by 40% globally within hours of switching.',
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    name: 'Elena Rodriguez',
    role: 'DevOps Lead @ CloudNative',
    content: 'The auto-generated docs are a lifesaver. Our integration time for new partners has been cut in half.',
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
];

export const FAQS = [
  {
    question: 'Is there a free plan available?',
    answer: 'Yes! We offer a generous free tier for developers to explore the platform and build small-scale projects.',
  },
  {
    question: 'Does AetherAPI support GraphQL?',
    answer: 'Absolutely. We provide first-class support for both REST and GraphQL APIs with built-in schema validation.',
  },
  {
    question: 'Can I deploy my APIs globally?',
    answer: 'Yes, every API deployed on AetherAPI is automatically distributed across our global edge network.',
  },
  {
    question: 'What security measures are in place?',
    answer: 'We provide enterprise-grade security including DDoS protection, rate limiting, and encrypted data at rest.',
  },
];

export const API_TYPES = [
  {
    id: 'rest',
    name: 'REST API',
    description: 'Standard HTTP-based API for traditional web applications. Supports all standard methods.',
    setup: 'Create endpoints using our CLI or dashboard. Define your models and we generate the routes.',
    code: `// REST Endpoint Example
app.get('/v1/users/:id', async (req, res) => {
  const user = await db.users.find(req.params.id);
  res.json(user);
});`,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    description: 'Flexible query language for your API. Get exactly the data you need, nothing more.',
    setup: 'Upload your schema.graphql file. We automatically provision the resolvers and playground.',
    code: `// GraphQL Query Example
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
    }
  }
}`,
  },
  {
    id: 'sockets',
    name: 'Socket.io',
    description: 'Real-time, bidirectional communication for chat, gaming, and live updates.',
    setup: 'Enable WebSocket support in your project settings. Scale to millions of concurrent connections.',
    code: `// Socket.io Example
io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('broadcast', data);
  });
});`,
  },
];

export const SDK_EXAMPLES = [
  {
    lang: 'JavaScript',
    install: 'npm install @aether/sdk',
    usage: `import { Aether } from '@aether/sdk';

const client = new Aether('YOUR_API_KEY');
const data = await client.users.list();`,
  },
  {
    lang: 'Python',
    install: 'pip install aether-sdk',
    usage: `from aether import Aether

client = Aether('YOUR_API_KEY')
data = client.users.list()`,
  },
  {
    lang: 'Go',
    install: 'go get github.com/aether/sdk-go',
    usage: `import "github.com/aether/sdk-go"

client := aether.NewClient("YOUR_API_KEY")
data, _ := client.Users.List()`,
  },
];
