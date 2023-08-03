//"https://apis.scrimba.com/jsonplaceholder/posts"

let postArray = []
let postBody = document.getElementById('post-body')
let postTitle = document.getElementById('post-title')

let renderPosts = () => {
    let html = '';
    for(let post of postArray) {
        html +=
        `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
    }
    document.getElementById('blog-list').innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    })

    document.getElementById('new-post').addEventListener('submit', (e) => {
        e.preventDefault()

        let postData = {
            title: postTitle.value,
            body: postBody.value
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {'Content-Type' : 'application/json'}

        }

        fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
            .then(res => res.json())
            .then(data => {
                postArray.unshift(postData)
                renderPosts()
            })
            postTitle.value = ''
            postBody.value = ''
    })