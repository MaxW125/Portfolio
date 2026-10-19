# Max Westmoreland — Portfolio

My personal site: **[maxw125.github.io/Portfolio](https://maxw125.github.io/Portfolio/)**

It covers my projects (Zurg, Bobcat Plus, HosterWatch), my experience and certifications, and has a contact form.

## Stack

- React and Vite
- Tailwind CSS
- Framer Motion for the scroll animations
- Formspree for the contact form
- GitHub Pages, deployed by GitHub Actions on every push to `main`

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/Portfolio/.

To check a production build, run `npm run build && npm run preview`.

## Layout

- `src/components/portfolio/`: one component per section (Hero, About, Projects, Experience, Certs, Contact)
- `src/assets/portfolio/`: images
- `public/resume.pdf`: the resume linked from the Contact section
