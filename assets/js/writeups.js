/* Filtro + busca da página de writeups */
(function () {
    var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".wu-group"));
    var input = document.getElementById("wu-search");
    var empty = document.querySelector(".wu-empty");

    if (!chips.length) return;

    var state = { cat: "all", q: "" };

    function apply() {
        var anyVisible = false;

        groups.forEach(function (group) {
            var catMatch = state.cat === "all" || group.dataset.cat === state.cat;
            var groupVisible = false;

            Array.prototype.forEach.call(
                group.querySelectorAll(".wu-phase-block"),
                function (block) {
                    var blockVisible = false;

                    Array.prototype.forEach.call(
                        block.querySelectorAll(".wu-card"),
                        function (card) {
                            var match =
                                catMatch &&
                                (!state.q || card.dataset.search.indexOf(state.q) !== -1);
                            card.hidden = !match;
                            if (match) blockVisible = true;
                        }
                    );

                    block.hidden = !blockVisible;
                    if (blockVisible) groupVisible = true;
                }
            );

            group.hidden = !groupVisible;
            if (groupVisible) anyVisible = true;
        });

        chips.forEach(function (chip) {
            chip.classList.toggle("is-active", chip.dataset.filter === state.cat);
        });

        if (empty) empty.hidden = anyVisible;
    }

    function setCategory(cat, updateHash) {
        state.cat = cat;
        apply();
        if (updateHash && window.history && history.replaceState) {
            history.replaceState(null, "", cat === "all" ? location.pathname : "#" + cat);
        }
    }

    chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
            setCategory(chip.dataset.filter, true);
        });
    });

    if (input) {
        input.addEventListener("input", function () {
            state.q = input.value.trim().toLowerCase();
            apply();
        });
    }

    function fromHash() {
        var hash = location.hash.replace("#", "");
        var valid = chips.some(function (c) {
            return c.dataset.filter === hash;
        });
        setCategory(valid ? hash : "all", false);
    }

    window.addEventListener("hashchange", fromHash);
    fromHash();
})();
