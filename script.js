$(function() {
    setTimeout(
        function() {
            var simplemde = new SimpleMDE({
                element: document.getElementById("wiki_content"),
                insertTexts: {
                    // override image insert button
                    image: ["<details>\n<summary>", "</summary>\n<!-- you must insert blank line -->\n\n</details>"],
                },
                autofocus: true,
                forceSync: true,
                shortcuts: {
                    drawImage: "", // default is "Cmd-Alt-i" same as developer tools
                },
                spellChecker: false,
                renderingConfig: {
                    codeSyntaxHighlighting: false,
                },
                toolbar: ["code", "horizontal-rule", "table", "|", "preview", "side-by-side", "|",
                    {
                        name: "expand",
                        action: SimpleMDE.drawImage,
                        className: "fa fa-plus-square",
                        title: "Expand",
                    }
                ]
            });
        }, "500"
    );
});
