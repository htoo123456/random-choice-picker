const tagsEl = document.querySelector(".tags");
const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
    if(e.target.value == "")return;
    createElement(e.target.value);

    if (e.key == "Enter") {
        e.target.value = "";
        randomSelect();
    }
})

const createElement = (input) => {
    const arr = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    tagsEl.innerHTML = "";
    arr.forEach(tag => {
        const span = document.createElement("span");
        span.classList.add("tag")
        span.append(tag);
        tagsEl.append(span);
    });
}

const randomSelect = () => {
    const times = 30;
    const inerval = setInterval(()=> {
        const tag = pickRandomSelect();
        highLightTag(tag);
        setTimeout(() => {
            unHighLightTag(tag);
        },100);
    }, 100);
    setTimeout(()=> {
        clearInterval(inerval);
        setTimeout(()=> {
            const randomTag = pickRandomSelect();
        highLightTag(randomTag);
        }, 100);
        
    },times * 100)
}

const pickRandomSelect = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

const highLightTag = (tag) => {
    tag.classList.add("highLight");
}

const unHighLightTag = (tag) => {
    tag.classList.remove("highLight");
}
