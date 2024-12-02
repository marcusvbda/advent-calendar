"use client";
import Snowfall from "react-snowfall";

export default function Fragment() {
  const currentDay = new Date().getDay() + 1;

  const advents: { day: number; activity: string }[] = [
    { day: 1, activity: "Visitem um lugar muito decorado de Natal." },
    {
      day: 2,
      activity:
        "Escolham uma oração católica e rezem juntos. Sugestão: Oração de São Francisco.",
    },
    {
      day: 3,
      activity:
        "Postem uma foto natalina. Pode ser vocês decorando a casa ou algo simples.",
    },
    {
      day: 4,
      activity:
        "Façam um chocolate quente caseiro e customizem com chantilly ou canela.",
    },
    {
      day: 5,
      activity:
        "Visitem a decoração de Natal do Parque Ibirapuera/vila lobos e assistam ao show de luzes.",
    },
    {
      day: 6,
      activity: "Escrevam juntos uma lista de metas para o próximo ano.",
    },
    {
      day: 7,
      activity:
        "Façam uma boa ação: doem roupas ou brinquedos para uma instituição de caridade.",
    },
    {
      day: 8,
      activity:
        "Assistam a um filme natalino clássico como 'Esqueceram de Mim' ou 'O Grinch'.",
    },
    {
      day: 9,
      activity: "Enviem mensagens de carinho para 3 pessoas especiais.",
    },
    {
      day: 10,
      activity:
        "Participem de uma missa, especialmente uma com temática de Advento.",
    },
    {
      day: 11,
      activity:
        "Preparem biscoitos de Natal juntos e decorem com criatividade.",
    },
    {
      day: 12,
      activity:
        "Troquem presentes, não precisa ser algo caro. De preferencias a algo que simbolize um momento ou uma memória do casal.",
    },
    {
      day: 13,
      activity:
        "Leiam um trecho da Bíblia relacionado ao Natal, como Lucas 2:1-20.",
    },
    {
      day: 14,
      activity:
        "Criem cartões de Natal personalizados, feitos à mão ou digitais.",
    },
    {
      day: 15,
      activity: "Experimentem um café ou jantar temático de Natal",
    },
    {
      day: 16,
      activity:
        "Façam alguma ação social, como ajudar uma instituição ou fazer uma doação.",
    },
    {
      day: 17,
      activity:
        "Cantem músicas natalinas juntos, sejam clássicos brasileiros ou internacionais.",
    },
    {
      day: 18,
      activity: "Enviem mensagens de carinho para 3 pessoas especiais cada.",
    },
    {
      day: 19,
      activity: "Façam uma oração antes de dormir, agradecendo pelo dia.",
    },
    {
      day: 20,
      activity:
        "Assistam a um filme natalino que vocês nunca viram, como 'Crônicas de Natal'.",
    },
    {
      day: 21,
      activity:
        "Escrevam bilhetinhos de amor e escondam pela casa para o outro encontrar.",
    },
    {
      day: 22,
      activity:
        "Façam um piquenique em um parque com comidinhas temáticas de Natal.",
    },
    {
      day: 23,
      activity:
        "Maratona de séries ou curtas natalinos, como 'The Christmas Chronicles'.",
    },
    {
      day: 24,
      activity:
        "Ajudem a preparar a ceia de Natal juntos e aproveitem o momento.",
    },
    {
      day: 25,
      activity: "Olhe nos olhos um do outro e agradeçam por algo bom.",
    },
    {
      day: 26,
      activity: "Planejem uma viagem ou passeio para o próximo ano juntos.",
    },
    {
      day: 27,
      activity:
        "Comprem uma lembrancinha simbólica um para o outro, algo cheio de significado.",
    },
    {
      day: 28,
      activity:
        "Façam uma retrospectiva do ano, relembrando os melhores momentos.",
    },
    {
      day: 29,
      activity:
        "Joguem um jogo ou façam algo divertido em casa, como montar um quebra-cabeça.",
    },
    {
      day: 30,
      activity:
        "Organizem a casa para o ano novo, desapegando do que não usam mais.",
    },
    {
      day: 31,
      activity:
        "Façam uma oração especial para encerrar o ano com gratidão e esperanças para 2025.",
    },
  ];

  const layers: any = [
    [31],
    [30, 29],
    [28, 27, 26],
    [25, 24, 23, 22],
    [5, 4, 3, 2, 1],
  ];

  const canRevew = (day: any) => {
    return currentDay >= day;
  };

  const seeAdvent = (day: any) => {
    const currentAdvent: any = advents.find((a: any) => a.day === day);
    alert(currentAdvent.activity);
  };

  return (
    <>
      <Snowfall />
      {layers.map((layer: any, index: any) => (
        <div key={index} className="flex space-x-2 justify-center">
          {layer.map((num: any) => (
            <button
              onClick={() => seeAdvent(num)}
              key={num}
              className="w-24 h-24 my-1 flex items-center justify-center bg-green-600 text-white font-bold rounded-full disabled:opacity-50"
              disabled={!canRevew(num)}
            >
              {num}
            </button>
          ))}
        </div>
      ))}
    </>
  );
}