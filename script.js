const appConfig = {
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.robsonazevedo.worshiphub&pcampaignid=web_share",
  appStoreUrl: "https://apps.apple.com/us/app/worshiphub/id6754579246",
  whatsappBase: "https://wa.me/5524999874551?text=Ol%C3%A1%2C%20estou%20vendo%20o%20site%20do%20WorshipHub%20e%20quero%20tirar%20uma%20d%C3%BAvida.",
  privacyUrl: "https://worshiphub-support.pages.dev/privacy",
  termsUrl: "https://worshiphub-support.pages.dev/terms",
  apiBaseUrl: "https://louvor-backend-production-c8d9.up.railway.app"
};

const pricingData = {
  monthly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Mensal", price:"R$ 19,90", period:"Boa porta de entrada para ministérios que querem sair do improviso.", day:"≈ R$ 0,63 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Mensal", price:"R$ 29,90", period:"Para quem já precisa de uma rotina mais estável e confiável.", day:"≈ R$ 0,99 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 39,90", period:"Equilíbrio ideal entre gestão, visão e profissionalismo.", day:"≈ R$ 1,66 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Mensal", price:"R$ 59,90", period:"Pensado para equipes mais maduras e com maior demanda operacional.", day:"≈ R$ 2,33 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 119,90", period:"Para operações maiores e visão mais estratégica do ministério.", day:"≈ R$ 4,33 por dia", cta:"Quero o máximo de estrutura" }
  },
  quarterly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Trimestral", price:"R$ 49,90", period:"Cobrança trimestral com melhor previsibilidade para começar.", day:"≈ R$ 0,55 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Trimestral", price:"R$ 79,90", period:"Mais estabilidade e custo melhor no horizonte de 3 meses.", day:"≈ R$ 0,83 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 109,90", period:"Investimento trimestral para equipes em crescimento.", day:"≈ R$ 1,44 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Trimestral", price:"R$ 169,90", period:"Melhor ajuste para operação exigente com mais previsibilidade.", day:"≈ R$ 2,00 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 329,90", period:"Visão estratégica com contratação trimestral.", day:"≈ R$ 3,78 por dia", cta:"Quero o máximo de estrutura" }
  },
  yearly: {
    free: { name:"Gratuito", badge:"Teste sem risco", price:"R$ 0", period:"Entrada sem custo para começar", day:"", cta:"Quero começar sem custo" },
    prelude: { name:"Prelude", badge:"Anual", price:"R$ 149,90", period:"Melhor custo anual para começar com organização.", day:"≈ R$ 0,44 por dia", cta:"Quero organizar minha equipe" },
    chorus: { name:"Chorus", badge:"Anual", price:"R$ 239,90", period:"Menor custo por dia para rotina estável do ministério.", day:"≈ R$ 0,66 por dia", cta:"Quero dar mais consistência ao ministério" },
    harmony: { name:"Harmony", badge:"Mais procurado", price:"R$ 379,90", period:"Plano anual ideal para equipes em crescimento consistente.", day:"≈ R$ 1,09 por dia", cta:"Quero elevar meu ministério" },
    anthem: { name:"Anthem", badge:"Anual", price:"R$ 499,90", period:"Escala operacional com contratação mais estratégica.", day:"≈ R$ 1,51 por dia", cta:"Quero controle mais refinado" },
    maestro: { name:"Maestro", badge:"Premium", price:"R$ 999,90", period:"Estrutura anual robusta para visão de longo prazo.", day:"≈ R$ 2,96 por dia", cta:"Quero o máximo de estrutura" }
  }
};

const planOrder = ["free","prelude","chorus","harmony","anthem","maestro"];

const backendPlanCodeMap = {
  prelude: "1",
  chorus: "2",
  harmony: "3",
  anthem: "4",
  maestro: "5"
};

const backendBillingPeriodMap = {
  monthly: "MONTHLY",
  quarterly: "QUARTERLY",
  yearly: "YEARLY"
};

const purchaseState = {
  billingCycle: "monthly",
  selectedPlanKey: null,
  selectedPlanCode: null,
  selectedPlanName: "",
  selectedAnchorOrgId: null,
  authMode: "login",
  token: localStorage.getItem("worshiphub_landing_token") || "",
  organizations: []
};

const purchaseModal = document.getElementById("purchaseModal");
const purchaseForm = document.getElementById("purchaseForm");
const purchaseAlert = document.getElementById("purchaseAlert");
const purchasePlanName = document.getElementById("purchasePlanName");
const purchasePlanMeta = document.getElementById("purchasePlanMeta");
const purchaseModalTitle = document.getElementById("purchaseModalTitle");
const purchaseModalSubtitle = document.getElementById("purchaseModalSubtitle");
const purchaseSubmitButton = document.getElementById("purchaseSubmitButton");
const purchaseAnchorBox = document.getElementById("purchaseAnchorBox");
const purchaseAnchorList = document.getElementById("purchaseAnchorList");
const purchaseAnchorConfirm = document.getElementById("purchaseAnchorConfirm");
const fieldGroupName = document.getElementById("fieldGroupName");
const fieldGroupOrgName = document.getElementById("fieldGroupOrgName");
const purchaseNameInput = document.getElementById("purchaseName");
const purchaseEmailInput = document.getElementById("purchaseEmail");
const purchasePasswordInput = document.getElementById("purchasePassword");
const purchaseOrgNameInput = document.getElementById("purchaseOrgName");

function getApiUrl(path){
  return `${appConfig.apiBaseUrl}${path}`;
}

function showPurchaseAlert(message, isError = true){
  if(!purchaseAlert) return;
  purchaseAlert.hidden = false;
  purchaseAlert.textContent = message;
  purchaseAlert.style.borderColor = isError ? "rgba(255,120,120,.24)" : "rgba(255,215,0,.18)";
}

function clearPurchaseAlert(){
  if(!purchaseAlert) return;
  purchaseAlert.hidden = true;
  purchaseAlert.textContent = "";
}

function updateAuthModeUI(mode){
  purchaseState.authMode = mode;

  document.querySelectorAll("[data-auth-mode]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.authMode === mode);
  });

  const isRegister = mode === "register";

  if (purchaseForm) {
    purchaseForm.dataset.mode = mode;
  }

  fieldGroupName.hidden = !isRegister;
  fieldGroupOrgName.hidden = !isRegister;

  if (purchaseNameInput) {
    purchaseNameInput.required = isRegister;
  }

  if (purchaseOrgNameInput) {
    purchaseOrgNameInput.required = isRegister;
  }

  purchasePasswordInput.setAttribute("autocomplete", isRegister ? "new-password" : "current-password");

  if (purchaseModalSubtitle) {
    purchaseModalSubtitle.textContent = isRegister
      ? "Crie sua conta para continuar a contratação do plano."
      : "Entre com sua conta para continuar a contratação do plano.";
  }

  if (purchaseSubmitButton) {
    purchaseSubmitButton.textContent = isRegister
      ? "Criar conta e continuar"
      : "Entrar e continuar";
  }
}

function openPurchaseModal(planKey){
  if(planKey === "free"){
    window.location.href = appConfig.playStoreUrl;
    return;
  }

  const currentPlan = pricingData[purchaseState.billingCycle]?.[planKey];
  if(!currentPlan) return;

  purchaseState.selectedPlanKey = planKey;
  purchaseState.selectedPlanCode = backendPlanCodeMap[planKey] || null;
  purchaseState.selectedPlanName = currentPlan.name;
  purchaseState.selectedAnchorOrgId = null;
  purchaseState.organizations = [];

  if (purchasePlanName) {
    purchasePlanName.textContent = currentPlan.name;
  }

  if (purchasePlanMeta) {
    purchasePlanMeta.textContent = `${currentPlan.price} • ${currentPlan.badge} • ${backendBillingPeriodMap[purchaseState.billingCycle]}`;
  }

  if (purchaseModalTitle) {
    purchaseModalTitle.textContent = `Continue sua contratação`;
  }

  if (purchaseAnchorBox) {
    purchaseAnchorBox.hidden = true;
  }

  if (purchaseAnchorList) {
    purchaseAnchorList.innerHTML = "";
  }

  if (purchaseAnchorConfirm) {
    purchaseAnchorConfirm.checked = false;
  }

  if (purchaseForm) {
    purchaseForm.reset();
  }

  clearPurchaseAlert();
  updateAuthModeUI("login");
  purchaseModal?.classList.add("is-open");
  purchaseModal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePurchaseModal(){
  if (purchaseModal) {
    purchaseModal.classList.remove("is-open");
    purchaseModal.setAttribute("aria-hidden", "true");
  }

  document.body.style.overflow = "";
  clearPurchaseAlert();
}

function renderAnchorSelection(organizations, currentAnchorOrgId){
  purchaseState.organizations = Array.isArray(organizations) ? organizations : [];
  purchaseState.selectedAnchorOrgId = currentAnchorOrgId ? String(currentAnchorOrgId) : null;

  if (!purchaseAnchorList) return;

  purchaseAnchorList.innerHTML = purchaseState.organizations.map((org) => {
    const checked = String(org._id) === String(purchaseState.selectedAnchorOrgId) ? "checked" : "";
    const currentAnchorLabel = org.isBillingAnchor || org.isCurrentFallbackAnchor
      ? "Âncora atual"
      : "Disponível para seleção";

    return `
      <label class="purchase-anchor-option">
        <input type="radio" name="anchorOrg" value="${org._id}" ${checked} />
        <div>
          <strong>${org.name}</strong>
          <span>${currentAnchorLabel}</span>
        </div>
      </label>
    `;
  }).join("");

  purchaseAnchorBox.hidden = false;

  purchaseAnchorList.querySelectorAll("input[name='anchorOrg']").forEach((input) => {
    input.addEventListener("change", () => {
      purchaseState.selectedAnchorOrgId = input.value;
    });
  });
}

async function apiRequest(path, options = {}, tokenOverride = ""){
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  const token = tokenOverride || purchaseState.token;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(getApiUrl(path), {
    ...options,
    headers
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data?.message || data?.error || "Falha na operação.");
    error.status = response.status;
    error.payload = data;
    throw error;
  }

  return data;
}

async function loginLandingUser(email, password){
  const data = await apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  }, "");

  const token = data?.token || "";
  purchaseState.token = token;
  localStorage.setItem("worshiphub_landing_token", token);
  return data;
}

async function registerLandingUser(name, email, password){
  await apiRequest("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      role: "usuario"
    })
  }, "");
}

async function getMyOrganizations(){
  const data = await apiRequest("/api/orgs/mine", {
    method: "GET"
  });

  return Array.isArray(data?.orgs) ? data.orgs : [];
}

async function createOrganization(orgName){
  const data = await apiRequest("/api/orgs", {
    method: "POST",
    body: JSON.stringify({ name: orgName })
  });

  return data?.org || null;
}

async function createLandingCheckout(selectedAnchorOrgId = null){
  return apiRequest("/api/billing/landing/checkout", {
    method: "POST",
    body: JSON.stringify({
      planCode: purchaseState.selectedPlanCode,
      billingPeriod: backendBillingPeriodMap[purchaseState.billingCycle],
      ...(selectedAnchorOrgId ? { selectedAnchorOrgId } : {})
    })
  });
}

async function ensureOrganizationForCheckout(authMode){
  const orgs = await getMyOrganizations();

  if (orgs.length > 0) {
    return orgs;
  }

  const typedOrgName = String(purchaseOrgNameInput?.value || "").trim();

  if (!typedOrgName) {
    throw new Error(
      authMode === "register"
        ? "Informe o nome da organização para continuar."
        : "Nenhuma organização foi encontrada. Informe o nome da organização para criar a primeira."
    );
  }

  const createdOrg = await createOrganization(typedOrgName);

  if (!createdOrg?._id) {
    throw new Error("Não foi possível criar a organização inicial.");
  }

  return [{ org: createdOrg, role: "coordenador" }];
}

async function handlePurchaseSubmit(event){
  event.preventDefault();
  clearPurchaseAlert();

  if (!purchaseState.selectedPlanCode) {
    showPurchaseAlert("Selecione um plano pago para continuar.");
    return;
  }

    const authMode = purchaseState.authMode;
  const name = String(purchaseNameInput?.value || "").trim();
  const email = String(purchaseEmailInput?.value || "").trim();
  const password = String(purchasePasswordInput?.value || "").trim();

  const hasSavedToken = !!purchaseState.token;
  const isRegisterMode = authMode === "register";

  if (isRegisterMode && !name) {
    showPurchaseAlert("Informe seu nome para criar a conta.");
    return;
  }

  if (isRegisterMode && (!email || !password)) {
    showPurchaseAlert("Informe e-mail e senha para criar a conta.");
    return;
  }

  if (!isRegisterMode && !hasSavedToken && (!email || !password)) {
    showPurchaseAlert("Informe e-mail e senha para continuar.");
    return;
  }
  if (purchaseAnchorBox && !purchaseAnchorBox.hidden) {
    if (!purchaseState.selectedAnchorOrgId) {
      showPurchaseAlert("Selecione a organização âncora para continuar.");
      return;
    }

    if (!purchaseAnchorConfirm?.checked) {
      showPurchaseAlert("Confirme que entendeu a definição da organização âncora.");
      return;
    }
  }

  try {
    purchaseSubmitButton.disabled = true;
    purchaseSubmitButton.textContent = "Processando...";

            if (authMode === "register") {
      await registerLandingUser(name, email, password);
      await loginLandingUser(email, password);
    } else if (email && password) {
      await loginLandingUser(email, password);
    } else if (purchaseState.token) {
      try {
        await apiRequest("/api/orgs/mine", { method: "GET" });
      } catch {
        purchaseState.token = "";
        localStorage.removeItem("worshiphub_landing_token");
        showPurchaseAlert("Sua sessão expirou. Informe e-mail e senha para continuar.");
        return;
      }
    } else {
      showPurchaseAlert("Informe e-mail e senha para continuar.");
      return;
    }
    await ensureOrganizationForCheckout(authMode);

    const checkoutResponse = await createLandingCheckout(purchaseState.selectedAnchorOrgId);

    if (checkoutResponse?.url) {
      window.location.href = checkoutResponse.url;
      return;
    }

    throw new Error("Não foi possível obter o link de checkout.");
  } catch (error) {
    const payload = error?.payload || {};

    if (payload?.error === "ANCHOR_SELECTION_REQUIRED") {
      renderAnchorSelection(payload.organizations || [], payload.currentAnchorOrgId || null);
      showPurchaseAlert("Selecione a organização âncora para continuar a contratação.", false);
      return;
    }

    showPurchaseAlert(payload?.message || error?.message || "Não foi possível continuar a contratação.");
  } finally {
    purchaseSubmitButton.disabled = false;

    if (purchaseState.authMode === "register") {
      purchaseSubmitButton.textContent = "Criar conta e continuar";
    } else {
      purchaseSubmitButton.textContent = "Entrar e continuar";
    }
  }
}

function setPlanData(period){
  const source = pricingData[period];
  if (!source) return;

  purchaseState.billingCycle = period;

  document.querySelectorAll(".billing-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.billing === period);
  });

  planOrder.forEach((key) => {
    const card = document.querySelector(`[data-plan="${key}"]`);
    if (!card || !source[key]) return;

    const badge = card.querySelector("[data-role='badge']");
    const price = card.querySelector("[data-role='price']");
    const periodLabel = card.querySelector("[data-role='period']");
    const day = card.querySelector("[data-role='day']");
    const cta = card.querySelector("[data-role='cta']");

    if (badge) badge.textContent = source[key].badge;
    if (price) price.textContent = source[key].price;
    if (periodLabel) periodLabel.textContent = source[key].period;
    if (day) day.textContent = source[key].day;

    if (cta) {
      cta.textContent = source[key].cta;
      cta.setAttribute("href", key === "free" ? appConfig.playStoreUrl : "#");
      cta.dataset.planKey = key;
      cta.dataset.billingPeriod = period;
    }
  });
}
const billingToggleButtons = document.querySelectorAll(".billing-toggle button");
const pricingCtas = document.querySelectorAll("[data-role='cta']");
const authModeButtons = document.querySelectorAll("[data-auth-mode]");
const closePurchaseModalElements = document.querySelectorAll("[data-close-purchase-modal]");
const faqItems = document.querySelectorAll(".faq-item");
const revealItems = document.querySelectorAll(".reveal");
const downloadLinks = document.querySelectorAll(".js-download-app");
const downloadLinksIos = document.querySelectorAll(".js-download-app-ios");
const privacyLinks = document.querySelectorAll(".js-privacy");
const termsLinks = document.querySelectorAll(".js-terms");
const whatsappLinks = document.querySelectorAll(".js-whatsapp");

let purchaseModalBindingsInitialized = false;

function initializePurchaseModalBindings(){
  if (purchaseModalBindingsInitialized) return;
  purchaseModalBindingsInitialized = true;

  authModeButtons.forEach((button) => {
    button.addEventListener("click", () => updateAuthModeUI(button.dataset.authMode));
  });

  closePurchaseModalElements.forEach((element) => {
    element.addEventListener("click", closePurchaseModal);
  });

  purchaseForm?.addEventListener("submit", handlePurchaseSubmit);
}

billingToggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => setPlanData(btn.dataset.billing));
});
setPlanData("monthly");

pricingCtas.forEach((cta) => {
  cta.addEventListener("click", (event) => {
    const planKey = cta.dataset.planKey;
    if (!planKey) return;

    if (planKey === "free") {
      return;
    }

    event.preventDefault();
    initializePurchaseModalBindings();
    openPurchaseModal(planKey);
  });
});

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");
  const icon = item.querySelector(".faq-icon");

  if (icon) {
    icon.textContent = item.classList.contains("open") ? "−" : "+";
  }

  trigger?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    if (icon) {
      icon.textContent = isOpen ? "−" : "+";
    }
  });
});

if (revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((el) => observer.observe(el));
}

downloadLinks.forEach((link) => {
  link.setAttribute("href", appConfig.playStoreUrl);
});

downloadLinksIos.forEach((link) => {
  link.setAttribute("href", appConfig.appStoreUrl);
});

privacyLinks.forEach((link) => {
  link.href = appConfig.privacyUrl;
});

termsLinks.forEach((link) => {
  link.href = appConfig.termsUrl;
});

whatsappLinks.forEach((link) => {
  link.href = appConfig.whatsappBase;
});

const heroVisual = document.querySelector(".hero-visual");
if (heroVisual && window.matchMedia("(pointer:fine)").matches) {
  const devices = Array.from(heroVisual.querySelectorAll(".device"));
  const baseTransforms = new Map();

  devices.forEach((el, i) => {
    const rotateBase = i === 0 ? -11 : i === 1 ? 11 : 2;
    baseTransforms.set(el, rotateBase);
  });

  let heroRect = null;
  let rafId = null;
  let pointerX = 0;
  let pointerY = 0;

  const updateHeroDevices = () => {
    rafId = null;
    if (!heroRect) return;

    const x = (pointerX - heroRect.left) / heroRect.width - 0.5;
    const y = (pointerY - heroRect.top) / heroRect.height - 0.5;

    devices.forEach((el, i) => {
      const rotateBase = baseTransforms.get(el) || 0;
      const shiftX = x * (i === 2 ? 8 : 12);
      const shiftY = y * (i === 2 ? 6 : 10);
      el.style.transform = `rotate(${rotateBase + x * 1.5}deg) translate(${shiftX}px, ${shiftY}px)`;
    });
  };

  heroVisual.addEventListener("mouseenter", () => {
    heroRect = heroVisual.getBoundingClientRect();
  }, { passive: true });

  heroVisual.addEventListener("mousemove", (e) => {
    if (!heroRect) {
      heroRect = heroVisual.getBoundingClientRect();
    }

    pointerX = e.clientX;
    pointerY = e.clientY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateHeroDevices);
    }
  }, { passive: true });

  heroVisual.addEventListener("mouseleave", () => {
    heroRect = null;

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    devices.forEach((el) => {
      const rotateBase = baseTransforms.get(el) || 0;
      el.style.transform = `rotate(${rotateBase}deg)`;
    });
  }, { passive: true });

  window.addEventListener("resize", () => {
    heroRect = null;
  }, { passive: true });
}
