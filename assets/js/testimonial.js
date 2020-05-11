const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

const testimonials = [
    {
        "name": "Qadrian Pristiadi",
        "position": "Network Engineer",
        "photo": "/images/qadrian.jpeg",
		"text": "Fadjar adalah orang yang baik, supel dan menyenangkan. wawasannya luas sehingga nyaman untuk diajak ngobrol dan bercanda. tentang keahlian, dia ini sangat passionate dengan programming. cita-citanya menjadi programmer yang handal."
    },
    {
        "name": "Galih Rizal Muhammad",
        "position": "Front End Developer",
        "photo": "/images/galih.jpeg",
		"text": "Fadjar orangnya simple ga mau ribet, jomblo, dan susah menolak ajakan untuk nguliner ataupun main, naks back end"
    },
    {
        "name": "Faqih Shalihan Muflihun",
        "position": "Front End Developer",
        "photo": "/images/faqih.jpeg",
		"text": "Fadjar sangat bisa diandalkan untuk mengerjakan sebuah project. Dia cukup tanggap dan cepat mengerti alur sebuah program. Fadjar handal dalam backend site."
    }
];
let idx = 1;


function updateTestimonial() {
	let { name, position, photo, text } = testimonials[idx];
	
	testimonial.innerHTML = text;
	logo.src  = photo;
	username.innerHTML = name;
	role.innerHTML = position;
	
	idx++;
	if(idx > testimonials.length -1 ) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);