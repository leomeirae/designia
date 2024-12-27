"use client";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Termos e Condições Gerais do IA Design</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Introdução</h2>
        <p className="text-gray-700 mb-4">
          Estes termos e condições regulam o uso do site e serviços do IA Design. Ao usar nosso site e serviços, 
          você concorda em estar vinculado a estes termos e condições.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Uso dos Serviços</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nossos serviços incluem processamento e geração de imagens usando inteligência artificial. 
            Você pode usar nossos serviços para fins pessoais ou comerciais, sujeito às restrições 
            descritas nestes termos e condições.
          </p>
          <p>
            Você deve ter pelo menos 18 anos para usar o Serviço. Ao concordar com estes Termos, você 
            declara e garante que: (a) tem pelo menos 18 anos; (b) seu registro e uso do Serviço está 
            em conformidade com todas as leis e regulamentos aplicáveis.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Conteúdo Proibido</h2>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <p className="font-medium mb-4">É proibido gerar ou enviar conteúdo que inclua:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Conteúdo abusivo, pornográfico, enganoso, obsceno, difamatório, ofensivo ou violento</li>
            <li>Conteúdo homofóbico, transfóbico, racista ou discriminatório</li>
            <li>Conteúdo que promova bullying, ataques pessoais, assédio ou exposição de dados pessoais</li>
            <li>Conteúdo sujeito a direitos autorais sem a permissão expressa do proprietário</li>
            <li>Conteúdo que viole direitos de terceiros, incluindo direitos de propriedade intelectual</li>
            <li>Conteúdo que contenha spam, vírus ou código malicioso</li>
            <li>Conteúdo que incite atividades ilegais</li>
            <li>Conteúdo que crie um ambiente hostil ou inadequado</li>
            <li>Conteúdo que prejudique ou defenda danos contra qualquer pessoa</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Política de Reembolso</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">Reembolsos em até 7 dias</h3>
            <p className="text-gray-600">
              Para pedidos feitos nos últimos 7 dias, você pode solicitar reembolso entrando em contato 
              com nosso suporte ao cliente. O valor do reembolso será calculado com base nos dias 
              restantes da sua assinatura.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">Reembolsos após 7 dias</h3>
            <p className="text-gray-600">
              Para pedidos com mais de 7 dias, um reembolso pode ser solicitado pelos seguintes motivos:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Software inoperante por período prolongado (mais de 7 dias consecutivos)</li>
              <li>Compra incorreta de pacote (possível trocar por outro pacote)</li>
              <li>Compras duplicadas causadas por problemas na plataforma de pagamento</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Limitação de Responsabilidade</h2>
        <div className="bg-gray-50 p-6 rounded-lg border">
          <p className="text-gray-700">
            Não nos responsabilizamos por quaisquer danos decorrentes do uso do nosso site ou serviços, 
            incluindo, mas não se limitando a, danos diretos, indiretos, incidentais ou consequenciais. 
            Também não nos responsabilizamos por danos decorrentes do uso ou processamento de conteúdo 
            gerado pelo usuário.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Alterações nos Termos</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <p className="text-gray-700">
            Podemos atualizar estes termos e condições periodicamente. Notificaremos você sobre quaisquer 
            alterações publicando os novos termos e condições em nosso site. Se você ainda tiver dúvidas 
            sobre os Termos e Condições, entre em contato conosco através do nosso suporte.
          </p>
        </div>
      </section>
    </div>
  );
} 