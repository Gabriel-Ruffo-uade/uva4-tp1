document.addEventListener("DOMContentLoaded", () => {
  const chistes = [
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Cómo se despiden los químicos? Ácido un placer.",
    "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
    "¿Cuál es el café más peligroso del mundo? El ex-preso.",
    "¿Qué le dijo una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
    "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
    "¿Y el subcampeón? Kasitoko.",
    "¿Qué le dice un jardinero a otro? ¡Disfrutemos mientras podamos!",
    "¿Qué hace un pez? ¡Nada!"
  ];

  let indice = 0;

  const chisteElemento = document.getElementById("chiste");
  const btnAnterior = document.getElementById("anterior");
  const btnSiguiente = document.getElementById("siguiente");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Funcionalidad del menu hamburguesa
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Funcionalidad de los chistes (solo si están presentes)
  if (chisteElemento && btnAnterior && btnSiguiente) {
    function mostrarChiste(index) {
      chisteElemento.textContent = chistes[index];
    }

    btnAnterior.addEventListener("click", () => {
      indice = (indice - 1 + chistes.length) % chistes.length;
      mostrarChiste(indice);
    });

    btnSiguiente.addEventListener("click", () => {
      indice = (indice + 1) % chistes.length;
      mostrarChiste(indice);
    });

    // Mostrar el primer chiste
    mostrarChiste(indice);
  }
});