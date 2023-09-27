/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log(url)
        const breed = url.split("/")[4]
        console.log(breed)
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        //create li tag
        const li = document.createElement("li")
        //create figure tag
        const figure = document.createElement("figure")
        li.appendChild(figure)
        //create img tag
        const image = document.createElement("img")
        image.src = url
        console.log(image.src)
        //create figcaption tag
        const caption = document.createElement("figcaption")
        caption.innerHTML = breed

        figure.append(image, caption)

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const ul = document.querySelector("ul")

        ul.append(li)

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const deleted = document.querySelector("li")
    console.log(deleted)
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    deleted.remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogList = document.getElementsByTagName("li")
    const removed = dogList[dogList.length - 1]
    //console.log(deleteLast)
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    removed.remove()
});
