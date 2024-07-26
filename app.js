const menu = [
    {
        id: 1,
        title: 'Tteokbokki',
        category: 'Lunch',
        price: 12.99,
        img: 'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
        desc: `Delicious sushi with fresh fish and rice.`,
    },
    {
        id: 2,
        title: 'Ramen',
        category: 'Dinner',
        price: 15.99,
        img: 'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
        desc: `Hearty bowl of ramen with rich broth and noodles.`,
    },
    {
        id: 3,
        title: 'Bibimbap',
        category: 'Appetizer',
        price: 8.99,
        img: 'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
        desc: `Crispy and fresh spring rolls with a dipping sauce.`,
    },
    // Add more items as needed
];

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    const sectionCenter = document.querySelector('.section-center');
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item col-12 col-md-6">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['All']
    );

    const btnContainer = document.querySelector('.btn-container');
    const categoryBtns = categories
        .map((category) => {
            return `<button type="button" class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
        })
        .join('');

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.btn-item');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
