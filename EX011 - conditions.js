<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Externo</title>
</head>
<body>
    <input type="button" value="Calcular média" onclick="calcular()">

    <section id="resultado">
        <p>O resultado vai aparecer aqui...</p>
    </section>
   
<script>
    function calcular() {
       aluno = window.prompt('Qual o nome do aluno? ')
       n1 = Number(window.prompt(`qual foi a primeira nota de ${aluno}?`))
       n2 = Number(window.prompt(`além de ${n1}, qual foi a outra nota de ${aluno}?`))
       res = window.document.getElementById('resultado')
       m = (n1 + n2)/2

       res.innerHTML = `<p>Calculando a média de ${aluno}</p>`
       res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`
       res.innerHTML += `<p>A média final será ${m}</p>`
       if(m >= 6) {
        res.innerHTML += `A mensagem que temos é: Meus parabéns!`
       } else {
        res.innerHTML += `A mensagem que temos é: Estude um pouco mais.` 
       }

    }
    

</script>
</body>
</html>
