// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 5 · 10–17 ก.ค. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน)
//  ราคาเหรียญอ่านจาก CoinGecko 17 ก.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (17 ก.ค. 2026)
//  esg:true = ข่าวหมวด Green/ESG (โผล่ใน section ESG ทั้งในแท็บ ESG และหน้า "ทั้งหมด")
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 5,
    date: "2026-07-17",
    dateEN: "Jul 10–17, 2026",
    dateTH: "10–17 ก.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (17 ก.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$34.8B", delta: "+4.5%", up: true,
      points: [33.3, 33.5, 33.8, 34.0, 34.2, 34.4, 34.5, 34.6, 34.7, 34.8],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 88 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$115.91",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+0.2%", up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.1%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.15",   chg: "+0.1%", up: true,  bar: 48 },
      // ข) Tokenized Gold (ทองคำย่อลงมาที่ ~$3,993/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$3,993",   chg: "-2.5%", up: false, bar: 84 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$3,998",   chg: "-2.3%", up: false, bar: 85 },
      // ค) RWA platform / protocol tokens (ONDO นำกลุ่ม, สินเชื่อบางตัวร่วง)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.368",   chg: "+14.9%", up: true,  bar: 62 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.53",    chg: "+0.3%",  up: true,  bar: 56 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.177",   chg: "-9.1%",  up: false, bar: 34 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0354",  chg: "-3.9%",  up: false, bar: 34 },
      { sym: "PLUME", name: "Plume",            price: "$0.0107",  chg: "+4.9%",  up: true,  bar: 33 },
      { sym: "ENA",   name: "Ethena",           price: "$0.0809",  chg: "+2.9%",  up: true,  bar: 50 },
      { sym: "SKY",   name: "Sky",              price: "$0.0600",  chg: "+2.7%",  up: true,  bar: 50 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0415",  chg: "-14.3%", up: false, bar: 24 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.178",   chg: "+0.1%",  up: true,  bar: 48 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0197",  chg: "+2.4%",  up: true,  bar: 26 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "-0.5%",  up: false, bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "The Block",
    time: "2d",
    url: "https://www.theblock.co/post/408419/dtcc-begins-first-tokenized-stock-and-treasury-production-trades-involving-jpmorgan-blackrock-and-goldman-wsj",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["DTCC runs the first ", "live tokenized trades", " on Wall Street's core rail"],
      body: [
        "The Depository Trust & Clearing Corporation — the backbone of US securities settlement — conducted its first limited production trades of tokenized stocks and Treasurys on Wednesday, with almost 40 financial firms and technology providers taking part. Named participants include JPMorgan, Goldman Sachs, Vanguard, BlackRock, Circle, Morgan Stanley, Nasdaq, Kraken parent Payward and Robinhood Markets. JPMorgan tokenized a portion of its Invesco QQQ Trust holdings; shares of Microsoft and Circle, State Street's SPDR S&P 500 ETF Trust and the iShares 0-3 Month Treasury Bond ETF are also among the first assets tokenized.",
        "Trades settled on either DTCC's Hyperledger Besu network or the Canton Network, with tokenized shares interchangeable with traditional ones and carrying the same ownership, dividend and governance rights. The SEC greenlit the service late last year through a No-Action Letter under a three-year authorization, and the full launch follows in October. For scale: DTCC processed $4.7 quadrillion in securities transactions in 2025, and its depository subsidiary provides custody and asset servicing for $114 trillion in securities.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["DTCC เดินเครื่อง ", "เทรด Token จริงครั้งแรก", " บนรางหลักของ Wall Street"],
      body: [
        "Depository Trust & Clearing Corporation (DTCC) กระดูกสันหลังของระบบชำระราคาหลักทรัพย์สหรัฐ ทำธุรกรรม production จริงครั้งแรกกับหุ้นและพันธบัตรรัฐบาลแบบ Token เมื่อวันพุธ โดยมีบริษัทการเงินและผู้ให้บริการเทคโนโลยีร่วมเกือบ 40 ราย รายชื่อที่ระบุ ได้แก่ JPMorgan, Goldman Sachs, Vanguard, BlackRock, Circle, Morgan Stanley, Nasdaq, Payward (บริษัทแม่ Kraken) และ Robinhood Markets ทั้งนี้ JPMorgan แปลงบางส่วนของ Invesco QQQ Trust ที่ถืออยู่เป็น Token ส่วนสินทรัพย์ชุดแรกอื่นยังมีหุ้น Microsoft และ Circle, SPDR S&P 500 ETF Trust ของ State Street และ iShares 0-3 Month Treasury Bond ETF",
        "ธุรกรรมชำระราคาบนเครือข่าย Hyperledger Besu ของ DTCC หรือบน Canton Network โดยหุ้นแบบ Token ใช้แทนกันได้กับหุ้นปกติ และให้สิทธิ์ความเป็นเจ้าของ เงินปันผล และการออกเสียงเท่ากัน ทั้งนี้ SEC ไฟเขียวบริการนี้เมื่อปลายปีที่แล้วผ่าน No-Action Letter ภายใต้การอนุญาต 3 ปี และจะเปิดใช้เต็มรูปแบบในเดือนตุลาคม ขนาดที่ต้องรู้: ปี 2025 DTCC ประมวลธุรกรรมหลักทรัพย์ 4.7 quadrillion ดอลลาร์ และบริษัทย่อยด้าน depository ดูแล custody ให้หลักทรัพย์มูลค่า 114 ล้านล้านดอลลาร์",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "The tokenization of assets and digital blockchain usage are a megatrend… What we really focus on is safety of the system, resiliency of the system, and working on ways in which we can free up trapped liquidity by using this new technology.", by: "Frank La Salla, President and CEO, DTCC" },
      th: { note: "การแปลงสินทรัพย์เป็น Token และการใช้ Blockchain คือเมกะเทรนด์… สิ่งที่เราโฟกัสจริง ๆ คือความปลอดภัยของระบบ ความยืดหยุ่นของระบบ และการหาวิธีปลดล็อกสภาพคล่องที่ติดอยู่ด้วยเทคโนโลยีใหม่นี้", by: "Frank La Salla, President and CEO, DTCC" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "City of London Corporation", time: "4d", url: "https://news.cityoflondon.gov.uk/uk-announces-plan-to-scale-tokenisation-of-wholesale-financial-markets/",
      hlType: "data",
      en: {
        title: ["UK convenes a ", "54-firm tokenisation taskforce", " aimed at tokenised repo"],
        body: "Chris Woolard, HM Treasury's Wholesale Digital Markets Champion, delivered his inaugural sector report to the Chancellor and convened 54 UK businesses — BlackRock, Goldman Sachs, J.P. Morgan, Morgan Stanley, HSBC, Barclays, Citi and UBS alongside DTCC, Euroclear, Clearstream, LSEG and LCH, plus Circle, Coinbase, Kraken and Ripple. The taskforce will drive live end-to-end use cases through nine Action Groups, focusing initially on tokenised repo.",
        highlight: { label: "By the numbers", value: "£33B", note: "potential addition to UK annual economic output by 2035, plus £14B in annual tax revenues — against a tokenised RWA market put at $88 trillion" },
      },
      th: {
        title: ["UK ตั้ง ", "taskforce Tokenisation 54 บริษัท", " ลุย repo แบบ Token ก่อน"],
        body: "Chris Woolard ในบทบาท Wholesale Digital Markets Champion ของ HM Treasury ส่งรายงานฉบับแรกถึงรัฐมนตรีคลัง พร้อมรวบรวม 54 บริษัทของสหราชอาณาจักร — BlackRock, Goldman Sachs, J.P. Morgan, Morgan Stanley, HSBC, Barclays, Citi และ UBS ร่วมกับ DTCC, Euroclear, Clearstream, LSEG และ LCH บวกด้วย Circle, Coinbase, Kraken และ Ripple โดย taskforce จะผลักดันการใช้งานจริงแบบครบวงจรผ่าน 9 Action Group และเริ่มจาก repo แบบ Token เป็นอันดับแรก",
        highlight: { label: "ตัวเลขสำคัญ", value: "£33B", note: "มูลค่าที่อาจเพิ่มให้เศรษฐกิจสหราชอาณาจักรต่อปีภายในปี 2035 บวกรายได้ภาษีอีก £14B ต่อปี — เทียบกับตลาด RWA แบบ Token ที่ประเมินไว้ $88 ล้านล้าน" },
      },
    },
    {
      topic: "rwa", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/hong-kong-sfc-approves-baillie-gifford-native-tokenized-fund/",
      hlType: "know",
      en: {
        title: ["Hong Kong authorises a fund where ", "the chain is the register", ""],
        body: "Hong Kong's SFC authorised Baillie Gifford's Enhanced Yield Fund (BAGEY) for professional investors — an actively managed portfolio of short-duration government and corporate bonds issued natively on Ethereum and Solana, developed with BNY. Investors can subscribe and redeem in fiat or USDC, with same-day redemptions up to 10% of NAV and an indicative NAV published to support secondary trading. It is structured as a UK-regulated OEIC, denominated in US dollars.",
        highlight: { label: "Know this", note: "In a digitally native fund the token itself constitutes the investor's holding and the blockchain is the legal record of ownership — removing the parallel record-keeping that tokenized wrappers still require." },
      },
      th: {
        title: ["ฮ่องกงอนุมัติกองทุนที่ ", "ใช้เชนเป็นทะเบียนหลัก", ""],
        body: "SFC ฮ่องกงอนุมัติกองทุน Baillie Gifford Enhanced Yield Fund (BAGEY) สำหรับผู้ลงทุนมืออาชีพ — พอร์ตตราสารหนี้รัฐบาลและภาคเอกชนระยะสั้นที่บริหารเชิงรุก ออกเป็น Token บน Ethereum และ Solana โดยตรง พัฒนาร่วมกับ BNY ผู้ลงทุนจองซื้อและไถ่ถอนได้ทั้งด้วยเงิน fiat หรือ Stablecoin USDC ไถ่ถอนได้ภายในวันเดียวสูงสุด 10% ของ NAV และมีการเผยแพร่ NAV เชิงบ่งชี้เพื่อรองรับการซื้อขายในตลาดรอง โครงสร้างเป็น OEIC ภายใต้การกำกับของสหราชอาณาจักร สกุลดอลลาร์",
        highlight: { label: "รู้ไว้", note: "ในกองทุนที่ออกบนเชนโดยตรง (digitally native) ตัว Token คือหน่วยลงทุนของผู้ถือ และ Blockchain คือทะเบียนตามกฎหมาย — ตัดระบบทะเบียนคู่ขนานที่ Token แบบ wrapper ยังต้องมีออกไป" },
      },
    },
    {
      topic: "rwa", esg: true, source: "CP Group", time: "1w", url: "https://www.cpgroupglobal.com/en/newsroom/news/910/",
      hlType: "takeaway",
      en: {
        title: ["CP Group launches ", "'Reforest Tokenization'", " with Mae Fah Luang Foundation"],
        body: "Thailand's CP Group unveiled a Reforest Tokenization model with the Mae Fah Luang Foundation under Royal Patronage as first partner, covering more than 10,000 rai across Chiang Mai, Chiang Rai and Tak, an estimated 10,000 tonnes of CO2e in carbon credits and about 200 households — who are projected to earn an extra ฿10,000–15,000 per month. In phase one this year, credits are sold through the TrueMoney app on an Instant Redeem basis with no coin or token held in a digital wallet, built with Ascend Bit; later phases would extend to biodiversity and ecosystem services under relevant laws and regulatory supervision.",
        highlight: { label: "Key takeaway", note: "Despite the 'tokenization' branding, phase one is a retail offset purchase inside an e-wallet — no user-held token and no named registry — with the transferable version explicitly deferred until the rules are clear." },
      },
      th: {
        title: ["เครือ CP เปิด ", "'Reforest Tokenization'", " ร่วมมูลนิธิแม่ฟ้าหลวง"],
        body: "เครือเจริญโภคภัณฑ์เปิดตัวโมเดล Reforest Tokenization โดยมีมูลนิธิแม่ฟ้าหลวง ในพระบรมราชูปถัมภ์ เป็นพันธมิตรรายแรก ครอบคลุมพื้นที่กว่า 10,000 ไร่ในเชียงใหม่ เชียงราย และตาก ประมาณการคาร์บอนเครดิต 10,000 ตัน CO2e และชุมชนราว 200 ครัวเรือน ที่คาดว่าจะมีรายได้เพิ่ม 10,000–15,000 บาทต่อครัวเรือนต่อเดือน เฟสแรกภายในปีนี้จะนำคาร์บอนเครดิตไปจำหน่ายบนแอป TrueMoney แบบ Instant Redeem โดยยังไม่มีการถือครองเหรียญหรือ Token ใน Digital Wallet พัฒนาร่วมกับแอสเซนด์ บิท ส่วนเฟสถัดไปจะขยายสู่ความหลากหลายทางชีวภาพและระบบนิเวศ ภายใต้กฎหมายและการกำกับดูแลจากหน่วยงานที่เกี่ยวข้อง",
        highlight: { label: "สรุปสำคัญ", note: "แม้ใช้ชื่อ Tokenization แต่เฟสแรกคือการซื้อคาร์บอนเครดิตแบบรายย่อยใน e-wallet — ยังไม่มี Token ให้ผู้ใช้ถือ และไม่ระบุมาตรฐานทะเบียน โดยเวอร์ชันที่โอนเปลี่ยนมือได้ถูกเลื่อนไปรอความชัดเจนของกฎเกณฑ์" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/07/15/uk-plans-first-g7-digital-sovereign-bond-by-early-2027",
      hlType: "takeaway",
      en: {
        title: ["UK to issue the ", "first G7 digital sovereign bond", " by early 2027"],
        body: "Chancellor Rachel Reeves used her Mansion House speech to set a timeline: the UK will issue a digital sovereign bond by early 2027, the first G7 nation to place government debt on distributed-ledger infrastructure. The Digital Gilt Instrument (DIGIT) will be sterling-denominated and issued on HSBC's Orion platform inside the Bank of England and FCA's Digital Securities Sandbox. HSBC — appointed in February, having issued over $3.5 billion of digital bonds through Orion — runs the platform; the Treasury has not disclosed size, maturity, coupon, investor eligibility or settlement asset.",
        highlight: { label: "Key takeaway", note: "Bank of England Governor Andrew Bailey said the central bank will work to make DIGIT eligible as collateral in its market operations — the step that would put a tokenized gilt inside the plumbing rather than beside it." },
      },
      th: {
        title: ["UK เตรียมออก ", "พันธบัตรรัฐบาลดิจิทัลรายแรกของ G7", " ต้นปี 2027"],
        body: "Rachel Reeves รัฐมนตรีคลังสหราชอาณาจักร ใช้เวทีปาฐกถา Mansion House กำหนดไทม์ไลน์ว่าจะออกพันธบัตรรัฐบาลดิจิทัลภายในต้นปี 2027 เป็นชาติแรกในกลุ่ม G7 ที่นำหนี้รัฐบาลขึ้นโครงสร้าง distributed ledger โดย Digital Gilt Instrument (DIGIT) จะเป็นตราสารสกุลปอนด์ ออกบนแพลตฟอร์ม Orion ของ HSBC ภายใต้ Digital Securities Sandbox ของ Bank of England และ FCA ทั้งนี้ HSBC ได้รับแต่งตั้งเมื่อเดือนกุมภาพันธ์ และเคยออก digital bond ผ่าน Orion แล้วกว่า 3.5 พันล้านดอลลาร์ ส่วนกระทรวงการคลังยังไม่เปิดเผยขนาด อายุ คูปอง คุณสมบัติผู้ลงทุน หรือสินทรัพย์ที่ใช้ชำระราคา",
        highlight: { label: "สรุปสำคัญ", note: "Andrew Bailey ผู้ว่าการ Bank of England ระบุว่าธนาคารกลางจะผลักดันให้ DIGIT ใช้เป็นหลักประกันในธุรกรรมของธนาคารกลางได้ — ก้าวที่จะทำให้พันธบัตรแบบ Token เข้าไปอยู่ในระบบจริง ไม่ใช่แค่วางข้าง ๆ" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/07/15/cantor-and-securitize-collaborate-on-blockchain-based-ipos",
      hlType: "quote",
      en: {
        title: ["Cantor and Securitize take ", "the IPO itself on-chain", ""],
        body: "Cantor Fitzgerald and Securitize (SECZ) are revamping initial public offerings with tokenization: Cantor brings its equity capital markets and trading capabilities while Securitize provides the infrastructure to issue, distribute and service tokenized securities. Rather than tokenized funds or secondary trading, the partnership extends blockchain directly into IPOs and follow-on offerings — letting public companies raise capital and issue securities on-chain with modernized ownership records, inside the established capital-markets framework.",
        highlight: { note: "Tokenization is becoming part of mainstream capital markets, and partnering with Securitize allows us to bring the rigor of traditional equity capital markets to onchain settlement and distribution.", by: "Pascal Bandelier, Co-CEO and Global Head of Equities, Cantor Fitzgerald" },
      },
      th: {
        title: ["Cantor จับมือ Securitize ยก ", "ตัว IPO ขึ้นเชน", ""],
        body: "Cantor Fitzgerald และ Securitize (SECZ) ปรับโฉมการเสนอขายหุ้น IPO ด้วย Tokenization โดย Cantor นำความสามารถด้าน equity capital markets และการซื้อขายมาเสริม ส่วน Securitize ให้โครงสร้างพื้นฐานสำหรับออก กระจาย และดูแล Token หลักทรัพย์ ความร่วมมือนี้ไม่ได้โฟกัสที่กองทุนแบบ Token หรือตลาดรอง แต่นำ Blockchain เข้าไปในกระบวนการ IPO และการเสนอขายเพิ่มทุนโดยตรง — ให้บริษัทมหาชนระดมทุนและออกหลักทรัพย์บนเชนได้ พร้อมทะเบียนผู้ถือที่ทันสมัยขึ้น ภายใต้กรอบตลาดทุนเดิม",
        highlight: { note: "Tokenization กำลังกลายเป็นส่วนหนึ่งของตลาดทุนกระแสหลัก และการจับมือกับ Securitize ทำให้เรานำความเข้มงวดของตลาดทุนดั้งเดิมมาสู่การชำระราคาและการกระจายบนเชนได้", by: "Pascal Bandelier, Co-CEO and Global Head of Equities, Cantor Fitzgerald" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "1d", url: "https://www.coindesk.com/business/2026/07/16/crypto-brokerage-firm-alpaca-raises-usd135-million-for-tokenized-stock-infrastructure",
      hlType: "data",
      en: {
        title: ["Alpaca raises $435M — and it clears ", "94% of tokenized US stocks", ""],
        body: "Alpaca raised $135 million in equity led by Peak XV, with Elefund, BNP Paribas' Opera Tech Ventures and Unbound participating; debt primarily from Kraken parent Payward and BMO took the total package to $435 million. The company runs an Instant Tokenization Network for round-the-clock minting and redemption and connects platforms including Binance, Ondo and Dinari. Its January Series D valued it at $1.15 billion; the new valuation was not disclosed.",
        highlight: { label: "By the numbers", value: "94%", note: "of tokenized US equities are cleared or custodied by Alpaca, which holds over $1.5B of underlying stocks — a single chokepoint behind a market that grew ~3,000% in 2025" },
      },
      th: {
        title: ["Alpaca ระดม $435M — และเคลียร์ ", "94% ของหุ้นสหรัฐแบบ Token", ""],
        body: "Alpaca ระดมทุน equity 135 ล้านดอลลาร์ นำโดย Peak XV พร้อม Elefund, Opera Tech Ventures ของ BNP Paribas และ Unbound ส่วนเงินกู้ที่มาจาก Payward (บริษัทแม่ Kraken) และ BMO เป็นหลัก ทำให้แพ็กเกจรวมแตะ 435 ล้านดอลลาร์ บริษัทเดินระบบ Instant Tokenization Network สำหรับ mint และไถ่ถอนตลอด 24 ชั่วโมง และเชื่อมแพลตฟอร์มอย่าง Binance, Ondo และ Dinari ทั้งนี้ Series D เมื่อมกราคมประเมินมูลค่าบริษัทไว้ 1.15 พันล้านดอลลาร์ ส่วนรอบใหม่ไม่เปิดเผยมูลค่า",
        highlight: { label: "ตัวเลขสำคัญ", value: "94%", note: "สัดส่วนหุ้นสหรัฐแบบ Token ที่ Alpaca เป็นผู้เคลียร์หรือดูแล custody โดยถือหุ้นอ้างอิงกว่า $1.5B — เป็นคอขวดรายเดียวของตลาดที่โตราว 3,000% ในปี 2025" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "The Block", time: "4d", url: "https://www.theblock.co/post/408036/japans-largest-security-token-platform-moves-nearly-3-billion-to-avalanche-blockchain",
      hlType: "data",
      en: {
        title: ["Japan's Progmat moves ", "¥452B of security tokens", " from Corda to a public chain"],
        body: "Progmat, Japan's largest security token platform, moved its entire platform — every active tokenized asset, worth over ¥452 billion (about $2.7 billion) — off a private, permissioned Corda 5 ledger and onto a dedicated public Avalanche Layer 1. The migration, first announced in February, finished on schedule with zero disruption; rights-transfer processing is now roughly 3–5 times faster with finality under two seconds. Progmat was built inside Mitsubishi UFJ Trust and Banking before spinning out in October 2023 and is backed by Mizuho, the Tokyo Stock Exchange and SBI.",
        highlight: { label: "By the numbers", value: "¥452B", note: "of live tokenized assets migrated to a public chain by the platform holding ~53% of Japan's security-token market and 64.6% of issuance value" },
      },
      th: {
        title: ["Progmat ญี่ปุ่นย้าย ", "security token ¥452 พันล้าน", " จาก Corda สู่เชนสาธารณะ"],
        body: "Progmat แพลตฟอร์ม security token ที่ใหญ่ที่สุดของญี่ปุ่น ย้ายทั้งแพลตฟอร์ม — สินทรัพย์แบบ Token ที่ใช้งานอยู่ทั้งหมด มูลค่ากว่า 452 พันล้านเยน (ราว 2.7 พันล้านดอลลาร์) — ออกจากบัญชีแยกประเภทแบบ permissioned บน Corda 5 ไปยัง Avalanche Layer 1 สาธารณะที่จัดไว้เฉพาะ การย้ายซึ่งประกาศครั้งแรกเมื่อกุมภาพันธ์ เสร็จตามกำหนดโดยไม่มีการหยุดชะงัก และทำให้การประมวลผลโอนสิทธิ์เร็วขึ้นราว 3–5 เท่า พร้อม finality ต่ำกว่า 2 วินาที ทั้งนี้ Progmat ถูกพัฒนาขึ้นภายใน Mitsubishi UFJ Trust and Banking ก่อนแยกออกมาเมื่อ ต.ค. 2023 และมี Mizuho, ตลาดหลักทรัพย์โตเกียว และ SBI หนุนหลัง",
        highlight: { label: "ตัวเลขสำคัญ", value: "¥452B", note: "มูลค่าสินทรัพย์แบบ Token ที่ใช้งานจริงและถูกย้ายขึ้นเชนสาธารณะ โดยแพลตฟอร์มที่ครอง ~53% ของตลาด security token ญี่ปุ่น และ 64.6% ของมูลค่าการออก" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "4d", url: "https://www.coindesk.com/business/2026/07/13/sbi-holdings-blockchain-initiative-pivots-to-solana-for-tokenization-stablecoin-issuance",
      hlType: "takeaway",
      en: {
        title: ["SBI renames its R3 venture ", "SBI Solana Global", ""],
        body: "SBI Solana Global — previously SBI R3 Japan — is pivoting from the permissioned Corda blockchain to Solana, aiming to connect Japan's domestic market to global liquidity. The joint venture counts Sumitomo Mitsui Financial Group among its shareholders and now includes the Solana Foundation, which is taking an equity stake. SBI lists the venture's functions as supporting stablecoin issuance and distribution, structuring and distributing tokenized RWAs, and developing payment infrastructure for AI agents. SBI also agreed last month to buy Japanese exchange Bitbank for around $289 million.",
        highlight: { label: "Key takeaway", note: "Two of Japan's biggest tokenization vehicles abandoned permissioned enterprise chains in the same week — Progmat to Avalanche, SBI to Solana. The institutional verdict is landing on public networks." },
      },
      th: {
        title: ["SBI เปลี่ยนชื่อกิจการร่วมค้า R3 เป็น ", "SBI Solana Global", ""],
        body: "SBI Solana Global (เดิมชื่อ SBI R3 Japan) เปลี่ยนทิศจาก Blockchain แบบ permissioned อย่าง Corda มาสู่ Solana โดยตั้งเป้าเชื่อมตลาดในประเทศญี่ปุ่นเข้ากับสภาพคล่องระดับโลก กิจการร่วมค้านี้มี Sumitomo Mitsui Financial Group (SMFG) เป็นหนึ่งในผู้ถือหุ้น และล่าสุดมี Solana Foundation เข้าถือหุ้นด้วย ทั้งนี้ SBI ระบุหน้าที่ของกิจการไว้ 3 ด้าน: สนับสนุนการออกและกระจาย Stablecoin, จัดโครงสร้างและกระจาย RWA แบบ Token และพัฒนาโครงสร้างการชำระเงินสำหรับ AI agent นอกจากนี้เมื่อเดือนที่แล้ว SBI ยังตกลงซื้อกระดานเทรดญี่ปุ่น Bitbank ราว 289 ล้านดอลลาร์",
        highlight: { label: "สรุปสำคัญ", note: "สองหัวหอก Tokenization ที่ใหญ่ที่สุดของญี่ปุ่นทิ้งเชนองค์กรแบบ permissioned ในสัปดาห์เดียวกัน — Progmat ไป Avalanche, SBI ไป Solana คำตัดสินของฝั่งสถาบันกำลังลงเอยที่เครือข่ายสาธารณะ" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/07/15/stripe-mounts-blockbuster-usd53-billion-bid-to-buy-paypal",
      hlType: "takeaway",
      en: {
        title: ["Stripe and Advent mount a ", "$53B bid for PayPal", ""],
        body: "Stripe, together with private equity firm Advent International, made a $60.50-a-share offer for PayPal — a premium of about 28% over PayPal's Tuesday close of $47.37 — according to a Financial Times report. PayPal shares surged more than 18% to $56.10 in pre-market trading, and the FT reported that PayPal has been reluctant to engage with the offer thus far. Stripe is separately building the Tempo mainnet, has integrated Circle's USDC, and joined the Open USD venture alongside Mastercard, Visa and BlackRock.",
        highlight: { label: "Key takeaway", note: "A reported, unsolicited bid — not an agreed deal — but if it landed, one owner would hold stablecoin orchestration, a purpose-built settlement chain and a regulated dollar token at once." },
      },
      th: {
        title: ["Stripe จับมือ Advent ยื่นซื้อ ", "PayPal $53 พันล้าน", ""],
        body: "Stripe ร่วมกับกองทุน private equity อย่าง Advent International ยื่นข้อเสนอซื้อ PayPal ที่ราคา 60.50 ดอลลาร์ต่อหุ้น — คิดเป็นพรีเมียมราว 28% จากราคาปิดวันอังคารที่ 47.37 ดอลลาร์ — ตามรายงานของ Financial Times ส่งผลให้หุ้น PayPal พุ่งกว่า 18% แตะ 56.10 ดอลลาร์ในการซื้อขายก่อนเปิดตลาด ทั้งนี้ FT รายงานว่า PayPal ยังลังเลที่จะเจรจากับข้อเสนอนี้ ขณะที่ Stripe กำลังสร้างเชน Tempo ของตัวเอง ผนวก Stablecoin USDC ของ Circle เข้าระบบแล้ว และเข้าร่วมโครงการ Open USD ร่วมกับ Mastercard, Visa และ BlackRock",
        highlight: { label: "สรุปสำคัญ", note: "เป็นข้อเสนอที่ยังไม่ได้ตกลงกันและมาจากรายงานข่าว ไม่ใช่ดีลที่ปิดแล้ว — แต่ถ้าสำเร็จ เจ้าของรายเดียวจะถือทั้งระบบจัดการ Stablecoin, เชนชำระราคาที่สร้างเอง และ Token ดอลลาร์ภายใต้การกำกับ พร้อมกันทั้งหมด" },
      },
    },
    {
      topic: "fintech", source: "Circle", time: "1w", url: "https://www.circle.com/pressroom/circle-receives-final-occ-approval-to-establish-national-trust-bank",
      hlType: "quote",
      en: {
        title: ["Circle wins OCC approval for a ", "national trust bank", ""],
        body: "Circle Internet Group (NYSE: CRCL) received approval from the US Office of the Comptroller of the Currency to establish First National Digital Currency Bank, N.A. On opening it will offer fiduciary digital-asset custody for Circle and its affiliates, and under its business plan may eventually extend custody to a limited number of institutional customers, focusing on banks and other financial institutions. The charter is designed to enable future capabilities including management of the USDC Reserve, which would bring those operations under federal regulatory oversight.",
        highlight: { note: "Federal oversight of our trust bank sets a new standard for transparency, governance, and scale.", by: "Jeremy Allaire, Co-Founder, Chairman and CEO, Circle" },
      },
      th: {
        title: ["Circle ได้ไฟเขียว OCC ตั้ง ", "national trust bank", ""],
        body: "Circle Internet Group (NYSE: CRCL) ได้รับอนุมัติจาก Office of the Comptroller of the Currency (OCC) ของสหรัฐ ให้จัดตั้ง First National Digital Currency Bank, N.A. ซึ่งเป็น national trust bank เมื่อเปิดดำเนินการจะให้บริการ custody สินทรัพย์ดิจิทัลในฐานะ fiduciary แก่ Circle และบริษัทในเครือ และตามแผนธุรกิจอาจขยายบริการ custody ไปยังลูกค้าสถาบันจำนวนจำกัดในอนาคต โดยเน้นกลุ่มธนาคารและสถาบันการเงิน ทั้งนี้ใบอนุญาตถูกออกแบบให้รองรับความสามารถในอนาคต รวมถึงการบริหารเงินสำรองของ USDC ซึ่งจะทำให้การดำเนินงานส่วนนั้นเข้าสู่การกำกับดูแลระดับรัฐบาลกลาง",
        highlight: { note: "การกำกับดูแลระดับรัฐบาลกลางเหนือ trust bank ของเรา คือการตั้งมาตรฐานใหม่ด้านความโปร่งใส ธรรมาภิบาล และสเกล", by: "Jeremy Allaire, Co-Founder, Chairman and CEO, Circle" },
      },
    },
    {
      topic: "fintech", source: "Visa", time: "1d", url: "https://investor.visa.com/news/news-details/2026/Visa-Introduces-Platform-for-Stablecoin-Minting-Movement-and-Management/default.aspx",
      hlType: "know",
      en: {
        title: ["Visa opens a ", "stablecoin platform", " and leads with Open USD"],
        body: "Visa announced the Visa Stablecoin Platform (VSP), an enterprise platform giving financial institutions, fintechs and crypto natives stablecoin capabilities in a single Visa-managed environment — including on-chain wallet infrastructure through a new Wallet-as-a-Service, dual-control approval for sensitive workflows, comprehensive audit logging, secure passkeys and allow lists. VSP integrates into the Open Standard to give institutions direct access to Open USD, and is interoperable with Visa's existing stablecoin settlement, cards and money movement. It is initially in beta with select clients.",
        highlight: { label: "Know this", note: "Visa is turning Open USD from a consortium announcement into an issuable product inside banks' existing Visa workflows — distribution is the layer single-issuer stablecoins never had." },
      },
      th: {
        title: ["Visa เปิด ", "แพลตฟอร์ม Stablecoin", " นำร่องด้วย Open USD"],
        body: "Visa เปิดตัว Visa Stablecoin Platform (VSP) แพลตฟอร์มระดับองค์กรที่ให้สถาบันการเงิน Fintech และผู้เล่นสายคริปโตเข้าถึงความสามารถด้าน Stablecoin ในสภาพแวดล้อมเดียวที่ Visa ดูแล — ครอบคลุมโครงสร้าง wallet บนเชนผ่านบริการ Wallet-as-a-Service ใหม่, ระบบอนุมัติสองชั้นสำหรับงานที่อ่อนไหว, บันทึกการตรวจสอบครบถ้วน, passkey และ allow list โดย VSP เชื่อมเข้ากับ Open Standard ให้สถาบันเข้าถึง Open USD ได้โดยตรง และทำงานร่วมกับบริการ Stablecoin เดิมของ Visa ทั้งการชำระราคา บัตร และการโอนเงิน ขณะนี้อยู่ในช่วง beta กับลูกค้าที่คัดเลือก",
        highlight: { label: "รู้ไว้", note: "Visa กำลังเปลี่ยน Open USD จากข่าวประกาศของกลุ่มพันธมิตร ให้กลายเป็นผลิตภัณฑ์ที่ออกได้จริงภายในเวิร์กโฟลว์ Visa ที่ธนาคารใช้อยู่ — ช่องทางกระจายคือชั้นที่ Stablecoin แบบผู้ออกรายเดียวไม่เคยมี" },
      },
    },
    {
      topic: "fintech", esg: true, source: "The Block", time: "3d", url: "https://www.theblock.co/post/408180/south-korea-blockchain-economy-h2-2026",
      hlType: "know",
      en: {
        title: ["South Korea writes ", "on-chain carbon credits", " into its national roadmap"],
        body: "In its economic growth strategy for the second half of 2026, presented at a State Council meeting, South Korea's Ministry of Finance and Economy said it will 'explore ways to manage and trade Global Voluntary Carbon Market (GVCM) credits on the blockchain, in cooperation with international organizations.' The carbon workstream sits inside a wider blockchain push: the Digital Asset Basic Act, including rules for won-pegged stablecoins; a 2027 pilot tokenizing government bonds linked to an institutional CBDC, with the Bank of Korea examining interoperability; a legal basis for cross-border stablecoin transactions; and Capital Markets Act revisions to enable Korea's first spot crypto ETFs.",
        highlight: { label: "Know this", note: "The verb is 'explore' — this is a sovereign roadmap item, not a commitment. But it puts voluntary carbon credits on-chain alongside CBDC and tokenized bonds rather than in a sustainability annex." },
      },
      th: {
        title: ["เกาหลีใต้บรรจุ ", "คาร์บอนเครดิตบนเชน", " ในโรดแมประดับชาติ"],
        body: "ในยุทธศาสตร์การเติบโตทางเศรษฐกิจครึ่งหลังของปี 2026 ที่เสนอต่อที่ประชุมคณะรัฐมนตรี กระทรวงการคลังและเศรษฐกิจของเกาหลีใต้ระบุว่าจะ 'ศึกษาแนวทางบริหารจัดการและซื้อขายคาร์บอนเครดิตในตลาดสมัครใจระดับโลก (GVCM) บน Blockchain โดยร่วมมือกับองค์กรระหว่างประเทศ' โดยงานด้านคาร์บอนอยู่ในแผน Blockchain ที่ใหญ่กว่า ซึ่งรวมถึงกฎหมาย Digital Asset Basic Act ที่ครอบคลุมเกณฑ์ Stablecoin อิงเงินวอน, โครงการนำร่องปี 2027 ที่จะ Tokenize พันธบัตรรัฐบาลเชื่อมกับ CBDC ระดับสถาบัน โดยธนาคารกลางเกาหลีจะศึกษาการทำงานร่วมข้ามเชน, การวางฐานกฎหมายสำหรับธุรกรรม Stablecoin ข้ามพรมแดน และการแก้กฎหมายตลาดทุนเพื่อเปิดทาง spot crypto ETF ตัวแรกของประเทศ",
        highlight: { label: "รู้ไว้", note: "คำที่ใช้คือ 'ศึกษา' — ยังเป็นรายการในโรดแมป ไม่ใช่ข้อผูกพัน แต่ก็เป็นการวางคาร์บอนเครดิตบนเชนไว้เคียงข้าง CBDC และพันธบัตรแบบ Token แทนที่จะอยู่ในภาคผนวกด้านความยั่งยืน" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", esg: true, source: "DITTO / InfoQuest", time: "1d", url: "https://www.ryt9.com/s/iq/12830587",
      hlType: "data",
      en: {
        title: ["Blu Green Token ", "sells out at ฿480M", " — Bitkub listing July 20"],
        body: "DITTO closed the Blu Green Token deal at its full target: all 400 million tokens at ฿1.20 apiece, raising ฿480 million, after a subscription window that ran July 3–13. Subscribers spanned high-net-worth and retail investors plus several large corporate groups — notably major food-sector businesses and their supply chains. Issued by DITTO subsidiary Siam TC Technology with SCBX-group ICO portal Token X, BLU begins secondary trading on the Bitkub digital-asset exchange on July 20.",
        highlight: { label: "By the numbers", value: "฿480M", note: "Thailand's first carbon-credit investment token placed in full — 400 million tokens — with secondary trading opening on Bitkub on July 20" },
      },
      th: {
        title: ["Blu Green Token ", "ขายหมด ฿480 ล้าน", " — เข้าเทรด Bitkub 20 ก.ค."],
        body: "DITTO ปิดดีล Blu Green Token ได้ครบเป้าที่วางไว้: 400 ล้าน Token ที่ราคา 1.20 บาทต่อ Token ระดมทุนได้ 480 ล้านบาทเต็มเพดาน หลังเปิดจองซื้อระหว่างวันที่ 3–13 ก.ค. โดยผู้จองซื้อมีทั้งนักลงทุนรายใหญ่ นักลงทุนรายย่อย และกลุ่มธุรกิจขนาดใหญ่หลายราย โดยเฉพาะกลุ่มธุรกิจอาหารรายใหญ่และซัพพลายเชน ทั้งนี้ผู้ออกคือ บริษัท สยาม ทีซี เทคโนโลยี (STCT) ในเครือ DITTO ผ่าน ICO Portal อย่าง Token X ในกลุ่ม SCBX และ BLU จะเริ่มซื้อขายในตลาดรองบนศูนย์ซื้อขายสินทรัพย์ดิจิทัล Bitkub วันที่ 20 ก.ค. นี้",
        highlight: { label: "ตัวเลขสำคัญ", value: "฿480M", note: "Token เพื่อการลงทุนหนุนด้วยคาร์บอนเครดิตตัวแรกของไทย ขายได้ครบ 400 ล้าน Token เต็มจำนวน และเปิดเทรดตลาดรองบน Bitkub 20 ก.ค." },
      },
    },
    {
      topic: "set", source: "MTS Gold / efinanceThai", time: "1d", url: "https://www.efinancethai.com/crypto/news/mts-gold-investment-token-subscription-july-august",
      hlType: "data",
      en: {
        title: ["MTS Gold readies a ", "฿2,000M gold investment token", " via kubix"],
        body: "Mae Tong Suk Central, part of the MTS GOLD group, will offer Thailand's first digital token for investing in the gold bullion business, raising up to ฿2,000 million through ICO portal kubix. Tokens are priced at ฿1,000 with a 10-token (฿10,000) minimum and a ฿300,000 cap per retail investor; subscription runs July 24 to August 31 for a three-year project, via the kubix and orbix Trade apps. Returns come in two parts — a fixed 3% per year paid annually, plus a special return from the gold price spread — with principal returned in full at maturity.",
        highlight: { label: "By the numbers", value: "฿2,000M", note: "target raise — over four times Blu Green's — with at least 90% of proceeds invested in 96.5% gold bullion as the underlying asset" },
      },
      th: {
        title: ["MTS Gold เตรียม ", "Token ทองคำ ฿2,000 ล้าน", " ผ่าน kubix"],
        body: "บริษัท แม่ทองสุกเซ็นทรัล ในกลุ่ม MTS GOLD เตรียมเสนอขาย Digital Token เพื่อการลงทุนในธุรกิจค้าทองคำแท่งครั้งแรกในไทย วงเงินไม่เกิน 2,000 ล้านบาท ผ่าน ICO Portal อย่าง kubix ราคา 1,000 บาทต่อ Token จองซื้อขั้นต่ำ 10 Token (10,000 บาท) และจำกัดรายย่อยไม่เกิน 300,000 บาทต่อราย เปิดจอง 24 ก.ค. – 31 ส.ค. อายุโครงการ 3 ปี ผ่านแอป kubix และ orbix Trade โดยผลตอบแทนมี 2 ส่วน — คงที่ 3% ต่อปีจ่ายปีละครั้ง บวกผลตอบแทนพิเศษจากส่วนต่างราคาทองคำ — พร้อมคืนเงินต้นเต็มจำนวนเมื่อครบอายุโครงการ",
        highlight: { label: "ตัวเลขสำคัญ", value: "฿2,000M", note: "วงเงินระดมทุนเป้าหมาย มากกว่า Blu Green กว่า 4 เท่า โดยนำเงินไม่น้อยกว่า 90% ไปลงทุนซื้อทองคำแท่ง 96.5% เป็นสินทรัพย์อ้างอิง" },
      },
    },
    {
      topic: "set", source: "SEC / efinanceThai", time: "4d", url: "https://www.efinancethai.com/crypto/news/sec-thailand-tokenized-fund-mmf-securities-tokeniz",
      hlType: "quote",
      en: {
        title: ["Thai SEC expects the first ", "tokenized fund", " by year-end"],
        body: "The SEC expects Thailand could see its first tokenized mutual fund late this year or early next, with money market funds lined up as the most ready pilot product for securities tokenization. Rules supporting the sale and redemption of tokenized fund units took effect on April 1, and blockchain would let investors transact and receive money in real time, or T+0. Tokenized bonds still need to go through the sandbox or use a central depository mechanism; the draft electronic securities act awaiting parliament is expected within one to two years.",
        highlight: { note: "Thailand could see its first mutual fund issuing units in token form — a Tokenized Fund — by the end of this year, or at the latest early next year.", by: "Napanuanphan Phavasan, Assistant Secretary-General, Financial Innovation and Digital Technology, SEC Thailand" },
      },
      th: {
        title: ["ก.ล.ต. คาด ", "กองทุนรวมแบบ Token", " กองแรกเกิดปลายปีนี้"],
        body: "ก.ล.ต. คาดว่าไทยอาจได้เห็น Tokenized Fund กองแรกภายในปลายปีนี้หรืออย่างช้าต้นปีหน้า โดยวางกองทุนรวมตลาดเงิน (MMF) เป็นผลิตภัณฑ์ที่พร้อมที่สุดสำหรับนำร่อง Securities Tokenization ทั้งนี้เกณฑ์รองรับการขายและรับซื้อคืนหน่วยลงทุนที่ออกในรูปแบบ Token มีผลบังคับใช้ตั้งแต่ 1 เม.ย. ที่ผ่านมา และ Blockchain จะช่วยให้ผู้ลงทุนทำรายการและรับเงินได้แบบเรียลไทม์ หรือ T+0 ส่วนหุ้นกู้แบบ Token ยังต้องผ่าน Sandbox หรือใช้กลไก central depository ก่อน ขณะที่ร่าง พ.ร.บ. หลักทรัพย์อิเล็กทรอนิกส์ที่รอผ่านสภาคาดว่าจะใช้ได้ภายใน 1–2 ปี",
        highlight: { note: "ประเทศไทยอาจได้เห็นกองทุนรวมที่ออกหน่วยลงทุนในรูปแบบโทเคน หรือ Tokenized Fund กองแรกภายในช่วงปลายปีนี้ หรืออย่างช้าที่สุดในช่วงต้นปีหน้า", by: "นภนวลพรรณ ภวสันต์ ผู้ช่วยเลขาธิการสายนวัตกรรมทางการเงินและเทคโนโลยีดิจิทัล ก.ล.ต." },
      },
    },
    {
      topic: "set", source: "BOT / InfoQuest", time: "6d", url: "https://www.ryt9.com/s/iq/12829342",
      hlType: "takeaway",
      en: {
        title: ["BOT works with the SEC to track ", "abnormal USDT volumes", ""],
        body: "Bank of Thailand Governor Vitai Ratanakorn said the central bank is working with the SEC to supervise USDT trading with abnormal volumes, as part of a wider crackdown on grey money. Existing controls on cash withdrawals of ฿5 million and above cut cash withdrawals by about 35% in their first two to three months; the BOT will extend the regime to cash deposits and exchanges above ฿5 million, requiring customers to document the source of funds, expected around October–November or the fourth quarter. On gold, large transactions are capped at ฿50 million a day and monthly gold withdrawals have fallen from roughly 4,000 kg to about 700 kg.",
        highlight: { label: "Key takeaway", note: "It is the first time the BOT governor has publicly tied digital-asset flows to the national grey-money agenda — pointing to more compliance load for Thai exchanges in Q4, on top of the Travel Rule." },
      },
      th: {
        title: ["ธปท. จับมือ ก.ล.ต. ตรวจ ", "ธุรกรรม USDT ผิดปกติ", ""],
        body: "วิทัย รัตนากร ผู้ว่าการ BOT ระบุว่าธนาคารกลางกำลังร่วมกับ SEC กำกับดูแลการซื้อขาย USDT ที่มีวอลุ่มผิดปกติ ซึ่งเป็นส่วนหนึ่งของการสกัดเงินเทา โดยมาตรการคุมการถอนเงินสดตั้งแต่ 5 ล้านบาทขึ้นไปที่บังคับใช้แล้ว ทำให้ยอดถอนเงินสดลดลงราว 35% ในช่วง 2–3 เดือนแรก และ ธปท. เตรียมขยายไปยังการฝากและแลกเงินสดเกิน 5 ล้านบาท โดยผู้ฝากต้องชี้แจงและแสดงที่มาของเงิน คาดเริ่ม ต.ค.–พ.ย. หรือไตรมาส 4 ด้านทองคำ จำกัดธุรกรรมรายใหญ่ไม่เกิน 50 ล้านบาทต่อวัน และยอดเบิกทองต่อเดือนลดจากราว 4,000 กิโลกรัม เหลือราว 700 กิโลกรัม",
        highlight: { label: "สรุปสำคัญ", note: "เป็นครั้งแรกที่ผู้ว่าการ ธปท. ผูกกระแสเงินในตลาดสินทรัพย์ดิจิทัลเข้ากับวาระสกัดเงินเทาระดับชาติอย่างชัดเจน — ส่งสัญญาณภาระ compliance ที่เพิ่มขึ้นของกระดานเทรดไทยในไตรมาส 4 ต่อจากเกณฑ์ Travel Rule" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#BA6AF2", url: "https://www.coindesk.com/policy/2026/07/14/u-s-uk-move-to-align-rules-for-tokenized-finance-across-world-s-largest-financial-markets",
      en: { strong: "The US and UK Treasuries", text: " published a 10-point roadmap from the Transatlantic Taskforce for Markets of the Future — proposing an industry-led group for cross-border tokenization pilots and examining whether stablecoins or tokenized money market funds could serve as collateral.", src: "CoinDesk" },
      th: { strong: "กระทรวงการคลังสหรัฐและ UK", text: " เผยแพร่ roadmap 10 ข้อจาก Transatlantic Taskforce for Markets of the Future — เสนอตั้งกลุ่มนำโดยภาคเอกชนเพื่อทดลอง Tokenization ข้ามพรมแดน และศึกษาว่า Stablecoin หรือกองทุนตลาดเงินแบบ Token จะใช้เป็นหลักประกันได้หรือไม่", src: "CoinDesk" } },
    { color: "#C9C400", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260714~8cd07d9d45.en.html",
      en: { strong: "The ECB", text: " picked 36 payment service providers from over 50 applicants for its digital euro pilot, which starts in the second half of 2027 and runs 12 months across the ECB and 19 national central banks.", src: "ECB" },
      th: { strong: "ECB", text: " คัดผู้ให้บริการชำระเงิน 36 รายจากผู้สมัครกว่า 50 ราย สำหรับโครงการนำร่อง digital euro ที่จะเริ่มครึ่งหลังปี 2027 เป็นเวลา 12 เดือน ครอบคลุม ECB และธนาคารกลาง 19 ประเทศ", src: "ECB" } },
    { color: "#C9C400", url: "https://www.theblock.co/post/408688/citadel-securities-invests-400-million-crypto-com-20-billion-valuation",
      en: { strong: "Citadel Securities", text: " made a strategic $400M investment in Crypto.com at a $20B valuation — the exchange's first institutional round in its decade-long history — to accelerate its push into tokenized securities and derivatives.", src: "The Block" },
      th: { strong: "Citadel Securities", text: " ลงทุนเชิงกลยุทธ์ $400M ใน Crypto.com ที่มูลค่ากิจการ $20B — เป็นรอบระดมทุนสถาบันครั้งแรกในรอบสิบปีของกระดานนี้ — เพื่อเร่งขยายสู่หลักทรัพย์แบบ Token และอนุพันธ์", src: "The Block" } },
    { color: "#22C55E", url: "https://verra.org/verra-registry-transition/",
      en: { strong: "Verra", text: " will take the world's largest voluntary carbon registry offline from 5:30pm ET on July 23 until 7:00am ET on July 27 for its migration — issuance, labeling and cancellation requests had to be filed by July 17.", src: "Verra" },
      th: { strong: "Verra", text: " จะปิดระบบทะเบียนคาร์บอนภาคสมัครใจที่ใหญ่ที่สุดในโลก ตั้งแต่ 23 ก.ค. เวลา 17.30 น. ET ถึง 27 ก.ค. เวลา 07.00 น. ET เพื่อย้ายระบบ — คำขอ issuance, labeling และ cancellation ต้องยื่นภายใน 17 ก.ค.", src: "Verra" } },
    { color: "#CE5FFC", url: "https://www.ledgerinsights.com/tokenization-hsbc-issues-its-first-digitally-native-structured-product/",
      en: { strong: "HSBC", text: " privately placed its first digitally native structured product — USD notes issued directly on blockchain out of Hong Kong — with Marketnode acting as both tokenisation agent and digital paying agent.", src: "Ledger Insights" },
      th: { strong: "HSBC", text: " เสนอขายแบบเฉพาะเจาะจงสำหรับ structured product ที่ออกบนเชนโดยตรงเป็นครั้งแรก — ตราสารสกุลดอลลาร์ที่ออกจากฮ่องกง — โดยมี Marketnode เป็นทั้ง tokenisation agent และ digital paying agent", src: "Ledger Insights" } },
  ],
});
