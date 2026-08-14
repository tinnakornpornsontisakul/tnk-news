// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 8 · 8–15 ส.ค. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน · แหล่งไทยใช้เฉพาะที่อนุญาต)
//  ราคาเหรียญอ่านจาก CoinGecko 15 ส.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (15 ส.ค. 2026)
//  หมายเหตุ: สัปดาห์นี้ไม่มีข่าว Green/ESG × Digital Asset ที่สดในกรอบ 8–15 ส.ค. (จึงไม่มี esg:true)
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 8,
    date: "2026-08-15",
    dateEN: "Aug 8–15, 2026",
    dateTH: "8–15 ส.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (15 ส.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$38.2B", delta: "+0.7%", up: true,
      points: [37.9, 37.86, 37.95, 38.0, 38.05, 38.1, 38.13, 38.16, 38.18, 38.2],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 92 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 65 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$116.22",  chg: "+0.1%", up: true,  bar: 66 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+0.1%", up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.1%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.18",   chg: "+0.1%", up: true,  bar: 52 },
      // ข) Tokenized Gold (ทองคำแตะ ~$4,374/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,374",   chg: "+1.1%",  up: true,  bar: 87 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,359",   chg: "+1.1%",  up: true,  bar: 87 },
      // ค) RWA platform / protocol tokens (สัปดาห์แดง · ENA–POLYX ร่วงหนัก · PLUME สวนขึ้น)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.327",   chg: "-6.4%",  up: false, bar: 58 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.31",    chg: "-2.9%",  up: false, bar: 50 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.148",   chg: "-7.0%",  up: false, bar: 32 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0287",  chg: "-10.6%", up: false, bar: 30 },
      { sym: "PLUME", name: "Plume",            price: "$0.0125",  chg: "+4.2%",  up: true,  bar: 34 },
      { sym: "ENA",   name: "Ethena",           price: "$0.084",   chg: "-11.5%", up: false, bar: 50 },
      { sym: "SKY",   name: "Sky",              price: "$0.0524",  chg: "-4.1%",  up: false, bar: 44 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0299",  chg: "-2.9%",  up: false, bar: 22 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.151",   chg: "-1.2%",  up: false, bar: 44 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0171",  chg: "-4.5%",  up: false, bar: 24 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "-0.3%",  up: false, bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "Ledger Insights",
    time: "3d",
    url: "https://www.ledgerinsights.com/nasdaq-to-acquire-level-markets-ats-in-24-7-tokenization-push/",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["Nasdaq to acquire ", "LeveL Markets ATS", " in a 24/7 tokenization push"],
      body: [
        "Nasdaq agreed to acquire LeveL Markets, the third-largest US alternative trading system (ATS) with roughly 2,500 institutional clients, for an undisclosed sum, and will fold it into a newly created Digital Liquidity Networks division led by Roland Chai. Nasdaq — which has held a minority stake in LeveL since 2021 — plans to give clients the option to settle their Nasdaq trades as DTC tokens from around October, when DTCC's tokenization service goes live, bridging the exchange's conventional order flow to on-chain settlement.",
        "LeveL already trades tokenized structured products across seven European venues via Boerse Stuttgart's Seturion platform and integrates with tokenization venue 21X (a January partnership) and EDX Markets, while its average daily volume rose 56% year-over-year in 2025. The deal puts one of the largest US exchange operators directly into the business of round-the-clock tokenized trading and settlement — a structural signal that tokenization is moving from pilots into core market infrastructure.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["Nasdaq เข้าซื้อ ", "LeveL Markets ATS", " รุกตลาด Token 24/7"],
      body: [
        "Nasdaq ตกลงเข้าซื้อ LeveL Markets ซึ่งเป็น alternative trading system (ATS) รายใหญ่อันดับ 3 ของสหรัฐ มีลูกค้าสถาบันราว 2,500 ราย ด้วยมูลค่าที่ไม่เปิดเผย และจะรวมเข้าเป็นส่วนหนึ่งของดิวิชันใหม่ Digital Liquidity Networks ที่นำโดย Roland Chai ทั้งนี้ Nasdaq ซึ่งถือหุ้นส่วนน้อยใน LeveL มาตั้งแต่ปี 2021 วางแผนเปิดทางเลือกให้ลูกค้าชำระราคาการซื้อขายบน Nasdaq เป็น DTC token ได้ตั้งแต่ราวเดือนตุลาคม เมื่อบริการ Tokenization ของ DTCC เริ่มใช้งานจริง เชื่อมคำสั่งซื้อขายแบบดั้งเดิมของตลาดเข้ากับการชำระราคาบนเชน",
        "ปัจจุบัน LeveL ซื้อขายผลิตภัณฑ์ structured product แบบ Token ผ่าน 7 ตลาดในยุโรปด้วยแพลตฟอร์ม Seturion ของ Boerse Stuttgart และเชื่อมต่อกับตลาด Tokenization อย่าง 21X (จับมือกันเมื่อมกราคม) และ EDX Markets ขณะที่วอลุ่มเฉลี่ยต่อวันโต 56% YoY ในปี 2025 ดีลนี้ผลักผู้ดำเนินการตลาดรายใหญ่ของสหรัฐเข้าสู่ธุรกิจการซื้อขายและชำระราคาแบบ Token ตลอด 24 ชม. โดยตรง — เป็นสัญญาณเชิงโครงสร้างว่า Tokenization กำลังขยับจากโครงการนำร่องสู่โครงสร้างพื้นฐานหลักของตลาด",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "Building the programmable, always-on market infrastructure of the future.", by: "Roland Chai, head of Digital Liquidity Networks, Nasdaq" },
      th: { note: "การสร้างโครงสร้างพื้นฐานตลาดแห่งอนาคตที่โปรแกรมได้และเปิดตลอดเวลา", by: "Roland Chai, head of Digital Liquidity Networks, Nasdaq" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/sec-greenlights-franklin-templeton-funds-to-park-cash-in-tokenized-benji-fund/",
      hlType: "data",
      en: {
        title: ["SEC lets Franklin Templeton funds ", "sweep cash into tokenized BENJI", ""],
        body: "The SEC issued a no-action letter allowing other Franklin Templeton funds to park their cash in BENJI, the firm's tokenized money-market fund that runs on the Stellar blockchain. The relief centered on letting the fund's transfer agent custody assets using private keys, with the SEC requiring that smart-contract admin keys and controls transfer to a successor transfer agent if the agent ever changes. BENJI — the first tokenized MMF launched by a major incumbent asset manager, in 2021 — offers hourly NAV, intraday trading and faster processing versus traditional fund plumbing.",
        highlight: { label: "By the numbers", value: "$726M", note: "BENJI assets under management on Stellar — the SEC no-action letter turns a tokenized MMF into an approved on-chain cash-sweep vehicle for a $1.6T asset manager's other funds" },
      },
      th: {
        title: ["SEC ไฟเขียวกองทุน Franklin Templeton ", "พักเงินสดใน BENJI แบบ Token", ""],
        body: "SEC ออก no-action letter อนุญาตให้กองทุนอื่น ๆ ของ Franklin Templeton นำเงินสดไปพักไว้ใน BENJI ซึ่งเป็นกองทุนตลาดเงินแบบ Token ของบริษัทที่ทำงานบน Blockchain ของ Stellar โดยประเด็นหลักคือการให้ transfer agent ของกองทุนเก็บรักษาทรัพย์สินด้วย private key ทั้งนี้ SEC กำหนดเงื่อนไขว่า admin key และการควบคุม smart contract ต้องถูกโอนไปยัง transfer agent รายใหม่หากมีการเปลี่ยนตัว ทั้งนี้ BENJI เป็นกองทุน MMF แบบ Token กองแรกที่ออกโดยผู้จัดการสินทรัพย์รายใหญ่ดั้งเดิม (ปี 2021) ให้ NAV รายชั่วโมง ซื้อขายระหว่างวัน และประมวลผลเร็วกว่าโครงสร้างกองทุนแบบเดิม",
        highlight: { label: "ตัวเลขสำคัญ", value: "$726M", note: "มูลค่า BENJI ภายใต้การบริหารบน Stellar — no-action letter ของ SEC เปลี่ยนกองทุน MMF แบบ Token ให้เป็นเครื่องมือพักเงินสดบนเชนที่ได้รับอนุมัติสำหรับกองทุนอื่นของผู้จัดการสินทรัพย์ระดับ $1.6T" },
      },
    },
    {
      topic: "rwa", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/africa-finance-corporation-issues-chf-350m-digital-bond-via-six-sdx/",
      hlType: "data",
      en: {
        title: ["Africa Finance Corporation issues a ", "CHF 350M digital bond", " on SIX's SDX"],
        body: "The Africa Finance Corporation (AFC) issued a CHF 350 million (about $431 million) digital bond via Switzerland's SIX Digital Exchange (SDX) — the first digital bond by an African institution issued through a regulated central securities depository and exchange. The five-year note carries a 1.4925% coupon and was arranged by Commerzbank as technical lead alongside Deutsche Bank. It is the first bond on SDX since KfW's issuance in June 2025, and follows earlier Swiss-franc digital bonds such as UBS's CHF 375 million deal in 2022.",
        highlight: { label: "By the numbers", value: "CHF 350M", note: "≈$431M five-year digital bond at a 1.4925% coupon — the first by an African issuer via a regulated CSD and exchange, widening the pool of sovereign-adjacent issuers using on-chain settlement" },
      },
      th: {
        title: ["Africa Finance Corporation ออก ", "พันธบัตรดิจิทัล CHF 350M", " บน SDX ของ SIX"],
        body: "Africa Finance Corporation (AFC) ออกพันธบัตรดิจิทัลมูลค่า 350 ล้านฟรังก์สวิส (ราว 431 ล้านดอลลาร์) ผ่าน SIX Digital Exchange (SDX) ของสวิตเซอร์แลนด์ — เป็นพันธบัตรดิจิทัลรายแรกของสถาบันในแอฟริกาที่ออกผ่าน central securities depository และตลาดหลักทรัพย์ภายใต้การกำกับ พันธบัตรอายุ 5 ปีนี้ให้คูปอง 1.4925% จัดการออกโดย Commerzbank เป็น technical lead ร่วมกับ Deutsche Bank นับเป็นพันธบัตรบน SDX รายแรกนับตั้งแต่ KfW เมื่อมิถุนายน 2025 และต่อจากพันธบัตรดิจิทัลสกุลฟรังก์ก่อนหน้า เช่น ดีลของ UBS มูลค่า 375 ล้านฟรังก์ในปี 2022",
        highlight: { label: "ตัวเลขสำคัญ", value: "CHF 350M", note: "พันธบัตรดิจิทัลอายุ 5 ปี คูปอง 1.4925% (~$431M) — รายแรกของผู้ออกในแอฟริกาผ่าน CSD และตลาดภายใต้การกำกับ ขยายฐานผู้ออกระดับกึ่งรัฐที่ใช้การชำระราคาบนเชน" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "CoinDesk", time: "4d", url: "https://www.coindesk.com/business/2026/08/11/coinbase-picks-abu-dhabi-for-its-global-tokenized-asset-push",
      hlType: "quote",
      en: {
        title: ["Coinbase wins an Abu Dhabi ", "tokenized-securities licence", " from ADGM"],
        body: "Coinbase secured a Financial Services Permission from the Financial Services Regulatory Authority (FSRA) of Abu Dhabi Global Market (ADGM) to arrange deals in and custody tokenized securities within the financial centre. The exchange plans to issue digital securities backed by underlying shares, registered and issued in ADGM under FSRA oversight, building on its 2023 Project Diamond work and a July tokenization tie-up with Mubadala. The move gives Coinbase a regulated base to bring securities on-chain outside the United States.",
        highlight: { note: "No major financial center has yet built a framework that treats tokenized equities simultaneously as securities, blockchain-native tokens, and DeFi-composable assets.", by: "Brett Tejpaul, co-CEO, Coinbase Institutional" },
      },
      th: {
        title: ["Coinbase คว้าใบอนุญาต ", "หลักทรัพย์แบบ Token ที่อาบูดาบี", " จาก ADGM"],
        body: "Coinbase ได้รับ Financial Services Permission จาก Financial Services Regulatory Authority (FSRA) ของ Abu Dhabi Global Market (ADGM) เพื่อจัดการดีลและเก็บรักษา (custody) หลักทรัพย์แบบ Token ภายในศูนย์กลางการเงินแห่งนี้ โดยบริษัทวางแผนออกหลักทรัพย์ดิจิทัลที่หนุนหลังด้วยหุ้นจริง จดทะเบียนและออกใน ADGM ภายใต้การกำกับของ FSRA ต่อยอดจากงาน Project Diamond ปี 2023 และการจับมือทำ Tokenization กับ Mubadala เมื่อกรกฎาคม ความเคลื่อนไหวนี้ให้ Coinbase มีฐานภายใต้การกำกับสำหรับการนำหลักทรัพย์ขึ้นเชนนอกสหรัฐ",
        highlight: { note: "ยังไม่มีศูนย์กลางการเงินใหญ่แห่งใดที่สร้างกรอบกำกับซึ่งปฏิบัติต่อหุ้นแบบ Token พร้อมกันทั้งในฐานะหลักทรัพย์ Token เนทีฟบนเชน และสินทรัพย์ที่ประกอบเข้ากับ DeFi ได้", by: "Brett Tejpaul, co-CEO, Coinbase Institutional" },
      },
    },
    {
      topic: "tokenization", source: "Crypto.com", time: "3d", url: "https://www.prnewswire.com/news-releases/cryptocom-launches-the-future-of-trading-with-tokenized-stocks-302849027.html",
      hlType: "data",
      en: {
        title: ["Crypto.com launches ", "1,500 tokenized US stocks", " for round-the-clock trading"],
        body: "Crypto.com launched Tokenized Stocks, giving users 24/7 exposure to roughly 1,500 US equities and ETFs — from NVIDIA, Tesla and Apple to funds like GLD and SLV — inside its app, with fractional trades from about $1. The products are available across the EEA and approved jurisdictions but not the United States, with the underlying shares custodied by Alpaca, a US self-clearing broker-dealer the company says supports more than 90% of the tokenized US stock and ETF market. The tokens are issued by CySEC-regulated Foris Capital CY as derivative instruments.",
        highlight: { label: "By the numbers", value: "1,500", note: "US equities and ETFs now tradable 24/7 as tokens from ~$1 — issued as derivatives in the EEA (not the US), extending the tokenized-equity race to a mainstream retail exchange" },
      },
      th: {
        title: ["Crypto.com เปิด ", "หุ้นสหรัฐแบบ Token 1,500 ตัว", " ซื้อขายตลอด 24 ชม."],
        body: "Crypto.com เปิดตัว Tokenized Stocks ให้ผู้ใช้เข้าถึงหุ้นและ ETF สหรัฐราว 1,500 ตัวแบบ 24/7 — ตั้งแต่ NVIDIA, Tesla และ Apple ไปจนถึงกองทุนอย่าง GLD และ SLV — ภายในแอป พร้อมซื้อขายแบบเศษส่วนเริ่มต้นราว 1 ดอลลาร์ ผลิตภัณฑ์เปิดให้บริการในเขต EEA และเขตอำนาจที่ได้รับอนุมัติ แต่ไม่รวมสหรัฐ โดยหุ้นอ้างอิงเก็บรักษาโดย Alpaca ซึ่งเป็น broker-dealer แบบ self-clearing ของสหรัฐที่บริษัทระบุว่ารองรับกว่า 90% ของตลาดหุ้นและ ETF สหรัฐแบบ Token ทั้งนี้ Token ออกโดย Foris Capital CY (กำกับโดย CySEC) ในรูปตราสารอนุพันธ์",
        highlight: { label: "ตัวเลขสำคัญ", value: "1,500", note: "หุ้นและ ETF สหรัฐที่ซื้อขายเป็น Token ได้ 24/7 เริ่มที่ ~$1 — ออกเป็นอนุพันธ์ในเขต EEA (ไม่ใช่สหรัฐ) ขยายศึกหุ้นแบบ Token สู่กระดานรายย่อยกระแสหลัก" },
      },
    },
    {
      topic: "tokenization", source: "Markets Media", time: "2d", url: "https://www.marketsmedia.com/bullish-launches-tokenized-equity-trading/",
      hlType: "takeaway",
      en: {
        title: ["Bullish trades its own ", "tokenized shares (BLSH)", " on a GFSC-regulated exchange"],
        body: "Bullish executed the first trades of its own tokenized shares, BLSH, on Bullish Exchange, settled against a US-dollar stablecoin on Solana — what it calls the first tokenized-equity trades on a Gibraltar Financial Services Commission (GFSC)-regulated digital-asset exchange. Unlike synthetic 'xStock' wrappers, the tokens are issuer-sponsored and recorded at the registry level, giving holders direct share ownership with the same legal standing as conventional shareholders. Bullish became the first NYSE-listed company to fully tokenize its cap table in May 2026, won GFSC approval in June, and drew launch liquidity from Wintermute, Qube, Annamite, Fasanara Digital and Star Beta.",
        highlight: { label: "Key takeaway", note: "A NYSE-listed operator trading its own registry-level shares on stablecoin rails is a template for legally-equivalent tokenized equities — and its pending $4.2B Equiniti acquisition would extend the model to ~3,000 issuers and 20M+ shareholders." },
      },
      th: {
        title: ["Bullish ซื้อขาย ", "หุ้นตัวเองแบบ Token (BLSH)", " บนตลาดที่กำกับโดย GFSC"],
        body: "Bullish ทำการซื้อขายหุ้นตัวเองแบบ Token ชื่อ BLSH เป็นครั้งแรกบน Bullish Exchange โดยชำระราคาด้วย Stablecoin สกุลดอลลาร์บน Solana ซึ่งบริษัทระบุว่าเป็นการซื้อขายหุ้นแบบ Token ครั้งแรกบนตลาดสินทรัพย์ดิจิทัลที่กำกับโดย Gibraltar Financial Services Commission (GFSC) ต่างจาก 'xStock' แบบ synthetic ตรงที่ Token เหล่านี้ออกโดยผู้ออกหลักทรัพย์เองและบันทึกในระดับทะเบียน (registry) ให้ผู้ถือเป็นเจ้าของหุ้นโดยตรงและมีสถานะทางกฎหมายเท่ากับผู้ถือหุ้นทั่วไป ทั้งนี้ Bullish เป็นบริษัทจดทะเบียน NYSE รายแรกที่ Tokenize ทะเบียนผู้ถือหุ้นทั้งหมดเมื่อพฤษภาคม 2026 ได้รับอนุมัติจาก GFSC เมื่อมิถุนายน และมีผู้ให้สภาพคล่องตอนเปิดตัวได้แก่ Wintermute, Qube, Annamite, Fasanara Digital และ Star Beta",
        highlight: { label: "สรุปสำคัญ", note: "บริษัทจดทะเบียน NYSE ที่ซื้อขายหุ้นระดับทะเบียนของตัวเองบนราง Stablecoin คือต้นแบบของหุ้นแบบ Token ที่เทียบเท่าทางกฎหมาย — และดีลซื้อ Equiniti $4.2B ที่รออยู่จะขยายโมเดลสู่ผู้ออก ~3,000 รายและผู้ถือหุ้นกว่า 20 ล้านราย" },
      },
    },
    {
      topic: "tokenization", source: "The Block", time: "1d", url: "https://www.theblock.co/news/defi/2026-08-14-bitwise-tokenize-sol-staking-etf-411790",
      hlType: "know",
      en: {
        title: ["Bitwise and Superstate to tokenize ", "the BSOL Solana Staking ETF", ""],
        body: "Bitwise partnered with Superstate to tokenize shares of certain Bitwise funds, with its Solana Staking ETF (BSOL) expected to be the first. Shareholders would be able to hold shares either in conventional DTC book-entry form or as tokens via Superstate's transfer-agency infrastructure; tokenized shares carry the same rights but are not freely transferable outside that system, and Bitwise cautioned there is 'no assurance' the tokenized version launches. Bitwise manages more than $9 billion across 70-plus products.",
        highlight: { label: "Know this", note: "A tokenized ETF share class is not a new fund — it is the same regulated ETF whose ownership can be recorded on-chain through the transfer agent, letting a spot ETF settle and move like a token while keeping its wrapper." },
      },
      th: {
        title: ["Bitwise–Superstate เตรียม Tokenize ", "ETF Solana Staking (BSOL)", ""],
        body: "Bitwise จับมือ Superstate เพื่อ Tokenize หน่วยลงทุนของกองทุน Bitwise บางกอง โดยคาดว่ากองทุน Solana Staking ETF (BSOL) จะเป็นกองแรก ผู้ถือหน่วยจะเลือกถือหน่วยได้ทั้งแบบ DTC book-entry ดั้งเดิม หรือแบบ Token ผ่านโครงสร้าง transfer agency ของ Superstate โดยหน่วยแบบ Token มีสิทธิเท่ากันแต่โอนได้เฉพาะภายในระบบนั้น และ Bitwise ย้ำว่า 'ไม่มีการรับประกัน' ว่าเวอร์ชัน Token จะเปิดจริง ทั้งนี้ Bitwise บริหารสินทรัพย์กว่า 9 พันล้านดอลลาร์ในผลิตภัณฑ์กว่า 70 รายการ",
        highlight: { label: "รู้ไว้", note: "หน่วย ETF แบบ Token ไม่ใช่กองทุนใหม่ — แต่เป็น ETF ภายใต้การกำกับกองเดิมที่บันทึกความเป็นเจ้าของบนเชนผ่าน transfer agent ทำให้ spot ETF ชำระราคาและเคลื่อนย้ายได้เหมือน Token โดยยังคง wrapper เดิม" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/tech/2026/08/12/smart-contract-blockchain-solana-nearly-froze-wednesday-marinade-finance-says",
      hlType: "quote",
      en: {
        title: ["A data-center routing fault ", "nearly froze Solana", " for the first time"],
        body: "A routing glitch at data-center provider TeraSwitch knocked roughly 29% of staked SOL — about 90 validators — offline on Wednesday, coming within about 20 million SOL of the one-third threshold at which Solana stops finalizing blocks. The failure, surfaced by Marinade Finance, was an infrastructure-level fault rather than a protocol bug: a bad route from Miami hit hubs in London, Amsterdam, Frankfurt, Singapore and Tokyo while North America was unaffected, and validators were offline for about 33 minutes. Blocks kept being produced throughout — 597 of 699 validators were still voting — but the episode exposed how a single operator concentrating more than a quarter of staked SOL creates systemic risk.",
        highlight: { note: "Blocks kept producing and transactions kept landing.", by: "Jacob Creech, VP of Technology, Solana Foundation" },
      },
      th: {
        title: ["ความผิดพลาดของ data center ", "เกือบทำ Solana หยุดเดิน", " เป็นครั้งแรก"],
        body: "ความผิดพลาดด้าน routing ที่ผู้ให้บริการ data center อย่าง TeraSwitch ทำให้ SOL ที่ stake อยู่ราว 29% — ประมาณ 90 validator — หลุดออฟไลน์เมื่อวันพุธ เข้าใกล้เกณฑ์ 1 ใน 3 ที่ Solana จะหยุด finalize บล็อก เหลือระยะห่างเพียงราว 20 ล้าน SOL เหตุการณ์ซึ่งถูกเปิดเผยโดย Marinade Finance เป็นความผิดพลาดระดับโครงสร้างพื้นฐาน ไม่ใช่บั๊กของโปรโตคอล โดยเส้นทางที่ผิดพลาดจากไมอามีกระทบฮับในลอนดอน อัมสเตอร์ดัม แฟรงก์เฟิร์ต สิงคโปร์ และโตเกียว ขณะที่อเมริกาเหนือไม่ได้รับผลกระทบ และ validator ออฟไลน์นานราว 33 นาที ทั้งนี้ยังมีการผลิตบล็อกต่อเนื่องตลอด — validator 597 จาก 699 รายยังโหวตอยู่ — แต่เหตุการณ์นี้เผยให้เห็นว่าการที่ผู้ให้บริการรายเดียวกระจุก SOL ที่ stake เกินหนึ่งในสี่ สร้างความเสี่ยงเชิงระบบ",
        highlight: { note: "การผลิตบล็อกยังเดินต่อ และธุรกรรมยังถูกบันทึกได้ตลอด", by: "Jacob Creech, VP of Technology, Solana Foundation" },
      },
    },
    {
      topic: "blockchain", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/mufg-plans-poc-using-tokenized-jgb-for-intraday-repo/",
      hlType: "know",
      en: {
        title: ["MUFG plans a PoC to run ", "tokenized JGB repo on Canton", ""],
        body: "Japan's MUFG Group is preparing a proof-of-concept to run Japanese government bond (JGB) repo on the Canton Network, aiming at intraday settlement and funding efficiency. It brings together MUFG Morgan Stanley Securities and Mitsubishi UFJ Trust and Banking, with tokenization technology from Progmat — the MUFG-founded platform — and Digital Asset, while Switzerland's Secured Finance supplies a lending protocol to automate the repo lifecycle. The PoC covers two tracks: on-chain delivery-versus-payment settlement of JGBs against digital money, and full repo-lifecycle automation, with the tokenized JGBs acting as digital twins synced to existing book-entry registers.",
        highlight: { label: "Know this", note: "Intraday repo lets institutions borrow against bonds for hours rather than overnight; doing it on-chain with atomic delivery-versus-payment can free up collateral and cash within the same day instead of the next." },
      },
      th: {
        title: ["MUFG เตรียม PoC ทำ ", "repo พันธบัตร JGB แบบ Token บน Canton", ""],
        body: "MUFG Group ของญี่ปุ่นเตรียมทำ proof-of-concept เพื่อรัน repo ของพันธบัตรรัฐบาลญี่ปุ่น (JGB) บน Canton Network โดยมุ่งเพิ่มประสิทธิภาพการชำระราคาและการจัดหาเงินระหว่างวัน โครงการนี้รวม MUFG Morgan Stanley Securities และ Mitsubishi UFJ Trust and Banking เข้าด้วยกัน ใช้เทคโนโลยี Tokenization จาก Progmat (แพลตฟอร์มที่ MUFG ก่อตั้ง) และ Digital Asset ขณะที่ Secured Finance จากสวิตเซอร์แลนด์จัดหาโปรโตคอลปล่อยกู้เพื่ออัตโนมัติวงจร repo ทั้งนี้ PoC ครอบคลุม 2 แนวทาง คือการชำระราคาแบบ delivery-versus-payment ของ JGB บนเชนแลกกับเงินดิจิทัล และการทำวงจร repo อัตโนมัติเต็มรูปแบบ โดยพันธบัตร JGB แบบ Token ทำหน้าที่เป็น digital twin ที่ซิงก์กับทะเบียนแบบ book-entry เดิม",
        highlight: { label: "รู้ไว้", note: "repo ระหว่างวันให้สถาบันกู้โดยใช้พันธบัตรเป็นหลักประกันเป็นหลักชั่วโมงแทนข้ามคืน การทำบนเชนด้วย delivery-versus-payment แบบ atomic ช่วยปลดล็อกหลักประกันและเงินสดได้ภายในวันเดียวกันแทนที่จะเป็นวันถัดไป" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "CoinDesk", time: "3d", url: "https://www.coindesk.com/business/2026/08/12/standard-chartered-led-anchorpoint-launches-hong-kong-dollar-stablecoin",
      hlType: "takeaway",
      en: {
        title: ["Standard Chartered-led Anchorpoint launches ", "Hong Kong's first licensed HKD stablecoin", ""],
        body: "Anchorpoint Financial — a joint venture between Standard Chartered, Animoca Brands and HKT — began a limited rollout of HKDAP, a Hong Kong dollar stablecoin, four months after securing one of the city's first two issuer licences under Hong Kong's Stablecoins Ordinance (HSBC, the other initial licensee, is preparing its own for the second half of 2026). The initial launch focuses on institutional payments, settlement and cross-border applications rather than retail, with HashKey Exchange and OSL Group joining as authorized distributors; HashKey said it completed the first mint and redemption of the token, including conversions between HKDAP and fiat.",
        highlight: { label: "Key takeaway", note: "The first HKMA-licensed Hong Kong-dollar stablecoin going live turns the city's Stablecoins Ordinance from a rulebook into a working licensing regime — a regulated on-chain settlement asset that puts Hong Kong alongside the US GENIUS Act and EU MiCA." },
      },
      th: {
        title: ["Anchorpoint นำโดย Standard Chartered เปิดตัว ", "Stablecoin HKD รายแรกที่มีใบอนุญาตของฮ่องกง", ""],
        body: "Anchorpoint Financial — บริษัทร่วมทุนระหว่าง Standard Chartered, Animoca Brands และ HKT — เริ่มทยอยเปิดใช้ HKDAP ซึ่งเป็น Stablecoin สกุลดอลลาร์ฮ่องกง หลังได้รับหนึ่งใน 2 ใบอนุญาตผู้ออกรายแรกของเมืองภายใต้ Stablecoins Ordinance ของฮ่องกงเมื่อ 4 เดือนก่อน (HSBC ซึ่งเป็นผู้ได้ใบอนุญาตแรกอีกราย กำลังเตรียมออกของตัวเองในครึ่งหลังปี 2026) การเปิดตัวช่วงแรกเน้นการชำระเงินและชำระราคาระดับสถาบันและการใช้งานข้ามพรมแดน ไม่ใช่รายย่อย โดยมี HashKey Exchange และ OSL Group เป็นผู้จัดจำหน่ายที่ได้รับอนุญาต ทั้งนี้ HashKey ระบุว่าได้ทำการ mint และไถ่ถอน Token ครั้งแรกสำเร็จ รวมถึงการแปลงระหว่าง HKDAP กับเงิน fiat",
        highlight: { label: "สรุปสำคัญ", note: "Stablecoin สกุลดอลลาร์ฮ่องกงรายแรกที่มีใบอนุญาต HKMA เริ่มใช้งานจริง เปลี่ยน Stablecoins Ordinance ของเมืองจากตัวบทเป็นระบบใบอนุญาตที่ใช้งานได้จริง — สินทรัพย์ชำระราคาบนเชนภายใต้การกำกับที่ดันฮ่องกงขึ้นเทียบชั้น GENIUS Act ของสหรัฐและ MiCA ของยุโรป" },
      },
    },
    {
      topic: "fintech", source: "American Banker", time: "2d", url: "https://www.americanbanker.com/payments/news/banks-interest-in-tokenized-deposits-grew-in-second-quarter",
      hlType: "quote",
      en: {
        title: ["US banks' appetite for ", "tokenized deposits now outpaces stablecoins", ""],
        body: "American Banker's quarterly tracker of the 50 largest US banks found 24 now have tokenized deposits 'on their radar,' up from 19 in Q4 2025, versus 17 for stablecoins — so tokenized deposits have pulled ahead in institutional interest. Four of the biggest banks run active tokenized-deposit products against just one active stablecoin, and seven are piloting or testing tokenized deposits versus three for stablecoins. Wells Fargo's tokenized deposit is slated for this fall, while JPMorgan, BMO, BNY, Citi, Citizens, Fifth Third and HSBC are building a shared network operated by The Clearing House.",
        highlight: { note: "They grow new revenue streams for us and also allow us to acquire new clients.", by: "Jane Fraser, CEO, Citi" },
      },
      th: {
        title: ["ความสนใจ ", "เงินฝากแบบ Token ของแบงก์สหรัฐแซง Stablecoin", ""],
        body: "ตัวติดตามรายไตรมาสของ American Banker ต่อธนาคารใหญ่สุด 50 แห่งของสหรัฐพบว่า 24 แห่งมีเงินฝากแบบ Token 'อยู่ในเรดาร์' เพิ่มจาก 19 แห่งในไตรมาส 4/2025 เทียบกับ 17 แห่งสำหรับ Stablecoin — เท่ากับเงินฝากแบบ Token แซงหน้าในแง่ความสนใจของสถาบัน โดยธนาคารใหญ่ 4 แห่งมีผลิตภัณฑ์เงินฝากแบบ Token ใช้งานจริง เทียบกับ Stablecoin ที่ใช้งานจริงเพียงรายเดียว และมี 7 แห่งกำลังนำร่อง/ทดสอบเงินฝากแบบ Token เทียบกับ 3 แห่งสำหรับ Stablecoin ทั้งนี้เงินฝากแบบ Token ของ Wells Fargo มีกำหนดในฤดูใบไม้ร่วงนี้ ขณะที่ JPMorgan, BMO, BNY, Citi, Citizens, Fifth Third และ HSBC กำลังสร้างเครือข่ายร่วมที่ดำเนินการโดย The Clearing House",
        highlight: { note: "มันสร้างแหล่งรายได้ใหม่ให้เรา และยังช่วยให้เราได้ลูกค้าใหม่ด้วย", by: "Jane Fraser, CEO, Citi" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "SEC / InfoQuest", time: "1w", url: "https://www.infoquest.co.th/2026/628123",
      hlType: "data",
      en: {
        title: ["Thai SEC and BOT move to tighten ", "stablecoin transaction supervision", ""],
        body: "On August 7 Thailand's SEC and Bank of Thailand jointly convened digital-asset operators, together with the Thai Digital Asset Association, to discuss tighter supervision of stablecoin transactions such as USDT and USDC — aimed at reducing money-laundering, cyber-crime and cross-border evasion risks. Regulators expect to issue supervisory guidelines for stablecoin transactions within 2026, with Travel Rule guidelines to be published by August 2026 and take effect in February 2027. SEC Deputy Secretary-General Jomkhwan Kongsagul and BOT Assistant Governor Pimpun Charoenkhwan joined the session.",
        highlight: { label: "By the numbers", value: "Feb 2027", note: "target enforcement date for Thailand's crypto Travel Rule — part of a coordinated SEC–BOT push to bring stablecoin flows under AML supervision, with broader guidelines due by end-2026" },
      },
      th: {
        title: ["SEC และ BOT เดินหน้าคุมเข้ม ", "ธุรกรรม Stablecoin", ""],
        body: "เมื่อ 7 ส.ค. SEC และธนาคารแห่งประเทศไทย (BOT) ร่วมกันประชุมหารือกับผู้ประกอบธุรกิจสินทรัพย์ดิจิทัลและสมาคมสินทรัพย์ดิจิทัลไทย เพื่อหารือการกำกับดูแลธุรกรรม Stablecoin ที่เข้มขึ้น เช่น USDT และ USDC — มุ่งลดความเสี่ยงการฟอกเงิน อาชญากรรมไซเบอร์ และการเลี่ยงกฎการโอนข้ามพรมแดน โดยหน่วยงานกำกับคาดว่าจะออกหลักเกณฑ์กำกับธุรกรรม Stablecoin ภายในปี 2569 ขณะที่หลักเกณฑ์ Travel Rule จะออกภายในสิงหาคม 2569 และเริ่มบังคับใช้ในกุมภาพันธ์ 2570 ทั้งนี้ นายจอมขวัญ คงสกุล รองเลขาธิการ SEC และนางสาวพิมพ์พรรณ เจริญขวัญ ผู้ช่วยผู้ว่าการ BOT เข้าร่วมการประชุม",
        highlight: { label: "ตัวเลขสำคัญ", value: "ก.พ. 2570", note: "กำหนดเริ่มบังคับใช้ Travel Rule ของสินทรัพย์ดิจิทัลไทย — ส่วนหนึ่งของการผลักดันร่วม SEC–BOT เพื่อนำกระแส Stablecoin เข้าสู่การกำกับด้าน AML โดยหลักเกณฑ์ในภาพรวมจะออกภายในสิ้นปี 2569" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#A855F7", url: "https://www.ledgerinsights.com/franklin-templeton-jp-morgan-am-want-tokenized-fund-kyc-on-par-with-stablecoins/",
      en: { strong: "Franklin Templeton, JPMorgan AM, Janus Henderson and WisdomTree", text: " formed the Coalition for Tokenized Markets and, in a July letter to Treasury Secretary Bessent and FinCEN Director Gacki, asked to modernize KYC for tokenized funds — seeking the same treatment stablecoins get under the GENIUS Act, where KYC is done at on- and off-boarding rather than for every transaction.", src: "Ledger Insights" },
      th: { strong: "Franklin Templeton, JPMorgan AM, Janus Henderson และ WisdomTree", text: " ตั้ง Coalition for Tokenized Markets และยื่นจดหมายเดือนกรกฎาคมถึง รมว.คลัง Bessent และผู้อำนวยการ FinCEN Gacki ขอปรับปรุงกฎ KYC สำหรับกองทุนแบบ Token ให้ได้รับการปฏิบัติเท่ากับ Stablecoin ภายใต้ GENIUS Act ที่ทำ KYC ตอนเข้า-ออกระบบ ไม่ใช่ทุกธุรกรรม", src: "Ledger Insights" } },
    { color: "#D946EF", url: "https://www.ledgerinsights.com/marketnode-tokenizes-bny-funds-on-stellar/",
      en: { strong: "Marketnode", text: " — the Singapore market-infrastructure firm founded in 2022 by Temasek and SGX, with HSBC and Euroclear as investors — plans to tokenize BNY Investments funds on the Stellar network for institutional and accredited investors; its Fundnode platform processed almost 1.5 million transactions since launching in 2024.", src: "Ledger Insights" },
      th: { strong: "Marketnode", text: " บริษัทโครงสร้างพื้นฐานตลาดของสิงคโปร์ที่ก่อตั้งปี 2022 โดย Temasek และ SGX (มี HSBC และ Euroclear เป็นผู้ลงทุน) เตรียม Tokenize กองทุน BNY Investments บนเครือข่าย Stellar สำหรับผู้ลงทุนสถาบันและ accredited investor · แพลตฟอร์ม Fundnode ทำธุรกรรมไปเกือบ 1.5 ล้านรายการนับตั้งแต่เปิดตัวปี 2024", src: "Ledger Insights" } },
    { color: "#A855F7", url: "https://www.ledgerinsights.com/sec-postpones-meeting-expected-to-unveil-tokenized-securities-exemption/",
      en: { strong: "The US SEC postponed", text: " a meeting set for August 14 to discuss a tailored offering regime for certain crypto-asset investment contracts, expected to include the tokenized-stock 'innovation exemption' that would enable trading via DeFi automated market makers; in June the SEC had proposed scrapping two Regulation NMS rules to remove pricing obstacles, with issuer opt-in to limit thin-liquidity risk.", src: "Ledger Insights" },
      th: { strong: "SEC สหรัฐเลื่อน", text: "การประชุมที่กำหนดไว้ 14 ส.ค. เพื่อหารือระบบเสนอขายเฉพาะสำหรับสัญญาการลงทุนคริปโตบางประเภท ซึ่งคาดว่าจะรวม 'innovation exemption' ของหุ้นแบบ Token ที่จะเปิดให้ซื้อขายผ่าน DeFi automated market maker · เมื่อมิถุนายน SEC เสนอยกเลิกกฎ Regulation NMS 2 ข้อเพื่อลดอุปสรรคด้านราคา โดยให้ผู้ออก opt-in เพื่อจำกัดความเสี่ยงสภาพคล่องบาง", src: "Ledger Insights" } },
    { color: "#6366F1", url: "https://www.ryt9.com/s/iq/12830879",
      en: { strong: "Thai SEC opened a consultation", text: " on revising the 'prohibited characteristics' of major shareholders across securities firms, derivatives operators and digital-asset businesses — expanding anti-money-laundering and terrorism/WMD-proliferation-financing scope with a 90-day transition. The public comment period closes August 16.", src: "SEC / RYT9" },
      th: { strong: "SEC ไทยเปิดรับฟังความเห็น", text: " การแก้ไข 'ลักษณะต้องห้าม' ของผู้ถือหุ้นรายใหญ่ ครอบคลุมบริษัทหลักทรัพย์ ผู้ประกอบธุรกิจสัญญาซื้อขายล่วงหน้า และธุรกิจสินทรัพย์ดิจิทัล — ขยายขอบเขตด้านการฟอกเงินและการสนับสนุนการก่อการร้าย/อาวุธที่มีอานุภาพทำลายล้างสูง พร้อมช่วงเปลี่ยนผ่าน 90 วัน · ปิดรับฟังความเห็น 16 ส.ค.", src: "SEC / RYT9" } },
  ],
});
