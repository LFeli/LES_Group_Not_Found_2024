import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  return (
    <section className="flex flex-col items-center justify-center gap-20">
      <div className="text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          Duvidas frequentes
        </h1>
        <p className="mx-auto block max-w-5xl py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Veja abaixo as dúvidas frequentes que algumas pessoas tiveram que
          podem ser provavelmente a sua também, mas não deixe de ajudar a causa
          animal.
        </p>
      </div>

      <div className="flex w-full flex-col gap-6">
        <Accordion type="single" collapsible className="w-full space-y-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Fazer uma doação
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Para fazer uma doação, basta criar uma conta acessar a área de
              postagens e escolher uma para realizar a postagem e fazer uma
              doação do valor que quiser, toda doação sempre será bem vinda para
              nossa causa e você estará ajudando diretamente o animal escolhido
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Por que doar?
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Doar para a causa animal salva vidas. Sua contribuição ajuda a
              fornecer cuidados médicos, alimentação e abrigo para animais
              abandonados e necessitados. Cada doação faz uma diferença real,
              garantindo que mais animais recebam o cuidado e o amor que
              merecem. Ajude a transformar vidas e doe hoje!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Vantagens de fazer uma doação
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Salva Vidas: Sua doação fornece cuidados médicos, alimentação e
              abrigo para animais necessitados. Bem-Estar Animal: Ajuda a
              melhorar a qualidade de vida de animais resgatados,
              proporcionando-lhes segurança e conforto. Comunidade Mais
              Saudável: Contribui para reduzir o número de animais abandonados
              nas ruas, promovendo um ambiente mais seguro e saudável.
              Satisfação Pessoal: Sentimento de realização e alegria ao saber
              que você está fazendo a diferença na vida de animais indefesos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Como me torno um patrocinador?
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Preencha o formulário acima com as informações da sua empresa, e
              aguarde a aprovação dos nossos administradores.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
