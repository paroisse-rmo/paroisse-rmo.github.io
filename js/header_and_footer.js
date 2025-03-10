/* Au lancement de la page */


/* chercher les heads  */
fetch("../pages/communes/heads.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chrgmt des HEADS");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("heads").innerHTML = data;
    })
    .catch(error => console.error("Erreur:", error));


/* chercher le header */
fetch("../pages/communes/header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chrgmt du HEADER");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error("Erreur:", error));



/* chercher le footer */
fetch("../pages/communes/footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chrgmt du FOOTER");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Erreur:", error));

