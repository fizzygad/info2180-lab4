document.addEventListener("DOMContentLoaded", ()=> {
    const search = document.getElementById("searchbtn");

    if (!search){
        console.error("Search button not found!");
        return;
    }

    search.addEventListener('click', async ()=> {
        const response = await fetch("http://localhost/info2180-lab4/superheroes.php", {
            method: "GET"
        })

        if (!response.ok){
            throw new Error ("HTTP Error!");
        }

        const list = await response.text()
        alert(list)
    })
});