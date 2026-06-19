// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 1 · 12–18 มิ.ย. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน) · รีเฟรชราคาเหรียญก่อนเผยแพร่
// ============================================================================

registerWeek({
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$24B", delta: "+4.1%", up: true,
      points: [16, 17, 19, 20, 22, 23, 24, 24, 24, 24],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 88 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$113.20",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.12",    chg: "+0.1%", up: true,  bar: 82 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.10",    chg: "+0.0%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.12",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$10.85",   chg: "+0.1%", up: true,  bar: 48 },
      // ข) Tokenized Gold (อิงราคาทองคำ ~$4,205/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,206",   chg: "+0.4%", up: true,  bar: 88 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,198",   chg: "+0.3%", up: true,  bar: 85 },
      // ค) RWA platform / protocol tokens
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.358",   chg: "+2.4%", up: true,  bar: 60 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.40",    chg: "+1.8%", up: true,  bar: 55 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.223",   chg: "+9.1%", up: true,  bar: 42 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.038",   chg: "+6.1%", up: true,  bar: 35 },
      { sym: "PLUME", name: "Plume",            price: "$0.0114",  chg: "+3.2%", up: true,  bar: 33 },
      { sym: "ENA",   name: "Ethena",           price: "$0.090",   chg: "-2.1%", up: false, bar: 52 },
      { sym: "SKY",   name: "Sky",              price: "$0.058",   chg: "-0.5%", up: false, bar: 45 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.116",   chg: "+1.2%", up: true,  bar: 30 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.135",   chg: "+4.0%", up: true,  bar: 40 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0245",  chg: "+1.0%", up: true,  bar: 26 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 50 },
    ],
  },

  meta: {
    issue: 1,
    date: "2026-06-18",
    dateEN: "Jun 12–18, 2026",
    dateTH: "12–18 มิ.ย. 2026",
  },

  lead: {
    topic: "rwa",
    source: "Yellow / RWA.xyz",
    time: "1mo",
    url: "https://yellow.com/research/real-world-asset-tokenization-20-billion-record",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["On-chain ", "real-world assets", " cross $20 billion"],
      body: [
        "More than $20 billion in tokenized bonds, treasuries, money-market funds and credit now sits on public blockchains — a figure that has roughly tripled since the start of 2025, with BlackRock, Franklin Templeton and Ondo among the biggest names issuing on-chain.",
        "The growth runs across the stack — Ondo in treasuries, Centrifuge and Maple in credit — a signal that regulated capital is moving onto public rails as a standing allocation rather than a one-off pilot.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["Real World Asset บนเชน ", "ทะลุ 2 หมื่นล้านดอลลาร์", ""],
      body: [
        "พันธบัตร ตราสารหนี้ พันธบัตรรัฐบาล กองตลาดเงิน และสินเชื่อแบบ Token บนเชนสาธารณะรวมกันทะลุ 2 หมื่นล้านดอลลาร์แล้ว — เพิ่มราว 3 เท่าตั้งแต่ต้นปี 2025 โดยมี BlackRock, Franklin Templeton และ Ondo เป็นผู้ออกรายใหญ่",
        "การเติบโตกระจายทั่วทั้งระบบ — Ondo ในกลุ่มพันธบัตร, Centrifuge และ Maple ในกลุ่มสินเชื่อ — สะท้อนว่าเงินทุนที่อยู่ภายใต้การกำกับกำลังย้ายขึ้นเชนสาธารณะเป็นการจัดสรรประจำ ไม่ใช่แค่โครงการนำร่อง",
      ],
    },
    hlType: "data",
    highlight: {
      en: { label: "By the numbers", value: "$20B+", note: "on-chain RWA value — roughly 3× since the start of 2025" },
      th: { label: "ตัวเลขสำคัญ", value: "$20B+", note: "มูลค่า RWA บนเชน — เพิ่มราว 3 เท่าตั้งแต่ต้นปี 2025" },
    },
  },

  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "Bitcoin.com / RWA.xyz", time: "1mo", url: "https://news.bitcoin.com/blackrock-and-circle-lead-tokenized-treasuries-as-market-value-climbs-to-15-20b/",
      hlType: "data",
      en: {
        title: ["", "Tokenized U.S. treasuries", " climb to $15.2B"],
        body: "On-chain U.S. Treasury products reached $15.2 billion in early May, adding about $1 billion in 30 days. Circle's USYC ($2.91B), BlackRock's BUIDL ($2.58B) and Ondo's USDY ($2.14B) lead the category institutions increasingly treat as on-chain cash.",
        highlight: { label: "By the numbers", value: "$15.2B", note: "tokenized U.S. treasury value — led by Circle, BlackRock and Ondo" },
      },
      th: {
        title: ["", "พันธบัตรสหรัฐแบบ Token", " แตะ $15.2B"],
        body: "ผลิตภัณฑ์พันธบัตรสหรัฐบนเชนแตะ 1.52 หมื่นล้านดอลลาร์ช่วงต้นเดือนพฤษภาคม เพิ่มราว 1 พันล้านใน 30 วัน โดย USYC ของ Circle ($2.91B), BUIDL ของ BlackRock ($2.58B) และ USDY ของ Ondo ($2.14B) นำตลาดที่สถาบันมองเป็นเงินสดบนเชน",
        highlight: { label: "ตัวเลขสำคัญ", value: "$15.2B", note: "มูลค่าพันธบัตรสหรัฐแบบ Token — นำโดย Circle, BlackRock และ Ondo" },
      },
    },
    {
      topic: "rwa", source: "Binance Research", time: "2w", url: "https://www.gncrypto.news/news/tokenized-rwas-jump-589-june-2026-binance-research/",
      hlType: "data",
      en: {
        title: ["", "Tokenized equities", " lead a 589% RWA surge"],
        body: "Active real-world assets on-chain jumped 589% from early 2025 to June 2026, per Binance Research, with tokenized stocks the fastest-growing segment (up 422%). Early mover Ondo Global Markets passed $1 billion in value within eight months of launch.",
        highlight: { label: "By the numbers", value: "+422%", note: "growth in tokenized equities — the fastest-growing RWA segment (Binance Research)" },
      },
      th: {
        title: ["", "หุ้นแบบ Token", " นำ RWA โต 589%"],
        body: "Real World Asset บนเชนที่ใช้งานจริงเพิ่มขึ้น 589% จากต้นปี 2025 ถึงมิ.ย. 2026 ตาม Binance Research โดยหุ้นแบบ Token เป็นกลุ่มที่โตเร็วที่สุด (เพิ่ม 422%) ขณะที่ Ondo Global Markets ผู้บุกเบิกรายแรก ๆ ทะลุมูลค่า 1 พันล้านดอลลาร์ภายใน 8 เดือนหลังเปิดตัว",
        highlight: { label: "ตัวเลขสำคัญ", value: "+422%", note: "การเติบโตของหุ้นแบบ Token — กลุ่ม RWA ที่โตเร็วสุด (Binance Research)" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CryptoSlate", time: "1mo", url: "https://cryptoslate.com/jpmorgan-mastercard-and-ripple-complete-cross-border-tokenized-treasury-settlement/",
      hlType: "data",
      en: {
        title: ["JPMorgan, Mastercard and Ripple settle a ", "cross-border tokenized fund", " in seconds"],
        body: "A pilot redeemed Ondo's tokenized treasury (OUSG) on the XRP Ledger and paid out U.S. dollars across borders via Mastercard's Multi-Token Network and JPMorgan's Kinexys — billed as the first near-real-time, cross-border, cross-bank redemption, with the public-chain leg clearing in under five seconds.",
        highlight: { label: "By the numbers", value: "<5s", note: "public-chain settlement leg, while the cash payout stayed on bank rails" },
      },
      th: {
        title: ["JPMorgan, Mastercard และ Ripple ชำระ ", "กองทุนแบบ Token ข้ามพรมแดน", " ในไม่กี่วินาที"],
        body: "การนำร่องไถ่ถอนพันธบัตรแบบ Token ของ Ondo (OUSG) บน XRP Ledger แล้วจ่ายเป็นดอลลาร์ข้ามพรมแดนผ่าน Multi-Token Network ของ Mastercard และ Kinexys ของ JPMorgan — ระบุว่าเป็นการไถ่ถอนข้ามพรมแดนข้ามธนาคารแบบใกล้เรียลไทม์ครั้งแรก โดยขาบนเชนสาธารณะชำระเสร็จในไม่ถึง 5 วินาที",
        highlight: { label: "ตัวเลขสำคัญ", value: "<5 วิ", note: "เวลาชำระขาบนเชนสาธารณะ ขณะที่การจ่ายเงินสดยังอยู่บนระบบธนาคาร" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "2w", url: "https://www.coindesk.com/markets/2026/06/05/jpmorgan-bank-of-america-and-citi-are-going-on-the-blockchain-offensive-with-a-shared-tokenized-network",
      hlType: "data",
      en: {
        title: ["JPMorgan, Bank of America and Citi plan a shared ", "tokenized-deposit network", ""],
        body: "Three of the largest U.S. banks are building a shared network to turn regulated bank deposits into round-the-clock blockchain tokens. It would be operated by The Clearing House — the payments company the banks jointly own — and is targeted for the first half of 2027.",
        highlight: { label: "By the numbers", value: "2027", note: "target to launch the bank-owned shared tokenized-deposit network" },
      },
      th: {
        title: ["JPMorgan, Bank of America และ Citi ผนึก ", "เครือข่ายเงินฝากแบบ Token", ""],
        body: "ธนาคารใหญ่สุดของสหรัฐ 3 แห่งกำลังสร้างเครือข่ายร่วมเพื่อแปลงเงินฝากที่กำกับดูแลเป็น Token บนเชนที่โอนได้ตลอด 24 ชั่วโมง ดำเนินการโดย The Clearing House (บริษัทชำระเงินที่ธนาคารถือหุ้นร่วมกัน) ตั้งเป้าเปิดในครึ่งแรกของปี 2027",
        highlight: { label: "ตัวเลขสำคัญ", value: "2027", note: "ปีเป้าหมายเปิดเครือข่ายเงินฝากแบบ Token ที่ธนาคารถือหุ้นร่วม" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "U.Today / RWA.xyz", time: "1w", url: "https://u.today/solana-hits-27-billion-all-time-high-in-rwa-distribution",
      hlType: "data",
      en: {
        title: ["", "Solana RWA value", " hits a record $2.7B"],
        body: "Real-world assets on Solana reached an all-time high of $2.7 billion in mid-June, as institutions including BlackRock and Securitize deepened their use of the chain for tokenized funds and yield products.",
        highlight: { label: "By the numbers", value: "$2.7B", note: "RWA value on Solana — a fresh record as institutions adopt the chain" },
      },
      th: {
        title: ["", "มูลค่า RWA บน Solana", " ทำสถิติ 2.7 พันล้าน"],
        body: "Real World Asset บน Solana แตะจุดสูงสุดใหม่ที่ 2.7 พันล้านดอลลาร์ช่วงกลางเดือนมิถุนายน ขณะที่สถาบันอย่าง BlackRock และ Securitize ใช้งานเชนนี้มากขึ้นสำหรับกองทุนแบบ Token และผลิตภัณฑ์ให้ผลตอบแทน",
        highlight: { label: "ตัวเลขสำคัญ", value: "$2.7B", note: "มูลค่า RWA บน Solana — สถิติใหม่ ขณะสถาบันหันมาใช้เชนนี้" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "2w", url: "https://www.coindesk.com/tech/2026/06/04/not-all-ethereum-layer-2s-are-dying-but-many-general-purpose-chains-no-longer-have-a-reason-to-exist",
      hlType: "data",
      en: {
        title: ["Ethereum's ", "Layer-2 race", " consolidates around a few winners"],
        body: "Base and Arbitrum now account for more than 80% of Layer-2 DeFi activity as weaker general-purpose rollups fade, analysts say. The shakeout concentrates tokenized-asset settlement on a handful of proven public rails rather than a sprawling field of chains.",
        highlight: { label: "By the numbers", value: "80%+", note: "share of Layer-2 DeFi activity on Base and Arbitrum" },
      },
      th: {
        title: ["ศึก ", "Layer-2 ของ Ethereum", " กระจุกเหลือผู้ชนะไม่กี่ราย"],
        body: "Base และ Arbitrum กินส่วนแบ่งกิจกรรม DeFi บน Layer-2 รวมกันกว่า 80% ขณะที่โรลอัปทั่วไปที่อ่อนแอเริ่มเลือนหาย ตามที่นักวิเคราะห์ระบุ การคัดกรองนี้ทำให้การชำระสินทรัพย์แบบ Token กระจุกอยู่บนเชนสาธารณะที่พิสูจน์ตัวแล้วไม่กี่ราย",
        highlight: { label: "ตัวเลขสำคัญ", value: "80%+", note: "ส่วนแบ่งกิจกรรม DeFi บน Layer-2 ที่อยู่บน Base และ Arbitrum" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "CoinDesk", time: "2w", url: "https://www.coindesk.com/business/2026/06/03/payment-giants-stripe-visa-mastercard-said-to-be-among-backers-of-soon-to-debut-stablecoin-platform",
      hlType: "takeaway",
      en: {
        title: ["Visa, Mastercard and Stripe back a shared ", "stablecoin platform", ""],
        body: "The three payment giants are reportedly close to introducing a new stablecoin settlement platform, with Coinbase said to be exploring participation — a move that would place regulated stablecoins at the center of mainstream money movement.",
        highlight: { label: "Key takeaway", note: "When the companies that run the card networks build shared stablecoin rails, stablecoins stop being a crypto product and become payments infrastructure." },
      },
      th: {
        title: ["Visa, Mastercard และ Stripe หนุน ", "แพลตฟอร์ม Stablecoin", " ร่วมกัน"],
        body: "สามยักษ์ใหญ่ด้านการชำระเงินมีรายงานว่าใกล้เปิดตัวแพลตฟอร์มชำระราคาด้วย Stablecoin แห่งใหม่ โดย Coinbase ก็มีรายงานว่ากำลังพิจารณาเข้าร่วม — จะดัน Stablecoin ที่อยู่ภายใต้การกำกับเข้าสู่ใจกลางการเคลื่อนย้ายเงินกระแสหลัก",
        highlight: { label: "สรุปสำคัญ", note: "เมื่อบริษัทที่คุมเครือข่ายบัตรสร้างโครงสร้าง Stablecoin ร่วมกัน Stablecoin ก็เลิกเป็นผลิตภัณฑ์คริปโต กลายเป็นโครงสร้างพื้นฐานการชำระเงิน" },
      },
    },
    {
      topic: "fintech", source: "CoinDesk / Mastercard", time: "2w", url: "https://www.coindesk.com/markets/2026/06/03/mastercard-expands-on-chain-settlement-in-bet-on-stablecoins-and-always-on-finance",
      hlType: "quote",
      en: {
        title: ["Mastercard opens ", "card settlement to stablecoins", " across multiple chains"],
        body: "Mastercard will settle in regulated stablecoins — including USDC, PYUSD and RLUSD — across Ethereum, Solana, Polygon, Base, Arbitrum and XRPL, adding intraday, weekend and holiday settlement for partners on its global network.",
        highlight: { note: "The next phase of stablecoin adoption is about real-world utility, especially in settlement, where timing and liquidity matter most.", by: "Raj Dhamodharan, EVP Blockchain & Digital Assets, Mastercard" },
      },
      th: {
        title: ["Mastercard เปิด ", "ชำระบัตรด้วย Stablecoin", " ข้ามหลายเชน"],
        body: "Mastercard จะรองรับการชำระด้วย Stablecoin ที่อยู่ภายใต้การกำกับ — รวม USDC, PYUSD และ RLUSD — บน Ethereum, Solana, Polygon, Base, Arbitrum และ XRPL พร้อมเพิ่มการชำระระหว่างวัน วันหยุดสุดสัปดาห์ และวันหยุดให้พันธมิตรบนเครือข่ายทั่วโลก",
        highlight: { note: "ก้าวต่อไปของการใช้ Stablecoin คือประโยชน์ใช้งานจริง โดยเฉพาะการชำระราคาที่จังหวะเวลาและสภาพคล่องสำคัญที่สุด", by: "Raj Dhamodharan, EVP Blockchain & Digital Assets, Mastercard" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "ก.ล.ต. / Baker McKenzie", time: "1mo", url: "https://www.bakermckenzie.com/en/insight/publications/2026/02/thailand-sec-public-hearing-on-tokenized-funds",
      hlType: "data",
      en: {
        title: ["Thai SEC advances ", "tokenized-fund rules", " for instant on-chain trades"],
        body: "Thailand's SEC moved ahead on rules that would exempt tokenized investment funds from the traditional T+1 cycle — enabling near-instant, blockchain-based subscription and redemption — following a public hearing, with a target to take effect in late Q2 2026.",
        highlight: { label: "By the numbers", value: "Q2 2026", note: "targeted effective date for Thailand's tokenized-fund rules" },
      },
      th: {
        title: ["ก.ล.ต. เดินหน้า ", "เกณฑ์กองทุนแบบ Token", " ให้ซื้อขายทันทีบนเชน"],
        body: "ก.ล.ต. ไทยเดินหน้าเกณฑ์ที่จะยกเว้นกองทุนเพื่อการลงทุนแบบ Token จากรอบ T+1 เดิม — ให้ซื้อ-ขายคืนหน่วยลงทุนบนบล็อกเชนได้แทบจะทันที — หลังเปิดรับฟังความเห็น โดยตั้งเป้ามีผลภายในปลายไตรมาส 2 ปี 2026",
        highlight: { label: "ตัวเลขสำคัญ", value: "Q2 2026", note: "กรอบเวลาเป้าหมายที่เกณฑ์กองทุนแบบ Token ของไทยจะมีผล" },
      },
    },
    {
      topic: "set", source: "Bangkok Post", time: "1mo", url: "https://www.bangkokpost.com/business/investment/3180638/sec-to-expand-digital-asset-framework",
      hlType: "know",
      en: {
        title: ["Thailand to widen ", "investment tokens", " to bonds and fund units"],
        body: "The Thai SEC plans to expand investment tokens beyond current products to include bond tokens and tokenized fund units, with the country's first 'green token' expected to support ESG-linked, sustainable investment.",
        highlight: { label: "Know this", note: "An 'investment token' (โทเคนดิจิทัลเพื่อการลงทุน) is a Thai-regulated digital asset representing a right to returns or to a real asset — distinct from utility tokens and cryptocurrencies." },
      },
      th: {
        title: ["ไทยขยาย ", "Token เพื่อการลงทุน", " สู่พันธบัตรและหน่วยกองทุน"],
        body: "ก.ล.ต. ไทยเตรียมขยาย Token เพื่อการลงทุนจากผลิตภัณฑ์เดิม สู่ bond token และหน่วยกองทุนแบบ Token พร้อมคาดว่าจะมี 'green token' แรกของประเทศเพื่อหนุนการลงทุนที่ยั่งยืนเชื่อมโยง ESG",
        highlight: { label: "รู้ไว้", note: "'Token เพื่อการลงทุน' คือสินทรัพย์ดิจิทัลภายใต้การกำกับของไทยที่แทนสิทธิในผลตอบแทนหรือในสินทรัพย์จริง ต่างจากยูทิลิตี้ Token และคริปโทเคอร์เรนซี" },
      },
    },
    {
      topic: "set", source: "ธปท. / Baker McKenzie", time: "1mo", url: "https://blockchain.bakermckenzie.com/2026/02/19/thailand-bridging-payments-and-digital-assets-current-regulatory-developments/",
      hlType: "know",
      en: {
        title: ["Bank of Thailand expands its ", "programmable-payment sandbox", ""],
        body: "The BOT's programmable-payment (stablecoin) sandbox — launched in 2024 and expanded in late 2025 — is testing baht-backed stablecoins and tokenized-deposit use cases, as the central bank moves from wholesale CBDC pilots toward regulated digital money on shared ledgers.",
        highlight: { label: "Know this", note: "A tokenized deposit is ordinary bank money represented as a token. Unlike a stablecoin it stays a direct claim on a licensed bank — keeping the protections of a normal deposit." },
      },
      th: {
        title: ["ธปท. ขยาย ", "แซนด์บ็อกซ์การชำระเงินแบบโปรแกรมได้", ""],
        body: "แซนด์บ็อกซ์การชำระเงินแบบโปรแกรมได้ (Stablecoin) ของ ธปท. — เริ่มปี 2024 และขยายปลายปี 2025 — กำลังทดสอบ Stablecoin ที่หนุนด้วยเงินบาทและการใช้งานเงินฝากแบบ Token ขณะที่ธนาคารกลางขยับจากการนำร่อง CBDC ระดับสถาบันสู่เงินดิจิทัลที่กำกับดูแลบนบัญชีแยกประเภทร่วม",
        highlight: { label: "รู้ไว้", note: "เงินฝากแบบ Token คือเงินในธนาคารปกติที่แทนด้วย Token ต่างจาก Stablecoin ตรงที่ยังเป็นสิทธิ์เรียกร้องต่อธนาคารที่มีใบอนุญาตโดยตรง จึงคงความคุ้มครองเท่าเงินฝากทั่วไป" },
      },
    },
    {
      topic: "set", source: "ก.ล.ต. / CoinMarketCap", time: "1mo", url: "https://coinmarketcap.com/academy/article/thailand-approves-digital-assets-for-derivatives-trading",
      hlType: "quote",
      en: {
        title: ["Thailand opens ", "digital-asset derivatives", " under SEC rules"],
        body: "Thailand approved digital assets as underlyings for regulated derivatives, with the SEC amending the Derivatives Act — a move the regulator says will broaden market inclusiveness, portfolio diversification and risk management for investors.",
        highlight: { note: "The measure will strengthen recognition of crypto as an asset class.", by: "Pornanong Budsaratragoon, Secretary-General, Thai SEC" },
      },
      th: {
        title: ["ไทยเปิด ", "อนุพันธ์อ้างอิงสินทรัพย์ดิจิทัล", " ภายใต้เกณฑ์ ก.ล.ต."],
        body: "ไทยอนุมัติให้ใช้สินทรัพย์ดิจิทัลเป็นสินทรัพย์อ้างอิงของอนุพันธ์ที่กำกับดูแล โดย ก.ล.ต. แก้ไข พ.ร.บ. สัญญาซื้อขายล่วงหน้า — ระบุว่าจะเพิ่มความครอบคลุมของตลาด การกระจายพอร์ต และการบริหารความเสี่ยงให้นักลงทุน",
        highlight: { note: "มาตรการนี้จะช่วยเสริมการยอมรับคริปโตในฐานะสินทรัพย์ประเภทหนึ่ง", by: "Pornanong Budsaratragoon, เลขาธิการ ก.ล.ต." },
      },
    },
  ],

  briefs: [
    { color: "#C9C400", url: "https://investor.visa.com/news/news-details/2026/Visa-and-Brale-Explore-Private-Stablecoin-Settlement-for-Institutional-Payments/default.aspx",
      en: { strong: "Visa", text: " and Brale pilot private stablecoin settlement on the Canton Network.", src: "Visa" },
      th: { strong: "Visa", text: " และ Brale นำร่องชำระราคาด้วย Stablecoin ส่วนตัวบน Canton Network", src: "Visa" } },
    { color: "#BA6AF2", url: "https://news.bitcoin.com/bnb-chain-grows-rwa-market-60-to-3-6b-as-tokenized-treasuries-lead-q1/",
      en: { strong: "BNB Chain", text: " RWA value climbs to $3.6B — second only to Ethereum.", src: "Bitcoin.com" },
      th: { strong: "BNB Chain", text: " มูลค่า RWA แตะ $3.6B ขึ้นเป็นอันดับ 2 รองจาก Ethereum", src: "Bitcoin.com" } },
    { color: "#00012C", url: "https://www.blockhead.co/2025/09/02/thailand-moves-toward-launch-of-worlds-first-publicly-offered-tokenized-government-bond/",
      en: { strong: "Thailand's G-Token", text: " — the world's first publicly-offered tokenized government bond (฿5B) — opens sovereign debt to retail.", src: "Blockhead" },
      th: { strong: "G-Token ไทย", text: " — พันธบัตรรัฐบาล Token ตัวแรกของโลกที่เปิดขายสาธารณะ (฿5 พันล้าน) เปิดให้รายย่อยถือหนี้รัฐบาล", src: "Blockhead" } },
  ],
});
