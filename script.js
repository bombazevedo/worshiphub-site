
const pricingData = {
  monthly: [
    {
      name: "Gratuito",
      badge: "TESTE SEM RISCO",
      description: "Para conhecer a experiência inicial do WorshipHub.",
      price: "R$ 0",
      perDay: "Entrada sem custo para começar",
      features: [
        "Acesso inicial ao app",
        "Ideal para sentir o fluxo básico",
        "Bom primeiro passo para equipes em descoberta"
      ],
      cta: "Quero começar sem custo",
      whatsappText: "Olá! Quero começar pelo plano gratuito do WorshipHub. Pode me orientar?"
    },
    {
      name: "Prelude",
      badge: "MENSAL",
      description: "Boa porta de entrada para ministérios que querem sair do improviso.",
      price: "R$ 19,00",
      perDay: "≈ R$ 0,63 por dia",
      features: [
        "Estrutura inicial de organização",
        "Fluxo mais claro para eventos e equipe",
        "Começo profissional com baixo investimento"
      ],
      cta: "Quero organizar minha equipe",
      whatsappText: "Olá! Tenho interesse no plano Prelude mensal do WorshipHub."
    },
    {
      name: "Chorus",
      badge: "MENSAL",
      description: "Para quem já precisa de uma rotina mais estável e confiável.",
      price: "R$ 29,90",
      perDay: "≈ R$ 0,99 por dia",
      features: [
        "Mais fôlego para a rotina da equipe",
        "Boa relação entre custo e organização",
        "Ajuda a reduzir ruído operacional"
      ],
      cta: "Quero dar mais consistência ao ministério",
      whatsappText: "Olá! Quero saber mais sobre o plano Chorus mensal do WorshipHub."
    },
    {
      name: "Harmony",
      badge: "MAIS PROCURADO",
      description: "Equilíbrio ideal entre gestão, visão e profissionalismo.",
      price: "R$ 49,90",
      perDay: "≈ R$ 1,66 por dia",
      features: [
        "Excelente para equipes em crescimento",
        "Reforça a percepção de gestão profissional",
        "Plano com maior potencial de conversão na landing"
      ],
      cta: "Quero elevar meu ministério",
      highlight: true,
      whatsappText: "Olá! Quero contratar o plano Harmony mensal do WorshipHub."
    },
    {
      name: "Anthem",
      badge: "MENSAL",
      description: "Pensado para equipes mais maduras e com maior demanda operacional.",
      price: "R$ 69,90",
      perDay: "≈ R$ 2,33 por dia",
      features: [
        "Mais robustez para a liderança",
        "Suporta operação mais exigente",
        "Melhor ajuste para quem quer avançar com segurança"
      ],
      cta: "Quero controle mais refinado",
      whatsappText: "Olá! Tenho interesse no plano Anthem mensal do WorshipHub."
    },
    {
      name: "Maestro",
      badge: "PREMIUM",
      description: "Para operações maiores e visão mais estratégica do ministério.",
      price: "R$ 129,90",
      perDay: "≈ R$ 4,33 por dia",
      features: [
        "Camada premium de gestão",
        "Mais preparo para cenários robustos",
        "Forte aderência para visão multi-igrejas"
      ],
      cta: "Quero o máximo de estrutura",
      whatsappText: "Olá! Quero conversar sobre o plano Maestro mensal do WorshipHub."
    }
  ],
  quarterly: [
    {
      name: "Prelude",
      badge: "TRIMESTRAL",
      description: "Entrada econômica com horizonte maior de organização.",
      price: "R$ 49,90",
      perDay: "≈ R$ 0,55 por dia",
      features: ["Melhor compromisso inicial", "Mais previsibilidade operacional", "Boa porta de entrada para consolidar hábito"],
      cta: "Quero iniciar com mais previsibilidade",
      whatsappText: "Olá! Quero saber sobre o plano Prelude trimestral do WorshipHub."
    },
    {
      name: "Chorus",
      badge: "TRIMESTRAL",
      description: "Mais estabilidade para quem já exige uma operação mais confiável.",
      price: "R$ 75,00",
      perDay: "≈ R$ 0,83 por dia",
      features: ["Menor fricção no médio prazo", "Mais constância na rotina da equipe", "Boa relação entre valor e estrutura"],
      cta: "Quero consolidar a organização",
      whatsappText: "Olá! Quero contratar o plano Chorus trimestral do WorshipHub."
    },
    {
      name: "Harmony",
      badge: "MAIS PROCURADO",
      description: "Camada mais atraente para liderança que quer profissionalizar de verdade.",
      price: "R$ 129,90",
      perDay: "≈ R$ 1,44 por dia",
      features: ["Equilíbrio forte entre valor e visão", "Plano ideal para crescimento", "Excelente percepção de custo-benefício"],
      cta: "Quero profissionalizar meu ministério",
      highlight: true,
      whatsappText: "Olá! Tenho interesse no plano Harmony trimestral do WorshipHub."
    },
    {
      name: "Anthem",
      badge: "TRIMESTRAL",
      description: "Mais robustez para equipes que precisam de operação mais madura.",
      price: "R$ 179,90",
      perDay: "≈ R$ 2,00 por dia",
      features: ["Mais segurança para a liderança", "Maior aderência a equipes exigentes", "Boa evolução para estruturas mais sérias"],
      cta: "Quero mais robustez na gestão",
      whatsappText: "Olá! Quero saber mais sobre o plano Anthem trimestral do WorshipHub."
    },
    {
      name: "Maestro",
      badge: "PREMIUM",
      description: "Escolha premium para visão estratégica e cenários maiores.",
      price: "R$ 339,90",
      perDay: "≈ R$ 3,78 por dia",
      features: ["Camada premium para operação maior", "Mais preparo para multi-igrejas", "Melhor opção para liderança mais estratégica"],
      cta: "Quero a estrutura premium",
      whatsappText: "Olá! Quero conversar sobre o plano Maestro trimestral do WorshipHub."
    }
  ],
  yearly: [
    {
      name: "Prelude",
      badge: "ANUAL",
      description: "Entrada inteligente com compromisso longo e menor custo médio.",
      price: "R$ 159,90",
      perDay: "≈ R$ 0,44 por dia",
      features: ["Custo médio mais competitivo", "Mais tempo para consolidar a rotina", "Boa base para sair do improviso"],
      cta: "Quero começar com visão anual",
      whatsappText: "Olá! Tenho interesse no plano Prelude anual do WorshipHub."
    },
    {
      name: "Chorus",
      badge: "ANUAL",
      description: "Mais consistência para quem deseja deixar a operação mais estável o ano todo.",
      price: "R$ 239,90",
      perDay: "≈ R$ 0,66 por dia",
      features: ["Boa relação entre valor e estabilidade", "Mais previsibilidade para a liderança", "Reduz atrito operacional no longo prazo"],
      cta: "Quero estabilidade anual",
      whatsappText: "Olá! Quero saber mais sobre o plano Chorus anual do WorshipHub."
    },
    {
      name: "Harmony",
      badge: "MELHOR CUSTO-BENEFÍCIO",
      description: "A combinação mais atrativa para crescimento profissional ao longo do ano.",
      price: "R$ 399,00",
      perDay: "≈ R$ 1,09 por dia",
      features: ["Percepção premium com custo muito competitivo", "Plano ideal para consolidar a gestão", "Excelente escolha para captação da landing"],
      cta: "Quero evoluir meu ministério com visão anual",
      highlight: true,
      whatsappText: "Olá! Quero contratar o plano Harmony anual do WorshipHub."
    },
    {
      name: "Anthem",
      badge: "ANUAL",
      description: "Estrutura mais robusta para times maiores e rotinas mais exigentes.",
      price: "R$ 549,90",
      perDay: "≈ R$ 1,51 por dia",
      features: ["Mais preparo para alta demanda", "Visão mais refinada da operação", "Escolha segura para equipes maduras"],
      cta: "Quero robustez por mais tempo",
      whatsappText: "Olá! Tenho interesse no plano Anthem anual do WorshipHub."
    },
    {
      name: "Maestro",
      badge: "PREMIUM ANUAL",
      description: "Camada máxima para visão estratégica, expansão e estruturas maiores.",
      price: "R$ 1.079,90",
      perDay: "≈ R$ 2,96 por dia",
      features: ["Melhor preparação para cenários maiores", "Mais valor para multi-igrejas", "Escolha premium para liderança estratégica"],
      cta: "Quero a estrutura mais completa",
      whatsappText: "Olá! Quero conversar sobre o plano Maestro anual do WorshipHub."
    }
  ]
};

const genericWhatsapp = "__WHATSAPP_LINK_GENERIC__";

function createPlanCard(plan){
  const article = document.createElement("article");
  article.className = `plan-card reveal ${plan.highlight ? "highlight" : ""}`;

  if(plan.badge){
    const badge = document.createElement("span");
    badge.className = "plan-badge";
    badge.textContent = plan.badge;
    article.appendChild(badge);
  }

  article.innerHTML += `
    <h3>${plan.name}</h3>
    <p class="plan-copy">${plan.description}</p>
    <div class="plan-price">
      <strong>${plan.price}</strong>
      <span>${plan.perDay}</span>
    </div>
    <ul class="plan-list">
      ${plan.features.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

  const cta = document.createElement("a");
  cta.className = plan.highlight ? "btn btn-primary" : "btn btn-secondary";
  cta.href = plan.whatsappText ? `${genericWhatsapp}${encodeURIComponent(plan.whatsappText)}` : genericWhatsapp;
  cta.textContent = plan.cta;
  article.appendChild(cta);

  return article;
}

function renderPricing(period = "monthly"){
  const grid = document.getElementById("pricing-grid");
  if(!grid) return;
  grid.innerHTML = "";
  pricingData[period].forEach(plan => grid.appendChild(createPlanCard(plan)));
}

document.querySelectorAll(".switch-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".switch-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPricing(btn.dataset.period);
  });
});

renderPricing("monthly");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
