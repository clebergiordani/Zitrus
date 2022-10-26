Feature: Validar dados no site da Zitrus

    Scenario: Validar informação de Quem Somos - Pilares
        Given acesso o site Zitrus
        When acessar a pagina Quem Somos
        Then devo visualizar os seguintes pilares da empresa
            |index|mensagem|
            |1    |Transformar a saúde por meio da tecnologia, atuando com protagonismo na realização dos objetivos de nossos clientes.|
            |2    |Ser referência em tecnologia para a gestão da saúde no Brasil.|
            |3    |Foco nas pessoas, compromisso com os resultados e com a transformação. Transparência em todas as relações. Atuar com protagonismo e cooperar para evoluir mutuamente.|
            |4    |Talentos, inovação e cooperação.|

    Scenario: Validar dados do Canal de Contato
        Given acesso o site Zitrus
        When acessar o canal de contato pelo botao
        Then será exibido o Telefone: "(47) 9 9656-5688"
        And será exibido o Email: "contato@zitrus.com.br"