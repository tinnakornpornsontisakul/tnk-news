// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 1 · 12–18 มิ.ย. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ข่าวจริงจากแหล่งน่าเชื่อถือ (มิ.ย. 2026) — ตรวจ/รีเฟรชราคาเหรียญก่อนเผยแพร่
// ============================================================================

registerWeek({
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$28B", delta: "+4.1%", up: true,
      points: [16, 17, 19, 20, 22, 23, 25, 26, 27, 28],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 95 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$113.20",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.12",    chg: "+0.1%", up: true,  bar: 82 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.10",    chg: "+0.0%", up: true,  bar: 76 },
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
    time: "2d",
    url: "https://yellow.com/research/real-world-asset-tokenization-20-billion-record",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["Institutional money pushes ", "tokenized real-world assets", " past $20B"],
      body: [
        "On-chain real-world assets have blown past $20 billion this year — roughly tripling since early 2025 — as BlackRock, Franklin Templeton, Circle and Ondo channel regulated capital onto public chains. Tokenized U.S. Treasuries alone now top $15 billion, the fastest-growing slice of the market.",
        "The bigger signal is structural: Nasdaq, the NYSE and the DTCC have each begun wiring tokenized securities into the existing plumbing of regulated markets. What lived in pilots a year ago is now an infrastructure roadmap at the institutions that run global capital markets.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["เม็ดเงินสถาบันดัน ", "Real World Asset แบบ Token", " ทะลุ 2 หมื่นล้านดอลลาร์"],
      body: [
        "มูลค่า Real World Asset บนเชนพุ่งทะลุ 2 หมื่นล้านดอลลาร์ในปีนี้ — เพิ่มราว 3 เท่าตั้งแต่ต้นปี 2025 — เมื่อ BlackRock, Franklin Templeton, Circle และ Ondo นำเงินทุนที่อยู่ภายใต้การกำกับขึ้นสู่เชนสาธารณะ เฉพาะพันธบัตรสหรัฐแบบ Token ก็ทะลุ 1.5 หมื่นล้านดอลลาร์แล้ว เป็นกลุ่มที่โตเร็วที่สุดของตลาด",
        "สัญญาณที่ใหญ่กว่าคือเชิงโครงสร้าง: Nasdaq, NYSE และ DTCC ต่างเริ่มเชื่อมหลักทรัพย์แบบ Token เข้ากับโครงสร้างตลาดที่กำกับดูแลอยู่เดิม สิ่งที่เมื่อปีก่อนยังเป็นแค่โครงการนำร่อง วันนี้กลายเป็นแผนวางโครงสร้างพื้นฐานของสถาบันที่ขับเคลื่อนตลาดทุนโลก",
      ],
    },
    hlType: "data",
    highlight: {
      en: { label: "By the numbers", value: "$20B+", note: "on-chain RWA value — about 3× since early 2025, led by tokenized treasuries" },
      th: { label: "ตัวเลขสำคัญ", value: "$20B+", note: "มูลค่า RWA บนเชน — โตราว 3 เท่าตั้งแต่ต้นปี 2025 นำโดยพันธบัตรแบบ Token" },
    },
  },

  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "Bitcoin.com / RWA.xyz", time: "5d", url: "https://news.bitcoin.com/blackrock-and-circle-lead-tokenized-treasuries-as-market-value-climbs-to-15-20b/",
      hlType: "data",
      en: {
        title: ["", "Tokenized U.S. treasuries", " clear the $15B mark"],
        body: "On-chain Treasury products surpassed $15.3 billion in May, up from about $100 million two years ago. Circle's USYC, BlackRock's BUIDL and Ondo's USDY lead a field that institutions increasingly treat as on-chain cash.",
        highlight: { label: "By the numbers", value: "$15.3B", note: "tokenized U.S. treasury value — a ~150× jump in two years" },
      },
      th: {
        title: ["", "พันธบัตรสหรัฐแบบ Token", " ทะลุหลัก 1.5 หมื่นล้าน"],
        body: "ผลิตภัณฑ์พันธบัตรบนเชนทะลุ 1.53 หมื่นล้านดอลลาร์ในเดือนพฤษภาคม จากราว 100 ล้านดอลลาร์เมื่อสองปีก่อน โดย USYC ของ Circle, BUIDL ของ BlackRock และ USDY ของ Ondo นำตลาดที่สถาบันมองเป็นเงินสดบนเชนมากขึ้น",
        highlight: { label: "ตัวเลขสำคัญ", value: "$15.3B", note: "มูลค่าพันธบัตรสหรัฐแบบ Token — เพิ่มราว 150 เท่าในสองปี" },
      },
    },
    {
      topic: "rwa", source: "Binance Research / RWA.xyz", time: "1w", url: "https://www.gncrypto.news/news/tokenized-rwas-jump-589-june-2026-binance-research/",
      hlType: "data",
      en: {
        title: ["", "Tokenized U.S. stocks", " go mainstream on-chain"],
        body: "Platforms led by Ondo Global Markets now offer 100+ tokenized U.S. equities and ETFs — tracking names like Apple, Nvidia and Tesla — with one venue passing $1B in value within eight months. Tokenized equities are the fastest-growing RWA segment, up 422% since early 2025.",
        highlight: { label: "By the numbers", value: "100+", note: "tokenized U.S. stocks and ETFs now tradable on-chain" },
      },
      th: {
        title: ["", "หุ้นสหรัฐแบบ Token", " เข้าสู่กระแสหลักบนเชน"],
        body: "แพลตฟอร์มนำโดย Ondo Global Markets เปิดหุ้นและ ETF สหรัฐแบบ Token กว่า 100 ตัว — อ้างอิงชื่ออย่าง Apple, Nvidia และ Tesla — โดยมีแห่งหนึ่งทะลุมูลค่า 1 พันล้านดอลลาร์ภายใน 8 เดือน หุ้นแบบ Token เป็นกลุ่ม RWA ที่โตเร็วที่สุด เพิ่ม 422% ตั้งแต่ต้นปี 2025",
        highlight: { label: "ตัวเลขสำคัญ", value: "100+", note: "หุ้นและ ETF สหรัฐแบบ Token ที่ซื้อขายบนเชนได้แล้ว" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CryptoSlate / J.P. Morgan", time: "4d", url: "https://cryptoslate.com/jpmorgan-mastercard-and-ripple-complete-cross-border-tokenized-treasury-settlement/",
      hlType: "data",
      en: {
        title: ["JPMorgan, Mastercard and Ripple settle a ", "cross-border tokenized fund", " in seconds"],
        body: "A live pilot redeemed Ondo's tokenized treasury (OUSG) on the XRP Ledger and paid out U.S. dollars across borders through Mastercard's Multi-Token Network and JPMorgan's Kinexys — the public-chain leg clearing in under five seconds, outside normal banking hours.",
        highlight: { label: "By the numbers", value: "<5s", note: "public-chain settlement leg, while the cash payout stayed on bank rails" },
      },
      th: {
        title: ["JPMorgan, Mastercard และ Ripple ชำระ ", "กองทุนแบบ Token ข้ามพรมแดน", " ในไม่กี่วินาที"],
        body: "การนำร่องจริงไถ่ถอนพันธบัตรแบบ Token ของ Ondo (OUSG) บน XRP Ledger แล้วจ่ายเป็นดอลลาร์ข้ามพรมแดนผ่าน Multi-Token Network ของ Mastercard และ Kinexys ของ JPMorgan โดยขาบนเชนสาธารณะชำระเสร็จในไม่ถึง 5 วินาที นอกเวลาทำการธนาคาร",
        highlight: { label: "ตัวเลขสำคัญ", value: "<5 วิ", note: "เวลาชำระขาบนเชนสาธารณะ ขณะที่การจ่ายเงินสดยังอยู่บนระบบธนาคาร" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "2w", url: "https://www.coindesk.com/markets/2026/06/05/jpmorgan-bank-of-america-and-citi-are-going-on-the-blockchain-offensive-with-a-shared-tokenized-network",
      hlType: "data",
      en: {
        title: ["America's biggest banks plan a shared ", "tokenized-deposit network", ""],
        body: "Twelve of the largest U.S. banks — including JPMorgan, Citigroup, Bank of America, Wells Fargo, BNY and HSBC — are building a shared network to turn regulated deposits into round-the-clock blockchain tokens, operated by The Clearing House and targeted for the first half of 2027.",
        highlight: { label: "By the numbers", value: "12", note: "major U.S. banks joining the shared tokenized-deposit network" },
      },
      th: {
        title: ["ธนาคารใหญ่สหรัฐผนึก ", "เครือข่ายเงินฝากแบบ Token", ""],
        body: "ธนาคารใหญ่สุดของสหรัฐ 12 แห่ง — รวม JPMorgan, Citigroup, Bank of America, Wells Fargo, BNY และ HSBC — กำลังสร้างเครือข่ายร่วมเพื่อแปลงเงินฝากที่กำกับดูแลเป็น Token บนเชนที่โอนได้ตลอด 24 ชั่วโมง ดำเนินการโดย The Clearing House ตั้งเป้าครึ่งแรกของปี 2027",
        highlight: { label: "ตัวเลขสำคัญ", value: "12", note: "ธนาคารใหญ่สหรัฐที่เข้าร่วมเครือข่ายเงินฝากแบบ Token" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "U.Today / RWA.xyz", time: "3d", url: "https://u.today/solana-hits-27-billion-all-time-high-in-rwa-distribution",
      hlType: "data",
      en: {
        title: ["", "Solana RWA value", " hits a record $2.7B"],
        body: "Real-world assets on Solana reached an all-time high of $2.7 billion in mid-June, spanning tokenized treasuries, credit and yield products. Ethereum still leads with about $12.3 billion (a ~55% share), but issuers are increasingly spreading across multiple chains.",
        highlight: { label: "By the numbers", value: "$2.7B", note: "RWA value on Solana — a fresh record as issuers diversify networks" },
      },
      th: {
        title: ["", "มูลค่า RWA บน Solana", " ทำสถิติ 2.7 พันล้าน"],
        body: "Real World Asset บน Solana แตะจุดสูงสุดใหม่ที่ 2.7 พันล้านดอลลาร์ช่วงกลางเดือนมิถุนายน ครอบคลุมพันธบัตรแบบ Token สินเชื่อ และผลิตภัณฑ์ให้ผลตอบแทน ขณะที่ Ethereum ยังนำที่ราว 1.23 หมื่นล้าน (ส่วนแบ่งราว 55%) แต่ผู้ออกกระจายไปหลายเชนมากขึ้น",
        highlight: { label: "ตัวเลขสำคัญ", value: "$2.7B", note: "มูลค่า RWA บน Solana — สถิติใหม่ ขณะผู้ออกกระจายเครือข่าย" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "2w", url: "https://www.coindesk.com/tech/2026/06/04/not-all-ethereum-layer-2s-are-dying-but-many-general-purpose-chains-no-longer-have-a-reason-to-exist",
      hlType: "data",
      en: {
        title: ["Ethereum ", "Layer-2 fees", " fall below a cent"],
        body: "After the Fusaka upgrade tripled blob capacity, transaction fees on major rollups — Arbitrum, Base and Optimism — dropped below $0.01. Cheaper settlement strengthens the case for issuing real-world assets on public infrastructure, even as weaker general-purpose rollups consolidate.",
        highlight: { label: "By the numbers", value: "<$0.01", note: "typical Layer-2 transaction fee after the blob-capacity expansion" },
      },
      th: {
        title: ["ค่าธรรมเนียม ", "Layer-2 ของ Ethereum", " ต่ำกว่า 1 เซนต์"],
        body: "หลังอัปเกรด Fusaka เพิ่มความจุ blob สามเท่า ค่าธรรมเนียมธุรกรรมบนโรลอัปหลัก — Arbitrum, Base และ Optimism — ลงต่ำกว่า $0.01 การชำระที่ถูกลงช่วยเสริมความคุ้มค่าในการออก Real World Asset บนโครงสร้างสาธารณะ แม้โรลอัปทั่วไปที่อ่อนแอจะเริ่มควบรวม",
        highlight: { label: "ตัวเลขสำคัญ", value: "<$0.01", note: "ค่าธรรมเนียมธุรกรรม Layer-2 ทั่วไปหลังเพิ่มความจุ blob" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/06/03/payment-giants-stripe-visa-mastercard-said-to-be-among-backers-of-soon-to-debut-stablecoin-platform",
      hlType: "takeaway",
      en: {
        title: ["Visa, Mastercard and Stripe back a shared ", "stablecoin platform", ""],
        body: "The three payment giants are reportedly among the backers of a new stablecoin settlement platform, with Coinbase said to be exploring participation. It would place regulated stablecoins at the center of mainstream card and money movement.",
        highlight: { label: "Key takeaway", note: "When the companies that run the card networks build shared stablecoin rails, stablecoins stop being a crypto product and become payments infrastructure." },
      },
      th: {
        title: ["Visa, Mastercard และ Stripe หนุน ", "แพลตฟอร์ม Stablecoin", " ร่วมกัน"],
        body: "สามยักษ์ใหญ่ด้านการชำระเงินมีรายงานว่าร่วมหนุนแพลตฟอร์มชำระราคาด้วย Stablecoin แห่งใหม่ โดย Coinbase ก็มีรายงานว่ากำลังพิจารณาเข้าร่วม ซึ่งจะดัน Stablecoin ที่อยู่ภายใต้การกำกับเข้าสู่ใจกลางการเคลื่อนย้ายเงินและบัตรกระแสหลัก",
        highlight: { label: "สรุปสำคัญ", note: "เมื่อบริษัทที่คุมเครือข่ายบัตรสร้างโครงสร้าง Stablecoin ร่วมกัน Stablecoin ก็เลิกเป็นผลิตภัณฑ์คริปโต กลายเป็นโครงสร้างพื้นฐานการชำระเงิน" },
      },
    },
    {
      topic: "fintech", source: "CoinDesk / Mastercard", time: "2w", url: "https://www.coindesk.com/markets/2026/06/03/mastercard-expands-on-chain-settlement-in-bet-on-stablecoins-and-always-on-finance",
      hlType: "quote",
      en: {
        title: ["Mastercard opens ", "card settlement to stablecoins", " across eight chains"],
        body: "Mastercard expanded settlement to regulated stablecoins — USDC, RLUSD and PYUSD — across Ethereum, Solana, Polygon, Base, Arbitrum and XRPL, adding intraday, weekend and holiday settlement for partners on its global network.",
        highlight: { note: "The next phase of stablecoin adoption is about real-world utility, especially in settlement, where timing and liquidity matter most.", by: "Raj Dhamodharan, EVP Blockchain & Digital Assets, Mastercard" },
      },
      th: {
        title: ["Mastercard เปิด ", "ชำระบัตรด้วย Stablecoin", " ครอบ 8 เชน"],
        body: "Mastercard ขยายการชำระราคาสู่ Stablecoin ที่อยู่ภายใต้การกำกับ — USDC, RLUSD และ PYUSD — บน Ethereum, Solana, Polygon, Base, Arbitrum และ XRPL พร้อมเพิ่มการชำระระหว่างวัน วันหยุดสุดสัปดาห์ และวันหยุดให้พันธมิตรบนเครือข่ายทั่วโลก",
        highlight: { note: "ก้าวต่อไปของการใช้ Stablecoin คือประโยชน์ใช้งานจริง โดยเฉพาะการชำระราคาที่จังหวะเวลาและสภาพคล่องสำคัญที่สุด", by: "Raj Dhamodharan, EVP Blockchain & Digital Assets, Mastercard" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "ก.ล.ต. / Baker McKenzie", time: "4d", url: "https://www.bakermckenzie.com/en/insight/publications/2026/02/thailand-sec-public-hearing-on-tokenized-funds",
      hlType: "data",
      en: {
        title: ["Thai SEC advances ", "tokenized fund rules", " and a crypto-ETF framework"],
        body: "Thailand's SEC pushed ahead on regulations for tokenized investment funds — targeting effect by late Q2 2026 — alongside rules for crypto ETFs and futures, part of a clear shift from risk-containment to actively building a digital-asset market.",
        highlight: { label: "By the numbers", value: "Q2 2026", note: "targeted effective date for Thailand's tokenized-fund rules" },
      },
      th: {
        title: ["ก.ล.ต. เดินหน้า ", "เกณฑ์กองทุนแบบ Token", " และกรอบ Crypto ETF"],
        body: "ก.ล.ต. ไทยเดินหน้าเกณฑ์กองทุนเพื่อการลงทุนแบบ Token โดยตั้งเป้ามีผลภายในปลายไตรมาส 2 ปี 2026 ควบคู่กับเกณฑ์ Crypto ETF และฟิวเจอร์ส เป็นส่วนหนึ่งของการเปลี่ยนจากการจำกัดความเสี่ยงสู่การสร้างตลาดสินทรัพย์ดิจิทัลอย่างจริงจัง",
        highlight: { label: "ตัวเลขสำคัญ", value: "Q2 2026", note: "กรอบเวลาเป้าหมายที่เกณฑ์กองทุนแบบ Token ของไทยจะมีผล" },
      },
    },
    {
      topic: "set", source: "Bangkok Post", time: "5d", url: "https://www.bangkokpost.com/business/investment/3180638/sec-to-expand-digital-asset-framework",
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
      topic: "set", source: "ธปท. / Baker McKenzie", time: "6d", url: "https://blockchain.bakermckenzie.com/2026/02/19/thailand-bridging-payments-and-digital-assets-current-regulatory-developments/",
      hlType: "know",
      en: {
        title: ["Bank of Thailand expands its ", "programmable-payment sandbox", ""],
        body: "The BOT widened its programmable-payment (stablecoin) sandbox to test baht-backed stablecoins and tokenized-deposit use cases, with KBANK, SCB 10X and Ascend Bit taking part — alongside the government's tokenized 'G-Token' savings initiative.",
        highlight: { label: "Know this", note: "A tokenized deposit is ordinary bank money represented as a token. Unlike a stablecoin it stays a direct claim on a licensed bank — keeping the protections of a normal deposit." },
      },
      th: {
        title: ["ธปท. ขยาย ", "แซนด์บ็อกซ์การชำระเงินแบบโปรแกรมได้", ""],
        body: "ธปท. ขยายแซนด์บ็อกซ์การชำระเงินแบบโปรแกรมได้ (Stablecoin) เพื่อทดสอบ Stablecoin ที่หนุนด้วยเงินบาทและการใช้งานเงินฝากแบบ Token โดยมี KBANK, SCB 10X และ Ascend Bit ร่วม พร้อมโครงการ 'G-Token' พันธบัตรออมทรัพย์แบบ Token ของภาครัฐ",
        highlight: { label: "รู้ไว้", note: "เงินฝากแบบ Token คือเงินในธนาคารปกติที่แทนด้วย Token ต่างจาก Stablecoin ตรงที่ยังเป็นสิทธิ์เรียกร้องต่อธนาคารที่มีใบอนุญาตโดยตรง จึงคงความคุ้มครองเท่าเงินฝากทั่วไป" },
      },
    },
    {
      topic: "set", source: "ก.ล.ต. / CoinMarketCap", time: "1w", url: "https://coinmarketcap.com/academy/article/thailand-approves-digital-assets-for-derivatives-trading",
      hlType: "quote",
      en: {
        title: ["Thailand opens ", "digital-asset derivatives", " under SEC rules"],
        body: "Thailand's SEC approved digital assets as underlyings for regulated derivatives trading, part of a 2026-2028 strategy that pairs crypto ETFs, tokenized funds and clearer licensing to draw institutional participation.",
        highlight: { note: "The measure will strengthen recognition of crypto as an asset class.", by: "Pornanong Budsaratragoon, Secretary-General, Thai SEC" },
      },
      th: {
        title: ["ไทยเปิด ", "อนุพันธ์อ้างอิงสินทรัพย์ดิจิทัล", " ภายใต้เกณฑ์ ก.ล.ต."],
        body: "ก.ล.ต. ไทยอนุมัติให้ใช้สินทรัพย์ดิจิทัลเป็นสินทรัพย์อ้างอิงของอนุพันธ์ที่กำกับดูแล เป็นส่วนหนึ่งของแผนปี 2026-2028 ที่จับคู่ Crypto ETF, กองทุนแบบ Token และการออกใบอนุญาตที่ชัดเจนขึ้นเพื่อดึงผู้เล่นสถาบัน",
        highlight: { note: "มาตรการนี้จะช่วยเสริมการยอมรับคริปโตในฐานะสินทรัพย์ประเภทหนึ่ง", by: "Pornanong Budsaratragoon, เลขาธิการ ก.ล.ต." },
      },
    },
  ],

  briefs: [
    { color: "#C9C400", url: "https://www.pymnts.com/cryptocurrency/2026/mastercard-and-visa-back-stealth-stablecoin-platform/",
      en: { strong: "Mastercard", text: " agrees to buy stablecoin-infra firm BVNK for up to $1.8B.", src: "PYMNTS" },
      th: { strong: "Mastercard", text: " ตกลงซื้อ BVNK ผู้ให้บริการโครงสร้าง Stablecoin มูลค่าสูงสุด 1.8 พันล้านดอลลาร์", src: "PYMNTS" } },
    { color: "#2BB6AE", url: "https://cointelegraph.com/news/solana-institutional-momentum-heading-2026",
      en: { strong: "Solana", text: "'s Alpenglow upgrade targets 100–150 ms finality.", src: "Cointelegraph" },
      th: { strong: "Solana", text: " อัปเกรด Alpenglow ตั้งเป้า finality 100–150 มิลลิวินาที", src: "Cointelegraph" } },
    { color: "#C9C400", url: "https://investor.visa.com/news/news-details/2026/Visa-and-Brale-Explore-Private-Stablecoin-Settlement-for-Institutional-Payments/default.aspx",
      en: { strong: "Visa", text: " and Brale pilot private stablecoin settlement on the Canton Network.", src: "Visa" },
      th: { strong: "Visa", text: " และ Brale นำร่องชำระราคาด้วย Stablecoin ส่วนตัวบน Canton Network", src: "Visa" } },
    { color: "#BA6AF2", url: "https://blockchain.news/news/solana-may-2026-ecosystem-update",
      en: { strong: "BNB Chain", text: " RWA value passes the $2B milestone.", src: "RWA.xyz" },
      th: { strong: "BNB Chain", text: " มูลค่า RWA ทะลุหลัก 2 พันล้านดอลลาร์", src: "RWA.xyz" } },
    { color: "#00012C", url: "https://www.nationthailand.com/blogs/business/banking-finance/40054687",
      en: { strong: "Thailand", text: " advances a baht 'G-Token' to put government savings bonds on-chain.", src: "Nation" },
      th: { strong: "ไทย", text: " เดินหน้า 'G-Token' นำพันธบัตรออมทรัพย์รัฐบาลขึ้นเชน", src: "เนชั่น" } },
  ],
});
