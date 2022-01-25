![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Mini Desafio - Dev Match

O exercício consiste em você criar as telas iniciais que estão no arquivo `DevMatch.fig`, contido nesta pasta.
Você deve tentar criar as telas sem assistir aos vídeos da resolução que virão a seguir.

As telas são basicamente estáticas nesse primeiro momento, as únicas coisas que não são estáticas são:
 - Ao preencher o CEP na tela de cadastro, devemos fazer uma busca na API do `VIA CEP` e identificar a cidade referente àquele CEP, nesse momento devemos também já preencher o campo cidade com o resultado vindo da `API`.
 - Criar um campo de senha que tenha o "olho" de ocultar e exibir senha.
 - Tratar erros de quando a `API` não retornar informações corretas.

<details>
  <summary>Dicas</summary>
  <ul>
    <li>Integração com a API do VIA CEP</li>
    <li>Utilizar Lib do Font Awesome para React para podermos usar os ícones do "olho"</li>
    <li>Criar as pastas de components e separar as responsabilidades</li>
    <li>Utilizar lib para notificações (link abaixo)</li>    
  </ul>  
</details>

---

**Links Úteis:**
- https://viacep.com.br/
- https://reactrouter.com/web/guides/quick-start
- https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
- https://github.com/fkhadra/react-toastify


Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `react` `viacep` `mini-desafio` `devmatch`
