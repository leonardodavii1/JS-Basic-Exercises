Exercicio 03 - Usando o prompt() e o alert() juntos

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios JS</title>
</head>
<body>
    <button type="click" onclick="clicou()">Clique aqui para começar</button>

    <script>
        function clicou(){
            var nome = window.prompt('Qual seu nome? ')
            window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
        }
    </script>
</body>
</html>
