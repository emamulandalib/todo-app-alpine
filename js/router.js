const loadHTML = async (templateName) => await (await fetch('html/' + templateName)).text()
let root = null
let useHash = true
let hash = '#!'
let router = new Navigo(root, useHash, hash)

router
    .on(async function () {
        let html = await loadHTML('todo-list.html')
        document.getElementById("show-html").innerHTML = html
    })
    .resolve();