# Yuchia Chang - Personal Portfolio (`yuchia.dev`)

A production-ready, modern developer portfolio built with a strict "Terminal/IDE" aesthetic. The site seamlessly blends high-performance static rendering with immersive 3D elements, all deployed securely on AWS S3 behind a Cloudflare proxy.

**Live Site:** [https://yuchia.dev](https://yuchia.dev)

---

## ⚡ Features

- **Terminal IDE Aesthetic:** Dark mode dominant (`#0d1117`) with a striking retro-orange accent color, utilizing `Geist Mono` typography for an authentic software engineer feel.
- **Interactive 3D Layer:** Leverages `Three.js` and `React Three Fiber` for low-latency 3D background components.
- **Dynamic Project Matrix:** Clickable, hover-responsive project cards that intelligently auto-route visitors directly to live demos or GitHub repositories.
- **Micro-Animations:** Fluid, staggered reveal animations across all pages using `framer-motion`.
- **Serverless & Edge Optimized:** 100% physically static export configured seamlessly via Next.js App Router for zero-compute edge hosting.

---

## 🛠 Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/) & React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS 
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons:** `lucide-react`, `react-icons`
- **Infrastructure:** AWS (S3), Cloudflare (DNS, SSL, Proxy), Terraform

---

## 🚀 Local Development

1. **Clone and Install**
   ```bash
   git clone https://github.com/yuchia329/me.git
   cd me
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗 Infrastructure (Terraform)

This physical hosting architecture is fully defined using Infrastructure as Code (IaC) inside the `/infra` folder. Using the Cloudflare and AWS providers, Terraform builds an S3 bucket configured for static web hosting and automatically registers the exact S3 endpoint inside your Cloudflare DNS console.

### Provisioning
1. Export your secure credentials to your terminal:
   ```bash
   export TF_VAR_cloudflare_zone_id="your-zone-id"
   export TF_VAR_cloudflare_api_token="your-api-token"
   ```
2. Apply the infrastructure:
   ```bash
   cd infra/
   terraform init
   terraform apply
   ```

---

## 📦 Deployment Workflow

Because the application is configured with `trailingSlash: true` and `output: 'export'`, continuous deployments only require syncing the optimized HTML binaries to the S3 bucket.

To instantly deploy your local build to production, simply execute the bundled shell script:
```bash
./deploy.sh
```
**Under the hood, this script:**
1. Triggers `npm run build` to compile the statically optimized `/out` directory.
2. Uses the `aws cli` to aggressively sync (`--delete`) the `/out` directory directly to the S3 bucket. Cloudflare automatically proxies the updated payload globally.
