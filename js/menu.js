const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");

if (menuBtnRef && mobileMenuRef) {
  menuBtnRef.addEventListener("click", () => {
    const isExpanded = menuBtnRef.getAttribute("aria-expanded") === "true";

    menuBtnRef.setAttribute("aria-expanded", !isExpanded);
    menuBtnRef.classList.toggle("is-open");

    mobileMenuRef.classList.toggle("is-open");
  });
}