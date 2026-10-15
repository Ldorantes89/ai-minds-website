# Agent avatars

Each AI employee on the AI Minds site has a portrait that shows up in the hero
cluster, on the "Meet the team" cards, and on the `/agents` detail page.

Until a real image is dropped in, the site renders a **polished fallback** — a
glossy, 3D-looking character chip in the agent's signature color with their
lucide icon centered. The site looks complete and intentional with zero images.

## How to add a real avatar

1. **Export a PNG** for the agent. Recommended:
   - Square (1:1), **512×512** or larger.
   - Transparent background works best (the chip glow sits behind it), but a
     filled square is fine too — it's masked into a circle.
   - Name the file exactly `{slug}.png` (lowercase).

2. **Drop it here** in `public/avatars/`. For example:

   ```
   public/avatars/ava.png
   ```

3. **Flip the flag.** Open `src/lib/agents.ts`, find that agent, and set:

   ```ts
   hasAvatar: true,
   ```

That's it. The `<Avatar>` component will render `/avatars/{slug}.png` via
`next/image` instead of the fallback. No other changes needed.

## The 8 agents and their filenames

| Slug    | Persona | Role                      | Signature color |
| ------- | ------- | ------------------------- | --------------- |
| `ava`   | Ava     | Customer Support          | `#14b8a6` teal  |
| `leo`   | Leo     | Sales & Lead Follow-Up    | `#f97316` orange|
| `bella` | Bella   | Front Desk & Scheduling   | `#6366f1` indigo|
| `maya`  | Maya    | Marketing & Content       | `#ec4899` pink  |
| `penny` | Penny   | Cash Flow & Finance       | `#22c55e` green |
| `vera`  | Vera    | Invoicing & Collections   | `#f59e0b` amber |
| `ruby`  | Ruby    | Reviews & Reputation      | `#e11d48` rose  |
| `max`   | Max     | Paperwork & Documents     | `#3b82f6` blue  |

So the expected files are:

```
public/avatars/ava.png
public/avatars/leo.png
public/avatars/bella.png
public/avatars/maya.png
public/avatars/penny.png
public/avatars/vera.png
public/avatars/ruby.png
public/avatars/max.png
```

## Tips

- Keep the character framed and centered; the image is masked into a circle.
- Match (or complement) the agent's signature color so the chip glow feels
  cohesive — the glow behind the image uses that color.
- You can mix-and-match: real PNGs for some agents, fallback chips for others.
