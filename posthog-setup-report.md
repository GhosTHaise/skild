# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Skild TanStack Start project. The following changes were made:

- **`src/routes/__root.tsx`**: Added `PostHogProvider` from `@posthog/react` wrapping the entire app body. Configured with env vars, the `/ingest` reverse proxy path, exception capture, and debug mode in development.
- **`vite.config.ts`**: Added reverse proxy rules routing `/ingest/static`, `/ingest/array`, and `/ingest` to the PostHog asset and ingestion origins, avoiding CORS issues in development.
- **`src/routes/index.tsx`**: Replaced bare global `posthog.capture()` calls with the `usePostHog()` hook, wiring up `browse_registry_clicked` and `publish_skill_clicked` events.
- **`src/components/navbar.tsx`**: Uncommented and activated the `sign_in_clicked` event using the `usePostHog()` hook.
- **`src/components/skill-card.tsx`**: Enabled the `install_command_copied` and `skill_opened` events with the `usePostHog()` hook; restored the `handleCopy` function that was previously commented out.
- **`.env`**: Created with `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables.

## Events

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicks the 'Browse Registry' CTA on the home page hero section | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the 'Publish Skill' CTA on the home page hero section | `src/routes/index.tsx` |
| `sign_in_clicked` | User clicks the Sign In button in the navbar (signed-out state) | `src/components/navbar.tsx` |
| `install_command_copied` | User copies the install command for a skill card | `src/components/skill-card.tsx` |
| `skill_opened` | User clicks the 'Open' link to view a skill detail page | `src/components/skill-card.tsx` |

## Next steps

Once users start interacting with the app, you can build insights in PostHog around these events:

- **Conversion funnel**: `browse_registry_clicked` → `skill_opened` — measures how many users who browse actually open a skill
- **Activation funnel**: `sign_in_clicked` → (Clerk sign-in complete) — tracks sign-in conversion
- **Engagement**: `install_command_copied` count over time — a key signal of developer intent
- **CTAs**: Compare `browse_registry_clicked` vs `publish_skill_clicked` to understand whether users are more interested in consuming or contributing skills

Visit your PostHog project to build these: https://us.posthog.com/project/397222

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
