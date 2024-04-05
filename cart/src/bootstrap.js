import faker from "faker";

const mount = (el) => {
  const cartText = `
  <div style="color: red;"><h1>Cart</hjson1></div>
  <div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) {
    mount(el);
  }
}

export { mount };
