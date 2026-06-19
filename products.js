/* ================================================================
   SAGRADA FAMÍLIA — Artigos Religiosos
   products.js  |  Dados dos produtos
   ================================================================

   Para atualizar:
   — Adicione ou remova objetos do array abaixo.
   — Cada produto segue a estrutura indicada nos comentários.
   — Para imagens: substitua o campo "image" pela URL direta
     (Cloudinary, ImgBB, GitHub Raw, Google Drive convertido).
   — Deixe "image: null" para exibir o placeholder padrão.
   ================================================================ */

const PRODUTOS = [
  {
    id: 1,
    categoria: "Crucifixos",
    titulo: "Crucifixo São Bento em Madeira Nobre",
    descricao: "Confeccionado em madeira de lei com medalha de São Bento encrustada. Ideal para sala, quarto ou presente especial.",
    precoOriginal: "98,00",  // null = sem desconto
    preco: "79,90",
    badge: "Mais Vendido",   // null = sem badge
    image: null,             // Ex: "https://i.ibb.co/exemplo/crucifixo.jpg"
    imageAlt: "Crucifixo São Bento em madeira nobre",
    whatsappMsg: "Olá! Tenho interesse no Crucifixo São Bento."
  },
  {
    id: 2,
    categoria: "Terços",
    titulo: "Terço Nossa Senhora Aparecida em Cristal",
    descricao: "Contas de cristal lapidado com medalha da Padroeira do Brasil. Acompanha estojo de veludo e certificado.",
    precoOriginal: null,
    preco: "54,90",
    badge: null,
    image: null,
    imageAlt: "Terço Nossa Senhora Aparecida em cristal lapidado",
    whatsappMsg: "Olá! Tenho interesse no Terço N.S. Aparecida em Cristal."
  },
  {
    id: 3,
    categoria: "Imagens Sacras",
    titulo: "Imagem Sagrado Coração de Jesus em Resina",
    descricao: "Escultura detalhada em resina de alta qualidade, acabamento premium com pintura à mão. 25 cm de altura.",
    precoOriginal: "169,00",
    preco: "139,90",
    badge: "Novo",
    image: null,
    imageAlt: "Imagem do Sagrado Coração de Jesus em resina pintada à mão",
    whatsappMsg: "Olá! Tenho interesse na Imagem Sagrado Coração de Jesus."
  },
  {
    id: 4,
    categoria: "Medalhas",
    titulo: "Medalha Milagrosa em Prata 950",
    descricao: "Legítima medalha milagrosa banhada em prata 950. Corrente inclusa. Embalagem para presente com oração impressa.",
    precoOriginal: null,
    preco: "89,90",
    badge: null,
    image: null,
    imageAlt: "Medalha Milagrosa banhada em prata 950 com corrente",
    whatsappMsg: "Olá! Tenho interesse na Medalha Milagrosa em Prata."
  },
  {
    id: 5,
    categoria: "Velas e Incensos",
    titulo: "Kit Oração — Velas e Incenso Sagrado",
    descricao: "Kit com 4 velas aromáticas (Mirra, Olíbano, Sândalo e Rosa de Saron) e 1 incensário de cerâmica artesanal.",
    precoOriginal: "96,00",
    preco: "74,90",
    badge: null,
    image: null,
    imageAlt: "Kit de velas aromáticas e incensário de cerâmica artesanal",
    whatsappMsg: "Olá! Tenho interesse no Kit Oração com velas e incenso."
  },
  {
    id: 6,
    categoria: "Bíblias e Livros",
    titulo: "Bíblia de Jerusalém — Edição Especial Capa Dura",
    descricao: "Tradução consagrada pelos estudiosos. Capa dura com bordas douradas, mapas bíblicos e notas de rodapé completas.",
    precoOriginal: "220,00",
    preco: "179,90",
    badge: "Oferta",
    image: null,
    imageAlt: "Bíblia de Jerusalém edição especial capa dura com bordas douradas",
    whatsappMsg: "Olá! Tenho interesse na Bíblia de Jerusalém Edição Especial."
  }
];


/* ================================================================
   SVG PLACEHOLDER — exibido quando image: null
   (Você pode substituir por qualquer SVG personalizado)
   ================================================================ */
const PLACEHOLDER_SVG = `
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="54" height="54" rx="8" stroke="#C9A96E" stroke-width="1.5" fill="none"/>
    <line x1="28" y1="12" x2="28" y2="44" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="14" y1="22" x2="42" y2="22" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
  <span>Imagem do Produto</span>
`;


/* ================================================================
   NÚMERO DO WHATSAPP
   ================================================================ */
const WHATSAPP_NUMBER = "5561982345846";


/* ================================================================
   RENDERIZAÇÃO DOS CARDS
   ================================================================ */
function renderProdutos() {
  const grid = document.getElementById("produtos-grid");
  if (!grid) return;

  grid.innerHTML = PRODUTOS.map(p => {
    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.imageAlt}" loading="lazy" />`
      : `<div class="card__image-placeholder">${PLACEHOLDER_SVG}</div>`;

    const badge = p.badge
      ? `<span class="card__badge">${p.badge}</span>`
      : "";

    const precoOld = p.precoOriginal
      ? `<span class="card__price-old">R$ ${p.precoOriginal}</span>`
      : "";

    const msgEncoded = encodeURIComponent(p.whatsappMsg);
    const waLink = `https://wa.me/${5561982345846}?text=${msgEncoded}`;

    return `
      <article class="card reveal">
        <div class="card__image-wrap">
          ${imgContent}
          ${badge}
        </div>
        <div class="card__body">
          <span class="card__category">${p.categoria}</span>
          <h3 class="card__title">${p.titulo}</h3>
          <p class="card__desc">${p.descricao}</p>
          <div class="card__footer">
            <div class="card__price">
              ${precoOld}
              <span class="card__price-current">
                <span class="card__price-currency">R$</span> ${p.preco}
              </span>
            </div>
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn--primary">
              Comprar
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Re-observa novos elementos .reveal após renderização
  if (window.revealObserver) {
    grid.querySelectorAll(".reveal").forEach(el => window.revealObserver.observe(el));
  }
}

document.addEventListener("DOMContentLoaded", renderProdutos);
