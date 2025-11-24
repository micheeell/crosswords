## Crosswords

🚧 Work in progress.

This repository hosts J's ___sonnets croisés___ under a [Creative Commons](https://creativecommons.org/) License.

They're currently available at [https://micheeell.github.io/crosswords/](https://micheeell.github.io/crosswords/).


### Roadmap

- [ ] Populate homepage
    + Complete sonnet
    + Add [external](https://gnu.support/gnu-philosophy/index.html) [links](https://www.opensourcealternative.to/project/linkfree)
    + Style it (with [CSS](https://csszengarden.com/)?)
    + Add links to [validators](#standards)
- [x] Refactor css with variables
- [ ] Make dark/light mode + color theme persistent
- [ ] create a dynamic crossword page
    1. Make typing easy:
        * after typing a character => move to next cell
        * backspace on empty cell => deletes previous cell value
        * implement orientation (horizontal/vertical)
    2. selecting a cell highlights matching definition
    3. double clicking on a cell changes orientation
    4. clicking on a definition highlights corresponding cell in the grid
    5. validates word after completing
    6. success animation upon completing grid (correctly)
    7. highlight incorrect cells when completing grid
- [ ] Create a (js?) script that automatically generates a html from:
    - 12 verses (definitions)
    - and black square coordinates. 
- [ ] generate web traffic
- [ ] find a way to make the site generate income
- [ ] be filthy rich
- [ ] rule the world
- [ ] destroy patriarchy
- [ ] impose communism on everyone
- [ ] end capitalism


### Standards

+ W3C Validators
    + [HTML Validator](https://validator.w3.org/)
    + [CSS Validator](https://jigsaw.w3.org/css-validator/)
+ [HTMLHint](https://htmlhint.com/)
    + Install with
    ```bash
    npm install -g htmlhint
    ```
    + Configure it with
    ```bash
    echo '{ "tagname-lowercase": true, "attr-lowercase": true, "doctype-first": true, "id-unique": true, "src-not-empty": true }' > .htmlhintrc
    ```
    + Run it with: `htmlhint index.html`
+ [Stylelint](https://stylelint.io/)
    + Install with:
    ```bash
    npm install -g stylelint stylelint-config-standard
    ```
    + Configure with:
    ```bash
    echo -e "{\n  \"extends\": \"stylelint-config-standard\"\n}" > .stylelintrc.json
    ```
    + Run it with: `stylelint assets/*.css`


### See also

+ [Sonnet*](https://www.youtube.com/watch?v=r2vGa-yLiso) [definition](https://fr.wikipedia.org/wiki/Sonnet) (* use [FreeTube](https://github.com/FreeTubeApp/FreeTube))
+ [crossword javascript](https://github.com/dwmkerr/crosswords-js) library inspired by [the guardian](https://www.theguardian.com/) [crosswords](https://www.theguardian.com/crosswords)
+ Live example of a [dynamic crosswords grid](https://sdk.mygamify.fr/mots-croises/jouer/2025-11-19) from [leparisien.fr](https://www.leparisien.fr/jeux/mots-croises/).


### Credits

+ Most icons on the site are svg versions of free [fontawesome icons](https://fontawesome.com).
+ Font ["Computer Modern"](https://ctan.org/pkg/cm) is served by [jsdeliver CDN](https://cdn.jsdelivr.net/) made available by Vince Salvino [@vsalvino](https://github.com/vsalvino).


## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg "LICENSE-MIT")  
![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg "LICENSE-CC")

- **Code** in this repository is [licensed](https://mit-license.org/) under the [MIT License](./LICENSE-MIT)
- **Content** (text, images, documentation) is [licensed](https://creativecommons.org/licenses/by/4.0/) under [Creative Commons Attribution 4.0 International](./LICENSE-CC).
