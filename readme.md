17JUL19 This is a pretty decent refactoring of your code.

### TODO

- Next steps would be integrating the affiliation dropdown and adding a mutation observer to dynamically update the SVG in the panel
- After that you need to add in the rest of the standard affiliations (hostile, templated, etc). There might be an issue with stroke-dasharray needing to be added to the matchPaths() function
- Create a skeleton symbol object that contains all the decorator information for all affiliations
- Add in the equipment icons (will require some more tweaking)
- Figure out how to import the modifier logic from the old code to dynamically update the symbol
- Everything else should be easier to import after that
- matchPaths() function and testObj need to be renamed. Come on man
- the "demo-width-class" class in the html file needs to be changed to something less stupid
- code split your symbol object and affiliation object out into their own files
- yolo
