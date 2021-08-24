function add_user()
{
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);    
window.location="1.html";

}

function op()
{
    window.location="kwitter_page.html";  
}

function education()
{
    window.location="education.html"; 
}