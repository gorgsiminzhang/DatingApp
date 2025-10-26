## ⚡️ API & Gateway Architecture

Our backend architecture uses **Supabase + Cloudflare** instead of the traditional **AWS API Gateway + Lambda + RDS** stack.  
This combination offers a simpler, faster, and more cost-efficient path to building and testing an MVP.

---

### 🧩 Supabase — Application-Level API Gateway  

Supabase provides an integrated HTTP API layer built on **PostgREST** and **Edge Functions**, automatically exposing database tables as secure REST endpoints.  
Built-in **authentication (OAuth/JWT)** and **Row-Level Security (RLS)** ensure that every request is authorized directly at the database layer.  
Custom business logic runs inside **Edge Functions** (Deno runtime) without managing servers, allowing extremely fast iteration.

---

### 🌍 Cloudflare — Edge Gateway & Security Layer  

Cloudflare fronts the entire application to deliver global performance and protection.  
It handles **DNS**, **SSL termination**, **CDN caching**, and **WAF security** at the network edge — reducing latency for users and shielding the backend from direct exposure or DDoS attacks.  
This setup makes the Supabase backend accessible worldwide with minimal configuration.

---

### ⚙️ Why Supabase + Cloudflare Fits a Startup MVP  

Compared with AWS API Gateway, this stack prioritizes **speed of development, simplicity, and cost-efficiency** — making it ideal for startups and MVP-stage products that need to validate ideas quickly.

| Category | **Supabase + Cloudflare** | **AWS API Gateway + Lambda + RDS** |
|-----------|---------------------------|------------------------------------|
| **Setup time** | Minutes — instant database, auth, and REST API | Hours to days — define routes, IAM, Lambda, and RDS connections |
| **Auth & user management** | Built-in OAuth/JWT via Supabase Auth | Requires Cognito or custom authorizer |
| **API definition** | Auto-generated PostgREST endpoints | Manual route configuration and mapping templates |
| **Custom logic** | Edge Functions (Deno runtime) | Lambda functions (Node.js / Python) |
| **Database integration** | Native Postgres with RLS | External RDS connection and management |
| **Edge delivery** | Global via Cloudflare CDN | Regional via CloudFront |
| **Security** | Cloudflare WAF + Supabase RLS | AWS WAF + IAM policies |
| **Monitoring** | Supabase dashboard + Cloudflare Analytics | CloudWatch + X-Ray |
| **Cost model** | Free / flat tier — ideal for MVPs | Pay-per-request, higher initial cost |
| **Best for** | Startups, prototypes, and rapid iteration | Enterprise microservices with fine-grained control |

---

### 🚀 Summary  

> **Supabase + Cloudflare** together form an application-level API gateway that replaces traditional infrastructure complexity with developer speed and global reach.  
> This architecture provides secure authentication, built-in data APIs, and edge-level performance — allowing a small startup team to focus on core product features rather than infrastructure management.  
> It’s the ideal balance for a **startup MVP** that needs to move fast, test real users, and scale seamlessly once validated.



# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Node.js Version

This project is built using **Node.js v20.19.5 (Iron LTS)**.

### Recommended Setup (Windows + Git Bash)

We recommend using **NVS (Node Version Switcher)** to manage Node versions:

```bash
# Install NVS if not already
git clone https://github.com/jasongin/nvs "$HOME/.nvs"
. "$HOME/.nvs/nvs.sh"
echo '. "$HOME/.nvs/nvs.sh"' >> ~/.bashrc

# automatically load NVS without reopen bash
source ~/.bashrc

# Add and use the correct Node version
nvs add 20.19.5
nvs use 20.19.5


# Verify installation:
node -v
npm -v
npx -v

# Start the app
npx expo start

# (Optional) Install dependencies
npm install
```


## cloudflared Version for temparory access
```bash
# check version
cloudflared --version

# create instant tunnel
cloudflared tunnel --url http://localhost:XXXX
## (check localhost portal from: npx expo start)

# Remote access http link after 
# "Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):"
```