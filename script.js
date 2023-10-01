let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('div nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
}
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.querySelector('.header').classList.add('solid');
        } else {
            document.querySelector('.header').classList.remove('solid');
        }
    });
});

let hamicon = document.querySelector('#ham-menu');
let navbar = document.querySelector('.navbar');
let cvbtn = document.querySelector('cv-button');

hamicon.onclick = () => {
    hamicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    cvbtn.classList.toggle('active');

}

window.addEventListener('scroll', reveal2);

function reveal2() {
    var reveal2 = document.querySelectorAll('.left-abtme');

    for (var i = 0; i < reveal2.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveal2[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveal2[i].classList.add('active');
        }
        else {
            reveal2[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

function reveal() {

    var reveals = document.querySelectorAll('.edu');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal3);

function reveal3() {

    var reveals = document.querySelectorAll('.social-cntct');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


//handling skills showing section

$(".xx").mouseover(function () {
    $('#hdng-skill').delay(200).fadeIn();
    $('#cnt-skill').delay(200).fadeIn();
    // $(".skill-info").css("display", "block");
    $(".skill-info").fadeIn(300)



    let ide = $(this).attr('id')

    switch (ide) {
        case 'html':
            $("#hdng-skill").text('HTML')
            $("#prct-skill").text('90')
            $('#cnt-skill').text('The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.')
            break
        case 'css':
            $("#hdng-skill").text('CSS')
            $("#prct-skill").text('92')

            $('#cnt-skill').text('Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.')
            break
        case 'js':
            $("#hdng-skill").text('JavaScript')
            $("#prct-skill").text('87')

            $('#cnt-skill').text('JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.')
            break
        case 'rjs':
            $("#hdng-skill").text('React JS')
            $("#prct-skill").text('87')
            $('#cnt-skill').text('React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. ')
            break
        case 'py':
            $("#hdng-skill").text('Python')
            $("#prct-skill").text('91')
            $('#cnt-skill').text('Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.')
            break
        case 'cpp':
            $("#hdng-skill").text('C++')
            $("#prct-skill").text('92')
            $('#cnt-skill').text('C++ is the most used and most popular programming language developed by Bjarne Stroustrup. C++ is a high-level and object-oriented programming language.')
            break
        case 'core':
            $("#hdng-skill").text('Java')
            $("#prct-skill").text('90')
            $('#cnt-skill').text('Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.')
            break
        case 'sql':
            $("#hdng-skill").text('SQL')
            $("#prct-skill").text('92')
            $('#cnt-skill').text('Structured Query Language is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.')
            break
        case 'aws':
            $("#hdng-skill").text('AWS')
            $("#prct-skill").text('93')
            $('#cnt-skill').text('Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.')
            break
        default:
            $("#hdng-skill").text('Error')
    }

});
$(".xx").mouseout(function () {
    // $(".skill-info").css("display", "none");
});

$('.cross').click(function () {
    $(".modal").css("display", "none");
    $(".skill-info").css("display", "none");
})

// listing media query for modal


var x = window.matchMedia("(max-width: 582px)")
x.addEventListener('change', myFunction(x));

function myFunction(x) {
    // var element = document.querySelector(".skill-btn");
    // element.classList.remove("xx");

    // // $(".skill-btn").removeClass("xx");

    if (x.matches) {
        $('.skill-btn').click(function () {
            $(".modal").css("display", "block");
        })
    } else {
        $(".modal").css("display", "none");
    }
}

// var modal = document.getElementById(".modal");
window.onclick = function (event) {
    if (event.target == modal) {
        $(".modal").css("display", "none");
    }
}

$('.soon').click(function(){
    alert('Feature Under Maintenance');
})
