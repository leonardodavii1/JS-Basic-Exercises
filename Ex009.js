Exercicio - 009

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <input type="button" value="Clique em mim" onclick="contar()">
    <input type="button" value="Zerar o contador" onclick="zerar()">

    <section id="resultado">
        <p>O contador está com 0 cliques </p>
    </section>

    <script>
        let contador = 0
            let res = document.querySelector('section#resultado')
            function contar() {
                contador ++ 
                res.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
            }

            function zerar() {
                contador = 0 
                res.innerHTML = null 
            }
    </script>
</body>
</html>
