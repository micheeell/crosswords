## Crosswords

🚧 Repository under construction.

It aims to host J's ___sonnets croisés___ under a [Creative Commons](https://creativecommons.org/) License.


### Roadmap

- [ ] add licence to repo (or is it license with an S?)
- [x] create a .gitignore
  ```bash
  echo -e "*\n!.gitignore\n!README.md" >> .gitignore
  git add *
  git commit -m "chores(setup): setting up initial .gitignore for repo"
  ```
- [x] make **`main`** the default branch
  ```bash
  git branch -M main
  git push origin main
  ```
- [ ] add definitions, purpose, meaning, scope, author
- [ ] create a [CHANGELOG](https://keepachangelog.com/en/1.1.0/)
- [ ] add tags
- [x] create a static crossword layout
- [ ] create a dynamic crossword page
- [x] make the repo a [github page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) available at [https://micheeell.github.io/crosswords/](https://micheeell.github.io/crosswords/)
- [ ] link [other](https://www.opensourcealternative.to/project/linkfree) [projects](https://csszengarden.com/), [semver](https://semver.org/)..etc
- [ ] generate traffic
- [ ] find a way to make the site generate income
- [ ] be filthy rich
- [ ] rule the world
- [ ] impose communism on everyone
- [ ] die
- [ ] resurrect
- [ ] make the world ~~love~~ *worship* me

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

+ [Sonnet *](https://www.youtube.com/watch?v=r2vGa-yLiso) [definition](https://fr.wikipedia.org/wiki/Sonnet) (* use [FreeTube](https://github.com/FreeTubeApp/FreeTube))
