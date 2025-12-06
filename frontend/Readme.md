# Fashion-Items Project

## Team Name
TrendAura

## Team Members
- Rajveer Kaur
- Jaskomal Kaur
- Rishi Kumar

## Project Description
This project is a fashion items catalog where users can browse, filter, and view details of fashion products, including clothing, accessories, shoes and more.

## User Stories
1. As a user, I want to browse fashion categories, so that I can find items I like.
2. As a user, I want to see all items in a category, so that I can explore options before choosing.
3. As an admin, I want to add or update fashion items so the catalog stays current.
4. As a user, I want a clear header and footer, so that I know which team created the app.


## Local Setup
Follow these steps to set up the project locally.

## Environment Variables
#### Frontend (`frontend/.env`):
VITE_API_URL=http://localhost:4000
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=eyJkYXRhYmFzZVVybCI6InBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ"
VITE_CLERK_PUBLISHABLE_KEY=pk_test_YWR2YW5jZWQta2l3aS02MS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_jV5EShYWc6Fqgt1MfUKi8HTVFKNMnoZVGctitxvTuP

#### Backend (backend/.env):
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=Rajveer212004#
DB_NAME=fashion_items_dev
DATABASE_URL=postgresql://postgres:Rajveer212004%23@localhost:5432/fashion_items_dev?schema=public
CLERK_SECRET_KEY=sk_test_jV5EShYWc6Fqgt1MfUKi8HTVFKNMnoZVGctitxvTuP

## Replace placeholders (passwords, API keys, etc.) with my actual credentials.##


## Database Setup

- Install PostgreSQL if not already installed.
- Create a new database called fashion_items_dev.
- Update the DATABASE_URL in backend .env.
- Run Prisma migrations:
    * cd backend
    * npx prisma migrate dev
- Optional: seed the database:
    * npx prisma db seed
- Install Dependencies

## Backend ##
    * cd backend
    * npm install
## Frontend ##
    * cd frontend
    * npm install

## Running the Application

## Backend ##
    * cd backend
    * npm run dev
## Frontend ##
    * cd frontend
    * npm run dev

## Access
** Frontend: http://localhost:5173
** Backend API: http://localhost:4000

## Authentication

- Users can register, log in, and log out.
- Login/SignUp buttons are visible on the landing page.
- Protected routes require Clerk authentication via session tokens.
- Public routes are accessible to guests.

## Usage
- Open the landing page.
- Click Login or Sign Up.
- After authentication, users can:
    * Access protected routes
    * Manage personal account data
    * View user-specific content
- Guest users can browse limited content without logging in.

## Notes
- Backend uses Prisma for database management.
- Clerk handles all authentication.
- Make sure all environment variables are set before running the project.
- Use npm run dev separately for frontend and backend.

## Contact
Author: Rajveer Kaur
Email: rajveerkaur3@academic.rrc.ca