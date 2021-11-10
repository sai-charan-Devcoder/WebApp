    const name=document.getElementByID('name')
    const email=document.getElementByID('email')
    const query=document.getElementById('query')
    const form=document.getElementByID('form')

               
    form.addEventListener('submit',(e)=>{
        let messages=[]
        if(name.value===''|| name.value==null){
            messages.push("name is required")
        }

      if(messages.length>0){
    e.preventDefault()
    errorElement.innerText=messages.join(',')
      }

   
    })
                function knowmore() {   
                window.open("program.html");  
                }   

                
    s  
