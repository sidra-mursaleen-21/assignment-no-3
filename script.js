let arr = [
  {
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "Motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "Iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "Iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "IphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

let select = document.getElementById("select");

let container = document.getElementById("container");

function check_by_key(choose) {
  container.innerHTML = "";
  container.style.padding = "0px"
  select.innerHTML = "";
  let category = [];

  arr.filter((object) => {
    for (let key in object) {
      if (choose.value === key) {
        if (category.includes(object[key]) == false) {
          select.innerHTML += `
          
          <option value="${object[key]}">${object[key]}</option>`;

          category.push(object[key]);
        }
      }
    }
  });
}

function render_products() {
  container.innerHTML = "";
  arr.filter((object) => {
    for (let key in object) {
      if (select.value === object[key]) {
        let { brand, model, price, camera, ram, rom } = object;
        container.innerHTML += `
        <ul>
        <li>brand: ${brand}</li>
        <li>model: ${model}</li>
        <li>price: ${price}</li>
        <li>camera: ${camera}</li>
        <li>ram: ${ram}</li>
        <li>rom: ${rom}</li>
        </ul>`;
      }
    }
    container.style.padding = "10px 0px"

  });
}


