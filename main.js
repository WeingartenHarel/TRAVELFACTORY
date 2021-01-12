
const gPosts = [
{
    id:"a001",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a002",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a003",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a004",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a005",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a006",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a007",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
{
 id:"a008",
    name:'Jhon smith',
    address:'Rivira state 32/106',
    company:'Twitter inc',
    addressb:'795 folsom st',
    cpuntry:'San Fransisco',
    cel:'p(123) 12312-345435',
    img:'img/img/alexjonathan.jpg'
},
];


renderAllPosts();

function renderAllPosts() {
 var posts = gPosts

 
 console.log('posts',posts)  
 let strHTML = posts.map((currentPost, index, array) => {
     // console.log('currentPost',currentPost.id)
 //     id:"a008",
 //    name:'Jhon smith',
 //    address:'Rivira state 32/106',
 //    company:'Twitter inc',
 //    addressb:'795 folsom st',
 //    country:'San Fransisco',
 //    cel:'p(123) 12312-345435',
 //    img:'img/img/alexjonathan.jpg'

     return `<div class="col-sm padding10">
                 <div class="person">
                     <div class="person-img">
                         <img src="img/alexjonathan.jpg"/>
                         <span>graphoc designer</span>
                     </div>
                     <div class="person-info">

                         <span class="name bold">${currentPost.name} </span>
                         <span class="address normal"><i class="fas fa-map-marker-alt"></i> ${currentPost.address}</span>
                         <span class="bold">${currentPost.company}</span>
                         <span class="normal">${currentPost.addressb}</span>
                         <span class="normal">${currentPost.country}</span>
                         <span class="normal">p(123)${currentPost.cel} </span>
                         <button onclick="deletePost('${currentPost.id}')">delete</button>
                         <a class="btn-article align-self-start upadteBtn" onclick="onUpdateToggle('${currentPost.id}')">Edit Post</a>
                     </div>
                 </div>
                 </div>`;
    
 })
 // const fname = document.querySelector('#fname').value;
 document.querySelector('#personslist').innerHTML = strHTML.join('');
 // return strHTML;

}

function renderPostModalUpdate(post) {
 let currentPost = post;
 //console.log(currentPost);

 document.querySelector('.update-modal .article .input-h2a').value = currentPost.name;
 document.querySelector('.update-modal .article .input-h2b').value = currentPost.company;
 document.querySelector('.update-modal .article .input-h2c').value = currentPost.addressb;
 document.querySelector('.update-modal .article .input-h2d').value = currentPost.cel;
 document.querySelector('.update-modal .article .input-h2e').value = currentPost.address;  
 document.querySelector('.update-modal .article a').dataset.postid = currentPost.id;   

 
}

function onUpdataPost(postId,titlea,titleb,titlec,titled,titlee){
 //console.log('update',postId, title,content,image)
 updatePosts(postId,titlea,titlec ,titled,titlee)
 // renderAllPosts();
}


function onUpdateToggle(postId) {  
 var post = getPost(postId);
 renderPostModalUpdate(post)  
 toggleUpdate();
}
function getPost(postId){
 const postIndex = getPostIdx(postId);
 let post =  gPosts[postIndex];
 return post;
}
function toggleUpdate() {
 document.body.classList.toggle('update-open');
 console.log('update-open')
}


function updatePosts(postId,titlea,titleb,titlec,titled,titlee){
 if(!postId){
     var newPost = {
        name :titlea,
        company : titleb,
        addressb : titlec,
        cel : titled,
        address : titlee,
     }
     gPosts.push(post)
     renderAllPosts()
     return 
 }
 const postIndex = getPostIdx(postId);
 let post =  gPosts[postIndex];
 console.log('fname', postId,titlea,titleb,titlec,titled,titlee)

  // name:'Jhon smith',
 //    address:'Rivira state 32/106',
 //    company:'Twitter inc',
 //    addressb:'795 folsom st',
 //    country:'San Fransisco',
 //    cel:'p(123) 12312-345435',

 post.name = titlea;
 post.company = titleb;
 post.addressb = titlec;
 post.cel = titled;
 post.address = titlee;

 gPosts.splice(postIndex, 1, post)
 renderAllPosts()
}

function deletePost(postId) {
 console.log('postId',postId)
 const postIndex = getPostIdx(postId);
 gPosts.splice(postIndex, 1)
 renderAllPosts()
}

function getPostIdx(postId) {
 var postIndex = gPosts.findIndex(function (post) {
     return postId === post.id
 })
 return postIndex
}

function getPostById(postId) {
 return gPosts.find(post => postId === post.id);
}