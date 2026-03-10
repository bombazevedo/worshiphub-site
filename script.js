const appConfig = {
  playStoreUrl: "__PLAY_STORE_URL__",
  whatsappBase: "__WHATSAPP_LINK_GENERIC__",
  privacyUrl: "__PRIVACY_URL__",
  termsUrl: "__TERMS_URL__"
};

 {
  monthly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Mensal", price:"R$ 19,00", period:"Boa porta de entrada para ministérios que querem sair do improviso.", day:"≈ R$ 0,63 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Mensal", price:"R$ 29,90", period:"Para quem já precisa de uma rotina mais estável e confiável.", day:"≈ R$ 0,99 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 49,90", period:"Equilíbrio ideal entre gestão, visão e profissionalismo.", day:"≈ R$ 1,66 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Mensal", price:"R$ 69,90", period:"Pensado para equipes mais maduras e com maior demanda operacional.", day:"≈ R$ 2,33 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 129,90", period:"Para operações maiores e visão mais estratégica do ministério.", day:"≈ R$ 4,33 por dia", cta:"Quero o máximo de estrutura" }
  },
  quarterly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Trimestral", price:"R$ 49,90", period:"Cobrança trimestral com melhor previsibilidade para começar.", day:"≈ R$ 0,55 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Trimestral", price:"R$ 75,00", period:"Mais estabilidade e custo melhor no horizonte de 3 meses.", day:"≈ R$ 0,83 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 129,90", period:"Investimento trimestral para equipes em crescimento.", day:"≈ R$ 1,44 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Trimestral", price:"R$ 179,90", period:"Melhor ajuste para operação exigente com mais previsibilidade.", day:"≈ R$ 2,00 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 339,90", period:"Visão estratégica com contratação trimestral.", day:"≈ R$ 3,78 por dia", cta:"Quero o máximo de estrutura" }
  },
  yearly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Anual", price:"R$ 159,90", period:"Melhor custo anual para começar com organização.", day:"≈ R$ 0,44 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Anual", price:"R$ 239,90", period:"Menor custo por dia para rotina estável do ministério.", day:"≈ R$ 0,66 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 399,00", period:"Plano anual ideal para equipes em crescimento consistente.", day:"≈ R$ 1,09 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Anual", price:"R$ 549,90", period:"Escala operacional com contratação mais estratégica.", day:"≈ R$ 1,51 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 1.079,90", period:"Estrutura anual robusta para visão de longo prazo.", day:"≈ R$ 2,96 por dia", cta:"Quero o máximo de estrutura" }
  }
};

const planOrder = ["free","prelude","chorus","harmony","anthem","maestro"];

function setPlanData(period){
  const source = pricingData[period] || pricingData.monthly;
  document.querySelectorAll(".billing-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.billing === period);
    btn.setAttribute("aria-pressed", String(btn.dataset.billing === period));
  });

  planOrder.forEach(key => {
    const card = document.querySelector(`[data-plan="${key}"]`);
    const plan = source[key];
    if(!card || !plan) return;

    const badge = card.querySelector("[data-role='badge']");
    const price = card.querySelector("[data-role='price']");
    const periodEl = card.querySelector("[data-role='period']");
    const day = card.querySelector("[data-role='day']");
    const cta = card.querySelector("[data-role='cta']");

    if(badge) badge.textContent = plan.badge;
    if(price) price.textContent = plan.price;
    if(periodEl) periodEl.textContent = plan.period;
    if(day) day.textContent = plan.day || "";
    if(cta){
      cta.textContent = plan.cta;
      const message = encodeURIComponent(`Olá! Quero falar sobre o plano ${plan.name} do WorshipHub.`);
      cta.href = `${appConfig.whatsappBase}${message}`;
    }
  });
}

document.querySelectorAll(".billing-toggle button").forEach(btn => {
  btn.addEventListener("click", () => setPlanData(btn.dataset.billing));
});
setPlanData("monthly");

document.querySelectorAll(".faq-item").forEach(item => {
  const trigger = item.querySelector(".faq-trigger");
  const icon = item.querySelector(".faq-icon");
  const syncFaq = () => {
    const open = item.classList.contains("open");
    trigger?.setAttribute("aria-expanded", String(open));
    if(icon) icon.textContent = open ? "−" : "+";
  };
  syncFaq();
  trigger?.addEventListener("click", () => {
    item.classList.toggle("open");
    syncFaq();
  });
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".js-download-app").forEach(link => {
  link.setAttribute("href", appConfig.playStoreUrl);
});
const privacy = document.querySelectorAll(".js-privacy");
privacy.forEach(link => link.href = appConfig.privacyUrl);
const terms = document.querySelectorAll(".js-terms");
terms.forEach(link => link.href = appConfig.termsUrl);

// subtle hero motion
const heroVisual = document.querySelector(".hero-visual");
if(heroVisual && window.matchMedia("(pointer:fine)").matches){
  const heroDevices = Array.from(heroVisual.querySelectorAll(".device"));
  heroDevices.forEach((el, i) => {
    const base = i===0 ? "rotate(2deg)" : i===1 ? "rotate(-11deg)" : "rotate(11deg)";
    el.dataset.baseTransform = base;
  });

  heroVisual.addEventListener("mousemove", (e)=>{
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    heroDevices.forEach((el, i)=>{
      const rotateBase = i===0 ? 2 : i===1 ? -11 : 11;
      const shiftX = x * (i===0 ? 8 : 12);
      const shiftY = y * (i===0 ? 6 : 10);
      el.style.transform = `rotate(${rotateBase + x*1.5}deg) translate(${shiftX}px, ${shiftY}px)`;
    });
  });
  heroVisual.addEventListener("mouseleave", ()=>{
    heroDevices.forEach(el=>{
      el.style.transform = el.dataset.baseTransform || "none";
    });
  });
}
