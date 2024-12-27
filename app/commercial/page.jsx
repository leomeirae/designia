"use client";

export default function Commercial() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">IA Design para Uso Comercial</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Quais imagens podem obter licenciamento comercial?</h2>
        <p className="text-gray-700 mb-4">
          As versões Standard, Pro e Team fornecem licenciamento comercial abrangente, permitindo distribuir 
          e reproduzir digitalmente os trabalhos na internet, sites pessoais ou redes sociais. Eles também 
          permitem reprodução e vendas offline.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Em quais áreas o licenciamento comercial pode ser usado?</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">🏗️ Indústria de Arquitetura</h3>
            <p className="text-gray-600">Você pode usar nossos trabalhos para promoção, exibição e atividades de marketing relacionadas a projetos arquitetônicos.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">🎨 Indústria de Design</h3>
            <p className="text-gray-600">Você pode incorporar nossos trabalhos em projetos de design, como design de interiores, design de produtos, etc.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">📱 Web e Mídias Sociais</h3>
            <p className="text-gray-600">Você pode compartilhar e promover nossos trabalhos na internet, websites e plataformas de mídia social.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-2">🖨️ Impressão e Publicação</h3>
            <p className="text-gray-600">Você pode incluir nossos trabalhos em materiais impressos e publicações, como livros, revistas, manuais, etc.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Quais regras preciso seguir?</h2>
        <div className="bg-gray-50 p-6 rounded-lg border">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Não violar nenhuma lei aplicável (global ou local) ao usar as imagens</li>
            <li>Não explorar menores de idade</li>
            <li>Não compartilhar ou criar informações falsas verificáveis</li>
            <li>Não compartilhar informações de identidade pessoal</li>
            <li>Não difamar, depreciar ou assediar ninguém</li>
            <li>Não discriminar ninguém em qualquer base legalmente protegida</li>
            <li>Não se envolver em quaisquer outras atividades ilegais</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Preciso indicar a fonte da imagem?</h2>
        <p className="text-gray-700">
          Isso não é obrigatório. Claro, ficaríamos muito gratos se você indicasse que a imagem foi 
          gerada através do IA Design.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Aviso Legal</h2>
        <div className="bg-gray-50 p-6 rounded-lg border">
          <p className="text-gray-700">
            Qualquer uso, incluindo qualquer uso comercial, de imagens geradas pelo IA Design é por sua 
            conta e risco. Na extensão máxima permitida pela lei aplicável, o IA Design não oferece 
            garantias, endossos, garantias ou representações em relação às imagens geradas e se isenta 
            de toda responsabilidade por seu uso.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Observação</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <p className="text-gray-700">
            Por favor, esteja ciente de que o campo de geração de imagens por IA ainda é relativamente 
            novo e está evoluindo rapidamente, inclusive do ponto de vista legal. Como tal, os termos e 
            licenças que fornecemos estão sujeitos a alterações e podem não ser definitivos. Estes termos 
            comerciais fazem parte dos termos de serviço do IA Design.
          </p>
        </div>
      </section>
    </div>
  );
} 