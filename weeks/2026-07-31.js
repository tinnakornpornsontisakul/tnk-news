// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 6 · 18–31 ก.ค. 2026  (ฉบับ catch-up 2 สัปดาห์)
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน · แหล่งไทยใช้เฉพาะที่อนุญาต)
//  ราคาเหรียญอ่านจาก CoinGecko 31 ก.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (31 ก.ค. 2026)
//  esg:true = ข่าวหมวด Green/ESG (โผล่ใน section ESG ทั้งในแท็บ ESG และหน้า "ทั้งหมด")
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 6,
    date: "2026-07-31",
    dateEN: "Jul 18–31, 2026",
    dateTH: "18–31 ก.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (31 ก.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$36.8B", delta: "+5.8%", up: true,
      points: [34.8, 34.7, 35.1, 35.5, 35.9, 36.2, 36.4, 36.6, 36.7, 36.8],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 90 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$116.06",  chg: "+0.1%", up: true,  bar: 68 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "-0.1%", up: false, bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.1%", up: true,  bar: 92 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.16",   chg: "+0.1%", up: true,  bar: 50 },
      // ข) Tokenized Gold (ทองคำฟื้นเล็กน้อย ~$4,057/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,057",   chg: "+0.7%", up: true,  bar: 84 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,053",   chg: "+0.5%", up: true,  bar: 85 },
      // ค) RWA platform / protocol tokens (สัปดาห์ risk-off — กลุ่มสินเชื่อ/โปรโตคอลร่วงแรง)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.405",   chg: "+0.6%",  up: true,  bar: 64 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.42",    chg: "-10.8%", up: false, bar: 52 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.176",   chg: "-3.3%",  up: false, bar: 34 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0325",  chg: "-10.4%", up: false, bar: 32 },
      { sym: "PLUME", name: "Plume",            price: "$0.0113",  chg: "-1.4%",  up: false, bar: 33 },
      { sym: "ENA",   name: "Ethena",           price: "$0.082",   chg: "-9.9%",  up: false, bar: 50 },
      { sym: "SKY",   name: "Sky",              price: "$0.0574",  chg: "+1.2%",  up: true,  bar: 48 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0325",  chg: "-32.2%", up: false, bar: 22 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.159",   chg: "-10.2%", up: false, bar: 46 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0188",  chg: "-6.2%",  up: false, bar: 24 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "+0.7%",  up: true,  bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "CoinDesk",
    time: "2d",
    url: "https://www.coindesk.com/business/2026/07/29/bny-targets-usd8-6-trillion-transfer-agency-market-on-blockchain-rails",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["BNY puts its ", "$8.6 trillion transfer-agency business", " on-chain"],
      body: [
        "BNY — the 242-year-old custodian with more than $59 trillion in assets under custody and administration — launched a blockchain-based Digital Transfer Agent that moves fund books and records on-chain, creating a single on-chain record of ownership for tokenized funds and cutting out layers of intermediaries. Its conventional transfer-agency business services about $8.6 trillion in assets across 7.6 million accounts, and the new service runs alongside it.",
        "Initial clients read like the front rank of asset management: Baillie Gifford, a BNY client with more than $261 billion under management, will use the service, while BlackRock and BNY's Dreyfus money-market and cash-management unit are expected to deploy it for planned funds. Moving the record-of-ownership layer on-chain is the plumbing that turns tokenized funds from experiments into routine market infrastructure.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["BNY นำธุรกิจ ", "transfer agency $8.6 ล้านล้าน", " ขึ้นเชน"],
      body: [
        "BNY ผู้ดูแลทรัพย์สินอายุ 242 ปีที่มีสินทรัพย์ภายใต้ custody และการบริหารกว่า 59 ล้านล้านดอลลาร์ เปิดตัว Digital Transfer Agent บน Blockchain ที่ย้ายทะเบียนและบันทึกของกองทุนขึ้นเชน สร้างทะเบียนความเป็นเจ้าของบนเชนชุดเดียวสำหรับกองทุนแบบ Token และตัดตัวกลางหลายชั้นออก โดยธุรกิจ transfer agency แบบเดิมของ BNY ให้บริการสินทรัพย์ราว 8.6 ล้านล้านดอลลาร์ใน 7.6 ล้านบัญชี และบริการใหม่นี้ทำงานคู่ขนานไปกับของเดิม",
        "รายชื่อลูกค้าชุดแรกคือแถวหน้าของวงการจัดการสินทรัพย์: Baillie Gifford ลูกค้าของ BNY ที่บริหารเงินกว่า 2.61 แสนล้านดอลลาร์ จะใช้บริการนี้ ส่วน BlackRock และหน่วย Dreyfus ของ BNY คาดว่าจะนำไปใช้กับกองทุนที่วางแผนไว้ การย้ายชั้นทะเบียนความเป็นเจ้าของขึ้นเชน คือโครงสร้างพื้นฐานที่เปลี่ยนกองทุนแบบ Token จากการทดลองให้กลายเป็นโครงสร้างตลาดปกติ",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "We think of BNY as modernizing a function that sits behind every single fund transaction by bringing the books and records onchain.", by: "Carolyn Weinberg, Chief Product and Innovation Officer, BNY" },
      th: { note: "เรามอง BNY ว่ากำลังปรับให้ทันสมัยกับฟังก์ชันที่อยู่เบื้องหลังทุกธุรกรรมกองทุน ด้วยการนำทะเบียนและบันทึกขึ้นเชน", by: "Carolyn Weinberg, Chief Product and Innovation Officer, BNY" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "CoinDesk", time: "1w", url: "https://www.coindesk.com/business/2026/07/23/abu-dhabi-s-mubadala-capital-joins-tokenization-push-as-coinbase-takes-stake-in-onchain-fund",
      hlType: "data",
      en: {
        title: ["Abu Dhabi's Mubadala tokenizes a ", "private-markets fund", " — Coinbase buys in"],
        body: "Mubadala Capital — the Abu Dhabi asset manager that oversees about $600 billion and administers over $430 billion — launched a tokenized version of one of its private-markets strategies for qualified investors, using UAE-based tokenization firm KAIO. The fund is live on Base, Solana and Sui and has already drawn about $75 million on-chain; Coinbase is taking exposure to it on its own corporate balance sheet, an early case of a listed crypto firm investing directly in a tokenized private-markets product.",
        highlight: { label: "By the numbers", value: "$75M", note: "on-chain assets already in the fund — pushing tokenization past Treasuries and money funds into institutional private markets" },
      },
      th: {
        title: ["Mubadala อาบูดาบี แปลง ", "กองทุน private markets เป็น Token", " — Coinbase ร่วมลง"],
        body: "Mubadala Capital ผู้จัดการสินทรัพย์แห่งอาบูดาบีที่ดูแลเงินราว 6 แสนล้านดอลลาร์และบริหารกว่า 4.3 แสนล้านดอลลาร์ เปิดตัวกลยุทธ์ private markets เวอร์ชันแบบ Token สำหรับผู้ลงทุนที่มีคุณสมบัติ โดยใช้บริษัท Tokenization สัญชาติ UAE ชื่อ KAIO กองทุนนี้อยู่บน Base, Solana และ Sui และมีสินทรัพย์บนเชนแล้วราว 75 ล้านดอลลาร์ ขณะที่ Coinbase เข้าถือ exposure ในกองทุนบนงบดุลของบริษัทเอง นับเป็นตัวอย่างแรก ๆ ที่บริษัทคริปโตจดทะเบียนลงทุนตรงในผลิตภัณฑ์ private markets แบบ Token",
        highlight: { label: "ตัวเลขสำคัญ", value: "$75M", note: "สินทรัพย์บนเชนที่ไหลเข้ากองทุนแล้ว — ดัน Tokenization ข้ามจากพันธบัตรและกองทุนตลาดเงินสู่ private markets ระดับสถาบัน" },
      },
    },
    {
      topic: "rwa", source: "CoinDesk", time: "4d", url: "https://www.coindesk.com/business/2026/07/27/securitize-builds-wall-street-credentials-with-sec-adviser-license-as-tokenization-expands",
      hlType: "takeaway",
      en: {
        title: ["Securitize adds an ", "SEC investment-adviser license", " to its stack"],
        body: "Securitize said its subsidiary Securitize Capital registered with the SEC as an investment adviser, adding to a stack that already includes a broker-dealer, an ATS, a transfer agent and fund administration. The move positions the BUIDL issuer to run tokenized vaults and on-chain strategies for asset managers — landing days after SEC Commissioner Hester Peirce noted that some crypto vaults and lending strategies could fall under adviser rules. Securitize's own SECZ shares are down nearly 40% through July.",
        highlight: { label: "Key takeaway", note: "The dominant tokenization platform is assembling the full regulated license stack to run on-chain asset management end-to-end — the plumbing beneath BlackRock- and Apollo-scale tokenized funds." },
      },
      th: {
        title: ["Securitize เพิ่มใบอนุญาต ", "ที่ปรึกษาการลงทุนจาก SEC", " เข้าพอร์ต"],
        body: "Securitize เผยว่าบริษัทย่อย Securitize Capital ได้จดทะเบียนกับ SEC เป็นที่ปรึกษาการลงทุน (investment adviser) เพิ่มจากใบอนุญาตที่มีอยู่แล้วทั้ง broker-dealer, ATS, transfer agent และการบริหารกองทุน ความเคลื่อนไหวนี้ทำให้ผู้ออก BUIDL รายนี้พร้อมบริหาร vault แบบ Token และกลยุทธ์บนเชนให้ผู้จัดการสินทรัพย์ — มาไม่กี่วันหลัง Hester Peirce กรรมการ SEC ระบุว่า vault คริปโตและกลยุทธ์ปล่อยกู้บางแบบอาจเข้าข่ายกฎที่ปรึกษาการลงทุน ทั้งนี้หุ้น SECZ ของ Securitize เองปรับลงเกือบ 40% ตลอดเดือนกรกฎาคม",
        highlight: { label: "สรุปสำคัญ", note: "แพลตฟอร์ม Tokenization เจ้าตลาดกำลังประกอบชุดใบอนุญาตครบวงจร เพื่อบริหารสินทรัพย์บนเชนแบบครบจบ — เป็นโครงสร้างที่รองรับกองทุน Token ระดับ BlackRock และ Apollo" },
      },
    },
    {
      topic: "rwa", esg: true, source: "Verra / Carbon Herald", time: "4d", url: "https://carbonherald.com/verra-launches-rebuilt-carbon-registry-with-sp-global-in-biggest-platform-upgrade-in-its-history/",
      hlType: "know",
      en: {
        title: ["Verra's rebuilt ", "carbon registry goes live", " with S&P Global"],
        body: "Verra, the world's largest voluntary carbon standard, brought its next-generation registry — rebuilt with S&P Global Energy — live on July 27, calling it the biggest platform upgrade in its history. The migration consolidated more than 5,900 projects, 10,500 account holders, 1.4 billion carbon credits and 125,000 documents onto one cloud platform, with transaction-ready APIs and integration to exchanges, brokers and marketplaces coming in future phases. The launch itself ships no blockchain or tokenization layer.",
        highlight: { label: "Know this", note: "The registry is the record of truth every carbon credit traces back to — so its API and exchange roadmap is the rail that any credible tokenized-carbon product must ultimately anchor to." },
      },
      th: {
        title: ["ทะเบียนคาร์บอนโฉมใหม่ของ Verra ", "เปิดใช้จริง", " ร่วมกับ S&P Global"],
        body: "Verra มาตรฐานคาร์บอนภาคสมัครใจที่ใหญ่ที่สุดในโลก เปิดใช้ระบบทะเบียน (registry) รุ่นใหม่ที่พัฒนาร่วมกับ S&P Global Energy เมื่อ 27 ก.ค. โดยเรียกว่าเป็นการยกเครื่องแพลตฟอร์มครั้งใหญ่ที่สุดในประวัติศาสตร์ การย้ายระบบรวมกว่า 5,900 โครงการ ผู้ถือบัญชี 10,500 ราย คาร์บอนเครดิต 1.4 พันล้านหน่วย และเอกสาร 125,000 ชิ้นไว้บนแพลตฟอร์มคลาวด์เดียว ส่วน API แบบพร้อมทำธุรกรรมและการเชื่อมกับกระดานเทรด โบรกเกอร์ และตลาดต่าง ๆ จะตามมาในเฟสถัดไป ทั้งนี้ตัวการเปิดใช้ยังไม่มีชั้น Blockchain หรือ Tokenization",
        highlight: { label: "รู้ไว้", note: "ทะเบียนคือแหล่งความจริงที่คาร์บอนเครดิตทุกหน่วยอ้างอิงกลับไป — แผน API และการเชื่อมกระดานของมันจึงเป็นรางที่ผลิตภัณฑ์คาร์บอนแบบ Token น่าเชื่อถือทุกตัวต้องยึดโยงในที่สุด" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CoinDesk", time: "1w", url: "https://www.coindesk.com/business/2026/07/22/kraken-parent-expands-tokenized-stocks-to-hong-kong-uk-and-south-korea-equities",
      hlType: "quote",
      en: {
        title: ["Kraken's xStocks goes ", "global beyond US equities", ""],
        body: "Payward, Kraken's parent, is extending its xStocks tokenized-equity platform past US stocks through a partnership with infrastructure provider GTN — starting with Hong Kong-listed shares, then UK, European and South Korean equities, subject to regulatory approval. GTN, which connects to 90-plus markets, will handle execution, custody and recordkeeping for the underlying shares; the products stay unavailable to US investors. xStocks already spans 500-plus tokenized securities, $35 billion in volume and ~200,000 holders.",
        highlight: { note: "The biggest asset class that hasn't been tokenized yet is the rest of the world. One asset at a time, we're bringing truly global capital markets onchain until geography becomes irrelevant to investing.", by: "Mark Greenberg, Global Head of Payward Services" },
      },
      th: {
        title: ["xStocks ของ Kraken บุก ", "หุ้นทั่วโลกนอกสหรัฐ", ""],
        body: "Payward บริษัทแม่ของ Kraken ขยายแพลตฟอร์มหุ้นแบบ Token 'xStocks' ให้เกินหุ้นสหรัฐ ผ่านความร่วมมือกับผู้ให้บริการโครงสร้างพื้นฐาน GTN — เริ่มที่หุ้นจดทะเบียนฮ่องกง แล้วตามด้วยหุ้นสหราชอาณาจักร ยุโรป และเกาหลีใต้ ขึ้นกับการอนุมัติของหน่วยงานกำกับ โดย GTN ซึ่งเชื่อมกับตลาดกว่า 90 แห่ง จะดูแลการส่งคำสั่ง custody และการเก็บบันทึกของหุ้นอ้างอิง ผลิตภัณฑ์ยังไม่เปิดให้ผู้ลงทุนสหรัฐ ทั้งนี้ xStocks มีหลักทรัพย์แบบ Token กว่า 500 รายการ มูลค่าซื้อขายกว่า 3.5 หมื่นล้านดอลลาร์ และผู้ถือราว 200,000 ราย",
        highlight: { note: "สินทรัพย์กลุ่มใหญ่ที่สุดที่ยังไม่ถูก Tokenize คือ 'ส่วนที่เหลือของโลก' เรากำลังนำตลาดทุนทั่วโลกขึ้นเชนทีละสินทรัพย์ จนกว่าภูมิศาสตร์จะไม่มีความหมายต่อการลงทุน", by: "Mark Greenberg, Global Head of Payward Services" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/business/2026/07/28/ondo-drops-tokenized-asset-blockchain-plans-for-private-high-speed-trading-network",
      hlType: "takeaway",
      en: {
        title: ["Ondo scraps its own Layer-1 for a ", "private execution network", ""],
        body: "Ondo Finance abandoned its planned Ondo Chain Layer-1 (unveiled February 2025) in favor of Ondo Network, a private high-speed trading venue that separates trade execution from settlement — orders execute privately while final asset transfers settle on public blockchains. Its first app, Ondo Perps, will let users trade perpetual futures using tokenized assets as collateral. Ondo holds about $2.6 billion in tokenized US Treasury products and ~$850 million in tokenized equities, and its broker-dealer just won FINRA approval for regulated tokenized-securities markets.",
        highlight: { label: "Key takeaway", note: "A top RWA issuer concluding that institutions want private, high-speed execution with public-chain settlement — not a public L1 — is a real signal for how tokenized-securities market structure evolves." },
      },
      th: {
        title: ["Ondo ทิ้งเชน Layer-1 ของตัวเอง หันไป ", "เครือข่ายประมวลผลแบบส่วนตัว", ""],
        body: "Ondo Finance ยกเลิกแผนสร้างเชน Layer-1 ของตัวเอง (Ondo Chain ที่เปิดตัวเมื่อ ก.พ. 2025) แล้วเปิด Ondo Network เครือข่ายซื้อขายความเร็วสูงแบบส่วนตัวที่แยก 'การจับคู่คำสั่ง' ออกจาก 'การชำระราคา' — คำสั่งประมวลผลแบบส่วนตัว ส่วนการโอนสินทรัพย์ขั้นสุดท้ายไปชำระบนเชนสาธารณะ แอปแรกคือ Ondo Perps ที่ให้เทรด perpetual futures โดยใช้สินทรัพย์แบบ Token เป็นหลักประกัน ทั้งนี้ Ondo ถือผลิตภัณฑ์พันธบัตรสหรัฐแบบ Token ราว 2.6 พันล้านดอลลาร์ และหุ้นแบบ Token ราว 850 ล้านดอลลาร์ และ broker-dealer ของบริษัทเพิ่งได้อนุมัติจาก FINRA ให้เปิดตลาดหลักทรัพย์แบบ Token ภายใต้การกำกับ",
        highlight: { label: "สรุปสำคัญ", note: "ผู้ออก RWA รายใหญ่สรุปว่าสถาบันต้องการการประมวลผลแบบส่วนตัวความเร็วสูง + ชำระราคาบนเชนสาธารณะ ไม่ใช่ Layer-1 สาธารณะ — เป็นสัญญาณจริงว่าโครงสร้างตลาดหลักทรัพย์แบบ Token จะวิวัฒน์ไปทางไหน" },
      },
    },
    {
      topic: "tokenization", source: "CoinDesk", time: "4d", url: "https://www.coindesk.com/business/2026/07/26/south-korea-trading-giant-puts-receivables-onchain-in-tokenization-test-with-lg-cns",
      hlType: "know",
      en: {
        title: ["POSCO puts ", "trade receivables on-chain", " with LG CNS"],
        body: "POSCO International, South Korea's largest trading company with $22.2 billion in revenue last year, ran a proof-of-concept tokenizing trade receivables — money owed after goods ship but before payment — with LG Group's tech arm LG CNS on the Injective Layer-1. The pilot used real trade data from POSCO's overseas operations rather than simulations, creating a single transferable record that carries compliance rules, and a production launch is planned after the pilot completes later this year.",
        highlight: { label: "Know this", note: "Trade receivables are a huge, illiquid short-term financing market; putting live corporate receivables on-chain points to supply-chain finance as tokenization's next frontier beyond securities." },
      },
      th: {
        title: ["POSCO นำ ", "ลูกหนี้การค้าขึ้นเชน", " ร่วมกับ LG CNS"],
        body: "POSCO International บริษัทการค้ารายใหญ่ที่สุดของเกาหลีใต้ที่มีรายได้ 2.22 หมื่นล้านดอลลาร์เมื่อปีก่อน ทดสอบ (proof-of-concept) แปลงลูกหนี้การค้า — เงินที่ค้างรับหลังส่งสินค้าแล้วแต่ยังไม่ได้ชำระ — เป็น Token ร่วมกับ LG CNS หน่วยเทคโนโลยีของกลุ่ม LG บนเชน Layer-1 อย่าง Injective การทดสอบใช้ข้อมูลการค้าจริงจากการดำเนินงานต่างประเทศของ POSCO ไม่ใช่ข้อมูลจำลอง สร้างบันทึกชุดเดียวที่โอนเปลี่ยนมือได้และฝังกฎการปฏิบัติตามเกณฑ์ไว้ พร้อมวางแผนขึ้น production จริงหลังจบการทดสอบภายในปีนี้",
        highlight: { label: "รู้ไว้", note: "ลูกหนี้การค้าคือตลาดสินเชื่อระยะสั้นขนาดใหญ่ที่สภาพคล่องต่ำ การนำลูกหนี้จริงขององค์กรขึ้นเชนชี้ว่า supply-chain finance คือพรมแดนถัดไปของ Tokenization นอกเหนือจากหลักทรัพย์" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "CoinDesk", time: "1d", url: "https://www.coindesk.com/business/2026/07/30/global-banks-test-tokenized-money-for-cross-border-payments-in-usd1-million-bis-pilot",
      hlType: "data",
      en: {
        title: ["BIS Project Agorá settles ", "cross-border tokenized money", " with 28 banks"],
        body: "The BIS-led Project Agorá ran real-value cross-border payments using tokenized central-bank reserves and tokenized commercial-bank deposits on a shared programmable ledger, with 28 commercial banks — including JPMorgan, Citi, UBS, Deutsche Bank and Standard Chartered — plus five central banks. About $1 million (CHF 800,000) moved across roughly 30 transactions in six currencies (USD, EUR, GBP, JPY, CHF, KRW), settling in an average of about 80 seconds even without integration to existing systems.",
        highlight: { label: "By the numbers", value: "~80s", note: "average settlement time for real-value, multi-currency cross-border payments across 28 global banks and 5 central banks on one shared ledger" },
      },
      th: {
        title: ["BIS Project Agorá ชำระ ", "เงิน Token ข้ามพรมแดน", " กับ 28 ธนาคาร"],
        body: "Project Agorá ที่นำโดย BIS ทดสอบการชำระเงินข้ามพรมแดนด้วยมูลค่าจริง โดยใช้เงินสำรองธนาคารกลางแบบ Token และเงินฝากธนาคารพาณิชย์แบบ Token บนบัญชีแยกประเภทที่ใช้ร่วมกันและโปรแกรมได้ ร่วมด้วยธนาคารพาณิชย์ 28 แห่ง — รวม JPMorgan, Citi, UBS, Deutsche Bank และ Standard Chartered — บวกธนาคารกลาง 5 แห่ง มีเงินหมุนราว 1 ล้านดอลลาร์ (8 แสนฟรังก์สวิส) ผ่านราว 30 ธุรกรรมใน 6 สกุลเงิน (USD, EUR, GBP, JPY, CHF, KRW) ชำระเสร็จเฉลี่ยราว 80 วินาที แม้ยังไม่ได้เชื่อมกับระบบเดิม",
        highlight: { label: "ตัวเลขสำคัญ", value: "~80 วิ", note: "เวลาชำระราคาเฉลี่ยของการโอนข้ามพรมแดนหลายสกุลด้วยมูลค่าจริง ข้าม 28 ธนาคารและ 5 ธนาคารกลาง บนบัญชีแยกประเภทชุดเดียว" },
      },
    },
    {
      topic: "blockchain", source: "The Block", time: "4d", url: "https://www.theblock.co/post/409702/kb-kookmin-bank-payment-jpmorgans-kinexys",
      hlType: "takeaway",
      en: {
        title: ["KB Kookmin runs cross-border payments on ", "JPMorgan's Kinexys", ""],
        body: "KB Kookmin Bank will launch a corporate cross-border payment service next month built on Kinexys, JPMorgan's permissioned blockchain — becoming the first South Korean financial institution to use Kinexys for commercial import and export settlements. The service prioritizes US-dollar transfers across 10 markets including South Korea, the US, Singapore, Saudi Arabia, India, Thailand, Qatar, the UAE, Bahrain and South Africa. Kinexys enables programmable payments, asset tokenization and near-real-time settlement.",
        highlight: { label: "Key takeaway", note: "A G-SIB's permissioned chain becoming live cross-border payment infrastructure for a major national bank — with Thailand among the corridors — shows bank deposit-token rails moving from pilot to production." },
      },
      th: {
        title: ["KB Kookmin ชำระเงินข้ามพรมแดนบน ", "Kinexys ของ JPMorgan", ""],
        body: "KB Kookmin Bank จะเปิดบริการชำระเงินข้ามพรมแดนสำหรับองค์กรในเดือนหน้า สร้างบน Kinexys ซึ่งเป็น permissioned chain ของ JPMorgan — กลายเป็นสถาบันการเงินเกาหลีใต้รายแรกที่ใช้ Kinexys สำหรับการชำระราคาการนำเข้า-ส่งออกเชิงพาณิชย์ บริการนี้เน้นการโอนสกุลดอลลาร์ข้าม 10 ตลาด รวมถึงเกาหลีใต้ สหรัฐ สิงคโปร์ ซาอุดีอาระเบีย อินเดีย ไทย กาตาร์ UAE บาห์เรน และแอฟริกาใต้ โดย Kinexys รองรับการชำระเงินแบบโปรแกรมได้ การทำ Tokenization สินทรัพย์ และการชำระราคาแบบเกือบเรียลไทม์",
        highlight: { label: "สรุปสำคัญ", note: "เชน permissioned ของธนาคาร G-SIB กลายเป็นโครงสร้างชำระเงินข้ามพรมแดนจริงให้ธนาคารระดับชาติ — มีไทยเป็นหนึ่งในเส้นทาง — สะท้อนว่ารางเงินฝากแบบ Token ของธนาคารขยับจากนำร่องสู่ใช้งานจริง" },
      },
    },
    {
      topic: "blockchain", source: "The Block", time: "1w", url: "https://www.theblock.co/post/409507/layerzero-keeta-enable-tokenized-bank-deposits-across-ethereum-solana-and-base",
      hlType: "quote",
      en: {
        title: ["LayerZero and Keeta move ", "bank deposits across public chains", ""],
        body: "LayerZero and Keeta launched 'Keeta stablecoins' — tokenized commercial bank deposits backed by actual deposits held through Bivo, a US-licensed fintech with access to US payment rails — transferable across Ethereum, Solana, Base and the Keeta Network. They use LayerZero's Omnichain Fungible Token standard, which keeps a single global supply across chains while the issuing institution retains full contract authority, and launch in nine fiat currencies including USD, EUR, JPY, CNY, GBP, CAD, MXN, AED and HKD.",
        highlight: { note: "The future of institutional money isn't a walled garden.", by: "Ty Schenk, CEO, Keeta" },
      },
      th: {
        title: ["LayerZero–Keeta ย้าย ", "เงินฝากธนาคารข้ามเชนสาธารณะ", ""],
        body: "LayerZero และ Keeta เปิดตัว 'Keeta stablecoins' — เงินฝากธนาคารพาณิชย์แบบ Token ที่หนุนด้วยเงินฝากจริงซึ่งเก็บผ่าน Bivo แพลตฟอร์ม fintech ที่มีใบอนุญาตในสหรัฐและเข้าถึงระบบชำระเงินสหรัฐ — โอนข้ามได้ทั้ง Ethereum, Solana, Base และ Keeta Network โดยใช้มาตรฐาน Omnichain Fungible Token ของ LayerZero ที่คงปริมาณเหรียญรวมทั่วโลกไว้ชุดเดียวข้ามเชน ขณะที่สถาบันผู้ออกยังถือสิทธิ์ควบคุมสัญญาเต็มที่ และเปิดตัวใน 9 สกุลเงิน fiat รวม USD, EUR, JPY, CNY, GBP, CAD, MXN, AED และ HKD",
        highlight: { note: "อนาคตของเงินระดับสถาบันไม่ใช่สวนที่มีกำแพงล้อม (walled garden)", by: "Ty Schenk, CEO, Keeta" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "The Block", time: "2w", url: "https://www.theblock.co/post/408843/us-regulators-miss-genius-acts-one-year-deadline-for-final-stablecoin-rules",
      hlType: "takeaway",
      en: {
        title: ["US regulators miss the ", "GENIUS Act's one-year deadline", " for stablecoin rules"],
        body: "The GENIUS Act's statutory one-year deadline for federal regulators to finalize stablecoin rules expired July 18 (the law was signed July 18, 2025) with no final rules issued — the OCC, FDIC, NCUA, Federal Reserve and Treasury all left their packages as proposals. A joint customer-identification (KYC) rule remains open for comment through August 21 and an FDIC anti-money-laundering proposal through August 4. Congress set no penalty for the miss, and it does not move the law's binding date.",
        highlight: { label: "Key takeaway", note: "The GENIUS Act still takes effect the earlier of January 18, 2027 or 120 days after final rules — so issuers must keep scaling against a fixed date while KYC/AML terms remain in flux." },
      },
      th: {
        title: ["หน่วยงานสหรัฐพลาด ", "เดดไลน์ 1 ปีของ GENIUS Act", " ออกกฎ Stablecoin"],
        body: "เส้นตายตามกฎหมาย 1 ปีของ GENIUS Act ที่ให้หน่วยงานกำกับสหรัฐออกกฎ Stablecoin ให้เสร็จ หมดลงเมื่อ 18 ก.ค. (กฎหมายลงนาม 18 ก.ค. 2025) โดยยังไม่มีการออกกฎฉบับสมบูรณ์ — ทั้ง OCC, FDIC, NCUA, Federal Reserve และ Treasury ยังคงสถานะเป็นร่างข้อเสนอ โดยกฎพิสูจน์ตัวตนลูกค้า (KYC) ร่วมยังเปิดรับความเห็นถึง 21 ส.ค. และข้อเสนอ AML ของ FDIC ถึง 4 ส.ค. ทั้งนี้สภาคองเกรสไม่ได้กำหนดบทลงโทษหากพลาด และไม่กระทบวันที่กฎหมายมีผลบังคับ",
        highlight: { label: "สรุปสำคัญ", note: "GENIUS Act ยังมีผลบังคับในวันที่ถึงก่อนระหว่าง 18 ม.ค. 2027 หรือ 120 วันหลังออกกฎสมบูรณ์ — ผู้ออก Stablecoin จึงต้องเดินหน้าโตต่อโดยยึดวันตายตัวนี้ ขณะที่เกณฑ์ KYC/AML ยังไม่นิ่ง" },
      },
    },
    {
      topic: "fintech", source: "American Banker", time: "3d", url: "https://www.americanbanker.com/payments/news/paypal-ceo-expresses-openness-to-acquisition",
      hlType: "data",
      en: {
        title: ["PayPal rebuffs Stripe's ", "$53B bid", " — but signals it's open"],
        body: "PayPal's board deemed the $60.50-a-share (~$53 billion, ~28% premium) bid from Stripe and Advent inadequate, but on its July 28 Q2 results CEO Enrique Lores signaled openness to an offer that creates superior shareholder value. PayPal reported Q2 revenue of $8.68 billion (up 5%), EPS of $1.25 and total payment volume of $487 billion (up 9%), and raised full-year EPS guidance to $5.38. A tie-up would fuse Stripe's Bridge stablecoin rails with PayPal's PYUSD and Venmo.",
        highlight: { label: "By the numbers", value: "$53B", note: "the Stripe-Advent bid PayPal's board called too low — even as Lores left the door open to a higher offer" },
      },
      th: {
        title: ["PayPal ปฏิเสธข้อเสนอ ", "$53B ของ Stripe", " — แต่ส่งสัญญาณเปิดรับ"],
        body: "บอร์ด PayPal เห็นว่าข้อเสนอ 60.50 ดอลลาร์ต่อหุ้น (ราว 5.3 หมื่นล้านดอลลาร์ พรีเมียม ~28%) จาก Stripe และ Advent นั้นต่ำเกินไป แต่ในการแถลงผลไตรมาส 2 เมื่อ 28 ก.ค. Enrique Lores ซีอีโอส่งสัญญาณเปิดรับข้อเสนอที่สร้างมูลค่าให้ผู้ถือหุ้นได้เหนือกว่า โดย PayPal รายงานรายได้ไตรมาส 2 ที่ 8.68 พันล้านดอลลาร์ (โต 5%), EPS 1.25 ดอลลาร์ และปริมาณการชำระเงินรวม 4.87 แสนล้านดอลลาร์ (โต 9%) พร้อมปรับเป้า EPS ทั้งปีขึ้นเป็น 5.38 ดอลลาร์ ทั้งนี้หากดีลสำเร็จจะรวมราง Stablecoin 'Bridge' ของ Stripe เข้ากับ PYUSD และ Venmo ของ PayPal",
        highlight: { label: "ตัวเลขสำคัญ", value: "$53B", note: "ข้อเสนอจาก Stripe–Advent ที่บอร์ด PayPal มองว่าต่ำไป — แม้ Lores จะเปิดช่องรับข้อเสนอที่สูงกว่า" },
      },
    },
    {
      topic: "fintech", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/visa-to-integrate-stablecoin-platform-with-pismo-flags-acquisition-appetite/",
      hlType: "know",
      en: {
        title: ["Visa fuses its ", "stablecoin platform with Pismo", " — and eyes M&A"],
        body: "On its fiscal Q3 earnings call, Visa said it will integrate the Visa Stablecoin Platform (VSP, launched earlier in July with Open USD) into Pismo, its cloud-native issuer-processing and core-banking subsidiary acquired in 2024 — embedding stablecoin mint, movement and management into infrastructure already used inside banks. CEO Ryan McInerney said Pismo can already support tokenized deposits for financial institutions and plans to add third-party tokenized-deposit providers, and signaled Visa will build, partner, invest or acquire across the stablecoin stack.",
        highlight: { label: "Know this", note: "Pismo is Visa's bank-core software layer — so folding stablecoin issuance into it puts tokenized deposits and stablecoins inside the systems banks already run, with Visa as the provider." },
      },
      th: {
        title: ["Visa รวม ", "แพลตฟอร์ม Stablecoin เข้ากับ Pismo", " — พร้อมมองดีล M&A"],
        body: "ในการแถลงผลไตรมาส 3 (ปีงบประมาณ) Visa ระบุว่าจะรวม Visa Stablecoin Platform (VSP ที่เปิดตัวต้นเดือน ก.ค. พร้อม Open USD) เข้ากับ Pismo บริษัทย่อยด้าน issuer processing และ core banking บนคลาวด์ที่ซื้อมาเมื่อปี 2024 — ฝังการ mint เคลื่อนย้าย และบริหาร Stablecoin เข้าไปในโครงสร้างที่ธนาคารใช้อยู่แล้ว โดย Ryan McInerney ซีอีโอ ระบุว่า Pismo รองรับเงินฝากแบบ Token ให้สถาบันการเงินได้อยู่แล้ว และเตรียมเพิ่มผู้ให้บริการโครงสร้างเงินฝากแบบ Token รายอื่น พร้อมส่งสัญญาณว่า Visa จะทั้งสร้างเอง จับมือพันธมิตร ลงทุน หรือเข้าซื้อกิจการในสาย Stablecoin",
        highlight: { label: "รู้ไว้", note: "Pismo คือชั้นซอฟต์แวร์ core banking ของ Visa — การพับการออก Stablecoin เข้าไปจึงวางเงินฝากแบบ Token และ Stablecoin ไว้ในระบบที่ธนาคารรันอยู่แล้ว โดยมี Visa เป็นผู้ให้บริการ" },
      },
    },
    {
      topic: "fintech", source: "The Block", time: "2d", url: "https://www.theblock.co/post/410048/tethers-genius-compliant-usat-stablecoin-launches-on-celo-marking-first-expansion-beyond-ethereum",
      hlType: "data",
      en: {
        title: ["Tether takes its ", "US-regulated USAT to Celo", ""],
        body: "Tether deployed USAT — its US-regulated, GENIUS-compliant dollar stablecoin — on Celo, its first mainnet expansion beyond Ethereum (the move was announced in March). USAT is issued by Anchorage Digital Bank, the first federally chartered crypto bank, with 1:1 reserves in cash and Treasury-grade assets, and launched in January to a roughly $185 million market cap (against USDT's ~$180 billion). On Celo, holders can pay gas in USAT; Celo already carries about 28% of cross-chain USDT transfers.",
        highlight: { label: "By the numbers", value: "$185M", note: "USAT's market cap as Tether pushes its regulated US coin to a second chain — its answer to Circle's USDC in the GENIUS-compliant race" },
      },
      th: {
        title: ["Tether นำ ", "USAT ภายใต้กำกับสหรัฐ ขึ้น Celo", ""],
        body: "Tether นำ USAT — Stablecoin ดอลลาร์ภายใต้การกำกับของสหรัฐที่สอดคล้อง GENIUS Act — ขึ้นเชน Celo เป็นการขยาย mainnet ครั้งแรกนอกเหนือจาก Ethereum (ประกาศไว้เมื่อ มี.ค.) โดย USAT ออกโดย Anchorage Digital Bank ธนาคารคริปโตที่ได้ใบอนุญาตระดับชาติแห่งแรก หนุนหลัง 1:1 ด้วยเงินสดและสินทรัพย์ระดับพันธบัตร เปิดตัวเมื่อมกราคมและมีมูลค่าตลาดราว 185 ล้านดอลลาร์ (เทียบกับ USDT ที่ราว 1.8 แสนล้าน) บน Celo ผู้ถือจ่ายค่า gas ด้วย USAT ได้ ขณะที่ Celo รองรับการโอน USDT ข้ามเชนอยู่แล้วราว 28%",
        highlight: { label: "ตัวเลขสำคัญ", value: "$185M", note: "มูลค่าตลาดของ USAT ขณะ Tether ดันเหรียญดอลลาร์ภายใต้กำกับขึ้นเชนที่สอง — เป็นหมัดสวน USDC ของ Circle ในศึกเหรียญที่สอดคล้อง GENIUS" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", esg: true, source: "DITTO / Share2Trade", time: "1w", url: "https://www.share2trade.com/news/57405/ditto-เทรด-blu-green-token-วันแรกพุ่งเหนือจอง",
      hlType: "data",
      en: {
        title: ["Blu Green Token debuts on ", "Bitkub — opens +8.3%", ", runs to +20%"],
        body: "Blu Green Token (BLU), Thailand's first carbon-credit investment token, began secondary trading on the Bitkub digital-asset exchange on July 20, opening at ฿1.30 — up 8.3% from its ฿1.20 ICO price — and running as high as ฿1.44, a 20% premium, intraday. Issued by DITTO subsidiary Siam TC Technology via SCBX's Token X portal, BLU had sold out all 400 million tokens for ฿480 million in its July 3–13 subscription; it is backed by mangrove carbon credits with a projected 10.35% IRR and a 3% floor.",
        highlight: { label: "By the numbers", value: "+8.3%", note: "BLU's open above its ฿1.20 ICO price on Bitkub day one (intraday high +20%) — the first real secondary-market read on a Thai carbon-credit token" },
      },
      th: {
        title: ["Blu Green Token เทรดวันแรกบน ", "Bitkub เปิด +8.3%", " ขึ้นแตะ +20%"],
        body: "Blu Green Token (BLU) Token เพื่อการลงทุนหนุนด้วยคาร์บอนเครดิตตัวแรกของไทย เริ่มซื้อขายในตลาดรองบนศูนย์ซื้อขายสินทรัพย์ดิจิทัล Bitkub เมื่อ 20 ก.ค. เปิดที่ ฿1.30 — เพิ่มขึ้น 8.3% จากราคาจอง ฿1.20 — และขึ้นไปแตะสูงสุด ฿1.44 คิดเป็นพรีเมียม 20% ระหว่างวัน ทั้งนี้ BLU ออกโดย Siam TC Technology บริษัทย่อยของ DITTO ผ่าน Token X ในกลุ่ม SCBX และขายหมดครบ 400 ล้าน Token มูลค่า ฿480 ล้านในช่วงจอง 3–13 ก.ค. หนุนหลังด้วยคาร์บอนเครดิตป่าชายเลน ตั้งเป้า IRR 10.35% พร้อมขั้นต่ำ 3%",
        highlight: { label: "ตัวเลขสำคัญ", value: "+8.3%", note: "ราคาเปิดของ BLU เหนือราคาจอง ฿1.20 ในวันแรกบน Bitkub (สูงสุดระหว่างวัน +20%) — เป็นการอ่านตลาดรองครั้งแรกของ Token คาร์บอนเครดิตไทย" },
      },
    },
    {
      topic: "set", source: "SEC / InfoQuest", time: "1w", url: "https://www.ryt9.com/s/iq/12832371",
      hlType: "takeaway",
      en: {
        title: ["Thai SEC files a ", "criminal complaint against Bitkub", " over the 2021 hack"],
        body: "The Thai SEC filed a criminal complaint (กล่าวโทษ) on July 23 against Bitkub Online and two former directors — Sakolkrai Srakwee and Taweesap Rawan — with the Economic Crime Suppression Division, over allegedly filing false statements that concealed a cyber-theft. In May 2021 attackers took about ฿1.7 billion of customer assets across 16 currencies, yet Bitkub's daily liquidity filings from May 10 to October 30, 2021 showed no material change; the firm had fully replaced the stolen assets by October 31, 2021, so customers were unaffected.",
        highlight: { label: "Key takeaway", note: "This is the first major SEC enforcement action over incident-disclosure at Thailand's largest exchange — a tougher line on transparency for licensed operators, just as the digital-asset rulebook tightens." },
      },
      th: {
        title: ["ก.ล.ต. ", "กล่าวโทษ Bitkub", " ปมปกปิดเหตุถูกแฮกปี 64"],
        body: "ก.ล.ต. กล่าวโทษ บริษัท บิทคับ ออนไลน์ และอดีตกรรมการ 2 ราย — นายสกลกรย์ สระกวี และนายทวีทรัพย์ ราวรรณ์ — ต่อกองบังคับการปราบปรามการกระทำความผิดเกี่ยวกับอาชญากรรมทางเศรษฐกิจ เมื่อ 23 ก.ค. กรณีถูกกล่าวหาว่าแจ้งข้อความอันเป็นเท็จปกปิดเหตุถูกโจรกรรมทางไซเบอร์ โดยเมื่อ พ.ค. 2564 มีสินทรัพย์ดิจิทัลของลูกค้าราว 1,700 ล้านบาทใน 16 สกุลถูกนำออกไป แต่รายงานสภาพคล่องรายวัน (แบบ ดจ.1) ช่วง 10 พ.ค. – 30 ต.ค. 2564 กลับไม่แสดงการเปลี่ยนแปลงที่มีนัยสำคัญ ทั้งนี้บริษัทได้หาสินทรัพย์มาทดแทนครบตั้งแต่ 31 ต.ค. 2564 ลูกค้าจึงไม่ได้รับผลกระทบ",
        highlight: { label: "สรุปสำคัญ", note: "เป็นการบังคับใช้กฎหมายครั้งสำคัญครั้งแรกของ ก.ล.ต. ต่อการเปิดเผยเหตุการณ์ที่กระดานใหญ่สุดของไทย — สะท้อนท่าทีเข้มขึ้นเรื่องความโปร่งใสของผู้ประกอบการที่มีใบอนุญาต ในจังหวะที่กติกาสินทรัพย์ดิจิทัลกำลังเข้มขึ้น" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#00012C", url: "https://www.ryt9.com/s/prg/12831931",
      en: { strong: "MTS Gold Investment Token", text: " — a gold-bullion investment token via ICO portal kubix — opened subscription on July 24 with a fixed 3% annual base return; orbix is offering XAUT (Tether Gold) worth up to ฿4,000 to the first 500 subscribers.", src: "orbix / InfoQuest" },
      th: { strong: "MTS Gold Investment Token", text: " — Token เพื่อการลงทุนในธุรกิจทองคำแท่งผ่าน ICO Portal อย่าง kubix — เปิดจองซื้อ 24 ก.ค. ผลตอบแทนพื้นฐานคงที่ 3% ต่อปี โดย orbix แจก XAUT (Tether Gold) มูลค่าสูงสุด ฿4,000 ให้ผู้จอง 500 รายแรก", src: "orbix / InfoQuest" } },
    { color: "#BA6AF2", url: "https://www.coindesk.com/business/2026/07/23/24-7-financial-rails-how-bny-plans-to-eliminate-the-weekend-lag-in-u-s-treasuries",
      en: { strong: "BNY", text: " is targeting 24/7 settlement of conventional and tokenized US Treasuries by 2027, and completed an after-hours test using Ripple's RLUSD and OpenEden's USDO reserves with Tradeweb, after Fedwire had closed for the day.", src: "CoinDesk" },
      th: { strong: "BNY", text: " ตั้งเป้าชำระราคาพันธบัตรสหรัฐทั้งแบบปกติและแบบ Token ตลอด 24 ชั่วโมงภายในปี 2027 และทดสอบธุรกรรมนอกเวลาทำการด้วยเงินสำรองของ RLUSD (Ripple) และ USDO (OpenEden) ผ่าน Tradeweb หลัง Fedwire ปิดทำการของวัน", src: "CoinDesk" } },
    { color: "#2BB6AE", url: "https://www.prnewswire.com/news-releases/openassets-and-partior-complete-proof-of-concept-demonstrating-atomic-delivery-versus-payment-with-tokenised-deposits-as-the-settlement-asset-302838116.html",
      en: { strong: "Partior and OpenAssets", text: " completed a proof-of-concept for atomic delivery-versus-payment, settling digital assets, stablecoins and tokenized deposits together with tokenized commercial-bank money as the settlement asset on Partior's DBS/JPMorgan/Standard Chartered-backed network.", src: "Partior" },
      th: { strong: "Partior และ OpenAssets", text: " ทำ proof-of-concept การชำระแบบ atomic DvP สำเร็จ โดยชำระ Digital Asset, Stablecoin และเงินฝากแบบ Token พร้อมกัน ใช้เงินธนาคารพาณิชย์แบบ Token เป็นสินทรัพย์ชำระราคา บนเครือข่าย Partior ที่หนุนโดย DBS/JPMorgan/Standard Chartered", src: "Partior" } },
    { color: "#C9C400", url: "https://www.coindesk.com/business/2026/07/21/augustus-raises-usd180-million-to-build-a-clearing-bank-for-the-ai-and-stablecoin-era",
      en: { strong: "Augustus", text: " raised a $180M Series B at a $1B valuation (led by Tiger Global) to build a federally chartered clearing bank connecting payment rails and blockchains — not to issue its own stablecoin; it already clears euros via a Finnish entity and holds conditional OCC approval.", src: "CoinDesk" },
      th: { strong: "Augustus", text: " ระดมทุน Series B $180M ที่มูลค่ากิจการ $1B (นำโดย Tiger Global) เพื่อสร้างธนาคารเคลียริงที่มีใบอนุญาตระดับชาติ เชื่อมระบบชำระเงินกับ Blockchain — ไม่ใช่ออก Stablecoin เอง ปัจจุบันเคลียร์เงินยูโรผ่านนิติบุคคลในฟินแลนด์ และได้อนุมัติเบื้องต้นจาก OCC แล้ว", src: "CoinDesk" } },
    { color: "#C9C400", url: "https://www.coindesk.com/business/2026/07/30/ondo-finance-weighs-acquisition-worth-up-to-usd500-million",
      en: { strong: "Ondo Finance", text: " is weighing a $250M–$500M acquisition, eyeing wealthtech among other targets, though it says it is not in talks with any party; the report notes Q2 2026 crypto M&A hit about $12.9 billion in disclosed deal value.", src: "CoinDesk" },
      th: { strong: "Ondo Finance", text: " กำลังพิจารณาเข้าซื้อกิจการมูลค่า $250M–$500M โดยมองกลุ่ม wealthtech เป็นหนึ่งในเป้าหมาย แม้ระบุว่ายังไม่ได้เจรจากับฝ่ายใด ทั้งนี้รายงานระบุว่า M&A คริปโตไตรมาส 2/2026 แตะราว $12.9 พันล้านในมูลค่าดีลที่เปิดเผย", src: "CoinDesk" } },
  ],
});
