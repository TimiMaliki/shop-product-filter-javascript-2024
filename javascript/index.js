const searchBar = document.getElementById("search");
const btn = document.getElementById("btn");
const productContainer = document.getElementById("product-container");
const grid = document.getElementById("grid");

const productList = [
  {
    productName: "tinted Glass",
    img: "./images/BSI1.webp",
    price: "$23",
    id: 1,
  },

  {
    productName: "yellow jelwery",
    img: "./images/BSI2.webp",
    price: "$25",
    id: 2,
  },

  {
    productName: "jump Suit",
    img: "./images/BSI5.webp",
    price: "$28",
    id: 3,
  },

  {
    productName: "judge gown",
    img: "./images/BSI4.webp",
    price: "$33",
    id: 4,
  },

  {
    productName: "classic suit",
    img: "./images/home-blog-img-2.webp",
    price: "$39",
    id: 5,
  },

  {
    productName: "Saudi Style",
    img: "./images/home-blog-img-3.webp",
    price: "$50",
    id: 6,
  },
  {
    productName: "Nike It",
    img: "./images/Nike-it.jpg",
    price: "$60",
    id: 7,
  },
  {
    productName: "London Jackets",
    img: "./images/london-jackets.jpg",
    price: "$80",
    id: 8,
  },
  {
    productName: "Black Sneakers",
    img: "./images/blackSneakers.jpg",
    price: "$150",
    id: 9,
  },
  {
    productName: "yellow jackets",
    img: "./images/yellow-jackets.jpg",
    price: "$150",
    id: 10,
  },
  {
    productName: "Nike yellow malvin",
    img: "./images/Nike-yellow-malvin.jpg",
    price: "$150",
    id: 11,
  },
  {
    productName: "black london jackets",
    img: "./images/black-london-jackets.jpg",
    price: "$150",
    id: 12,
  },
];

const productArray = {
  product: [...productList],
};




const productFunc = (items) => {
  const array = items.map((item) => {
      return `

          <div class="product-card">
          <div class="product-image">
          <img src=${item.img} alt="">
          </div>
          <div class="product-detail">
              <h2 class="product-name">${item.productName}</h2>
              <div class="price">price ${item.price}</div>
          </div>
      </div>   
          `;
    })
    .join(" ");

    document.getElementById("grid").innerHTML = array;
   
};

productFunc(productArray?.product);


const handleSearch = () => {
    const searchBar = document.getElementById("search").value.toUpperCase();
    const grid = document.getElementById("grid");
    const productDetail= grid.querySelectorAll(".product-card")
  
    console.log(productDetail)
   
    productDetail.forEach((item)=>{
    const  h2 = item.getElementsByTagName('h2')[0]
    console.log(h2)

    if(h2.innerHTML.toUpperCase().indexOf(searchBar) > -1){
         item.style.display = ""
    }else{
        item.style.display = "none"
    }

    })


}
searchBar.addEventListener("keyup" , handleSearch)
btn.addEventListener("click" , handleSearch)



