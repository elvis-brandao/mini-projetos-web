const container = document.querySelector('.container');
const randomImgURL = 'https://picsum.photos/200/300?random=';
const rows = 5;

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img');
    img.src = `${randomImgURL}${i+1}`;
    container.appendChild(img);
};