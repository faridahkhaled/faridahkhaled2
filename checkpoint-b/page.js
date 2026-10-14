// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:

import { items } from "./items.js";
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "bags");
}

export function start() {
    renderItems(items);
    document.querySelector("#shortlist").addEventListener("click", () => {
      renderItems(matching());
    });
  }
  
