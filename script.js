const submit=()=>{

   let Em= document.getElementById('email').value;
   let Num=document.getElementById('number').value;
   let Pas=document.getElementById('password').value;
if(Em=="subhan@gmail.com" && Num=="1234567890" && Pas=='0987654321'){
    document.getElementById('form').style.display='none'

    setTimeout(verify,3000)
    document.getElementById('load').style.display='flex'
    
}
else{
    alert('wrong password' )
}

}
const verify=()=>{
    document.getElementById('load').style.display='none'
    // document.getElementById("mp").style.display="flex"
    
}

const home =()=>{
    
    if(document.getElementById('mp').style.display==='flex'){
    // document.getEleme`ntById('mp').style.display='none'
    }
    else{
        document.getElementById('mp').style.display='flex'
        document.getElementById('cor').style.display='none'
        document.getElementById('sin').style.display='none'

        
    }
        
    }
    const about=()=>{
        if(document.getElementById('cor').style.display==='flex'){
        // document.getElementById('cor').style.display='none'
        // document.getElementById('mp').style.display='none'
        }
        else{
            document.getElementById('cor').style.display='flex'
            document.getElementById('mp').style.display='none'
            document.getElementById('sin').style.display='none'
            
        }
        }
        const contact =()=>{
            if(document.getElementById('sin').style.display==='flex'){
                document.getElementById('sin').style.display='none'
                document.getElementById('ct').style.display='flex'

            }
            else{
                document.getElementById('sin').style.display='flex'
                document.getElementById('mp').style.display='none'
                document.getElementById('cor').style.display='none'
                document.getElementById('ct').style.display='none'
            }
        }

        