Exercicio 07 - Calculando a média de um aluno


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios JS</title>
</head>
<body>
    <button type="click" onclick="clicou()">Calcular Média</button>
    <div id="resultado"></div>

    <script>
        function clicou(){
            var nome = window.prompt('Qual o nome do aluno ?')
            var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
            var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
            var m = (n1 + n2) / 2
            var res = window.document.getElementById('resultado')
            res.innerHTML = `<p>Calculando a média de ${nome}.</p>`
            res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`
            res.innerHTML += `<p>A média final será ${m}</p>`
        }
    </script>
</body>
</html>
