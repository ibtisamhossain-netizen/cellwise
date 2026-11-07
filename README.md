# CellWise

Biology and human anatomy & physiology for nursing students, in simple English.

CellWise is a single-page study app for English language learners preparing for nursing school and the ATI TEAS 7 science section. It has 23 chapters in three units:

1. **Cells and Transport**: cell theory, the cell membrane, passive, active, and bulk transport
2. **Biology for Nursing**: organelles, macromolecules, DNA and protein synthesis, mitosis and meiosis, Mendel's genetics, microorganisms and disease
3. **The Human Body**: body orientation and tissues, plus all 11 body systems on the TEAS outline

## Features

- Short lessons in simple English, with a "More detail" switch
- Tappable key words with a meaning, an example, and a Spanish, Bengali, or Chinese translation
- Read-aloud for every section, question, and word, with a slow speed
- "Nursing link" boxes that connect each idea to patient care
- Interactive practice: diffusion and osmosis simulations, a sodium-potassium pump walkthrough, a Punnett square, and "put the steps in order" games
- Chapter quizzes with an explanation after every answer, a "Fix my gaps" retry, spaced and mixed review, and a TEAS-style practice test
- Label-and-trace diagrams of the cell, heart, lungs, digestive tract, and urinary system
- Patient cases ("Think like a nurse") in the body-system chapters and on a Play page
- Feedback-loop sliders for blood sugar and body temperature
- A clickable body map on the home page, a timed word matching game, and a daily goal with a streak
- Progress is saved in the browser (localStorage)

## Run it

It is one HTML file with no build step. Open `index.html` in a browser, or deploy the folder to any static host (it is set up for Vercel).

The AI Tutor works in two ways:

- Inside Claude (as a Claude artifact), it uses the student's Claude account.
- On Vercel, it uses the server function in `api/tutor.js`, which calls the Google Gemini API on its free tier. Students do not need any account. Get a free key at https://aistudio.google.com/apikey, then set these in Vercel > Project > Settings > Environment Variables and redeploy:
  - `GEMINI_API_KEY` (required)
  - `TUTOR_MODEL` (optional: `gemini-3.5-flash` (default) or `gemini-3.1-flash-lite`, which allows more requests per minute)
  - `ALLOWED_ORIGINS` (optional, comma-separated site URLs allowed to call the Tutor)

On the free tier Google may use prompts to improve its products, and there is a daily request limit. If no key is set, the Tutor panel says it could not connect, and everything else still works.

## Credits

Lesson content is adapted and simplified from these OpenStax books (Rice University), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/):

- Clark, Douglas & Choi, *Biology 2e*: https://openstax.org/details/books/biology-2e
- Betts et al., *Anatomy and Physiology 2e*: https://openstax.org/details/books/anatomy-and-physiology-2e
- Parker et al., *Microbiology*: https://openstax.org/details/books/microbiology

Changes: text rewritten in simple English, reorganized, and new questions, nursing links, and drawings added. No figures from the books are used.

Inspired by [Study Buddy](https://github.com/Soma-Majumder/Study-Buddy) by Soma Majumder and Dr. Ivaylo Nanev.

TEAS is a registered trademark of Assessment Technologies Institute (ATI). CellWise is not made by or connected to ATI. It is a study helper and does not replace your course, textbook, or official TEAS materials.
