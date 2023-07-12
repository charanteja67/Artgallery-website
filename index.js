let allarts=document.getElementById("allarts");
let divEl=document.getElementById("images");



let change=function(){

    divEl.textContent=""

    let img1=document.createElement("img");
    img1.src="https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg";
    divEl.appendChild(img1); 
    img1.classList.add("image1","m-3");   
    let img2=document.createElement("img");
    img2.src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2021-jazz-singer-1.jpg";
    divEl.appendChild(img2); 
    img2.classList.add("image1","m-3");
    let img3=document.createElement("img");
    img3.src="https://media.cnn.com/api/v1/images/stellar/prod/230414051958-01-sabrina-statue-vandalized.jpg?c=16x9&q=h_720,w_1280,c_fill";
    divEl.appendChild(img3); 
    img3.classList.add("image2","m-3"); 
    let img4=document.createElement("img");
    img4.src="https://www.artzolo.com/sites/default/files/styles/blog/public/blog/images/cover_image_11.jpg";
    divEl.appendChild(img4); 
    img4.classList.add("image2","m-3");  
    
     

}

let change1=function(){
    divEl.textContent=""

    let img5=document.createElement("img");
    img5.src="https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg";
    divEl.appendChild(img5); 
    img5.classList.add("image1","m-3");   
    let img6=document.createElement("img");
    img6.src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2021-jazz-singer-1.jpg";
    divEl.appendChild(img6); 
    img6.classList.add("image1","m-3");
   

}

let change2=function(){
    divEl.textContent=""

    let img7=document.createElement("img");
    img7.src="https://media.cnn.com/api/v1/images/stellar/prod/230414051958-01-sabrina-statue-vandalized.jpg?c=16x9&q=h_720,w_1280,c_fill";
    divEl.appendChild(img7); 
    img7.classList.add("image2","m-3"); 
    let img8=document.createElement("img");
    img8.src="https://www.artzolo.com/sites/default/files/styles/blog/public/blog/images/cover_image_11.jpg";
    divEl.appendChild(img8); 
    img8.classList.add("image2","m-3");
   

}

let change3=function(){

    divEl.textContent=""

    let h5=document.createElement("h6");
    h5.textContent="These are some famous artists and there achievements";
    h5.classList.add("text-center","heading11")
    let div2=document.createElement("div");
    div2.classList.add("d-flex","flex-column","justify-content-center","align-items-center","mt-5");


    
    
    let div3=document.createElement("div");
   


    div2.appendChild(h5);
    
    let btn1=document.createElement("button");
    btn1.textContent="Artist1"
    btn1.classList.add("btn","btn-primary","btn-lg","m-3");
    let btn2=document.createElement("button");
    btn2.textContent="Artist2"
    btn2.classList.add("btn","btn-primary","btn-lg","m-3");
    div3.appendChild(btn1);

    

    div3.appendChild(btn2);

    

    divEl.appendChild(div2);
    div2.appendChild(div3)

    div3.classList.add("d-flex","flex-row","justify-content-center","align-items-center")


    btn1.onclick = function(){

        div3.textContent = "";
        
        let img9=document.createElement("img");
        img9.src="https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg";
        div3.appendChild(img9); 
        img9.classList.add("image1","m-3"); 

    }

    
    btn2.onclick = function(){

        div3.textContent = "";
        
        let img10=document.createElement("img");
        img10.src="https://www.artzolo.com/sites/default/files/styles/blog/public/blog/images/cover_image_11.jpg";
        div3.appendChild(img10); 
        img10.classList.add("image2","m-3")
        }





}







