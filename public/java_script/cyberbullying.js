function playVideo(){
    Element=document.getElementById("content");
    Element.innerHTML=
    <div class="lesson">
        <h2>CYBERBULLYING VIDEO LESSON</h2>
        <video controls width="600">
            <source src="" type="video/mp4"/>
        </video>
    </div>
}
 async function readstories(){
    element=document.getElementById("content");
    element.innerHTML=
    <div class="story">
        <h2>GENERATING YOUR STORY..............</h2>
         </div>
        try{
            const response=await
            fetch(
                "https://localhost:3000/api/generate-story",
                {method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({
                    topic:"Cyberbullying"
                })

                }

            );
        const data=await response.json();
        element.innerHTML=
        <div class="story">
            <h2>${data.title}</h2>
            <p>${data.story}</p>
            <h3>Lesson Learned</h3>
            <p>${data.lesson}</p>
        </div>;
        
        }
        catch(error)
        {
            element.innerHTML=<p>Failed to Generate story.</p>
            console.log(error);
        }
   

}