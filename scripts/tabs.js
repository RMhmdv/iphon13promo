const tabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsMemory = document.querySelectorAll(
    ".card-details__description-item description__memory"
  );

  const tabsImage = document.querySelector(".card__image_item");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      cost: 65000,
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      cost: 79000,
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      cost: 99000,
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tabsMemory.textContent = `Встроенная память (ROM) ${tabsOptions[index].memory} ГБ`;
    tabsPrice.textContent = `${tabsOptions[index].cost}₽`;

    tabsImage.setAttribute("src", tabsOptions[index].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });
    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);

};

tabsFunc();
