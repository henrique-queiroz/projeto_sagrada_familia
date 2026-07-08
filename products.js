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
    categoria: "Camiseta",
    titulo: "Nossa senhora de Guadalupe",
    descricao: "Camiseta preta, no tecido suede confort, com escrita branca e detalhes brancos nas costas e imagem de Nossa Senhora de Guadalupe na frente.",
    precoOriginal: null,  
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/PZV9DQD5/Whats-App-Image-2026-06-22-at-19-36-27.jpg",
    imageAlt: "Camiseta Nossa Senhora de Guadalupe",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Nossa Senhora de Guadalupe."
  },
  {
    id: 2,
    categoria: "Camiseta",
    titulo: "Nossa senhora das Graças",
    descricao: "Camiseta branca, no tecido suede confort, com imagem de Nossa Senhora das Graças na frente e imagem da medalha milagrosa nas costas com oração escrita.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/Jjq82xdm/Whats-App-Image-2026-06-22-at-19-38-29.jpg",
    imageAlt: "Camiseta Nossa Senhora das Graças",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Nossa Senhora das Graças."
  },
  {
    id: 3,
    categoria: "Camiseta",
    titulo: "Jesus, Maria e José",
    descricao: "Camiseta azul, no tecido suede confort, com escrita branca e detalhes brancos na frente.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/nq4m92NC/Whats-App-Image-2026-06-22-at-19-40-33.jpg",
    imageAlt: "Camiseta Jesus, Maria e José",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Jesus, Maria e José."
  },
  {
    id: 4,
    categoria: "Camiseta",
    titulo: "Títulos de Nossa Senhora",
    descricao: "Camiseta preta, no tecido suede confort, com detalhes coloridos e escrita dourada.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/KcMLy7yS/Whats-App-Image-2026-06-22-at-19-41-57.jpg",
    imageAlt: "Camiseta Títulos de Nossa Senhora",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Títulos de Nossa Senhora."
  },
  {
    id: 5,
    categoria: "Camiseta",
    titulo: "Jesus Misericordioso",
    descricao: "Camiseta branca, no tecido suede confort, com escrita marrom e imagem de Jesus Misericordioso na frente.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/Dg707G2w/Whats-App-Image-2026-06-22-at-19-43-59.jpg",
    imageAlt: "Camiseta Jesus Misericordioso",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Jesus Misericordioso."
  },
  {
    id: 6,
    categoria: "Camiseta",
    titulo: "Sagrada Família",
    descricao: "Camiseta branca, no tecido suede confort, com escrita marrom e imagem da Sagrada Família na frente.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/392gMtJD/Whats-App-Image-2026-06-22-at-19-45-41.jpg",
    imageAlt: "Camiseta Sagrada Família",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Sagrada Família."
  },
  {
    id: 7,
    categoria: "Camiseta",
    titulo: "São Miguel Arcanjo",
    descricao: "Camiseta branca, no tecido suede confort, com imagem da espada de São Miguel Arcanjo na frente e imagem de São Miguel Arcanjo nas costas.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/350d9sSd/Whats-App-Image-2026-06-22-at-19-48-44.jpg",
    imageAlt: "Camiseta São Miguel Arcanjo",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: São Miguel Arcanjo."
  },
  {
    id: 8,
    categoria: "Camiseta",
    titulo: "Santíssimo Sacramento",
    descricao: "Camiseta preta, no tecido suede confort, com escrita dourada e detalhes dourados na frente e imagem do Santíssimo Sacramento nas costas.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/x8f1fzhP/Whats-App-Image-2026-06-22-at-19-51-45.jpg",
    imageAlt: "Camiseta Santíssimo Sacramento",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Santíssimo Sacramento."
  },
  {
    id: 9,
    categoria: "Camiseta",
    titulo: "São Francisco de Assis",
    descricao: "Camiseta branca, no tecido suede confort, com escrita marrom e imagem de São Francisco de Assis na frente.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/21L1TVTj/Whats-App-Image-2026-06-22-at-19-53-09.jpg",
    imageAlt: "Camiseta São Francisco de Assis",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: São Francisco de Assis."
  },
  {
    id: 10,
    categoria: "Camiseta",
    titulo: "Bom Pastor",
    descricao: "Camiseta branca, no tecido suede confort, com escrita preta e detalhes pretos na frente e imagem do bom pastor nas costas.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/svWswrYD/Whats-App-Image-2026-06-22-at-19-57-09.jpg",
    imageAlt: "Camiseta Bom Pastor",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Bom Pastor."
  },
  {
    id: 11,
    categoria: "Camiseta",
    titulo: "Santa Teresinha do Menino Jesus",
    descricao: "Camiseta branca, no tecido suede confort, com escrita vermelha e imagem de Santa Teresinha.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/C5WWhGGs/Whats-App-Image-2026-06-22-at-23-12-16.jpg",
    imageAlt: "Camiseta Santa Teresinha",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Santa Teresinha."
  },
  {
    id: 12,
    categoria: "Camiseta",
    titulo: "Seleção Brasileira",
    descricao: "Camiseta branca, no tecido suede confort, com o  escudo da CBF e detalhes na lateral com a imagem da bandeira do Brasil e Nossa Senhora Aparecida vazada.",
    precoOriginal: null,
    preco: "69,90",
    badge: null,
    image: "https://i.ibb.co/PZMYcgh8/Whats-App-Image-2026-06-22-at-20-01-21.jpg",
    imageAlt: "Camiseta Seleção Brasileira",
    whatsappMsg: "Olá! Tenho interesse na Camiseta: Seleção Brasileira."
  },
  {
    id: 13,
    categoria: "Jaqueta",
    titulo: "São Miguel Arcanjo",
    descricao: "Jaqueta azul, no jeans, com a imagem de São Miguel Arcanjo nas costas.",
    precoOriginal: null,
    preco: "399,90",
    badge: null,
    image: "https://i.ibb.co/hJxTYTCb/Whats-App-Image-2026-06-22-at-22-39-08.jpg",
    imageAlt: "Jaqueta São Miguel Arcanjo",
    whatsappMsg: "Olá! Tenho interesse na Jaqueta: São Miguel Arcanjo."
  },
  {
    id: 14,
    categoria: "Jaqueta",
    titulo: "São Bento",
    descricao: "Jaqueta preta, no jeans, com a medalha de São Bento nas costas..",
    precoOriginal: null,
    preco: "399,90",
    badge: null,
    image: "https://i.ibb.co/YBSmV9F4/Whats-App-Image-2026-06-22-at-22-37-36.jpg",
    imageAlt: "Jaqueta São Bento",
    whatsappMsg: "Olá! Tenho interesse na Jaqueta: São Bento."
  },
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
    const waLink = `https://wa.me/${5561985252202}?text=${msgEncoded}`;

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
