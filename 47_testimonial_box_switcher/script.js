const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: "Mayah Myles",
        position: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, aspernatur?"
    },
    {
        name: "Elvis Brandao",
        position: "Programming",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam omnis illum tempore ullam sunt! Sit ullam cumque impedit illo quaerat!"
    },
    {
        name: "Vivy Araújo",
        position: "Autonomous",
        photo: "https://randomuser.me/api/portraits/women/46.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque quae dolor quod odit omnis iure repudiandae quis aspernatur veritatis rem possimus in, ullam quaerat maxime accusantium eligendi quibusdam ad?"
    },
    {
        name: "João Henrique",
        position: "Enginner",
        photo: "https://randomuser.me/api/portraits/men/46.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt similique necessitatibus labore, sunt accusamus sequi quas alias tenetur hic magni ipsa error itaque atque neque perspiciatis quibusdam officia eius. Officia voluptatibus atque assumenda similique amet delectus odio magnam quisquam?"
    },
    {
        name: "Hanna Brandão",
        position: "Entusiast",
        photo: "https://randomuser.me/api/portraits/women/47.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio vero ratione consequuntur iure debitis autem quis, magnam dolorem! Nemo aliquam iste illo blanditiis corporis repellendus ullam eveniet, ea alias laborum sit est a similique harum itaque odit excepturi distinctio. Amet harum velit fugit vel quia saepe doloribus a nostrum."
    }
];

let idx = 0;

function updateTestimonial(){
    const {name, position, photo, text} = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length -1){
        idx = 0;
    };
};

setInterval(updateTestimonial, 10000)