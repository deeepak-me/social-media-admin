
const menuItems = document.querySelectorAll('.menu-item')

//Messages
const messageNotification = document.querySelector('#message-notifications');
const messages= document.querySelector('.messages');

const message= document.querySelectorAll('.message');
const messageSearch= document.querySelector('#search-message');

//Theme

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');

//SIDEBAR

//remove active class from all menu items

const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove("active");
    })
}

menuItems.forEach((item) => {
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display='none'
        }else{
            document.querySelector('.notification-popup').style.display='block'
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
});

//  messages

//search chat

 const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display='flex'
        }else{
            user.style.display='none';
        }
    })
 }

 messageSearch.addEventListener('keyup',searchMessage);

//highlight
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})

// Theme Customization 

//open modal
const openThemeModal=()=>{
    themeModel.style.display= 'grid';
}

//close modal

const closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none'
    }
}

//close modal
themeModel.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);