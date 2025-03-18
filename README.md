# TinyURL Clone

This is a TinyURL clone built with modern web technologies. 
- Watch the demo and setup guide on my YouTube channel: [@bartingyo](https://youtube.com/@bartingyo?si=NzZVgkMxTTItqw7y).
- Delployed with Vercel: [tinyurl-clone](https://tinyurl-clone-two.vercel.app/). 

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (**Latest LTS recommended**)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) 
- [PostgreSQL](https://www.postgresql.org/) (**Ensure it's running and accessible**)
- [Clerk](https://clerk.dev/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/byeongjae-kang/tinyurl-clone.git
   cd tinyurl-clone
   ```

2. Copy the example environment file and configure it:

   ```sh
   cp .env.example .env
   ```

   - Update `.env` with your PostgreSQL database URL and other necessary configurations.

3. Install dependencies:

   ```sh
   npm install
   ```

4. Run Prisma migrations to set up the database:

   ```sh
   npx prisma migrate dev
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```

## Usage

Once the server is running, you can use the application to shorten URLs. Open your browser and navigate to:

```
http://localhost:3000
```
