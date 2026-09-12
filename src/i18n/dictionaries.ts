export type Locale = "en" | "uk";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
];

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; why: string; menu: string; promo: string; reviews: string; order: string; orderCta: string; openMenu: string; closeMenu: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titlePizza: string;
    titleLine3: string;
    subtitle: string;
    orderNow: string;
    viewMenu: string;
    lovedBy: string;
    rating: string;
    scroll: string;
    mascotAlt: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    paragraphs: string[];
    milestones: { year: string; text: string }[];
    badgeLabel: string;
    badgeTitle: string;
    badgeSub: string;
    mascotAlt: string;
  };
  why: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  menu: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    add: string;
    orderFrom: string;
    footnote: string;
    items: {
      id: string;
      name: string;
      desc: string;
      tag: string;
      weight: string;
      price: number;
      hot: boolean;
      image: string;
    }[];
  };
  promo: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    noCode: string;
    order: string;
    copied: string;
    items: {
      id: string;
      badge: string;
      title: string;
      desc: string;
      code: string | null;
      valid: string;
      highlight: boolean;
    }[];
  };
  reviews: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    items: { name: string; role: string; text: string; rating: number; pizza: string }[];
  };
  order: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    steps: { n: string; title: string; text: string }[];
    contactEyebrow: string;
    contactTitle: string;
    contactSub: string;
    phoneNote: string;
    addressNote: string;
    hoursNote: string;
    emailNote: string;
    successTitle: string;
    successText: string;
    sendAgain: string;
    name: string;
    namePh: string;
    phone: string;
    phonePh: string;
    pizza: string;
    pizzaOptional: string;
    pizzaPlaceholder: string;
    pizzaOther: string;
    note: string;
    notePh: string;
    submit: string;
    consent: string;
  };
  footer: {
    blurb: string;
    navigate: string;
    contact: string;
    hours: string;
    rights: string;
    tagline: string;
  };
  company: {
    phone: string;
    phoneHref: string;
    address: string;
    city: string;
    hours: string;
    hoursNote: string;
    email: string;
    founded: number;
  };
};

const menuShared = {
  margherita: { price: 9.9, weight: "480 g", hot: false, image: "/menu/margherita.jpg" },
  diavola: { price: 12.9, weight: "520 g", hot: true, image: "/menu/diavola.jpg" },
  truffle: { price: 16.9, weight: "500 g", hot: false, image: "/menu/truffle.jpg" },
  prosciutto: { price: 14.9, weight: "510 g", hot: false, image: "/menu/prosciutto.jpg" },
  quattro: { price: 13.9, weight: "490 g", hot: false, image: "/menu/quattro.jpg" },
  inferno: { price: 15.9, weight: "530 g", hot: true, image: "/menu/inferno.jpg" },
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "PAZZO — wood-fired Neapolitan pizza",
      description:
        "PAZZO pizzeria: 48-hour dough, 450°C wood-fired oven, delivery in ~25 minutes. Menu, deals, and order online.",
    },
    nav: {
      about: "Our Story",
      why: "Why Us",
      menu: "Menu",
      promo: "Deals",
      reviews: "Reviews",
      order: "Order",
      orderCta: "Order Now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Hot · Fresh · Delicious",
      titleLine1: "IT'S NOT JUST",
      titlePizza: "PIZZA —",
      titleLine3: "IT'S LOVE.",
      subtitle:
        "PAZZO Neapolitan pizzeria: 48-hour dough, a 450°C wood-fired oven, and ingredients from Italy. Since 2019 — for people who refuse to compromise.",
      orderNow: "Order Now",
      viewMenu: "View Menu",
      lovedBy: "Loved by 10,000+ pizza fans",
      rating: "4.9 ★ · 2,400+ reviews",
      scroll: "Learn more",
      mascotAlt: "PAZZO pizza mascot",
    },
    marquee: [
      "Wood-fired oven",
      "·",
      "48h dough",
      "·",
      "San Marzano DOP",
      "·",
      "Fior di latte",
      "·",
      "25 min delivery",
      "·",
      "Open until 2 AM",
      "·",
      "Since 2019",
      "·",
    ],
    about: {
      eyebrow: "About us",
      titleBefore: "How PAZZO became a ",
      titleHighlight: "ritual",
      titleAfter: ", not just takeout",
      paragraphs: [
        "In 2019 we opened a small kitchen with one wood-fired oven and a simple dream: real Neapolitan pizza. No conveyor belt, no shortcuts, no compromise on ingredients.",
        "PAZZO means “crazy” in Italian — our obsession with details: dough temperature, hydration, ninety seconds in the fire. Guests joked we were mad. We took it as a compliment.",
        "Today we train our own pizzaioli, import from Campania, and welcome thousands of regulars. The rule is still the same: every pie leaves the oven like it is your first.",
      ],
      milestones: [
        { year: "2019", text: "First oven and four menu items" },
        { year: "2021", text: "In-house delivery and late-night hours" },
        { year: "2023", text: "Best Neapolitan pizza in the city" },
        { year: "2025", text: "15+ signature pies, 2,400+ reviews" },
      ],
      badgeLabel: "Since 2019",
      badgeTitle: "Obsessed with details",
      badgeSub: "One oven → thousands of guests",
      mascotAlt: "PAZZO pizza mascot waving",
    },
    why: {
      eyebrow: "Why PAZZO",
      titleBefore: "Why order pizza ",
      titleHighlight: "from us",
      subtitle: "Not slogans — real reasons, from the oven to delivery time.",
      items: [
        {
          title: "Wood-fired oven 450°C",
          text: "Baked in 90 seconds — leopard crust outside, soft dough inside. Like Naples.",
        },
        {
          title: "48-hour dough",
          text: "Cold long fermentation. Light pizza that never sits heavy, with real yeast aroma.",
        },
        {
          title: "Italian ingredients",
          text: "San Marzano DOP, fior di latte, 24-month parmesan. No substitutes, no frozen bases.",
        },
        {
          title: "Delivery in ~25 minutes",
          text: "Thermal bags and couriers who know the neighborhood. Hot on arrival — or the next order is on us.",
        },
        {
          title: "Open until 2 AM",
          text: "Late dinner after a movie, night shift, surprise guests — the oven is already hot.",
        },
        {
          title: "4.9 ★ and 2,400+ reviews",
          text: "Guests come back for the taste, not only the deals. One of the top ratings in town.",
        },
      ],
    },
    menu: {
      eyebrow: "Menu",
      titleBefore: "Signature ",
      titleHighlight: "PAZZO",
      subtitle:
        "Six 12″ signature pies. Long-fermented dough, 90 seconds in the oven. Full menu — 28 items, ask by phone.",
      add: "Add",
      orderFrom: "Order from the menu",
      footnote: "Prices are for a 30 cm pizza. Seasonal specials may apply.",
      items: [
        {
          id: "margherita",
          name: "Margherita DOC",
          desc: "San Marzano tomatoes, fior di latte, fresh basil, extra virgin olive oil",
          tag: "Classic",
          ...menuShared.margherita,
        },
        {
          id: "diavola",
          name: "Diavola",
          desc: "Spicy salami, chili, mozzarella, tomato sauce, oregano",
          tag: "Spicy",
          ...menuShared.diavola,
        },
        {
          id: "truffle",
          name: "Truffle Pazzo",
          desc: "Truffle cream, wild mushrooms, parmesan, arugula, truffle oil",
          tag: "Hit",
          ...menuShared.truffle,
        },
        {
          id: "prosciutto",
          name: "Prosciutto",
          desc: "Parma ham, buffalo mozzarella, arugula, balsamic cream",
          tag: "Premium",
          ...menuShared.prosciutto,
        },
        {
          id: "quattro",
          name: "Quattro Formaggi",
          desc: "Gorgonzola, parmesan, mozzarella, taleggio — four cheeses, zero compromise",
          tag: "Cheese",
          ...menuShared.quattro,
        },
        {
          id: "inferno",
          name: "Inferno",
          desc: "Nduja, jalapeño, pepperoni, chili honey — for those who love the fire",
          tag: "Fire",
          ...menuShared.inferno,
        },
      ],
    },
    promo: {
      eyebrow: "Deals & offers",
      titleBefore: "Better than ",
      titleHighlight: "just delicious",
      subtitle:
        "Current offers. Name the promo code when you order by phone or in the form — we will apply it for you.",
      noCode: "No code — just name the deal",
      order: "Order →",
      copied: "Copied",
      items: [
        {
          id: "family",
          badge: "−20%",
          title: "Family dinner",
          desc: "20% off orders from €40. Perfect for friends or family night.",
          code: "FAMILY20",
          valid: "Until end of month",
          highlight: true,
        },
        {
          id: "lunch",
          badge: "from €7",
          title: "Lunch menu",
          desc: "Weekdays 12:00–16:00 — pizza of the day + a drink at a special price.",
          code: null,
          valid: "Weekdays 12:00–16:00",
          highlight: false,
        },
        {
          id: "first",
          badge: "−15%",
          title: "First order",
          desc: "15% off your first order via the site. Free delivery from €20.",
          code: "PAZZO15",
          valid: "New guests",
          highlight: false,
        },
        {
          id: "night",
          badge: "2=1",
          title: "Late-night double",
          desc: "From 22:00 to 02:00 — second pizza free (the cheaper one) on takeaway orders.",
          code: null,
          valid: "Daily after 22:00",
          highlight: true,
        },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      titleBefore: "They say we are ",
      titleHighlight: "a little pazzo",
      subtitle:
        "And that is a compliment. 4.9 out of 5 average from 2,400+ reviews on pizza and delivery.",
      items: [
        {
          name: "Anna K.",
          role: "regular guest",
          text: "Diavola is pure madness — in the best way. Spicy, juicy, perfect crust. I come at least once a week and always bring friends.",
          rating: 5,
          pizza: "Diavola",
        },
        {
          name: "Mark R.",
          role: "food blogger",
          text: "Finally real Neapolitan. You taste the 48-hour dough; San Marzano is not marketing. The oven glow and room vibe — wow.",
          rating: 5,
          pizza: "Margherita DOC",
        },
        {
          name: "Elena V.",
          role: "delivery fan",
          text: "Ordered Truffle Pazzo for the crew. Arrived in 20 minutes, still hot, packaging neat. PAZZO only from now on.",
          rating: 5,
          pizza: "Truffle Pazzo",
        },
        {
          name: "Igor S.",
          role: "night owl",
          text: "After 11 PM good pizza is rare. Here they bake at 1 AM like at noon. Inferno is fire — literally.",
          rating: 5,
          pizza: "Inferno",
        },
      ],
    },
    order: {
      eyebrow: "How to order",
      titleBefore: "Three steps to ",
      titleHighlight: "hot pizza",
      steps: [
        {
          n: "01",
          title: "Pick your pizza",
          text: "From the menu online or by phone — we will help if you are unsure.",
        },
        {
          n: "02",
          title: "Place the order",
          text: "Leave your number in the form, message us, or call. Average reply time — 2 minutes.",
        },
        {
          n: "03",
          title: "Pick up or wait for the courier",
          text: "Takeaway from 12 Fire Street — or delivery in a thermal bag in about 25 minutes.",
        },
      ],
      contactEyebrow: "Contact",
      contactTitle: "Order & contacts",
      contactSub: "Leave your number — we call back in 2 minutes. Or call and write yourself.",
      phoneNote: "orders & table booking",
      addressNote: "takeaway · 3 min from metro",
      hoursNote: "daily, no days off",
      emailNote: "for companies & events",
      successTitle: "We will call soon!",
      successText: "Request received. We usually call back within 2 minutes during opening hours.",
      sendAgain: "Send another",
      name: "Name",
      namePh: "What should we call you?",
      phone: "Phone",
      phonePh: "+351 ___ ___ ___",
      pizza: "What to order",
      pizzaOptional: "(optional)",
      pizzaPlaceholder: "Choose a pizza",
      pizzaOther: "Other / advice",
      note: "Note / promo code",
      notePh: "Address, time, FAMILY20…",
      submit: "Call me back",
      consent: "By submitting you agree to personal data processing",
    },
    footer: {
      blurb:
        "Neapolitan pizzeria. Fire, 48-hour dough, and a little madness since 2019.",
      navigate: "Navigate",
      contact: "Contact",
      hours: "Hours",
      rights: "All rights reserved.",
      tagline: "made with fire & love",
    },
    company: {
      phone: "+351 800 123 456",
      phoneHref: "tel:+351800123456",
      address: "12 Fire Street",
      city: "Lisbon",
      hours: "12:00 — 02:00",
      hoursNote: "Daily, no days off",
      email: "hello@pazzo.pizza",
      founded: 2019,
    },
  },
  uk: {
    meta: {
      title: "PAZZO — неаполітанська піца на дровах",
      description:
        "Піцерія PAZZO: тісто 48 годин, дров’яна піч 450°C, доставка ~25 хвилин. Меню, акції та замовлення онлайн.",
    },
    nav: {
      about: "Про нас",
      why: "Чому ми",
      menu: "Меню",
      promo: "Акції",
      reviews: "Відгуки",
      order: "Замовлення",
      orderCta: "Замовити",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
    },
    hero: {
      eyebrow: "Гаряча · Свіжа · Смачна",
      titleLine1: "ЦЕ НЕ ПРОСТО",
      titlePizza: "ПІЦА —",
      titleLine3: "ЦЕ ЛЮБОВ.",
      subtitle:
        "Неаполітанська піцерія PAZZO: тісто 48 годин, дров’яна піч 450°C та продукти з Італії. З 2019 року — для тих, хто не йде на компроміси.",
      orderNow: "Замовити",
      viewMenu: "Дивитись меню",
      lovedBy: "10 000+ гостей обрали PAZZO",
      rating: "4.9 ★ · 2 400+ відгуків",
      scroll: "Дізнатись більше",
      mascotAlt: "Талісман піцерії PAZZO",
    },
    marquee: [
      "Дров’яна піч",
      "·",
      "Тісто 48 годин",
      "·",
      "San Marzano DOP",
      "·",
      "Fior di latte",
      "·",
      "Доставка 25 хв",
      "·",
      "Працюємо до 02:00",
      "·",
      "З 2019 року",
      "·",
    ],
    about: {
      eyebrow: "Про компанію",
      titleBefore: "Як PAZZO став ",
      titleHighlight: "ритуалом",
      titleAfter: ", а не просто доставкою",
      paragraphs: [
        "У 2019 ми відкрили маленьку кухню з однією дров’яною піччю і мрією — справжня неаполітанська піца. Без конвеєра, без прискорювачів, без компромісів у продуктах.",
        "PAZZO означає «божевільний» італійською — наша одержимість деталями: температура тіста, вологість, 90 секунд у вогні. Гості жартували, що ми з’їхали з глузду. Ми прийняли це як комплімент.",
        "Сьогодні у нас своя школа піцайоло, імпорт з Кампанії та тисячі постійних гостей. Правило одне: кожна піца виходить з печі так, ніби це ваша перша.",
      ],
      milestones: [
        { year: "2019", text: "Перша піч і 4 позиції в меню" },
        { year: "2021", text: "Власна доставка та нічний режим" },
        { year: "2023", text: "Найкраща неаполітанська в місті" },
        { year: "2025", text: "15+ авторських піц, 2 400+ відгуків" },
      ],
      badgeLabel: "З 2019",
      badgeTitle: "Одержимі деталями",
      badgeSub: "Одна піч → тисячі гостей",
      mascotAlt: "Талісман PAZZO махає рукою",
    },
    why: {
      eyebrow: "Чому PAZZO",
      titleBefore: "Чому піцу варто брати ",
      titleHighlight: "саме у нас",
      subtitle: "Не слогани — вимірювані причини: від печі до часу доставки.",
      items: [
        {
          title: "Дров’яна піч 450°C",
          text: "Випікаємо 90 секунд — леопардова скоринка зовні, ніжне тісто всередині. Як у Неаполі.",
        },
        {
          title: "Тісто 48 годин",
          text: "Холодна ферментація. Піца легка, не «лягає» каменем, аромат дріжджів — справжній.",
        },
        {
          title: "Італійські продукти",
          text: "San Marzano DOP, fior di latte, пармезан 24 місяці. Без сурогатів і заморожених заготовок.",
        },
        {
          title: "Доставка ~25 хвилин",
          text: "Термосумки і кур’єри, які знають район. Піца приїжджає гарячою — або наступне замовлення за наш рахунок.",
        },
        {
          title: "Відкрито до 02:00",
          text: "Пізня вечеря після кіно, нічна зміна, раптові гості — ми вже розпалили піч.",
        },
        {
          title: "4.9 ★ і 2 400+ відгуків",
          text: "Гості повертаються не за знижкою, а за смаком. Один із найкращих рейтингів у місті.",
        },
      ],
    },
    menu: {
      eyebrow: "Меню",
      titleBefore: "Фірмове меню ",
      titleHighlight: "PAZZO",
      subtitle:
        "Шість сигнатурних піц 12″. Тісто на заквасці, 90 секунд у печі. Повне меню — 28 позицій, запитайте телефоном.",
      add: "У замовлення",
      orderFrom: "Замовити з меню",
      footnote: "Ціни за піцу 30 см. Можливі сезонні спецпропозиції.",
      items: [
        {
          id: "margherita",
          name: "Margherita DOC",
          desc: "Томати San Marzano, fior di latte, свіжий базилік, оливкова олія extra virgin",
          tag: "Класика",
          ...menuShared.margherita,
        },
        {
          id: "diavola",
          name: "Diavola",
          desc: "Гостра салямі, чилі, моцарела, томатний соус, орегано",
          tag: "Гостра",
          ...menuShared.diavola,
        },
        {
          id: "truffle",
          name: "Truffle Pazzo",
          desc: "Трюфельний крем, лісові гриби, пармезан, рукола, трюфельна олія",
          tag: "Хіт",
          ...menuShared.truffle,
        },
        {
          id: "prosciutto",
          name: "Prosciutto",
          desc: "Пармська шинка, буффало моцарела, рукола, бальзамічний крем",
          tag: "Premium",
          ...menuShared.prosciutto,
        },
        {
          id: "quattro",
          name: "Quattro Formaggi",
          desc: "Горгонзола, пармезан, моцарела, таледжо — чотири сири, нуль компромісів",
          tag: "Сирна",
          ...menuShared.quattro,
        },
        {
          id: "inferno",
          name: "Inferno",
          desc: "Ндуйя, халапеньо, пепероні, мед з чилі — для тих, хто любить вогонь",
          tag: "Вогняна",
          ...menuShared.inferno,
        },
      ],
    },
    promo: {
      eyebrow: "Знижки та акції",
      titleBefore: "Вигідніше, ніж ",
      titleHighlight: "просто смачно",
      subtitle:
        "Актуальні пропозиції. Назвіть промокод при замовленні телефоном або у формі — застосуємо вручну.",
      noCode: "Без промокоду — назвіть акцію",
      order: "Замовити →",
      copied: "Скопійовано",
      items: [
        {
          id: "family",
          badge: "−20%",
          title: "Сімейна вечеря",
          desc: "Знижка 20% на замовлення від €40. Ідеально для компанії друзів або родини.",
          code: "FAMILY20",
          valid: "До кінця місяця",
          highlight: true,
        },
        {
          id: "lunch",
          badge: "від €7",
          title: "Обіднє меню",
          desc: "Будні 12:00–16:00 — піца дня + напій за спеціальною ціною.",
          code: null,
          valid: "Будні 12:00–16:00",
          highlight: false,
        },
        {
          id: "first",
          badge: "−15%",
          title: "Перше замовлення",
          desc: "Знижка 15% на перше замовлення через сайт. Доставка безкоштовно від €20.",
          code: "PAZZO15",
          valid: "Для нових гостей",
          highlight: false,
        },
        {
          id: "night",
          badge: "2=1",
          title: "Нічна двійка",
          desc: "З 22:00 до 02:00 — друга піца в подарунок (дешевша) при замовленні на виніс.",
          code: null,
          valid: "Щодня після 22:00",
          highlight: true,
        },
      ],
    },
    reviews: {
      eyebrow: "Відгуки",
      titleBefore: "Кажуть, ми ",
      titleHighlight: "трохи pazzo",
      subtitle:
        "І це комплімент. 4.9 з 5 — середній рейтинг за 2 400+ відгуками про піцу та доставку.",
      items: [
        {
          name: "Анна К.",
          role: "постійна гостя",
          text: "Diavola — божевілля в найкращому сенсі. Гостра, соковита, ідеальна скоринка. Приходжу мінімум раз на тиждень і завжди беру друзів.",
          rating: 5,
          pizza: "Diavola",
        },
        {
          name: "Марк Р.",
          role: "фуд-блогер",
          text: "Нарешті справжня неаполітанська. Тісто 48 годин відчувається, San Marzano — не маркетинг. Світло печі й атмосфера залу — вау.",
          rating: 5,
          pizza: "Margherita DOC",
        },
        {
          name: "Олена В.",
          role: "доставка",
          text: "Замовляла Truffle Pazzo на компанію. Привезли за 20 хвилин, піца гаряча, пакування акуратне. Тепер тільки PAZZO.",
          rating: 5,
          pizza: "Truffle Pazzo",
        },
        {
          name: "Ігор С.",
          role: "нічний гість",
          text: "Після 23:00 складно знайти щось гідне. Тут і о 1:00 печуть як удень. Inferno — вогонь, у прямому сенсі.",
          rating: 5,
          pizza: "Inferno",
        },
      ],
    },
    order: {
      eyebrow: "Як замовити",
      titleBefore: "Три кроки до ",
      titleHighlight: "гарячої піци",
      steps: [
        {
          n: "01",
          title: "Оберіть піцу",
          text: "У меню на сайті або телефоном — підкажемо, якщо сумніваєтесь.",
        },
        {
          n: "02",
          title: "Оформіть замовлення",
          text: "Залиште номер у формі, напишіть у месенджер або зателефонуйте. Середній час відповіді — 2 хвилини.",
        },
        {
          n: "03",
          title: "Заберіть або чекайте кур’єра",
          text: "Самовивіз з 12 Fire Street — або доставка в термосумці приблизно за 25 хвилин.",
        },
      ],
      contactEyebrow: "Зв’язок",
      contactTitle: "Замовлення та контакти",
      contactSub: "Залиште номер — передзвонимо за 2 хвилини. Або телефонуйте й пишіть самі.",
      phoneNote: "замовлення та бронювання столу",
      addressNote: "самовивіз · 3 хв від метро",
      hoursNote: "щодня, без вихідних",
      emailNote: "для компаній і заходів",
      successTitle: "Скоро передзвонимо!",
      successText: "Заявку прийнято. Зазвичай зв’язуємось протягом 2 хвилин у робочі години.",
      sendAgain: "Надіслати ще раз",
      name: "Ім’я",
      namePh: "Як до вас звертатися?",
      phone: "Телефон",
      phonePh: "+351 ___ ___ ___",
      pizza: "Що замовити",
      pizzaOptional: "(необов’язково)",
      pizzaPlaceholder: "Оберіть піцу",
      pizzaOther: "Інше / консультація",
      note: "Коментар / промокод",
      notePh: "Адреса, час, FAMILY20…",
      submit: "Передзвоніть мені",
      consent: "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних",
    },
    footer: {
      blurb:
        "Неаполітанська піцерія. Вогонь, тісто 48 годин і трохи божевілля з 2019 року.",
      navigate: "Навігація",
      contact: "Контакти",
      hours: "Години",
      rights: "Усі права захищено.",
      tagline: "made with fire & love",
    },
    company: {
      phone: "+351 800 123 456",
      phoneHref: "tel:+351800123456",
      address: "12 Fire Street",
      city: "Lisbon",
      hours: "12:00 — 02:00",
      hoursNote: "Щодня, без вихідних",
      email: "hello@pazzo.pizza",
      founded: 2019,
    },
  },
};

export function formatPrice(price: number, locale: Locale = "en") {
  return new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
