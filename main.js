let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.shop-container .box').forEach(box =>{
    box.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
document.querySelectorAll('.home-container .btn').forEach(btn =>{
    btn.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = btn.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
document.querySelectorAll('.buds-container .btn').forEach(btn =>{
    btn.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = btn.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});