var Nightmare = require('nightmare'),
    nightmare = Nightmare()
url = 'http://loterias.caixa.gov.br/wps/portal/loterias/landing/diadesorte';

nightmare.goto(url)
    .wait(1000)
    .evaluate(function () {
        var result = [];
        var numeros = [];

        document.querySelectorAll("ul.diaDeSorte li").forEach(function (item) {
            numeros.push(item.innerText);
        });
        result.push(document.getElementsByClassName('title-bar')[0].querySelector('span').innerText);
        result.push(numeros.join(','));
        result.push(document.getElementsByClassName('next-prize')[0].querySelectorAll('p')[0].innerText);
        result.push(document.getElementsByClassName('next-prize')[0].querySelectorAll('p')[1].innerText);

        return result;
        done()
    })
    .end()
    .then(function (result) {
        console.log(result)
    });
