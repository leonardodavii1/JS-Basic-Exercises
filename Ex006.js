Exercicio 06 - Somando dois números


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios JS</title>
</head>
<body>
    <button type="click" onclick="clicou()">Iniciar Soma</button>
    <div id="resultado"></div>

    <script>
        function clicou(){
            var n1 = Number(window.prompt('Digite um número: '))
            var n2 = Number(window.prompt('Digite outro número: '))
            var s = n1 + n2
            var res = window.document.getElementById('resultado')
            res.innerHTML =`A soma entre ${n1} e ${n2} é igual a ${s}`
        }
    </script>
</body>
</html>
