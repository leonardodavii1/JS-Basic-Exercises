Exercicio 08 - Vários cálculos em JS


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios JS</title>
</head>
<body>
    <button type="click" onclick="clicou()">Clique para Calcular</button>
    <div id="resultado"></div>

    <script>
        function clicou(){
            var n = window.prompt('Digite um número: ')
            var res = window.document.getElementById('resultado')
            res.innerHTML = `<p>O número a ser analisado aqui será o ${n}</p>`
            res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(n)}</p>`
            res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.trunc(n)}</p>`
            res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(n)}</p>`
            res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(n)}</p>`
            res.innerHTML += `<p>O valor de ${n}<sup>2</sup> é ${Math.pow(n,2)}</p>` // <sup> faz a adição visual do número de potencia.
            res.innerHTML += `<p>O valor de ${n}<sup>3</sup> é ${Math.pow(n,3)}</p>` 
        }
    </script>
</body>
</html>
