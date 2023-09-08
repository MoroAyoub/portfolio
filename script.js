// toggle icon navbar


//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('activr');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active);
                  
            });
 
        }
    });
    //sticky header
    let header = document ('header');


    header.classList.toggle('sticky', window.scrolly >100);
}