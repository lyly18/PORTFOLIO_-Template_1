let headIcon = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');
headIcon.onclick = () => {
    headIcon.classList.toggle('fa-xmark');
    nav.classList.toggle('active');

}

let link = document.querySelectorAll('nav a')

link.forEach(e => {
    e.onclick = function () {
        link.forEach(lin => {
            lin.classList.remove('active')
        })
        e.classList.add('active')
    }


})
function SendMail() {
    

    var  params = {
        from_name : document.getElementById('fulName').value,
        mobile : document.getElementById('mobile').value,
        email : document.getElementById('email').value,
        email_subject : document.getElementById('emailSub').value,
        message : document.getElementById('textArea').value
    }
    emailjs.send("service_g6qem2v","template_exay1so", params).then(function (res) {
        alert('success !' + res.status)
    })


        document.getElementById('fulName').value ='',
        document.getElementById('mobile').value ='',
        document.getElementById('email').value = '',
        document.getElementById('emailSub').value ='',
         document.getElementById('textArea').value =''
    
}

         let btn = document.getElementById('but')
         let btn2 = document.getElementById('but2')
         let more = document.getElementById('more')
         btn.onclick = function (){
            more.style.display = "inline";
            btn.style.display = "none";
            btn2.style.display = "block"   

         }
         btn2.onclick = function (){
            more.style.display = "none";
            btn2.style.display = "none";
            btn.style.display = "block"   

         }