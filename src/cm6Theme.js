import { EditorView } from '@codemirror/view';

<<<<<<< HEAD
const fixedHeightEditor = EditorView.theme({
   "&": {height: "600px"},
    ".cm-scroller": {overflow: "auto"}
})

=======

const fixedHeightEditor = EditorView.theme({
   "&": {
    height: "600px",
    backgroundColor: '#5277AF',
    color: '#344E77'
    },
    ".cm-scroller": {overflow: "auto"},
    ".cm-gutters": {
        backgroundColor: '#5277AF',
        color: '#344E77',
        border: "none"
    },
    ".cm-activeLineGutter": {
        backgroundColor: '#7495C7'
    },
})



>>>>>>> dev
export { fixedHeightEditor };