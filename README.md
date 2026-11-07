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
- Progress is saved in the browser (localStorage)

## Run it

It is one HTML file with no build step. Open `index.html` in a browser, or deploy the folder to any static host (it is set up for Vercel).

The AI Tutor only works when the page runs inside Claude (as a Claude artifact). On other hosts, the Tutor panel says it is not available, and everything else works.

## Credits

Lesson content is adapted and simplified from these OpenStax books (Rice University), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/):

- Clark, Douglas & Choi, *Biology 2e*: https://openstax.org/details/books/biology-2e
- Betts et al., *Anatomy and Physiology 2e*: https://openstax.org/details/books/anatomy-and-physiology-2e
- Parker et al., *Microbiology*: https://openstax.org/details/books/microbiology

Changes: text rewritten in simple English, reorganized, and new questions, nursing links, and drawings added. No figures from the books are used.

Inspired by [Study Buddy](https://github.com/Soma-Majumder/Study-Buddy) by Soma Majumder and Dr. Ivaylo Nanev.

TEAS is a registered trademark of Assessment Technologies Institute (ATI). CellWise is not made by or connected to ATI. It is a study helper and does not replace your course, textbook, or official TEAS materials.
