const modules=
[{title:"E-mail Phishing",page:"email.html"},
    {title:"Cyber Bullying",page:"cyberbullying.html"},
    {title:"Gaming Scams",page:"gaming.html"},
    {title:"UPI Scams",page:"upi.html"},
    {title:"Fake E-commerce",page:"fakeecom.html"}
]
function show_modules(){
const container=document.getElementById("content_container");
container.innerHTML="";
modules.forEach(module=>{
    const card=document.createElement("div");
    card.className="modulecard";
    card.innerHTML=`<h3>${module.title}</h3>`;
    card.addEventListener("click",()=>{
        window.location.href=module.page;
    }
);
container.appendChild(card);
});
}

