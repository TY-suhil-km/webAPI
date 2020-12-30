fetch("https://jsonplaceholder.typicode.com/posts/").then(res => {
    return res.json();
}).then(data => {
    displaycontent(data);
});
function displaycontent(content) {
    let body = "";
    content.forEach(element => {
        body += `
        <tr>
            <td>${element.userId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
        </tr>
        `;
        
    });
    document.getElementById('table-body').innerHTML = body;
}
