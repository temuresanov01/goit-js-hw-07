const categories = document.querySelectorAll("#categories li.item");
console.log(`В списке ${categories.length} категории.`);


const childCategories = array => {
    array.forEach((element) => (`Категория:` + element.firstElementChild.textContent + `\nКоличество элементов:` + element.lastElementChild.children.length));
}
console.log (childCategories(categories));

