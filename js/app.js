
// load all category
const loadCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json(); 
    // console.log(data.data.news_category)
    displayCategory(data.data.news_category)
 }

//  display all category 
 const displayCategory = (categories) => {
    const newsCategory = document.getElementById('catagory-container');
   categories.forEach(category => {
    console.log(category);
    // loadData(category.category_id);
    const catagoryDiv = document.createElement('div');
    catagoryDiv.classList.add('hi');
    catagoryDiv.innerHTML = `
   <a class="category-item" onclick="loadData('${category.category_id}')" class="text-secondary text-decoration-none" href="#">${category.category_name}</a>
    `;
    newsCategory.appendChild(catagoryDiv)
  
    
   })
 }
 
 // load news data
const loadData = async(catagory) => {
    const url  = `https://openapi.programming-hero.com/api/news/category/${catagory}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data)
};

 // display news data
 const displayData = (users) => {
   //show 4 user
  //  users = users.slice(0, 4);
   // get user container
    const userContainer = document.getElementById('user-container');
    users.forEach(user => {
        console.log(user)
        const itemFound = document.getElementById('item-found');
        itemFound.innerText = users.length;

        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <div onclick="loadNewsDetails()" class="card mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${user.image_url}" class="w-100 h-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${user.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">${user.details.slice(0, 200)}</p>

             <div class="d-flex justify-content-around align-items-center">
             <div class="d-flex align-items-center">
             <div>
             <img class="author-img" src="${user.author.img}" />
             </div>
             <div>
             <p class="ms-3 mt-3">${user.author.name ? user.author.name : "Name Not Found"}</p>
             </div>
             </div>


             <div class="mt-3">
             <p><i class="fa-solid fa-eye"></i> <span class="ms-1">${user.total_view ? user.total_view : "00"}</span></p>
             </div>


             <div>
             <i class="text-warning fa-solid fa-star"></i>
             <i class="text-warning fa-solid fa-star"></i>
             <i class="text-warning fa-solid fa-star"></i>
             <i class="text-warning fa-regular fa-star"></i>
             <i class="text-warning fa-regular fa-star"></i>
             </div>


             <div>
             <a href="#"><i class="fa-solid fa-angle-right"></i></a>
             </div>
             
             </div>
        `;
        //append user info
        userContainer.appendChild(userDiv);
       
        

    });
 }

 const loadNewsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayModal(data)
    
 }

 const displayModal = (user) => {
  console.log(user)
     const modalBody = document.getElementById('category.category_id');
       modalBody.innerHTML = `
        <img src="${user.image_url}" class="w-100 h-100" alt="...">
        `
 }
loadNewsDetails()
 loadCategory();
loadData()