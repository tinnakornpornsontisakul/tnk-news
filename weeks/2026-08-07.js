// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 7 · 1–7 ส.ค. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน · แหล่งไทยใช้เฉพาะที่อนุญาต)
//  ราคาเหรียญอ่านจาก CoinGecko 7 ส.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (7 ส.ค. 2026)
//  หมายเหตุ: สัปดาห์นี้ไม่มีข่าว Green/ESG × Digital Asset ที่สดในกรอบ 1–7 ส.ค. (จึงไม่มี esg:true)
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 7,
    date: "2026-08-07",
    dateEN: "Aug 1–7, 2026",
    dateTH: "1–7 ส.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (7 ส.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$37.9B", delta: "+3.1%", up: true,
      points: [36.8, 36.7, 37.0, 37.2, 37.4, 37.5, 37.7, 37.8, 37.85, 37.9],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 92 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$116.14",  chg: "+0.1%", up: true,  bar: 66 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+0.1%", up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "-0.1%", up: false, bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.17",   chg: "+0.1%", up: true,  bar: 52 },
      // ข) Tokenized Gold (ทองคำพุ่ง ~$4,259/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,259",   chg: "+4.5%", up: true,  bar: 86 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,247",   chg: "+4.4%", up: true,  bar: 86 },
      // ค) RWA platform / protocol tokens (ENA เด่น · ONDO ร่วงหนัก)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.351",   chg: "-13.7%", up: false, bar: 60 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.35",    chg: "-4.2%",  up: false, bar: 50 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.161",   chg: "-9.6%",  up: false, bar: 32 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0320",  chg: "-1.2%",  up: false, bar: 32 },
      { sym: "PLUME", name: "Plume",            price: "$0.0125",  chg: "+7.8%",  up: true,  bar: 34 },
      { sym: "ENA",   name: "Ethena",           price: "$0.0925",  chg: "+14.3%", up: true,  bar: 54 },
      { sym: "SKY",   name: "Sky",              price: "$0.0552",  chg: "-5.7%",  up: false, bar: 46 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0320",  chg: "-1.5%",  up: false, bar: 22 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.153",   chg: "-5.6%",  up: false, bar: 44 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0180",  chg: "-3.4%",  up: false, bar: 24 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "+1.3%",  up: true,  bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "The Block",
    time: "3d",
    url: "https://www.theblock.co/post/410554/blackrock-debuts-tokenized-share-classes-for-select-european-money-market-funds-with-311-billion-in-assets",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["BlackRock brings ", "$311B of European money funds", " on-chain via Kinexys"],
      body: [
        "BlackRock launched 12 tokenized share classes across six of its Institutional Cash Series (ICS) fund families — a combined $311 billion in assets under management as of June 30 — in its first on-chain fund access in Europe. The six families span ICS Euro Government Liquidity, Sterling Government Liquidity, U.S. Treasury, Euro Liquidity, Sterling Liquidity and U.S. Dollar Liquidity funds, and the tokenized classes are minted on Ethereum using JPMorgan's Kinexys as a translation layer between on-chain activity and the funds' traditional share registers.",
        "The classes enable round-the-clock peer-to-peer transfers between approved investor wallets via smart contracts, with near-real-time visibility, and are available across 15 markets aimed at corporate treasury and digital collateral management. Coming a day after BlackRock's separate US tokenized-cash launch, it brings one of the largest single pools of regulated cash on-chain to date — and cements Kinexys as the tokenization rail for the world's biggest asset manager.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["BlackRock นำ ", "กองทุนตลาดเงินยุโรป $311B", " ขึ้นเชนผ่าน Kinexys"],
      body: [
        "BlackRock เปิดตัวหน่วยลงทุนแบบ Token (tokenized share class) จำนวน 12 คลาส ครอบคลุมกองทุนในตระกูล Institutional Cash Series (ICS) 6 กองทุน รวมสินทรัพย์ภายใต้การบริหาร 3.11 แสนล้านดอลลาร์ (ณ 30 มิ.ย.) ถือเป็นการเปิดให้เข้าถึงกองทุนบนเชนครั้งแรกในยุโรป โดย 6 กองทุนได้แก่ ICS Euro Government Liquidity, Sterling Government Liquidity, U.S. Treasury, Euro Liquidity, Sterling Liquidity และ U.S. Dollar Liquidity ทั้งนี้หน่วยลงทุนแบบ Token ถูก mint บน Ethereum โดยใช้ Kinexys ของ JPMorgan เป็นชั้นเชื่อมระหว่างกิจกรรมบนเชนกับทะเบียนผู้ถือหน่วยแบบดั้งเดิม",
        "หน่วยลงทุนเหล่านี้โอนแบบ peer-to-peer ระหว่างกระเป๋าของผู้ลงทุนที่ผ่านการอนุมัติได้ตลอด 24 ชั่วโมงผ่าน smart contract พร้อมมองเห็นสถานะแบบเกือบเรียลไทม์ เปิดใช้ใน 15 ตลาด เจาะกลุ่มบริหารเงินสดองค์กรและการบริหารหลักประกันดิจิทัล ความเคลื่อนไหวนี้มาหนึ่งวันหลัง BlackRock เปิดตัวผลิตภัณฑ์เงินสดแบบ Token ในสหรัฐแยกต่างหาก และนับเป็นการนำเงินสดภายใต้การกำกับก้อนใหญ่ที่สุดก้อนหนึ่งขึ้นเชน พร้อมตอกย้ำ Kinexys เป็นรางหลักด้าน Tokenization ของผู้จัดการสินทรัพย์ที่ใหญ่ที่สุดในโลก",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "Tokenised money market funds allow us to bring high-quality, short-duration investment exposures into digital formats, while maintaining the same standards around capital preservation, liquidity, and risk management.", by: "Hannah Winter, Head of Digital Cash, BlackRock" },
      th: { note: "กองทุนตลาดเงินแบบ Token ทำให้เรานำ exposure การลงทุนคุณภาพสูงระยะสั้นเข้าสู่รูปแบบดิจิทัลได้ โดยยังคงมาตรฐานเดิมด้านการรักษาเงินต้น สภาพคล่อง และการบริหารความเสี่ยง", by: "Hannah Winter, Head of Digital Cash, BlackRock" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "CoinDesk", time: "4d", url: "https://www.coindesk.com/business/2026/08/03/blackrock-expands-tokenized-cash-with-new-blockchain-based-money-market-offerings",
      hlType: "data",
      en: {
        title: ["BlackRock builds tokenized cash to be ", "GENIUS Act stablecoin reserves", ""],
        body: "A day before its European launch, BlackRock unveiled two US tokenized cash products designed to qualify as eligible reserve assets for permitted payment stablecoin issuers under the GENIUS Act: BSTBL, a tokenized share class of an existing money-market fund on Ethereum, and BRSRV, a new multi-chain fund with daily dividend reinvestment for stablecoin-reserve management, with Securitize as tokenization provider. Both invest in cash, short-term US Treasuries and overnight repos, extending the BUIDL franchise (~$2.5 billion) directly into the stablecoin-reserve mandate.",
        highlight: { label: "By the numbers", value: "$60B", note: "of reserves BlackRock already manages for Circle — about a quarter of the ~$300B stablecoin market, per CFO Martin Small ('We want to be the reserve manager of choice')" },
      },
      th: {
        title: ["BlackRock ทำเงินสดแบบ Token ให้เป็น ", "reserve ของ Stablecoin ตาม GENIUS Act", ""],
        body: "หนึ่งวันก่อนเปิดตัวในยุโรป BlackRock เผยผลิตภัณฑ์เงินสดแบบ Token ในสหรัฐ 2 ตัวที่ออกแบบให้เข้าเกณฑ์เป็นสินทรัพย์สำรอง (reserve) ของผู้ออก Stablecoin เพื่อการชำระเงินที่ได้รับอนุญาตภายใต้ GENIUS Act ได้แก่ BSTBL หน่วยลงทุนแบบ Token ของกองทุนตลาดเงินเดิมบน Ethereum และ BRSRV กองทุนใหม่แบบหลายเชนที่นำเงินปันผลกลับลงทุนรายวันเพื่อบริหารเงินสำรองของ Stablecoin โดยมี Securitize เป็นผู้ให้บริการ Tokenization ทั้งคู่ลงทุนในเงินสด พันธบัตรสหรัฐระยะสั้น และ repo ข้ามคืน ต่อยอดแฟรนไชส์ BUIDL (~2.5 พันล้านดอลลาร์) เข้าสู่ตลาด reserve ของ Stablecoin โดยตรง",
        highlight: { label: "ตัวเลขสำคัญ", value: "$60B", note: "มูลค่าเงินสำรองที่ BlackRock บริหารให้ Circle อยู่แล้ว ราว 1 ใน 4 ของตลาด Stablecoin ~$300B ตามคำของ CFO Martin Small ('เราต้องการเป็นผู้บริหาร reserve ที่เป็นตัวเลือกอันดับหนึ่ง')" },
      },
    },
    {
      topic: "rwa", source: "Ledger Insights", time: "1d", url: "https://www.ledgerinsights.com/schroders-receives-approval-for-first-tokenized-mmf-share-class/",
      hlType: "takeaway",
      en: {
        title: ["Schroders wins Irish approval for its ", "first tokenized money-fund class", ""],
        body: "Schroders, which manages about £867 billion (~$1.17 trillion), received Central Bank of Ireland approval to issue a tokenized share class for a US-dollar money-market fund it calls Schroders Onchain Active Returns (SOAR) — its first. It partners JPMorgan's Kinexys for the tokenization (JPMorgan is already the transfer agent for Schroders Funds ICAV), using a 'digital twin' share class rather than native digital issuance, with smart-contract redemptions and transfers and future collateralization use cases.",
        highlight: { label: "Key takeaway", note: "A second trillion-dollar asset manager tokenizing a money-market fund on JPMorgan's Kinexys in the same week as BlackRock — a sign tokenized MMF share classes are becoming a standard institutional product, not a pilot." },
      },
      th: {
        title: ["Schroders คว้าไฟเขียวไอร์แลนด์ออก ", "หน่วยกองทุนเงินแบบ Token กองแรก", ""],
        body: "Schroders ผู้บริหารสินทรัพย์ราว 8.67 แสนล้านปอนด์ (~1.17 ล้านล้านดอลลาร์) ได้รับอนุมัติจากธนาคารกลางไอร์แลนด์ (Central Bank of Ireland) ให้ออกหน่วยลงทุนแบบ Token ของกองทุนตลาดเงินสกุลดอลลาร์ ชื่อ Schroders Onchain Active Returns (SOAR) เป็นครั้งแรก โดยจับมือ Kinexys ของ JPMorgan ทำ Tokenization (JPMorgan เป็น transfer agent ของ Schroders Funds ICAV อยู่แล้ว) ใช้รูปแบบ 'digital twin' แทนการออกแบบดิจิทัลโดยกำเนิด พร้อมการไถ่ถอนและโอนผ่าน smart contract และแผนใช้เป็นหลักประกันในอนาคต",
        highlight: { label: "สรุปสำคัญ", note: "ผู้จัดการสินทรัพย์ระดับล้านล้านดอลลาร์รายที่สองที่ Tokenize กองทุนตลาดเงินบน Kinexys ของ JPMorgan ในสัปดาห์เดียวกับ BlackRock — สัญญาณว่าหน่วยกองทุน MMF แบบ Token กำลังกลายเป็นผลิตภัณฑ์สถาบันมาตรฐาน ไม่ใช่แค่โครงการนำร่อง" },
      },
    },
    {
      topic: "rwa", source: "Ledger Insights", time: "3d", url: "https://www.ledgerinsights.com/wellington-management-deepens-libeara-collaboration-with-tokenized-income-fund/",
      hlType: "know",
      en: {
        title: ["Wellington and Libeara push tokenization ", "up the risk curve into credit", ""],
        body: "Wellington Management and Libeara launched INCOM, a tokenized income fund focused on yield that moves well beyond Treasuries — holding investment-grade and high-yield corporates, bank loans, convertibles, securitized assets and government bonds. Wellington acts as sub-advisor, FundBridge is the manager, and Libeara — the tokenization firm incubated by Standard Chartered's SC Ventures — provides the rails; it follows the trio's earlier ULTRA fund (~$70 million, short-term Treasuries) in Singapore.",
        highlight: { label: "Know this", note: "Most tokenized funds so far have held Treasuries or money-market instruments; INCOM extends the model into actively managed multi-sector credit — a higher-yield, higher-risk on-chain product for institutions." },
      },
      th: {
        title: ["Wellington–Libeara ดัน Tokenization ", "ขึ้นบันไดความเสี่ยงสู่ตราสารหนี้เครดิต", ""],
        body: "Wellington Management และ Libeara เปิดตัว INCOM กองทุน income แบบ Token ที่เน้น yield และก้าวไกลเกินพันธบัตรรัฐบาล — ถือทั้งหุ้นกู้ระดับ investment grade และ high yield, สินเชื่อธนาคาร, หุ้นกู้แปลงสภาพ, สินทรัพย์ securitized และพันธบัตรรัฐบาล โดย Wellington เป็นที่ปรึกษาการลงทุนรอง (sub-advisor), FundBridge เป็นผู้จัดการกองทุน และ Libeara บริษัท Tokenization ที่บ่มเพาะโดย SC Ventures ของ Standard Chartered เป็นผู้วางราง ต่อยอดจากกองทุน ULTRA ก่อนหน้า (~70 ล้านดอลลาร์ พันธบัตรระยะสั้น) ในสิงคโปร์",
        highlight: { label: "รู้ไว้", note: "กองทุนแบบ Token ส่วนใหญ่ที่ผ่านมาถือพันธบัตรหรือตราสารตลาดเงิน แต่ INCOM ขยายโมเดลสู่ตราสารหนี้เครดิตหลายกลุ่มที่บริหารเชิงรุก — เป็นผลิตภัณฑ์บนเชนที่ yield สูงขึ้นและเสี่ยงขึ้นสำหรับสถาบัน" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/business/2026/08/04/dinari-brings-tokenized-u-s-stocks-to-american-investors-as-equity-race-heats-up",
      hlType: "data",
      en: {
        title: ["Dinari opens ", "724 tokenized US stocks", " to American investors"],
        body: "Dinari launched 724 tokenized US stocks — including every company in the S&P 500 — for US investors to buy and sell through self-custody wallets using Circle's USDC, in what it calls an industry first for domestic retail access. Its 'dShares' are backed one-for-one by ordinary stocks and ETFs held in regulated brokerage accounts under a third-party custodial model, available on Ethereum, Arbitrum, Base and Avalanche (Solana and Sei soon), with launch partners including Circle, Stripe-owned Privy, Para and Monaco.",
        highlight: { label: "By the numbers", value: "724", note: "tokenized US stocks now available to US investors via self-custody — tokenized equities had until now been offshore-only; Dinari holds ~$10M in a ~$2.2B tokenized-equity market" },
      },
      th: {
        title: ["Dinari เปิด ", "หุ้นสหรัฐแบบ Token 724 ตัว", " ให้นักลงทุนอเมริกัน"],
        body: "Dinari เปิดหุ้นสหรัฐแบบ Token 724 ตัว — รวมทุกบริษัทใน S&P 500 — ให้นักลงทุนสหรัฐซื้อขายผ่านกระเป๋าแบบ self-custody ด้วย Stablecoin USDC ของ Circle ซึ่งบริษัทระบุว่าเป็นครั้งแรกของอุตสาหกรรมสำหรับการเข้าถึงของรายย่อยในประเทศ โดย 'dShares' หนุนหลัง 1:1 ด้วยหุ้นและ ETF จริงที่เก็บในบัญชีโบรกเกอร์ภายใต้การกำกับแบบ third-party custody รองรับบน Ethereum, Arbitrum, Base และ Avalanche (Solana และ Sei เร็ว ๆ นี้) พันธมิตรเปิดตัวมี Circle, Privy (ในเครือ Stripe), Para และ Monaco",
        highlight: { label: "ตัวเลขสำคัญ", value: "724", note: "จำนวนหุ้นสหรัฐแบบ Token ที่เปิดให้นักลงทุนสหรัฐผ่าน self-custody — ก่อนหน้านี้หุ้นแบบ Token เปิดเฉพาะนอกสหรัฐ · Dinari ถืออยู่ ~$10M ในตลาดหุ้น Token ~$2.2B" },
      },
    },
    {
      topic: "tokenization", source: "The Block", time: "4d", url: "https://www.theblock.co/post/410397/ripple-invests-zilo-licuido",
      hlType: "quote",
      en: {
        title: ["Ripple buys stakes in ", "ZILO and Licuido", " to build XRPL capital-markets rails"],
        body: "Ripple made strategic equity investments in ZILO — which supplies regulated transfer-agency and fund-administration technology, including record-keeping for tokenized share classes — and Licuido, an FCA-regulated tokenization platform for issuing and distributing traditional assets and using them as digital collateral via on-chain atomic settlement. The deals aim to bring regulated transfer agency, issuance and collateral mobility to the XRP Ledger, where Ripple's RLUSD stablecoin acts as the cash leg for delivery-versus-payment settlement.",
        highlight: { note: "ZILO and Licuido provide core capabilities that are essential to further scaling this shift: regulated digital transfer agency infrastructure and liquidity for issuance and collateral mobility.", by: "Nigel Khakoo, SVP for Trading and Markets, Ripple" },
      },
      th: {
        title: ["Ripple ซื้อหุ้น ", "ZILO และ Licuido", " สร้างรางตลาดทุนบน XRPL"],
        body: "Ripple เข้าลงทุนเชิงกลยุทธ์ (equity) ใน ZILO ผู้จัดหาเทคโนโลยี transfer agency และ fund administration ภายใต้การกำกับ รวมถึงการเก็บทะเบียนหน่วยลงทุนแบบ Token และ Licuido แพลตฟอร์ม Tokenization ที่กำกับโดย FCA สำหรับออกและกระจายสินทรัพย์ดั้งเดิม และนำไปใช้เป็นหลักประกันดิจิทัลผ่านการชำระราคาแบบ atomic บนเชน ดีลนี้มุ่งนำ transfer agency, การออกหลักทรัพย์ และการเคลื่อนย้ายหลักประกันที่อยู่ภายใต้การกำกับ มาสู่ XRP Ledger ซึ่ง Stablecoin RLUSD ของ Ripple ทำหน้าที่เป็นขาเงินสดของการชำระแบบ delivery-versus-payment",
        highlight: { note: "ZILO และ Licuido ให้ขีดความสามารถหลักที่จำเป็นต่อการขยายการเปลี่ยนผ่านนี้: โครงสร้าง transfer agency ดิจิทัลภายใต้การกำกับ และสภาพคล่องสำหรับการออกและการเคลื่อนย้ายหลักประกัน", by: "Nigel Khakoo, SVP for Trading and Markets, Ripple" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "Circle", time: "2d", url: "https://www.circle.com/pressroom/circle-announces-founding-validator-cohort-and-major-integrations-for-arc-ahead-of-september-16-mainnet-launch",
      hlType: "quote",
      en: {
        title: ["BlackRock, DTCC, Visa to run ", "validators on Circle's Arc chain", ""],
        body: "Circle named an 11-strong founding validator cohort for Arc, its institutional Layer-1 — BlackRock, DTCC, Galaxy, Global Payments, ICE, Mastercard, MoneyGram, SBI Group, Standard Chartered, Sumitomo Corporation and Visa — ahead of a September 16 public mainnet launch, with 100-plus builders already on private mainnet. Day-one integrations include BlackRock deploying BUIDL on Arc with native USDC and a DTCC tokenization service for DTC-custodied assets (from H2 2027), alongside DeFi apps Aave, Morpho and Uniswap and wallets from Fireblocks, Kraken and MetaMask.",
        highlight: { note: "Arc is built on a simple premise: that the global financial system deserves a blockchain network it can trust.", by: "Jeremy Allaire, Co-Founder and CEO, Circle" },
      },
      th: {
        title: ["BlackRock, DTCC, Visa จะรัน ", "validator บนเชน Arc ของ Circle", ""],
        body: "Circle ประกาศกลุ่ม validator ผู้ก่อตั้ง 11 รายสำหรับ Arc ซึ่งเป็นเชน Layer-1 สำหรับสถาบัน — BlackRock, DTCC, Galaxy, Global Payments, ICE, Mastercard, MoneyGram, SBI Group, Standard Chartered, Sumitomo Corporation และ Visa — ก่อนเปิด public mainnet วันที่ 16 ก.ย. โดยมีผู้พัฒนากว่า 100 รายอยู่บน private mainnet แล้ว การเชื่อมต่อตั้งแต่วันแรกมี BlackRock นำ BUIDL ขึ้น Arc พร้อม USDC เนทีฟ และบริการ Tokenization ของ DTCC สำหรับสินทรัพย์ที่ DTC เก็บรักษา (ตั้งแต่ครึ่งหลังปี 2027) ควบคู่แอป DeFi อย่าง Aave, Morpho, Uniswap และกระเป๋าจาก Fireblocks, Kraken และ MetaMask",
        highlight: { note: "Arc สร้างบนหลักคิดง่าย ๆ ว่าระบบการเงินโลกสมควรมีเครือข่าย Blockchain ที่ไว้วางใจได้", by: "Jeremy Allaire, Co-Founder and CEO, Circle" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/business/2026/08/04/wells-fargo-to-offer-tokenized-deposits-for-24-7-corporate-payments",
      hlType: "takeaway",
      en: {
        title: ["Wells Fargo to launch ", "tokenized deposits", ", joining JPMorgan and Citi"],
        body: "Wells Fargo will issue tokenized deposits on its own permissioned blockchain from this fall, starting with round-the-clock US dollar-to-sterling transactions for select corporate and commercial clients, with programmable and conditional-payment features to follow as it scales through 2027. Crucially the balances remain commercial bank money — carrying the same regulatory protections and deposit-insurance eligibility as ordinary deposits, unlike stablecoins — and the bank says its rail can plug into The Clearing House's shared tokenized-deposit network under development by major US banks.",
        highlight: { label: "Key takeaway", note: "A third money-center US bank moving commercial deposits on-chain keeps 24/7 programmable settlement inside the insured banking system — the banks' collective answer to stablecoins under the GENIUS Act." },
      },
      th: {
        title: ["Wells Fargo เตรียมออก ", "เงินฝากแบบ Token", " ตาม JPMorgan และ Citi"],
        body: "Wells Fargo จะออกเงินฝากแบบ Token บน permissioned chain ของตัวเองตั้งแต่ฤดูใบไม้ร่วงนี้ เริ่มจากธุรกรรมสกุลดอลลาร์-ปอนด์ตลอด 24 ชั่วโมงสำหรับลูกค้าองค์กรและธุรกิจที่คัดเลือก พร้อมฟีเจอร์ชำระเงินแบบโปรแกรมได้และแบบมีเงื่อนไขที่จะตามมาเมื่อขยายผลตลอดปี 2027 จุดสำคัญคือยอดเหล่านี้ยังเป็นเงินธนาคารพาณิชย์ — มีการคุ้มครองตามกฎและสิทธิ์ประกันเงินฝากเท่ากับเงินฝากทั่วไป ต่างจาก Stablecoin — และธนาคารระบุว่ารางนี้เชื่อมกับเครือข่ายเงินฝากแบบ Token ร่วมของ The Clearing House ที่ธนาคารใหญ่สหรัฐกำลังพัฒนาได้",
        highlight: { label: "สรุปสำคัญ", note: "ธนาคารใหญ่สหรัฐรายที่สามที่นำเงินฝากเชิงพาณิชย์ขึ้นเชน ทำให้การชำระราคาแบบโปรแกรมได้ตลอด 24 ชม. อยู่ในระบบธนาคารที่มีประกันเงินฝาก — เป็นคำตอบร่วมของฝั่งธนาคารต่อ Stablecoin ภายใต้ GENIUS Act" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/business/2026/08/04/bitgo-s-wbtc-move-pushes-layerzero-to-chainlink-tally-near-usd15-billion",
      hlType: "data",
      en: {
        title: ["BitGo moves its ", "$7.4B Wrapped Bitcoin", " to Chainlink, drops LayerZero"],
        body: "Custodian BitGo named Chainlink's Cross-Chain Interoperability Protocol (CCIP) the exclusive cross-chain provider for Wrapped Bitcoin (WBTC) — market cap about $7.4 billion — replacing LayerZero, which it had picked in 2024. BitGo will standardize WBTC using Chainlink's Cross-Chain Token standard and make CCIP the default for all future assets it issues, while retaining control of its token contracts, rate limits and transfer governance; the switch lifts the cumulative LayerZero-to-CCIP migration tally to roughly $14.6 billion.",
        highlight: { label: "By the numbers", value: "$7.4B", note: "WBTC market cap moving from LayerZero to Chainlink CCIP — cross-chain bridges remain the industry's biggest security weak point, and issuer-controlled interop is the institutional preference" },
      },
      th: {
        title: ["BitGo ย้าย ", "Wrapped Bitcoin $7.4B", " ไป Chainlink ทิ้ง LayerZero"],
        body: "BitGo ผู้ให้บริการ custody เลือก Cross-Chain Interoperability Protocol (CCIP) ของ Chainlink เป็นผู้ให้บริการข้ามเชนรายเดียวสำหรับ Wrapped Bitcoin (WBTC) ที่มีมูลค่าตลาดราว 7.4 พันล้านดอลลาร์ แทน LayerZero ที่เลือกไว้เมื่อปี 2024 โดย BitGo จะทำ WBTC ให้เป็นมาตรฐานด้วย Cross-Chain Token standard ของ Chainlink และตั้ง CCIP เป็นค่าเริ่มต้นสำหรับสินทรัพย์ทุกตัวที่ออกในอนาคต ขณะที่ยังคงคุมสัญญา Token เพดานอัตรา และการกำกับการโอนเอง การย้ายครั้งนี้ดันยอดสะสมการย้ายจาก LayerZero ไป CCIP แตะราว 1.46 หมื่นล้านดอลลาร์",
        highlight: { label: "ตัวเลขสำคัญ", value: "$7.4B", note: "มูลค่าตลาด WBTC ที่ย้ายจาก LayerZero ไป Chainlink CCIP — สะพานข้ามเชนยังเป็นจุดอ่อนด้านความปลอดภัยที่สุดของวงการ และ interoperability ที่ผู้ออกคุมเองคือสิ่งที่สถาบันเลือก" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "PYMNTS", time: "4d", url: "https://www.pymnts.com/news/acquiring/2026/mastercard-finalizes-purchase-of-crypto-infrastructure-platform-bvnk/",
      hlType: "data",
      en: {
        title: ["Mastercard completes its ", "$1.8B BVNK acquisition", ""],
        body: "Mastercard closed its acquisition of London-based stablecoin infrastructure firm BVNK, a deal it first announced in March at about $1.8 billion — making Mastercard the first large publicly listed payments network to buy, rather than partner, its way into stablecoin settlement rails. Mastercard's own release framed the purchase as advancing its global stablecoin capabilities and its ability to connect digital assets with traditional payment rails; it follows a wave of card-network stablecoin moves including Visa's competing platform.",
        highlight: { label: "By the numbers", value: "$1.8B", note: "Mastercard's outright purchase of BVNK — the largest M&A move yet by a card network into stablecoin infrastructure, escalating the Visa-vs-Mastercard race for on-chain settlement" },
      },
      th: {
        title: ["Mastercard ปิดดีลซื้อ ", "BVNK มูลค่า $1.8B", ""],
        body: "Mastercard ปิดดีลเข้าซื้อ BVNK บริษัทโครงสร้างพื้นฐาน Stablecoin สัญชาติลอนดอน ซึ่งประกาศครั้งแรกเมื่อเดือนมีนาคมที่มูลค่าราว 1.8 พันล้านดอลลาร์ — ทำให้ Mastercard เป็นเครือข่ายชำระเงินจดทะเบียนรายใหญ่รายแรกที่ 'ซื้อ' ไม่ใช่ 'จับมือ' เพื่อเข้าสู่รางการชำระราคาด้วย Stablecoin โดยแถลงการณ์ของ Mastercard ระบุว่าดีลนี้ต่อยอดขีดความสามารถด้าน Stablecoin ทั่วโลกและการเชื่อม Digital Asset เข้ากับรางชำระเงินดั้งเดิม ตามหลังกระแสการรุก Stablecoin ของเครือข่ายบัตร รวมถึงแพลตฟอร์มคู่แข่งของ Visa",
        highlight: { label: "ตัวเลขสำคัญ", value: "$1.8B", note: "ดีลที่ Mastercard ซื้อ BVNK แบบเบ็ดเสร็จ — การ M&A เข้าสู่โครงสร้าง Stablecoin ที่ใหญ่ที่สุดของเครือข่ายบัตร ยกระดับศึก Visa–Mastercard ชิงรางการชำระราคาบนเชน" },
      },
    },
    {
      topic: "fintech", source: "Circle", time: "2d", url: "https://www.circle.com/pressroom/circle-reports-second-quarter-2026-results",
      hlType: "data",
      en: {
        title: ["Circle posts ", "$701M Q2 revenue", " as USDC hits $73.3B"],
        body: "Circle, the first pure-play stablecoin issuer to report as a public company, posted Q2 2026 total revenue and reserve income of $701 million (up 7% year-over-year) and adjusted EBITDA of $143 million (up 8%), with USDC in circulation reaching $73.3 billion at quarter end. USDC on-chain transaction volume surged 151% year-over-year to $14.8 trillion — a read on stablecoin economics as rates soften — and the results accompanied confirmation of its Arc public Layer-1 mainnet launching September 16.",
        highlight: { label: "By the numbers", value: "$14.8T", note: "USDC on-chain transaction volume in Q2, up 151% YoY — with reserve income growing on ~25% higher average USDC in circulation" },
      },
      th: {
        title: ["Circle ทำรายได้ไตรมาส 2 ", "$701M", " ขณะ USDC แตะ $73.3B"],
        body: "Circle ผู้ออก Stablecoin แบบ pure-play รายแรกที่รายงานผลในฐานะบริษัทมหาชน ทำรายได้รวมและรายได้จากเงินสำรองไตรมาส 2/2026 ที่ 701 ล้านดอลลาร์ (โต 7% YoY) และ adjusted EBITDA 143 ล้านดอลลาร์ (โต 8%) โดย USDC หมุนเวียนแตะ 7.33 หมื่นล้านดอลลาร์ ณ สิ้นไตรมาส ทั้งนี้ปริมาณธุรกรรม USDC บนเชนพุ่ง 151% YoY แตะ 14.8 ล้านล้านดอลลาร์ — เป็นภาพเศรษฐศาสตร์ Stablecoin ในช่วงดอกเบี้ยขาลง และผลประกอบการมาพร้อมการยืนยันเปิด public mainnet ของเชน Arc วันที่ 16 ก.ย.",
        highlight: { label: "ตัวเลขสำคัญ", value: "$14.8T", note: "ปริมาณธุรกรรม USDC บนเชนไตรมาส 2 โต 151% YoY — โดยรายได้จากเงินสำรองเพิ่มตามค่าเฉลี่ย USDC หมุนเวียนที่สูงขึ้นราว 25%" },
      },
    },
    {
      topic: "fintech", source: "Visa / Zerohash", time: "2d", url: "https://www.manilatimes.net/2026/08/05/tmt-newswire/globenewswire/zerohash-powers-stablecoin-payout-and-prefunding-capabilities-for-visa-direct/2398921",
      hlType: "know",
      en: {
        title: ["Visa Direct turns on ", "stablecoin payouts and prefunding", " via Zerohash"],
        body: "Visa and Zerohash made stablecoin merchant prefunding and payout capabilities live for eligible Visa Direct clients, who can now prefund accounts and disburse payouts in stablecoins, with Zerohash supplying the regulatory and technical stack across dozens of blockchains and stablecoins. Visa Direct reaches more than 18 billion endpoints across cards, accounts and digital wallets in 195-plus countries, so embedding stablecoin funding at the network level — rather than a siloed pilot — extends on-chain dollars into near-global disbursement flows.",
        highlight: { label: "Know this", note: "'Prefunding' lets businesses fund payout accounts closer to payout time with stablecoins rather than parking idle fiat across markets — freeing working capital in 24/7 cross-border money movement." },
      },
      th: {
        title: ["Visa Direct เปิด ", "จ่ายเงินและ prefund ด้วย Stablecoin", " ผ่าน Zerohash"],
        body: "Visa และ Zerohash เปิดใช้ความสามารถ prefund และจ่ายเงินร้านค้าด้วย Stablecoin สำหรับลูกค้า Visa Direct ที่เข้าเกณฑ์ ซึ่งตอนนี้สามารถเติมเงินบัญชีล่วงหน้าและจ่ายออกเป็น Stablecoin ได้ โดย Zerohash จัดหาชั้นกำกับดูแลและเทคนิคครอบคลุมหลายสิบเชนและ Stablecoin ทั้งนี้ Visa Direct เข้าถึงปลายทางกว่า 18,000 ล้านจุดทั้งบัตร บัญชี และกระเป๋าดิจิทัลในกว่า 195 ประเทศ การฝังการเติมเงินด้วย Stablecoin ในระดับเครือข่าย — ไม่ใช่โครงการนำร่องแยกส่วน — จึงขยายเงินดอลลาร์บนเชนสู่การจ่ายเงินเกือบทั่วโลก",
        highlight: { label: "รู้ไว้", note: "'Prefunding' ให้ธุรกิจเติมเงินบัญชีจ่ายออกใกล้เวลาจ่ายจริงด้วย Stablecoin แทนการจอดเงิน fiat ทิ้งไว้หลายตลาด — ปลดล็อกเงินทุนหมุนเวียนในการโอนเงินข้ามพรมแดนตลอด 24 ชม." },
      },
    },
    {
      topic: "fintech", source: "American Banker", time: "3d", url: "https://www.americanbanker.com/payments/news/western-union-adds-stablecard-as-banks-push-digital-assets",
      hlType: "quote",
      en: {
        title: ["Western Union launches ", "Stablecard and its own USDPT", " stablecoin"],
        body: "Western Union, working with stablecoin firm Rain, launched Stablecard — a digital wallet and Visa secured credit card backed by its own U.S. Dollar Payment Token (USDPT), issued by Anchorage Digital Bank, custodied by U.S. Bank and running on Solana. Customers can receive Western Union transfers into a USDPT wallet and spend wherever Visa is accepted; Stablecard goes live in 37 markets with plans to reach more than 60 by year-end, making the 175-year-old remittance giant one of the most concrete legacy adopters of an in-house stablecoin.",
        highlight: { note: "Stablecard represents the next step in making global financial services more accessible to our customers.", by: "Devin McGranahan, President and CEO, Western Union" },
      },
      th: {
        title: ["Western Union เปิด ", "Stablecard และ Stablecoin USDPT ของตัวเอง", ""],
        body: "Western Union จับมือบริษัท Stablecoin อย่าง Rain เปิดตัว Stablecard — กระเป๋าดิจิทัลและบัตรเครดิต Visa แบบมีหลักประกัน ที่หนุนด้วย Stablecoin ของตัวเองชื่อ U.S. Dollar Payment Token (USDPT) ซึ่งออกโดย Anchorage Digital Bank เก็บรักษาโดย U.S. Bank และทำงานบน Solana ลูกค้ารับเงินโอน Western Union เข้ากระเป๋า USDPT และใช้จ่ายที่ไหนก็ได้ที่รับ Visa โดย Stablecard เปิดใช้ใน 37 ตลาด และวางแผนขยายเกิน 60 ตลาดภายในสิ้นปี ทำให้ยักษ์โอนเงินอายุ 175 ปีรายนี้เป็นหนึ่งในผู้เล่นดั้งเดิมที่รับ Stablecoin ของตัวเองอย่างเป็นรูปธรรมที่สุด",
        highlight: { note: "Stablecard คือก้าวถัดไปในการทำให้บริการทางการเงินระดับโลกเข้าถึงลูกค้าของเราได้ง่ายขึ้น", by: "Devin McGranahan, President and CEO, Western Union" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "SEC / Thansettakij", time: "2d", url: "https://www.thansettakij.com/finance/665757",
      hlType: "takeaway",
      en: {
        title: ["Thai SEC advances its ", "criminal case against Bitkub", " with police"],
        body: "Thai SEC officials met the Economic Crime Suppression Division (บก.ปอศ.) on August 5 to submit additional evidence and give testimony, advancing the criminal complaint it filed on July 23 against Bitkub Online and two former directors, Sakolkrai Srakwee and Taweesap Rawan. The complaint alleges Bitkub entered false statements in its daily liquidity reports from May 10 to October 30, 2021 to conceal a May 2021 cyber-theft of roughly ฿1,700 million across 16 currencies, citing Sections 76, 88(2) and 94 of the Digital Asset Decree.",
        highlight: { label: "Key takeaway", note: "The regulator physically handing evidence to police against Thailand's largest domestic exchange escalates the case from filing to active investigation — a signal ก.ล.ต. will pursue criminal, not just administrative, action on disclosure duties." },
      },
      th: {
        title: ["ก.ล.ต. เดินหน้า ", "คดีอาญา Bitkub", " ร่วมตำรวจ"],
        body: "เจ้าหน้าที่ ก.ล.ต. เข้าพบกองบังคับการปราบปรามการกระทำความผิดเกี่ยวกับอาชญากรรมทางเศรษฐกิจ (บก.ปอศ.) เมื่อ 5 ส.ค. เพื่อยื่นพยานหลักฐานเพิ่มเติมและให้ปากคำ เดินหน้าคดีที่กล่าวโทษไว้เมื่อ 23 ก.ค. ต่อ บริษัท บิทคับ ออนไลน์ และอดีตกรรมการ 2 ราย คือ นายสกลกรย์ สระกวี และนายทวีทรัพย์ ราวรรณ์ โดยกล่าวหาว่า Bitkub แจ้งข้อความอันเป็นเท็จในรายงานสภาพคล่องรายวันช่วง 10 พ.ค. – 30 ต.ค. 2564 เพื่อปกปิดเหตุถูกโจรกรรมทางไซเบอร์เมื่อ พ.ค. 2564 มูลค่าราว 1,700 ล้านบาทใน 16 สกุล อ้างความผิดตามมาตรา 76, 88(2) และ 94 แห่ง พ.ร.ก. สินทรัพย์ดิจิทัล",
        highlight: { label: "สรุปสำคัญ", note: "การที่หน่วยงานกำกับยื่นหลักฐานต่อตำรวจโดยตรงต่อกระดานใหญ่สุดของไทย ยกระดับคดีจากการกล่าวโทษสู่การสอบสวนจริง — สัญญาณว่า ก.ล.ต. จะเอาผิดทางอาญา ไม่ใช่แค่ทางปกครอง ในหน้าที่การเปิดเผยข้อมูล" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#BA6AF2", url: "https://www.globenewswire.com/news-release/2026/08/06/3339914/0/en/Treasuries-Gold-and-the-S-P-500-The-Assets-Growing-Fastest-On-Chain-Are-the-Most-Traditional-Ones.html",
      en: { strong: "CoinShares & Token Terminal", text: " found tokenized-RWA deposits into on-chain lending/DEX more than tripled over the year to $7.4B (from $2.3B) and RWA spot volumes rose ~220%, even as broad DeFi deposits fell ~15% — Treasuries, private credit and gold lead the flows.", src: "CoinShares" },
      th: { strong: "CoinShares และ Token Terminal", text: " พบว่าเงินฝาก RWA แบบ Token เข้าสู่การปล่อยกู้/DEX บนเชนโตกว่า 3 เท่าในรอบปีแตะ $7.4B (จาก $2.3B) และวอลุ่มสปอต RWA โต ~220% แม้เงินฝาก DeFi รวมลดลง ~15% — นำโดยพันธบัตร private credit และทองคำ", src: "CoinShares" } },
    { color: "#2BB6AE", url: "https://www.coindesk.com/tech/2026/08/05/new-ethereum-proposal-would-cut-issuance-to-zero-if-staked-eth-reaches-usd112-billion",
      en: { strong: "Ethereum proposal EIP-8361", text: " — from six researchers incl. the Ethereum Foundation's Justin Drake — would progressively burn validator issuance to zero once ~60.25M ETH (about half of supply) is staked; with ~41M ETH (34%) already staked via ETFs and treasuries, it has sparked a validator-economics fight and likely misses the Hegotá upgrade.", src: "CoinDesk" },
      th: { strong: "ข้อเสนอ Ethereum EIP-8361", text: " จากนักวิจัย 6 คนรวมถึง Justin Drake ของ Ethereum Foundation จะทยอยเผา issuance ของ validator จนเป็นศูนย์เมื่อ stake ถึง ~60.25M ETH (ราวครึ่งของอุปทาน) ขณะที่ปัจจุบัน stake แล้ว ~41M ETH (34%) จาก ETF และ treasury จุดชนวนถกเถียงเรื่องเศรษฐศาสตร์ validator และน่าจะพลาดรอบอัปเกรด Hegotá", src: "CoinDesk" } },
    { color: "#C9C400", url: "https://www.coindesk.com/business/2026/08/05/yellow-card-raises-usd40-million-to-link-banks-to-stablecoin-processing",
      en: { strong: "Yellow Card", text: " raised $40M (backers incl. Standard Chartered's SC Ventures, Sony Innovation Fund, Polychain, Blockchain Capital) to connect commercial banks to stablecoin rails as a SWIFT alternative; its Global USD Accounts span 50+ countries and it has facilitated $10B+ across 22 jurisdictions.", src: "CoinDesk" },
      th: { strong: "Yellow Card", text: " ระดมทุน $40M (ผู้ร่วมลงทุนมี SC Ventures ของ Standard Chartered, Sony Innovation Fund, Polychain, Blockchain Capital) เชื่อมธนาคารพาณิชย์เข้ากับราง Stablecoin เป็นทางเลือกแทน SWIFT · Global USD Accounts ครอบคลุม 50+ ประเทศ และทำธุรกรรมไปแล้วกว่า $10B ใน 22 เขตอำนาจ", src: "CoinDesk" } },
  ],
});
