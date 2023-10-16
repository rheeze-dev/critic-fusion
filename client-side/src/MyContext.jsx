import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [adminEmail, setAdminEmail] = useState(null);
  // const [cart, setCart] = useState(0);
  const updateAdminEmail = (updateValue) => {
    setAdminEmail(updateValue);
  };

  // const updateCart = (updateValue) => {
  //   setCart(updateValue);
  // };

  const [merch, setMerch] = useState([
    {
      id: 1,
      name: "White Hoodie Black Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt1.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 2,
      name: "White T-Shirt Black Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt2.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 3,
      name: "White Hoodie Classic Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt3.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "White T-shirt Classic Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt4.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 5,
      name: "White Hoodie Black Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt5.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 6,
      name: "White T-Shirt Black Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt6.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 7,
      name: "White Hoodie Classic Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt7.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 8,
      name: "White T-shirt Classic Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt8.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 9,
      name: "Black Hoodie White Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt9.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 10,
      name: "Black T-shirt White Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt10.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 11,
      name: "Black Hoodie Classic Logo",
      price: 39.99,
      image: "../../merchImages/criticfusionshirt11.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 12,
      name: "Black T-shirt Classic Logo",
      price: 24.99,
      image: "../../merchImages/criticfusionshirt12.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 13,
      name: "Barbie Unisex T-Shirt",
      price: 24.99,
      image: "../../merchImages/barbie.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 14,
      name: "Ahsoka Unisex T-shirt",
      price: 24.99,
      image: "../../merchImages/ahsoka.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 15,
      name: "Spider-Man: Across the Spider-Verse",
      price: 29.99,
      image: "../../merchImages/spoodlydoodly.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 16,
      name: "Loki: The Complete First Season",
      price: 59.99,
      image: "../../merchImages/ThorsBrother.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 17,
      name: "Assassin&apos;s Creed: Mirage",
      price: 59.99,
      image: "../../merchImages/CreedofAssassins.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 18,
      name: "It Lives Inside Movie Poster",
      price: 19.99,
      image: "../../merchImages/InsideItLives.png",
      isAddedToCart: false,
      quantity: 0,
    },
    {
      id: 19,
      name: "Five Nights at Freddy&apos;s High Tops",
      price: 59.99,
      image: "../../merchImages/PitaNooooo.png",
      isAddedToCart: false,
      quantity: 0,
    },
  ]);

  const updateIsAddedToCart = (id, quantity, type) => {
    const updatedMerch = [...merch];
    const itemIndex = id - 1;
    if (type === "add") {
      if (updatedMerch[itemIndex].isAddedToCart) {
        updatedMerch[itemIndex] = {
          ...updatedMerch[itemIndex],
          quantity: updatedMerch[itemIndex].quantity + quantity,
        };
      } else {
        updatedMerch[itemIndex] = {
          ...updatedMerch[itemIndex],
          quantity: quantity,
          isAddedToCart: true,
        };
      }
    } else {
      if (itemIndex >= 0 && itemIndex < updatedMerch.length) {
        updatedMerch[itemIndex] = {
          ...updatedMerch[itemIndex],
          quantity: quantity,
          isAddedToCart: quantity === 0 ? false : true,
        };
      }
    }
    setMerch(updatedMerch);
  };

  return (
    <MyContext.Provider
      value={{
        adminEmail,
        updateAdminEmail,
        // cart,
        // updateCart,
        merch,
        updateIsAddedToCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
