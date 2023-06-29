# **💲Brum Finance💲**

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=YELLOW&style=for-the-badge)

:construction: Projeto em construção :construction:

## 💡 Ideia Base

### ⚙️ Funcionalidades

* 📝 Budget
   * Registrar Receitas
   * Categorizar Despesas
   * Definir Metas de Gastos
   * Acompanhar Progresso
   * Gerar Relatórios
   * Notificações

* 💰 Categorias
   * Tipos:
      * Entradas
      * Saídas

   * Grupos:
      * Entradas
         * Renda Fixa
         * Renda Extra
         * Transferência Recebidas
         * Bônus
         * Resgate de Fundo

      * Igreja
         * OFERTA DE AMOR
         * AJUDA A NECESSITADOS
         * MINISTÉRIOS
         * LANCHE (GA)
         * SONHO DE NATAL

      * Fundo de Emergência
         * Reserva Emergência

      * Alimentação
         * SUPERMERCADO / FEIRA
         * LANCHES
         * GASTOS DIÁRIOS
         * GÁS DE COZINHA
         * Datas Especiais

      * Transporte
         * PRESTAÇÃO DO CARRO
         * SEGURO DO CARRO
         * IPVA CARRO
         * MULTA
         * MANUTENÇÃO CARRO
         * BATERIA
         * GASOLINA
         * TAXI / ONIBUS / UBER
         * ESTACIONAMENTO / REPARADOR

      * Moradia
         * ALUGUEL
         * PRESTAÇÃO DA CASA
         * CONDOMÍNIO
         * ÁGUA
         * ENERGIA
         * TELEFONE
         * IPTU
         * MANUTENÇÃO DA CASA
         * EMPREGADA / DIARISTA / BABA
         * LAVANDERIA
         * TV ASSINATURA / INTERNET
         * Manutenção

      * Prestações Fixas
         * CARTÃO DE CRÉDITO
         * MESADAS / PENSÃO
         * INSS
         * DESCONTO EM FOLHA

      * Saúde
         * PLANO DE SAÚDE / ODONTOLÓGICO
         * CONSULTAS
         * REMÉDIOS

      * Educação
         * MENSALIDADE
         * CURSOS E TREINAMENTOS
         * LIVROS
         * MATERIAL ESCOLAR / FARDA
         * TRANSPORTE

      * Lazer
         * PRESENTES
         * CONFRATERNIZAÇÕES
         * VESTUÁRIO
         * SALÃO DE BELEZA
         * GASTO COM ANIMAIS
         * ACADEMIA / ESPORTES
         * FÉRIAS
         * PASSEIOS

      * Outros

### 🧑‍🦲 Entidades

* Usuário (User):
    * id: string
    * nome: string
    * email: string
    * senha: string (criptografada)
* Transação (Transaction):
    * id: string
    * usuárioId: string (referência ao usuário que realizou a transação)
    * categoria: string
    * tipo: string (receita ou despesa)
    * valor: number
    * descrição: string
*Categoria (Category):
    * id: string
    * nome: string
    * usuárioId: string (referência ao usuário que criou a categoria)
