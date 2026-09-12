// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 9 · 16 ส.ค. – 12 ก.ย. 2026
//  ⚠️ ฉบับ CATCH-UP: เว้นจากฉบับที่ 8 (15 ส.ค.) ไป 4 สัปดาห์ จึงครอบคลุมทั้งช่วง
//     เน้นข่าวสดที่สุดเป็นหลัก + ข่าวเชิงโครงสร้างสำคัญตลอดกรอบ (22 ข่าวเต็ม + 6 ข่าวสั้น)
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน · แหล่งไทยใช้เฉพาะที่อนุญาต)
//  ราคาเหรียญอ่านจาก CoinGecko 12 ก.ย. 2026 — ฉบับนี้ `chg` ใช้ค่า 30 วันให้ตรงกับกรอบ 4 สัปดาห์
//  มูลค่า RWA รวมจาก RWA.xyz (12 ก.ย. 2026): $38.82B ▲ +0.42% จาก 30 วันก่อน
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 9,
    date: "2026-09-12",
    dateEN: "Aug 16 – Sep 12, 2026",
    dateTH: "16 ส.ค. – 12 ก.ย. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (12 ก.ย. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$38.8B", delta: "+0.4%", up: true,
      points: [38.2, 38.35, 38.5, 38.6, 38.66, 38.7, 38.74, 38.77, 38.8, 38.82],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%",  up: true,  bar: 92 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%",  up: true,  bar: 65 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$116.53",  chg: "+0.3%",  up: true,  bar: 66 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+0.4%",  up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.14",    chg: "+0.3%",  up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.16",    chg: "+0.3%",  up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.21",   chg: "+0.3%",  up: true,  bar: 52 },
      // ข) Tokenized Gold (ย่อเล็กน้อยในรอบเดือน)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,354",   chg: "-1.0%",  up: false, bar: 86 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,349",   chg: "-0.8%",  up: false, bar: 86 },
      // ค) RWA platform / protocol tokens — เด้งแรงตลอด 4 สัปดาห์ (ENA, PENDLE, SYRUP นำ)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.350",   chg: "+4.9%",  up: true,  bar: 60 },
      { sym: "PENDLE",name: "Pendle",           price: "$2.07",    chg: "+56.4%", up: true,  bar: 64 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.108",   chg: "-29.0%", up: false, bar: 22 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0358",  chg: "+23.0%", up: true,  bar: 38 },
      { sym: "PLUME", name: "Plume",            price: "$0.0134",  chg: "+17.4%", up: true,  bar: 42 },
      { sym: "ENA",   name: "Ethena",           price: "$0.142",   chg: "+62.3%", up: true,  bar: 68 },
      { sym: "SKY",   name: "Sky",              price: "$0.0627",  chg: "+18.3%", up: true,  bar: 52 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0273",  chg: "-10.3%", up: false, bar: 18 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.219",   chg: "+47.4%", up: true,  bar: 58 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0204",  chg: "+18.7%", up: true,  bar: 32 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "+0.6%",  up: true,  bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "tZERO",
    time: "12d",
    url: "https://www.tzero.com/news/tzero-and-ice-agree-to-collaborate-on-infrastructure-for-public-tokenized-securities-markets",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["NYSE parent ICE backs tZERO and licenses ", "its 103-patent tokenization portfolio", ""],
      body: [
        "Intercontinental Exchange and tZERO signed a memorandum of understanding naming tZERO a premier design partner in developing digital transfer agent and broker-dealer infrastructure intended to support on-chain settlement of tokenized securities transactions on ICE's upcoming NYSE-affiliated tokenized securities platform, the Digital Trading Platform. ICE has also agreed to make an investment in tZERO's latest financing round and, in connection with the financing, will receive a licence to tZERO's blockchain patent portfolio.",
        "That portfolio runs to 23 patent families and 103 patents underpinning key elements of the security token lifecycle — compliance-aware transfer logic, upgradeable smart contract frameworks, scalable corporate-action handling and broker-dealer-level identity interoperability. Subject to the satisfaction of applicable regulatory, technology and operational requirements, tZERO is expected to be designated an approved digital transfer agent and subscriber to the Digital Trading Platform. Landing in the same four weeks as Nasdaq's $100 million investment in Kraken's parent and the London Stock Exchange's move to tokenize its 100 largest listings, it confirms that incumbent exchange groups have decided to buy the regulated plumbing for tokenized securities rather than build it.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["ICE เจ้าของ NYSE หนุน tZERO พร้อมรับ ", "สิทธิ์สิทธิบัตร Tokenization 103 ฉบับ", ""],
      body: [
        "Intercontinental Exchange (ICE) และ tZERO ลงนามบันทึกความเข้าใจ (MOU) ให้ tZERO เป็นพันธมิตรออกแบบหลักในการพัฒนาโครงสร้าง digital transfer agent และ broker-dealer เพื่อรองรับการชำระราคาธุรกรรมหลักทรัพย์แบบ Token บนเชน สำหรับแพลตฟอร์มหลักทรัพย์แบบ Token ในเครือ NYSE ที่ ICE กำลังจะเปิด ชื่อ Digital Trading Platform นอกจากนี้ ICE ยังตกลงเข้าลงทุนในรอบระดมทุนล่าสุดของ tZERO และจะได้รับสิทธิ์ใช้พอร์ตสิทธิบัตร Blockchain ของ tZERO ควบคู่ไปกับการลงทุนดังกล่าว",
        "พอร์ตสิทธิบัตรดังกล่าวมี 23 ตระกูลสิทธิบัตร รวม 103 ฉบับ ซึ่งเป็นฐานขององค์ประกอบสำคัญในวงจรชีวิตของ security token ได้แก่ ตรรกะการโอนที่รู้เงื่อนไขการกำกับ กรอบ smart contract ที่อัปเกรดได้ การจัดการ corporate action ในระดับขยายได้ และการทำงานร่วมด้านตัวตนระดับ broker-dealer ทั้งนี้ tZERO คาดว่าจะได้รับการแต่งตั้งเป็น digital transfer agent ที่ได้รับอนุมัติและเป็นสมาชิกของ Digital Trading Platform ขึ้นกับการปฏิบัติตามเงื่อนไขด้านกำกับดูแล เทคโนโลยี และปฏิบัติการ ดีลนี้เกิดขึ้นในช่วง 4 สัปดาห์เดียวกับที่ Nasdaq ลงทุน 100 ล้านดอลลาร์ในบริษัทแม่ของ Kraken และตลาดหลักทรัพย์ลอนดอนเตรียมทำ Token ของบริษัทจดทะเบียนใหญ่สุด 100 แห่ง ตอกย้ำว่ากลุ่มตลาดหลักทรัพย์ดั้งเดิมเลือก 'ซื้อ' รางโครงสร้างที่อยู่ใต้การกำกับสำหรับหลักทรัพย์แบบ Token แทนที่จะสร้างเอง",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "We are thrilled to be partnering with ICE for the NYSE-affiliated digital transfer agent program.", by: "Alan Konevsky, Chairman and CEO, tZERO" },
      th: { note: "เรายินดีอย่างยิ่งที่ได้ร่วมมือกับ ICE ในโครงการ digital transfer agent ในเครือ NYSE", by: "Alan Konevsky, Chairman and CEO, tZERO" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "The Block", time: "1d", url: "https://www.theblock.co/news/regulation/2026-09-11-indias-sebi-demat-2-0-pilot-debuts-with-over-100-million-in-tokenized-bonds-414252",
      hlType: "data",
      en: {
        title: ["India settles its first ", "tokenized corporate bonds", " against the digital rupee"],
        body: "India's SEBI said three issuers raised a combined ₹1,025 crore ($107.2 million) in tokenized corporate bonds under its Demat 2.0 pilot, which uses distributed ledger technology to issue, hold and settle corporate bonds. REC Ltd was first on September 7, raising ₹500 crore ($52.3 million) from 18 investors; L&T followed on September 9 with a similar amount from four investors, and IIFL raised ₹25 crore ($2.6 million) from a single investor the same day. The system connects to the RBI's wholesale CBDC through the central bank's Unified Market Interface so the bond and the cash leg settle atomically, potentially giving issuers proceeds the same day rather than the usual two to three. The tokenized bonds retain the same ISIN, issuer obligations, coupon, maturity, covenants, rating and investor rights as conventional dematerialised bonds.",
        highlight: { label: "By the numbers", value: "$107.2M", note: "raised across three issuers in the first phase — the cash leg settles in wholesale e₹, answering the central-bank-money problem that has limited digital bonds elsewhere" },
      },
      th: {
        title: ["อินเดียชำระราคา ", "หุ้นกู้แบบ Token ชุดแรก", " ด้วยเงินรูปีดิจิทัล"],
        body: "SEBI ของอินเดียเผยว่าผู้ออก 3 รายระดมทุนรวม 1,025 ล้านรูปี (107.2 ล้านดอลลาร์) ผ่านหุ้นกู้แบบ Token ภายใต้โครงการนำร่อง Demat 2.0 ซึ่งใช้ distributed ledger ในการออก ถือครอง และชำระราคาหุ้นกู้ โดย REC Ltd เป็นรายแรกเมื่อ 7 ก.ย. ระดมทุน 500 ล้านรูปี (52.3 ล้านดอลลาร์) จากผู้ลงทุน 18 ราย ตามด้วย L&T เมื่อ 9 ก.ย. ในวงเงินใกล้เคียงกันจากผู้ลงทุน 4 ราย และ IIFL ระดมทุน 25 ล้านรูปี (2.6 ล้านดอลลาร์) จากผู้ลงทุนรายเดียวในวันเดียวกัน ระบบนี้เชื่อมกับ CBDC ระดับ wholesale ของ RBI ผ่าน Unified Market Interface ทำให้ขาหุ้นกู้และขาเงินสดชำระแบบ atomic พร้อมกัน และอาจทำให้ผู้ออกได้รับเงินภายในวันเดียวแทนที่จะเป็น 2–3 วันตามปกติ ทั้งนี้หุ้นกู้แบบ Token ยังคง ISIN ภาระผูกพันของผู้ออก คูปอง อายุ เงื่อนไข อันดับเครดิต และสิทธิผู้ลงทุนเหมือนหุ้นกู้ไร้ใบแบบเดิมทุกประการ",
        highlight: { label: "ตัวเลขสำคัญ", value: "$107.2M", note: "ยอดระดมทุนจากผู้ออก 3 รายในเฟสแรก — ขาเงินสดชำระด้วย e₹ ระดับ wholesale ตอบโจทย์ 'เงินธนาคารกลาง' ที่เป็นข้อจำกัดของพันธบัตรดิจิทัลในที่อื่น" },
      },
    },
    {
      topic: "rwa", source: "The Block", time: "3w", url: "https://www.theblock.co/news/markets/2026-08-18-securitize-neubergers-230-billion-fixed-income-platform-onchain-new-tokenized-fund-412102",
      hlType: "know",
      en: {
        title: ["Securitize takes Neuberger Berman's ", "$230B fixed-income franchise", " on-chain"],
        body: "Securitize launched the Neuberger Securitize High Income Tokenized Fund (HINC), the first engagement by Neuberger Berman — a global investment manager with $230 billion in AUM — as subadvisor to a tokenized fund. The fund seeks attractive risk-adjusted returns by investing primarily in high-yield bonds and other income-producing fixed-income investments, and is available to eligible accredited investors and qualified purchasers through Securitize. It launched simultaneously across Avalanche, Ethereum, Solana and Sui; Securitize posted record first-quarter revenue of $19.5 million, up nearly 40% year over year, with $3.4 billion in tokenized assets under management.",
        highlight: { label: "Know this", note: "Most tokenized funds so far have held Treasuries or money-market paper; HINC moves the on-chain fund market up the risk curve into genuine credit — high-yield bonds, where the manager's active selection is the product." },
      },
      th: {
        title: ["Securitize นำพอร์ตตราสารหนี้ ", "$230B ของ Neuberger Berman", " ขึ้นเชน"],
        body: "Securitize เปิดตัว Neuberger Securitize High Income Tokenized Fund (HINC) ซึ่งเป็นครั้งแรกที่ Neuberger Berman ผู้จัดการลงทุนระดับโลกที่บริหารสินทรัพย์ 2.3 แสนล้านดอลลาร์ เข้ามาเป็นที่ปรึกษาการลงทุนรอง (subadvisor) ให้กองทุนแบบ Token กองทุนนี้มุ่งสร้างผลตอบแทนที่ปรับด้วยความเสี่ยงอย่างน่าสนใจ โดยลงทุนหลักในหุ้นกู้ high yield และตราสารหนี้ที่สร้างกระแสรายได้อื่น ๆ เปิดให้ผู้ลงทุน accredited investor และ qualified purchaser ที่เข้าเกณฑ์ผ่าน Securitize ทั้งนี้เปิดพร้อมกันบน Avalanche, Ethereum, Solana และ Sui ขณะที่ Securitize ทำรายได้ไตรมาสแรกสูงสุดเป็นประวัติการณ์ที่ 19.5 ล้านดอลลาร์ โตเกือบ 40% YoY และมีสินทรัพย์แบบ Token ภายใต้การบริหาร 3.4 พันล้านดอลลาร์",
        highlight: { label: "รู้ไว้", note: "กองทุนแบบ Token ส่วนใหญ่ที่ผ่านมาถือพันธบัตรหรือตราสารตลาดเงิน แต่ HINC ดันตลาดกองทุนบนเชนขึ้นบันไดความเสี่ยงสู่ตราสารหนี้เครดิตจริง — หุ้นกู้ high yield ที่การคัดเลือกเชิงรุกของผู้จัดการคือตัวผลิตภัณฑ์เอง" },
      },
    },
    {
      topic: "rwa", source: "CoinDesk", time: "1w", url: "https://www.coindesk.com/business/2026/09/04/south-korea-targets-february-2027-rollout-for-full-tokenized-securities-market",
      hlType: "quote",
      en: {
        title: ["South Korea sets ", "February 2027", " for a full tokenized securities market"],
        body: "South Korea's Financial Services Commission and Financial Supervisory Service laid out a three-phase roadmap whose first leg starts in February 2027, covering the Electronic Registration Act, money market funds and bonds for institutional investors, unlisted stocks through trust structures, and publicly offered fractional investment securities. The second phase opens tokenization to all publicly offered securities, and the third establishes on-chain payment infrastructure linked to stablecoins. Retail guardrails are tight: individual subscriptions are capped at the lower of 30 million won (about $22,000) or 5% of a total issuance, annual net purchases on OTC exchanges are limited to roughly $74,000, and issuers managing their own securities accounts must hold at least $3 million in equity capital.",
        highlight: { note: "Authorities will seek to lay foundations to facilitate the tokenized issuance and circulation of more traditional types of securities, including stocks, bonds, and funds, with an ultimate goal of completely transforming and upgrading capital market infrastructures for digital connectivity.", by: "Kwon Dae-young, Vice Chairman, Financial Services Commission (South Korea)" },
      },
      th: {
        title: ["เกาหลีใต้กำหนด ", "ก.พ. 2027", " เปิดตลาดหลักทรัพย์แบบ Token เต็มรูปแบบ"],
        body: "Financial Services Commission (FSC) และ Financial Supervisory Service (FSS) ของเกาหลีใต้วางแผนงาน 3 ระยะ โดยระยะแรกเริ่มเดือนกุมภาพันธ์ 2027 ครอบคลุมกฎหมาย Electronic Registration Act, กองทุนตลาดเงินและหุ้นกู้สำหรับผู้ลงทุนสถาบัน, หุ้นนอกตลาดผ่านโครงสร้างทรัสต์ และหลักทรัพย์ลงทุนแบบแบ่งส่วนที่เสนอขายต่อประชาชน ระยะที่สองเปิด Tokenization ให้หลักทรัพย์ที่เสนอขายต่อประชาชนทุกประเภท ส่วนระยะที่สามวางโครงสร้างการชำระเงินบนเชนที่เชื่อมกับ Stablecoin ทั้งนี้มาตรการคุ้มครองรายย่อยเข้มงวด — จองซื้อรายบุคคลจำกัดที่จำนวนต่ำกว่าระหว่าง 30 ล้านวอน (ราว 22,000 ดอลลาร์) กับ 5% ของมูลค่าเสนอขายรวม, ซื้อสุทธิต่อปีในตลาด OTC จำกัดราว 74,000 ดอลลาร์ และผู้ออกที่ดูแลบัญชีหลักทรัพย์เองต้องมีส่วนของผู้ถือหุ้นอย่างน้อย 3 ล้านดอลลาร์",
        highlight: { note: "หน่วยงานกำกับจะวางรากฐานเพื่อเอื้อให้การออกและหมุนเวียนหลักทรัพย์ดั้งเดิมในรูปแบบ Token ทั้งหุ้น พันธบัตร และกองทุน เกิดขึ้นได้จริง โดยมีเป้าหมายสูงสุดคือการเปลี่ยนโฉมและยกระดับโครงสร้างพื้นฐานตลาดทุนสู่การเชื่อมต่อแบบดิจิทัลอย่างสมบูรณ์", by: "Kwon Dae-young, Vice Chairman, Financial Services Commission (เกาหลีใต้)" },
      },
    },
    {
      topic: "rwa", esg: true, source: "AIFC", time: "2d", url: "https://aifc.kz/news/aix-becomes-first-exchange-in-central-asia-to-launch-exchange-based-carbon-credit-trading/",
      hlType: "know",
      en: {
        title: ["Astana's exchange opens ", "carbon-credit trading", ", a first for Central Asia"],
        body: "Astana International Exchange launched trading in voluntary carbon credits, becoming the first exchange in Central Asia to provide its own infrastructure for the market. Credits are admitted to trading only after the associated greenhouse gas emission reductions or removals have been independently verified and recorded in the Verra Registry, which ties exchange eligibility directly to registry-grade verification. The first supplier was London-based trading firm Valor Carbon, with transactions facilitated by Standard International Market, an AIX broker and Trading Member; carbon credits are the second environmental instrument on AIX after I-REC renewable energy certificates. The launch took place during the 9th Astana Finance Days 2026.",
        highlight: { label: "Know this", note: "There is no blockchain or tokenization in this launch — it is exchange and registry plumbing. But moving voluntary carbon credits off bilateral OTC deals onto a venue with verified eligibility is the same standardisation step that has preceded tokenization in every other asset class." },
      },
      th: {
        title: ["ตลาดหลักทรัพย์อัสตานาเปิดซื้อขาย ", "คาร์บอนเครดิต", " รายแรกในเอเชียกลาง"],
        body: "Astana International Exchange (AIX) เปิดซื้อขายคาร์บอนเครดิตภาคสมัครใจ กลายเป็นตลาดหลักทรัพย์แห่งแรกในเอเชียกลางที่มีโครงสร้างพื้นฐานของตัวเองสำหรับตลาดนี้ โดยเครดิตจะเข้าซื้อขายได้ก็ต่อเมื่อปริมาณการลดหรือดูดกลับก๊าซเรือนกระจกได้รับการทวนสอบจากผู้ตรวจอิสระและบันทึกใน Verra Registry แล้วเท่านั้น ซึ่งผูกคุณสมบัติการเข้าซื้อขายเข้ากับการทวนสอบระดับ registry โดยตรง ผู้จัดหาเครดิตรายแรกคือบริษัทเทรด Valor Carbon จากลอนดอน และธุรกรรมดำเนินการผ่าน Standard International Market ซึ่งเป็นโบรกเกอร์และ Trading Member ของ AIX ทั้งนี้คาร์บอนเครดิตเป็นตราสารด้านสิ่งแวดล้อมตัวที่สองของ AIX ต่อจากใบรับรองพลังงานหมุนเวียน I-REC โดยเปิดตัวในงาน Astana Finance Days 2026 ครั้งที่ 9",
        highlight: { label: "รู้ไว้", note: "ดีลนี้ไม่มีส่วนของ Blockchain หรือ Tokenization — เป็นโครงสร้างตลาดและ registry ล้วน ๆ แต่การย้ายคาร์บอนเครดิตภาคสมัครใจจากการเจรจา OTC รายคู่ขึ้นกระดานที่มีเกณฑ์ทวนสอบชัดเจน คือขั้นตอนการทำให้เป็นมาตรฐานแบบเดียวกับที่เกิดก่อน Tokenization ในสินทรัพย์ทุกประเภท" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "Nasdaq", time: "2d", url: "https://www.globenewswire.com/news-release/2026/09/10/3359353/6948/en/nasdaq-deepens-relationship-with-payward-to-advance-tokenized-equities-and-always-on-infrastructure.html",
      hlType: "quote",
      en: {
        title: ["Nasdaq puts ", "$100M into Kraken's parent", " and dates its equity tokens"],
        body: "Nasdaq Ventures agreed to invest $100 million in Payward, the parent company of Kraken, deepening a relationship that now carries a delivery date: the two firms will continue advancing the operational and commercial infrastructure supporting Nasdaq Equity Tokens (NETs) with an expectation to launch in the second quarter of 2027. Payward will also adopt Nasdaq's surveillance technology across its portfolio of trading venues, including crypto, equities, tokenized equities, futures and options — putting exchange-grade market supervision underneath a crypto-native distribution network. It is the first hard public timeline for a major US exchange group's own tokenized-equity product.",
        highlight: { note: "The next era of market evolution will be defined by how efficiently and seamlessly capital and assets move across the financial system with durable liquidity.", by: "Tal Cohen, President, Nasdaq" },
      },
      th: {
        title: ["Nasdaq ทุ่ม ", "$100M ในบริษัทแม่ของ Kraken", " พร้อมเคาะวันเปิด Token หุ้น"],
        body: "Nasdaq Ventures ตกลงลงทุน 100 ล้านดอลลาร์ใน Payward บริษัทแม่ของ Kraken ยกระดับความร่วมมือที่ตอนนี้มีกำหนดส่งมอบชัดเจน โดยทั้งสองฝ่ายจะเดินหน้าพัฒนาโครงสร้างด้านปฏิบัติการและเชิงพาณิชย์ที่รองรับ Nasdaq Equity Tokens (NETs) และคาดว่าจะเปิดตัวในไตรมาส 2 ปี 2027 นอกจากนี้ Payward จะนำเทคโนโลยีเฝ้าระวังตลาดของ Nasdaq ไปใช้ทั่วทุกกระดานซื้อขายของตน ทั้งคริปโท หุ้น หุ้นแบบ Token ฟิวเจอร์สและออปชัน เท่ากับวางระบบกำกับตลาดระดับตลาดหลักทรัพย์ไว้ใต้เครือข่ายกระจายสินค้าแบบ crypto-native นับเป็นไทม์ไลน์สาธารณะที่ชัดเจนครั้งแรกของผลิตภัณฑ์หุ้นแบบ Token ที่กลุ่มตลาดหลักทรัพย์ใหญ่ของสหรัฐทำเอง",
        highlight: { note: "ยุคถัดไปของวิวัฒนาการตลาดจะถูกนิยามด้วยความมีประสิทธิภาพและความราบรื่นในการเคลื่อนย้ายทุนและสินทรัพย์ทั่วระบบการเงิน พร้อมสภาพคล่องที่ยั่งยืน", by: "Tal Cohen, President, Nasdaq" },
      },
    },
    {
      topic: "tokenization", source: "The Block", time: "11d", url: "https://www.theblock.co/news/business/2026-09-01-kraken-parent-payward-to-tokenize-100-london-listed-stocks-with-lse-24-trading-planned-413208",
      hlType: "data",
      en: {
        title: ["London Stock Exchange to put its ", "100 largest companies", " on xStocks"],
        body: "Payward will tokenize the 100 largest companies listed on the London Stock Exchange as xStocks, available to investors in more than 110 countries — though not, for now, to UK-based investors. Subject to regulatory approval the LSE plans to list and support trading in the xStocks on LSE 24, its overnight venue, which operates Monday through Friday from 5 p.m. to 7:50 a.m. with a 30-minute pause for end-of-day processing. It is the clearest sign yet that a G7 primary listing venue sees 24/7 tokenized access as a retail-retention issue rather than a threat.",
        highlight: { label: "By the numbers", value: "$40B", note: "total volume processed by xStocks across more than 200,000 holders, including nearly $20B settled on-chain — the framework launched in June 2025 and was acquired by Payward last December" },
      },
      th: {
        title: ["ตลาดหลักทรัพย์ลอนดอนเตรียมนำ ", "บริษัทใหญ่สุด 100 แห่ง", " ขึ้น xStocks"],
        body: "Payward จะทำ Token ของบริษัทที่จดทะเบียนในตลาดหลักทรัพย์ลอนดอนขนาดใหญ่สุด 100 แห่งในรูปแบบ xStocks เปิดให้ผู้ลงทุนในกว่า 110 ประเทศเข้าถึง แม้ในขณะนี้จะยังไม่เปิดให้ผู้ลงทุนในสหราชอาณาจักรเอง ทั้งนี้หากได้รับอนุมัติจากหน่วยงานกำกับ LSE วางแผนรับ xStocks เข้าจดทะเบียนและรองรับการซื้อขายบน LSE 24 ซึ่งเป็นกระดานช่วงกลางคืนที่เปิดทำการจันทร์ถึงศุกร์ เวลา 17.00 น. ถึง 7.50 น. โดยมีช่วงพัก 30 นาทีสำหรับประมวลผลสิ้นวัน นับเป็นสัญญาณชัดที่สุดว่าตลาดจดทะเบียนหลักระดับ G7 มองการเข้าถึงแบบ Token ตลอด 24 ชม. เป็นเรื่องการรักษาฐานผู้ลงทุนรายย่อย มากกว่าจะเป็นภัยคุกคาม",
        highlight: { label: "ตัวเลขสำคัญ", value: "$40B", note: "วอลุ่มรวมที่ xStocks ทำไปแล้ว จากผู้ถือกว่า 200,000 ราย รวมถึงเกือบ 20,000 ล้านดอลลาร์ที่ชำระราคาบนเชน — แพลตฟอร์มเปิดตัวเมื่อมิถุนายน 2025 และ Payward เข้าซื้อเมื่อธันวาคมที่ผ่านมา" },
      },
    },
    {
      topic: "tokenization", source: "SEC", time: "11d", url: "https://www.sec.gov/newsroom/press-releases/2026-81-sec-proposes-modernize-rules-registered-transfer-agents",
      hlType: "takeaway",
      en: {
        title: ["SEC moves to modernize ", "transfer agent rules", " — naming blockchain outright"],
        body: "The Securities and Exchange Commission proposed to update the rules and forms that apply to registered transfer agents, with a public comment period open for 60 days after publication in the Federal Register. The proposal addresses electronic recordkeeping and communications and the services transfer agents provide to issuers, investors and other market intermediaries, and the Commission's own framing puts blockchain in scope rather than treating it as an edge case. Jamie Selway, Director of the SEC's Division of Trading and Markets, is named in the release alongside Chairman Paul Atkins.",
        highlight: { label: "Key takeaway", note: "Legal title to a tokenized security lives on the share register, not the chain — so rewriting the transfer agent rulebook is a slower but far more durable route to on-chain securities than the tokenization 'innovation exemption' that remains unveiled." },
      },
      th: {
        title: ["SEC เดินหน้าปรับปรุง ", "กฎ transfer agent", " โดยระบุถึง Blockchain ตรง ๆ"],
        body: "สำนักงาน ก.ล.ต. สหรัฐ (SEC) เสนอปรับปรุงกฎเกณฑ์และแบบฟอร์มที่ใช้กับ transfer agent ที่จดทะเบียน โดยเปิดรับฟังความคิดเห็นสาธารณะเป็นเวลา 60 วันนับจากวันประกาศใน Federal Register ข้อเสนอครอบคลุมการเก็บบันทึกและการสื่อสารทางอิเล็กทรอนิกส์ รวมถึงบริการที่ transfer agent ให้แก่ผู้ออกหลักทรัพย์ ผู้ลงทุน และตัวกลางอื่นในตลาด ขณะที่ถ้อยคำของ SEC เองวาง Blockchain ไว้ในขอบเขตของกฎ แทนที่จะมองเป็นกรณีชายขอบ ทั้งนี้ประกาศระบุชื่อ Jamie Selway ผู้อำนวยการฝ่าย Trading and Markets ของ SEC ควบคู่กับประธาน Paul Atkins",
        highlight: { label: "สรุปสำคัญ", note: "กรรมสิทธิ์ตามกฎหมายของหลักทรัพย์แบบ Token อยู่ที่ทะเบียนผู้ถือหุ้น ไม่ใช่บนเชน — การเขียนกฎ transfer agent ใหม่จึงเป็นเส้นทางที่ช้ากว่าแต่ทนทานกว่ามาก เมื่อเทียบกับ 'innovation exemption' ด้าน Tokenization ที่ยังไม่ออกมาเสียที" },
      },
    },
    {
      topic: "tokenization", source: "Markets Media", time: "4d", url: "https://www.marketsmedia.com/amc-and-robinhood-fight-over-tokenized-stocks/",
      hlType: "quote",
      en: {
        title: ["AMC's CEO turns ", "issuer consent", " into the fight over stock tokens"],
        body: "On September 3 AMC Entertainment CEO Adam Aron attacked Robinhood for issuing AMC tokens without the company's consent, saying 'We immediately are going to have our outside securities counsel look into this.' His objection was structural: the arrangement 'decouples stock token ownership from a company's ability to control its own capital raising efforts, deprives token owners of shareholder rights such as being able to vote their stock.' Robinhood CEO Vlad Tenev replied on X asking 'What's the concern?' Bullish CEO Tom Farley weighed in that 'Issuers HATE synthetic tokens…The next wave is issuer sponsored tokens,' while Securitize CEO Carlos Domingo said 'This was bound to happen…I would also not want people creating offshore derivatives of our stock.' Per CoinShares data cited in the article, tokenized equities grew from $2.5 billion at the start of 2026 to $13.4 billion by September 1.",
        highlight: { note: "contemptible, outrageous, disgusting, detestable, inexcusable, vile", by: "Adam Aron, CEO, AMC Entertainment — on tokens of his company's stock issued without consent" },
      },
      th: {
        title: ["ซีอีโอ AMC จุดประเด็น ", "ความยินยอมของผู้ออกหลักทรัพย์", " ในศึก Token หุ้น"],
        body: "เมื่อ 3 ก.ย. Adam Aron ซีอีโอ AMC Entertainment โจมตี Robinhood ที่ออก Token อ้างอิงหุ้น AMC โดยบริษัทไม่ได้ยินยอม พร้อมระบุว่า 'เราจะให้ที่ปรึกษากฎหมายหลักทรัพย์ภายนอกตรวจสอบเรื่องนี้ทันที' ข้อคัดค้านของเขาเป็นเชิงโครงสร้าง คือโครงสร้างนี้ 'แยกความเป็นเจ้าของ Token หุ้นออกจากความสามารถของบริษัทในการควบคุมการระดมทุนของตัวเอง และทำให้ผู้ถือ Token เสียสิทธิผู้ถือหุ้น เช่น สิทธิออกเสียง' ด้าน Vlad Tenev ซีอีโอ Robinhood ตอบบน X ว่า 'กังวลเรื่องอะไรหรือ' ขณะที่ Tom Farley ซีอีโอ Bullish ร่วมวงว่า 'ผู้ออกหลักทรัพย์เกลียด Token แบบ synthetic… คลื่นลูกถัดไปคือ Token ที่ผู้ออกสนับสนุนเอง' ส่วน Carlos Domingo ซีอีโอ Securitize ระบุว่า 'เรื่องนี้ต้องเกิดขึ้นอยู่แล้ว… ผมเองก็คงไม่อยากให้ใครไปสร้างอนุพันธ์นอกประเทศอ้างอิงหุ้นของเรา' ทั้งนี้ข้อมูล CoinShares ที่บทความอ้างถึงระบุว่าหุ้นแบบ Token โตจาก 2.5 พันล้านดอลลาร์ต้นปี 2026 เป็น 13.4 พันล้านดอลลาร์ ณ 1 ก.ย.",
        highlight: { note: "น่ารังเกียจ อุกอาจ น่าขยะแขยง น่าชิงชัง ให้อภัยไม่ได้ เลวทราม", by: "Adam Aron, CEO, AMC Entertainment — ต่อ Token อ้างอิงหุ้นบริษัทที่ออกโดยไม่ได้รับความยินยอม" },
      },
    },
    {
      topic: "tokenization", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/esma-flags-tokenized-stock-fragmentation-prediction-market-risks/",
      hlType: "data",
      en: {
        title: ["ESMA warns tokenized stock wrappers ", "fragment liquidity", " as the market hits €1.9B"],
        body: "In its latest Trends, Risks and Vulnerabilities report, ESMA referred to the structured debt notes that are backed one-for-one by stocks as 'wrapped' structures and noted their growth over 18 months from around €300 million to almost €1.9 billion in market cap. The regulator warned that issuing different tokenized versions of the same stock could fragment liquidity, and that because ownership of the underlying stock is off-chain, there is no on-chain single source of truth. It observed that the major issuers — xStocks, Ondo Global Markets and Robinhood — have all issued EU prospectuses, suggesting a large share of the market may be EU-based. ESMA's own summary states that tokenisation of equities remains at an early stage but that adoption momentum is increasing.",
        highlight: { label: "By the numbers", value: "€1.9B", note: "market cap of EU 'wrapped' tokenized stocks, up from about €300M eighteen months earlier — growth that arrives with the regulator's first explicit fragmentation warning" },
      },
      th: {
        title: ["ESMA เตือน Token หุ้นแบบ wrapper ", "ทำสภาพคล่องแตกกระจาย", " ขณะตลาดแตะ €1.9B"],
        body: "ในรายงาน Trends, Risks and Vulnerabilities ฉบับล่าสุด ESMA เรียกตราสารหนี้แบบมีโครงสร้างที่หนุนหลัง 1 ต่อ 1 ด้วยหุ้นว่าโครงสร้างแบบ 'wrapped' และระบุว่ามูลค่าตลาดโตในรอบ 18 เดือนจากราว 300 ล้านยูโรเป็นเกือบ 1.9 พันล้านยูโร หน่วยงานกำกับเตือนว่าการออก Token หลายเวอร์ชันที่อ้างอิงหุ้นตัวเดียวกันอาจทำให้สภาพคล่องแตกกระจาย และเนื่องจากความเป็นเจ้าของหุ้นอ้างอิงอยู่นอกเชน จึงไม่มีแหล่งข้อมูลความจริงเพียงแหล่งเดียวบนเชน พร้อมตั้งข้อสังเกตว่าผู้ออกรายใหญ่ทั้ง xStocks, Ondo Global Markets และ Robinhood ต่างยื่น prospectus ในสหภาพยุโรป ซึ่งบ่งชี้ว่าสัดส่วนใหญ่ของตลาดอาจอยู่ในยุโรป ขณะที่สรุปของ ESMA เองระบุว่า Tokenization ของหุ้นยังอยู่ในระยะเริ่มต้น แต่โมเมนตัมการยอมรับกำลังเพิ่มขึ้น",
        highlight: { label: "ตัวเลขสำคัญ", value: "€1.9B", note: "มูลค่าตลาดของหุ้นแบบ Token ชนิด 'wrapped' ในยุโรป เพิ่มจากราว 300 ล้านยูโรเมื่อ 18 เดือนก่อน — เติบโตพร้อมกับคำเตือนเรื่องสภาพคล่องแตกกระจายครั้งแรกของหน่วยงานกำกับ" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "The Block", time: "4d", url: "https://www.theblock.co/news/ecosystems/2026-09-08-cronos-post-mortem-413724",
      hlType: "data",
      en: {
        title: ["Cronos validators ", "roll back 10,961 blocks", " to claw back $111m"],
        body: "After an attacker drove up the price of TONIC, Tectonic's thinly traded governance token, and about ten minutes later used the inflated collateral to borrow $120.4 million across nine markets, Cronos validators halted the network at block 90,907,150 and rolled it back to block 90,896,188 — reversing 1 hour 54 minutes of chain history, or 10,961 blocks. The rollback restored roughly $111.2 million, while about $9.19 million, or 7.6% of the affected funds, had already been transferred off the network. The attack occurred on August 30, was identified about 36 minutes after it began, and block production resumed about 11 hours later. Crucially, transactions during the period were reversed regardless of whether they were related to the exploit.",
        highlight: { label: "By the numbers", value: "10,961", note: "blocks reversed by validator vote — the sharpest reminder that settlement finality on a small validator set is a governance decision, not a cryptographic guarantee" },
      },
      th: {
        title: ["validator ของ Cronos ", "ย้อนเชน 10,961 บล็อก", " ดึงเงินคืน $111m"],
        body: "หลังผู้โจมตีดันราคา TONIC ซึ่งเป็น governance token ของ Tectonic ที่มีสภาพคล่องบาง แล้วราว 10 นาทีต่อมาใช้มูลค่าหลักประกันที่ถูกปั่นไปกู้เงิน 120.4 ล้านดอลลาร์ใน 9 ตลาด validator ของ Cronos ได้หยุดเครือข่ายที่บล็อก 90,907,150 และย้อนกลับไปที่บล็อก 90,896,188 เท่ากับย้อนประวัติเชน 1 ชั่วโมง 54 นาที หรือ 10,961 บล็อก การย้อนกลับครั้งนี้กู้มูลค่าคืนได้ราว 111.2 ล้านดอลลาร์ ขณะที่ราว 9.19 ล้านดอลลาร์ หรือ 7.6% ของเงินที่ได้รับผลกระทบ ถูกโอนออกนอกเครือข่ายไปแล้ว เหตุเกิดเมื่อ 30 ส.ค. ตรวจพบราว 36 นาทีหลังเริ่มโจมตี และกลับมาผลิตบล็อกได้ราว 11 ชั่วโมงถัดมา จุดสำคัญคือธุรกรรมทั้งหมดในช่วงเวลานั้นถูกย้อนกลับ ไม่ว่าจะเกี่ยวข้องกับการโจมตีหรือไม่ก็ตาม",
        highlight: { label: "ตัวเลขสำคัญ", value: "10,961", note: "จำนวนบล็อกที่ถูกย้อนด้วยมติของ validator — เตือนชัดที่สุดว่าความเสร็จสิ้นของการชำระราคาบนเชนที่มี validator น้อยราย คือการตัดสินใจเชิงกำกับ ไม่ใช่หลักประกันเชิงคริปโทกราฟี" },
      },
    },
    {
      topic: "blockchain", source: "Ethereum Foundation", time: "5d", url: "https://blog.ethereum.org/en/2026/09/07/protocol-priorities",
      hlType: "quote",
      en: {
        title: ["Ethereum Foundation sets ", "December 2029", " as its quantum-resistance deadline"],
        body: "The EF Protocol cluster said it is aiming for Ethereum L1 to be quantum-resistant across all three layers — execution, consensus and data — by December 2029, and will treat that self-imposed deadline as non-negotiable at least until January 2027, when quantum progress will be reassessed with the guidance of outside experts. The schedule is tight by its own arithmetic: shipping Glamsterdam in December 2026 and the final fork in December 2029 requires an average cadence of 7.2 months per fork. Hegotá, the fork immediately after Glamsterdam, carries EIP-7805 Fork-choice enforced Inclusion Lists (FOCIL) on the consensus layer and EIP-8141 Frame Transaction on the execution layer. The post says Ethereum L1 should plan for Q-day happening as early as 2030.",
        highlight: { note: "Hegotá is not the PQ fork; it is the fork that decides whether the PQ forks happen on time.", by: "Ethereum Foundation Protocol cluster, 'EF Protocol: Current and Emerging Priorities'" },
      },
      th: {
        title: ["Ethereum Foundation กำหนดเส้นตาย ", "ธันวาคม 2029", " ต้านควอนตัมให้ได้"],
        body: "ทีม EF Protocol ระบุว่าตั้งเป้าให้ Ethereum L1 ต้านทานควอนตัมได้ครบทั้งสามชั้น คือ execution, consensus และ data ภายในธันวาคม 2029 และจะถือว่าเส้นตายที่กำหนดเองนี้ต่อรองไม่ได้ อย่างน้อยจนถึงมกราคม 2027 ซึ่งจะประเมินความคืบหน้าด้านควอนตัมใหม่โดยมีผู้เชี่ยวชาญภายนอกให้คำแนะนำ ตารางเวลานี้แน่นมากตามการคำนวณของทีมเอง เพราะการส่ง Glamsterdam ในธันวาคม 2026 และ fork สุดท้ายในธันวาคม 2029 ต้องใช้จังหวะเฉลี่ย 7.2 เดือนต่อ fork ทั้งนี้ Hegotá ซึ่งเป็น fork ถัดจาก Glamsterdam มีรายการหลักคือ EIP-7805 Fork-choice enforced Inclusion Lists (FOCIL) ในชั้น consensus และ EIP-8141 Frame Transaction ในชั้น execution โดยบทความระบุว่า Ethereum L1 ควรวางแผนเผื่อว่า Q-day อาจมาถึงเร็วสุดในปี 2030",
        highlight: { note: "Hegotá ไม่ใช่ fork ที่ทำ post-quantum แต่เป็น fork ที่ชี้ขาดว่า fork post-quantum ทั้งหลายจะมาทันเวลาหรือไม่", by: "ทีม Ethereum Foundation Protocol, 'EF Protocol: Current and Emerging Priorities'" },
      },
    },
    {
      topic: "blockchain", source: "Ledger Insights", time: "3d", url: "https://www.ledgerinsights.com/matter-labs-open-sources-prividium-core-as-bundesbank-tests-it-interoperability-next/",
      hlType: "know",
      en: {
        title: ["Bundesbank becomes the first to ", "self-host Matter Labs' Prividium", ""],
        body: "Matter Labs open-sourced the core of Prividium, its privacy-focused blockchain platform for financial institutions, releasing the access-control engine and large parts of the ZKsync stack. The Deutsche Bundesbank is the first institution to deploy the platform in its own infrastructure, in a self-hosted configuration where the data stays inside the central bank's environment; the purpose of the test is not disclosed. Matter Labs keeps the administration console, user access tooling and connectors — including core banking integration — as paid products. Prior institutional users of the stack include Deutsche Bank's DAMA 2 project, a UBS digital gold proof of concept and the Cari Network for tokenized deposits.",
        highlight: { label: "Know this", note: "Prividium keeps transaction data inside the institution and publishes only a cryptographic proof that the ledger was updated correctly, recorded on Ethereum or another compatible chain — the 'private chain, public proofs' design banks have been converging on." },
      },
      th: {
        title: ["Bundesbank เป็นรายแรกที่ ", "รัน Prividium ของ Matter Labs เอง", ""],
        body: "Matter Labs เปิดซอร์สส่วนแกนของ Prividium ซึ่งเป็นแพลตฟอร์ม Blockchain เน้นความเป็นส่วนตัวสำหรับสถาบันการเงิน โดยปล่อยเอนจินควบคุมสิทธิ์เข้าถึงและส่วนใหญ่ของ ZKsync stack ออกมา ทั้งนี้ Deutsche Bundesbank เป็นสถาบันแรกที่ติดตั้งแพลตฟอร์มนี้บนโครงสร้างพื้นฐานของตัวเอง ในรูปแบบ self-hosted ที่ข้อมูลอยู่ภายในสภาพแวดล้อมของธนาคารกลางทั้งหมด โดยยังไม่เปิดเผยวัตถุประสงค์ของการทดสอบ ขณะที่ Matter Labs ยังเก็บคอนโซลผู้ดูแลระบบ เครื่องมือจัดการสิทธิ์ผู้ใช้ และตัวเชื่อมต่อ รวมถึงการเชื่อมกับระบบ core banking ไว้เป็นผลิตภัณฑ์ที่ต้องจ่ายเงิน ผู้ใช้งานระดับสถาบันก่อนหน้านี้มีทั้งโครงการ DAMA 2 ของ Deutsche Bank, proof of concept ทองคำดิจิทัลของ UBS และ Cari Network สำหรับเงินฝากแบบ Token",
        highlight: { label: "รู้ไว้", note: "Prividium เก็บข้อมูลธุรกรรมไว้ในสถาบันเอง แล้วเผยแพร่ออกมาเพียงหลักฐานเชิงคริปโทกราฟีว่าบัญชีถูกอัปเดตอย่างถูกต้อง โดยบันทึกบน Ethereum หรือเชนที่เข้ากันได้ — คือดีไซน์ 'เชนส่วนตัว พิสูจน์สาธารณะ' ที่ฝั่งธนาคารกำลังมาบรรจบกัน" },
      },
    },
    {
      topic: "blockchain", source: "Clearstream", time: "3w", url: "https://www.clearstream.com/clearstream-en/newsroom/260817-5436274",
      hlType: "takeaway",
      en: {
        title: ["Clearstream joins ECB testing for ", "Pontes DLT settlement", ", live 21 September"],
        body: "Clearstream will participate in the Eurosystem's Pontes testing programme, supporting the introduction of DLT-based settlement in central bank money. The Deutsche Börse subsidiary said it will engage in a series of end-to-end tests ahead of the Pontes launch, set for 21 September 2026, in line with the ECB's testing and certification framework for market participants — validating settlement processes, connectivity and operational readiness within the Pontes ecosystem. The joint programme focuses on demonstrating interoperability between market infrastructures and validating delivery-versus-payment settlement in central bank money.",
        highlight: { label: "Key takeaway", note: "Europe's tokenized-securities projects have mostly lacked a true central-bank-money cash leg; Pontes is the production link between market DLT platforms and TARGET, which is why certification testing by a major ICSD is the practical gate on day-one usability." },
      },
      th: {
        title: ["Clearstream เข้าร่วมทดสอบ ", "Pontes ของ ECB", " ก่อนเปิดใช้ 21 ก.ย."],
        body: "Clearstream จะเข้าร่วมโครงการทดสอบ Pontes ของ Eurosystem เพื่อสนับสนุนการนำการชำระราคาบน distributed ledger ด้วยเงินธนาคารกลางมาใช้จริง โดยบริษัทในเครือ Deutsche Börse ระบุว่าจะทำการทดสอบแบบ end-to-end หลายรอบก่อนการเปิดใช้ Pontes ที่กำหนดไว้วันที่ 21 กันยายน 2026 ตามกรอบการทดสอบและการรับรองสำหรับผู้ร่วมตลาดของ ECB เพื่อตรวจสอบกระบวนการชำระราคา การเชื่อมต่อ และความพร้อมด้านปฏิบัติการภายในระบบนิเวศ Pontes ทั้งนี้โครงการทดสอบร่วมมุ่งแสดงการทำงานร่วมกัน (interoperability) ระหว่างโครงสร้างพื้นฐานตลาด และตรวจสอบการชำระราคาแบบ delivery-versus-payment ด้วยเงินธนาคารกลาง",
        highlight: { label: "สรุปสำคัญ", note: "โครงการหลักทรัพย์แบบ Token ในยุโรปส่วนใหญ่ยังขาดขาเงินสดที่เป็นเงินธนาคารกลางจริง ๆ — Pontes คือสะพานระดับใช้งานจริงระหว่างแพลตฟอร์ม DLT ของตลาดกับ TARGET การที่ ICSD รายใหญ่เข้าทดสอบรับรองจึงเป็นด่านชี้ขาดว่าจะใช้งานได้ตั้งแต่วันแรกหรือไม่" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "PR Newswire", time: "11d", url: "https://www.prnewswire.com/news-releases/group-of-leading-international-financial-institutions-to-establish-stablecoin-enterprise-302866318.html",
      hlType: "data",
      en: {
        title: ["21 of the world's largest banks ", "commit to a jointly owned stablecoin", ""],
        body: "Twenty-one leading international financial institutions committed to establish a new company in the second half of 2026, subject to closing conditions, to support the issuance of a stablecoin solution. The group spans North America — Bank of America, Capital One, Citi, Fidelity Investments, Goldman Sachs, PNC Financial Services, Scotiabank, TD Bank Group, Wells Fargo and WisdomTree — Europe, with Banco Santander, BBVA, Commerzbank, Crédit Agricole, Deutsche Bank, Lloyds Banking Group, Coöperatieve Rabobank and UBS, plus MUFG Bank in East Asia, Sirius International Holding in the Middle East and Standard Bank in Africa. The initial focus is a USD-denominated stablecoin, with a longer-term ambition of expanding into additional G7 currencies and a euro offering as a priority; the group aims to go to market in the first half of 2027 and says the initiative intends to be 'GENIUS Act and MiCA-compliant, as applicable'.",
        highlight: { label: "By the numbers", value: "21", note: "institutions across five regions behind a single stablecoin venture — the largest cross-border bank coalition yet assembled around one token, putting the biggest US and European balance sheets into direct competition with Tether and Circle" },
      },
      th: {
        title: ["21 ธนาคารใหญ่ที่สุดของโลก ", "จับมือออก Stablecoin ร่วมกัน", ""],
        body: "สถาบันการเงินระดับโลก 21 แห่งตกลงจัดตั้งบริษัทใหม่ภายในครึ่งหลังของปี 2026 (ขึ้นกับเงื่อนไขการปิดดีล) เพื่อรองรับการออก Stablecoin กลุ่มนี้ครอบคลุมอเมริกาเหนือ — Bank of America, Capital One, Citi, Fidelity Investments, Goldman Sachs, PNC Financial Services, Scotiabank, TD Bank Group, Wells Fargo และ WisdomTree — ยุโรป ได้แก่ Banco Santander, BBVA, Commerzbank, Crédit Agricole, Deutsche Bank, Lloyds Banking Group, Coöperatieve Rabobank และ UBS พร้อมด้วย MUFG Bank จากเอเชียตะวันออก Sirius International Holding จากตะวันออกกลาง และ Standard Bank จากแอฟริกา โดยระยะแรกเน้น Stablecoin สกุลดอลลาร์สหรัฐ และมีเป้าหมายระยะยาวขยายไปสกุลเงิน G7 อื่น ๆ ให้สกุลยูโรเป็นลำดับต้น ทั้งนี้กลุ่มตั้งเป้านำผลิตภัณฑ์ออกสู่ตลาดในครึ่งแรกของปี 2027 และระบุว่าโครงการตั้งใจจะปฏิบัติตาม 'GENIUS Act และ MiCA เท่าที่เกี่ยวข้อง'",
        highlight: { label: "ตัวเลขสำคัญ", value: "21", note: "สถาบันการเงินจาก 5 ภูมิภาคที่อยู่เบื้องหลัง Stablecoin ตัวเดียว — เป็นการรวมตัวข้ามพรมแดนของธนาคารที่ใหญ่ที่สุดเท่าที่เคยมีรอบ Token เดียว และดันงบดุลก้อนใหญ่สุดของสหรัฐกับยุโรปเข้าแข่งกับ Tether และ Circle โดยตรง" },
      },
    },
    {
      topic: "fintech", source: "U.S. Treasury", time: "3w", url: "https://home.treasury.gov/news/press-releases/sb0605",
      hlType: "data",
      en: {
        title: ["Treasury opens its first ", "GENIUS Act rulemaking", " on who may issue stablecoins"],
        body: "The U.S. Department of the Treasury issued a Notice of Proposed Rulemaking implementing section 3 of the GENIUS Act, setting out who may issue, offer or sell payment stablecoins in the United States. Beginning on January 18, 2027 — the expected effective date of the Act — a person generally may not issue a payment stablecoin in the United States without an appropriate federal or state licence. Digital asset service providers generally may not offer, sell or otherwise make available foreign-issued payment stablecoins unless the foreign issuer has the technological capability to comply with the terms of any lawful order and any reciprocal arrangement between the U.S. and the issuer's home jurisdiction. From July 18, 2028, providers generally may not offer or sell any payment stablecoin to persons in the United States unless it was issued by a licensed issuer. Comments are due 60 days after Federal Register publication.",
        highlight: { label: "By the numbers", value: "Jan 2027", note: "licensing bites first, then from July 2028 only licensed issuers' stablecoins may be sold to US persons — the compliance clock for every issuer, exchange and wallet serving US customers, foreign ones included" },
      },
      th: {
        title: ["Treasury เปิดร่างกฎ ", "GENIUS Act ฉบับแรก", " ชี้ใครออก Stablecoin ได้"],
        body: "กระทรวงการคลังสหรัฐออก Notice of Proposed Rulemaking เพื่อบังคับใช้มาตรา 3 ของ GENIUS Act กำหนดว่าใครสามารถออก เสนอขาย หรือขาย Stablecoin เพื่อการชำระเงินในสหรัฐได้บ้าง โดยตั้งแต่วันที่ 18 มกราคม 2027 ซึ่งเป็นวันที่คาดว่ากฎหมายจะมีผลบังคับใช้ บุคคลโดยทั่วไปจะออก Stablecoin เพื่อการชำระเงินในสหรัฐไม่ได้ หากไม่ได้รับใบอนุญาตระดับรัฐบาลกลางหรือระดับมลรัฐที่เหมาะสม ขณะที่ผู้ให้บริการสินทรัพย์ดิจิทัลโดยทั่วไปจะเสนอขายหรือเปิดให้เข้าถึง Stablecoin ที่ออกโดยผู้ออกต่างประเทศไม่ได้ เว้นแต่ผู้ออกรายนั้นมีความสามารถทางเทคโนโลยีที่จะปฏิบัติตามคำสั่งโดยชอบด้วยกฎหมาย และมีข้อตกลงต่างตอบแทนระหว่างสหรัฐกับประเทศต้นทางของผู้ออก และตั้งแต่ 18 กรกฎาคม 2028 ผู้ให้บริการจะเสนอขาย Stablecoin ให้บุคคลในสหรัฐไม่ได้ หากไม่ได้ออกโดยผู้ออกที่มีใบอนุญาต ทั้งนี้เปิดรับความเห็น 60 วันหลังประกาศใน Federal Register",
        highlight: { label: "ตัวเลขสำคัญ", value: "ม.ค. 2027", note: "ใบอนุญาตมีผลก่อน จากนั้นตั้งแต่ ก.ค. 2028 เฉพาะ Stablecoin ของผู้ออกที่มีใบอนุญาตเท่านั้นที่ขายให้บุคคลในสหรัฐได้ — เป็นนาฬิกานับถอยหลังของผู้ออก กระดาน และกระเป๋าทุกรายที่ให้บริการลูกค้าสหรัฐ รวมถึงผู้ออกต่างชาติ" },
      },
    },
    {
      topic: "fintech", source: "U.S. Bank", time: "3d", url: "https://ir.usbank.com/news-events/news/news-details/2026/U-S--Bank-Launches-USBDC-Stablecoin/default.aspx",
      hlType: "quote",
      en: {
        title: ["U.S. Bank runs its own stablecoin ", "live on public Stellar", ""],
        body: "U.S. Bank announced the successful execution of a live pilot transaction using USBDC, the bank's proprietary U.S. dollar-backed stablecoin, to enable a cross-border payment between U.S. Bank entities in North America and Europe. The transaction was completed on the Stellar blockchain, building on the bank's strategic relationship with the Stellar Development Foundation. The pilot evaluated minting, payment redemption, freezing and clawback capabilities, and validated the bank's internally developed Digital Asset Platform; future applications under exploration include enhanced liquidity management, collateral mobility and cross-border treasury operations. It lands eight days after the same bank-heavy cohort announced a shared consortium token — proof that banks are pursuing proprietary and collective routes in parallel.",
        highlight: { note: "This live pilot demonstrates our ability to accelerate global cash management and money movement capabilities.", by: "Gunjan Kedia, Chairman and CEO, U.S. Bank" },
      },
      th: {
        title: ["U.S. Bank รัน Stablecoin ของตัวเอง ", "บน Stellar สาธารณะจริง", ""],
        body: "U.S. Bank ประกาศความสำเร็จในการทำธุรกรรมนำร่องจริงด้วย USBDC ซึ่งเป็น Stablecoin หนุนด้วยดอลลาร์สหรัฐของธนาคารเอง เพื่อชำระเงินข้ามพรมแดนระหว่างนิติบุคคลของ U.S. Bank ในอเมริกาเหนือและยุโรป ธุรกรรมนี้ทำบน Blockchain ของ Stellar ต่อยอดจากความสัมพันธ์เชิงกลยุทธ์ระหว่างธนาคารกับ Stellar Development Foundation โดยการนำร่องครั้งนี้ทดสอบความสามารถด้านการ mint การไถ่ถอนเพื่อชำระเงิน การอายัด และการเรียกคืน (clawback) พร้อมตรวจสอบ Digital Asset Platform ที่ธนาคารพัฒนาขึ้นเอง ขณะที่การใช้งานในอนาคตที่กำลังศึกษามีทั้งการบริหารสภาพคล่อง การเคลื่อนย้ายหลักประกัน และการบริหารเงินสดข้ามพรมแดน ทั้งนี้ข่าวนี้ตามมา 8 วันหลังกลุ่มธนาคารชุดใหญ่ประกาศ Token ร่วมของกลุ่ม สะท้อนว่าธนาคารเดินทั้งเส้นทางของตัวเองและเส้นทางร่วมกันไปพร้อมกัน",
        highlight: { note: "การนำร่องจริงครั้งนี้แสดงให้เห็นความสามารถของเราในการเร่งงานบริหารเงินสดและการเคลื่อนย้ายเงินระดับโลก", by: "Gunjan Kedia, Chairman and CEO, U.S. Bank" },
      },
    },
    {
      topic: "fintech", source: "The Block", time: "4d", url: "https://www.theblock.co/news/business/2026-09-08-visa-stablecoin-settlement-tops-20-billion-annualized-run-rate-up-more-than-15x-year-over-year-413749",
      hlType: "data",
      en: {
        title: ["Visa's stablecoin settlement passes a ", "$20B annualised run rate", ""],
        body: "Visa's stablecoin settlement volume has surpassed a $20 billion annualised run rate, up more than 15x year over year, with more than 160 stablecoin-linked card programs live globally and payment volume on those programs up nearly 200% from a year earlier. The rails are also beginning to pull working capital on-chain: Credit Coop, working with Visa, has built a stablecoin-denominated revolving credit facility secured by settlement receivables, using daily Visa settlement files and Credit Coop's Spigot smart contract to size funding and automate repayments. Borrowing costs for participating programs have come down by as much as 30% as more lenders underwrote the facilities; Credit Coop has financed more than $2.5 billion in cumulative volume since 2023 and Rain approximately $2 billion.",
        highlight: { label: "By the numbers", value: "$20B", note: "annualised stablecoin settlement at Visa, more than 15x higher year over year — the clearest hard number yet that a card network is settling in stablecoins at scale rather than piloting" },
      },
      th: {
        title: ["การชำระราคาด้วย Stablecoin ของ Visa ทะลุ ", "$20B ต่อปี", ""],
        body: "ปริมาณการชำระราคาด้วย Stablecoin ของ Visa ทะลุอัตราต่อปีที่ 2 หมื่นล้านดอลลาร์ เพิ่มขึ้นกว่า 15 เท่าจากปีก่อน โดยมีโปรแกรมบัตรที่เชื่อมกับ Stablecoin เปิดใช้งานทั่วโลกกว่า 160 โปรแกรม และปริมาณการชำระเงินบนโปรแกรมเหล่านี้โตเกือบ 200% จากปีก่อน ขณะเดียวกันรางนี้เริ่มดึงเงินทุนหมุนเวียนขึ้นเชนด้วย โดย Credit Coop ร่วมกับ Visa สร้างวงเงินสินเชื่อหมุนเวียนสกุล Stablecoin ที่มีลูกหนี้จากการชำระราคาเป็นหลักประกัน ใช้ไฟล์ชำระราคารายวันของ Visa และ smart contract ชื่อ Spigot ของ Credit Coop ในการกำหนดวงเงินและทำการชำระคืนอัตโนมัติ ทั้งนี้ต้นทุนการกู้ของโปรแกรมที่เข้าร่วมลดลงมากถึง 30% เมื่อมีผู้ให้กู้เข้ามารับความเสี่ยงมากขึ้น โดย Credit Coop ปล่อยสินเชื่อสะสมแล้วกว่า 2.5 พันล้านดอลลาร์ตั้งแต่ปี 2023 และ Rain ราว 2 พันล้านดอลลาร์",
        highlight: { label: "ตัวเลขสำคัญ", value: "$20B", note: "อัตราการชำระราคาด้วย Stablecoin ต่อปีของ Visa เพิ่มกว่า 15 เท่า YoY — เป็นตัวเลขชัดที่สุดว่าเครือข่ายบัตรกำลังชำระราคาด้วย Stablecoin ในระดับใช้งานจริง ไม่ใช่แค่โครงการนำร่อง" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "SEC / InfoQuest", time: "10d", url: "https://www.infoquest.co.th/2026/642058",
      hlType: "data",
      en: {
        title: ["Thai SEC finalises its ", "digital-asset Travel Rule", ", effective February 2027"],
        body: "Thailand's SEC issued its rules on managing the risks of transferring and receiving digital assets — the 'Travel Rule for digital assets' — which take effect from 27 February 2027. Licensed operators must put in place written policies and procedures for transfer-risk management; collect customer and counterparty information, including verifying the counterparty VASP and, for self-hosted wallets, verifying ownership or control; transmit originator and beneficiary data along with the transfer instruction; and retain supporting data for every transfer for at least five years, retrievable for inspection. The regime aligns Thailand with international standards aimed at stopping digital assets being used as a money-laundering conduit.",
        highlight: { label: "By the numbers", value: "27 Feb 2027", note: "the hard deadline for every Thai exchange, broker, dealer and custodian to rebuild transfer flows — with self-hosted-wallet ownership verification the operationally hardest piece" },
      },
      th: {
        title: ["ก.ล.ต. คลอดเกณฑ์ ", "Travel Rule สินทรัพย์ดิจิทัล", " มีผล ก.พ. 2570"],
        body: "ก.ล.ต. ออกหลักเกณฑ์การจัดให้มีการบริหารและจัดการความเสี่ยงเกี่ยวกับการโอนและรับโอนสินทรัพย์ดิจิทัล หรือ 'หลักเกณฑ์ Travel Rule สำหรับสินทรัพย์ดิจิทัล' ซึ่งมีผลใช้บังคับตั้งแต่วันที่ 27 กุมภาพันธ์ 2570 เป็นต้นไป โดยผู้ประกอบธุรกิจที่ได้รับใบอนุญาตต้องจัดให้มีนโยบายและขั้นตอนการปฏิบัติงานสำหรับบริหารความเสี่ยงจากการโอน ต้องรวบรวมข้อมูลของลูกค้าและคู่ธุรกรรม รวมถึงตรวจสอบผู้ประกอบธุรกิจปลายทาง และสำหรับกระเป๋าที่ลูกค้าดูแลเอง (self-hosted wallet) ต้องตรวจสอบความเป็นเจ้าของหรือการควบคุม ต้องส่งข้อมูลผู้โอนและผู้รับโอนไปพร้อมคำสั่งโอน และต้องเก็บข้อมูลประกอบการโอนทุกธุรกรรมไว้อย่างน้อย 5 ปี ให้ตรวจสอบได้ ทั้งนี้เกณฑ์ดังกล่าวทำให้ไทยสอดคล้องกับมาตรฐานสากลที่มุ่งไม่ให้สินทรัพย์ดิจิทัลถูกใช้เป็นทางผ่านการฟอกเงิน",
        highlight: { label: "ตัวเลขสำคัญ", value: "27 ก.พ. 2570", note: "เส้นตายจริงที่กระดาน นายหน้า ผู้ค้า และ custodian ไทยทุกรายต้องรื้อระบบการโอนให้เสร็จ — โดยการตรวจสอบความเป็นเจ้าของ self-hosted wallet คือส่วนที่ยากที่สุดในทางปฏิบัติ" },
      },
    },
    {
      topic: "set", source: "SEC / RYT9", time: "3w", url: "https://www.ryt9.com/s/iq/12839165",
      hlType: "know",
      en: {
        title: ["Thai SEC consults on ", "crypto ETFs limited to Bitcoin and Ethereum", ""],
        body: "Thailand's SEC opened consultation on draft rules for establishing and supervising crypto ETFs domestically, alongside principles tightening the qualifications of foreign DA Custodians serving mutual funds and private funds that invest in digital assets. In the first phase, funds would be allowed to invest only in Bitcoin and Ethereum. A fund's crypto net exposure in any single denomination must average no less than 80% of net asset value over the accounting year; funds must be run by a licensed asset-management company on a passive-management basis and may be listed for trading only on the stock exchange. Assets must principally be held with a DA Custodian supervised by the Thai SEC. The comment period runs to 20 September 2026.",
        highlight: { label: "Know this", note: "A crypto ETF listed on SET would be the first exchange-traded route for Thai investors into spot BTC and ETH — and the 80%-of-NAV floor plus the Thai-custodian default decide whether domestic or offshore custodians capture the assets." },
      },
      th: {
        title: ["ก.ล.ต. เปิดรับฟังเกณฑ์ ", "crypto ETF ระยะแรกเฉพาะ Bitcoin–Ethereum", ""],
        body: "ก.ล.ต. เปิดรับฟังความคิดเห็นร่างประกาศเกี่ยวกับการจัดตั้งและแนวทางการกำกับดูแล crypto ETF ในประเทศ ควบคู่กับหลักการยกระดับคุณสมบัติของ DA Custodian ต่างประเทศที่ให้บริการกองทุนรวม (MF) และกองทุนส่วนบุคคล (PF) ที่ลงทุนในสินทรัพย์ดิจิทัล โดยในระยะแรกจะกำหนดให้ลงทุนได้ใน Bitcoin และ Ethereum เท่านั้น ทั้งนี้กองทุนต้องมี crypto net exposure ในสกุลใดสกุลหนึ่งโดยเฉลี่ยรอบปีบัญชีไม่น้อยกว่าร้อยละ 80 ของมูลค่าทรัพย์สินสุทธิ ต้องบริหารโดยบริษัทหลักทรัพย์จัดการกองทุน (บลจ.) ที่ได้รับใบอนุญาตในรูปแบบ passive management และจดทะเบียนซื้อขายเฉพาะในตลาดหลักทรัพย์ อีกทั้งต้องเก็บรักษาทรัพย์สินไว้กับ DA Custodian ที่อยู่ภายใต้การกำกับดูแลของ ก.ล.ต. เป็นหลัก โดยเปิดรับฟังความคิดเห็นจนถึงวันที่ 20 กันยายน 2569",
        highlight: { label: "รู้ไว้", note: "crypto ETF ที่จดทะเบียนใน SET จะเป็นช่องทางแรกที่ผู้ลงทุนไทยเข้าถึง BTC และ ETH แบบ spot ผ่านกระดานหุ้น — และเพดาน 80% ของ NAV บวกกับการให้ใช้ DA Custodian ไทยเป็นหลัก คือตัวชี้ว่า custodian ในประเทศหรือต่างประเทศจะได้ทรัพย์สินก้อนนี้ไป" },
      },
    },
    {
      topic: "set", source: "SEC / RYT9", time: "1d", url: "https://www.ryt9.com/s/iq/12843606",
      hlType: "data",
      en: {
        title: ["Thai SEC proposes a ", "฿5 million daily cap", " on stablecoin transfers"],
        body: "Thailand's SEC opened consultation on principles for supervising stablecoin transactions conducted through digital-asset business operators. The headline limit would cap transfers in and out at no more than 5 million baht per leg, per day, per person, per operator, with three carve-outs: customers that are themselves digital-asset operators or transacting for business purposes, entities supervised by the Bank of Thailand, and market makers on stablecoin/baht pairs. Transfers would have to move between accounts or wallets verified as belonging to the same customer — sending stablecoins in from, or out to, another person's account would be barred. Operators must also monitor asset movements, screen against risk lists, classify customers and check that transaction sources are consistent with a customer's financial capacity. Comments close 25 September 2026.",
        highlight: { label: "By the numbers", value: "฿5M", note: "per day, per customer, per operator — each leg. The BOT-supervised carve-out signals the SEC and central bank are splitting the perimeter rather than competing for it" },
      },
      th: {
        title: ["ก.ล.ต. เสนอเพดานโอน Stablecoin ", "5 ล้านบาทต่อวัน", ""],
        body: "ก.ล.ต. เปิดรับฟังความคิดเห็นต่อหลักการการกำกับดูแลการทำธุรกรรม stablecoin ผ่านผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล โดยเพดานหลักคือมูลค่าการโอนเข้า-ออก แต่ละขาไม่เกิน 5 ล้านบาทต่อวันต่อคนต่อผู้ประกอบธุรกิจฯ แต่ละราย พร้อมข้อยกเว้น 3 กลุ่ม ได้แก่ ลูกค้าที่เป็นผู้ประกอบธุรกิจฯ หรือทำธุรกรรมเพื่อประกอบธุรกิจ ผู้ที่อยู่ภายใต้การกำกับของ ธปท. และลูกค้าที่เป็น market maker คู่ stablecoin กับเงินบาท ทั้งนี้การโอนต้องเป็นระหว่างบัญชีหรือ wallet ที่ยืนยันแล้วว่าเป็นของลูกค้าคนเดียวกัน โดยห้ามโอน stablecoin เข้าจากบัญชีผู้อื่นและออกไปยังบัญชีผู้อื่น นอกจากนี้ผู้ประกอบธุรกิจต้องติดตามความเคลื่อนไหวของทรัพย์สิน คัดกรองรายชื่อความเสี่ยง จัดกลุ่มลูกค้า และตรวจสอบว่าแหล่งที่มาของธุรกรรมสอดคล้องกับฐานะการเงินของลูกค้า เปิดรับฟังความคิดเห็นจนถึงวันที่ 25 กันยายน 2569",
        highlight: { label: "ตัวเลขสำคัญ", value: "฿5M", note: "ต่อวัน ต่อคน ต่อผู้ประกอบธุรกิจแต่ละราย และคิดแยกแต่ละขา · ข้อยกเว้นสำหรับผู้อยู่ใต้การกำกับของ ธปท. สะท้อนว่า ก.ล.ต. กับแบงก์ชาติกำลังแบ่งเขตกำกับกัน ไม่ใช่แย่งกัน" },
      },
    },
    {
      topic: "set", source: "SEC / InfoQuest", time: "5d", url: "https://www.infoquest.co.th/2026/644475",
      hlType: "takeaway",
      en: {
        title: ["Thai SEC fines SIX Network ", "฿6.58 million", " for faking token volume on Bitkub"],
        body: "Thailand's SEC imposed civil penalties totalling 6,579,595.40 baht on SIX Network (Thailand) Co. and three individuals — Watchara Eamvatana, Woraprot Lan and Passawin Kaewlamphun — for placing matched orders that created artificial trading volume in the SIX token on the Bitkub exchange order book between 2019 and 2021. Each of the four was assessed 1,644,898.85 baht. All four were also barred from trading digital assets for six months, and the individuals barred from serving as a director or executive of a digital-asset business for twelve months. The action was brought under section 46(1) together with section 48(2) and (3) of the Digital Asset Business Emergency Decree B.E. 2561.",
        highlight: { label: "Key takeaway", note: "A rare completed market-manipulation case in Thai digital assets — and it lands on a token issuer's own management rather than the exchange, raising the compliance bar for every Thai project that lists its own coin domestically." },
      },
      th: {
        title: ["ก.ล.ต. ปรับ SIX Network ", "6.58 ล้านบาท", " ฐานสร้างปริมาณเทียมบน Bitkub"],
        body: "ก.ล.ต. ใช้มาตรการลงโทษทางแพ่งกับบริษัท ซิคซ์ เนทเวิร์ค (ไทยแลนด์) จำกัด (SIX) และบุคคลอีก 3 ราย คือ นายวัชระ เอมวัฒน์ นายวรพรต หลัน และนายภาสวินท์ แก้วลำพูน เรียกให้ชำระเงินรวม 6,579,595.40 บาท จากพฤติกรรมร่วมกันส่งคำสั่งซื้อขายจับคู่กันเองจนเกิดปริมาณการซื้อขายเทียมของเหรียญ SIX บนกระดานซื้อขายของศูนย์ซื้อขาย Bitkub ในช่วงระหว่างปี 2562–2564 โดยแต่ละรายถูกเรียกชำระรายละ 1,644,898.85 บาท นอกจากนี้ทั้งสี่รายยังถูกห้ามซื้อขายสินทรัพย์ดิจิทัลเป็นเวลาคนละ 6 เดือน และบุคคลทั้งสามถูกห้ามเป็นกรรมการหรือผู้บริหารในธุรกิจสินทรัพย์ดิจิทัลเป็นเวลาคนละ 12 เดือน ทั้งนี้ดำเนินการตามมาตรา 46(1) ประกอบมาตรา 48(2) และ (3) แห่งพระราชกำหนดการประกอบธุรกิจสินทรัพย์ดิจิทัล พ.ศ. 2561",
        highlight: { label: "สรุปสำคัญ", note: "เป็นคดีปั่นตลาดสินทรัพย์ดิจิทัลของไทยที่ปิดจบได้ไม่บ่อยนัก และลงที่ผู้บริหารของผู้ออกเหรียญเอง ไม่ใช่ที่กระดาน — ยกระดับมาตรฐานการกำกับสำหรับทุกโปรเจกต์ไทยที่นำเหรียญตัวเองเข้าซื้อขายในประเทศ" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#D946EF", url: "https://www.marketsmedia.com/archax-adds-u-s-digital-broker-dealer/",
      en: { strong: "Archax", text: " received FINRA approval of its New Member Application for Archax Markets LLC, completing registration as a US digital broker-dealer with the SEC and giving it directly regulated status across the UK (FCA), the EU (CNMV) and the US. It will operate as an introducing broker through correspondent clearing with tZERO Securities and tZERO Digital Asset Securities, and expects to commence US operations in Q3 2026.", src: "Markets Media" },
      th: { strong: "Archax", text: " ได้รับอนุมัติคำขอเป็นสมาชิกใหม่จาก FINRA สำหรับ Archax Markets LLC ทำให้จดทะเบียนเป็น digital broker-dealer ในสหรัฐกับ SEC ครบถ้วน และมีสถานะอยู่ภายใต้การกำกับโดยตรงทั้งในสหราชอาณาจักร (FCA) สหภาพยุโรป (CNMV) และสหรัฐ โดยจะดำเนินงานเป็น introducing broker ผ่านการ clearing กับ tZERO Securities และ tZERO Digital Asset Securities และคาดเริ่มดำเนินงานในสหรัฐไตรมาส 3 ปี 2026", src: "Markets Media" } },
    { color: "#A855F7", url: "https://www.ledgerinsights.com/dlt-pilot-regime-nasdaq-boerse-stuttgart-others-lobby-to-drop-tokenization-caps/",
      en: { strong: "Nasdaq, Boerse Stuttgart", text: " and most firms licensed under the EU's DLT Pilot Regime are lobbying to scrap its tokenization caps. Current law limits securities on a DLT venue to €6 billion in aggregate; the Commission's MISP package proposed lifting that to €100 billion, but a letter signed by ten securities firms and 16 fintech associations asks for the caps to be dropped entirely — or failing that raised to €1.5 trillion — pointing to the DTCC's US no-action letter as permitting a hundred times the EU figure.", src: "Ledger Insights" },
      th: { strong: "Nasdaq, Boerse Stuttgart", text: " และบริษัทส่วนใหญ่ที่ได้ใบอนุญาตภายใต้ DLT Pilot Regime ของสหภาพยุโรป กำลังล็อบบี้ให้ยกเลิกเพดาน Tokenization · กฎหมายปัจจุบันจำกัดมูลค่าหลักทรัพย์บนกระดาน DLT รวมกันที่ 6 พันล้านยูโร ขณะที่ชุดข้อเสนอ MISP ของคณะกรรมาธิการเสนอขยับเป็น 1 แสนล้านยูโร แต่จดหมายที่ลงนามโดยบริษัทหลักทรัพย์ 10 แห่งและสมาคมฟินเทค 16 แห่ง ขอให้ยกเลิกเพดานทั้งหมด หรือหากไม่ได้ก็ให้ขยับเป็น 1.5 ล้านล้านยูโร โดยชี้ไปที่ no-action letter ของ DTCC ในสหรัฐที่เปิดทางให้ทำได้ถึงร้อยเท่าของตัวเลขยุโรป", src: "Ledger Insights" } },
    { color: "#2DD4BF", url: "https://www.prnewswire.com/news-releases/broadridge-launches-dlx-an-always-on-digital-asset-infrastructure-platform-for-tokenized-markets-302873107.html",
      en: { strong: "Broadridge launched DLX", text: ", an end-to-end tokenization and digital asset infrastructure platform spanning bonds, equities, funds, private markets and money market instruments, with multi-chain enablement, a programmable smart contract composer and 24/7 transaction capabilities. It builds on Broadridge's Distributed Ledger Repo, which tokenizes over $351 billion a day, and launches 'with capabilities to connect to the DTCC Tokenization Service via Canton and other networks'.", src: "Broadridge" },
      th: { strong: "Broadridge เปิดตัว DLX", text: " แพลตฟอร์มโครงสร้างพื้นฐาน Tokenization และสินทรัพย์ดิจิทัลแบบครบวงจร ครอบคลุมพันธบัตร หุ้น กองทุน ตลาดเอกชน และตราสารตลาดเงิน พร้อมรองรับหลายเชน มีตัวประกอบ smart contract ที่โปรแกรมได้ และทำธุรกรรมได้ 24/7 · ต่อยอดจาก Distributed Ledger Repo ของ Broadridge ที่ทำ Token มูลค่ากว่า 3.51 แสนล้านดอลลาร์ต่อวัน และเปิดตัว 'พร้อมความสามารถเชื่อมต่อกับ DTCC Tokenization Service ผ่าน Canton และเครือข่ายอื่น'", src: "Broadridge" } },
    { color: "#A855F7", url: "https://www.theblock.co/news/business/2026-08-25-franklin-templeton-hashkey-tokenized-fund-412675",
      en: { strong: "Franklin Templeton", text: " pushed its tokenized US government money fund into Asia, with Hong Kong-regulated HashKey Exchange launching the Franklin OnChain U.S. Government Liquidity Fund on its Earn channel for professional investors only. Per RWA.xyz data cited in the report, total on-chain RWA value reached $38.2 billion as of 23 August, up from $20.6 billion a year earlier, of which $15.6 billion was tokenized US Treasury debt.", src: "The Block" },
      th: { strong: "Franklin Templeton", text: " ดันกองทุนตลาดเงินรัฐบาลสหรัฐแบบ Token เข้าสู่เอเชีย โดย HashKey Exchange ที่กำกับในฮ่องกงเปิดกองทุน Franklin OnChain U.S. Government Liquidity Fund บนช่องทาง Earn สำหรับผู้ลงทุนมืออาชีพเท่านั้น · ข้อมูล RWA.xyz ที่รายงานอ้างถึงระบุว่ามูลค่า RWA บนเชนรวมแตะ 3.82 หมื่นล้านดอลลาร์ ณ 23 ส.ค. เพิ่มจาก 2.06 หมื่นล้านดอลลาร์เมื่อปีก่อน โดยเป็นพันธบัตรรัฐบาลสหรัฐแบบ Token 1.56 หมื่นล้านดอลลาร์", src: "The Block" } },
    { color: "#6366F1", url: "https://www.infoquest.co.th/2026/647460",
      en: { strong: "Thai SEC opened comment", text: " on revised net liquid capital (NC) rules for digital-asset operators, adding risk charges for counterparty risk, digital-asset settlement and delivery risk, and digital-asset fund-management risk. DA Brokers would be able to use domestic DA Exchanges for order routing and client asset custody, while DA Custodian standards are raised with tiered risk rates, segregated customer wallets and stronger key management. Comments close 11 October 2026.", src: "SEC / InfoQuest" },
      th: { strong: "ก.ล.ต. เปิดรับฟังความคิดเห็น", text: "ร่างหลักเกณฑ์ปรับปรุงการดำรงเงินกองทุน NC ของผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล โดยเพิ่มค่าความเสี่ยงจากคู่สัญญา ความเสี่ยงด้านการชำระราคาและส่งมอบสินทรัพย์ดิจิทัล และความเสี่ยงจากการบริหารจัดการเงินทุนสินทรัพย์ดิจิทัล · DA Broker จะใช้บริการ DA Exchange ในประเทศสำหรับส่งคำสั่งและเก็บรักษาทรัพย์สินลูกค้าได้ ขณะที่ยกระดับมาตรฐาน DA Custodian ด้วยอัตราความเสี่ยงแบบขั้นบันได แยก wallet ลูกค้า และ key management ที่เข้มขึ้น · ปิดรับฟัง 11 ต.ค. 2569", src: "SEC / InfoQuest" } },
    { color: "#6366F1", url: "https://www.ryt9.com/s/iq/12843528",
      en: { strong: "Thai SEC's capital-market plan", text: " targets cutting IPO review to 60-100 days from an average of 147, and aims to start the TISA personal savings-and-investment account in early 2027 with an initial five-year horizon. The same briefing recapped the digital-asset workstream: tokenized fund rules effective 1 April 2026, the Travel Rule effective 27 February 2027, and stablecoin supervision now out for consultation with AMLO and the Bank of Thailand. Fewer than 1 million of roughly 7 million securities accounts are genuinely active.", src: "SEC / RYT9" },
      th: { strong: "แผนยกระดับตลาดทุนของ ก.ล.ต.", text: " ตั้งเป้าลดระยะเวลาพิจารณา IPO เหลือ 60-100 วัน จากเดิมเฉลี่ย 147 วัน และผลักดันบัญชีการออมการลงทุนส่วนบุคคล (TISA) ให้เริ่มได้ช่วงต้นปี 2570 โดยมีเงื่อนไขระยะเวลาลงทุนเบื้องต้น 5 ปี · การแถลงเดียวกันสรุปงานด้านสินทรัพย์ดิจิทัลด้วยว่า เกณฑ์กองทุนแบบ Token มีผลไปแล้ว 1 เม.ย. 2569, Travel Rule จะมีผล 27 ก.พ. 2570 และการกำกับ stablecoin อยู่ระหว่างรับฟังความเห็นร่วมกับ ปปง. และ ธปท. · ทั้งนี้บัญชีหลักทรัพย์ที่ active จริงมีไม่ถึง 1 ล้านบัญชี จากราว 7 ล้านบัญชี", src: "SEC / RYT9" } },
  ],
});
