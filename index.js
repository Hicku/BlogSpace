
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        let postArr = data.slice(0, 5)
        let html = ""

        for(post of postArr) {
            html += `
                <h3>${post.title}<h3>
                <p>${post.body}</p>
                <hr />
            `
            document.getElementById("blog-list").innerHTML = html
        }
    })