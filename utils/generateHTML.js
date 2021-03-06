const generateHeader = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">



    <title>${data.teamName}</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://kit.fontawesome.com/ea187b7c6b.js" crossorigin="anonymous"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Comforter&family=Comforter+Brush&family=Nunito:wght@200&family=Outfit:wght@100&family=Righteous&display=swap"
        rel="stylesheet">
    <link rel="icon" href="./assets/favicon.png">
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <header>
        <div class="p-5 bg-light">
            <div class="container">
                <h1 class="display-3 text-center teamName">${data.teamName}</h1>
                </p>
            </div>
        </div>
    </header>
    <main class="py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
  
    `

};

const generateManager = (data) => {
    return `
    <div class="card col m-1" style="width: 18rem;">
                    <img src="./assets/person.png" class="card-img-top" alt="this is a image of a person">
                    <div class="card-body">
                        <h5 class="card-title text-center">${data.name}</h5>
                        <p class="card-text text-center">Manager</p>
                    </div>
                    <ul class="list-group list-group-flush m-1">
                        <li class="list-group-item"><i class='fas fa-id-card'></i> ${data.id}</li>
                        <li class="list-group-item"><i class='far fa-envelope'></i> <a
                                href="mailto:${data.email}">${data.email}</a></li>
                        <li class="list-group-item"><i class='far fa-building'></i> ${data.officeNumber}</li>
                    </ul>

                </div>
    `
}

const generateEngineer = (data) => {
    return `
    <div class="card col m-1" style="width: 18rem;">
    <img src="./assets/person.png" class="card-img-top" alt="this is a image of a person">
    <div class="card-body">
        <h5 class="card-title text-center">${data.name}</h5>
        <p class="card-text text-center">Engineer</p>
    </div>
    <ul class="list-group list-group-flush m-1">
        <li class="list-group-item"><i class='fas fa-id-card'></i> ${data.id}</li>
        <li class="list-group-item"><i class='far fa-envelope'></i> <a
                href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item"><i class='fab fa-github'></i> <a
                href="https://github.com/${data.github}">${data.github}</a></li>
    </ul>

   </div>`
}

const generateIntern = (data) => {
    return `
    <div class="card col m-1" style="width: 18rem;">
    <img src="./assets/person.png" class="card-img-top" alt="this is a image of a person">
    <div class="card-body">
        <h5 class="card-title text-center">${data.name}</h5>
        <p class="card-text text-center">Intern</p>
    </div>
    <ul class="list-group list-group-flush m-1">
        <li class="list-group-item"><i class='fas fa-id-card'></i> ${data.id}</li>
        <li class="list-group-item"><i class='far fa-envelope'></i> <a
                href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item"><i class='fas fa-school'></i> ${data.school}</li>
    </ul>

</div>`
}


const generateFooter = () => {
    return `
    </div>
   </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>
<footer class="footer mb-5">
<div id="contact" class="text-center">
    <p>Updated February 2022</p>
    2022 &#169;
    Powered by <a id="mycontact" href="https://github.com/ayacomputer">Ayako Woollan</a>
</div>
</footer>
</html>`
}


module.exports = {
    generateHeader,
    generateEngineer,
    generateIntern,
    generateManager,
    generateFooter,
};
