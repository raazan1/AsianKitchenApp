const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btncontainer = document.querySelector("#cntbutton");

let btn1 = document.createElement("button");
btn1.textContent = "All";
btn1.classList.add('btn', 'btn-outline-dark', 'btn-item');
btn1.setAttribute('type', 'button');
btncontainer.append(btn1);

let btn2 = document.createElement("button");
btn2.textContent = "Korean";
btn2.classList.add('btn', 'btn-outline-dark', 'btn-item');
btn2.setAttribute('type', 'button');
btncontainer.append(btn2);

let btn3 = document.createElement("button");
btn3.textContent = "Japan";
btn3.classList.add('btn', 'btn-outline-dark', 'btn-item');
btn3.setAttribute('type', 'button');
btncontainer.append(btn3);

let btn4 = document.createElement("button");
btn4.textContent = "China";
btn4.classList.add('btn', 'btn-outline-dark', 'btn-item');
btn4.setAttribute('type', 'button');
btncontainer.append(btn4);

btn1.addEventListener("click",allList);
btn2.addEventListener("click",koreanFunc)
btn3.addEventListener("click",JapanFunc)
btn4.addEventListener("click",ChinaFunc)

let {...newmenu} = menu



let menuler = document.querySelector("#menues");
function allList(){
  let NewMenu=menu.map(list=>{
    return `
    <div class="menu-items col-lg-6 col-sm-12">
   <img src="${list.img}" alt="${list.title}" class="photo">
    <div class="menu-info">
    <div class="menu-title">
    <h4>${list.title}</h4>
    +<h4>${list.price}</h4>
    </div>
    <p class="menu-text">${list.desc}</p>
    </div>
    </div>
    `;
  });
  menuler.innerHTML = NewMenu.join("");
  console.log("menu",typeof(menu),menu[0],menu.length);
};
allList();

function koreanFunc(){

  let NewMenu = menu.map(item =>{
    if(item.category==="Korea"){
      return `
      <div class="menu-items col-lg-6 col-sm-12">
     <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      +<h4>${item.price}</h4>
      </div>
      <p class="menu-text">${item.desc}</p>
      </div>
      </div>
      `;

    };

  });


  menuler.innerHTML = NewMenu.join("");

};

function JapanFunc(){
  let NewMenu = menu.map(item =>{
    if(item.category==="Japan"){
      return `
      <div class="menu-items col-lg-6 col-sm-12">
     <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      +<h4>${item.price}</h4>
      </div>
      <p class="menu-text">${item.desc}</p>
      </div>
      </div>
      `;

    };

  });


  menuler.innerHTML = NewMenu.join("");

}

function ChinaFunc(){
  let NewMenu = menu.map(item =>{
    if(item.category==="China"){
      return `
      <div class="menu-items col-lg-6 col-sm-12">
     <img src="${item.img}" alt="${item.title}" class="photo">
      <div class="menu-info">
      <div class="menu-title">
      <h4>${item.title}</h4>
      +<h4>${item.price}</h4>
      </div>
      <p class="menu-text">${item.desc}</p>
      </div>
      </div>
      `;

    };

  });


  menuler.innerHTML = NewMenu.join("");

}