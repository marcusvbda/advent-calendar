"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import { useSwal } from "./helpers/swal";

export default function Fragment() {
  const { toast } = useSwal();
  const audioRef = useRef(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [visible, setVisible] = useState(false);

  const advents: { day: number; activity: string }[] = [
    { day: 1, activity: "Visitem um lugar decorado com luzes de Natal." },
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
        "Façam uma boa ação: doem roupas ou brinquedos para uma instituição de caridade por exemplo",
    },
    {
      day: 8,
      activity:
        "Assistam a um filme natalino, sugestão 'operação natal da prime video'",
    },
    {
      day: 9,
      activity: "Enviem mensagens de carinho para 3 pessoas especiais.",
    },
    {
      day: 10,
      activity: "Participem de uma missa juntos",
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
        "Saiam para jantar e assistam um filminha de terror juntinhos, afim hoje é sexta-feira 13",
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
  ];

  const layers: any = [
    [25],
    [24, 23],
    [22, 21, 20],
    [19, 18, 17, 16],
    [15, 14, 13, 12, 11],
    [10, 9, 8, 7, 6, 5],
    [4, 3],
    [2, 1],
  ];

  useEffect(() => {
    const today = new Date();
    setCurrentDay(+today.getDate());
    setVisible(true);
  }, []);

  const canRevew = (day: any) => {
    // console.log(currentDay, day);
    return currentDay >= day;
  };

  const seeAdvent = (day: any) => {
    const currentAdvent: any = advents.find((a: any) => a.day === day);
    (audioRef.current as any)?.play();
    toast("success", `${day} de Dezembro`, currentAdvent.activity);
  };

  if (!visible) return <></>;

  return (
    <>
      <Snowfall />
      <audio ref={audioRef}>
        <source src="/mc.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div className="flex space-x-2 justify-center">
        <Image src="/star.png" alt="star" width={100} height={100} priority />
      </div>
      {layers.map((layer: any, index: any) => (
        <div key={index} className="flex space-x-2 justify-center">
          {layer.map((num: any) => (
            <button
              onClick={() => seeAdvent(num)}
              key={num}
              className={`w-12 h-12 my-1 flex items-center justify-center bg-green-600 text-white font-bold rounded-full disabled:opacity-50 ${
                num <= 4 && "!bg-[#964B00]"
              }`}
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
