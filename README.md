# 🚚 Prevozko (Превозко)

**Prevozko** is a modern logistics marketplace designed to connect shippers with transport providers across Bulgaria. From moving a single pallet to managing full truckloads, Prevozko provides the tools to find, track, and manage transport services with ease.

---

## 🚀 Tech Stack

The project is built using the latest industry-standard technologies for maximum speed, security, and scalability:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Database & Auth:** [Supabase](https://supabase.com/)
- **ORM:** [Prisma v6](https://www.prisma.io/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (BG/EN Support)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

### Clone the Repository

```bash
git clone https://github.com/yourusername/prevozko-app.git
cd prevozko-app
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Configuration

Create a `.env` file in the root directory of the project and add the following configuration variables:

````env
# Supabase Configuration
DATABASE_URL="your_supabase_database_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

> **Note:** Replace the placeholder values with your actual Supabase credentials. You can find these in your Supabase project settings.

### Database Setup

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
# or
npx prisma db push
````

Generate Prisma Client:

```bash
npx prisma generate
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
