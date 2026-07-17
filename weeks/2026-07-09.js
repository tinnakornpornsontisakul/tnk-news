// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 4 · 4–9 ก.ค. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน)
//  ราคาเหรียญอ่านจาก CoinGecko 9 ก.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (9 ก.ค. 2026)
//  esg:true = ข่าวหมวด Green/ESG (โผล่ในแท็บ ESG แบบข้ามหมวด · ยังคงอยู่หมวดเดิมด้วย)
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 4,
    date: "2026-07-09",
    dateEN: "Jul 4–9, 2026",
    dateTH: "4–9 ก.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (9 ก.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$33.3B", delta: "+9.5%", up: true,
      points: [30.4, 30.6, 31.2, 31.8, 32.2, 32.5, 33.0, 33.1, 33.2, 33.3],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 88 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$115.83",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+1.0%", up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.1%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.0%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.14",   chg: "+0.1%", up: true,  bar: 48 },
      // ข) Tokenized Gold (ทองคำ ~$4,092/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,092",   chg: "+0.9%", up: true,  bar: 86 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,089",   chg: "+0.8%", up: true,  bar: 84 },
      // ค) RWA platform / protocol tokens (สัปดาห์นี้ผสม — บางตัวเด้ง บางตัวย่อ)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.319",   chg: "-4.0%",  up: false, bar: 58 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.54",    chg: "+4.9%",  up: true,  bar: 58 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.192",   chg: "-4.4%",  up: false, bar: 38 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0365",  chg: "+1.2%",  up: true,  bar: 35 },
      { sym: "PLUME", name: "Plume",            price: "$0.0102",  chg: "+2.3%",  up: true,  bar: 32 },
      { sym: "ENA",   name: "Ethena",           price: "$0.0768",  chg: "+0.9%",  up: true,  bar: 48 },
      { sym: "SKY",   name: "Sky",              price: "$0.0563",  chg: "+7.1%",  up: true,  bar: 48 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0500",  chg: "-1.1%",  up: false, bar: 28 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.158",   chg: "+1.5%",  up: true,  bar: 46 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0191",  chg: "-2.3%",  up: false, bar: 24 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "-0.5%",  up: false, bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "GDF / ISDA",
    time: "2d",
    url: "https://www.ledgerinsights.com/blackrock-citi-46-firms-in-tokenized-mmf-collateral-trials-with-gdf-and-isda/",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["Tokenized money-market funds cleared as ", "US institutional collateral", ""],
      body: [
        "Global Digital Finance (GDF) and ISDA published research concluding that tokenized money-market funds (TMMFs) can serve as institutional collateral in the US under all three main tokenization models. The collateral-mobility working group drew more than 300 participants from over 120 firms — including BlackRock, Citi, JPMorgan and Franklin Templeton, plus derivatives clearers CME and ICE — with 48 firms running near-production sandbox simulations via Ownera.",
        "The models fit existing US legal and regulatory frameworks across ten dimensions, with two gaps: money-market funds are ineligible as variation margin for cleared derivatives (cash only), and the SEC has issued no guidance on tokenized securities for uncleared initial margin. It is the most authoritative US green-light yet for mobilizing on-chain funds like BUIDL as working capital-markets plumbing.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["กองทุนตลาดเงินแบบ Token ผ่านเกณฑ์ใช้เป็น ", "หลักประกันสถาบันสหรัฐ", ""],
      body: [
        "Global Digital Finance (GDF) และ ISDA เผยแพร่รายงานสรุปว่า กองทุนตลาดเงินแบบ Token (Tokenized Money Market Fund) ใช้เป็นหลักประกันระดับสถาบันในสหรัฐได้ ภายใต้โมเดล Tokenization หลักทั้ง 3 รูปแบบ โดยกลุ่มทำงานด้าน collateral mobility มีผู้ร่วมกว่า 300 คนจากบริษัทกว่า 120 แห่ง — รวมถึง BlackRock, Citi, JPMorgan และ Franklin Templeton พร้อมสำนักหักบัญชีอนุพันธ์ CME และ ICE — และมี 48 บริษัทร่วมทดสอบในแซนด์บ็อกซ์ระดับใกล้ใช้งานจริงผ่าน Ownera",
        "โมเดลทั้งหมดสอดคล้องกับกรอบกฎหมายและการกำกับดูแลของสหรัฐใน 10 มิติ เหลือ 2 ช่องว่าง: กองทุนตลาดเงินยังใช้เป็น variation margin ของอนุพันธ์ที่ผ่านสำนักหักบัญชีไม่ได้ (ต้องเป็นเงินสด) และ SEC ยังไม่ออกแนวทางเรื่องหลักทรัพย์แบบ Token สำหรับ initial margin ที่ไม่ผ่านสำนักหักบัญชี ถือเป็นสัญญาณไฟเขียวที่หนักแน่นที่สุดในสหรัฐสำหรับการนำกองทุนบนเชนอย่าง BUIDL มาใช้เป็นหลักประกันที่ทำงานได้จริง",
      ],
    },
    hlType: "takeaway",
    highlight: {
      en: { label: "Key takeaway", note: "Tokenized money-market funds can now be mobilized as institutional collateral in the US — validated across all three tokenization models by BlackRock, Citi, JPMorgan, CME and ICE." },
      th: { label: "สรุปสำคัญ", note: "กองทุนตลาดเงินแบบ Token ใช้เป็นหลักประกันระดับสถาบันในสหรัฐได้แล้ว — ผ่านการตรวจสอบครบทั้ง 3 โมเดล Tokenization โดย BlackRock, Citi, JPMorgan, CME และ ICE" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/markets/2026/07/07/vanguard-opens-search-for-digital-assets-leader-in-sign-of-evolving-crypto-strategy",
      hlType: "data",
      en: {
        title: ["Vanguard, the ", "$10T crypto holdout", ", builds a digital-assets team"],
        body: "Vanguard — which manages roughly $10 trillion and has been one of crypto's most vocal skeptics — is recruiting a head of digital assets within its Personal Wealth division to lead strategy across tokenization, stablecoins, digital wallets, custody and blockchain-enabled settlement. The firm still says it has 'no plans to issue its own crypto investment products,' but in December it began letting brokerage clients trade crypto ETFs and mutual funds; CEO Salim Ramji joined from BlackRock in July 2024.",
        highlight: { label: "By the numbers", value: "$10T", note: "AUM of the industry's biggest crypto holdout now hiring a dedicated digital-assets and tokenization leader" },
      },
      th: {
        title: ["Vanguard ผู้จัดการเงิน ", "$10T ที่เคยปฏิเสธคริปโต", " ตั้งทีม Digital Asset"],
        body: "Vanguard — ผู้บริหารสินทรัพย์ราว 10 ล้านล้านดอลลาร์ และเป็นหนึ่งในผู้คลางแคลงคริปโตที่ชัดเจนที่สุด — เปิดรับสมัครหัวหน้าฝ่าย Digital Asset ในสาย Personal Wealth เพื่อนำกลยุทธ์ด้าน Tokenization, Stablecoin, digital wallet, custody และการชำระราคาบนเชน แม้บริษัทจะยังยืนยันว่า 'ไม่มีแผนออกผลิตภัณฑ์คริปโตของตัวเอง' แต่เมื่อเดือนธันวาคมก็เริ่มเปิดให้ลูกค้าเทรดคริปโต ETF และกองทุนรวมได้ ทั้งนี้ CEO Salim Ramji ย้ายมาจาก BlackRock เมื่อ ก.ค. 2024",
        highlight: { label: "ตัวเลขสำคัญ", value: "$10T", note: "ขนาด AUM ของผู้เล่นที่ต้านคริปโตหนักที่สุดในวงการ ที่กำลังตั้งหัวหน้าฝ่าย Digital Asset และ Tokenization โดยเฉพาะ" },
      },
    },
    {
      topic: "rwa", esg: true, source: "Veea (NASDAQ: VEEA)", time: "3d", url: "https://www.globenewswire.com/news-release/2026/07/07/3322834/0/en/Kayan-Announces-US-Regulated-ATS-Sets-August-3-2026-Listing-Date.html",
      hlType: "know",
      en: {
        title: ["Natural-capital tokens set an ", "Aug 3 debut on a SEC-regulated ATS", ""],
        body: "The Kayan Project and Veea Inc. (NASDAQ: VEEA) set August 3 to list the $KYN token and independently verified commodity tokens — representing certified carbon, biodiversity and blue-carbon credits — on Panoptes PBC, a marketplace operating under SEC Regulation ATS for qualified non-US institutional and accredited investors. The tokens are backed by an 8.68 million-hectare concession of rainforest, peatland and mangrove in Kalimantan, Indonesia held under a 60-year agreement, with the $KYN raise structured as a SAFT under Regulation S.",
        highlight: { label: "Know this", note: "'Natural-capital tokens' turn certified carbon, biodiversity and blue-carbon credits into tradable instruments — here routed to a SEC-regulated ATS rather than an unregulated carbon bridge." },
      },
      th: {
        title: ["Token ทุนธรรมชาติเตรียมเทรด ", "3 ส.ค. บน ATS ที่ SEC กำกับ", ""],
        body: "โครงการ Kayan ร่วมกับ Veea Inc. (NASDAQ: VEEA) กำหนดวันที่ 3 ส.ค. นำ Token $KYN และ commodity token ที่ผ่านการตรวจสอบอิสระ — แทนคาร์บอนเครดิต เครดิตความหลากหลายทางชีวภาพ และ blue carbon — เข้าเทรดบน Panoptes PBC ตลาดที่ทำงานภายใต้ SEC Regulation ATS สำหรับผู้ลงทุนสถาบันและ accredited นอกสหรัฐ โดย Token หนุนหลังด้วยพื้นที่สัมปทานป่าฝน พรุ และป่าชายเลน 8.68 ล้านเฮกตาร์ในกาลิมันตัน อินโดนีเซีย ภายใต้สัญญา 60 ปี และระดมทุน $KYN แบบ SAFT ตาม Regulation S",
        highlight: { label: "รู้ไว้", note: "'Token ทุนธรรมชาติ' คือการแปลงคาร์บอนเครดิต เครดิตชีวภาพ และ blue carbon ที่ผ่านการรับรองให้ซื้อขายได้ — ครั้งนี้ส่งเข้าตลาดที่ SEC กำกับ ไม่ใช่ carbon bridge นอกการกำกับ" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/markets/2026/07/07/spacex-ipo-powers-record-usd3-86-billion-in-tokenized-equities-trading-in-june",
      hlType: "data",
      en: {
        title: ["SpaceX drives a record ", "$3.86B in tokenized-equities trading", ""],
        body: "Tokenized equities traded a record $3.86 billion in June, up 145% from May and a 15th straight month of growth, per CoinDesk Data. Tokenized SpaceX shares alone accounted for $1.19 billion — about 31% of all activity — after SpaceX's $75 billion IPO, the largest on record, valued it near $1.8 trillion. Backpack Securities' SPCX led at $1.08 billion and xStocks' SPCXx reached $852 million; sector market cap hit a record $1.53 billion.",
        highlight: { label: "By the numbers", value: "$3.86B", note: "record monthly tokenized-equities volume (+145% MoM) — SpaceX tokens alone were ~31% of it" },
      },
      th: {
        title: ["SpaceX ดันสถิติเทรดหุ้นแบบ Token ", "แตะ $3.86B", ""],
        body: "หุ้นแบบ Token มีมูลค่าซื้อขายทำสถิติ 3.86 พันล้านดอลลาร์ในเดือนมิถุนายน เพิ่มขึ้น 145% จากพฤษภาคม และเป็นการโตต่อเนื่องเดือนที่ 15 ตามข้อมูล CoinDesk Data โดยหุ้น SpaceX แบบ Token ตัวเดียวคิดเป็น 1.19 พันล้านดอลลาร์ — ราว 31% ของทั้งหมด — หลัง SpaceX ทำ IPO มูลค่า 7.5 หมื่นล้านดอลลาร์ (ใหญ่สุดเท่าที่เคยมี) ประเมินมูลค่าบริษัทใกล้ 1.8 ล้านล้านดอลลาร์ ด้าน SPCX ของ Backpack Securities นำที่ 1.08 พันล้าน และ SPCXx ของ xStocks แตะ 852 ล้าน ส่วนมูลค่าตลาดรวมของหมวดทำสถิติ 1.53 พันล้านดอลลาร์",
        highlight: { label: "ตัวเลขสำคัญ", value: "$3.86B", note: "มูลค่าเทรดหุ้นแบบ Token รายเดือนสูงสุดเป็นประวัติการณ์ (+145% MoM) — เฉพาะ Token SpaceX คิดเป็น ~31%" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "1d", url: "https://www.coindesk.com/business/2026/07/08/dinari-tzero-join-forces-on-turnkey-platform-for-tokenized-u-s-equities",
      hlType: "quote",
      en: {
        title: ["Dinari and tZERO build a ", "turnkey tokenized-stock stack", " for brokers"],
        body: "Dinari and broker-dealer tZERO are teaming up to give broker-dealers a turnkey platform for tokenized US equities, combining Dinari's tokenized-stock platform with tZERO's brokerage, custody, clearing and settlement — so firms can launch blockchain-based equity offerings without assembling the infrastructure themselves. Dinari won US broker-dealer registration in June 2025, making it the first US platform cleared to legally offer blockchain-based shares domestically.",
        highlight: { note: "Tokenized equities won't reach mainstream adoption until broker-dealers can offer them as naturally as they offer traditional securities.", by: "Gabriel Otte, CEO, Dinari" },
      },
      th: {
        title: ["Dinari จับมือ tZERO ทำ ", "แพลตฟอร์มหุ้น Token สำเร็จรูป", " ให้โบรกเกอร์"],
        body: "Dinari ร่วมกับโบรกเกอร์-ดีลเลอร์ tZERO เปิดแพลตฟอร์มหุ้นสหรัฐแบบ Token สำเร็จรูป (turnkey) สำหรับโบรกเกอร์-ดีลเลอร์ โดยรวมแพลตฟอร์มหุ้น Token ของ Dinari เข้ากับระบบ brokerage, custody, การหักบัญชีและชำระราคาของ tZERO ให้บริษัทเปิดขายหุ้นบนเชนได้โดยไม่ต้องประกอบโครงสร้างเอง ทั้งนี้ Dinari ได้รับใบทะเบียนโบรกเกอร์-ดีลเลอร์สหรัฐเมื่อ มิ.ย. 2025 เป็นแพลตฟอร์มสหรัฐรายแรกที่เสนอขายหุ้นบนเชนในประเทศได้ตามกฎหมาย",
        highlight: { note: "หุ้นแบบ Token จะยังไม่แพร่หลายจนกว่าโบรกเกอร์-ดีลเลอร์จะเสนอขายได้เป็นธรรมชาติเท่ากับหลักทรัพย์ทั่วไป", by: "Gabriel Otte, CEO, Dinari" },
      },
    },
    {
      topic: "tokenization", source: "Ledger Insights", time: "1d", url: "https://www.ledgerinsights.com/ssc-plans-stablecoins-tokenized-deposit-for-tokenized-fund-settlement/",
      hlType: "data",
      en: {
        title: ["SS&C, running ", "$45T in assets", ", to settle tokenized funds in digital cash"],
        body: "SS&C — the largest third-party transfer agent for mutual funds, with more than $45 trillion in assets running on its technology — plans to settle tokenized funds using regulated digital cash, namely stablecoins and tokenized commercial-bank deposits, to enable atomic delivery-versus-payment. The move builds on its live tokenized-fund issuance and its roughly $1 billion 2025 acquisition of distribution network Calastone; plans are early-stage with no networks named yet.",
        highlight: { label: "By the numbers", value: "$45T", note: "assets running on SS&C's platform — now heading toward on-chain cash settlement for tokenized funds" },
      },
      th: {
        title: ["SS&C ผู้ดูแลสินทรัพย์ ", "$45T", " เตรียมชำระกองทุน Token ด้วยเงินดิจิทัล"],
        body: "SS&C — transfer agent สำหรับกองทุนรวมที่ใหญ่ที่สุด มีสินทรัพย์กว่า 45 ล้านล้านดอลลาร์วิ่งอยู่บนเทคโนโลยีของบริษัท — เตรียมชำระราคากองทุนแบบ Token ด้วยเงินดิจิทัลภายใต้การกำกับ ทั้ง Stablecoin และเงินฝากธนาคารพาณิชย์แบบ Token เพื่อให้เกิดการชำระแบบ atomic (payment-versus-payment) ต่อยอดจากการออกกองทุน Token ที่ใช้งานจริงแล้ว และการเข้าซื้อเครือข่ายกระจายกองทุน Calastone มูลค่าราว 1 พันล้านดอลลาร์เมื่อปี 2025 โดยแผนยังเป็นระยะเริ่มต้นและยังไม่ระบุเครือข่ายที่จะใช้",
        highlight: { label: "ตัวเลขสำคัญ", value: "$45T", note: "มูลค่าสินทรัพย์ที่วิ่งบนแพลตฟอร์ม SS&C — กำลังมุ่งสู่การชำระกองทุน Token ด้วยเงินสดบนเชน" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "Ledger Insights", time: "1d", url: "https://www.ledgerinsights.com/google-cloud-hiring-points-to-a-tokenized-deposit-push-for-gcul/",
      hlType: "takeaway",
      en: {
        title: ["Google Cloud's ", "GCUL ledger", " gears up for tokenized deposits"],
        body: "Google is hiring senior business-development leads for Google Cloud Universal Ledger (GCUL), its permissioned blockchain for financial services, signaling a push into tokenized deposits. The roles span the US and either London or Zurich — hinting at three currencies (dollar, sterling, Swiss franc) — and aim to build network density across market makers. GCUL, first unveiled via a CME deal for tokenized-deposit margin, is positioned as 'credibly neutral' infrastructure with a nod to 'agentic finance.'",
        highlight: { label: "Key takeaway", note: "A Big Tech-operated, bank-oriented settlement ledger is emerging as a rival to both bank-consortium chains and stablecoins for institutional B2B payments." },
      },
      th: {
        title: ["เชน ", "GCUL ของ Google Cloud", " เตรียมลุยเงินฝากแบบ Token"],
        body: "Google เปิดรับหัวหน้าฝ่ายพัฒนาธุรกิจอาวุโสให้ Google Cloud Universal Ledger (GCUL) ซึ่งเป็น permissioned chain สำหรับภาคการเงิน ส่งสัญญาณรุกตลาดเงินฝากแบบ Token โดยตำแหน่งกระจายทั้งในสหรัฐและลอนดอนหรือซูริก — บ่งชี้ 3 สกุลเงิน (ดอลลาร์ ปอนด์ ฟรังก์สวิส) — และมุ่งสร้างความหนาแน่นของเครือข่ายผ่าน market maker ทั้งนี้ GCUL ซึ่งเปิดตัวครั้งแรกผ่านดีลกับ CME เพื่อใช้เงินฝาก Token วาง margin ถูกวางเป็นโครงสร้าง 'credibly neutral' พร้อมกล่าวถึง 'agentic finance'",
        highlight: { label: "สรุปสำคัญ", note: "เชนชำระราคาที่ดำเนินการโดย Big Tech และออกแบบเพื่อธนาคาร กำลังกลายเป็นคู่แข่งของทั้งเชนกลุ่มธนาคารและ Stablecoin ในตลาดชำระเงิน B2B ระดับสถาบัน" },
      },
    },
    {
      topic: "blockchain", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/sbi-daiwa-securities-plant-settlement-platform-for-tokenized-issuance/",
      hlType: "know",
      en: {
        title: ["SBI and Daiwa plan ", "USDC-settled cross-border", " security tokens"],
        body: "SBI Securities and Daiwa Securities are developing a settlement platform to let foreign investors buy Japanese security tokens, with Singapore as the first market and settlement in USDC (a yen stablecoin possibly later). Built on the BOOSTRY blockchain — chosen over Progmat — the initiative is endorsed by the Japan Securities Dealers Association and targets a 2027 launch, spanning real estate, corporate bonds, and even tokenized anime and sake.",
        highlight: { label: "Know this", note: "Cross-border distribution is the missing piece for tokenized-securities liquidity — using a stablecoin for delivery-versus-payment settlement between jurisdictions." },
      },
      th: {
        title: ["SBI–Daiwa เตรียม ", "ขาย security token ข้ามพรมแดน", " ชำระด้วย USDC"],
        body: "SBI Securities และ Daiwa Securities กำลังพัฒนาแพลตฟอร์มชำระราคาให้ผู้ลงทุนต่างชาติซื้อ security token ของญี่ปุ่นได้ โดยเริ่มที่สิงคโปร์เป็นตลาดแรก และชำระราคาด้วย Stablecoin USDC (อาจเพิ่มเยนแบบ Stablecoin ภายหลัง) สร้างบน Blockchain BOOSTRY — เลือกแทน Progmat — โครงการได้รับการรับรองจาก Japan Securities Dealers Association ตั้งเป้าเปิดใช้ปี 2027 ครอบคลุมอสังหาริมทรัพย์ หุ้นกู้ ไปจนถึง Token สายอนิเมะและสาเก",
        highlight: { label: "รู้ไว้", note: "การกระจายข้ามพรมแดนคือชิ้นส่วนที่ขาดหายของสภาพคล่อง security token — ใช้ Stablecoin ชำระราคาแบบ payment-versus-payment ระหว่างประเทศ" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/07/07/coinbase-secures-uk-authorization-to-offer-traditional-investments-alongside-crypto",
      hlType: "takeaway",
      en: {
        title: ["Coinbase wins ", "UK FCA license", " to add equities and derivatives"],
        body: "Coinbase secured FCA authorization to offer investment services in the UK — a MiFID-type license — letting UK retail customers trade equities on Coinbase for the first time and giving institutional and advanced traders crypto, equity and commodity perpetual futures. It sits alongside Coinbase's existing UK e-money and cryptoasset registrations and advances its 'Everything Exchange' push, arriving well before the UK's full crypto framework takes effect in October 2027.",
        highlight: { label: "Key takeaway", note: "A mega-cap crypto exchange moving into FCA-regulated equities and derivatives blurs the crypto/TradFi line — with an ~18-month head start before the UK's 2027 crypto rules." },
      },
      th: {
        title: ["Coinbase คว้า ", "ใบอนุญาต UK FCA", " เพิ่มหุ้นและอนุพันธ์"],
        body: "Coinbase ได้รับอนุมัติจาก FCA ให้บริการด้านการลงทุนในสหราชอาณาจักร — ใบอนุญาตแบบ MiFID — เปิดให้ลูกค้ารายย่อยในสหราชอาณาจักรเทรดหุ้นบน Coinbase ได้เป็นครั้งแรก และให้ผู้ลงทุนสถาบัน/ระดับสูงเข้าถึง perpetual futures ทั้งคริปโต หุ้น และสินค้าโภคภัณฑ์ ใบอนุญาตนี้เสริมกับใบ e-money และทะเบียนคริปโตเดิมของ Coinbase และต่อยอดวิสัยทัศน์ 'Everything Exchange' โดยมาก่อนที่กรอบกำกับคริปโตเต็มรูปแบบของสหราชอาณาจักรจะมีผลใน ต.ค. 2027",
        highlight: { label: "สรุปสำคัญ", note: "กระดานคริปโตรายใหญ่รุกเข้าสู่หุ้นและอนุพันธ์ภายใต้การกำกับของ FCA ทำให้เส้นแบ่งคริปโต–TradFi จางลง พร้อมนำหน้า ~18 เดือนก่อนกฎคริปโตปี 2027 ของสหราชอาณาจักร" },
      },
    },
    {
      topic: "fintech", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/policy/2026/07/06/ripple-s-preliminary-crypto-asset-provider-license-in-luxembourg-upgraded-to-fully-compliant",
      hlType: "know",
      en: {
        title: ["Ripple upgrades to a ", "full MiCA CASP license", " across the EEA"],
        body: "Luxembourg's CSSF upgraded Ripple's preliminary Crypto-Asset Service Provider authorization to a full MiCA license, clearing it to provide regulated cryptoasset services passportable across all 30 EEA countries. It lands days after MiCA's transitional grace period expired on July 1 — pushing unlicensed rivals out — and adds to the full CSSF e-money license Ripple secured in February.",
        highlight: { label: "Know this", note: "A full MiCA CASP license 'passports' across the EEA — one authorization to serve all 30 countries — the gate a firm like Ripple must clear to scale regulated services in Europe." },
      },
      th: {
        title: ["Ripple อัปเป็น ", "ใบอนุญาต MiCA CASP เต็มรูปแบบ", " ทั่ว EEA"],
        body: "CSSF ลักเซมเบิร์กอัปเกรดใบอนุญาต Crypto-Asset Service Provider เบื้องต้นของ Ripple เป็นใบ MiCA เต็มรูปแบบ เปิดทางให้บริการสินทรัพย์คริปโตภายใต้การกำกับแบบ passport ได้ทั่ว 30 ประเทศ EEA โดยมาหลังช่วงเปลี่ยนผ่านของ MiCA สิ้นสุดเมื่อ 1 ก.ค. เพียงไม่กี่วัน ซึ่งผลักผู้เล่นที่ไม่มีใบอนุญาตออกไป และต่อยอดจากใบ e-money เต็มรูปแบบที่ Ripple ได้จาก CSSF เมื่อเดือนกุมภาพันธ์",
        highlight: { label: "รู้ไว้", note: "ใบ MiCA CASP เต็มรูปแบบ 'passport' ได้ทั่ว EEA — ขออนุญาตครั้งเดียวให้บริการได้ทั้ง 30 ประเทศ — เป็นด่านที่บริษัทอย่าง Ripple ต้องผ่านก่อนขยายบริการภายใต้การกำกับในยุโรป" },
      },
    },
    {
      topic: "fintech", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/business/2026/07/07/crypto-exchange-kraken-is-trying-to-become-a-bank-in-europe",
      hlType: "quote",
      en: {
        title: ["Kraken pursues a ", "full EU banking license", " in Lithuania"],
        body: "Kraken's parent Payward is pursuing a full ('specialized') banking license from the Bank of Lithuania, which would make Kraken the only crypto exchange to hold such a designation. The license mirrors the one Lithuania granted Revolut in 2018 — enabling full current accounts, consumer lending and stock trading across the EEA. Kraken declined to comment; the Bank of Lithuania said its licensing process is confidential.",
        highlight: { note: "The plan for the next 10 years is to get all of these licenses, either through buying an existing business, or going de novo in each region and starting from scratch.", by: "Arjun Sethi, co-CEO, Payward (Kraken)" },
      },
      th: {
        title: ["Kraken ขอ ", "ใบอนุญาตธนาคารเต็มรูปแบบใน EU", " ที่ลิทัวเนีย"],
        body: "Payward บริษัทแม่ของ Kraken กำลังขอใบอนุญาตธนาคารเต็มรูปแบบ ('specialized') จากธนาคารกลางลิทัวเนีย ซึ่งจะทำให้ Kraken เป็นกระดานคริปโตรายเดียวที่ถือใบอนุญาตประเภทนี้ ใบอนุญาตนี้เหมือนกับที่ลิทัวเนียให้ Revolut เมื่อปี 2018 — เปิดให้ทำบัญชีกระแสรายวันเต็มรูปแบบ สินเชื่อผู้บริโภค และเทรดหุ้นทั่ว EEA ทั้งนี้ Kraken ปฏิเสธให้ความเห็น ส่วนธนาคารกลางลิทัวเนียระบุว่ากระบวนการพิจารณาเป็นความลับ",
        highlight: { note: "แผน 10 ปีข้างหน้าคือได้ใบอนุญาตเหล่านี้ให้ครบ ไม่ว่าจะด้วยการซื้อธุรกิจที่มีอยู่ หรือเริ่มจากศูนย์เองในแต่ละภูมิภาค", by: "Arjun Sethi, co-CEO, Payward (Kraken)" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", esg: true, source: "DITTO / InfoQuest", time: "now", url: "https://www.infoquest.co.th/2026/607587",
      hlType: "quote",
      en: {
        title: ["Blu Green Token's ", "฿480M subscription is live", " this week"],
        body: "DITTO's Blu Green Token (BLU) — Thailand's first carbon-credit investment token — is in its live subscription window this week, open through the Token X app from July 3 until 15:30 on July 13 at ฿1.20 per token (up to ฿480 million). Issued by DITTO subsidiary Siam TC Technology with InnovestX as agent, it is backed by 17,531 rai of mangrove registered under T-VER and Premium T-VER, targeting a base-case IRR of 10.35% with a 3% guaranteed floor.",
        highlight: { note: "This project has been under continuous development for three years, over 17,531 rai of mangrove that can absorb and store CO2 at 4 to 10 times the rate of tropical rainforest.", by: "Thakorn Rattanakamolporn, CEO, DITTO" },
      },
      th: {
        title: ["Blu Green Token ", "เปิดจอง ฿480 ล้าน", " สดสัปดาห์นี้"],
        body: "Blu Green Token (BLU) ของ DITTO — Token เพื่อการลงทุนหนุนด้วยคาร์บอนเครดิตตัวแรกของไทย — อยู่ในช่วงเปิดจองสดสัปดาห์นี้ ผ่านแอป Token X ตั้งแต่ 3 ก.ค. ถึง 13 ก.ค. เวลา 15.30 น. ที่ราคา ฿1.20 ต่อ Token (ไม่เกิน ฿480 ล้าน) ออกโดย Siam TC Technology บริษัทย่อยของ DITTO มี InnovestX เป็นตัวแทน หนุนหลังด้วยป่าชายเลน 17,531 ไร่ที่ขึ้นทะเบียน T-VER และ Premium T-VER ตั้งเป้า IRR กรณีฐาน 10.35% พร้อมการันตีขั้นต่ำ 3%",
        highlight: { note: "โครงการนี้ได้มีการพัฒนาอย่างต่อเนื่องมาแล้ว 3 ปี มีพื้นที่ป่าชายเลนที่ใช้เป็นทรัพย์สินอ้างอิงกว่า 17,531 ไร่ ซึ่งดูดซับและกักเก็บก๊าซคาร์บอนไดออกไซด์ได้สูงกว่าป่าฝนเขตร้อน 4–10 เท่า", by: "ฐกร รัตนกมลพร (Thakorn Rattanakamolporn), CEO, DITTO" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#C9C400", url: "https://www.coindesk.com/business/2026/07/07/edx-markets-raises-usd76-million-in-funding-round-led-by-sbi-holdings",
      en: { strong: "EDX Markets", text: " raised a $76M Series C led by Japan's SBI Holdings; the institution-only marketplace (backed by Citadel Securities, Fidelity, Schwab, Paradigm and Sequoia) has also applied for a US OCC national trust bank charter.", src: "CoinDesk" },
      th: { strong: "EDX Markets", text: " ระดมทุน Series C $76M นำโดย SBI Holdings ของญี่ปุ่น โดยกระดานเฉพาะสถาบันรายนี้ (หนุนหลังโดย Citadel Securities, Fidelity, Schwab, Paradigm และ Sequoia) ยังยื่นขอใบอนุญาต national trust bank กับ OCC สหรัฐ", src: "CoinDesk" } },
    { color: "#BA6AF2", url: "https://www.theblock.co/post/407632/binance-wallet-plume-yield-vault-invesco-bitwise-funds",
      en: { strong: "Binance Wallet", text: " integrated Plume's nBASIS vault — its first structured-income RWA product — giving users on-chain access to Invesco's USTB and Bitwise's USCC tokenized funds, both yielding about 3.5%.", src: "The Block" },
      th: { strong: "Binance Wallet", text: " เพิ่ม vault nBASIS ของ Plume — ผลิตภัณฑ์ RWA แบบมีรายได้โครงสร้างตัวแรกของกระเป๋า — ให้ผู้ใช้เข้าถึงกองทุน Token USTB ของ Invesco และ USCC ของ Bitwise บนเชน ผลตอบแทนราว 3.5%", src: "The Block" } },
    { color: "#2BB6AE", url: "https://www.coindesk.com/tech/2026/07/08/xrp-ledger-s-new-upgrade-is-here-but-not-everyone-s-on-board-yet",
      en: { strong: "XRP Ledger", text: " v3.2.0 (xrpld) reached ~89% of default validators — above the 80% activation threshold — unlocking vaults, permissioned DEXs and on-chain lending, though only ~43% of ~833 total nodes have upgraded.", src: "CoinDesk" },
      th: { strong: "XRP Ledger", text: " v3.2.0 (xrpld) มีผู้ตรวจสอบหลักรันแล้ว ~89% เกินเกณฑ์เปิดใช้ 80% ปลดล็อก vault, permissioned DEX และการปล่อยกู้บนเชน แม้โหนดรวมทั้งเครือข่าย ~833 ตัวจะอัปเกรดเพียง ~43%", src: "CoinDesk" } },
  ],
});
