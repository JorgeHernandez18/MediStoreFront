document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html"; // Redirige al index después de cerrar sesión
});