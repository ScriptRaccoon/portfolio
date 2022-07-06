// reference:
// https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb

import imagesLoaded from "imagesloaded";

export function enableMasonry(options) {
    const {
        gridSelector,
        itemSelector,
        contentSelector = ".content",
        rowHeight = 20,
    } = options;
    if (!gridSelector) throw new Error("now grid selector provided");
    if (!itemSelector) throw new Error("now item selector provided");
    const allItems = document.querySelectorAll(itemSelector);
    const grid = document.querySelector(gridSelector);
    grid.style.gridAutoRows = rowHeight + "px";

    function resizeGridItem(item) {
        const rowGap = parseInt(
            window
                .getComputedStyle(grid)
                .getPropertyValue("grid-row-gap")
        );
        const rowSpan = Math.ceil(
            (item
                .querySelector(contentSelector)
                .getBoundingClientRect().height +
                rowGap) /
                (rowHeight + rowGap)
        );
        item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems() {
        allItems.forEach(resizeGridItem);
    }

    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    allItems.forEach((item) => {
        imagesLoaded(item, resizeInstance);
    });

    function resizeInstance(instance) {
        const item = instance.elements[0];
        resizeGridItem(item);
    }

    return resizeAllGridItems;
}
