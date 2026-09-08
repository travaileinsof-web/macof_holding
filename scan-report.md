# Rapport de scan - 2026-08-12 12:29

Racine : .

## Arborescence

```
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend
C:\Users\billy\Desktop\Web-app\clients\macof_holding\gui-test-screenshots
C:\Users\billy\Desktop\Web-app\clients\macof_holding\plaquette_images
C:\Users\billy\Desktop\Web-app\clients\macof_holding\scratch
C:\Users\billy\Desktop\Web-app\clients\macof_holding\skills docs
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-contacts
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-demandes
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-galerie
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-partenaires
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-realisations
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-statistiques
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-admin-temoignages
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-audit-filiales-sync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-audit-galerie-sync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-audit-global-ultrasync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-audit-pages-sync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-audit-settings-sync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-backend-migrate-seed
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-fix-broken-images
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-fix-image-urls
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-fix-realtime-sync
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-accueil
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-apropos
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-contact
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-domaines
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-fishing
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-galerie
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-immobilier
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-mining
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-mining-images
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-print
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-print-images
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-restauration
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-transit
C:\Users\billy\Desktop\Web-app\clients\macof_holding\.agents\skills\macof-frontend-transit-redesign
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\drizzle
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\drizzle\meta
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\db
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\middleware
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\routes
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\services
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\utils
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\src\routes\admin
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage\uploads
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage\uploads\filiales
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage\uploads\galerie
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage\uploads\realisations
C:\Users\billy\Desktop\Web-app\clients\macof_holding\api\storage\uploads\uploads
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\public
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\assets
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\components
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\hooks
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\lib
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\pages
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\components\layout
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\components\ui
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\pages\admin
C:\Users\billy\Desktop\Web-app\clients\macof_holding\frontend\src\pages\filiales
```

## Fichiers de configuration

### .\api\drizzle.config.ts
```ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

```
### .\frontend\postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```
### .\frontend\tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}

```
### .\frontend\vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  }
})

```
### .\api\package.json
```json
{
  "name": "api-macof",
  "version": "1.0.0",
  "type": "module",
  "main": "src/index.ts",
  "scripts": {
    "build": "tsc",
    "dev": "npx tsx src/index.ts",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:seed": "npx tsx src/db/seed.ts"
  },
  "keywords": [],
  "author": "MACOF Holding",
  "license": "ISC",
  "description": "MACOF Holding API - Backend Serverless",
  "dependencies": {
    "@hono/node-server": "^2.0.12",
    "@neondatabase/serverless": "^1.1.0",
    "@vercel/blob": "^2.6.1",
    "bcryptjs": "^3.0.3",
    "dotenv": "^17.4.2",
    "drizzle-orm": "^0.45.2",
    "hono": "^4.12.33",
    "jose": "^6.2.5",
    "nodemailer": "^9.0.3",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^26.1.2",
    "@types/nodemailer": "^8.0.1",
    "drizzle-kit": "^0.31.10",
    "tsx": "^4.23.12",
    "typescript": "^7.0.2"
  }
}

```
### .\frontend\package.json
```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@studio-freight/lenis": "^1.0.42",
    "@tanstack/react-query": "^5.101.4",
    "@tanstack/react-query-devtools": "^5.101.4",
    "axios": "^1.18.1",
    "clsx": "^2.1.1",
    "dompurify": "^3.2.4",
    "framer-motion": "^12.41.0",
    "gsap": "^3.15.0",
    "lucide-react": "^1.21.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.18.0",
    "tailwind-merge": "^3.6.0"
  },
  "devDependencies": {
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.2",
    "autoprefixer": "^10.5.1",
    "oxlint": "^1.69.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^3.4.17",
    "typescript": "~6.0.2",
    "vite": "^8.1.0"
  }
}

```
### .\api\tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "src",
    "types": ["node"]
  },
  "include": ["src/**/*"]
}

```
### .\frontend\tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "ignoreDeprecations": "6.0",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}

```
### .\frontend\tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```
### .\frontend\tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```
### .\api\drizzle.config.ts
```ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

```
### .\api\drizzle\0000_woozy_silhouette.sql
```sql
CREATE TYPE "public"."admin_role" AS ENUM('admin', 'gestionnaire');--> statement-breakpoint
CREATE TYPE "public"."civilite" AS ENUM('monsieur', 'madame');--> statement-breakpoint
CREATE TYPE "public"."statut_demande" AS ENUM('nouveau', 'en_cours', 'traite', 'archive');--> statement-breakpoint
CREATE TYPE "public"."statut_filiale" AS ENUM('actif', 'inactif');--> statement-breakpoint
CREATE TYPE "public"."statut_resolution" AS ENUM('resolu', 'non_resolu', 'en_attente');--> statement-breakpoint
CREATE TYPE "public"."type_demande" AS ENUM('information', 'devis', 'partenariat', 'reclamation', 'autre');--> statement-breakpoint
CREATE TYPE "public"."type_document" AS ENUM('catalogue', 'brochure', 'plaquette', 'fiche_technique', 'autre');--> statement-breakpoint
CREATE TYPE "public"."type_projet" AS ENUM('residentiel', 'commercial', 'infrastructure', 'evenement', 'production', 'logistique', 'autre');--> statement-breakpoint
CREATE TABLE "administrateurs" (
	"id" serial PRIMARY KEY NOT NULL,
	"nom" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(255) NOT NULL,
	"role" "admin_role" DEFAULT 'admin' NOT NULL,
	"filiale_attribuee" integer,
	"archived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "administrateurs_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "catalogues" (
	"id" serial PRIMARY KEY NOT NULL,
	"titre" varchar(255) NOT NULL,
	"filiale" integer,
	"type_document" "type_document" DEFAULT 'catalogue' NOT NULL,
	"file_path" text NOT NULL,
	"taille_ko" integer,
	"format" varchar(20) NOT NULL,
	"telechargements" integer DEFAULT 0 NOT NULL,
	"archived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chatbot_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" varchar(255) NOT NULL,
	"intention_detectee" varchar(255),
	"filiale_orientee" integer,
	"conversation_json" jsonb,
	"statut_resolution" "statut_resolution" DEFAULT 'en_attente' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "demandes_contact" (
	"id" serial PRIMARY KEY NOT NULL,
	"reference" varchar(50) NOT NULL,
	"filiale" integer,
	"type_demande" "type_demande" DEFAULT 'information' NOT NULL,
	"civilite" "civilite",
	"nom_complet" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"telephone" varchar(50),
	"societe" varchar(255),
	"fonction" varchar(255),
	"objet" varchar(500),
	"message" text NOT NULL,
	"details_json" jsonb,
	"piece_jointe_path" text,
	"statut" "statut_demande" DEFAULT 'nouveau' NOT NULL,
	"notes_internes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"archived" boolean DEFAULT false NOT NULL,
	CONSTRAINT "demandes_contact_reference_unique" UNIQUE("reference")
);
--> statement-breakpoint
CREATE TABLE "filiales" (
	"id" serial PRIMARY KEY NOT NULL,
	"nom" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"secteur" varchar(255) NOT NULL,
	"image_url" text,
	"details_json" jsonb,
	"email" varchar(255),
	"telephone" varchar(50),
	"adresse" text,
	"site_web" varchar(500),
	"statut" "statut_filiale" DEFAULT 'actif' NOT NULL,
	"archived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "filiales_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "galerie" (
	"id" serial PRIMARY KEY NOT NULL,
	"titre" varchar(255) NOT NULL,
	"filiale" integer,
	"type_projet" "type_projet",
	"lieu" varchar(255),
	"date_realisation" varchar(50),
	"description_courte" text,
	"image_path" text NOT NULL,
	"archived" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "page_contents" (
	"id" serial PRIMARY KEY NOT NULL,
	"page_slug" varchar(255) NOT NULL,
	"section_key" varchar(255) NOT NULL,
	"content_value" text,
	"content_type" varchar(50) DEFAULT 'text' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(255) NOT NULL,
	"value" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "settings_key_unique" UNIQUE("key")
);
--> statement-breakpoint
ALTER TABLE "administrateurs" ADD CONSTRAINT "administrateurs_filiale_attribuee_filiales_id_fk" FOREIGN KEY ("filiale_attribuee") REFERENCES "public"."filiales"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "catalogues" ADD CONSTRAINT "catalogues_filiale_filiales_id_fk" FOREIGN KEY ("filiale") REFERENCES "public"."filiales"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chatbot_logs" ADD CONSTRAINT "chatbot_logs_filiale_orientee_filiales_id_fk" FOREIGN KEY ("filiale_orientee") REFERENCES "public"."filiales"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "demandes_contact" ADD CONSTRAINT "demandes_contact_filiale_filiales_id_fk" FOREIGN KEY ("filiale") REFERENCES "public"."filiales"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "galerie" ADD CONSTRAINT "galerie_filiale_filiales_id_fk" FOREIGN KEY ("filiale") REFERENCES "public"."filiales"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_catalogues_filiale" ON "catalogues" USING btree ("filiale");--> statement-breakpoint
CREATE INDEX "idx_chatbot_session" ON "chatbot_logs" USING btree ("session_id");--> statement-breakpoint
CREATE INDEX "idx_demandes_filiale" ON "demandes_contact" USING btree ("filiale");--> statement-breakpoint
CREATE INDEX "idx_demandes_statut" ON "demandes_contact" USING btree ("statut");--> statement-breakpoint
CREATE INDEX "idx_demandes_created" ON "demandes_contact" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_galerie_filiale" ON "galerie" USING btree ("filiale");--> statement-breakpoint
CREATE UNIQUE INDEX "idx_page_slug_section" ON "page_contents" USING btree ("page_slug","section_key");
```
### .\frontend\src\App.css
```css
/* Custom MACOF-specific styles */
/* Page transition classes */
.page-enter {
  opacity: 0;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

```
### .\frontend\src\App.tsx
```tsx
import { BrowserRouter, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Domaines from './pages/Domaines';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Catalogues from './pages/Catalogues';

import Immobilier from './pages/filiales/Immobilier';
import Restauration from './pages/filiales/Restauration';
import Transit from './pages/filiales/Transit';
import Mining from './pages/filiales/Mining';
import Fishing from './pages/filiales/Fishing';
import Print from './pages/filiales/Print';

import Login from './pages/admin/Login';
import DashboardLayout from './pages/admin/DashboardLayout';
import Dashboard from './pages/admin/Dashboard';
import Leads from './pages/admin/Leads';
import GalerieManager from './pages/admin/GalerieManager';
import CataloguesManager from './pages/admin/CataloguesManager';
import FilialesManager from './pages/admin/FilialesManager';
import PagesEditor from './pages/admin/PagesEditor';
import Settings from './pages/admin/Settings';
import StatsManager from './pages/admin/StatsManager';
import PartenairesManager from './pages/admin/PartenairesManager';
import TemoignagesManager from './pages/admin/TemoignagesManager';
import RealisationsManager from './pages/admin/RealisationsManager';

import { AnimatedPage } from './components/layout/AnimatedPage';

gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults so animations don't disappear while reading
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

function AdminRoute({ children }: { children: React.ReactNode }) {
  // Read token once on mount to avoid premature redirects when the 401
  // interceptor clears localStorage mid-session (e.g. transient server errors).
  // The interceptor itself performs the logout navigation via window.location.
  const [token] = useState(() => localStorage.getItem('admin_token'));
  const location = useLocation();

  // Allow access to login page without token
  if (!token && (location.pathname === '/admin' || location.pathname === '/admin/login')) {
    return <>{children}</>;
  }

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated and on login/index, redirect to dashboard
  if (location.pathname === '/admin' || location.pathname === '/admin/login') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
}

function AdminLayout() {
  return (
    <AdminRoute>
      <Outlet />
    </AdminRoute>
  );
}

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        ScrollTrigger.refresh();
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/domaines" element={<AnimatedPage><Domaines /></AnimatedPage>} />
        <Route path="/galerie" element={<AnimatedPage><Galerie /></AnimatedPage>} />
        <Route path="/catalogues" element={<AnimatedPage><Catalogues /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />

        {/* Filiales */}
        <Route path="/immobilier" element={<AnimatedPage><Immobilier /></AnimatedPage>} />
        <Route path="/restauration" element={<AnimatedPage><Restauration /></AnimatedPage>} />
        <Route path="/transit" element={<AnimatedPage><Transit /></AnimatedPage>} />
        <Route path="/mining" element={<AnimatedPage><Mining /></AnimatedPage>} />
        <Route path="/fishing" element={<AnimatedPage><Fishing /></AnimatedPage>} />
        <Route path="/print" element={<AnimatedPage><Print /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

import { useRealtimeSync } from './hooks/useRealtimeSync';

function App() {
  useRealtimeSync();

  useEffect(() => {
    // Initialisation du Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes with auth protection */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="demandes" element={<Leads />} />
            <Route path="galerie" element={<GalerieManager />} />
            <Route path="catalogues" element={<CataloguesManager />} />
            <Route path="filiales" element={<FilialesManager />} />
            <Route path="pages" element={<PagesEditor />} />
            <Route path="stats" element={<StatsManager />} />
            <Route path="partenaires" element={<PartenairesManager />} />
            <Route path="temoignages" element={<TemoignagesManager />} />
            <Route path="realisations" element={<RealisationsManager />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Public routes with shared layout */}
        <Route element={<PublicLayout />}>
          <Route path="*" element={<AnimatedRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```
### .\api\src\index.ts
```ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { corsMiddleware } from './middleware/cors';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth.routes';
import contactRoutes from './routes/contact.routes';
import filialesRoutes from './routes/filiales.routes';
import galerieRoutes from './routes/galerie.routes';
import cataloguesRoutes from './routes/catalogues.routes';
import pagesRoutes from './routes/pages.routes';
import settingsRoutes from './routes/settings.routes';
import { eventsRoutes } from './routes/events.routes';
import { adminRoutes } from './routes/admin/auth.routes';

const app = new Hono();

app.use('*', async (c, next) => {
  console.log(`[REQ] ${c.req.method} ${c.req.url}`);
  await next();
});
app.use('*', corsMiddleware());
app.onError(errorHandler);

// Serve locally uploaded files (dev fallback when Vercel Blob is not configured)
app.use('/uploads/*', serveStatic({ root: './storage/' }));

// ─── Health Check ──────────────────────────────────────────────────────────

app.get('/api/health', (c) => {
  return c.json({
    success: true,
    message: 'MACOF Holding API - Serveur operationnel',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ─── Public Routes (v1) ────────────────────────────────────────────────────────

app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/demandes', contactRoutes);
app.route('/api/v1/filiales', filialesRoutes);
app.route('/api/v1/galerie', galerieRoutes);
app.route('/api/v1/catalogues', cataloguesRoutes);
app.route('/api/v1/pages', pagesRoutes);
app.route('/api/v1/settings', settingsRoutes);
app.route('/api/v1/events', eventsRoutes);

// ─── Admin Routes (v1) ──────────────────────────────────────────────────────

app.route('/api/v1/admin', adminRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────────────

app.notFound((c) => {
  return c.json(
    {
      success: false,
      message: `Route non trouvee: ${c.req.method} ${c.req.url}`,
    },
    404,
  );
});

// ─── Export for Vercel ─────────────────────────────────────────────────────

export default app;

// ─── Local Dev Server ──────────────────────────────────────────────────────

const port = Number(process.env.PORT) || 3001;
console.log(`\n🚀 MACOF API Server → http://localhost:${port}\n`);

serve({ fetch: app.fetch, port });

```
### .\frontend\index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MACOF Holding - L'Excellence Sans Compromis</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```
### .\frontend\src\index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Thème Corporate Bold - Color Blocking */
    /* Background par défaut : Deep Navy Blue (partie des 50% de bleu) */
    --background: 215 50% 10%; /* #0c182b */
    --foreground: 0 0% 100%; /* Blanc pour le texte sur fond sombre */

    /* Card background : Corporate Blue */
    --card: 215 60% 20%; /* #142f56 */
    --card-foreground: 0 0% 100%;

    --popover: 215 50% 10%;
    --popover-foreground: 0 0% 100%;

    /* BLEU CORPORATE MACOF (Luxueux) */
    --primary: 215 90% 40%; /* Un bleu vif */
    --primary-foreground: 0 0% 100%;

    /* ROUGE CORPORATE MACOF (30% du design) */
    --secondary: 350 80% 40%; /* Rouge profond #b8142b */
    --secondary-foreground: 0 0% 100%;

    --muted: 215 30% 20%; 
    --muted-foreground: 215 20% 75%; /* Gris-bleu clair */

    --accent: 350 80% 45%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 100%;

    --border: 210 20% 90%; /* #E2E8F0 */
    --input: 210 20% 90%;
    --ring: 215 90% 40%;

    --radius: 0rem; /* Pas d'arrondis pour un style architectural pointu */
  }
}

@layer base {
  body {
    @apply bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white;
    overflow-x: hidden;
  }
}

/* Animations globales et Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary));
}

.page-enter {
  opacity: 0;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Utilitaires pour le texte et les dégradés */
.text-gradient-corporate {
  background: linear-gradient(to right, #1E3A8A, #3B82F6, #1E3A8A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-red {
  background: linear-gradient(to right, #991B1B, #EF4444, #991B1B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

```

## Code métier (routes / api / models / services)

### .\api\src\routes\auth.routes.ts
```ts
import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { administrateurs } from "../db/schema";
import { compare } from "bcryptjs";
import { generateToken, verifyToken } from "../services/jwt";
import { success, error } from "../utils/response";
import { loginSchema } from "../utils/validation";

const authRoutes = new Hono();

// Helper de validation sécurisé
function getValidationError(err: unknown): string {
  if (err && typeof err === "object" && "issues" in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || "Données invalides";
  }
  if (err instanceof Error) return err.message;
  return "Données invalides";
}

// POST /api/auth/login
authRoutes.post("/login", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return error(c, "Corps de la requête invalide ou JSON corrompu", 400);
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { email, password } = parsed.data;
  const normalizedEmail = email.toLowerCase().trim();

  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.email, normalizedEmail))
    .limit(1);

  if (!admin) {
    return error(c, "Email ou mot de passe incorrect", 401);
  }

  if (admin.archived) {
    return error(c, "Compte désactivé. Contactez l'administrateur.", 403);
  }

  const isValid = await compare(password, admin.password_hash);
  if (!isValid) {
    return error(c, "Email ou mot de passe incorrect", 401);
  }

  const token = await generateToken({
    sub: admin.id,
    email: admin.email,
    role: admin.role,
    nom: admin.nom,
    filialeAttribuee: admin.filiale_attribuee,
  });

  return success(
    c,
    {
      token,
      user: {
        id: admin.id,
        nom: admin.nom,
        email: admin.email,
        role: admin.role,
        filiale_attribuee: admin.filiale_attribuee,
      },
    },
    "Connexion réussie",
  );
});

// GET /api/auth/me
authRoutes.get("/me", async (c) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return error(c, "Token manquant", 401);
  }

  const token = authHeader.substring(7);

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Token invalide ou expiré";
    return error(c, message, 401);
  }

  // Sélection explicite des champs (exclut le password_hash)
  const [admin] = await db
    .select({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
    })
    .from(administrateurs)
    .where(eq(administrateurs.id, payload.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Utilisateur non trouvé", 404);
  }

  // Vérification de sécurité : bloquer immédiatement les comptes archivés
  if (admin.archived) {
    return error(c, "Compte désactivé. Contactez l'administrateur.", 403);
  }

  const { archived, ...userData } = admin;

  return success(c, userData);
});

export default authRoutes;

```
### .\api\src\routes\catalogues.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, or } from "drizzle-orm";
import { db } from "../db/client";
import { catalogues, filiales } from "../db/schema";
import { success, error } from "../utils/response";

const cataloguesRoutes = new Hono();

// Helper pour résoudre une filiale (par ID, Slug ou Nom)
async function resolveFilialeId(value: string): Promise<number | null> {
  const isNumeric = /^\d+$/.test(value);
  if (isNumeric) return parseInt(value, 10);

  const [row] = await db
    .select({ id: filiales.id })
    .from(filiales)
    .where(or(eq(filiales.slug, value), eq(filiales.nom, value)))
    .limit(1);

  return row?.id ?? null;
}

// GET /api/v1/catalogues - List catalogues (public)
cataloguesRoutes.get("/", async (c) => {
  const filialeFilter = c.req.query("filiale");
  const typeFilter = c.req.query("type_document");

  // Sécurisation de la pagination contre NaN et valeurs < 1
  const rawPage = parseInt(c.req.query("page") || "1", 10);
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const rawLimit = parseInt(c.req.query("limit") || "50", 10);
  const limit = isNaN(rawLimit) || rawLimit < 1 ? 50 : Math.min(rawLimit, 100);

  const offset = (page - 1) * limit;
  const conditions = [eq(catalogues.archived, false)];

  // Filtrage par filiale
  if (filialeFilter) {
    const fid = await resolveFilialeId(filialeFilter);
    if (fid === null) {
      // Filiale non trouvée => Retourner directement un résultat vide
      return success(c, {
        items: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      });
    }
    conditions.push(eq(catalogues.filiale, fid));
  }

  // Filtrage par type de document
  if (typeFilter) {
    conditions.push(
      eq(
        catalogues.type_document,
        typeFilter as
          | "catalogue"
          | "brochure"
          | "plaquette"
          | "fiche_technique"
          | "autre",
      ),
    );
  }

  // Requête principale
  const rows = await db
    .select({
      id: catalogues.id,
      titre: catalogues.titre,
      filiale: catalogues.filiale,
      filiale_nom: filiales.nom,
      type_document: catalogues.type_document,
      file_path: catalogues.file_path,
      taille_ko: catalogues.taille_ko,
      format: catalogues.format,
      telechargements: catalogues.telechargements,
      archived: catalogues.archived,
      created_at: catalogues.created_at,
      updated_at: catalogues.updated_at,
    })
    .from(catalogues)
    .leftJoin(filiales, eq(catalogues.filiale, filiales.id))
    .where(and(...conditions))
    .orderBy(desc(catalogues.created_at))
    .limit(limit)
    .offset(offset);

  // Compte total des résultats
  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(catalogues)
    .where(and(...conditions));

  const total = Number(countResult?.count || 0);

  return success(c, {
    items: rows,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/v1/catalogues/:id/download - Increment download count
cataloguesRoutes.get("/:id/download", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const [catalogue] = await db
    .select()
    .from(catalogues)
    .where(and(eq(catalogues.id, id), eq(catalogues.archived, false)))
    .limit(1);

  if (!catalogue) {
    return error(c, "Catalogue non trouvé", 404);
  }

  // Incrémentation sécurisée gérant les valeurs NULL éventuelles
  await db
    .update(catalogues)
    .set({
      telechargements: sql`COALESCE(${catalogues.telechargements}, 0) + 1`,
      updated_at: new Date(),
    })
    .where(eq(catalogues.id, id));

  const currentDownloads = Number(catalogue.telechargements || 0);

  return success(c, {
    file_path: catalogue.file_path,
    telechargements: currentDownloads + 1,
  });
});

export default cataloguesRoutes;

```
### .\api\src\routes\contact.routes.ts
```ts
import { Hono } from "hono";
import { eq, or } from "drizzle-orm";
import { db } from "../db/client";
import { demandes_contact, filiales } from "../db/schema";
import { success, error } from "../utils/response";
import { demandeSchema } from "../utils/validation";
import { sendNotificationEmail } from "../services/email";
import { generateContactWhatsAppUrl } from "../services/whatsapp";

const contactRoutes = new Hono();

// Helper de lecture sécurisée du body HTTP (JSON ou FormData)
async function parseBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch {
    return null;
  }
}

// Génération d'une référence unique sécurisée
function generateReference(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const random = Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()
    .padStart(4, "X");
  return `DM-${year}${month}${day}-${random}`;
}

// POST /api/contact - Soumission du formulaire de contact public
contactRoutes.post("/", async (c) => {
  const body = await parseBody(c);
  if (!body) {
    return error(c, "Données de formulaire invalides ou illisibles", 400);
  }

  const parsed = demandeSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues?.[0]?.message || "Données invalides";
    return error(c, message, 422);
  }

  const data = parsed.data;
  const reference = generateReference();

  // Résolution de la filiale (par ID, Slug ou Nom)
  let filialeName: string | null = null;
  let filialeId: number | null = null;

  if (data.filiale) {
    const filialeValue = String(data.filiale).trim();
    const isNumber = /^\d+$/.test(filialeValue);

    if (isNumber) {
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(eq(filiales.id, parseInt(filialeValue, 10)))
        .limit(1);

      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      }
    } else {
      // Recherche par slug OU par nom en 1 seule requête
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(
          or(eq(filiales.slug, filialeValue), eq(filiales.nom, filialeValue)),
        )
        .limit(1);

      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      } else {
        filialeName = filialeValue;
      }
    }
  }

  // Insertion de la demande en BDD
  await db.insert(demandes_contact).values({
    reference,
    civilite: data.civilite || null,
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone || null,
    societe: data.societe || null,
    fonction: data.fonction || null,
    filiale: filialeId,
    type_demande: data.type_demande || "information",
    objet: data.objet || null,
    message: data.message,
    details_json:
      data.details_json && Object.keys(data.details_json).length > 0
        ? (data.details_json as Record<string, unknown>)
        : null,
  });

  // Envoi de la notification par e-mail (non-bloquant)
  sendNotificationEmail({
    reference,
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone,
    societe: data.societe,
    fonction: data.fonction,
    objet: data.objet,
    message: data.message,
    filiale: filialeName,
  }).catch((err) => {
    console.error("Erreur envoi notification email:", err);
  });

  // Génération résiliente de l'URL WhatsApp
  let whatsappUrl: string | null = null;
  try {
    whatsappUrl = await generateContactWhatsAppUrl({
      nom_complet: data.nom_complet,
      email: data.email,
      telephone: data.telephone,
      societe: data.societe,
      objet: data.objet,
      message: data.message,
      filiale: filialeName,
    });
  } catch (err) {
    console.error("Erreur génération URL WhatsApp:", err);
  }

  return success(
    c,
    {
      reference,
      whatsapp_url: whatsappUrl,
    },
    `Votre demande a été envoyée avec succès. Référence: ${reference}`,
    201,
  );
});

export default contactRoutes;

```
### .\api\src\routes\events.routes.ts
```ts
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import { eventEmitter } from "../services/events";

export const eventsRoutes = new Hono();

eventsRoutes.get("/", (c) => {
  // Headers pour éviter la mise en cache et le buffering proxy (Nginx, Cloudflare)
  c.header("Content-Type", "text/event-stream");
  c.header("Cache-Control", "no-cache, no-transform");
  c.header("Connection", "keep-alive");
  c.header("X-Accel-Buffering", "no");

  return streamSSE(c, async (stream) => {
    // 1. Définir le délai de reconnexion auto pour le navigateur (ex: 5 secondes)
    await stream.writeSSE({
      event: "connected",
      data: JSON.stringify({ status: "ok" }),
      retry: 5000,
    });

    // 2. Ping périodique pour maintenir la connexion active (keep-alive)
    const interval = setInterval(() => {
      stream.writeSSE({ event: "ping", data: "ping" }).catch(() => {
        // Ignorer l'erreur si le flux s'est fermé avant la purge de l'intervalle
      });
    }, 15000);

    // 3. Listener d'invalidation
    const onInvalidate = async (data: { entity: string }) => {
      try {
        await stream.writeSSE({
          event: "invalidate",
          data: JSON.stringify(data),
        });
      } catch (err) {
        console.error("Erreur écriture SSE:", err);
      }
    };

    eventEmitter.on("invalidate", onInvalidate);

    // 4. Promesse nettoyée proprement lors de la déconnexion
    await new Promise<void>((resolve) => {
      stream.onAbort(() => {
        clearInterval(interval);
        eventEmitter.off("invalidate", onInvalidate);
        resolve(); // Résout la promesse et libère la ressource
      });
    });
  });
});

```
### .\api\src\routes\filiales.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, asc } from "drizzle-orm";
import { db } from "../db/client";
import { filiales } from "../db/schema";
import { success, error } from "../utils/response";

const filialesRoutes = new Hono();

// Helper pour parser proprement le corps de la requête (JSON ou FormData)
async function parseRequestBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch (err) {
    return null;
  }
}

// GET /api/filiales - List all active filiales (public)
filialesRoutes.get("/", async (c) => {
  const results = await db
    .select()
    .from(filiales)
    .where(and(eq(filiales.archived, false), eq(filiales.statut, "actif")))
    .orderBy(asc(filiales.nom));

  return success(c, results);
});

// GET /api/filiales/id/:id - Get single filiale by ID (supporté)
filialesRoutes.get("/id/:id", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) return error(c, "ID invalide", 400);

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!filiale) {
    return error(c, "Filiale non trouvée", 404);
  }

  return success(c, filiale);
});

// GET /api/filiales/:slug - Get single filiale by slug (public)
filialesRoutes.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(and(eq(filiales.slug, slug), eq(filiales.archived, false)))
    .limit(1);

  if (!filiale) {
    return error(c, "Filiale non trouvée", 404);
  }

  return success(c, filiale);
});

// Handler réutilisable pour la mise à jour
const updateFilialeHandler = async (c: any) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const body = await parseRequestBody(c);
  if (!body) {
    return error(c, "Données envoyées invalides ou inexistantes", 400);
  }

  const { telephone, email, adresse, site_web, description } = body;

  const [existing] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Filiale non trouvée", 404);
  }

  await db
    .update(filiales)
    .set({
      telephone:
        telephone !== undefined ? String(telephone) : existing.telephone,
      email: email !== undefined ? String(email) : existing.email,
      adresse: adresse !== undefined ? String(adresse) : existing.adresse,
      site_web: site_web !== undefined ? String(site_web) : existing.site_web,
      description:
        description !== undefined ? String(description) : existing.description,
      updated_at: new Date(),
    })
    .where(eq(filiales.id, id));

  return success(c, { message: "Filiale mise à jour avec succès" });
};

// PUT /api/filiales/id/:id
filialesRoutes.put("/id/:id", updateFilialeHandler);

// PUT /api/filiales/:id (pour matcher /admin/filiales/6)
filialesRoutes.put("/:id", updateFilialeHandler);

export default filialesRoutes;

```
### .\api\src\routes\galerie.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, or } from "drizzle-orm";
import { db } from "../db/client";
import { galerie, filiales } from "../db/schema";
import { success, error } from "../utils/response";

const galerieRoutes = new Hono();

// Helper optimisé : 1 seule requête SQL avec or()
async function resolveFilialeId(value: string): Promise<number | null> {
  const isNumeric = /^\d+$/.test(value);
  if (isNumeric) return parseInt(value, 10);

  const [row] = await db
    .select({ id: filiales.id })
    .from(filiales)
    .where(or(eq(filiales.slug, value), eq(filiales.nom, value)))
    .limit(1);

  return row?.id ?? null;
}

// GET /api/v1/galerie - List gallery items with filiale name (public)
galerieRoutes.get("/", async (c) => {
  const filialeFilter = c.req.query("filiale");
  const typeFilter = c.req.query("type_projet");

  // Sécurisation contre NaN et valeurs négatives
  const rawPage = parseInt(c.req.query("page") || "1", 10);
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const rawLimit = parseInt(c.req.query("limit") || "50", 10);
  const limit = isNaN(rawLimit) || rawLimit < 1 ? 50 : Math.min(rawLimit, 100);

  const offset = (page - 1) * limit;
  const conditions = [eq(galerie.archived, false)];

  // Gestion du filtre filiale
  if (filialeFilter) {
    const fid = await resolveFilialeId(filialeFilter);
    if (fid === null) {
      // Filiale non trouvée => Retourner directement un tableau vide
      return success(c, {
        items: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      });
    }
    conditions.push(eq(galerie.filiale, fid));
  }

  if (typeFilter) {
    conditions.push(
      eq(
        galerie.type_projet,
        typeFilter as
          | "residentiel"
          | "commercial"
          | "infrastructure"
          | "evenement"
          | "production"
          | "logistique"
          | "autre",
      ),
    );
  }

  // Requête principale
  const rows = await db
    .select({
      id: galerie.id,
      titre: galerie.titre,
      filiale: galerie.filiale,
      filiale_nom: filiales.nom,
      type_projet: galerie.type_projet,
      lieu: galerie.lieu,
      date_realisation: galerie.date_realisation,
      description_courte: galerie.description_courte,
      image_path: galerie.image_path,
      archived: galerie.archived,
      created_at: galerie.created_at,
      updated_at: galerie.updated_at,
    })
    .from(galerie)
    .leftJoin(filiales, eq(galerie.filiale, filiales.id))
    .where(and(...conditions))
    .orderBy(desc(galerie.created_at))
    .limit(limit)
    .offset(offset);

  // Compte total sécurisé
  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(galerie)
    .where(and(...conditions));

  const total = Number(countResult?.count || 0);

  return success(c, {
    items: rows,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/v1/galerie/:id - Get single gallery item (public)
galerieRoutes.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const [row] = await db
    .select({
      id: galerie.id,
      titre: galerie.titre,
      filiale: galerie.filiale,
      filiale_nom: filiales.nom,
      type_projet: galerie.type_projet,
      lieu: galerie.lieu,
      date_realisation: galerie.date_realisation,
      description_courte: galerie.description_courte,
      image_path: galerie.image_path,
      archived: galerie.archived,
      created_at: galerie.created_at,
      updated_at: galerie.updated_at,
    })
    .from(galerie)
    .leftJoin(filiales, eq(galerie.filiale, filiales.id))
    .where(and(eq(galerie.id, id), eq(galerie.archived, false)))
    .limit(1);

  if (!row) {
    return error(c, "Élément de galerie non trouvé", 404);
  }

  return success(c, row);
});

export default galerieRoutes;

```
### .\api\src\routes\pages.routes.ts
```ts
import { Hono } from "hono";
import { eq, and } from "drizzle-orm";
import { db } from "../db/client";
import { page_contents } from "../db/schema";
import { success, error } from "../utils/response";

const pagesRoutes = new Hono();

/**
 * GET /api/v1/admin/pages/:slug
 * Retourne la structure attendue par l'éditeur Frontend
 */
pagesRoutes.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  try {
    const contents = await db
      .select()
      .from(page_contents)
      .where(eq(page_contents.page_slug, slug));

    // Transformer le tableau plat en structure { slug, sections: [...] }
    const sections = contents.map((row) => ({
      key: row.section_key,
      type: row.content_type || "text",
      value: row.content_value || "",
      image_url: row.content_type === "image" ? row.content_value : undefined,
    }));

    return success(c, {
      slug,
      sections,
    });
  } catch (err) {
    console.error(`Erreur chargement page ${slug}:`, err);
    return error(c, "Erreur lors de la récupération de la page", 500);
  }
});

/**
 * POST /api/v1/admin/pages/:slug
 * Supporte JSON et Form-Data (pour l'upload d'images)
 */
pagesRoutes.post("/:slug", async (c) => {
  const slug = c.req.param("slug");
  const contentType = c.req.header("content-type") || "";

  try {
    let key = "";
    let value = "";
    let type = "text";

    // 1. Parsing selon le type de requête
    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const body = await c.req.parseBody();
      key = body["key"] as string;
      value = body["value"] as string;

      // Traitement éventuel du fichier image
      const imageFile = body["image"];
      if (imageFile && imageFile instanceof File) {
        // TODO: Uploader le fichier sur Cloudflare R2 / S3
        // const uploadedUrl = await uploadToR2(imageFile);
        // value = uploadedUrl;
        type = "image";
      }
    } else {
      const body = await c.req.json();
      key = body.key || body.section_key;
      value = body.value || body.content_value || "";
      type = body.type || body.content_type || "text";
    }

    if (!key) {
      return error(c, "La clé de section (key) est requise", 400);
    }

    // 2. UPSERT en BDD
    await db
      .insert(page_contents)
      .values({
        page_slug: slug,
        section_key: key,
        content_value: value,
        content_type: type,
        updated_at: new Date(),
      })
      .onConflictDoUpdate({
        target: [page_contents.page_slug, page_contents.section_key],
        set: {
          content_value: value,
          content_type: type,
          updated_at: new Date(),
        },
      });

    return success(c, null, "Section mise à jour avec succès");
  } catch (err) {
    console.error(`Erreur mise à jour de la page ${slug}:`, err);
    return error(c, "Erreur lors de la sauvegarde du contenu", 500);
  }
});

export default pagesRoutes;
```
### .\api\src\routes\settings.routes.ts
```ts
import { Hono } from "hono";
import { eq, inArray, sql } from "drizzle-orm";
import { db } from "../db/client";
import { settings } from "../db/schema";
import { success, error } from "../utils/response";

const settingsRoutes = new Hono();

const PUBLIC_KEYS = [
  "contact_email",
  "contact_phone",
  "contact_address",
  "social_facebook",
  "social_linkedin",
  "social_instagram",
  "social_twitter",
  "whatsapp_number",
] as const;

// Helper de lecture sécurisée du body
async function parseBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch {
    return null;
  }
}

// GET /api/v1/settings
settingsRoutes.get("/", async (c) => {
  // 1. Filtrage directement au niveau SQL
  const publicSettings = await db
    .select()
    .from(settings)
    .where(inArray(settings.key, [...PUBLIC_KEYS]));

  const map = publicSettings.reduce(
    (acc, curr) => {
      acc[curr.key] = curr.value || "";
      return acc;
    },
    {} as Record<string, string>,
  );

  return success(c, { map });
});

// PUT /api/v1/settings
settingsRoutes.put("/", async (c) => {
  const body = await parseBody(c);

  if (!body || typeof body !== "object") {
    return error(c, "Corps de requête invalide", 400);
  }

  const keysToUpdate = Object.keys(body).filter((k) =>
    PUBLIC_KEYS.includes(k as any),
  );

  if (keysToUpdate.length === 0) {
    return error(c, "Aucune clé valide à mettre à jour", 400);
  }

  // 2. Préparation du tableau d'upsert
  const valuesToInsert = keysToUpdate.map((key) => ({
    key,
    value: String(body[key] ?? ""),
    updated_at: new Date(),
  }));

  // 3. Upsert en 1 seule requête SQL (suppose que 'key' a une contrainte UNIQUE ou est clé primaire)
  await db
    .insert(settings)
    .values(valuesToInsert)
    .onConflictDoUpdate({
      target: settings.key,
      set: {
        value: sql`EXCLUDED.value`,
        updated_at: new Date(),
      },
    });

  return success(c, { message: "Settings updated successfully" });
});

export default settingsRoutes;

```
### .\api\src\routes\admin\auth.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, asc, like, or } from "drizzle-orm";
import { db } from "../../db/client";
import {
  administrateurs,
  filiales,
  demandes_contact,
  catalogues,
  galerie,
  page_contents,
  settings,
  chatbot_logs,
} from "../../db/schema";
import { success, error } from "../../utils/response";
import { authMiddleware } from "../../middleware/auth";
import type { AuthUser } from "../../middleware/auth";
import { compare, hash } from "bcryptjs";
import { eventEmitter } from "../../services/events";
import {
  filialeSchema,
  galerieSchema,
  catalogueSchema,
  pageContentSchema,
  pageContentUpdateSchema,
  settingsUpdateSchema,
  adminUpdateSchema,
  changePasswordSchema,
  chatbotLogSchema,
} from "../../utils/validation";
import { uploadFile, deleteFile } from "../../services/upload";

// Helper to get validation error message (Zod v4 uses .issues not .errors)
function getValidationError(err: unknown): string {
  if (err && typeof err === "object" && "issues" in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || "Donnees invalides";
  }
  if (err instanceof Error) return err.message;
  return "Donnees invalides";
}

// Helper to get user from context
function getUser(c: any): AuthUser {
  return c.get("user") as AuthUser;
}

// Helper to safely get route param as integer
function getIdParam(c: any): number {
  return parseInt(c.req.param("id") || "0", 10);
}

// ─── Admin Dashboard ─────────────────────────────────────────────────────────

const adminDashboard = new Hono();

// GET /api/admin/dashboard/stats
adminDashboard.get("/", authMiddleware, async (c) => {
  getUser(c);

  const safeCount = async (
    queryFn: () => Promise<Array<{ count: number }>>,
  ) => {
    try {
      const [row] = await queryFn();
      return Number(row?.count ?? 0);
    } catch {
      return 0;
    }
  };

  const [
    totalDemandes,
    nouvellesDemandes,
    totalFiliales,
    totalGalerie,
    totalCatalogues,
  ] = await Promise.all([
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(demandes_contact)
        .where(eq(demandes_contact.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(demandes_contact)
        .where(
          and(
            eq(demandes_contact.archived, false),
            eq(demandes_contact.statut, "nouveau"),
          ),
        ),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(filiales)
        .where(eq(filiales.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(galerie)
        .where(eq(galerie.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(catalogues)
        .where(eq(catalogues.archived, false)),
    ),
  ]);

  return success(c, {
    total_demandes: totalDemandes,
    nouvelles_demandes: nouvellesDemandes,
    total_filiales: totalFiliales,
    total_galerie: totalGalerie,
    total_catalogues: totalCatalogues,
  });
});

// ─── Admin: Demandes ─────────────────────────────────────────────────────────

const adminDemandes = new Hono();

adminDemandes.get("/", authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query("page") || "1", 10);
  const limit = Math.min(parseInt(c.req.query("limit") || "20", 10), 100);
  const offset = (page - 1) * limit;
  const statut = c.req.query("statut");
  const search = c.req.query("search");

  const conditions = [eq(demandes_contact.archived, false)];

  if (statut && ["nouveau", "en_cours", "traite", "archive"].includes(statut)) {
    conditions.push(
      eq(
        demandes_contact.statut,
        statut as "nouveau" | "en_cours" | "traite" | "archive",
      ),
    );
  }

  if (search) {
    conditions.push(
      or(
        like(demandes_contact.nom_complet, `%${search}%`),
        like(demandes_contact.email, `%${search}%`),
        like(demandes_contact.reference, `%${search}%`),
        like(demandes_contact.societe, `%${search}%`),
      )!,
    );
  }

  const items = await db
    .select()
    .from(demandes_contact)
    .where(and(...conditions))
    .orderBy(desc(demandes_contact.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(demandes_contact)
    .where(and(...conditions));

  return success(c, {
    items,
    pagination: {
      page,
      limit,
      total: countResult?.count || 0,
      totalPages: Math.ceil((countResult?.count || 0) / limit),
    },
  });
});

adminDemandes.get("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [demande] = await db
    .select()
    .from(demandes_contact)
    .where(eq(demandes_contact.id, id))
    .limit(1);

  if (!demande) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, demande);
});

adminDemandes.patch("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };

  if (
    body.statut &&
    ["nouveau", "en_cours", "traite", "archive"].includes(body.statut)
  ) {
    updateData.statut = body.statut;
  }
  if (body.notes_internes !== undefined) {
    updateData.notes_internes = body.notes_internes;
  }

  const [updated] = await db
    .update(demandes_contact)
    .set(updateData as any)
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, updated, "Demande mise a jour");
});

adminDemandes.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(demandes_contact)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, null, "Demande archivee");
});

// ─── Admin: Filiales CRUD ──────────────────────────────────────────────────

const adminFiliales = new Hono();

adminFiliales.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(filiales)
    .where(includeArchived ? undefined : eq(filiales.archived, false))
    .orderBy(asc(filiales.nom));

  return success(c, items);
});

// Helper: parse le body (JSON ou FormData multipart) pour les routes filiales.
// - Extrait le fichier "image" s'il existe (upload réel via <input type="file">)
// - Transforme le champ texte "details" (une ligne = un item) en details_json { items: [...] }
async function parseFilialeBody(
  c: any,
): Promise<{ rawBody: Record<string, any>; imageFile?: File }> {
  const contentType = c.req.header("content-type") || "";
  let rawBody: Record<string, any>;
  let imageFile: File | undefined;

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const parsedBody = await c.req.parseBody();
    rawBody = { ...parsedBody };

    if (
      parsedBody["image"] instanceof File &&
      (parsedBody["image"] as File).size > 0
    ) {
      imageFile = parsedBody["image"] as File;
    }
    delete rawBody.image;

    if (typeof rawBody.details === "string") {
      rawBody.details_json = {
        items: rawBody.details
          .split("\n")
          .map((s: string) => s.trim())
          .filter(Boolean),
      };
      delete rawBody.details;
    }
  } else {
    rawBody = await c.req.json();
  }

  return { rawBody, imageFile };
}

adminFiliales.post("/", authMiddleware, async (c) => {
  getUser(c);

  const { rawBody, imageFile } = await parseFilialeBody(c);

  const parsed = filialeSchema.safeParse(rawBody);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  let image_url = parsed.data.image_url;
  if (imageFile) {
    image_url = await uploadFile(imageFile, "filiales");
  }

  const [created] = await db
    .insert(filiales)
    .values({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: image_url || null,
      details_json:
        Object.keys(parsed.data.details_json).length > 0
          ? (parsed.data.details_json as Record<string, unknown>)
          : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, created, "Filiale creee", 201);
});

adminFiliales.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);

  const [existing] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Filiale non trouvee", 404);
  }

  const { rawBody, imageFile } = await parseFilialeBody(c);

  // Le FormData n'envoie pas image_url/archived (champs non présents dans le formulaire) :
  // on préserve les valeurs existantes pour ne pas les écraser silencieusement.
  if (rawBody.image_url === undefined || rawBody.image_url === "") {
    rawBody.image_url = existing.image_url || "";
  }
  if (rawBody.archived === undefined) {
    rawBody.archived = existing.archived;
  }

  const parsed = filialeSchema.safeParse(rawBody);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  let image_url = parsed.data.image_url;
  if (imageFile) {
    image_url = await uploadFile(imageFile, "filiales");
    if (existing.image_url) {
      deleteFile(existing.image_url).catch(() => {});
    }
  }

  const [updated] = await db
    .update(filiales)
    .set({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: image_url || null,
      details_json:
        Object.keys(parsed.data.details_json).length > 0
          ? (parsed.data.details_json as Record<string, unknown>)
          : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
      updated_at: new Date(),
    })
    .where(eq(filiales.id, id))
    .returning();

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, updated, "Filiale mise a jour");
});

adminFiliales.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(filiales)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(filiales.id, id))
    .returning();

  if (!updated) {
    return error(c, "Filiale non trouvee", 404);
  }

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, null, "Filiale archivee");
});

// ─── Admin: Galerie CRUD ──────────────────────────────────────────────────────

const adminGalerie = new Hono();

adminGalerie.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(galerie)
    .where(includeArchived ? undefined : eq(galerie.archived, false))
    .orderBy(desc(galerie.created_at));

  return success(c, items);
});

adminGalerie.post("/", authMiddleware, async (c) => {
  const body = await c.req.parseBody();
  const file = body["image"] as File | undefined;

  if (!file) {
    return error(c, "Image requise", 422);
  }

  const titre = body["titre"] as string;
  if (!titre) {
    return error(c, "Titre requis", 422);
  }

  const image_path = await uploadFile(file, "galerie");

  let filialeId: number | null = null;
  const filialeRaw = body["filiale"];
  if (filialeRaw) {
    const fv = filialeRaw;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, String(fv)))
        .limit(1);
      if (f) filialeId = f.id;
    }
  }

  const [created] = await db
    .insert(galerie)
    .values({
      titre,
      filiale: filialeId,
      type_projet: (body["type_projet"] as string) || null,
      lieu: (body["lieu"] as string) || null,
      date_realisation: (body["date_realisation"] as string) || null,
      description_courte: (body["description_courte"] as string) || null,
      image_path,
    } as any)
    .returning();

  eventEmitter.emit("invalidate", { entity: "galerie" });
  return success(c, created, "Element de galerie cree", 201);
});

adminGalerie.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = galerieSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
  }

  const [updated] = await db
    .update(galerie)
    .set({
      titre: data.titre,
      filiale: filialeId,
      type_projet: data.type_projet || null,
      lieu: data.lieu || null,
      date_realisation: data.date_realisation || null,
      description_courte: data.description_courte || null,
      image_path: data.image_path,
      updated_at: new Date(),
    })
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, "Element de galerie non trouve", 404);
  }

  return success(c, updated, "Element de galerie mis a jour");
});

adminGalerie.patch("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };
  const allowedFields = [
    "titre",
    "lieu",
    "date_realisation",
    "description_courte",
    "type_projet",
    "archived",
  ];

  for (const field of allowedFields) {
    if ((body as Record<string, unknown>)[field] !== undefined) {
      updateData[field] = (body as Record<string, unknown>)[field];
    }
  }
  if ((body as Record<string, unknown>).image_path !== undefined) {
    updateData.image_path = (body as Record<string, unknown>).image_path;
  }

  const [updated] = await db
    .update(galerie)
    .set(updateData as any)
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, "Element de galerie non trouve", 404);
  }

  return success(c, updated, "Element de galerie mis a jour");
});

adminGalerie.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(galerie)
    .where(eq(galerie.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Element de galerie non trouve", 404);
  }

  if (existing.image_path) {
    deleteFile(existing.image_path).catch(() => {});
  }

  await db
    .update(galerie)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(galerie.id, id));
  return success(c, null, "Element de galerie archive");
});

// ─── Admin: Catalogues CRUD ───────────────────────────────────────────────────

const adminCatalogues = new Hono();

adminCatalogues.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(catalogues)
    .where(includeArchived ? undefined : eq(catalogues.archived, false))
    .orderBy(desc(catalogues.created_at));

  return success(c, items);
});

adminCatalogues.post("/", authMiddleware, async (c) => {
  const body = await c.req.parseBody();
  const file = body["file"] as File | undefined;

  if (!file) {
    return error(c, "Fichier requis", 422);
  }

  const titre = body["titre"] as string;
  if (!titre) {
    return error(c, "Titre requis", 422);
  }

  const file_path = await uploadFile(file, "catalogues");

  let filialeId: number | null = null;
  const filialeRaw = body["filiale"];
  if (filialeRaw) {
    const fv = filialeRaw;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, String(fv)))
        .limit(1);
      if (f) filialeId = f.id;
    }
  }

  const taille_ko = Math.round(file.size / 1024);
  const type_document = (body["type_document"] as string) || "catalogue";
  let format = "PDF";
  if (file.type.includes("image")) format = "IMAGE";
  if (file.type.includes("word")) format = "WORD";

  const [created] = await db
    .insert(catalogues)
    .values({
      titre,
      filiale: filialeId,
      type_document: type_document as any,
      file_path,
      taille_ko,
      format,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "catalogues" });
  return success(c, created, "Catalogue cree", 201);
});

adminCatalogues.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);

  const [existing] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Catalogue non trouve", 404);
  }

  const contentType = c.req.header("content-type") || "";
  let titre: string;
  let filialeRaw: string | undefined;
  let type_document: string;
  let newFile: File | undefined;

  if (contentType.includes("multipart/form-data")) {
    const body = await c.req.parseBody();
    titre = (body["titre"] as string) || existing.titre;
    filialeRaw = body["filiale"] as string | undefined;
    type_document = (body["type_document"] as string) || existing.type_document;
    if (body["file"] instanceof File && (body["file"] as File).size > 0) {
      newFile = body["file"] as File;
    }
  } else {
    const body = await c.req.json();
    titre = body.titre || existing.titre;
    filialeRaw = body.filiale;
    type_document = body.type_document || existing.type_document;
  }

  let filialeId: number | null = existing.filiale;
  if (filialeRaw !== undefined) {
    if (filialeRaw === "") {
      filialeId = null;
    } else if (/^\d+$/.test(String(filialeRaw))) {
      filialeId = parseInt(String(filialeRaw), 10);
    }
  }

  let file_path = existing.file_path;
  let taille_ko = existing.taille_ko;
  let format = existing.format;

  if (newFile) {
    file_path = await uploadFile(newFile, "catalogues");
    taille_ko = Math.round(newFile.size / 1024);
    format = "PDF";
    if (newFile.type.includes("image")) format = "IMAGE";
    if (newFile.type.includes("word")) format = "WORD";
    if (existing.file_path) {
      deleteFile(existing.file_path).catch(() => {});
    }
  }

  const [updated] = await db
    .update(catalogues)
    .set({
      titre,
      filiale: filialeId,
      type_document: type_document as any,
      file_path,
      taille_ko,
      format,
      updated_at: new Date(),
    })
    .where(eq(catalogues.id, id))
    .returning();

  eventEmitter.emit("invalidate", { entity: "catalogues" });
  return success(c, updated, "Catalogue mis a jour");
});

adminCatalogues.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Catalogue non trouve", 404);
  }

  if (existing.file_path) {
    deleteFile(existing.file_path).catch(() => {});
  }

  await db
    .update(catalogues)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(catalogues.id, id));
  return success(c, null, "Catalogue archive");
});

// ─── Admin: Page Contents CRUD ───────────────────────────────────────────────

const adminPages = new Hono();

adminPages.get("/", authMiddleware, async (c) => {
  const slug = c.req.query("slug");
  const items = await db
    .select()
    .from(page_contents)
    .where(slug ? eq(page_contents.page_slug, slug) : undefined)
    .orderBy(asc(page_contents.page_slug), asc(page_contents.section_key));

  return success(c, items);
});

adminPages.get("/:slug", authMiddleware, async (c) => {
  const slug = c.req.param("slug");
  const items = await db
    .select()
    .from(page_contents)
    .where(eq(page_contents.page_slug, slug))
    .orderBy(asc(page_contents.section_key));

  return success(c, { contents: items });
});

adminPages.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  const parsed = pageContentSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [created] = await db
    .insert(page_contents)
    .values({
      page_slug: parsed.data.page_slug,
      section_key: parsed.data.section_key,
      content_value: parsed.data.content_value || null,
      content_type: parsed.data.content_type,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, created, "Contenu de page cree", 201);
});

adminPages.post("/bulk", authMiddleware, async (c) => {
  const body = await c.req.json();
  const { page_slug, contents } = body;

  if (!page_slug || !Array.isArray(contents)) {
    return error(c, "Paramètres invalides", 422);
  }

  for (const item of contents) {
    const { section_key, content_value, content_type } = item;

    const [existing] = await db
      .select()
      .from(page_contents)
      .where(
        and(
          eq(page_contents.page_slug, page_slug),
          eq(page_contents.section_key, section_key),
        ),
      )
      .limit(1);

    if (existing) {
      await db
        .update(page_contents)
        .set({ content_value, updated_at: new Date() })
        .where(eq(page_contents.id, existing.id));
    } else {
      await db.insert(page_contents).values({
        page_slug,
        section_key,
        content_value,
        content_type: content_type || "json",
      });
    }
  }

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, null, "Contenus sauvegardés avec succès", 200);
});

// POST /:slug (FormData)
adminPages.post("/:slug", authMiddleware, async (c) => {
  const slug = c.req.param("slug");
  const body = await c.req.parseBody();

  const key = body["key"] as string;
  let value = body["value"] as string;
  const image = body["image"] as File | undefined;

  if (!key) {
    return error(c, "Clé (key) requise", 422);
  }

  if (image) {
    value = await uploadFile(image, "pages");
  }

  const [existing] = await db
    .select()
    .from(page_contents)
    .where(
      and(
        eq(page_contents.page_slug as any, slug),
        eq(page_contents.section_key as any, key),
      ),
    )
    .limit(1);

  let updated;
  if (existing) {
    [updated] = await db
      .update(page_contents)
      .set({ content_value: value, updated_at: new Date() })
      .where(eq(page_contents.id, existing.id))
      .returning();
  } else {
    [updated] = await db
      .insert(page_contents)
      .values({
        page_slug: slug,
        section_key: key,
        content_value: value,
        content_type: image ? "image" : "text",
      } as any)
      .returning();
  }

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, updated, "Contenu mis a jour");
});

adminPages.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = pageContentUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = {
    content_value: parsed.data.content_value,
    updated_at: new Date(),
  };

  if (parsed.data.content_type) {
    updateData.content_type = parsed.data.content_type;
  }

  const [updated] = await db
    .update(page_contents)
    .set(updateData as any)
    .where(eq(page_contents.id, id))
    .returning();

  if (!updated) {
    return error(c, "Contenu non trouve", 404);
  }

  return success(c, updated, "Contenu mis a jour");
});

adminPages.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [deleted] = await db
    .delete(page_contents)
    .where(eq(page_contents.id, id))
    .returning();

  if (!deleted) {
    return error(c, "Contenu non trouve", 404);
  }

  return success(c, null, "Contenu supprime");
});

// ─── Admin: Settings CRUD ────────────────────────────────────────────────────

const adminSettings = new Hono();

adminSettings.get("/", authMiddleware, async (c) => {
  getUser(c);
  try {
    const items = await db.select().from(settings).orderBy(asc(settings.key));

    const settingsMap: Record<string, string> = {};
    for (const item of items) {
      settingsMap[item.key] = item.value || "";
    }

    return success(c, { list: items, map: settingsMap });
  } catch (err) {
    console.error("[Settings GET] DB error:", err);
    return success(c, { list: [], map: {} });
  }
});

adminSettings.put("/:key", authMiddleware, async (c) => {
  const rawKey = c.req.param("key");
  const key = rawKey as string;
  const body = await c.req.json();
  const parsed = settingsUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [existing] = await db
    .select()
    .from(settings)
    .where(eq(settings.key, key))
    .limit(1);

  if (!existing) {
    const [created] = await db
      .insert(settings)
      .values({ key, value: parsed.data.value } as any)
      .returning();
    return success(c, created, "Parametre cree", 201);
  }

  const [updated] = await db
    .update(settings)
    .set({ value: parsed.data.value, updated_at: new Date() } as any)
    .where(eq(settings.key, key))
    .returning();

  return success(c, updated, "Parametre mis a jour");
});

adminSettings.post("/bulk", authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const updates = body.settings as Record<string, string>;

  if (!updates || typeof updates !== "object") {
    return error(
      c,
      "Format invalide. Attendu: { settings: { key: value } }",
      422,
    );
  }

  const results: Array<{ key: string; status: string }> = [];

  for (const [key, value] of Object.entries(updates)) {
    try {
      const [existing] = await db
        .select()
        .from(settings)
        .where(eq(settings.key, key))
        .limit(1);

      if (existing) {
        await db
          .update(settings)
          .set({ value, updated_at: new Date() } as any)
          .where(eq(settings.key, key));
        results.push({ key, status: "updated" });
      } else {
        await db.insert(settings).values({ key, value } as any);
        results.push({ key, status: "created" });
      }
    } catch (err) {
      console.error(`[Settings Bulk] Error saving key "${key}":`, err);
      results.push({ key, status: "error" });
    }
  }

  return success(c, results, `${results.length} parametres traites`);
});

adminSettings.post("/test-email", authMiddleware, async (c) => {
  getUser(c);
  // Simulation d'envoi d'email
  console.log("[Email Test] Envoi simulé...");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return success(c, null, "Email de test envoyé avec succès (simulation)");
});

// ─── Admin: Profile & Password ───────────────────────────────────────────────

const adminProfile = new Hono();

adminProfile.get("/", authMiddleware, async (c) => {
  const user = getUser(c);
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Administrateur non trouve", 404);
  }

  return success(c, {
    id: admin.id,
    nom: admin.nom,
    email: admin.email,
    role: admin.role,
    filiale_attribuee: admin.filiale_attribuee,
    created_at: admin.created_at,
  });
});

adminProfile.put("/", authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = adminUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = { updated_at: new Date() };
  if (parsed.data.nom) updateData.nom = parsed.data.nom;
  if (parsed.data.email) updateData.email = parsed.data.email;
  if (parsed.data.role) updateData.role = parsed.data.role;
  if (parsed.data.filiale_attribuee !== undefined)
    updateData.filiale_attribuee = parsed.data.filiale_attribuee;

  const [updated] = await db
    .update(administrateurs)
    .set(updateData as any)
    .where(eq(administrateurs.id, user.sub))
    .returning();

  if (!updated) {
    return error(c, "Administrateur non trouve", 404);
  }

  const { generateToken } = await import("../../services/jwt");
  const token = await generateToken({
    sub: updated.id,
    email: updated.email,
    role: updated.role,
    nom: updated.nom,
    filialeAttribuee: updated.filiale_attribuee,
  });

  return success(
    c,
    {
      token,
      user: {
        id: updated.id,
        nom: updated.nom,
        email: updated.email,
        role: updated.role,
        filiale_attribuee: updated.filiale_attribuee,
      },
    },
    "Profil mis a jour",
  );
});

adminProfile.post("/change-password", authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = changePasswordSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { currentPassword, newPassword } = parsed.data;
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Administrateur non trouve", 404);
  }

  const isValid = await compare(currentPassword, admin.password_hash);
  if (!isValid) {
    return error(c, "Mot de passe actuel incorrect", 401);
  }

  const newHash = await hash(newPassword, 12);
  await db
    .update(administrateurs)
    .set({ password_hash: newHash, updated_at: new Date() })
    .where(eq(administrateurs.id, user.sub));

  return success(c, null, "Mot de passe modifie avec succes");
});

// ─── Admin: Upload ────────────────────────────────────────────────────────────

const adminUpload = new Hono();

adminUpload.post("/", authMiddleware, async (c) => {
  getUser(c);
  const formData = await c.req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file) {
    return error(c, "Aucun fichier fourni", 400);
  }

  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return error(c, "Fichier trop volumineux (max 10 Mo)", 422);
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  if (!allowedTypes.includes(file.type)) {
    return error(c, "Type de fichier non autorise", 422);
  }

  const url = await uploadFile(file, folder);

  return success(
    c,
    {
      url,
      name: file.name,
      size: file.size,
      type: file.type,
      folder,
    },
    "Fichier uploade",
    201,
  );
});

adminUpload.delete("/", authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const url = (body as { url: string }).url;

  if (!url) {
    return error(c, "URL du fichier requise", 400);
  }

  await deleteFile(url);
  return success(c, null, "Fichier supprime");
});

// ─── Admin: Chatbot Logs ──────────────────────────────────────────────────────

const adminChatbot = new Hono();

adminChatbot.post("/logs", async (c) => {
  const body = await c.req.json();
  const parsed = chatbotLogSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;

  const [created] = await db
    .insert(chatbot_logs)
    .values({
      session_id: data.session_id,
      intention_detectee: data.intention_detectee || null,
      filiale_orientee: data.filiale_orientee || null,
      conversation_json:
        Object.keys(data.conversation_json).length > 0
          ? (data.conversation_json as Record<string, unknown>)
          : null,
      statut_resolution: data.statut_resolution,
    })
    .returning();

  return success(c, created, "Log chatbot enregistre", 201);
});

adminChatbot.get("/logs", authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query("page") || "1", 10);
  const limit = Math.min(parseInt(c.req.query("limit") || "50", 10), 100);
  const offset = (page - 1) * limit;

  const items = await db
    .select()
    .from(chatbot_logs)
    .orderBy(desc(chatbot_logs.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(chatbot_logs);

  return success(c, {
    items,
    pagination: {
      page,
      limit,
      total: countResult?.count || 0,
      totalPages: Math.ceil((countResult?.count || 0) / limit),
    },
  });
});

// ─── Admin: Admins Management ────────────────────────────────────────────────

const adminAdmins = new Hono();

adminAdmins.get("/", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const items = await db
    .select({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    })
    .from(administrateurs)
    .orderBy(asc(administrateurs.nom));

  return success(c, items);
});

adminAdmins.post("/", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const body = await c.req.json();
  const { nom, email, password, role, filiale_attribuee } = body as {
    nom: string;
    email: string;
    password: string;
    role?: string;
    filiale_attribuee?: number | null;
  };

  if (!nom || !email || !password) {
    return error(c, "Nom, email et mot de passe sont requis", 422);
  }

  const passwordHash = await hash(password, 12);

  const [created] = await db
    .insert(administrateurs)
    .values({
      nom,
      email,
      password_hash: passwordHash,
      role: (role || "gestionnaire") as "admin" | "gestionnaire",
      filiale_attribuee: filiale_attribuee || null,
    })
    .returning({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    });

  return success(c, created, "Administrateur cree", 201);
});

adminAdmins.delete("/:id", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const id = getIdParam(c);
  if (id === user.sub) {
    return error(c, "Vous ne pouvez pas archiver votre propre compte", 400);
  }

  const [updated] = await db
    .update(administrateurs)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(administrateurs.id, id))
    .returning();

  if (!updated) {
    return error(c, "Administrateur non trouve", 404);
  }

  return success(c, null, "Administrateur archive");
});

// ─── Export all admin sub-routes ─────────────────────────────────────────────

export const adminRoutes = new Hono();

adminRoutes.route("/stats", adminDashboard);
adminRoutes.route("/demandes", adminDemandes);
adminRoutes.route("/filiales", adminFiliales);
adminRoutes.route("/galerie", adminGalerie);
adminRoutes.route("/catalogues", adminCatalogues);
adminRoutes.route("/pages", adminPages);
adminRoutes.route("/settings", adminSettings);
adminRoutes.route("/profile", adminProfile);
adminRoutes.route("/upload", adminUpload);
adminRoutes.route("/chatbot", adminChatbot);
adminRoutes.route("/admins", adminAdmins);

```
### .\api\src\services\email.ts
```ts
import nodemailer from "nodemailer";
import { eq, inArray } from "drizzle-orm";
import { db } from "../db/client";
import { settings } from "../db/schema";

export interface SmtpConfig {
  host: string;
  port: number;
  email: string;
  password: string;
}

// Helper pour sécuriser le contenu HTML contre les injections
function escapeHtml(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>");
}

/**
 * Récupère la configuration SMTP.
 * Priorité : Base de données > Fichier .env > Valeurs par défaut
 */
async function getSmtpConfig(): Promise<SmtpConfig> {
  try {
    const keys = ["smtp_host", "smtp_port", "smtp_email", "smtp_password"];
    const rows = await db
      .select({ key: settings.key, value: settings.value })
      .from(settings)
      .where(inArray(settings.key, keys));

    const configMap = new Map(rows.map((r) => [r.key, r.value]));

    return {
      host:
        configMap.get("smtp_host") || process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(
        configMap.get("smtp_port") || process.env.SMTP_PORT || "587",
        10,
      ),
      email: configMap.get("smtp_email") || process.env.SMTP_EMAIL || "",
      // Nettoyage automatique des espaces éventuels dans le mot de passe d'application Gmail
      password: (
        configMap.get("smtp_password") ||
        process.env.SMTP_PASSWORD ||
        ""
      ).replace(/\s+/g, ""),
    };
  } catch (error) {
    // Si la BDD est inaccessible, lecture directe du .env
    return {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      email: process.env.SMTP_EMAIL || "",
      password: (process.env.SMTP_PASSWORD || "").replace(/\s+/g, ""),
    };
  }
}

/**
 * Envoie un email générique via Nodemailer
 */
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  options?: { from?: string; replyTo?: string },
): Promise<boolean> {
  const smtpConfig = await getSmtpConfig();

  if (!smtpConfig.host || !smtpConfig.email || !smtpConfig.password) {
    console.warn("[SMTP] Configuration incomplète. Email non envoyé.", {
      to,
      subject,
    });
    return false;
  }

  const isSecure = smtpConfig.port === 465;

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: isSecure, // true pour 465, false pour 587
    auth: {
      user: smtpConfig.email,
      pass: smtpConfig.password,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });

  try {
    await transporter.sendMail({
      from: options?.from || `"MACOF Holding" <${smtpConfig.email}>`,
      to,
      subject,
      html,
      replyTo: options?.replyTo,
    });
    console.log(`[SMTP] Email envoyé avec succès à ${to} : "${subject}"`);
    return true;
  } catch (error) {
    console.error("[SMTP Error] Erreur lors de l'envoi de l'email :", error);
    return false;
  }
}

/**
 * Construit et envoie l'email de notification de demande de contact à l'admin
 */
export async function sendNotificationEmail(demande: {
  reference: string;
  nom_complet: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  fonction?: string | null;
  objet?: string | null;
  message: string;
  filiale?: string | null;
}): Promise<boolean> {
  let recipient = process.env.NOTIFICATION_EMAIL;

  // Si non défini dans .env, tentative de récupération en BDD
  if (!recipient) {
    try {
      const [notifEmail] = await db
        .select({ value: settings.value })
        .from(settings)
        .where(eq(settings.key, "notification_email"));
      recipient = notifEmail?.value;
    } catch {
      // Ignoré
    }
  }

  // Destinataire par défaut
  recipient = recipient || "macofholding2018@gmail.com";

  // Sanitisation des données entrantes
  const safeRef = escapeHtml(demande.reference);
  const safeNom = escapeHtml(demande.nom_complet);
  const safeEmail = escapeHtml(demande.email);
  const safeTel = escapeHtml(demande.telephone);
  const safeSociete = escapeHtml(demande.societe);
  const safeFonction = escapeHtml(demande.fonction);
  const safeObjet = escapeHtml(demande.objet);
  const safeFiliale = escapeHtml(demande.filiale);
  const safeMessage = escapeHtml(demande.message);

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a365d, #2d3748); color: white; padding: 20px 30px; }
        .header h1 { margin: 0; font-size: 22px; }
        .header p { margin: 5px 0 0; opacity: 0.9; }
        .content { padding: 25px 30px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #4a5568; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { color: #2d3748; margin-top: 3px; padding: 8px 12px; background: #f7fafc; border-radius: 4px; border-left: 3px solid #1a365d; }
        .footer { background: #edf2f7; padding: 15px 30px; text-align: center; font-size: 12px; color: #718096; }
        .badge { display: inline-block; padding: 3px 10px; background: #ebf8ff; color: #2b6cb0; border-radius: 12px; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouvelle demande de contact</h1>
          <p>Référence: <span class="badge">${safeRef}</span></p>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Nom complet</div>
            <div class="field-value">${safeNom}</div>
          </div>
          ${
            demande.societe
              ? `
          <div class="field">
            <div class="field-label">Société</div>
            <div class="field-value">${safeSociete}</div>
          </div>`
              : ""
          }
          ${
            demande.fonction
              ? `
          <div class="field">
            <div class="field-label">Fonction</div>
            <div class="field-value">${safeFonction}</div>
          </div>`
              : ""
          }
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${safeEmail}</div>
          </div>
          ${
            demande.telephone
              ? `
          <div class="field">
            <div class="field-label">Téléphone</div>
            <div class="field-value">${safeTel}</div>
          </div>`
              : ""
          }
          ${
            demande.objet
              ? `
          <div class="field">
            <div class="field-label">Objet</div>
            <div class="field-value">${safeObjet}</div>
          </div>`
              : ""
          }
          ${
            demande.filiale
              ? `
          <div class="field">
            <div class="field-label">Filiale concernée</div>
            <div class="field-value">${safeFiliale}</div>
          </div>`
              : ""
          }
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${safeMessage}</div>
          </div>
        </div>
        <div class="footer">
          <p>Cet email a été envoyé automatiquement par le site MACOF Holding.</p>
          <p>&copy; ${new Date().getFullYear()} MACOF Holding - Tous droits réservés</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `[MACOF Holding] Nouvelle demande - ${demande.reference} - ${demande.nom_complet}`;

  return sendEmail(recipient, subject, html, {
    replyTo: demande.email,
  });
}

```
### .\api\src\services\events.ts
```ts
import { EventEmitter } from 'events';

// Create a global singleton EventEmitter for broadcasting invalidation events
class GlobalEventEmitter extends EventEmitter {}

export const eventEmitter = new GlobalEventEmitter();

// Increase max listeners if needed (default is 10)
eventEmitter.setMaxListeners(100);

```
### .\api\src\services\jwt.ts
```ts
import { SignJWT, jwtVerify } from 'jose';
import { config } from '../config';

const secret = new TextEncoder().encode(config.jwtSecret);

export interface TokenPayload {
  sub: number;
  email: string;
  role: string;
  nom: string;
  filialeAttribuee?: number | null;
}

export async function generateToken(payload: TokenPayload): Promise<string> {
  return new SignJWT({
    sub: String(payload.sub),
    email: payload.email,
    role: payload.role,
    nom: payload.nom,
    filiale_attribuee: payload.filialeAttribuee ?? null,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .setSubject(String(payload.sub))
    .sign(secret);
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });
    return {
      sub: Number(payload.sub),
      email: payload.email as string,
      role: payload.role as string,
      nom: payload.nom as string,
      filialeAttribuee: payload.filiale_attribuee != null
        ? Number(payload.filiale_attribuee)
        : null,
    };
  } catch {
    throw new Error('Token invalide ou expire');
  }
}

```
### .\api\src\services\upload.ts
```ts
import { config } from '../config';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

const STORAGE_DIR = path.resolve(process.cwd(), 'storage', 'uploads');
const LOCAL_BASE_URL = '/uploads';

// Local storage fallback used when no Vercel Blob token is configured (dev mode).
async function uploadFileLocal(file: File, folder: string): Promise<string> {
  // Ensure the folder exists
  const dir = path.join(STORAGE_DIR, folder);
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }

  const timestamp = Date.now();
  const ext = file.name.split('.').pop() || 'bin';
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const filename = `${timestamp}_${sanitizedName}`;

  const fullPath = path.join(dir, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(fullPath, buffer);

  // Return a URL that the dev server can serve (mounted in index.ts)
  return `${LOCAL_BASE_URL}/${folder}/${filename}`;
}

// Vercel Blob storage (production)
async function uploadFileBlob(file: File, folder: string): Promise<string> {
  const { put } = await import('@vercel/blob');
  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const key = `${folder}/${timestamp}_${sanitizedName}`;

  const blob = await put(key, file, {
    access: 'public',
    addRandomSuffix: true,
    token: config.blobToken || undefined,
  });

  return blob.url;
}

export async function uploadFile(file: File, folder: string): Promise<string> {
  // In production (Vercel) or when a Blob token is present, use Vercel Blob.
  if (config.nodeEnv === 'production' || config.blobToken) {
    return uploadFileBlob(file, folder);
  }
  // Dev local fallback: save to disk.
  return uploadFileLocal(file, folder);
}

// Delete a previously uploaded file. Works for both local and Blob storage.
export async function deleteFile(url: string): Promise<void> {
  // Local file?
  if (url.startsWith(LOCAL_BASE_URL) || url.startsWith('/uploads')) {
    try {
      const relPath = url.replace(LOCAL_BASE_URL, '');
      const fullPath = path.join(STORAGE_DIR, relPath);
      await fs.unlink(fullPath);
      console.log(`Local file deleted: ${url}`);
    } catch (error) {
      console.error(`Failed to delete local file at ${url}:`, error);
    }
    return;
  }

  // Blob file
  try {
    const { del } = await import('@vercel/blob');
    await del(url, { token: config.blobToken || undefined });
    console.log(`Blob file deleted: ${url}`);
  } catch (error) {
    console.error(`Failed to delete blob file at ${url}:`, error);
    throw new Error(`Impossible de supprimer le fichier`);
  }
}

export async function listFiles(folder: string): Promise<{ url: string; name: string; size: number; uploadedAt: Date }[]> {
  if (config.nodeEnv === 'production' || config.blobToken) {
    try {
      const { list } = await import('@vercel/blob');
      const blobs = await list({
        prefix: folder,
        token: config.blobToken || undefined,
      });
      return blobs.blobs.map((blob) => ({
        url: blob.url,
        name: blob.pathname,
        size: blob.size,
        uploadedAt: new Date(blob.uploadedAt),
      }));
    } catch (error) {
      console.error(`Failed to list files in ${folder}:`, error);
      throw new Error(`Impossible de lister les fichiers du dossier ${folder}`);
    }
  }

  // Local fallback
  try {
    const dir = path.join(STORAGE_DIR, folder);
    const files = await fs.readdir(dir);
    const stats = await Promise.all(
      files.map(async (name) => {
        const full = path.join(dir, name);
        const s = await fs.stat(full);
        return { url: `${LOCAL_BASE_URL}/${folder}/${name}`, name, size: s.size, uploadedAt: s.mtime };
      })
    );
    return stats;
  } catch (error) {
    console.error(`Failed to list local files in ${folder}:`, error);
    return [];
  }
}

```
### .\api\src\services\whatsapp.ts
```ts
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { settings } from '../db/schema';

async function getWhatsAppNumber(): Promise<string> {
  try {
    const [row] = await db
      .select({ value: settings.value })
      .from(settings)
      .where(eq(settings.key, 'whatsapp_number'));
    return row?.value || '+224625744626';
  } catch {
    return '+224625744626';
  }
}

export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
}

export async function generateContactWhatsAppUrl(demande: {
  nom_complet: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  objet?: string | null;
  message: string;
  filiale?: string | null;
}): Promise<string> {
  const whatsappNumber = await getWhatsAppNumber();

  const formattedMessage = [
    `*Nouvelle demande de contact MACOF Holding*`,
    ``,
    `*Nom:* ${demande.nom_complet}`,
    demande.societe ? `*Société:* ${demande.societe}` : null,
    demande.email ? `*Email:* ${demande.email}` : null,
    demande.telephone ? `*Téléphone:* ${demande.telephone}` : null,
    demande.filiale ? `*Filiale:* ${demande.filiale}` : null,
    demande.objet ? `*Objet:* ${demande.objet}` : null,
    ``,
    `*Message:*`,
    demande.message,
  ]
    .filter(Boolean)
    .join('\n');

  return generateWhatsAppUrl(whatsappNumber, formattedMessage);
}

```
### .\api\check.js
```js
const { db } = require('./dist/db/client.js');
const { sql } = require('drizzle-orm');

async function run() {
  try {
    const res = await db.execute(sql`SELECT column_name FROM information_schema.columns WHERE table_name = 'demandes_contact'`);
    console.log("Columns:", res.rows.map(r => r.column_name).join(", "));
  } catch(e) {
    console.error(e);
  }
  process.exit(0);
}
run();

```
### .\api\check.ts
```ts
import { db } from './src/db/client.js';
import { demandes_contact, settings } from './src/db/schema.js';
import { eq, and } from 'drizzle-orm';

async function run() {
  try {
    console.log("Testing parameterized query...");
    const existing = await db.select().from(settings).where(eq(settings.key, 'smtp_host')).limit(1);
    console.log("Settings query:", existing);

    const [nouvellesDemandes] = await db
        .select()
        .from(demandes_contact)
        .where(and(eq(demandes_contact.archived, false), eq(demandes_contact.statut, 'nouveau')));
    console.log("Demandes query:", nouvellesDemandes);

  } catch(e) {
    console.error("Error executing query:", e);
  }
  process.exit(0);
}
run();

```
### .\api\drizzle.config.ts
```ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

```
### .\api\generate_seed.cjs
```cjs
const fs = require("fs");
const path = require("path");

const seedContent = `import { db } from "./client";
import { administrateurs, filiales, page_contents, galerie, settings } from "./schema";
import { hash } from "bcryptjs";

async function seed() {
  console.log("Seeding database...");
  
  // 1. Admin
  console.log("Inserting admin...");
  const hashedPassword = await hash("Macof2024!", 10);
  await db.insert(administrateurs).values({
    nom: "Admin MACOF",
    email: "admin@macof-holding.com",
    password_hash: hashedPassword,
    role: "admin",
  }).onConflictDoNothing();

  // 2. Settings (Contact Info)
  console.log("Inserting settings...");
  await db.insert(settings).values([
    { key: "site_title", value: "MACOF Holding" },
    { key: "contact_email", value: "macofholding2018@gmail.com" },
    { key: "contact_phone", value: "+224 625 74 46 26 / +224 623 98 75 11" },
    { key: "contact_address", value: "Manquepa en face de banc bleu / Kaloum / République de Guinée" },
  ]).onConflictDoNothing();

  // 3. Filiales
  console.log("Inserting filiales...");
  const FILIALES = [
    {
      nom: "MACOF Immobilier SARL",
      slug: "immobilier",
      secteur: "Immobilier & BTP",
      description: "Filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP). Elle intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurants.",
      image_url: "https://images.unsplash.com/photo-1541888086225-f1262d0577d2?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "SEBA INTERNATIONAL",
      slug: "restauration",
      secteur: "Restauration & Traiteur",
      description: "Restauration, Boulangerie, Pâtisserie, Traiteur et Événementiel. Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité.",
      image_url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Print & Com SARL",
      slug: "print",
      secteur: "Communication & Impression",
      description: "Filiale spécialisée dans l'imprimerie professionnelle, la communication visuelle et l'organisation de grands événements.",
      image_url: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Mining SARL",
      slug: "mining",
      secteur: "Activités minières",
      description: "Filiale spécialisée dans les activités minières et la valorisation des ressources naturelles (exploration, exploitation, sous-traitance).",
      image_url: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Transit SARL",
      slug: "transit",
      secteur: "Transit, Logistique & Voyages",
      description: "Filiale spécialisée dans le transit, la logistique, le transport de marchandises et les services de voyage.",
      image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Fishing SARL",
      slug: "fishing",
      secteur: "Pêche & Ressources maritimes",
      description: "Filiale spécialisée dans les activités halieutiques et la valorisation des ressources maritimes.",
      image_url: "https://images.unsplash.com/photo-1597818451829-d5c4dc02be8d?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    }
  ];

  await db.delete(galerie);
  await db.delete(filiales);
  for (const f of FILIALES) {
    await db.insert(filiales).values(f).onConflictDoUpdate({
      target: [filiales.slug],
      set: {
        nom: f.nom,
        secteur: f.secteur,
        description: f.description,
        image_url: f.image_url,
        statut: f.statut
      }
    });
  }

  // 4. Page Contents
  console.log("Inserting page contents...");
  
  const pagesData = [
    // HOME PAGE
    { page_slug: "home", section_key: "hero_title_small", content_value: "MACOF HOLDING", content_type: "text" },
    { page_slug: "home", section_key: "hero_title_main", content_value: "L\\'art de façonner <br/><span class=\\"italic text-red-500 font-light\\">l\\'avenir.</span>", content_type: "text" },
    { page_slug: "home", section_key: "hero_desc", content_value: "Groupe guinéen structuré autour d\\'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l\\'économie.", content_type: "text" },
    { page_slug: "home", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", content_type: "text" },
    { page_slug: "home", section_key: "vision_title_small", content_value: "PRÉSENTATION GÉNÉRALE", content_type: "text" },
    { page_slug: "home", section_key: "vision_desc_1", content_value: "MACOF Holding incarne l\\'art de façonner l\\'avenir, en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.", content_type: "text" },
    { page_slug: "home", section_key: "vision_desc_2", content_value: "Notre mission : Structurer, piloter et développer nos filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur.", content_type: "text" },
    { page_slug: "home", section_key: "realisations", content_value: JSON.stringify([
      { title: "Projets Résidentiels", category: "Immobilier", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" },
      { title: "Gastronomie Premium", category: "Restauration", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop" },
      { title: "Exploitation Minière", category: "Mining", image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop" },
      { title: "Communication Visuelle", category: "Print & Com", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
      { title: "Transport Fret", category: "Transit", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" },
      { title: "Ressources Marines", category: "Fishing", image: "https://images.unsplash.com/photo-1522067823526-724bc2f8c512?q=80&w=1000&auto=format&fit=crop" },
    ]), content_type: "json" },
    { page_slug: "home", section_key: "actualites", content_value: JSON.stringify([
      { date: "Octobre 2026", category: "Institutionnel", title: "MACOF Holding réaffirme sa position de leader dans l\\'économie guinéenne", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" },
      { date: "Septembre 2026", category: "Immobilier", title: "Lancement de nouveaux projets d\\'infrastructures structurants", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop" },
      { date: "Août 2026", category: "Restauration", title: "SEBA International étend ses services de restauration collective", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop" },
    ]), content_type: "json" },

    // ABOUT PAGE
    { page_slug: "about", section_key: "hero_title", content_value: "MACOF <span class=\\"italic text-[#b8142b]\\">Holding</span>", content_type: "text" },
    { page_slug: "about", section_key: "hero_desc", content_value: "MACOF Holding est un groupe de droit guinéen structuré autour d\\'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l\\'économie. À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l\\'art de façonner l\\'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.", content_type: "text" },
    { page_slug: "about", section_key: "hero_img", content_value: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "about", section_key: "vision_text", content_value: "Devenir un groupe de référence, reconnu pour son excellence, sa performance durable et sa contribution au développement économique de la Guinée et au-delà de la sous-région ouest-africaine.", content_type: "text" },
    { page_slug: "about", section_key: "mission_text", content_value: "Structurer, piloter et développer ses filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur pour l\\'ensemble des parties prenantes — actionnaires, collaborateurs, partenaires, clients et la collectivité nationale.", content_type: "text" },
    { page_slug: "about", section_key: "valeurs_text", content_value: "Excellence - Viser l\\'excellence dans tout ce que nous entreprenons\\nInnovation - Innover en permanence pour rester à la pointe\\nIntégrité - Opérer avec transparence et respect de nos engagements\\nEngagement - S\\'engager envers nos clients, partenaires et communauté\\nResponsabilité - Contribuer au développement durable\\nEsprit d\\'équipe - Travailler ensemble pour atteindre l\\'excellence collective", content_type: "text" },
    { page_slug: "about", section_key: "historique_2018", content_value: "Fondation de MACOF SARL sous la forme d\\'une Société à Responsabilité Limitée (SARL) en République de Guinée, marquant le point de départ des activités du groupe.", content_type: "text" },
    { page_slug: "about", section_key: "historique_2023", content_value: "Évolution vers une Société Anonyme (SA), traduisant une phase d\\'expansion et de structuration renforcée, avec une gouvernance formelle et une capacité d\\'investissement élargie.", content_type: "text" },
    { page_slug: "about", section_key: "historique_2026", content_value: "Adoption d\\'un modèle de Holding afin d\\'optimiser la gouvernance, la coordination stratégique et le développement sectoriel du groupe, dans une logique de spécialisation par filiale.", content_type: "text" },
    { page_slug: "about", section_key: "org_text_1", content_value: "MACOF Holding développe ses activités à travers six filiales expertes dans leurs domaines respectifs, chacune dédiée à un secteur stratégique de l\\'économie guinéenne : Immobilier & BTP, Restauration & Traiteur, Communication & Impression, Activités minières, Transit & Logistique, et Pêche & Ressources halieutiques.", content_type: "text" },
    { page_slug: "about", section_key: "org_text_2", content_value: "La structure holding permet une coordination stratégique efficace tout en offrant à chaque filiale l\\'autonomie nécessaire pour exceller dans son domaine d\\'expertise spécifique.", content_type: "text" },

    // IMMOBILIER
    { page_slug: "immobilier", section_key: "hero_title", content_value: "MACOF Immobilier SARL", content_type: "text" },
    { page_slug: "immobilier", section_key: "hero_desc", content_value: "Filiale spécialisée dans l\\'investissement immobilier, la promotion et les travaux publics (BTP).", content_type: "text" },
    { page_slug: "immobilier", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "immobilier", section_key: "content_title", content_value: "Conception, Réalisation & Infrastructures", content_type: "text" },
    { page_slug: "immobilier", section_key: "content_body", content_value: "MACOF Immobilier SARL intervient dans la conception, la réalisation et la gestion de projets immobiliers et d\\'infrastructures structurants. Grâce à une organisation rigoureuse et à une expertise technique adaptée aux exigences du secteur, la filiale contribue activement au développement urbain et à la modernisation des infrastructures.", content_type: "text" },
    { page_slug: "immobilier", section_key: "services", content_value: JSON.stringify([
      "L\\'acquisition et la valorisation de terrains",
      "La conception et la construction de bâtiments résidentiels, commerciaux et administratifs",
      "La promotion et la commercialisation de biens immobiliers",
      "La gestion locative et patrimoniale",
      "Les travaux publics et ouvrages d\\'infrastructures",
      "Les travaux de réhabilitation, d\\'aménagement et de modernisation urbaine"
    ]), content_type: "json" },

    // RESTAURATION
    { page_slug: "restauration", section_key: "hero_title", content_value: "SEBA INTERNATIONAL", content_type: "text" },
    { page_slug: "restauration", section_key: "hero_desc", content_value: "Restauration, Boulangerie, Pâtisserie, Traiteur, Événementiel", content_type: "text" },
    { page_slug: "restauration", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "restauration", section_key: "content_title", content_value: "Excellence culinaire & Qualité", content_type: "text" },
    { page_slug: "restauration", section_key: "content_body", content_value: "Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité, structuré autour de deux pôles d\\'activités principaux : Le Pôle Boulangerie (fabrication quotidienne sur place, fraîcheur, saveur authentique) et Le Pôle Restauration (commerciale premium, collective structurée, événementielle et traiteur).", content_type: "text" },
    { page_slug: "restauration", section_key: "services", content_value: JSON.stringify([
      "Restauration commerciale premium : Expérience culinaire soignée",
      "Restauration collective structurée : Cantines d\\'entreprises et bases minières",
      "Restauration événementielle & traiteur : Mariages, conférences, cocktails",
      "Boulangerie & Pâtisserie : Fabrication artisanale quotidienne",
      "Fast-Foods & Pizzeria : Saveurs du monde et plats rapides",
      "Plats de résistance & Spécialités Africaines"
    ]), content_type: "json" },

    // PRINT
    { page_slug: "print", section_key: "hero_title", content_value: "MACOF Print & Com SARL", content_type: "text" },
    { page_slug: "print", section_key: "hero_desc", content_value: "Imprimerie professionnelle, communication visuelle et événementiel", content_type: "text" },
    { page_slug: "print", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "print", section_key: "content_title", content_value: "Valorisation de votre image", content_type: "text" },
    { page_slug: "print", section_key: "content_body", content_value: "Elle accompagne entreprises, institutions et organisations dans la conception et la valorisation de leur image. La filiale se distingue particulièrement par son expertise dans l\\'organisation et la gestion de grands événements, incluant le montage technique, la coordination logistique et l\\'accompagnement stratégique de manifestations.", content_type: "text" },
    { page_slug: "print", section_key: "services", content_value: JSON.stringify([
      "Création d\\'identités visuelles et de supports institutionnels",
      "Impression numérique et offset de haute qualité",
      "Production de supports publicitaires et signalétiques",
      "Montage technique et coordination logistique d\\'événements",
      "Accompagnement stratégique de manifestations publiques"
    ]), content_type: "json" },

    // MINING
    { page_slug: "mining", section_key: "hero_title", content_value: "MACOF Mining SARL", content_type: "text" },
    { page_slug: "mining", section_key: "hero_desc", content_value: "Activités minières et valorisation des ressources naturelles", content_type: "text" },
    { page_slug: "mining", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "mining", section_key: "content_title", content_value: "Exploitation responsable et durable", content_type: "text" },
    { page_slug: "mining", section_key: "content_body", content_value: "MACOF Mining SARL évolue dans le respect des normes réglementaires et environnementales, avec pour objectif de contribuer au développement durable et structuré du secteur minier guinéen.", content_type: "text" },
    { page_slug: "mining", section_key: "services", content_value: JSON.stringify([
      "Exploration et exploitation minière",
      "Sous-traitance et appui aux opérations minières",
      "Transport et commercialisation de produits miniers",
      "Respect rigoureux des normes environnementales",
      "Soutien au développement communautaire"
    ]), content_type: "json" },

    // TRANSIT
    { page_slug: "transit", section_key: "hero_title", content_value: "MACOF Transit SARL", content_type: "text" },
    { page_slug: "transit", section_key: "hero_desc", content_value: "Transit, logistique, transport de marchandises et services de voyage", content_type: "text" },
    { page_slug: "transit", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "transit", section_key: "content_title", content_value: "Fiabilité, conformité et efficacité", content_type: "text" },
    { page_slug: "transit", section_key: "content_body", content_value: "Grâce à une organisation structurée et à une parfaite maîtrise des procédures réglementaires, MACOF Transit SARL facilite les échanges commerciaux et les déplacements internationaux, en garantissant fiabilité, conformité et efficacité.", content_type: "text" },
    { page_slug: "transit", section_key: "services", content_value: JSON.stringify([
      "Le dédouanement et les formalités administratives",
      "Le transport national et international",
      "La gestion logistique et le suivi des expéditions",
      "L\\'assistance aux opérations d\\'import-export",
      "La vente de billets d\\'avion et l\\'accompagnement aux voyages"
    ]), content_type: "json" },

    // FISHING
    { page_slug: "fishing", section_key: "hero_title", content_value: "MACOF Fishing SARL", content_type: "text" },
    { page_slug: "fishing", section_key: "hero_desc", content_value: "Activités halieutiques et valorisation des ressources maritimes", content_type: "text" },
    { page_slug: "fishing", section_key: "hero_bg", content_value: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2000&auto=format&fit=crop", content_type: "text" },
    { page_slug: "fishing", section_key: "content_title", content_value: "Gestion responsable des ressources", content_type: "text" },
    { page_slug: "fishing", section_key: "content_body", content_value: "MACOF Fishing SARL contribue au développement du secteur de la pêche en garantissant qualité, respect des normes et gestion responsable des ressources maritimes de la Guinée.", content_type: "text" },
    { page_slug: "fishing", section_key: "services", content_value: JSON.stringify([
      "La pêche artisanale et industrielle",
      "La transformation et la conservation des produits halieutiques",
      "La commercialisation et la distribution des produits de la mer",
      "Activités liées à l\\'exploitation durable des ressources marines",
      "Contrôle qualité et respect des normes sanitaires"
    ]), content_type: "json" }
  ];

  await db.delete(page_contents); // clear existing
  
  for (const page of pagesData) {
    await db.insert(page_contents).values({
      page_slug: page.page_slug,
      section_key: page.section_key,
      content_value: page.content_value,
      content_type: page.content_type,
    }).onConflictDoUpdate({
      target: [page_contents.page_slug, page_contents.section_key],
      set: {
        content_value: page.content_value,
        content_type: page.content_type,
      }
    });
  }

  console.log("Seed completed successfully!");
}

seed().catch(console.error).finally(() => process.exit(0));
`;

fs.writeFileSync(path.join(__dirname, "src/db/seed.ts"), seedContent);
console.log("seed.ts generated successfully.");

```
### .\api\query.cjs
```cjs
const { Client } = require('pg');
const client = new Client('postgresql://neondb_owner:npg_HVqK5hjQn7uF@ep-rough-bird-ayomyi9a-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require');
client.connect().then(() => {
  return client.query("SELECT section_key, content_value FROM page_contents WHERE page_slug = 'home' AND section_key IN ('temoignages', 'realisations')");
}).then(res => {
  console.log(JSON.stringify(res.rows, null, 2));
  return client.query("SELECT * FROM galerie");
}).then(res => {
  console.log('--- GALERIE ---');
  console.log(JSON.stringify(res.rows, null, 2));
  client.end();
}).catch(console.error);

```
### .\api\query.ts
```ts
import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://neondb_owner:npg_HVqK5hjQn7uF@ep-rough-bird-ayomyi9a-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require');

async function main() {
  const pages = await sql`SELECT section_key, content_value FROM page_contents WHERE page_slug = 'home' AND section_key IN ('temoignages', 'realisations')`;
  console.log('--- PAGE CONTENTS ---');
  console.log(JSON.stringify(pages, null, 2));

  const galerie = await sql`SELECT * FROM galerie`;
  console.log('--- GALERIE ---');
  console.log(JSON.stringify(galerie, null, 2));
}

main().catch(console.error);

```
### .\api\test-post-auth.ts
```ts
import axios from 'axios';
import { db } from './src/db/client';
import { administrateurs } from './src/db/schema';
import { eq } from 'drizzle-orm';
import * as jwt from 'jose';

async function run() {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'secret_temporaire_pour_dev');
    const token = await new jwt.SignJWT({ id: 1, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1d')
      .sign(secret);
      
    const res = await axios.post('http://127.0.0.1:3001/api/v1/admin/pages/home', {
      key: 'test',
      value: 'test_value'
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('SUCCESS:', res.status, res.data);
  } catch (e: any) {
    console.error('ERROR:', e.response?.status, e.response?.data);
  }
}
run();

```
### .\api\test-post.ts
```ts
import axios from 'axios';

async function run() {
  try {
    const res = await axios.post('http://127.0.0.1:3001/api/v1/admin/pages/home', {
      key: 'test',
      value: 'test_value'
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('SUCCESS:', res.status, res.data);
  } catch (e: any) {
    console.error('ERROR:', e.response?.status, e.response?.data);
  }
}
run();

```
### .\api\test-tsx.ts
```ts
console.log("TSX is working");

```
### .\api\test-vite-post.ts
```ts
import axios from 'axios';
import { db } from './src/db/client';
import { administrateurs } from './src/db/schema';
import { eq } from 'drizzle-orm';
import * as jwt from 'jose';

async function run() {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'secret_temporaire_pour_dev');
    const token = await new jwt.SignJWT({ id: 1, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1d')
      .sign(secret);
      
    // Hit Vite dev server on 5173 instead of API on 3001
    const res = await axios.post('http://localhost:5173/api/v1/admin/pages/home', {
      key: 'test',
      value: 'test_value'
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('SUCCESS:', res.status, res.data);
  } catch (e: any) {
    console.error('ERROR:', e.response?.status, e.response?.data);
  }
}
run();

```
### .\api\truncate.cjs
```cjs
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function run() {
  console.log('Truncating tables...');
  try {
    await sql`TRUNCATE TABLE page_contents, settings, chatbot_logs, galerie, catalogues, demandes_contact, administrateurs, filiales CASCADE`;
    console.log('All tables truncated successfully.');
  } catch (err) {
    console.error('Error truncating tables:', err);
    process.exit(1);
  }
}

run();

```
### .\api\verify_db.cjs
```cjs
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function verify() {
  const tables = [
    'page_contents',
    'settings',
    'chatbot_logs',
    'galerie',
    'catalogues',
    'demandes_contact',
    'administrateurs',
    'filiales'
  ];

  console.log('--- DB VERIFICATION REPORT ---');
  for (const table of tables) {
    try {
      const result = await sql.query("SELECT COUNT(*) as count FROM " + table);
      console.log("Table '" + table + "': " + result.rows[0].count + " rows");
    } catch (err) {
      console.error(`Error querying table '${table}': ${err.message}`);
    }
  }
  console.log('------------------------------');
}

verify();

```
### .\api\src\config.ts
```ts
import 'dotenv/config';

export const config = {
  databaseUrl: process.env.DATABASE_URL!,
  jwtSecret: process.env.JWT_SECRET!,
  blobToken: process.env.BLOB_READ_WRITE_TOKEN || '',
  nodeEnv: process.env.NODE_ENV || 'development',
};

```
### .\api\src\index.ts
```ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { corsMiddleware } from './middleware/cors';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth.routes';
import contactRoutes from './routes/contact.routes';
import filialesRoutes from './routes/filiales.routes';
import galerieRoutes from './routes/galerie.routes';
import cataloguesRoutes from './routes/catalogues.routes';
import pagesRoutes from './routes/pages.routes';
import settingsRoutes from './routes/settings.routes';
import { eventsRoutes } from './routes/events.routes';
import { adminRoutes } from './routes/admin/auth.routes';

const app = new Hono();

app.use('*', async (c, next) => {
  console.log(`[REQ] ${c.req.method} ${c.req.url}`);
  await next();
});
app.use('*', corsMiddleware());
app.onError(errorHandler);

// Serve locally uploaded files (dev fallback when Vercel Blob is not configured)
app.use('/uploads/*', serveStatic({ root: './storage/' }));

// ─── Health Check ──────────────────────────────────────────────────────────

app.get('/api/health', (c) => {
  return c.json({
    success: true,
    message: 'MACOF Holding API - Serveur operationnel',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ─── Public Routes (v1) ────────────────────────────────────────────────────────

app.route('/api/v1/auth', authRoutes);
app.route('/api/v1/demandes', contactRoutes);
app.route('/api/v1/filiales', filialesRoutes);
app.route('/api/v1/galerie', galerieRoutes);
app.route('/api/v1/catalogues', cataloguesRoutes);
app.route('/api/v1/pages', pagesRoutes);
app.route('/api/v1/settings', settingsRoutes);
app.route('/api/v1/events', eventsRoutes);

// ─── Admin Routes (v1) ──────────────────────────────────────────────────────

app.route('/api/v1/admin', adminRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────────────

app.notFound((c) => {
  return c.json(
    {
      success: false,
      message: `Route non trouvee: ${c.req.method} ${c.req.url}`,
    },
    404,
  );
});

// ─── Export for Vercel ─────────────────────────────────────────────────────

export default app;

// ─── Local Dev Server ──────────────────────────────────────────────────────

const port = Number(process.env.PORT) || 3001;
console.log(`\n🚀 MACOF API Server → http://localhost:${port}\n`);

serve({ fetch: app.fetch, port });

```
### .\api\src\db\client.ts
```ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from '../config';

const sql = neon(config.databaseUrl);
export const db = drizzle(sql);

```
### .\api\src\db\schema.ts
```ts
import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  jsonb,
  integer,
  pgEnum,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── Enums ───────────────────────────────────────────────────────────────────

export const adminRoleEnum = pgEnum("admin_role", ["admin", "gestionnaire"]);

export const statutDemandeEnum = pgEnum("statut_demande", [
  "nouveau",
  "en_cours",
  "traite",
  "archive",
]);

export const typeDemandeEnum = pgEnum("type_demande", [
  "information",
  "devis",
  "partenariat",
  "reclamation",
  "autre",
]);

export const typeDocumentEnum = pgEnum("type_document", [
  "catalogue",
  "brochure",
  "plaquette",
  "fiche_technique",
  "autre",
]);

export const typeProjetEnum = pgEnum("type_projet", [
  "residentiel",
  "commercial",
  "infrastructure",
  "evenement",
  "production",
  "logistique",
  "autre",
]);

export const statutFilialeEnum = pgEnum("statut_filiale", ["actif", "inactif"]);

export const statutResolutionEnum = pgEnum("statut_resolution", [
  "resolu",
  "non_resolu",
  "en_attente",
]);

export const civiliteEnum = pgEnum("civilite", ["monsieur", "madame"]);

// ─── Filiales ────────────────────────────────────────────────────────────────

export const filiales = pgTable("filiales", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  secteur: varchar("secteur", { length: 255 }).notNull(),
  image_url: text("image_url"),
  details_json: jsonb("details_json"),
  email: varchar("email", { length: 255 }),
  telephone: varchar("telephone", { length: 50 }),
  adresse: text("adresse"),
  site_web: varchar("site_web", { length: 500 }),
  statut: statutFilialeEnum("statut").default("actif").notNull(),
  archived: boolean("archived").default(false).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Administrateurs ─────────────────────────────────────────────────────────

export const administrateurs = pgTable("administrateurs", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  role: adminRoleEnum("role").default("admin").notNull(),
  filiale_attribuee: integer("filiale_attribuee").references(() => filiales.id), // ✅ Ajout de la contrainte FK
  archived: boolean("archived").default(false).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Demandes de contact ────────────────────────────────────────────────────

export const demandes_contact = pgTable(
  "demandes_contact",
  {
    id: serial("id").primaryKey(),
    reference: varchar("reference", { length: 50 }).notNull().unique(),
    filiale: integer("filiale").references(() => filiales.id),
    type_demande: typeDemandeEnum("type_demande")
      .default("information")
      .notNull(),
    civilite: civiliteEnum("civilite"),
    nom_complet: varchar("nom_complet", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    telephone: varchar("telephone", { length: 50 }),
    societe: varchar("societe", { length: 255 }),
    fonction: varchar("fonction", { length: 255 }),
    objet: varchar("objet", { length: 500 }),
    message: text("message").notNull(),
    details_json: jsonb("details_json"),
    piece_jointe_path: text("piece_jointe_path"),
    statut: statutDemandeEnum("statut").default("nouveau").notNull(),
    notes_internes: text("notes_internes"),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    archived: boolean("archived").default(false).notNull(),
  },
  (self) => [
    index("idx_demandes_filiale").on(self.filiale),
    index("idx_demandes_statut").on(self.statut),
    index("idx_demandes_created").on(self.created_at),
  ],
);

// ─── Catalogues ───────────────────────────────────────────────────────────────

export const catalogues = pgTable(
  "catalogues",
  {
    id: serial("id").primaryKey(),
    titre: varchar("titre", { length: 255 }).notNull(),
    filiale: integer("filiale").references(() => filiales.id),
    type_document: typeDocumentEnum("type_document")
      .default("catalogue")
      .notNull(),
    file_path: text("file_path").notNull(),
    taille_ko: integer("taille_ko"),
    format: varchar("format", { length: 20 }).notNull(),
    telechargements: integer("telechargements").default(0).notNull(),
    archived: boolean("archived").default(false).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_catalogues_filiale").on(self.filiale)],
);

// ─── Galerie ─────────────────────────────────────────────────────────────────

export const galerie = pgTable(
  "galerie",
  {
    id: serial("id").primaryKey(),
    titre: varchar("titre", { length: 255 }).notNull(),
    filiale: integer("filiale").references(() => filiales.id),
    type_projet: typeProjetEnum("type_projet"),
    lieu: varchar("lieu", { length: 255 }),
    date_realisation: varchar("date_realisation", { length: 50 }),
    description_courte: text("description_courte"),
    image_path: text("image_path").notNull(),
    archived: boolean("archived").default(false).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_galerie_filiale").on(self.filiale)],
);

// ─── Chatbot logs ───────────────────────────────────────────────────────────

export const chatbot_logs = pgTable(
  "chatbot_logs",
  {
    id: serial("id").primaryKey(),
    session_id: varchar("session_id", { length: 255 }).notNull(),
    intention_detectee: varchar("intention_detectee", { length: 255 }),
    filiale_orientee: integer("filiale_orientee").references(() => filiales.id),
    conversation_json: jsonb("conversation_json"),
    statut_resolution: statutResolutionEnum("statut_resolution")
      .default("en_attente")
      .notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_chatbot_session").on(self.session_id)],
);

// ─── Page contents (CMS) ────────────────────────────────────────────────────

export const page_contents = pgTable(
  "page_contents",
  {
    id: serial("id").primaryKey(),
    page_slug: varchar("page_slug", { length: 255 }).notNull(),
    section_key: varchar("section_key", { length: 255 }).notNull(),
    content_value: text("content_value"),
    content_type: varchar("content_type", { length: 50 })
      .default("text")
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [
    uniqueIndex("idx_page_slug_section").on(self.page_slug, self.section_key),
  ],
);

// ─── Settings ───────────────────────────────────────────────────────────────

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  value: text("value"),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Drizzle ORM Relations ──────────────────────────────────────────────────

export const filialesRelations = relations(filiales, ({ many }) => ({
  demandes: many(demandes_contact),
  catalogues: many(catalogues),
  galerieItems: many(galerie),
  administrateurs: many(administrateurs),
  chatbotLogs: many(chatbot_logs),
}));

export const demandesContactRelations = relations(
  demandes_contact,
  ({ one }) => ({
    filialeData: one(filiales, {
      fields: [demandes_contact.filiale],
      references: [filiales.id],
    }),
  }),
);

export const administrateursRelations = relations(
  administrateurs,
  ({ one }) => ({
    filiale: one(filiales, {
      fields: [administrateurs.filiale_attribuee],
      references: [filiales.id],
    }),
  }),
);

export const cataloguesRelations = relations(catalogues, ({ one }) => ({
  filialeData: one(filiales, {
    fields: [catalogues.filiale],
    references: [filiales.id],
  }),
}));

export const galerieRelations = relations(galerie, ({ one }) => ({
  filialeData: one(filiales, {
    fields: [galerie.filiale],
    references: [filiales.id],
  }),
}));

// ─── Type exports for convenience ───────────────────────────────────────────

export type Filiale = typeof filiales.$inferSelect;
export type NewFiliale = typeof filiales.$inferInsert;
export type Administrateur = typeof administrateurs.$inferSelect;
export type NewAdministrateur = typeof administrateurs.$inferInsert;
export type DemandeContact = typeof demandes_contact.$inferSelect;
export type NewDemandeContact = typeof demandes_contact.$inferInsert;
export type Catalogue = typeof catalogues.$inferSelect;
export type NewCatalogue = typeof catalogues.$inferInsert;
export type GalerieItem = typeof galerie.$inferSelect;
export type NewGalerieItem = typeof galerie.$inferInsert;
export type ChatbotLog = typeof chatbot_logs.$inferSelect;
export type NewChatbotLog = typeof chatbot_logs.$inferInsert;
export type PageContent = typeof page_contents.$inferSelect;
export type NewPageContent = typeof page_contents.$inferInsert;
export type Setting = typeof settings.$inferSelect;
export type NewSetting = typeof settings.$inferInsert;

```
### .\api\src\db\seed.ts
```ts
import { db } from "./client";
import {
  administrateurs,
  filiales,
  page_contents,
  galerie,
  settings,
} from "./schema";
import { hash } from "bcryptjs";

async function seed() {
  console.log("🌱 Démarrage du seeding de la base de données...");

  // 1. Admin
  console.log("👤 Insertion de l'administrateur...");
  const hashedPassword = await hash("Macof2024!", 10);
  await db
    .insert(administrateurs)
    .values({
      nom: "Admin MACOF",
      email: "admin@macof-holding.com",
      password_hash: hashedPassword,
      role: "admin",
    })
    .onConflictDoNothing();

  // 2. Settings (Contact Info)
  console.log("⚙️ Insertion des paramètres globaux (settings)...");
  await db
    .insert(settings)
    .values([
      { key: "site_title", value: "MACOF Holding" },
      { key: "contact_email", value: "macofholding2018@gmail.com" },
      { key: "contact_phone", value: "+224 625 74 46 26 / +224 623 98 75 11" },
      {
        key: "contact_address",
        value: "Manquepa en face de banc bleu / Kaloum / République de Guinée",
      },
    ])
    .onConflictDoNothing();

  // 3. Filiales
  console.log("🏢 Insertion des filiales...");
  const FILIALES = [
    {
      nom: "MACOF Immobilier SARL",
      slug: "immobilier",
      secteur: "Immobilier & BTP",
      description:
        "Filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP). Elle intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurants.",
      image_url:
        "https://images.unsplash.com/photo-1541888086225-f1262d0577d2?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "SEBA INTERNATIONAL",
      slug: "restauration",
      secteur: "Restauration & Traiteur",
      description:
        "Restauration, Boulangerie, Pâtisserie, Traiteur et Événementiel. Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité.",
      image_url:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Print & Com SARL",
      slug: "print",
      secteur: "Communication & Impression",
      description:
        "Filiale spécialisée dans l'imprimerie professionnelle, la communication visuelle et l'organisation de grands événements.",
      image_url:
        "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Mining SARL",
      slug: "mining",
      secteur: "Activités minières",
      description:
        "Filiale spécialisée dans les activités minières et la valorisation des ressources naturelles (exploration, exploitation, sous-traitance).",
      image_url:
        "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
      statut: "actif",
    },
    {
      nom: "MACOF Transit SARL",
      slug: "transit",
      secteur: "Transit, Logistique & Voyages",
      description:
        "Filiale spécialisée dans le transit, la logistique, le transport de marchandises et les services de voyage.",
      image_url:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Fishing SARL",
      slug: "fishing",
      secteur: "Pêche & Ressources maritimes",
      description:
        "Filiale spécialisée dans les activités halieutiques et la valorisation des ressources maritimes.",
      image_url:
        "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
      statut: "actif",
    },
  ];

  await db.delete(galerie);
  await db.delete(filiales);

  for (const f of FILIALES) {
    await db
      .insert(filiales)
      .values(f as any)
      .onConflictDoUpdate({
        target: filiales.slug,
        set: {
          nom: f.nom,
          secteur: f.secteur,
          description: f.description,
          image_url: f.image_url,
          statut: f.statut as any,
        },
      });
  }

  // 4. Page Contents
  console.log("📄 Insertion des contenus de pages (page_contents)...");

  const pagesData = [
    // HOME PAGE
    {
      page_slug: "home",
      section_key: "hero_title_small",
      content_value: "MACOF HOLDING",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_title_main",
      content_value:
        "L'art de façonner <br/><span class=\"italic text-red-500 font-light\">l'avenir.</span>",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_desc",
      content_value:
        "Groupe guinéen structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_title_small",
      content_value: "PRÉSENTATION GÉNÉRALE",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_desc_1",
      content_value:
        "MACOF Holding incarne l'art de façonner l'avenir, en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_desc_2",
      content_value:
        "Notre mission : Structurer, piloter et développer nos filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "realisations",
      content_value: JSON.stringify([
        {
          title: "Projets Résidentiels",
          category: "Immobilier",
          image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Gastronomie Premium",
          category: "Restauration",
          image:
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Exploitation Minière",
          category: "Mining",
          image:
            "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
        },
        {
          title: "Communication Visuelle",
          category: "Print & Com",
          image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Transport Fret",
          category: "Transit",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Ressources Marines",
          category: "Fishing",
          image:
            "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
        },
      ]),
      content_type: "json",
    },
    {
      page_slug: "home",
      section_key: "actualites",
      content_value: JSON.stringify([
        {
          date: "Octobre 2026",
          category: "Institutionnel",
          title:
            "MACOF Holding réaffirme sa position de leader dans l'économie guinéenne",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
        },
        {
          date: "Septembre 2026",
          category: "Immobilier",
          title: "Lancement de nouveaux projets d'infrastructures structurants",
          image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
        },
        {
          date: "Août 2026",
          category: "Restauration",
          title:
            "SEBA International étend ses services de restauration collective",
          image:
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop",
        },
      ]),
      content_type: "json",
    },

    // ABOUT PAGE
    {
      page_slug: "about",
      section_key: "hero_title",
      content_value: 'MACOF <span class="italic text-[#b8142b]">Holding</span>',
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "hero_desc",
      content_value:
        "MACOF Holding est un groupe de droit guinéen structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie. À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "hero_img",
      content_value:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "vision_text",
      content_value:
        "Devenir un groupe de référence, reconnu pour son excellence, sa performance durable et sa contribution au développement économique de la Guinée et au-delà de la sous-région ouest-africaine.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "mission_text",
      content_value:
        "Structurer, piloter et développer ses filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur pour l'ensemble des parties prenantes — actionnaires, collaborateurs, partenaires, clients et la collectivité nationale.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "valeurs_text",
      content_value:
        "Excellence - Viser l'excellence dans tout ce que nous entreprenons\nInnovation - Innover en permanence pour rester à la pointe\nIntégrité - Opérer avec transparence et respect de nos engagements\nEngagement - S'engager envers nos clients, partenaires et communauté\nResponsabilité - Contribuer au développement durable\nEsprit d'équipe - Travailler ensemble pour atteindre l'excellence collective",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2018",
      content_value:
        "Fondation de MACOF SARL sous la forme d'une Société à Responsabilité Limitée (SARL) en République de Guinée, marquant le point de départ des activités du groupe.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2023",
      content_value:
        "Évolution vers une Société Anonyme (SA), traduisant une phase d'expansion et de structuration renforcée, avec une gouvernance formelle et une capacité d'investissement élargie.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2026",
      content_value:
        "Adoption d'un modèle de Holding afin d'optimiser la gouvernance, la coordination stratégique et le développement sectoriel du groupe, dans une logique de spécialisation par filiale.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "org_text_1",
      content_value:
        "MACOF Holding développe ses activités à travers six filiales expertes dans leurs domaines respectifs, chacune dédiée à un secteur stratégique de l'économie guinéenne : Immobilier & BTP, Restauration & Traiteur, Communication & Impression, Activités minières, Transit & Logistique, et Pêche & Ressources halieutiques.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "org_text_2",
      content_value:
        "La structure holding permet une coordination stratégique efficace tout en offrant à chaque filiale l'autonomie nécessaire pour exceller dans son domaine d'expertise spécifique.",
      content_type: "text",
    },

    // IMMOBILIER
    {
      page_slug: "immobilier",
      section_key: "hero_title",
      content_value: "MACOF Immobilier SARL",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "hero_desc",
      content_value:
        "Filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP).",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "content_title",
      content_value: "Conception, Réalisation & Infrastructures",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "content_body",
      content_value:
        "MACOF Immobilier SARL intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurants. Grâce à une organisation rigoureuse et à une expertise technique adaptée aux exigences du secteur, la filiale contribue activement au développement urbain et à la modernisation des infrastructures.",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "services",
      content_value: JSON.stringify([
        "L'acquisition et la valorisation de terrains",
        "La conception et la construction de bâtiments résidentiels, commerciaux et administratifs",
        "La promotion et la commercialisation de biens immobiliers",
        "La gestion locative et patrimoniale",
        "Les travaux publics et ouvrages d'infrastructures",
        "Les travaux de réhabilitation, d'aménagement et de modernisation urbaine",
      ]),
      content_type: "json",
    },

    // RESTAURATION
    {
      page_slug: "restauration",
      section_key: "hero_title",
      content_value: "SEBA INTERNATIONAL",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "hero_desc",
      content_value:
        "Restauration, Boulangerie, Pâtisserie, Traiteur, Événementiel",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "content_title",
      content_value: "Excellence culinaire & Qualité",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "content_body",
      content_value:
        "Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité, structuré autour de deux pôles d'activités principaux : Le Pôle Boulangerie (fabrication quotidienne sur place, fraîcheur, saveur authentique) et Le Pôle Restauration (commerciale premium, collective structurée, événementielle et traiteur).",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "services",
      content_value: JSON.stringify([
        "Restauration commerciale premium : Expérience culinaire soignée",
        "Restauration collective structurée : Cantines d'entreprises et bases minières",
        "Restauration événementielle & traiteur : Mariages, conférences, cocktails",
        "Boulangerie & Pâtisserie : Fabrication artisanale quotidienne",
        "Fast-Foods & Pizzeria : Saveurs du monde et plats rapides",
        "Plats de résistance & Spécialités Africaines",
      ]),
      content_type: "json",
    },

    // PRINT
    {
      page_slug: "print",
      section_key: "hero_title",
      content_value: "MACOF Print & Com SARL",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "hero_desc",
      content_value:
        "Imprimerie professionnelle, communication visuelle et événementiel",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "content_title",
      content_value: "Valorisation de votre image",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "content_body",
      content_value:
        "Elle accompagne entreprises, institutions et organisations dans la conception et la valorisation de leur image. La filiale se distingue particulièrement par son expertise dans l'organisation et la gestion de grands événements, incluant le montage technique, la coordination logistique et l'accompagnement stratégique de manifestations.",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "services",
      content_value: JSON.stringify([
        "Création d'identités visuelles et de supports institutionnels",
        "Impression numérique et offset de haute qualité",
        "Production de supports publicitaires et signalétiques",
        "Montage technique et coordination logistique d'événements",
        "Accompagnement stratégique de manifestations publiques",
      ]),
      content_type: "json",
    },

    // MINING
    {
      page_slug: "mining",
      section_key: "hero_title",
      content_value: "MACOF Mining SARL",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "hero_desc",
      content_value:
        "Activités minières et valorisation des ressources naturelles",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "hero_bg",
      content_value:
        "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "content_title",
      content_value: "Exploitation responsable et durable",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "content_body",
      content_value:
        "MACOF Mining SARL évolue dans le respect des normes réglementaires et environnementales, avec pour objectif de contribuer au développement durable et structuré du secteur minier guinéen.",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "services",
      content_value: JSON.stringify([
        "Exploration et exploitation minière",
        "Sous-traitance et appui aux opérations minières",
        "Transport et commercialisation de produits miniers",
        "Respect rigoureux des normes environnementales",
        "Soutien au développement communautaire",
      ]),
      content_type: "json",
    },

    // TRANSIT
    {
      page_slug: "transit",
      section_key: "hero_title",
      content_value: "MACOF Transit SARL",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "hero_desc",
      content_value:
        "Transit, logistique, transport de marchandises et services de voyage",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "content_title",
      content_value: "Fiabilité, conformité et efficacité",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "content_body",
      content_value:
        "Grâce à une organisation structurée et à une parfaite maîtrise des procédures réglementaires, MACOF Transit SARL facilite les échanges commerciaux et les déplacements internationaux, en garantissant fiabilité, conformité et efficacité.",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "services",
      content_value: JSON.stringify([
        "Le dédouanement et les formalités administratives",
        "Le transport national et international",
        "La gestion logistique et le suivi des expéditions",
        "L'assistance aux opérations d'import-export",
        "La vente de billets d'avion et l'accompagnement aux voyages",
      ]),
      content_type: "json",
    },

    // FISHING
    {
      page_slug: "fishing",
      section_key: "hero_title",
      content_value: "MACOF Fishing SARL",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "hero_desc",
      content_value:
        "Activités halieutiques et valorisation des ressources maritimes",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "hero_bg",
      content_value:
        "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "content_title",
      content_value: "Gestion responsable des ressources",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "content_body",
      content_value:
        "MACOF Fishing SARL contribue au développement du secteur de la pêche en garantissant qualité, respect des normes et gestion responsable des ressources maritimes de la Guinée.",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "services",
      content_value: JSON.stringify([
        "La pêche artisanale et industrielle",
        "La transformation et la conservation des produits halieutiques",
        "La commercialisation et la distribution des produits de la mer",
        "Activités liées à l'exploitation durable des ressources marines",
        "Contrôle qualité et respect des normes sanitaires",
      ]),
      content_type: "json",
    },
  ];

  await db.delete(page_contents); // Nettoyage de la table

  for (const page of pagesData) {
    await db
      .insert(page_contents)
      .values({
        page_slug: page.page_slug,
        section_key: page.section_key,
        content_value: page.content_value,
        content_type: page.content_type,
      })
      .onConflictDoUpdate({
        target: [page_contents.page_slug, page_contents.section_key],
        set: {
          content_value: page.content_value,
          content_type: page.content_type,
        },
      });
  }

  console.log("🎉 Seeding terminé avec succès !");
}

seed()
  .catch((error) => {
    console.error("❌ Erreur lors du seeding :", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });

```
### .\api\src\middleware\auth.ts
```ts
import type { Context, Next } from 'hono';
import { verifyToken, type TokenPayload } from '../services/jwt';
import { error } from '../utils/response';

export interface AuthUser extends TokenPayload {}

export const authMiddleware = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(c, 'Token d\'authentification manquant', 401);
  }

  const token = authHeader.substring(7);

  // Only wrap token verification: downstream handler errors must NOT
  // be swallowed and reported as 401.
  try {
    const payload = await verifyToken(token);
    c.set('user', payload as AuthUser);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Token invalide ou expire';
    return error(c, message, 401);
  }

  await next();
};

```
### .\api\src\middleware\cors.ts
```ts
import type { Context, Next } from "hono";
import { cors } from "hono/cors";

const ALLOWED_ORIGINS: string[] = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:4173",
  "https://macof-holding.com",
  "https://www.macof-holding.com",
  "https://macof-holding-frontend.vercel.app",
  "https://macof-holding-frontend-git-main-travaileinsof-1730s-projects.vercel.app",
];

export const corsMiddleware = () => {
  return cors({
    origin: (origin: string | undefined, c: Context) => {
      if (!origin) return "*";

      if (process.env.NODE_ENV === "development") {
        return origin;
      }

      if (ALLOWED_ORIGINS.includes(origin)) {
        return origin;
      }

      return ALLOWED_ORIGINS[0];
    },
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposeHeaders: ["Content-Length", "X-Request-Id"],
    maxAge: 86400,
    credentials: true,
  });
};

```
### .\api\src\middleware\errorHandler.ts
```ts
import type { Context } from 'hono';
import type { ZodError } from 'zod';
import { error } from '../utils/response';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export function errorHandler(err: Error, c: Context) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${err.message}`, err.stack);

  // Handle Zod validation errors
  if (isZodError(err)) {
    const firstIssue = err.issues?.[0];
    const message = firstIssue?.message || 'Donnees invalides';
    return error(c, message, 422);
  }

  // Handle custom app errors with status
  const appError = err as AppError;
  if (appError.status) {
    return error(c, appError.message, appError.status);
  }

  // Handle JSON parse errors
  if (err.message.includes('JSON') || err.message.includes('json')) {
    return error(c, 'Donnees JSON invalides', 400);
  }

  // Default internal server error
  if (process.env.NODE_ENV === 'production') {
    return error(c, 'Une erreur interne est survenue', 500);
  }

  return error(c, `Erreur interne: ${err.message}`, 500);
}

function isZodError(err: Error): err is ZodError {
  return 'issues' in err && Array.isArray((err as ZodError).issues);
}

```
### .\api\src\routes\auth.routes.ts
```ts
import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { administrateurs } from "../db/schema";
import { compare } from "bcryptjs";
import { generateToken, verifyToken } from "../services/jwt";
import { success, error } from "../utils/response";
import { loginSchema } from "../utils/validation";

const authRoutes = new Hono();

// Helper de validation sécurisé
function getValidationError(err: unknown): string {
  if (err && typeof err === "object" && "issues" in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || "Données invalides";
  }
  if (err instanceof Error) return err.message;
  return "Données invalides";
}

// POST /api/auth/login
authRoutes.post("/login", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return error(c, "Corps de la requête invalide ou JSON corrompu", 400);
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { email, password } = parsed.data;
  const normalizedEmail = email.toLowerCase().trim();

  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.email, normalizedEmail))
    .limit(1);

  if (!admin) {
    return error(c, "Email ou mot de passe incorrect", 401);
  }

  if (admin.archived) {
    return error(c, "Compte désactivé. Contactez l'administrateur.", 403);
  }

  const isValid = await compare(password, admin.password_hash);
  if (!isValid) {
    return error(c, "Email ou mot de passe incorrect", 401);
  }

  const token = await generateToken({
    sub: admin.id,
    email: admin.email,
    role: admin.role,
    nom: admin.nom,
    filialeAttribuee: admin.filiale_attribuee,
  });

  return success(
    c,
    {
      token,
      user: {
        id: admin.id,
        nom: admin.nom,
        email: admin.email,
        role: admin.role,
        filiale_attribuee: admin.filiale_attribuee,
      },
    },
    "Connexion réussie",
  );
});

// GET /api/auth/me
authRoutes.get("/me", async (c) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return error(c, "Token manquant", 401);
  }

  const token = authHeader.substring(7);

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Token invalide ou expiré";
    return error(c, message, 401);
  }

  // Sélection explicite des champs (exclut le password_hash)
  const [admin] = await db
    .select({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
    })
    .from(administrateurs)
    .where(eq(administrateurs.id, payload.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Utilisateur non trouvé", 404);
  }

  // Vérification de sécurité : bloquer immédiatement les comptes archivés
  if (admin.archived) {
    return error(c, "Compte désactivé. Contactez l'administrateur.", 403);
  }

  const { archived, ...userData } = admin;

  return success(c, userData);
});

export default authRoutes;

```
### .\api\src\routes\catalogues.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, or } from "drizzle-orm";
import { db } from "../db/client";
import { catalogues, filiales } from "../db/schema";
import { success, error } from "../utils/response";

const cataloguesRoutes = new Hono();

// Helper pour résoudre une filiale (par ID, Slug ou Nom)
async function resolveFilialeId(value: string): Promise<number | null> {
  const isNumeric = /^\d+$/.test(value);
  if (isNumeric) return parseInt(value, 10);

  const [row] = await db
    .select({ id: filiales.id })
    .from(filiales)
    .where(or(eq(filiales.slug, value), eq(filiales.nom, value)))
    .limit(1);

  return row?.id ?? null;
}

// GET /api/v1/catalogues - List catalogues (public)
cataloguesRoutes.get("/", async (c) => {
  const filialeFilter = c.req.query("filiale");
  const typeFilter = c.req.query("type_document");

  // Sécurisation de la pagination contre NaN et valeurs < 1
  const rawPage = parseInt(c.req.query("page") || "1", 10);
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const rawLimit = parseInt(c.req.query("limit") || "50", 10);
  const limit = isNaN(rawLimit) || rawLimit < 1 ? 50 : Math.min(rawLimit, 100);

  const offset = (page - 1) * limit;
  const conditions = [eq(catalogues.archived, false)];

  // Filtrage par filiale
  if (filialeFilter) {
    const fid = await resolveFilialeId(filialeFilter);
    if (fid === null) {
      // Filiale non trouvée => Retourner directement un résultat vide
      return success(c, {
        items: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      });
    }
    conditions.push(eq(catalogues.filiale, fid));
  }

  // Filtrage par type de document
  if (typeFilter) {
    conditions.push(
      eq(
        catalogues.type_document,
        typeFilter as
          | "catalogue"
          | "brochure"
          | "plaquette"
          | "fiche_technique"
          | "autre",
      ),
    );
  }

  // Requête principale
  const rows = await db
    .select({
      id: catalogues.id,
      titre: catalogues.titre,
      filiale: catalogues.filiale,
      filiale_nom: filiales.nom,
      type_document: catalogues.type_document,
      file_path: catalogues.file_path,
      taille_ko: catalogues.taille_ko,
      format: catalogues.format,
      telechargements: catalogues.telechargements,
      archived: catalogues.archived,
      created_at: catalogues.created_at,
      updated_at: catalogues.updated_at,
    })
    .from(catalogues)
    .leftJoin(filiales, eq(catalogues.filiale, filiales.id))
    .where(and(...conditions))
    .orderBy(desc(catalogues.created_at))
    .limit(limit)
    .offset(offset);

  // Compte total des résultats
  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(catalogues)
    .where(and(...conditions));

  const total = Number(countResult?.count || 0);

  return success(c, {
    items: rows,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/v1/catalogues/:id/download - Increment download count
cataloguesRoutes.get("/:id/download", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const [catalogue] = await db
    .select()
    .from(catalogues)
    .where(and(eq(catalogues.id, id), eq(catalogues.archived, false)))
    .limit(1);

  if (!catalogue) {
    return error(c, "Catalogue non trouvé", 404);
  }

  // Incrémentation sécurisée gérant les valeurs NULL éventuelles
  await db
    .update(catalogues)
    .set({
      telechargements: sql`COALESCE(${catalogues.telechargements}, 0) + 1`,
      updated_at: new Date(),
    })
    .where(eq(catalogues.id, id));

  const currentDownloads = Number(catalogue.telechargements || 0);

  return success(c, {
    file_path: catalogue.file_path,
    telechargements: currentDownloads + 1,
  });
});

export default cataloguesRoutes;

```
### .\api\src\routes\contact.routes.ts
```ts
import { Hono } from "hono";
import { eq, or } from "drizzle-orm";
import { db } from "../db/client";
import { demandes_contact, filiales } from "../db/schema";
import { success, error } from "../utils/response";
import { demandeSchema } from "../utils/validation";
import { sendNotificationEmail } from "../services/email";
import { generateContactWhatsAppUrl } from "../services/whatsapp";

const contactRoutes = new Hono();

// Helper de lecture sécurisée du body HTTP (JSON ou FormData)
async function parseBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch {
    return null;
  }
}

// Génération d'une référence unique sécurisée
function generateReference(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const random = Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()
    .padStart(4, "X");
  return `DM-${year}${month}${day}-${random}`;
}

// POST /api/contact - Soumission du formulaire de contact public
contactRoutes.post("/", async (c) => {
  const body = await parseBody(c);
  if (!body) {
    return error(c, "Données de formulaire invalides ou illisibles", 400);
  }

  const parsed = demandeSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues?.[0]?.message || "Données invalides";
    return error(c, message, 422);
  }

  const data = parsed.data;
  const reference = generateReference();

  // Résolution de la filiale (par ID, Slug ou Nom)
  let filialeName: string | null = null;
  let filialeId: number | null = null;

  if (data.filiale) {
    const filialeValue = String(data.filiale).trim();
    const isNumber = /^\d+$/.test(filialeValue);

    if (isNumber) {
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(eq(filiales.id, parseInt(filialeValue, 10)))
        .limit(1);

      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      }
    } else {
      // Recherche par slug OU par nom en 1 seule requête
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(
          or(eq(filiales.slug, filialeValue), eq(filiales.nom, filialeValue)),
        )
        .limit(1);

      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      } else {
        filialeName = filialeValue;
      }
    }
  }

  // Insertion de la demande en BDD
  await db.insert(demandes_contact).values({
    reference,
    civilite: data.civilite || null,
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone || null,
    societe: data.societe || null,
    fonction: data.fonction || null,
    filiale: filialeId,
    type_demande: data.type_demande || "information",
    objet: data.objet || null,
    message: data.message,
    details_json:
      data.details_json && Object.keys(data.details_json).length > 0
        ? (data.details_json as Record<string, unknown>)
        : null,
  });

  // Envoi de la notification par e-mail (non-bloquant)
  sendNotificationEmail({
    reference,
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone,
    societe: data.societe,
    fonction: data.fonction,
    objet: data.objet,
    message: data.message,
    filiale: filialeName,
  }).catch((err) => {
    console.error("Erreur envoi notification email:", err);
  });

  // Génération résiliente de l'URL WhatsApp
  let whatsappUrl: string | null = null;
  try {
    whatsappUrl = await generateContactWhatsAppUrl({
      nom_complet: data.nom_complet,
      email: data.email,
      telephone: data.telephone,
      societe: data.societe,
      objet: data.objet,
      message: data.message,
      filiale: filialeName,
    });
  } catch (err) {
    console.error("Erreur génération URL WhatsApp:", err);
  }

  return success(
    c,
    {
      reference,
      whatsapp_url: whatsappUrl,
    },
    `Votre demande a été envoyée avec succès. Référence: ${reference}`,
    201,
  );
});

export default contactRoutes;

```
### .\api\src\routes\events.routes.ts
```ts
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import { eventEmitter } from "../services/events";

export const eventsRoutes = new Hono();

eventsRoutes.get("/", (c) => {
  // Headers pour éviter la mise en cache et le buffering proxy (Nginx, Cloudflare)
  c.header("Content-Type", "text/event-stream");
  c.header("Cache-Control", "no-cache, no-transform");
  c.header("Connection", "keep-alive");
  c.header("X-Accel-Buffering", "no");

  return streamSSE(c, async (stream) => {
    // 1. Définir le délai de reconnexion auto pour le navigateur (ex: 5 secondes)
    await stream.writeSSE({
      event: "connected",
      data: JSON.stringify({ status: "ok" }),
      retry: 5000,
    });

    // 2. Ping périodique pour maintenir la connexion active (keep-alive)
    const interval = setInterval(() => {
      stream.writeSSE({ event: "ping", data: "ping" }).catch(() => {
        // Ignorer l'erreur si le flux s'est fermé avant la purge de l'intervalle
      });
    }, 15000);

    // 3. Listener d'invalidation
    const onInvalidate = async (data: { entity: string }) => {
      try {
        await stream.writeSSE({
          event: "invalidate",
          data: JSON.stringify(data),
        });
      } catch (err) {
        console.error("Erreur écriture SSE:", err);
      }
    };

    eventEmitter.on("invalidate", onInvalidate);

    // 4. Promesse nettoyée proprement lors de la déconnexion
    await new Promise<void>((resolve) => {
      stream.onAbort(() => {
        clearInterval(interval);
        eventEmitter.off("invalidate", onInvalidate);
        resolve(); // Résout la promesse et libère la ressource
      });
    });
  });
});

```
### .\api\src\routes\filiales.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, asc } from "drizzle-orm";
import { db } from "../db/client";
import { filiales } from "../db/schema";
import { success, error } from "../utils/response";

const filialesRoutes = new Hono();

// Helper pour parser proprement le corps de la requête (JSON ou FormData)
async function parseRequestBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch (err) {
    return null;
  }
}

// GET /api/filiales - List all active filiales (public)
filialesRoutes.get("/", async (c) => {
  const results = await db
    .select()
    .from(filiales)
    .where(and(eq(filiales.archived, false), eq(filiales.statut, "actif")))
    .orderBy(asc(filiales.nom));

  return success(c, results);
});

// GET /api/filiales/id/:id - Get single filiale by ID (supporté)
filialesRoutes.get("/id/:id", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) return error(c, "ID invalide", 400);

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!filiale) {
    return error(c, "Filiale non trouvée", 404);
  }

  return success(c, filiale);
});

// GET /api/filiales/:slug - Get single filiale by slug (public)
filialesRoutes.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(and(eq(filiales.slug, slug), eq(filiales.archived, false)))
    .limit(1);

  if (!filiale) {
    return error(c, "Filiale non trouvée", 404);
  }

  return success(c, filiale);
});

// Handler réutilisable pour la mise à jour
const updateFilialeHandler = async (c: any) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const body = await parseRequestBody(c);
  if (!body) {
    return error(c, "Données envoyées invalides ou inexistantes", 400);
  }

  const { telephone, email, adresse, site_web, description } = body;

  const [existing] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Filiale non trouvée", 404);
  }

  await db
    .update(filiales)
    .set({
      telephone:
        telephone !== undefined ? String(telephone) : existing.telephone,
      email: email !== undefined ? String(email) : existing.email,
      adresse: adresse !== undefined ? String(adresse) : existing.adresse,
      site_web: site_web !== undefined ? String(site_web) : existing.site_web,
      description:
        description !== undefined ? String(description) : existing.description,
      updated_at: new Date(),
    })
    .where(eq(filiales.id, id));

  return success(c, { message: "Filiale mise à jour avec succès" });
};

// PUT /api/filiales/id/:id
filialesRoutes.put("/id/:id", updateFilialeHandler);

// PUT /api/filiales/:id (pour matcher /admin/filiales/6)
filialesRoutes.put("/:id", updateFilialeHandler);

export default filialesRoutes;

```
### .\api\src\routes\galerie.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, or } from "drizzle-orm";
import { db } from "../db/client";
import { galerie, filiales } from "../db/schema";
import { success, error } from "../utils/response";

const galerieRoutes = new Hono();

// Helper optimisé : 1 seule requête SQL avec or()
async function resolveFilialeId(value: string): Promise<number | null> {
  const isNumeric = /^\d+$/.test(value);
  if (isNumeric) return parseInt(value, 10);

  const [row] = await db
    .select({ id: filiales.id })
    .from(filiales)
    .where(or(eq(filiales.slug, value), eq(filiales.nom, value)))
    .limit(1);

  return row?.id ?? null;
}

// GET /api/v1/galerie - List gallery items with filiale name (public)
galerieRoutes.get("/", async (c) => {
  const filialeFilter = c.req.query("filiale");
  const typeFilter = c.req.query("type_projet");

  // Sécurisation contre NaN et valeurs négatives
  const rawPage = parseInt(c.req.query("page") || "1", 10);
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const rawLimit = parseInt(c.req.query("limit") || "50", 10);
  const limit = isNaN(rawLimit) || rawLimit < 1 ? 50 : Math.min(rawLimit, 100);

  const offset = (page - 1) * limit;
  const conditions = [eq(galerie.archived, false)];

  // Gestion du filtre filiale
  if (filialeFilter) {
    const fid = await resolveFilialeId(filialeFilter);
    if (fid === null) {
      // Filiale non trouvée => Retourner directement un tableau vide
      return success(c, {
        items: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      });
    }
    conditions.push(eq(galerie.filiale, fid));
  }

  if (typeFilter) {
    conditions.push(
      eq(
        galerie.type_projet,
        typeFilter as
          | "residentiel"
          | "commercial"
          | "infrastructure"
          | "evenement"
          | "production"
          | "logistique"
          | "autre",
      ),
    );
  }

  // Requête principale
  const rows = await db
    .select({
      id: galerie.id,
      titre: galerie.titre,
      filiale: galerie.filiale,
      filiale_nom: filiales.nom,
      type_projet: galerie.type_projet,
      lieu: galerie.lieu,
      date_realisation: galerie.date_realisation,
      description_courte: galerie.description_courte,
      image_path: galerie.image_path,
      archived: galerie.archived,
      created_at: galerie.created_at,
      updated_at: galerie.updated_at,
    })
    .from(galerie)
    .leftJoin(filiales, eq(galerie.filiale, filiales.id))
    .where(and(...conditions))
    .orderBy(desc(galerie.created_at))
    .limit(limit)
    .offset(offset);

  // Compte total sécurisé
  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(galerie)
    .where(and(...conditions));

  const total = Number(countResult?.count || 0);

  return success(c, {
    items: rows,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/v1/galerie/:id - Get single gallery item (public)
galerieRoutes.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return error(c, "ID invalide", 400);
  }

  const [row] = await db
    .select({
      id: galerie.id,
      titre: galerie.titre,
      filiale: galerie.filiale,
      filiale_nom: filiales.nom,
      type_projet: galerie.type_projet,
      lieu: galerie.lieu,
      date_realisation: galerie.date_realisation,
      description_courte: galerie.description_courte,
      image_path: galerie.image_path,
      archived: galerie.archived,
      created_at: galerie.created_at,
      updated_at: galerie.updated_at,
    })
    .from(galerie)
    .leftJoin(filiales, eq(galerie.filiale, filiales.id))
    .where(and(eq(galerie.id, id), eq(galerie.archived, false)))
    .limit(1);

  if (!row) {
    return error(c, "Élément de galerie non trouvé", 404);
  }

  return success(c, row);
});

export default galerieRoutes;

```
### .\api\src\routes\pages.routes.ts
```ts
import { Hono } from "hono";
import { eq, and } from "drizzle-orm";
import { db } from "../db/client";
import { page_contents } from "../db/schema";
import { success, error } from "../utils/response";

const pagesRoutes = new Hono();

/**
 * GET /api/v1/admin/pages/:slug
 * Retourne la structure attendue par l'éditeur Frontend
 */
pagesRoutes.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  try {
    const contents = await db
      .select()
      .from(page_contents)
      .where(eq(page_contents.page_slug, slug));

    // Transformer le tableau plat en structure { slug, sections: [...] }
    const sections = contents.map((row) => ({
      key: row.section_key,
      type: row.content_type || "text",
      value: row.content_value || "",
      image_url: row.content_type === "image" ? row.content_value : undefined,
    }));

    return success(c, {
      slug,
      sections,
    });
  } catch (err) {
    console.error(`Erreur chargement page ${slug}:`, err);
    return error(c, "Erreur lors de la récupération de la page", 500);
  }
});

/**
 * POST /api/v1/admin/pages/:slug
 * Supporte JSON et Form-Data (pour l'upload d'images)
 */
pagesRoutes.post("/:slug", async (c) => {
  const slug = c.req.param("slug");
  const contentType = c.req.header("content-type") || "";

  try {
    let key = "";
    let value = "";
    let type = "text";

    // 1. Parsing selon le type de requête
    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const body = await c.req.parseBody();
      key = body["key"] as string;
      value = body["value"] as string;

      // Traitement éventuel du fichier image
      const imageFile = body["image"];
      if (imageFile && imageFile instanceof File) {
        // TODO: Uploader le fichier sur Cloudflare R2 / S3
        // const uploadedUrl = await uploadToR2(imageFile);
        // value = uploadedUrl;
        type = "image";
      }
    } else {
      const body = await c.req.json();
      key = body.key || body.section_key;
      value = body.value || body.content_value || "";
      type = body.type || body.content_type || "text";
    }

    if (!key) {
      return error(c, "La clé de section (key) est requise", 400);
    }

    // 2. UPSERT en BDD
    await db
      .insert(page_contents)
      .values({
        page_slug: slug,
        section_key: key,
        content_value: value,
        content_type: type,
        updated_at: new Date(),
      })
      .onConflictDoUpdate({
        target: [page_contents.page_slug, page_contents.section_key],
        set: {
          content_value: value,
          content_type: type,
          updated_at: new Date(),
        },
      });

    return success(c, null, "Section mise à jour avec succès");
  } catch (err) {
    console.error(`Erreur mise à jour de la page ${slug}:`, err);
    return error(c, "Erreur lors de la sauvegarde du contenu", 500);
  }
});

export default pagesRoutes;
```
### .\api\src\routes\settings.routes.ts
```ts
import { Hono } from "hono";
import { eq, inArray, sql } from "drizzle-orm";
import { db } from "../db/client";
import { settings } from "../db/schema";
import { success, error } from "../utils/response";

const settingsRoutes = new Hono();

const PUBLIC_KEYS = [
  "contact_email",
  "contact_phone",
  "contact_address",
  "social_facebook",
  "social_linkedin",
  "social_instagram",
  "social_twitter",
  "whatsapp_number",
] as const;

// Helper de lecture sécurisée du body
async function parseBody(c: any) {
  const contentType = c.req.header("content-type") || "";
  try {
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      return await c.req.parseBody();
    }
    return await c.req.json();
  } catch {
    return null;
  }
}

// GET /api/v1/settings
settingsRoutes.get("/", async (c) => {
  // 1. Filtrage directement au niveau SQL
  const publicSettings = await db
    .select()
    .from(settings)
    .where(inArray(settings.key, [...PUBLIC_KEYS]));

  const map = publicSettings.reduce(
    (acc, curr) => {
      acc[curr.key] = curr.value || "";
      return acc;
    },
    {} as Record<string, string>,
  );

  return success(c, { map });
});

// PUT /api/v1/settings
settingsRoutes.put("/", async (c) => {
  const body = await parseBody(c);

  if (!body || typeof body !== "object") {
    return error(c, "Corps de requête invalide", 400);
  }

  const keysToUpdate = Object.keys(body).filter((k) =>
    PUBLIC_KEYS.includes(k as any),
  );

  if (keysToUpdate.length === 0) {
    return error(c, "Aucune clé valide à mettre à jour", 400);
  }

  // 2. Préparation du tableau d'upsert
  const valuesToInsert = keysToUpdate.map((key) => ({
    key,
    value: String(body[key] ?? ""),
    updated_at: new Date(),
  }));

  // 3. Upsert en 1 seule requête SQL (suppose que 'key' a une contrainte UNIQUE ou est clé primaire)
  await db
    .insert(settings)
    .values(valuesToInsert)
    .onConflictDoUpdate({
      target: settings.key,
      set: {
        value: sql`EXCLUDED.value`,
        updated_at: new Date(),
      },
    });

  return success(c, { message: "Settings updated successfully" });
});

export default settingsRoutes;

```
### .\api\src\routes\admin\auth.routes.ts
```ts
import { Hono } from "hono";
import { eq, and, desc, sql, asc, like, or } from "drizzle-orm";
import { db } from "../../db/client";
import {
  administrateurs,
  filiales,
  demandes_contact,
  catalogues,
  galerie,
  page_contents,
  settings,
  chatbot_logs,
} from "../../db/schema";
import { success, error } from "../../utils/response";
import { authMiddleware } from "../../middleware/auth";
import type { AuthUser } from "../../middleware/auth";
import { compare, hash } from "bcryptjs";
import { eventEmitter } from "../../services/events";
import {
  filialeSchema,
  galerieSchema,
  catalogueSchema,
  pageContentSchema,
  pageContentUpdateSchema,
  settingsUpdateSchema,
  adminUpdateSchema,
  changePasswordSchema,
  chatbotLogSchema,
} from "../../utils/validation";
import { uploadFile, deleteFile } from "../../services/upload";

// Helper to get validation error message (Zod v4 uses .issues not .errors)
function getValidationError(err: unknown): string {
  if (err && typeof err === "object" && "issues" in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || "Donnees invalides";
  }
  if (err instanceof Error) return err.message;
  return "Donnees invalides";
}

// Helper to get user from context
function getUser(c: any): AuthUser {
  return c.get("user") as AuthUser;
}

// Helper to safely get route param as integer
function getIdParam(c: any): number {
  return parseInt(c.req.param("id") || "0", 10);
}

// ─── Admin Dashboard ─────────────────────────────────────────────────────────

const adminDashboard = new Hono();

// GET /api/admin/dashboard/stats
adminDashboard.get("/", authMiddleware, async (c) => {
  getUser(c);

  const safeCount = async (
    queryFn: () => Promise<Array<{ count: number }>>,
  ) => {
    try {
      const [row] = await queryFn();
      return Number(row?.count ?? 0);
    } catch {
      return 0;
    }
  };

  const [
    totalDemandes,
    nouvellesDemandes,
    totalFiliales,
    totalGalerie,
    totalCatalogues,
  ] = await Promise.all([
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(demandes_contact)
        .where(eq(demandes_contact.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(demandes_contact)
        .where(
          and(
            eq(demandes_contact.archived, false),
            eq(demandes_contact.statut, "nouveau"),
          ),
        ),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(filiales)
        .where(eq(filiales.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(galerie)
        .where(eq(galerie.archived, false)),
    ),
    safeCount(() =>
      db
        .select({ count: sql<number>`count(*)` })
        .from(catalogues)
        .where(eq(catalogues.archived, false)),
    ),
  ]);

  return success(c, {
    total_demandes: totalDemandes,
    nouvelles_demandes: nouvellesDemandes,
    total_filiales: totalFiliales,
    total_galerie: totalGalerie,
    total_catalogues: totalCatalogues,
  });
});

// ─── Admin: Demandes ─────────────────────────────────────────────────────────

const adminDemandes = new Hono();

adminDemandes.get("/", authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query("page") || "1", 10);
  const limit = Math.min(parseInt(c.req.query("limit") || "20", 10), 100);
  const offset = (page - 1) * limit;
  const statut = c.req.query("statut");
  const search = c.req.query("search");

  const conditions = [eq(demandes_contact.archived, false)];

  if (statut && ["nouveau", "en_cours", "traite", "archive"].includes(statut)) {
    conditions.push(
      eq(
        demandes_contact.statut,
        statut as "nouveau" | "en_cours" | "traite" | "archive",
      ),
    );
  }

  if (search) {
    conditions.push(
      or(
        like(demandes_contact.nom_complet, `%${search}%`),
        like(demandes_contact.email, `%${search}%`),
        like(demandes_contact.reference, `%${search}%`),
        like(demandes_contact.societe, `%${search}%`),
      )!,
    );
  }

  const items = await db
    .select()
    .from(demandes_contact)
    .where(and(...conditions))
    .orderBy(desc(demandes_contact.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(demandes_contact)
    .where(and(...conditions));

  return success(c, {
    items,
    pagination: {
      page,
      limit,
      total: countResult?.count || 0,
      totalPages: Math.ceil((countResult?.count || 0) / limit),
    },
  });
});

adminDemandes.get("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [demande] = await db
    .select()
    .from(demandes_contact)
    .where(eq(demandes_contact.id, id))
    .limit(1);

  if (!demande) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, demande);
});

adminDemandes.patch("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };

  if (
    body.statut &&
    ["nouveau", "en_cours", "traite", "archive"].includes(body.statut)
  ) {
    updateData.statut = body.statut;
  }
  if (body.notes_internes !== undefined) {
    updateData.notes_internes = body.notes_internes;
  }

  const [updated] = await db
    .update(demandes_contact)
    .set(updateData as any)
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, updated, "Demande mise a jour");
});

adminDemandes.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(demandes_contact)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, "Demande non trouvee", 404);
  }

  return success(c, null, "Demande archivee");
});

// ─── Admin: Filiales CRUD ──────────────────────────────────────────────────

const adminFiliales = new Hono();

adminFiliales.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(filiales)
    .where(includeArchived ? undefined : eq(filiales.archived, false))
    .orderBy(asc(filiales.nom));

  return success(c, items);
});

// Helper: parse le body (JSON ou FormData multipart) pour les routes filiales.
// - Extrait le fichier "image" s'il existe (upload réel via <input type="file">)
// - Transforme le champ texte "details" (une ligne = un item) en details_json { items: [...] }
async function parseFilialeBody(
  c: any,
): Promise<{ rawBody: Record<string, any>; imageFile?: File }> {
  const contentType = c.req.header("content-type") || "";
  let rawBody: Record<string, any>;
  let imageFile: File | undefined;

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const parsedBody = await c.req.parseBody();
    rawBody = { ...parsedBody };

    if (
      parsedBody["image"] instanceof File &&
      (parsedBody["image"] as File).size > 0
    ) {
      imageFile = parsedBody["image"] as File;
    }
    delete rawBody.image;

    if (typeof rawBody.details === "string") {
      rawBody.details_json = {
        items: rawBody.details
          .split("\n")
          .map((s: string) => s.trim())
          .filter(Boolean),
      };
      delete rawBody.details;
    }
  } else {
    rawBody = await c.req.json();
  }

  return { rawBody, imageFile };
}

adminFiliales.post("/", authMiddleware, async (c) => {
  getUser(c);

  const { rawBody, imageFile } = await parseFilialeBody(c);

  const parsed = filialeSchema.safeParse(rawBody);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  let image_url = parsed.data.image_url;
  if (imageFile) {
    image_url = await uploadFile(imageFile, "filiales");
  }

  const [created] = await db
    .insert(filiales)
    .values({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: image_url || null,
      details_json:
        Object.keys(parsed.data.details_json).length > 0
          ? (parsed.data.details_json as Record<string, unknown>)
          : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, created, "Filiale creee", 201);
});

adminFiliales.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);

  const [existing] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Filiale non trouvee", 404);
  }

  const { rawBody, imageFile } = await parseFilialeBody(c);

  // Le FormData n'envoie pas image_url/archived (champs non présents dans le formulaire) :
  // on préserve les valeurs existantes pour ne pas les écraser silencieusement.
  if (rawBody.image_url === undefined || rawBody.image_url === "") {
    rawBody.image_url = existing.image_url || "";
  }
  if (rawBody.archived === undefined) {
    rawBody.archived = existing.archived;
  }

  const parsed = filialeSchema.safeParse(rawBody);
  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  let image_url = parsed.data.image_url;
  if (imageFile) {
    image_url = await uploadFile(imageFile, "filiales");
    if (existing.image_url) {
      deleteFile(existing.image_url).catch(() => {});
    }
  }

  const [updated] = await db
    .update(filiales)
    .set({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: image_url || null,
      details_json:
        Object.keys(parsed.data.details_json).length > 0
          ? (parsed.data.details_json as Record<string, unknown>)
          : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
      updated_at: new Date(),
    })
    .where(eq(filiales.id, id))
    .returning();

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, updated, "Filiale mise a jour");
});

adminFiliales.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(filiales)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(filiales.id, id))
    .returning();

  if (!updated) {
    return error(c, "Filiale non trouvee", 404);
  }

  eventEmitter.emit("invalidate", { entity: "filiales" });
  return success(c, null, "Filiale archivee");
});

// ─── Admin: Galerie CRUD ──────────────────────────────────────────────────────

const adminGalerie = new Hono();

adminGalerie.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(galerie)
    .where(includeArchived ? undefined : eq(galerie.archived, false))
    .orderBy(desc(galerie.created_at));

  return success(c, items);
});

adminGalerie.post("/", authMiddleware, async (c) => {
  const body = await c.req.parseBody();
  const file = body["image"] as File | undefined;

  if (!file) {
    return error(c, "Image requise", 422);
  }

  const titre = body["titre"] as string;
  if (!titre) {
    return error(c, "Titre requis", 422);
  }

  const image_path = await uploadFile(file, "galerie");

  let filialeId: number | null = null;
  const filialeRaw = body["filiale"];
  if (filialeRaw) {
    const fv = filialeRaw;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, String(fv)))
        .limit(1);
      if (f) filialeId = f.id;
    }
  }

  const [created] = await db
    .insert(galerie)
    .values({
      titre,
      filiale: filialeId,
      type_projet: (body["type_projet"] as string) || null,
      lieu: (body["lieu"] as string) || null,
      date_realisation: (body["date_realisation"] as string) || null,
      description_courte: (body["description_courte"] as string) || null,
      image_path,
    } as any)
    .returning();

  eventEmitter.emit("invalidate", { entity: "galerie" });
  return success(c, created, "Element de galerie cree", 201);
});

adminGalerie.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = galerieSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
  }

  const [updated] = await db
    .update(galerie)
    .set({
      titre: data.titre,
      filiale: filialeId,
      type_projet: data.type_projet || null,
      lieu: data.lieu || null,
      date_realisation: data.date_realisation || null,
      description_courte: data.description_courte || null,
      image_path: data.image_path,
      updated_at: new Date(),
    })
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, "Element de galerie non trouve", 404);
  }

  return success(c, updated, "Element de galerie mis a jour");
});

adminGalerie.patch("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };
  const allowedFields = [
    "titre",
    "lieu",
    "date_realisation",
    "description_courte",
    "type_projet",
    "archived",
  ];

  for (const field of allowedFields) {
    if ((body as Record<string, unknown>)[field] !== undefined) {
      updateData[field] = (body as Record<string, unknown>)[field];
    }
  }
  if ((body as Record<string, unknown>).image_path !== undefined) {
    updateData.image_path = (body as Record<string, unknown>).image_path;
  }

  const [updated] = await db
    .update(galerie)
    .set(updateData as any)
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, "Element de galerie non trouve", 404);
  }

  return success(c, updated, "Element de galerie mis a jour");
});

adminGalerie.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(galerie)
    .where(eq(galerie.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Element de galerie non trouve", 404);
  }

  if (existing.image_path) {
    deleteFile(existing.image_path).catch(() => {});
  }

  await db
    .update(galerie)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(galerie.id, id));
  return success(c, null, "Element de galerie archive");
});

// ─── Admin: Catalogues CRUD ───────────────────────────────────────────────────

const adminCatalogues = new Hono();

adminCatalogues.get("/", authMiddleware, async (c) => {
  const includeArchived = c.req.query("archived") === "true";
  const items = await db
    .select()
    .from(catalogues)
    .where(includeArchived ? undefined : eq(catalogues.archived, false))
    .orderBy(desc(catalogues.created_at));

  return success(c, items);
});

adminCatalogues.post("/", authMiddleware, async (c) => {
  const body = await c.req.parseBody();
  const file = body["file"] as File | undefined;

  if (!file) {
    return error(c, "Fichier requis", 422);
  }

  const titre = body["titre"] as string;
  if (!titre) {
    return error(c, "Titre requis", 422);
  }

  const file_path = await uploadFile(file, "catalogues");

  let filialeId: number | null = null;
  const filialeRaw = body["filiale"];
  if (filialeRaw) {
    const fv = filialeRaw;
    if (typeof fv === "number") filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, String(fv)))
        .limit(1);
      if (f) filialeId = f.id;
    }
  }

  const taille_ko = Math.round(file.size / 1024);
  const type_document = (body["type_document"] as string) || "catalogue";
  let format = "PDF";
  if (file.type.includes("image")) format = "IMAGE";
  if (file.type.includes("word")) format = "WORD";

  const [created] = await db
    .insert(catalogues)
    .values({
      titre,
      filiale: filialeId,
      type_document: type_document as any,
      file_path,
      taille_ko,
      format,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "catalogues" });
  return success(c, created, "Catalogue cree", 201);
});

adminCatalogues.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);

  const [existing] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Catalogue non trouve", 404);
  }

  const contentType = c.req.header("content-type") || "";
  let titre: string;
  let filialeRaw: string | undefined;
  let type_document: string;
  let newFile: File | undefined;

  if (contentType.includes("multipart/form-data")) {
    const body = await c.req.parseBody();
    titre = (body["titre"] as string) || existing.titre;
    filialeRaw = body["filiale"] as string | undefined;
    type_document = (body["type_document"] as string) || existing.type_document;
    if (body["file"] instanceof File && (body["file"] as File).size > 0) {
      newFile = body["file"] as File;
    }
  } else {
    const body = await c.req.json();
    titre = body.titre || existing.titre;
    filialeRaw = body.filiale;
    type_document = body.type_document || existing.type_document;
  }

  let filialeId: number | null = existing.filiale;
  if (filialeRaw !== undefined) {
    if (filialeRaw === "") {
      filialeId = null;
    } else if (/^\d+$/.test(String(filialeRaw))) {
      filialeId = parseInt(String(filialeRaw), 10);
    }
  }

  let file_path = existing.file_path;
  let taille_ko = existing.taille_ko;
  let format = existing.format;

  if (newFile) {
    file_path = await uploadFile(newFile, "catalogues");
    taille_ko = Math.round(newFile.size / 1024);
    format = "PDF";
    if (newFile.type.includes("image")) format = "IMAGE";
    if (newFile.type.includes("word")) format = "WORD";
    if (existing.file_path) {
      deleteFile(existing.file_path).catch(() => {});
    }
  }

  const [updated] = await db
    .update(catalogues)
    .set({
      titre,
      filiale: filialeId,
      type_document: type_document as any,
      file_path,
      taille_ko,
      format,
      updated_at: new Date(),
    })
    .where(eq(catalogues.id, id))
    .returning();

  eventEmitter.emit("invalidate", { entity: "catalogues" });
  return success(c, updated, "Catalogue mis a jour");
});

adminCatalogues.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!existing) {
    return error(c, "Catalogue non trouve", 404);
  }

  if (existing.file_path) {
    deleteFile(existing.file_path).catch(() => {});
  }

  await db
    .update(catalogues)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(catalogues.id, id));
  return success(c, null, "Catalogue archive");
});

// ─── Admin: Page Contents CRUD ───────────────────────────────────────────────

const adminPages = new Hono();

adminPages.get("/", authMiddleware, async (c) => {
  const slug = c.req.query("slug");
  const items = await db
    .select()
    .from(page_contents)
    .where(slug ? eq(page_contents.page_slug, slug) : undefined)
    .orderBy(asc(page_contents.page_slug), asc(page_contents.section_key));

  return success(c, items);
});

adminPages.get("/:slug", authMiddleware, async (c) => {
  const slug = c.req.param("slug");
  const items = await db
    .select()
    .from(page_contents)
    .where(eq(page_contents.page_slug, slug))
    .orderBy(asc(page_contents.section_key));

  return success(c, { contents: items });
});

adminPages.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  const parsed = pageContentSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [created] = await db
    .insert(page_contents)
    .values({
      page_slug: parsed.data.page_slug,
      section_key: parsed.data.section_key,
      content_value: parsed.data.content_value || null,
      content_type: parsed.data.content_type,
    })
    .returning();

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, created, "Contenu de page cree", 201);
});

adminPages.post("/bulk", authMiddleware, async (c) => {
  const body = await c.req.json();
  const { page_slug, contents } = body;

  if (!page_slug || !Array.isArray(contents)) {
    return error(c, "Paramètres invalides", 422);
  }

  for (const item of contents) {
    const { section_key, content_value, content_type } = item;

    const [existing] = await db
      .select()
      .from(page_contents)
      .where(
        and(
          eq(page_contents.page_slug, page_slug),
          eq(page_contents.section_key, section_key),
        ),
      )
      .limit(1);

    if (existing) {
      await db
        .update(page_contents)
        .set({ content_value, updated_at: new Date() })
        .where(eq(page_contents.id, existing.id));
    } else {
      await db.insert(page_contents).values({
        page_slug,
        section_key,
        content_value,
        content_type: content_type || "json",
      });
    }
  }

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, null, "Contenus sauvegardés avec succès", 200);
});

// POST /:slug (FormData)
adminPages.post("/:slug", authMiddleware, async (c) => {
  const slug = c.req.param("slug");
  const body = await c.req.parseBody();

  const key = body["key"] as string;
  let value = body["value"] as string;
  const image = body["image"] as File | undefined;

  if (!key) {
    return error(c, "Clé (key) requise", 422);
  }

  if (image) {
    value = await uploadFile(image, "pages");
  }

  const [existing] = await db
    .select()
    .from(page_contents)
    .where(
      and(
        eq(page_contents.page_slug as any, slug),
        eq(page_contents.section_key as any, key),
      ),
    )
    .limit(1);

  let updated;
  if (existing) {
    [updated] = await db
      .update(page_contents)
      .set({ content_value: value, updated_at: new Date() })
      .where(eq(page_contents.id, existing.id))
      .returning();
  } else {
    [updated] = await db
      .insert(page_contents)
      .values({
        page_slug: slug,
        section_key: key,
        content_value: value,
        content_type: image ? "image" : "text",
      } as any)
      .returning();
  }

  eventEmitter.emit("invalidate", { entity: "pages" });
  return success(c, updated, "Contenu mis a jour");
});

adminPages.put("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = pageContentUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = {
    content_value: parsed.data.content_value,
    updated_at: new Date(),
  };

  if (parsed.data.content_type) {
    updateData.content_type = parsed.data.content_type;
  }

  const [updated] = await db
    .update(page_contents)
    .set(updateData as any)
    .where(eq(page_contents.id, id))
    .returning();

  if (!updated) {
    return error(c, "Contenu non trouve", 404);
  }

  return success(c, updated, "Contenu mis a jour");
});

adminPages.delete("/:id", authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [deleted] = await db
    .delete(page_contents)
    .where(eq(page_contents.id, id))
    .returning();

  if (!deleted) {
    return error(c, "Contenu non trouve", 404);
  }

  return success(c, null, "Contenu supprime");
});

// ─── Admin: Settings CRUD ────────────────────────────────────────────────────

const adminSettings = new Hono();

adminSettings.get("/", authMiddleware, async (c) => {
  getUser(c);
  try {
    const items = await db.select().from(settings).orderBy(asc(settings.key));

    const settingsMap: Record<string, string> = {};
    for (const item of items) {
      settingsMap[item.key] = item.value || "";
    }

    return success(c, { list: items, map: settingsMap });
  } catch (err) {
    console.error("[Settings GET] DB error:", err);
    return success(c, { list: [], map: {} });
  }
});

adminSettings.put("/:key", authMiddleware, async (c) => {
  const rawKey = c.req.param("key");
  const key = rawKey as string;
  const body = await c.req.json();
  const parsed = settingsUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [existing] = await db
    .select()
    .from(settings)
    .where(eq(settings.key, key))
    .limit(1);

  if (!existing) {
    const [created] = await db
      .insert(settings)
      .values({ key, value: parsed.data.value } as any)
      .returning();
    return success(c, created, "Parametre cree", 201);
  }

  const [updated] = await db
    .update(settings)
    .set({ value: parsed.data.value, updated_at: new Date() } as any)
    .where(eq(settings.key, key))
    .returning();

  return success(c, updated, "Parametre mis a jour");
});

adminSettings.post("/bulk", authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const updates = body.settings as Record<string, string>;

  if (!updates || typeof updates !== "object") {
    return error(
      c,
      "Format invalide. Attendu: { settings: { key: value } }",
      422,
    );
  }

  const results: Array<{ key: string; status: string }> = [];

  for (const [key, value] of Object.entries(updates)) {
    try {
      const [existing] = await db
        .select()
        .from(settings)
        .where(eq(settings.key, key))
        .limit(1);

      if (existing) {
        await db
          .update(settings)
          .set({ value, updated_at: new Date() } as any)
          .where(eq(settings.key, key));
        results.push({ key, status: "updated" });
      } else {
        await db.insert(settings).values({ key, value } as any);
        results.push({ key, status: "created" });
      }
    } catch (err) {
      console.error(`[Settings Bulk] Error saving key "${key}":`, err);
      results.push({ key, status: "error" });
    }
  }

  return success(c, results, `${results.length} parametres traites`);
});

adminSettings.post("/test-email", authMiddleware, async (c) => {
  getUser(c);
  // Simulation d'envoi d'email
  console.log("[Email Test] Envoi simulé...");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return success(c, null, "Email de test envoyé avec succès (simulation)");
});

// ─── Admin: Profile & Password ───────────────────────────────────────────────

const adminProfile = new Hono();

adminProfile.get("/", authMiddleware, async (c) => {
  const user = getUser(c);
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Administrateur non trouve", 404);
  }

  return success(c, {
    id: admin.id,
    nom: admin.nom,
    email: admin.email,
    role: admin.role,
    filiale_attribuee: admin.filiale_attribuee,
    created_at: admin.created_at,
  });
});

adminProfile.put("/", authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = adminUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = { updated_at: new Date() };
  if (parsed.data.nom) updateData.nom = parsed.data.nom;
  if (parsed.data.email) updateData.email = parsed.data.email;
  if (parsed.data.role) updateData.role = parsed.data.role;
  if (parsed.data.filiale_attribuee !== undefined)
    updateData.filiale_attribuee = parsed.data.filiale_attribuee;

  const [updated] = await db
    .update(administrateurs)
    .set(updateData as any)
    .where(eq(administrateurs.id, user.sub))
    .returning();

  if (!updated) {
    return error(c, "Administrateur non trouve", 404);
  }

  const { generateToken } = await import("../../services/jwt");
  const token = await generateToken({
    sub: updated.id,
    email: updated.email,
    role: updated.role,
    nom: updated.nom,
    filialeAttribuee: updated.filiale_attribuee,
  });

  return success(
    c,
    {
      token,
      user: {
        id: updated.id,
        nom: updated.nom,
        email: updated.email,
        role: updated.role,
        filiale_attribuee: updated.filiale_attribuee,
      },
    },
    "Profil mis a jour",
  );
});

adminProfile.post("/change-password", authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = changePasswordSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { currentPassword, newPassword } = parsed.data;
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, "Administrateur non trouve", 404);
  }

  const isValid = await compare(currentPassword, admin.password_hash);
  if (!isValid) {
    return error(c, "Mot de passe actuel incorrect", 401);
  }

  const newHash = await hash(newPassword, 12);
  await db
    .update(administrateurs)
    .set({ password_hash: newHash, updated_at: new Date() })
    .where(eq(administrateurs.id, user.sub));

  return success(c, null, "Mot de passe modifie avec succes");
});

// ─── Admin: Upload ────────────────────────────────────────────────────────────

const adminUpload = new Hono();

adminUpload.post("/", authMiddleware, async (c) => {
  getUser(c);
  const formData = await c.req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file) {
    return error(c, "Aucun fichier fourni", 400);
  }

  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return error(c, "Fichier trop volumineux (max 10 Mo)", 422);
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  if (!allowedTypes.includes(file.type)) {
    return error(c, "Type de fichier non autorise", 422);
  }

  const url = await uploadFile(file, folder);

  return success(
    c,
    {
      url,
      name: file.name,
      size: file.size,
      type: file.type,
      folder,
    },
    "Fichier uploade",
    201,
  );
});

adminUpload.delete("/", authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const url = (body as { url: string }).url;

  if (!url) {
    return error(c, "URL du fichier requise", 400);
  }

  await deleteFile(url);
  return success(c, null, "Fichier supprime");
});

// ─── Admin: Chatbot Logs ──────────────────────────────────────────────────────

const adminChatbot = new Hono();

adminChatbot.post("/logs", async (c) => {
  const body = await c.req.json();
  const parsed = chatbotLogSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;

  const [created] = await db
    .insert(chatbot_logs)
    .values({
      session_id: data.session_id,
      intention_detectee: data.intention_detectee || null,
      filiale_orientee: data.filiale_orientee || null,
      conversation_json:
        Object.keys(data.conversation_json).length > 0
          ? (data.conversation_json as Record<string, unknown>)
          : null,
      statut_resolution: data.statut_resolution,
    })
    .returning();

  return success(c, created, "Log chatbot enregistre", 201);
});

adminChatbot.get("/logs", authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query("page") || "1", 10);
  const limit = Math.min(parseInt(c.req.query("limit") || "50", 10), 100);
  const offset = (page - 1) * limit;

  const items = await db
    .select()
    .from(chatbot_logs)
    .orderBy(desc(chatbot_logs.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(chatbot_logs);

  return success(c, {
    items,
    pagination: {
      page,
      limit,
      total: countResult?.count || 0,
      totalPages: Math.ceil((countResult?.count || 0) / limit),
    },
  });
});

// ─── Admin: Admins Management ────────────────────────────────────────────────

const adminAdmins = new Hono();

adminAdmins.get("/", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const items = await db
    .select({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    })
    .from(administrateurs)
    .orderBy(asc(administrateurs.nom));

  return success(c, items);
});

adminAdmins.post("/", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const body = await c.req.json();
  const { nom, email, password, role, filiale_attribuee } = body as {
    nom: string;
    email: string;
    password: string;
    role?: string;
    filiale_attribuee?: number | null;
  };

  if (!nom || !email || !password) {
    return error(c, "Nom, email et mot de passe sont requis", 422);
  }

  const passwordHash = await hash(password, 12);

  const [created] = await db
    .insert(administrateurs)
    .values({
      nom,
      email,
      password_hash: passwordHash,
      role: (role || "gestionnaire") as "admin" | "gestionnaire",
      filiale_attribuee: filiale_attribuee || null,
    })
    .returning({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    });

  return success(c, created, "Administrateur cree", 201);
});

adminAdmins.delete("/:id", authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== "admin") {
    return error(c, "Acces refuse. Droits administrateur requis.", 403);
  }

  const id = getIdParam(c);
  if (id === user.sub) {
    return error(c, "Vous ne pouvez pas archiver votre propre compte", 400);
  }

  const [updated] = await db
    .update(administrateurs)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(administrateurs.id, id))
    .returning();

  if (!updated) {
    return error(c, "Administrateur non trouve", 404);
  }

  return success(c, null, "Administrateur archive");
});

// ─── Export all admin sub-routes ─────────────────────────────────────────────

export const adminRoutes = new Hono();

adminRoutes.route("/stats", adminDashboard);
adminRoutes.route("/demandes", adminDemandes);
adminRoutes.route("/filiales", adminFiliales);
adminRoutes.route("/galerie", adminGalerie);
adminRoutes.route("/catalogues", adminCatalogues);
adminRoutes.route("/pages", adminPages);
adminRoutes.route("/settings", adminSettings);
adminRoutes.route("/profile", adminProfile);
adminRoutes.route("/upload", adminUpload);
adminRoutes.route("/chatbot", adminChatbot);
adminRoutes.route("/admins", adminAdmins);

```
### .\api\src\services\email.ts
```ts
import nodemailer from "nodemailer";
import { eq, inArray } from "drizzle-orm";
import { db } from "../db/client";
import { settings } from "../db/schema";

export interface SmtpConfig {
  host: string;
  port: number;
  email: string;
  password: string;
}

// Helper pour sécuriser le contenu HTML contre les injections
function escapeHtml(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>");
}

/**
 * Récupère la configuration SMTP.
 * Priorité : Base de données > Fichier .env > Valeurs par défaut
 */
async function getSmtpConfig(): Promise<SmtpConfig> {
  try {
    const keys = ["smtp_host", "smtp_port", "smtp_email", "smtp_password"];
    const rows = await db
      .select({ key: settings.key, value: settings.value })
      .from(settings)
      .where(inArray(settings.key, keys));

    const configMap = new Map(rows.map((r) => [r.key, r.value]));

    return {
      host:
        configMap.get("smtp_host") || process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(
        configMap.get("smtp_port") || process.env.SMTP_PORT || "587",
        10,
      ),
      email: configMap.get("smtp_email") || process.env.SMTP_EMAIL || "",
      // Nettoyage automatique des espaces éventuels dans le mot de passe d'application Gmail
      password: (
        configMap.get("smtp_password") ||
        process.env.SMTP_PASSWORD ||
        ""
      ).replace(/\s+/g, ""),
    };
  } catch (error) {
    // Si la BDD est inaccessible, lecture directe du .env
    return {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      email: process.env.SMTP_EMAIL || "",
      password: (process.env.SMTP_PASSWORD || "").replace(/\s+/g, ""),
    };
  }
}

/**
 * Envoie un email générique via Nodemailer
 */
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  options?: { from?: string; replyTo?: string },
): Promise<boolean> {
  const smtpConfig = await getSmtpConfig();

  if (!smtpConfig.host || !smtpConfig.email || !smtpConfig.password) {
    console.warn("[SMTP] Configuration incomplète. Email non envoyé.", {
      to,
      subject,
    });
    return false;
  }

  const isSecure = smtpConfig.port === 465;

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: isSecure, // true pour 465, false pour 587
    auth: {
      user: smtpConfig.email,
      pass: smtpConfig.password,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });

  try {
    await transporter.sendMail({
      from: options?.from || `"MACOF Holding" <${smtpConfig.email}>`,
      to,
      subject,
      html,
      replyTo: options?.replyTo,
    });
    console.log(`[SMTP] Email envoyé avec succès à ${to} : "${subject}"`);
    return true;
  } catch (error) {
    console.error("[SMTP Error] Erreur lors de l'envoi de l'email :", error);
    return false;
  }
}

/**
 * Construit et envoie l'email de notification de demande de contact à l'admin
 */
export async function sendNotificationEmail(demande: {
  reference: string;
  nom_complet: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  fonction?: string | null;
  objet?: string | null;
  message: string;
  filiale?: string | null;
}): Promise<boolean> {
  let recipient = process.env.NOTIFICATION_EMAIL;

  // Si non défini dans .env, tentative de récupération en BDD
  if (!recipient) {
    try {
      const [notifEmail] = await db
        .select({ value: settings.value })
        .from(settings)
        .where(eq(settings.key, "notification_email"));
      recipient = notifEmail?.value;
    } catch {
      // Ignoré
    }
  }

  // Destinataire par défaut
  recipient = recipient || "macofholding2018@gmail.com";

  // Sanitisation des données entrantes
  const safeRef = escapeHtml(demande.reference);
  const safeNom = escapeHtml(demande.nom_complet);
  const safeEmail = escapeHtml(demande.email);
  const safeTel = escapeHtml(demande.telephone);
  const safeSociete = escapeHtml(demande.societe);
  const safeFonction = escapeHtml(demande.fonction);
  const safeObjet = escapeHtml(demande.objet);
  const safeFiliale = escapeHtml(demande.filiale);
  const safeMessage = escapeHtml(demande.message);

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a365d, #2d3748); color: white; padding: 20px 30px; }
        .header h1 { margin: 0; font-size: 22px; }
        .header p { margin: 5px 0 0; opacity: 0.9; }
        .content { padding: 25px 30px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #4a5568; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { color: #2d3748; margin-top: 3px; padding: 8px 12px; background: #f7fafc; border-radius: 4px; border-left: 3px solid #1a365d; }
        .footer { background: #edf2f7; padding: 15px 30px; text-align: center; font-size: 12px; color: #718096; }
        .badge { display: inline-block; padding: 3px 10px; background: #ebf8ff; color: #2b6cb0; border-radius: 12px; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouvelle demande de contact</h1>
          <p>Référence: <span class="badge">${safeRef}</span></p>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Nom complet</div>
            <div class="field-value">${safeNom}</div>
          </div>
          ${
            demande.societe
              ? `
          <div class="field">
            <div class="field-label">Société</div>
            <div class="field-value">${safeSociete}</div>
          </div>`
              : ""
          }
          ${
            demande.fonction
              ? `
          <div class="field">
            <div class="field-label">Fonction</div>
            <div class="field-value">${safeFonction}</div>
          </div>`
              : ""
          }
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${safeEmail}</div>
          </div>
          ${
            demande.telephone
              ? `
          <div class="field">
            <div class="field-label">Téléphone</div>
            <div class="field-value">${safeTel}</div>
          </div>`
              : ""
          }
          ${
            demande.objet
              ? `
          <div class="field">
            <div class="field-label">Objet</div>
            <div class="field-value">${safeObjet}</div>
          </div>`
              : ""
          }
          ${
            demande.filiale
              ? `
          <div class="field">
            <div class="field-label">Filiale concernée</div>
            <div class="field-value">${safeFiliale}</div>
          </div>`
              : ""
          }
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${safeMessage}</div>
          </div>
        </div>
        <div class="footer">
          <p>Cet email a été envoyé automatiquement par le site MACOF Holding.</p>
          <p>&copy; ${new Date().getFullYear()} MACOF Holding - Tous droits réservés</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `[MACOF Holding] Nouvelle demande - ${demande.reference} - ${demande.nom_complet}`;

  return sendEmail(recipient, subject, html, {
    replyTo: demande.email,
  });
}

```
### .\api\src\services\events.ts
```ts
import { EventEmitter } from 'events';

// Create a global singleton EventEmitter for broadcasting invalidation events
class GlobalEventEmitter extends EventEmitter {}

export const eventEmitter = new GlobalEventEmitter();

// Increase max listeners if needed (default is 10)
eventEmitter.setMaxListeners(100);

```
### .\api\src\services\jwt.ts
```ts
import { SignJWT, jwtVerify } from 'jose';
import { config } from '../config';

const secret = new TextEncoder().encode(config.jwtSecret);

export interface TokenPayload {
  sub: number;
  email: string;
  role: string;
  nom: string;
  filialeAttribuee?: number | null;
}

export async function generateToken(payload: TokenPayload): Promise<string> {
  return new SignJWT({
    sub: String(payload.sub),
    email: payload.email,
    role: payload.role,
    nom: payload.nom,
    filiale_attribuee: payload.filialeAttribuee ?? null,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .setSubject(String(payload.sub))
    .sign(secret);
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });
    return {
      sub: Number(payload.sub),
      email: payload.email as string,
      role: payload.role as string,
      nom: payload.nom as string,
      filialeAttribuee: payload.filiale_attribuee != null
        ? Number(payload.filiale_attribuee)
        : null,
    };
  } catch {
    throw new Error('Token invalide ou expire');
  }
}

```
### .\api\src\services\upload.ts
```ts
import { config } from '../config';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

const STORAGE_DIR = path.resolve(process.cwd(), 'storage', 'uploads');
const LOCAL_BASE_URL = '/uploads';

// Local storage fallback used when no Vercel Blob token is configured (dev mode).
async function uploadFileLocal(file: File, folder: string): Promise<string> {
  // Ensure the folder exists
  const dir = path.join(STORAGE_DIR, folder);
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }

  const timestamp = Date.now();
  const ext = file.name.split('.').pop() || 'bin';
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const filename = `${timestamp}_${sanitizedName}`;

  const fullPath = path.join(dir, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(fullPath, buffer);

  // Return a URL that the dev server can serve (mounted in index.ts)
  return `${LOCAL_BASE_URL}/${folder}/${filename}`;
}

// Vercel Blob storage (production)
async function uploadFileBlob(file: File, folder: string): Promise<string> {
  const { put } = await import('@vercel/blob');
  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const key = `${folder}/${timestamp}_${sanitizedName}`;

  const blob = await put(key, file, {
    access: 'public',
    addRandomSuffix: true,
    token: config.blobToken || undefined,
  });

  return blob.url;
}

export async function uploadFile(file: File, folder: string): Promise<string> {
  // In production (Vercel) or when a Blob token is present, use Vercel Blob.
  if (config.nodeEnv === 'production' || config.blobToken) {
    return uploadFileBlob(file, folder);
  }
  // Dev local fallback: save to disk.
  return uploadFileLocal(file, folder);
}

// Delete a previously uploaded file. Works for both local and Blob storage.
export async function deleteFile(url: string): Promise<void> {
  // Local file?
  if (url.startsWith(LOCAL_BASE_URL) || url.startsWith('/uploads')) {
    try {
      const relPath = url.replace(LOCAL_BASE_URL, '');
      const fullPath = path.join(STORAGE_DIR, relPath);
      await fs.unlink(fullPath);
      console.log(`Local file deleted: ${url}`);
    } catch (error) {
      console.error(`Failed to delete local file at ${url}:`, error);
    }
    return;
  }

  // Blob file
  try {
    const { del } = await import('@vercel/blob');
    await del(url, { token: config.blobToken || undefined });
    console.log(`Blob file deleted: ${url}`);
  } catch (error) {
    console.error(`Failed to delete blob file at ${url}:`, error);
    throw new Error(`Impossible de supprimer le fichier`);
  }
}

export async function listFiles(folder: string): Promise<{ url: string; name: string; size: number; uploadedAt: Date }[]> {
  if (config.nodeEnv === 'production' || config.blobToken) {
    try {
      const { list } = await import('@vercel/blob');
      const blobs = await list({
        prefix: folder,
        token: config.blobToken || undefined,
      });
      return blobs.blobs.map((blob) => ({
        url: blob.url,
        name: blob.pathname,
        size: blob.size,
        uploadedAt: new Date(blob.uploadedAt),
      }));
    } catch (error) {
      console.error(`Failed to list files in ${folder}:`, error);
      throw new Error(`Impossible de lister les fichiers du dossier ${folder}`);
    }
  }

  // Local fallback
  try {
    const dir = path.join(STORAGE_DIR, folder);
    const files = await fs.readdir(dir);
    const stats = await Promise.all(
      files.map(async (name) => {
        const full = path.join(dir, name);
        const s = await fs.stat(full);
        return { url: `${LOCAL_BASE_URL}/${folder}/${name}`, name, size: s.size, uploadedAt: s.mtime };
      })
    );
    return stats;
  } catch (error) {
    console.error(`Failed to list local files in ${folder}:`, error);
    return [];
  }
}

```
### .\api\src\services\whatsapp.ts
```ts
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { settings } from '../db/schema';

async function getWhatsAppNumber(): Promise<string> {
  try {
    const [row] = await db
      .select({ value: settings.value })
      .from(settings)
      .where(eq(settings.key, 'whatsapp_number'));
    return row?.value || '+224625744626';
  } catch {
    return '+224625744626';
  }
}

export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
}

export async function generateContactWhatsAppUrl(demande: {
  nom_complet: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  objet?: string | null;
  message: string;
  filiale?: string | null;
}): Promise<string> {
  const whatsappNumber = await getWhatsAppNumber();

  const formattedMessage = [
    `*Nouvelle demande de contact MACOF Holding*`,
    ``,
    `*Nom:* ${demande.nom_complet}`,
    demande.societe ? `*Société:* ${demande.societe}` : null,
    demande.email ? `*Email:* ${demande.email}` : null,
    demande.telephone ? `*Téléphone:* ${demande.telephone}` : null,
    demande.filiale ? `*Filiale:* ${demande.filiale}` : null,
    demande.objet ? `*Objet:* ${demande.objet}` : null,
    ``,
    `*Message:*`,
    demande.message,
  ]
    .filter(Boolean)
    .join('\n');

  return generateWhatsAppUrl(whatsappNumber, formattedMessage);
}

```
### .\api\src\utils\response.ts
```ts
import type { Context } from 'hono';

interface SuccessResponse {
  success: true;
  data: unknown;
  message?: string;
}

interface ErrorResponse {
  success: false;
  message: string;
}

export function success(
  c: Context,
  data: unknown,
  message?: string,
  status: number = 200,
) {
  const body: SuccessResponse = { success: true, data };
  if (message) {
    body.message = message;
  }
  return c.json(body, status as 200);
}

export function error(
  c: Context,
  message: string,
  status: number = 400,
) {
  const body: ErrorResponse = { success: false, message };
  return c.json(body, status as 400);
}

```
### .\api\src\utils\validation.ts
```ts
import { z } from 'zod';

// ─── Login ──────────────────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis'),
});

export type LoginInput = z.infer<typeof loginSchema>;

// ─── Demande de contact ─────────────────────────────────────────────────────

export const demandeSchema = z.object({
  civilite: z.enum(['monsieur', 'madame']).optional(),
  nom_complet: z.string().min(2, 'Le nom complet est requis (min 2 caracteres)'),
  email: z.string().email('Email invalide'),
  telephone: z.string().optional().default(''),
  societe: z.string().optional().default(''),
  fonction: z.string().optional().default(''),
  filiale: z.union([z.string().min(1, 'La filiale est requise'), z.number().int().positive()]).optional().default(''),
  type_demande: z.enum(['information', 'devis', 'partenariat', 'reclamation', 'autre']).optional().default('information'),
  objet: z.string().optional().default(''),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caracteres'),
  details_json: z.record(z.string(), z.unknown()).optional().default({}),
});

export type DemandeInput = z.infer<typeof demandeSchema>;

// ─── Catalogue ─────────────────────────────────────────────────────────────

export const catalogueSchema = z.object({
  titre: z.string().min(2, 'Le titre est requis (min 2 caracteres)'),
  filiale: z.union([z.string().min(1), z.number().int().positive()]).optional(),
  type_document: z.enum(['catalogue', 'brochure', 'plaquette', 'fiche_technique', 'autre']).optional().default('catalogue'),
  file_path: z.string().min(1, 'Le chemin du fichier est requis'),
  taille_ko: z.number().int().positive().optional(),
  format: z.string().min(1, 'Le format est requis'),
});

export type CatalogueInput = z.infer<typeof catalogueSchema>;

// ─── Galerie ─────────────────────────────────────────────────────────────────

export const galerieSchema = z.object({
  titre: z.string().min(2, 'Le titre est requis (min 2 caracteres)'),
  filiale: z.union([z.string().min(1), z.number().int().positive()]).optional(),
  type_projet: z.enum(['residentiel', 'commercial', 'infrastructure', 'evenement', 'production', 'logistique', 'autre']).optional(),
  lieu: z.string().optional().default(''),
  date_realisation: z.string().optional().default(''),
  description_courte: z.string().optional().default(''),
  image_path: z.string().min(1, 'Le chemin de l\'image est requis'),
});

export type GalerieInput = z.infer<typeof galerieSchema>;

// ─── Filiale ────────────────────────────────────────────────────────────────

export const filialeSchema = z.object({
  nom: z.string().min(2, 'Le nom est requis (min 2 caracteres)'),
  slug: z.string().min(2, 'Le slug est requis').regex(/^[a-z0-9-]+$/, 'Le slug ne doit contenir que des minuscules, chiffres et tirets'),
  description: z.string().optional().default(''),
  secteur: z.string().min(1, 'Le secteur est requis'),
  image_url: z.string().url('URL invalide').optional().or(z.literal('')).default(''),
  details_json: z.record(z.string(), z.unknown()).optional().default({}),
  email: z.string().email('Email invalide').optional().or(z.literal('')).default(''),
  telephone: z.string().optional().default(''),
  adresse: z.string().optional().default(''),
  site_web: z.string().url('URL invalide').optional().or(z.literal('')).default(''),
  statut: z.enum(['actif', 'inactif']).optional().default('actif'),
  archived: z.boolean().optional().default(false),
});

export type FilialeInput = z.infer<typeof filialeSchema>;

// ─── Settings ──────────────────────────────────────────────────────────────

export const settingsSchema = z.object({
  key: z.string().min(1, 'La cle est requise'),
  value: z.string().optional().default(''),
});

export type SettingsInput = z.infer<typeof settingsSchema>;

export const settingsUpdateSchema = z.object({
  value: z.string(),
});

export type SettingsUpdateInput = z.infer<typeof settingsUpdateSchema>;

// ─── Page content ──────────────────────────────────────────────────────────

export const pageContentSchema = z.object({
  page_slug: z.string().min(1, 'Le slug de page est requis'),
  section_key: z.string().min(1, 'La cle de section est requise'),
  content_value: z.string().optional().default(''),
  content_type: z.enum(['text', 'html', 'markdown', 'json']).optional().default('text'),
});

export type PageContentInput = z.infer<typeof pageContentSchema>;

export const pageContentUpdateSchema = z.object({
  content_value: z.string(),
  content_type: z.enum(['text', 'html', 'markdown', 'json']).optional(),
});

export type PageContentUpdateInput = z.infer<typeof pageContentUpdateSchema>;

// ─── Admin update ────────────────────────────────────────────────────────

export const adminUpdateSchema = z.object({
  nom: z.string().min(2, 'Le nom est requis').optional(),
  email: z.string().email('Email invalide').optional(),
  role: z.enum(['admin', 'gestionnaire']).optional(),
  filiale_attribuee: z.number().int().positive().nullable().optional(),
  archived: z.boolean().optional(),
});

export type AdminUpdateInput = z.infer<typeof adminUpdateSchema>;

// ─── Change password ──────────────────────────────────────────────────────

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Le mot de passe actuel est requis'),
  newPassword: z.string().min(8, 'Le nouveau mot de passe doit contenir au moins 8 caracteres'),
});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

// ─── Chatbot log ────────────────────────────────────────────────────────────

export const chatbotLogSchema = z.object({
  session_id: z.string().min(1, 'L\'identifiant de session est requis'),
  intention_detectee: z.string().optional().default(''),
  filiale_orientee: z.number().int().positive().optional(),
  conversation_json: z.record(z.string(), z.unknown()).optional().default({}),
  statut_resolution: z.enum(['resolu', 'non_resolu', 'en_attente']).optional().default('en_attente'),
});

export type ChatbotLogInput = z.infer<typeof chatbotLogSchema>;

```
### .\api\src\db\client.ts
```ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from '../config';

const sql = neon(config.databaseUrl);
export const db = drizzle(sql);

```
### .\api\src\db\schema.ts
```ts
import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  jsonb,
  integer,
  pgEnum,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── Enums ───────────────────────────────────────────────────────────────────

export const adminRoleEnum = pgEnum("admin_role", ["admin", "gestionnaire"]);

export const statutDemandeEnum = pgEnum("statut_demande", [
  "nouveau",
  "en_cours",
  "traite",
  "archive",
]);

export const typeDemandeEnum = pgEnum("type_demande", [
  "information",
  "devis",
  "partenariat",
  "reclamation",
  "autre",
]);

export const typeDocumentEnum = pgEnum("type_document", [
  "catalogue",
  "brochure",
  "plaquette",
  "fiche_technique",
  "autre",
]);

export const typeProjetEnum = pgEnum("type_projet", [
  "residentiel",
  "commercial",
  "infrastructure",
  "evenement",
  "production",
  "logistique",
  "autre",
]);

export const statutFilialeEnum = pgEnum("statut_filiale", ["actif", "inactif"]);

export const statutResolutionEnum = pgEnum("statut_resolution", [
  "resolu",
  "non_resolu",
  "en_attente",
]);

export const civiliteEnum = pgEnum("civilite", ["monsieur", "madame"]);

// ─── Filiales ────────────────────────────────────────────────────────────────

export const filiales = pgTable("filiales", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  secteur: varchar("secteur", { length: 255 }).notNull(),
  image_url: text("image_url"),
  details_json: jsonb("details_json"),
  email: varchar("email", { length: 255 }),
  telephone: varchar("telephone", { length: 50 }),
  adresse: text("adresse"),
  site_web: varchar("site_web", { length: 500 }),
  statut: statutFilialeEnum("statut").default("actif").notNull(),
  archived: boolean("archived").default(false).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Administrateurs ─────────────────────────────────────────────────────────

export const administrateurs = pgTable("administrateurs", {
  id: serial("id").primaryKey(),
  nom: varchar("nom", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  role: adminRoleEnum("role").default("admin").notNull(),
  filiale_attribuee: integer("filiale_attribuee").references(() => filiales.id), // ✅ Ajout de la contrainte FK
  archived: boolean("archived").default(false).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Demandes de contact ────────────────────────────────────────────────────

export const demandes_contact = pgTable(
  "demandes_contact",
  {
    id: serial("id").primaryKey(),
    reference: varchar("reference", { length: 50 }).notNull().unique(),
    filiale: integer("filiale").references(() => filiales.id),
    type_demande: typeDemandeEnum("type_demande")
      .default("information")
      .notNull(),
    civilite: civiliteEnum("civilite"),
    nom_complet: varchar("nom_complet", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    telephone: varchar("telephone", { length: 50 }),
    societe: varchar("societe", { length: 255 }),
    fonction: varchar("fonction", { length: 255 }),
    objet: varchar("objet", { length: 500 }),
    message: text("message").notNull(),
    details_json: jsonb("details_json"),
    piece_jointe_path: text("piece_jointe_path"),
    statut: statutDemandeEnum("statut").default("nouveau").notNull(),
    notes_internes: text("notes_internes"),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    archived: boolean("archived").default(false).notNull(),
  },
  (self) => [
    index("idx_demandes_filiale").on(self.filiale),
    index("idx_demandes_statut").on(self.statut),
    index("idx_demandes_created").on(self.created_at),
  ],
);

// ─── Catalogues ───────────────────────────────────────────────────────────────

export const catalogues = pgTable(
  "catalogues",
  {
    id: serial("id").primaryKey(),
    titre: varchar("titre", { length: 255 }).notNull(),
    filiale: integer("filiale").references(() => filiales.id),
    type_document: typeDocumentEnum("type_document")
      .default("catalogue")
      .notNull(),
    file_path: text("file_path").notNull(),
    taille_ko: integer("taille_ko"),
    format: varchar("format", { length: 20 }).notNull(),
    telechargements: integer("telechargements").default(0).notNull(),
    archived: boolean("archived").default(false).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_catalogues_filiale").on(self.filiale)],
);

// ─── Galerie ─────────────────────────────────────────────────────────────────

export const galerie = pgTable(
  "galerie",
  {
    id: serial("id").primaryKey(),
    titre: varchar("titre", { length: 255 }).notNull(),
    filiale: integer("filiale").references(() => filiales.id),
    type_projet: typeProjetEnum("type_projet"),
    lieu: varchar("lieu", { length: 255 }),
    date_realisation: varchar("date_realisation", { length: 50 }),
    description_courte: text("description_courte"),
    image_path: text("image_path").notNull(),
    archived: boolean("archived").default(false).notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_galerie_filiale").on(self.filiale)],
);

// ─── Chatbot logs ───────────────────────────────────────────────────────────

export const chatbot_logs = pgTable(
  "chatbot_logs",
  {
    id: serial("id").primaryKey(),
    session_id: varchar("session_id", { length: 255 }).notNull(),
    intention_detectee: varchar("intention_detectee", { length: 255 }),
    filiale_orientee: integer("filiale_orientee").references(() => filiales.id),
    conversation_json: jsonb("conversation_json"),
    statut_resolution: statutResolutionEnum("statut_resolution")
      .default("en_attente")
      .notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [index("idx_chatbot_session").on(self.session_id)],
);

// ─── Page contents (CMS) ────────────────────────────────────────────────────

export const page_contents = pgTable(
  "page_contents",
  {
    id: serial("id").primaryKey(),
    page_slug: varchar("page_slug", { length: 255 }).notNull(),
    section_key: varchar("section_key", { length: 255 }).notNull(),
    content_value: text("content_value"),
    content_type: varchar("content_type", { length: 50 })
      .default("text")
      .notNull(),
    updated_at: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (self) => [
    uniqueIndex("idx_page_slug_section").on(self.page_slug, self.section_key),
  ],
);

// ─── Settings ───────────────────────────────────────────────────────────────

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  value: text("value"),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// ─── Drizzle ORM Relations ──────────────────────────────────────────────────

export const filialesRelations = relations(filiales, ({ many }) => ({
  demandes: many(demandes_contact),
  catalogues: many(catalogues),
  galerieItems: many(galerie),
  administrateurs: many(administrateurs),
  chatbotLogs: many(chatbot_logs),
}));

export const demandesContactRelations = relations(
  demandes_contact,
  ({ one }) => ({
    filialeData: one(filiales, {
      fields: [demandes_contact.filiale],
      references: [filiales.id],
    }),
  }),
);

export const administrateursRelations = relations(
  administrateurs,
  ({ one }) => ({
    filiale: one(filiales, {
      fields: [administrateurs.filiale_attribuee],
      references: [filiales.id],
    }),
  }),
);

export const cataloguesRelations = relations(catalogues, ({ one }) => ({
  filialeData: one(filiales, {
    fields: [catalogues.filiale],
    references: [filiales.id],
  }),
}));

export const galerieRelations = relations(galerie, ({ one }) => ({
  filialeData: one(filiales, {
    fields: [galerie.filiale],
    references: [filiales.id],
  }),
}));

// ─── Type exports for convenience ───────────────────────────────────────────

export type Filiale = typeof filiales.$inferSelect;
export type NewFiliale = typeof filiales.$inferInsert;
export type Administrateur = typeof administrateurs.$inferSelect;
export type NewAdministrateur = typeof administrateurs.$inferInsert;
export type DemandeContact = typeof demandes_contact.$inferSelect;
export type NewDemandeContact = typeof demandes_contact.$inferInsert;
export type Catalogue = typeof catalogues.$inferSelect;
export type NewCatalogue = typeof catalogues.$inferInsert;
export type GalerieItem = typeof galerie.$inferSelect;
export type NewGalerieItem = typeof galerie.$inferInsert;
export type ChatbotLog = typeof chatbot_logs.$inferSelect;
export type NewChatbotLog = typeof chatbot_logs.$inferInsert;
export type PageContent = typeof page_contents.$inferSelect;
export type NewPageContent = typeof page_contents.$inferInsert;
export type Setting = typeof settings.$inferSelect;
export type NewSetting = typeof settings.$inferInsert;

```
### .\api\src\db\seed.ts
```ts
import { db } from "./client";
import {
  administrateurs,
  filiales,
  page_contents,
  galerie,
  settings,
} from "./schema";
import { hash } from "bcryptjs";

async function seed() {
  console.log("🌱 Démarrage du seeding de la base de données...");

  // 1. Admin
  console.log("👤 Insertion de l'administrateur...");
  const hashedPassword = await hash("Macof2024!", 10);
  await db
    .insert(administrateurs)
    .values({
      nom: "Admin MACOF",
      email: "admin@macof-holding.com",
      password_hash: hashedPassword,
      role: "admin",
    })
    .onConflictDoNothing();

  // 2. Settings (Contact Info)
  console.log("⚙️ Insertion des paramètres globaux (settings)...");
  await db
    .insert(settings)
    .values([
      { key: "site_title", value: "MACOF Holding" },
      { key: "contact_email", value: "macofholding2018@gmail.com" },
      { key: "contact_phone", value: "+224 625 74 46 26 / +224 623 98 75 11" },
      {
        key: "contact_address",
        value: "Manquepa en face de banc bleu / Kaloum / République de Guinée",
      },
    ])
    .onConflictDoNothing();

  // 3. Filiales
  console.log("🏢 Insertion des filiales...");
  const FILIALES = [
    {
      nom: "MACOF Immobilier SARL",
      slug: "immobilier",
      secteur: "Immobilier & BTP",
      description:
        "Filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP). Elle intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurants.",
      image_url:
        "https://images.unsplash.com/photo-1541888086225-f1262d0577d2?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "SEBA INTERNATIONAL",
      slug: "restauration",
      secteur: "Restauration & Traiteur",
      description:
        "Restauration, Boulangerie, Pâtisserie, Traiteur et Événementiel. Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité.",
      image_url:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Print & Com SARL",
      slug: "print",
      secteur: "Communication & Impression",
      description:
        "Filiale spécialisée dans l'imprimerie professionnelle, la communication visuelle et l'organisation de grands événements.",
      image_url:
        "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Mining SARL",
      slug: "mining",
      secteur: "Activités minières",
      description:
        "Filiale spécialisée dans les activités minières et la valorisation des ressources naturelles (exploration, exploitation, sous-traitance).",
      image_url:
        "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
      statut: "actif",
    },
    {
      nom: "MACOF Transit SARL",
      slug: "transit",
      secteur: "Transit, Logistique & Voyages",
      description:
        "Filiale spécialisée dans le transit, la logistique, le transport de marchandises et les services de voyage.",
      image_url:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      statut: "actif",
    },
    {
      nom: "MACOF Fishing SARL",
      slug: "fishing",
      secteur: "Pêche & Ressources maritimes",
      description:
        "Filiale spécialisée dans les activités halieutiques et la valorisation des ressources maritimes.",
      image_url:
        "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
      statut: "actif",
    },
  ];

  await db.delete(galerie);
  await db.delete(filiales);

  for (const f of FILIALES) {
    await db
      .insert(filiales)
      .values(f as any)
      .onConflictDoUpdate({
        target: filiales.slug,
        set: {
          nom: f.nom,
          secteur: f.secteur,
          description: f.description,
          image_url: f.image_url,
          statut: f.statut as any,
        },
      });
  }

  // 4. Page Contents
  console.log("📄 Insertion des contenus de pages (page_contents)...");

  const pagesData = [
    // HOME PAGE
    {
      page_slug: "home",
      section_key: "hero_title_small",
      content_value: "MACOF HOLDING",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_title_main",
      content_value:
        "L'art de façonner <br/><span class=\"italic text-red-500 font-light\">l'avenir.</span>",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_desc",
      content_value:
        "Groupe guinéen structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_title_small",
      content_value: "PRÉSENTATION GÉNÉRALE",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_desc_1",
      content_value:
        "MACOF Holding incarne l'art de façonner l'avenir, en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "vision_desc_2",
      content_value:
        "Notre mission : Structurer, piloter et développer nos filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur.",
      content_type: "text",
    },
    {
      page_slug: "home",
      section_key: "realisations",
      content_value: JSON.stringify([
        {
          title: "Projets Résidentiels",
          category: "Immobilier",
          image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Gastronomie Premium",
          category: "Restauration",
          image:
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Exploitation Minière",
          category: "Mining",
          image:
            "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
        },
        {
          title: "Communication Visuelle",
          category: "Print & Com",
          image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Transport Fret",
          category: "Transit",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
        },
        {
          title: "Ressources Marines",
          category: "Fishing",
          image:
            "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
        },
      ]),
      content_type: "json",
    },
    {
      page_slug: "home",
      section_key: "actualites",
      content_value: JSON.stringify([
        {
          date: "Octobre 2026",
          category: "Institutionnel",
          title:
            "MACOF Holding réaffirme sa position de leader dans l'économie guinéenne",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
        },
        {
          date: "Septembre 2026",
          category: "Immobilier",
          title: "Lancement de nouveaux projets d'infrastructures structurants",
          image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
        },
        {
          date: "Août 2026",
          category: "Restauration",
          title:
            "SEBA International étend ses services de restauration collective",
          image:
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop",
        },
      ]),
      content_type: "json",
    },

    // ABOUT PAGE
    {
      page_slug: "about",
      section_key: "hero_title",
      content_value: 'MACOF <span class="italic text-[#b8142b]">Holding</span>',
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "hero_desc",
      content_value:
        "MACOF Holding est un groupe de droit guinéen structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie. À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "hero_img",
      content_value:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "vision_text",
      content_value:
        "Devenir un groupe de référence, reconnu pour son excellence, sa performance durable et sa contribution au développement économique de la Guinée et au-delà de la sous-région ouest-africaine.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "mission_text",
      content_value:
        "Structurer, piloter et développer ses filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur pour l'ensemble des parties prenantes — actionnaires, collaborateurs, partenaires, clients et la collectivité nationale.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "valeurs_text",
      content_value:
        "Excellence - Viser l'excellence dans tout ce que nous entreprenons\nInnovation - Innover en permanence pour rester à la pointe\nIntégrité - Opérer avec transparence et respect de nos engagements\nEngagement - S'engager envers nos clients, partenaires et communauté\nResponsabilité - Contribuer au développement durable\nEsprit d'équipe - Travailler ensemble pour atteindre l'excellence collective",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2018",
      content_value:
        "Fondation de MACOF SARL sous la forme d'une Société à Responsabilité Limitée (SARL) en République de Guinée, marquant le point de départ des activités du groupe.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2023",
      content_value:
        "Évolution vers une Société Anonyme (SA), traduisant une phase d'expansion et de structuration renforcée, avec une gouvernance formelle et une capacité d'investissement élargie.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "historique_2026",
      content_value:
        "Adoption d'un modèle de Holding afin d'optimiser la gouvernance, la coordination stratégique et le développement sectoriel du groupe, dans une logique de spécialisation par filiale.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "org_text_1",
      content_value:
        "MACOF Holding développe ses activités à travers six filiales expertes dans leurs domaines respectifs, chacune dédiée à un secteur stratégique de l'économie guinéenne : Immobilier & BTP, Restauration & Traiteur, Communication & Impression, Activités minières, Transit & Logistique, et Pêche & Ressources halieutiques.",
      content_type: "text",
    },
    {
      page_slug: "about",
      section_key: "org_text_2",
      content_value:
        "La structure holding permet une coordination stratégique efficace tout en offrant à chaque filiale l'autonomie nécessaire pour exceller dans son domaine d'expertise spécifique.",
      content_type: "text",
    },

    // IMMOBILIER
    {
      page_slug: "immobilier",
      section_key: "hero_title",
      content_value: "MACOF Immobilier SARL",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "hero_desc",
      content_value:
        "Filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP).",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "content_title",
      content_value: "Conception, Réalisation & Infrastructures",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "content_body",
      content_value:
        "MACOF Immobilier SARL intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurants. Grâce à une organisation rigoureuse et à une expertise technique adaptée aux exigences du secteur, la filiale contribue activement au développement urbain et à la modernisation des infrastructures.",
      content_type: "text",
    },
    {
      page_slug: "immobilier",
      section_key: "services",
      content_value: JSON.stringify([
        "L'acquisition et la valorisation de terrains",
        "La conception et la construction de bâtiments résidentiels, commerciaux et administratifs",
        "La promotion et la commercialisation de biens immobiliers",
        "La gestion locative et patrimoniale",
        "Les travaux publics et ouvrages d'infrastructures",
        "Les travaux de réhabilitation, d'aménagement et de modernisation urbaine",
      ]),
      content_type: "json",
    },

    // RESTAURATION
    {
      page_slug: "restauration",
      section_key: "hero_title",
      content_value: "SEBA INTERNATIONAL",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "hero_desc",
      content_value:
        "Restauration, Boulangerie, Pâtisserie, Traiteur, Événementiel",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "content_title",
      content_value: "Excellence culinaire & Qualité",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "content_body",
      content_value:
        "Un établissement haut de gamme alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité, structuré autour de deux pôles d'activités principaux : Le Pôle Boulangerie (fabrication quotidienne sur place, fraîcheur, saveur authentique) et Le Pôle Restauration (commerciale premium, collective structurée, événementielle et traiteur).",
      content_type: "text",
    },
    {
      page_slug: "restauration",
      section_key: "services",
      content_value: JSON.stringify([
        "Restauration commerciale premium : Expérience culinaire soignée",
        "Restauration collective structurée : Cantines d'entreprises et bases minières",
        "Restauration événementielle & traiteur : Mariages, conférences, cocktails",
        "Boulangerie & Pâtisserie : Fabrication artisanale quotidienne",
        "Fast-Foods & Pizzeria : Saveurs du monde et plats rapides",
        "Plats de résistance & Spécialités Africaines",
      ]),
      content_type: "json",
    },

    // PRINT
    {
      page_slug: "print",
      section_key: "hero_title",
      content_value: "MACOF Print & Com SARL",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "hero_desc",
      content_value:
        "Imprimerie professionnelle, communication visuelle et événementiel",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "content_title",
      content_value: "Valorisation de votre image",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "content_body",
      content_value:
        "Elle accompagne entreprises, institutions et organisations dans la conception et la valorisation de leur image. La filiale se distingue particulièrement par son expertise dans l'organisation et la gestion de grands événements, incluant le montage technique, la coordination logistique et l'accompagnement stratégique de manifestations.",
      content_type: "text",
    },
    {
      page_slug: "print",
      section_key: "services",
      content_value: JSON.stringify([
        "Création d'identités visuelles et de supports institutionnels",
        "Impression numérique et offset de haute qualité",
        "Production de supports publicitaires et signalétiques",
        "Montage technique et coordination logistique d'événements",
        "Accompagnement stratégique de manifestations publiques",
      ]),
      content_type: "json",
    },

    // MINING
    {
      page_slug: "mining",
      section_key: "hero_title",
      content_value: "MACOF Mining SARL",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "hero_desc",
      content_value:
        "Activités minières et valorisation des ressources naturelles",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "hero_bg",
      content_value:
        "https://image.pollinations.ai/prompt/mining%20quarry%20industrial%20heavy%20machinery?width=2000&height=1200&nologo=true",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "content_title",
      content_value: "Exploitation responsable et durable",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "content_body",
      content_value:
        "MACOF Mining SARL évolue dans le respect des normes réglementaires et environnementales, avec pour objectif de contribuer au développement durable et structuré du secteur minier guinéen.",
      content_type: "text",
    },
    {
      page_slug: "mining",
      section_key: "services",
      content_value: JSON.stringify([
        "Exploration et exploitation minière",
        "Sous-traitance et appui aux opérations minières",
        "Transport et commercialisation de produits miniers",
        "Respect rigoureux des normes environnementales",
        "Soutien au développement communautaire",
      ]),
      content_type: "json",
    },

    // TRANSIT
    {
      page_slug: "transit",
      section_key: "hero_title",
      content_value: "MACOF Transit SARL",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "hero_desc",
      content_value:
        "Transit, logistique, transport de marchandises et services de voyage",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "hero_bg",
      content_value:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "content_title",
      content_value: "Fiabilité, conformité et efficacité",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "content_body",
      content_value:
        "Grâce à une organisation structurée et à une parfaite maîtrise des procédures réglementaires, MACOF Transit SARL facilite les échanges commerciaux et les déplacements internationaux, en garantissant fiabilité, conformité et efficacité.",
      content_type: "text",
    },
    {
      page_slug: "transit",
      section_key: "services",
      content_value: JSON.stringify([
        "Le dédouanement et les formalités administratives",
        "Le transport national et international",
        "La gestion logistique et le suivi des expéditions",
        "L'assistance aux opérations d'import-export",
        "La vente de billets d'avion et l'accompagnement aux voyages",
      ]),
      content_type: "json",
    },

    // FISHING
    {
      page_slug: "fishing",
      section_key: "hero_title",
      content_value: "MACOF Fishing SARL",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "hero_desc",
      content_value:
        "Activités halieutiques et valorisation des ressources maritimes",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "hero_bg",
      content_value:
        "https://image.pollinations.ai/prompt/large%20industrial%20fishing%20vessel%20in%20ocean%20nets?width=2000&height=1200&nologo=true",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "content_title",
      content_value: "Gestion responsable des ressources",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "content_body",
      content_value:
        "MACOF Fishing SARL contribue au développement du secteur de la pêche en garantissant qualité, respect des normes et gestion responsable des ressources maritimes de la Guinée.",
      content_type: "text",
    },
    {
      page_slug: "fishing",
      section_key: "services",
      content_value: JSON.stringify([
        "La pêche artisanale et industrielle",
        "La transformation et la conservation des produits halieutiques",
        "La commercialisation et la distribution des produits de la mer",
        "Activités liées à l'exploitation durable des ressources marines",
        "Contrôle qualité et respect des normes sanitaires",
      ]),
      content_type: "json",
    },
  ];

  await db.delete(page_contents); // Nettoyage de la table

  for (const page of pagesData) {
    await db
      .insert(page_contents)
      .values({
        page_slug: page.page_slug,
        section_key: page.section_key,
        content_value: page.content_value,
        content_type: page.content_type,
      })
      .onConflictDoUpdate({
        target: [page_contents.page_slug, page_contents.section_key],
        set: {
          content_value: page.content_value,
          content_type: page.content_type,
        },
      });
  }

  console.log("🎉 Seeding terminé avec succès !");
}

seed()
  .catch((error) => {
    console.error("❌ Erreur lors du seeding :", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });

```
### .\api\src\middleware\auth.ts
```ts
import type { Context, Next } from 'hono';
import { verifyToken, type TokenPayload } from '../services/jwt';
import { error } from '../utils/response';

export interface AuthUser extends TokenPayload {}

export const authMiddleware = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(c, 'Token d\'authentification manquant', 401);
  }

  const token = authHeader.substring(7);

  // Only wrap token verification: downstream handler errors must NOT
  // be swallowed and reported as 401.
  try {
    const payload = await verifyToken(token);
    c.set('user', payload as AuthUser);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Token invalide ou expire';
    return error(c, message, 401);
  }

  await next();
};

```
### .\api\src\middleware\cors.ts
```ts
import type { Context, Next } from "hono";
import { cors } from "hono/cors";

const ALLOWED_ORIGINS: string[] = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:4173",
  "https://macof-holding.com",
  "https://www.macof-holding.com",
  "https://macof-holding-frontend.vercel.app",
  "https://macof-holding-frontend-git-main-travaileinsof-1730s-projects.vercel.app",
];

export const corsMiddleware = () => {
  return cors({
    origin: (origin: string | undefined, c: Context) => {
      if (!origin) return "*";

      if (process.env.NODE_ENV === "development") {
        return origin;
      }

      if (ALLOWED_ORIGINS.includes(origin)) {
        return origin;
      }

      return ALLOWED_ORIGINS[0];
    },
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposeHeaders: ["Content-Length", "X-Request-Id"],
    maxAge: 86400,
    credentials: true,
  });
};

```
### .\api\src\middleware\errorHandler.ts
```ts
import type { Context } from 'hono';
import type { ZodError } from 'zod';
import { error } from '../utils/response';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export function errorHandler(err: Error, c: Context) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${err.message}`, err.stack);

  // Handle Zod validation errors
  if (isZodError(err)) {
    const firstIssue = err.issues?.[0];
    const message = firstIssue?.message || 'Donnees invalides';
    return error(c, message, 422);
  }

  // Handle custom app errors with status
  const appError = err as AppError;
  if (appError.status) {
    return error(c, appError.message, appError.status);
  }

  // Handle JSON parse errors
  if (err.message.includes('JSON') || err.message.includes('json')) {
    return error(c, 'Donnees JSON invalides', 400);
  }

  // Default internal server error
  if (process.env.NODE_ENV === 'production') {
    return error(c, 'Une erreur interne est survenue', 500);
  }

  return error(c, `Erreur interne: ${err.message}`, 500);
}

function isZodError(err: Error): err is ZodError {
  return 'issues' in err && Array.isArray((err as ZodError).issues);
}

```
### .\frontend\src\hooks\useRealtimeSync.ts
```ts
import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const SSE_BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/api\/v1\/?$/, '')
  : 'http://localhost:3002';

const SSE_URL = `${SSE_BASE_URL}/api/v1/events`;

const MIN_RETRY_MS = 5_000;
const MAX_RETRY_MS = 60_000;

/**
 * Hook to listen to Server-Sent Events (SSE) and invalidate React Query cache.
 * Implements exponential-backoff reconnection so a flaky connection never
 * floods the server with rapid reconnects.
 */
export function useRealtimeSync() {
  const queryClient = useQueryClient();
  const retryDelay = useRef(MIN_RETRY_MS);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const esRef = useRef<EventSource | null>(null);
  const unmounted = useRef(false);

  useEffect(() => {
    unmounted.current = false;

    function connect() {
      if (unmounted.current) return;

      // Close any existing connection first
      if (esRef.current) {
        esRef.current.close();
        esRef.current = null;
      }

      const es = new EventSource(SSE_URL);
      esRef.current = es;

      es.onopen = () => {
        if (unmounted.current) { es.close(); return; }
        console.log('[Realtime Sync] Connected to SSE');
        retryDelay.current = MIN_RETRY_MS; // reset backoff on success
      };

      es.addEventListener('invalidate', (event) => {
        if (unmounted.current) return;
        try {
          const data = JSON.parse(event.data);
          if (data?.entity) {
            console.log(`[Realtime Sync] Invalidating: ${data.entity}`);
            queryClient.invalidateQueries({ queryKey: [data.entity] });

            if (data.entity === 'pages' || data.entity === 'filiales') {
              queryClient.invalidateQueries({ queryKey: ['contactData'] });
              queryClient.invalidateQueries({ queryKey: ['domainesData'] });
            }
          }
        } catch (err) {
          console.error('[Realtime Sync] Parse error:', err);
        }
      });

      es.onerror = () => {
        if (unmounted.current) return;
        es.close();
        esRef.current = null;

        const delay = retryDelay.current;
        console.warn(`[Realtime Sync] SSE error — retrying in ${delay / 1000}s`);

        // Exponential backoff
        retryDelay.current = Math.min(retryDelay.current * 2, MAX_RETRY_MS);

        timerRef.current = setTimeout(() => {
          if (!unmounted.current) connect();
        }, delay);
      };
    }

    connect();

    return () => {
      unmounted.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (esRef.current) {
        esRef.current.close();
        esRef.current = null;
      }
      console.log('[Realtime Sync] Disconnected');
    };
  }, [queryClient]);
}

```
### .\frontend\src\hooks\useSettings.ts
```ts
import { useState, useEffect } from 'react';
import { api } from '../lib/api';

export interface PublicSettings {
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  social_facebook: string;
  social_linkedin: string;
  social_instagram: string;
  social_twitter: string;
  whatsapp_number: string;
}

const defaultSettings: PublicSettings = {
  contact_email: 'macofholding2018@gmail.com',
  contact_phone: '+224 625 74 46 26',
  contact_address: 'Manquepa, en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
  social_facebook: '',
  social_linkedin: '',
  social_instagram: '',
  social_twitter: '',
  whatsapp_number: '',
};

export function useSettings() {
  const [settings, setSettings] = useState<PublicSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/api/v1/settings');
        if (res.data.success && res.data.data?.map) {
          const map = res.data.data.map;
          setSettings({
            contact_email: map.contact_email || defaultSettings.contact_email,
            contact_phone: map.contact_phone || defaultSettings.contact_phone,
            contact_address: map.contact_address || defaultSettings.contact_address,
            social_facebook: map.social_facebook || defaultSettings.social_facebook,
            social_linkedin: map.social_linkedin || defaultSettings.social_linkedin,
            social_instagram: map.social_instagram || defaultSettings.social_instagram,
            social_twitter: map.social_twitter || defaultSettings.social_twitter,
            whatsapp_number: map.whatsapp_number || defaultSettings.whatsapp_number,
          });
        }
      } catch (err) {
        console.error('Failed to load settings', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  return { settings, loading };
}

```

