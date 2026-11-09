/*
  PORTFÓLIO, SERVIÇOS E DEPOIMENTOS
  Tudo aqui é EXEMPLO. As "fotos" são ilustrações geradas pelo site (kind) até você colocar as fotos reais.

  Para usar uma foto real: coloque o arquivo na pasta img/ e preencha o campo img, por exemplo img: 'img/casamento-01.jpg'.
  ratio é a proporção da foto: '3/4' (vertical), '4/3' (horizontal), '1/1' (quadrada) ou '2/3' (vertical alta).
*/
window.DATA = {
  categories: ['Casamentos', 'Retratos', 'Famílias', 'Eventos'],
  photos: [
    { title: 'Pôr do sol da cerimônia', cat: 'Casamentos', ratio: '4/3', kind: 'couple', pal: ['#F6B58A', '#C86B7B', '#3A2B4A'], img: '' },
    { title: 'Luz de janela', cat: 'Retratos', ratio: '3/4', kind: 'portrait', pal: ['#D9C2A8', '#8C6A52', '#2A211C'], img: '' },
    { title: 'Tarde no parque', cat: 'Famílias', ratio: '4/3', kind: 'family', pal: ['#BFD8A8', '#6FA07A', '#2F4A3A'], img: '' },
    { title: 'Pista de dança', cat: 'Eventos', ratio: '1/1', kind: 'party', pal: ['#1B1030', '#E5482D', '#F5C16C'], img: '' },
    { title: 'Capela', cat: 'Casamentos', ratio: '2/3', kind: 'arch', pal: ['#E8D9C8', '#B79A83', '#3A2F2A'], img: '' },
    { title: 'Hora dourada', cat: 'Retratos', ratio: '4/3', kind: 'sunset', pal: ['#FAD6A5', '#E58A6B', '#3D2B45'], img: '' },
    { title: 'Primeiros meses', cat: 'Famílias', ratio: '1/1', kind: 'portrait', pal: ['#B7D3E0', '#6C97B0', '#1F3342'], img: '' },
    { title: 'Salão de festas', cat: 'Eventos', ratio: '3/4', kind: 'arch', pal: ['#2B2F4A', '#6F7BB0', '#0E1020'], img: '' },
    { title: 'A noiva', cat: 'Casamentos', ratio: '3/4', kind: 'portrait', pal: ['#F3E3E0', '#D0A5A5', '#4A2E35'], img: '' },
    { title: 'Ensaio de casal', cat: 'Retratos', ratio: '2/3', kind: 'couple', pal: ['#C9D9CF', '#7FA08D', '#25382F'], img: '' },
    { title: 'Show ao vivo', cat: 'Eventos', ratio: '4/3', kind: 'party', pal: ['#0F1A2B', '#2AA6A0', '#F4B942'], img: '' },
    { title: 'Dia de praia', cat: 'Famílias', ratio: '3/4', kind: 'sunset', pal: ['#F9E1B0', '#E8A25F', '#4A3322'], img: '' }
  ],
  services: [
    { name: 'Casamentos', text: 'Da preparação à festa, a história do dia contada com sensibilidade e sem poses forçadas.', list: ['Making of e cerimônia', 'Retratos dos noivos', 'Festa e detalhes'] },
    { name: 'Retratos e ensaios', text: 'Ensaios individuais, de casal ou profissionais, com direção leve para você se sentir à vontade.', list: ['Ensaios externos ou em estúdio', 'Orientação de looks e locais', 'Fotos tratadas'] },
    { name: 'Famílias e gestantes', text: 'Registros naturais de quem você ama, do recém-nascido às tardes de domingo.', list: ['Gestantes e newborn', 'Aniversários e encontros', 'Ensaios em família'] },
    { name: 'Eventos e corporativo', text: 'Cobertura de festas, shows e eventos de empresa, sem perder nenhum momento importante.', list: ['Festas e formaturas', 'Eventos corporativos', 'Retratos profissionais'] }
  ],
  steps: [
    { title: 'Conversa', text: 'Você conta o que imagina, a data e o local, e recebe uma proposta clara.' },
    { title: 'Ensaio ou cobertura', text: 'No dia, o foco é você: eu cuido da luz e dos detalhes para o resultado ser natural.' },
    { title: 'Entrega', text: 'As melhores fotos são tratadas e entregues em galeria online, no prazo combinado.' }
  ],
  about: {
    title: 'Olá, eu sou o Lucas.',
    text: ['Texto de exemplo: conte aqui a história do fotógrafo, como começou, o que mais gosta de fotografar e como é o estilo do trabalho.', 'Outro parágrafo de exemplo: fale do jeito de trabalhar, do cuidado com cada cliente e do que torna cada ensaio único.'],
    img: ''
  },
  testimonials: [
    { name: 'Cliente exemplo 1', role: 'Casamento', text: 'As fotos ficaram com a emoção que a gente sentiu no dia. Cada vez que olhamos, lembramos de tudo.' },
    { name: 'Cliente exemplo 2', role: 'Ensaio de casal', text: 'Eu odiava tirar foto e saí do ensaio me sentindo à vontade. O resultado ficou lindo e muito natural.' },
    { name: 'Cliente exemplo 3', role: 'Ensaio de família', text: 'Conseguiu fotografar as crianças sem eu perceber. Recebemos tudo organizado e bem antes do esperado.' }
  ]
};
