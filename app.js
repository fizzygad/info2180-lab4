document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("heroForm");
    form.addEventListener('submit', async (event) => {
       
        event.preventDefault();

        const FormInfo = new FormData(form);
        const filter = /[a-zA-Z\s]+/g;
        const name = FormInfo.get("name") ? FormInfo.get("name").match(filter).join('') : "";
        
        const HeroDesc = await fetch(`http://localhost/info2180-lab4/superheroes.php?query=${name}`);

        const result = document.getElementById("result");

        // Handle errors if the fetch request is not successful
        if (!HeroDesc.ok) {
            result.innerHTML = "Superhero not found"
            return;
        }
        const wiki = await HeroDesc.json();

        result.innerHTML = name !== "" ?
            wiki.map(entry => `<h2>${entry.name} </h2> <h3>A.K.A ${entry.alias}</h3> <article><p>${entry.biography}</p></article> `).join("") :
            (`<ul>    ${wiki.map(entry => `<li>${entry.alias}</li>`).join("")} </ul> `);
    });
});