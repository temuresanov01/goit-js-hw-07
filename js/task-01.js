const categories = document.querySelectorAll("#categories li.item");
console.log(`В списке ${categories.length} категории.`);

const childCategories = array => {
    array.forEach((element) => console.log
        (`Категория:` + element.firstElementChild.textContent +
            `\nКоличество элементов:` + element.lastElementChild.children.length));
}
childCategories(categories);



// //  В СПИСКЕ 3 КАТЕГОРИИ ( ВЫВОДИТ В КОНСОЛЬ )
// const listEl = document.querySelectorAll('#categories>li');
// console.log(`В списке ${listEl.length} категории`);

// // ЗАГОЛОВОК ЭЛЕМЕНТА И ЕГО ДЕТИ
// const totalCountCategories = listEl;
// const ArrayCategories = [...totalCountCategories];

// ArrayCategories.map(category => {
//     console.log(`Категория: ${category.firstElementChild.textContent}`);
//     console.log(`Количество елементов: ${category.lastElementChild.children.length}`);
// })