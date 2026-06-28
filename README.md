# 📚 Library

A simple, frontend-only web app to track your personal book collection. Add books with their author, page count, and reading status — and remove them when you're done.

---

## Features

- Add books via a modal dialog (title, author, pages, read/not-read status)
- Books display as cards in a responsive grid
- Remove individual books with a single click
- No backend, no database — everything lives in the browser session

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (CSS Variables, Flexbox) |
| Logic | Vanilla JavaScript (DOM API) |
| Fonts | DM Sans + DM Mono (Google Fonts) |

---

## Project Structure

```
library/
├── index.html   — App shell, dialog markup
├── style.css    — All styles and layout
└── script.js    — Book add/remove logic
```

---

## Getting Started

No build step or dependencies needed. Just open the file directly in a browser:

```bash
# Clone or download the project, then:
open index.html
```

Or serve it locally if you prefer:

```bash
npx serve .
# Visit http://localhost:3000
```

---

## Usage

1. Click **+ Add Book** in the header.
2. Fill in the book title, author name, and optionally the page count.
3. Select a reading status — **Read** or **Not Read**.
4. Click **Add Book** to save the card to the grid.
5. Click **Remove** on any card to delete it.

> Note: Books are not persisted between page refreshes. Refresh the page and the grid resets.

---

## Known Limitations

- No local storage persistence — data is lost on refresh.
- No duplicate detection — the same book can be added multiple times.
- The form uses the native `command`/`commandfor` dialog API, which requires a modern Chromium-based browser (Chrome 126+, Edge 126+). Firefox and Safari may need a JS fallback for the open/close buttons.

---

## License

MIT © Anas Dagga
