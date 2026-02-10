# E-commerce Frontend Architecture (Next.js App Router)

## 📁 Full Folder Structure

```txt
.
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── auth/
│   │   │       ├── login/page.tsx
│   │   │       └── register/page.tsx
│   │   ├── (shop)/
│   │   │   ├── cart/page.tsx
│   │   │   ├── checkout/page.tsx
│   │   │   └── orders/
│   │   │       ├── page.tsx
│   │   │       └── [orderId]/page.tsx
│   │   ├── (admin)/
│   │   │   └── admin/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx
│   │   │       ├── products/page.tsx
│   │   │       ├── orders/page.tsx
│   │   │       └── users/page.tsx
│   │   ├── api/                     # Optional Next route handlers only for BFF/proxy if ever needed
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── providers.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── table.tsx
│   │   │   ├── badge.tsx
│   │   │   └── skeleton.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── container.tsx
│   │   └── shared/
│   │       ├── product-card.tsx
│   │       ├── pagination.tsx
│   │       ├── price.tsx
│   │       └── empty-state.tsx
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── login-form.tsx
│   │   │   │   └── register-form.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-login.ts
│   │   │   │   ├── use-register.ts
│   │   │   │   └── use-current-user.ts
│   │   │   ├── services/
│   │   │   │   └── auth-api.ts
│   │   │   ├── store/
│   │   │   │   └── auth-slice.ts
│   │   │   ├── types/
│   │   │   │   └── auth.types.ts
│   │   │   └── utils/
│   │   │       └── auth-mappers.ts
│   │   │
│   │   ├── products/
│   │   │   ├── components/
│   │   │   │   ├── product-grid.tsx
│   │   │   │   ├── product-filters.tsx
│   │   │   │   └── product-gallery.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-products.ts
│   │   │   │   └── use-product-detail.ts
│   │   │   ├── services/
│   │   │   │   └── products-api.ts
│   │   │   ├── types/
│   │   │   │   └── product.types.ts
│   │   │   └── utils/
│   │   │       └── product-mappers.ts
│   │   │
│   │   ├── cart/
│   │   │   ├── components/
│   │   │   │   ├── cart-item.tsx
│   │   │   │   ├── cart-summary.tsx
│   │   │   │   └── coupon-input.tsx
│   │   │   ├── hooks/
│   │   │   │   └── use-cart-sync.ts
│   │   │   ├── store/
│   │   │   │   └── cart-slice.ts
│   │   │   ├── types/
│   │   │   │   └── cart.types.ts
│   │   │   └── utils/
│   │   │       └── cart-calculations.ts
│   │   │
│   │   ├── checkout/
│   │   │   ├── components/
│   │   │   │   ├── shipping-form.tsx
│   │   │   │   ├── payment-method.tsx
│   │   │   │   └── order-review.tsx
│   │   │   ├── hooks/
│   │   │   │   └── use-place-order.ts
│   │   │   ├── services/
│   │   │   │   └── checkout-api.ts
│   │   │   └── types/
│   │   │       └── checkout.types.ts
│   │   │
│   │   ├── orders/
│   │   │   ├── components/
│   │   │   │   ├── order-list.tsx
│   │   │   │   └── order-status-badge.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-orders.ts
│   │   │   │   └── use-order-detail.ts
│   │   │   ├── services/
│   │   │   │   └── orders-api.ts
│   │   │   └── types/
│   │   │       └── order.types.ts
│   │   │
│   │   └── admin/
│   │       ├── components/
│   │       │   ├── admin-table.tsx
│   │       │   ├── product-form.tsx
│   │       │   └── user-role-select.tsx
│   │       ├── hooks/
│   │       │   ├── use-admin-products.ts
│   │       │   ├── use-admin-orders.ts
│   │       │   └── use-admin-users.ts
│   │       ├── services/
│   │       │   └── admin-api.ts
│   │       ├── types/
│   │       │   └── admin.types.ts
│   │       └── utils/
│   │           └── admin-formatters.ts
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── axios.ts
│   │   │   ├── interceptors.ts
│   │   │   ├── endpoint-map.ts
│   │   │   └── query-client.ts
│   │   ├── store/
│   │   │   ├── index.ts
│   │   │   ├── root-reducer.ts
│   │   │   ├── middleware.ts
│   │   │   ├── hooks.ts
│   │   │   └── listener.ts
│   │   ├── auth/
│   │   │   ├── token-manager.ts
│   │   │   ├── auth-session.ts
│   │   │   └── role-utils.ts
│   │   └── navigation/
│   │       └── route-guards.ts
│   │
│   ├── hooks/
│   │   ├── use-debounce.ts
│   │   ├── use-pagination.ts
│   │   ├── use-disclosure.ts
│   │   └── use-is-mounted.ts
│   │
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── currency.ts
│   │   ├── date.ts
│   │   ├── storage.ts
│   │   └── error.ts
│   │
│   ├── constants/
│   │   ├── app-routes.ts
│   │   ├── query-keys.ts
│   │   ├── roles.ts
│   │   ├── cart.ts
│   │   └── pagination.ts
│   │
│   ├── types/
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   └── env.types.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   └── middleware.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## Folder-by-folder (short explanation)

- `src/app`: App Router entrypoint; route groups `(public)`, `(shop)`, `(admin)` keep layouts and access boundaries explicit.
- `src/components`: Cross-feature presentational components.
  - `ui/`: Design-system primitives.
  - `layout/`: App shell pieces.
  - `shared/`: Reusable domain-aware pieces used across features.
- `src/features`: Core feature-based architecture. Each feature owns its UI, hooks, services, types, and feature-local utilities.
- `src/lib/api`: Shared networking infrastructure (Axios instance, interceptors, query client, endpoint mapping).
- `src/lib/store`: Global Redux store composition and typed hooks.
- `src/lib/auth`: Auth/session helpers (in-memory access token handling + role utilities).
- `src/hooks`: Generic reusable hooks not tied to one feature.
- `src/utils`: Pure helpers for formatting, parsing, and error normalization.
- `src/constants`: Route maps, query keys, roles, and static app configuration.
- `src/types`: Global TypeScript contracts reused by multiple features.
- `src/styles`: Global styling layer (Tailwind base imports and custom tokens).
- `src/middleware.ts`: Route protection and role-based guard entrypoint.

---

## Data flow (production-ready)

### 1) API data fetching flow

1. UI in `src/app/*/page.tsx` composes feature components.
2. Feature component calls feature hook (example: `features/products/hooks/use-products.ts`).
3. Hook uses TanStack Query `useQuery`/`useMutation`.
4. Query function calls feature service (`features/products/services/products-api.ts`).
5. Service uses shared Axios client from `lib/api/axios.ts`.
6. Interceptors in `lib/api/interceptors.ts` attach access token (from in-memory token manager) and normalize errors.
7. Response is cached by React Query under keys from `constants/query-keys.ts`.

### 2) Where React Query is used

Use React Query for **all server state**:
- Product listing/detail
- User profile fetch
- Orders list/detail
- Checkout/order placement mutations
- Admin lists (products/orders/users)

Benefits: caching, background refetch, stale-time control, retries, request dedupe.

### 3) Where Redux Toolkit is used

Use Redux only for **client/global state** that must be shared broadly and updated synchronously:
- `auth-slice`: user auth metadata (`isAuthenticated`, user summary, role, auth status)
- `cart-slice`: cart items, selected shipping mode, coupon code, optimistic quantities
- UI global flags if needed (drawer open, theme mode, etc.)

Do **not** duplicate server resources in Redux if React Query already owns them.

### 4) Cart & auth state flow

- **Auth flow**:
  - Login mutation succeeds → API sets refresh token cookie (httpOnly) and returns access token.
  - Access token stored in memory via `token-manager.ts` (not localStorage).
  - `auth-slice` updates authenticated state + role.
  - On tab refresh, app attempts silent session restore endpoint (cookie-based) to rehydrate memory token.
- **Cart flow**:
  - Cart UI dispatches `cart-slice` actions for instant UX.
  - If server-synced cart exists, use mutation hooks (`use-cart-sync`) to persist changes.
  - On login, guest cart can be merged via dedicated API mutation and Redux replaced with canonical server cart.

---

## Route protection strategy (Next Middleware)

Use `src/middleware.ts` with matcher-driven protection:

- Protect user routes: `/checkout`, `/orders/:path*`
- Protect admin routes: `/admin/:path*`
- Public-only routes for non-auth users: `/auth/login`, `/auth/register` (redirect authenticated users away)

### Guard logic

1. Read lightweight auth signal from cookies (e.g., `session` presence / role hint).
2. For protected route without session hint → redirect to `/auth/login?next=<original-path>`.
3. For admin routes without `admin` role hint → redirect to `/403` or `/`.
4. Middleware does coarse filtering only; final authorization is re-validated client-side after hydration via current-user query.

This dual-check approach avoids flashing protected content and keeps security layered.

---

## Naming conventions (real-world)

- Files: `kebab-case.tsx` (`product-card.tsx`)
- Components: `PascalCase`
- Hooks: `useXxx` (`useProductDetail`)
- Redux slices: `<domain>-slice.ts`
- Query keys: tuple factories (`queryKeys.products.list(params)`)
- Types: `*.types.ts`
- API services: `<feature>-api.ts`

---

## Why this scales to 1M+ users

- Feature isolation minimizes merge conflicts and enables parallel squads.
- React Query sharply reduces API pressure via caching/deduping.
- Redux kept lean for deterministic client state only.
- Middleware + role checks provide scalable access control boundaries.
- Shared API/auth/store infrastructure centralizes cross-cutting concerns.
- Clear conventions improve onboarding and long-term maintainability.
