// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 10 · 13–25 ก.ย. 2026
//  ครอบคลุมต่อเนื่องจากฉบับที่ 9 (จบ 12 ก.ย.) → กรอบ 13 วัน (22 ข่าวเต็ม + 8 ข่าวสั้น)
//  ข่าวสั้น 2 ชิ้นแรก = ข่าว Token X ย้อนหลัง (25/31 ส.ค.) ที่หลุดจากฉบับ 9 — ใส่ตามคำขอผู้จัดทำ
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน · แหล่งไทยใช้เฉพาะที่อนุญาต)
//  ราคาเหรียญอ่านจาก CoinGecko 25 ก.ย. 2026 — ฉบับนี้ `chg` ใช้ค่า 14 วันให้ตรงกับกรอบ 13 วัน
//  มูลค่า RWA รวมจาก RWA.xyz (Distributed Asset Value, 25 ก.ย. 2026): $40.90B ▲ +5.4% จากฉบับก่อน ($38.82B)
//    · จุดกราฟ `points` = จุดวัดจริง 2 จุด (12 ก.ย. และ 25 ก.ย.) เชื่อมด้วยเส้นแนวโน้ม — RWA.xyz ไม่เปิดข้อมูลรายวันของยอดรวม
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 10,
    date: "2026-09-25",
    dateEN: "Sep 13–25, 2026",
    dateTH: "13–25 ก.ย. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (25 ก.ย. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$40.9B", delta: "+5.4%", up: true,
      points: [38.82, 38.95, 39.1, 39.3, 39.5, 39.75, 40.0, 40.3, 40.6, 40.9],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%",  up: true,  bar: 92 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%",  up: true,  bar: 65 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$116.67",  chg: "+0.1%",  up: true,  bar: 66 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.15",    chg: "+0.2%",  up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.14",    chg: "+0.1%",  up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.16",    chg: "+0.1%",  up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.22",   chg: "+0.1%",  up: true,  bar: 52 },
      // ข) Tokenized Gold (ย่อต่อเนื่องจากฉบับก่อน)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,294",   chg: "-1.0%",  up: false, bar: 84 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,295",   chg: "-0.8%",  up: false, bar: 84 },
      // ค) RWA platform / protocol tokens — ขึ้นแรงเกือบทั้งกลุ่มใน 2 สัปดาห์ (ENA, GFI, CPOOL, ONDO นำ)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.546",   chg: "+56.2%", up: true,  bar: 72 },
      { sym: "PENDLE",name: "Pendle",           price: "$2.61",    chg: "+32.3%", up: true,  bar: 66 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.153",   chg: "+48.0%", up: true,  bar: 34 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0448",  chg: "+28.0%", up: true,  bar: 42 },
      { sym: "PLUME", name: "Plume",            price: "$0.0184",  chg: "+46.8%", up: true,  bar: 50 },
      { sym: "ENA",   name: "Ethena",           price: "$0.239",   chg: "+68.4%", up: true,  bar: 76 },
      { sym: "SKY",   name: "Sky",              price: "$0.0745",  chg: "+27.9%", up: true,  bar: 56 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0465",  chg: "+68.8%", up: true,  bar: 28 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.218",   chg: "+1.9%",  up: true,  bar: 56 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0330",  chg: "+67.3%", up: true,  bar: 42 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "0.0%",   up: true,  bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "European Central Bank",
    time: "4d",
    url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260921_1~5a011ecbea.en.html",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["The ECB will put ", "its own funds into tokenised securities", ", settled on Pontes"],
      body: [
        "The European Central Bank has launched preparatory work to invest a small portion of its own funds in tokenised securities, to gain practical experience as an investor and build institutional expertise in the use of distributed ledger technology in financial markets. The own funds portfolio is a non-monetary policy portfolio that provides the ECB with income to help fund its operating expenses. Initial investments will focus on euro-denominated securities issued by euro area central governments, regional governments, agencies and European supranational institutions, and the purchases will be settled in central bank money via Pontes — the Eurosystem's solution for settling tokenised assets, which went live the same day.",
        "By investing directly, the ECB says it will gain first-hand experience across the full investment lifecycle, including trade execution, settlement, systems and portfolio management. Once the preparatory work is complete, the Executive Board will determine the operational details and timing, taking into account developments in tokenised issuance and the broader tokenised ecosystem in Europe, for which the Appia initiative is to deliver a blueprint. No size or date was given, but the step puts the euro area's central bank on the buy side of tokenised sovereign and supranational debt, not just the settlement side — in the same fortnight that the SEC opened a regulated path for onchain trading of US stocks.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["ECB เตรียมนำ ", "เงินกองทุนของตัวเองลงทุนในหลักทรัพย์แบบ Token", " ชำระราคาผ่าน Pontes"],
      body: [
        "ธนาคารกลางยุโรป (ECB) เริ่มงานเตรียมการเพื่อนำเงินกองทุนของตนเอง (own funds) ส่วนหนึ่งไปลงทุนในหลักทรัพย์แบบ Token เพื่อสั่งสมประสบการณ์จริงในฐานะผู้ลงทุน และสร้างความเชี่ยวชาญเชิงองค์กรในการใช้เทคโนโลยี DLT ในตลาดการเงิน โดยพอร์ต own funds เป็นพอร์ตที่ไม่เกี่ยวกับนโยบายการเงิน ทำหน้าที่สร้างรายได้ช่วยรองรับค่าใช้จ่ายดำเนินงานของ ECB การลงทุนช่วงแรกจะเน้นหลักทรัพย์สกุลยูโรที่ออกโดยรัฐบาลกลาง รัฐบาลส่วนภูมิภาค หน่วยงานรัฐ (agencies) ของยูโรโซน และองค์กรเหนือรัฐของยุโรป (supranational) และจะชำระราคาด้วยเงินของธนาคารกลางผ่าน Pontes ซึ่งเป็นระบบของ Eurosystem สำหรับชำระราคาสินทรัพย์แบบ Token ที่เปิดใช้งานในวันเดียวกัน",
        "ECB ระบุว่าการลงทุนโดยตรงจะทำให้ได้ประสบการณ์ตรงตลอดวงจรการลงทุน ตั้งแต่การส่งคำสั่งซื้อขาย การชำระราคา ระบบงาน ไปจนถึงการบริหารพอร์ต เมื่องานเตรียมการเสร็จสิ้น คณะกรรมการบริหาร (Executive Board) จะกำหนดรายละเอียดเชิงปฏิบัติการและจังหวะเวลา โดยพิจารณาพัฒนาการของการออกหลักทรัพย์แบบ Token และระบบนิเวศการเงินแบบ Token ในยุโรป ซึ่งโครงการ Appia จะจัดทำพิมพ์เขียวให้ แม้จะยังไม่ระบุขนาดหรือวันที่ แต่ก้าวนี้ทำให้ธนาคารกลางของยูโรโซนขยับจากผู้วางรางชำระราคา มาเป็นผู้ซื้อตราสารหนี้ภาครัฐและองค์กรเหนือรัฐแบบ Token ด้วย — ในช่วงสองสัปดาห์เดียวกับที่ SEC สหรัฐเปิดช่องทางที่อยู่ใต้การกำกับให้ซื้อขายหุ้นสหรัฐบนเชนได้",
      ],
    },
    hlType: "takeaway",
    highlight: {
      en: { label: "Key takeaway", note: "The ECB is no longer only building the settlement rail for tokenised assets — it now plans to invest in them, starting with euro-area government, agency and supranational debt settled in central bank money." },
      th: { label: "สรุปสำคัญ", note: "ECB ไม่ได้เป็นแค่ผู้สร้างรางชำระราคาสำหรับสินทรัพย์แบบ Token อีกต่อไป แต่เตรียมเป็นผู้ลงทุนเอง โดยเริ่มจากตราสารหนี้ของรัฐบาล หน่วยงานรัฐ และองค์กรเหนือรัฐในยูโรโซน ที่ชำระราคาด้วยเงินของธนาคารกลาง" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", esg: true, source: "The Standard / Bloomberg", time: "1d", url: "https://www.thestandard.com.hk/finance/article/343692/Hong-Kong-eyes-up-to-20b-in-worlds-biggest-digital-green-bond-sale-Bloomberg",
      hlType: "data",
      en: {
        title: ["Hong Kong readies a record ", "digital green bond", " of up to HK$20B"],
        body: "Hong Kong plans a multi-currency digital green bond sale of HK$15 billion to HK$20 billion, a deal that would be the world's biggest of its kind, according to people familiar with the matter cited by Bloomberg. The offering will be denominated in US dollars, Hong Kong dollars, euros and offshore yuan; the government has asked several banks to arrange fixed-income investor meetings this week, with pricing expected as early as Monday. The 2026 Policy Address says digital bonds issued in Hong Kong captured nearly 50% of the global market between 2025 and the first half of 2026, and the government will explore using digital currencies for settlement and for the full cycle of digital bonds, such as dividend payment and redemption.",
        highlight: { label: "By the numbers", value: "HK$20B", note: "the upper end of the reported range — the deal has not priced yet, so the size is indicative until it closes" },
      },
      th: {
        title: ["ฮ่องกงเตรียมออก ", "พันธบัตรสีเขียวแบบดิจิทัล", " ทำสถิติใหม่ สูงสุด 2 หมื่นล้านเหรียญฮ่องกง"],
        body: "ฮ่องกงเตรียมเสนอขายพันธบัตรสีเขียวแบบดิจิทัล (digital green bond) หลายสกุลเงิน มูลค่า 1.5–2 หมื่นล้านเหรียญฮ่องกง ซึ่งจะเป็นดีลประเภทนี้ที่ใหญ่ที่สุดในโลก ตามรายงานของ Bloomberg ที่อ้างแหล่งข่าวผู้ใกล้ชิดกับดีล โดยจะออกเป็นสกุลดอลลาร์สหรัฐ ดอลลาร์ฮ่องกง ยูโร และหยวนนอกประเทศ รัฐบาลได้ขอให้ธนาคารหลายแห่งจัดประชุมกับผู้ลงทุนตราสารหนี้ในสัปดาห์นี้ และอาจกำหนดราคาได้เร็วสุดวันจันทร์ ทั้งนี้ Policy Address ปี 2026 ระบุว่าพันธบัตรดิจิทัลที่ออกในฮ่องกงครองส่วนแบ่งเกือบ 50% ของตลาดโลกในช่วงปี 2025 ถึงครึ่งแรกของปี 2026 และรัฐบาลจะศึกษาการใช้สกุลเงินดิจิทัลในการชำระราคา รวมถึงการใช้งานตลอดวงจรของพันธบัตรดิจิทัล เช่น การจ่ายดอกเบี้ยและการไถ่ถอน",
        highlight: { label: "ตัวเลขสำคัญ", value: "HK$20B", note: "เป็นเพดานบนของช่วงที่มีรายงาน — ดีลยังไม่ได้กำหนดราคา ขนาดจริงจึงยังเป็นตัวเลขเบื้องต้นจนกว่าจะปิดดีล" },
      },
    },
    {
      topic: "rwa", source: "The Block", time: "1d", url: "https://www.theblock.co/news/markets/2026-09-24-ark-invest-tokenizes-arkvx-venture-fund-securitize-416294",
      hlType: "quote",
      en: {
        title: ["ARK tokenizes its ", "$1.3B venture fund", " holding OpenAI and Anthropic"],
        body: "ARK Invest is bringing its ARK Venture Fund (ARKVX) onchain, making the fund — which has about $1.3 billion in net assets under management — available to eligible investors through Securitize on Ethereum. ARKVX invests in private and public technology companies including OpenAI, Anthropic, Stripe and Databricks. ARK made a strategic investment in Securitize in October 2025, and this puts that relationship into a live product, extending tokenization from cash-like treasury funds into venture and private-market exposure.",
        highlight: { note: "Tokenizing the ARK Venture Fund puts our conviction in the evolution, if not revolution, of capital markets into practice.", by: "Cathie Wood, Founder and CEO, ARK Invest" },
      },
      th: {
        title: ["ARK ทำ Token ", "กองทุน Venture 1.3 พันล้านดอลลาร์", " ที่ถือ OpenAI และ Anthropic"],
        body: "ARK Invest นำกองทุน ARK Venture Fund (ARKVX) ขึ้นบนเชน โดยกองทุนซึ่งมีสินทรัพย์สุทธิภายใต้การบริหารราว 1.3 พันล้านดอลลาร์ จะเปิดให้ผู้ลงทุนที่มีคุณสมบัติตามเกณฑ์ลงทุนผ่าน Securitize บน Ethereum ทั้งนี้ ARKVX ลงทุนในบริษัทเทคโนโลยีทั้งที่ยังไม่จดทะเบียนและจดทะเบียนแล้ว เช่น OpenAI, Anthropic, Stripe และ Databricks โดย ARK เคยเข้าลงทุนเชิงกลยุทธ์ใน Securitize เมื่อเดือนตุลาคม 2025 ดีลนี้จึงเปลี่ยนความสัมพันธ์ดังกล่าวเป็นผลิตภัณฑ์จริง และขยาย Tokenization จากกองทุนพันธบัตรระยะสั้นไปสู่การลงทุนแบบ venture และตลาดเอกชน",
        highlight: { note: "การทำ Token กองทุน ARK Venture Fund คือการนำความเชื่อมั่นของเราต่อวิวัฒนาการ หรืออาจเรียกได้ว่าการปฏิวัติ ของตลาดทุน มาปฏิบัติจริง", by: "Cathie Wood, Founder and CEO, ARK Invest" },
      },
    },
    {
      topic: "rwa", source: "The Block", time: "1d", url: "https://www.theblock.co/news/markets/2026-09-24-ondo-launches-onchain-portfolio-tokens-based-blackrock-developed-strategies-416260",
      hlType: "know",
      en: {
        title: ["Ondo launches onchain portfolios ", "built on BlackRock models", ""],
        body: "Ondo launched three portfolio tokens — Ondo High Income, Ondo Diversified Growth and Ondo High Growth, each 'Powered by BlackRock' (BLKHIon, BLKDIGon and BLKGRWon) — available only to eligible investors outside the US in permitted jurisdictions. The tokens are issued by Ondo Global Markets, tokenized by Ondo Finance and transferable peer-to-peer across wallets, exchanges and DeFi protocols. BlackRock's role is limited to providing nondiscretionary model portfolio strategies based on Ondo's specifications; it does not manage the onchain portfolios or handle their tokenization, issuance, distribution, custody or operation. The launch follows Ondo Stocks reaching $1 billion in total value locked within eight months.",
        highlight: { label: "Know this", note: "A model portfolio is an allocation recipe, not a managed fund: BlackRock supplies the target mix, while Ondo builds, issues and runs the token — so the BlackRock name signals the strategy design, not BlackRock management or custody." },
      },
      th: {
        title: ["Ondo เปิดพอร์ตลงทุนบนเชน ", "ตามโมเดลของ BlackRock", ""],
        body: "Ondo เปิดตัว Token พอร์ตการลงทุน 3 แบบ ได้แก่ Ondo High Income, Ondo Diversified Growth และ Ondo High Growth ซึ่งแต่ละตัวใช้ชื่อ 'Powered by BlackRock' (BLKHIon, BLKDIGon และ BLKGRWon) เปิดให้เฉพาะผู้ลงทุนที่มีคุณสมบัติตามเกณฑ์นอกสหรัฐในประเทศที่อนุญาต โดย Ondo Global Markets เป็นผู้ออก Ondo Finance เป็นผู้ทำ Token และโอนแบบ peer-to-peer ได้ทั้งระหว่าง wallet กระดานเทรด และโปรโตคอล DeFi ทั้งนี้บทบาทของ BlackRock จำกัดอยู่ที่การให้กลยุทธ์ model portfolio แบบไม่มีดุลยพินิจตามสเปกที่ Ondo กำหนด โดยไม่ได้บริหารพอร์ตบนเชน และไม่ได้ทำ Tokenization การออก การจัดจำหน่าย custody หรือการดำเนินงานของผลิตภัณฑ์ การเปิดตัวครั้งนี้ตามหลัง Ondo Stocks ที่มี TVL แตะ 1 พันล้านดอลลาร์ภายใน 8 เดือน",
        highlight: { label: "รู้ไว้", note: "model portfolio คือ 'สูตรจัดสัดส่วน' ไม่ใช่กองทุนที่มีผู้จัดการ — BlackRock ให้สัดส่วนเป้าหมาย ส่วน Ondo เป็นผู้สร้าง ออก และดูแล Token ชื่อ BlackRock จึงบอกถึงผู้ออกแบบกลยุทธ์ ไม่ได้หมายความว่า BlackRock บริหารหรือเก็บรักษาทรัพย์สิน" },
      },
    },
    {
      topic: "rwa", source: "Ledger Insights", time: "4d", url: "https://www.ledgerinsights.com/hana-bank-issues-100-million-digital-bond-via-euroclears-d-fmi/",
      hlType: "data",
      en: {
        title: ["Hana Bank becomes the first Korean issuer on ", "Euroclear's D-FMI", ""],
        body: "KEB Hana Bank issued a $100 million digital bond through Euroclear's D-FMI distributed ledger platform and its iCSD, becoming the first Korean company to use D-FMI. The note was issued under Hana's existing $10 billion Global Medium Term Note Programme, with terms updated to support the digitally native note (DNN), and listed on SGX; Standard Chartered was sole lead manager and Citi the DNN agent and fiscal agent. It came less than a month after Standard Chartered issued its own bond on the same platform, while earlier this year Mirae Asset Securities, POSCO International and Korea Housing Finance Corporation issued digital bonds in Hong Kong.",
        highlight: { label: "By the numbers", value: "$100M", note: "Korea's first use of Euroclear's DLT platform — issued under an existing MTN programme rather than a bespoke structure, which makes the model easy to repeat" },
      },
      th: {
        title: ["Hana Bank เป็นผู้ออกรายแรกของเกาหลีบน ", "D-FMI ของ Euroclear", ""],
        body: "KEB Hana Bank ออกพันธบัตรดิจิทัลมูลค่า 100 ล้านดอลลาร์ผ่านแพลตฟอร์ม DLT ชื่อ D-FMI และ iCSD ของ Euroclear นับเป็นบริษัทเกาหลีรายแรกที่ใช้ D-FMI โดยออกภายใต้โครงการ Global Medium Term Note มูลค่า 1 หมื่นล้านดอลลาร์ที่มีอยู่เดิม แต่ปรับเงื่อนไขให้รองรับ digitally native note (DNN) และจดทะเบียนใน SGX มี Standard Chartered เป็นผู้จัดจำหน่ายหลักรายเดียว และ Citi เป็น DNN agent และ fiscal agent ดีลนี้เกิดขึ้นไม่ถึงหนึ่งเดือนหลังจาก Standard Chartered ออกพันธบัตรของตัวเองบนแพลตฟอร์มเดียวกัน ขณะที่ต้นปีนี้ Mirae Asset Securities, POSCO International และ Korea Housing Finance Corporation ได้ออกพันธบัตรดิจิทัลในฮ่องกงไปแล้ว",
        highlight: { label: "ตัวเลขสำคัญ", value: "$100M", note: "ครั้งแรกที่ผู้ออกจากเกาหลีใช้แพลตฟอร์ม DLT ของ Euroclear — ออกภายใต้โครงการ MTN ที่มีอยู่แล้ว ไม่ใช่โครงสร้างเฉพาะกิจ จึงทำซ้ำได้ง่าย" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "SEC", time: "8d", url: "https://www.sec.gov/newsroom/press-releases/2026-90-sec-issues-innovation-exemption-facilitate-trading-tokenized-nms-stock-request-comment",
      hlType: "takeaway",
      en: {
        title: ["SEC grants a five-year ", "Innovation Exemption", " for onchain trading of US stocks"],
        body: "The SEC issued an order granting temporary, conditional relief that lets Tokenized Securities Venues (TSVs) trade tokenized NMS stock through permissioned automated market makers and liquidity pools without registering as an exchange, and exempts liquidity providers that supply those pools with proprietary capital from the definition of 'dealer'. Conditions include limits on the number of symbols and volume traded; verification that each token gives holders the same rights and privileges as the traditional share; written notice and an opportunity to object for the issuer when an unaffiliated third party creates the token; smart contracts that are auditable, public and deployed on a public, permissionless ledger; and trading halts that mirror the primary listing exchange. The exemptions expire five years after publication, and the order asks for public comment on possible modifications.",
        highlight: { label: "Key takeaway", note: "The US now has a sanctioned route for real shares — with full holder rights and exchange-linked halts — to trade on public blockchains; the symbol and volume caps mean it starts as a controlled experiment, not an open market." },
      },
      th: {
        title: ["SEC ออก ", "Innovation Exemption", " 5 ปี เปิดทางซื้อขายหุ้นสหรัฐบนเชน"],
        body: "SEC ออกคำสั่งผ่อนผันแบบชั่วคราวและมีเงื่อนไข ให้ Tokenized Securities Venue (TSV) ซื้อขายหุ้น NMS แบบ Token ผ่าน automated market maker และ liquidity pool แบบ permissioned ได้โดยไม่ต้องจดทะเบียนเป็นตลาดหลักทรัพย์ และยกเว้นผู้ให้สภาพคล่องที่ใส่ทุนของตนเองเข้า pool จากนิยาม 'dealer' โดยมีเงื่อนไข เช่น จำกัดจำนวนหลักทรัพย์และปริมาณการซื้อขาย, TSV ต้องตรวจสอบว่า Token ให้สิทธิแก่ผู้ถือเท่ากับหุ้นแบบดั้งเดิม, หากบุคคลภายนอกที่ไม่เกี่ยวข้องเป็นผู้ทำ Token ต้องแจ้งบริษัทผู้ออกหุ้นเป็นลายลักษณ์อักษรและเปิดโอกาสให้คัดค้าน, smart contract ต้องตรวจสอบได้ เปิดเผย และอยู่บน ledger สาธารณะแบบ permissionless และต้องหยุดซื้อขายพร้อมกับตลาดหลักที่หุ้นนั้นจดทะเบียน ทั้งนี้การผ่อนผันมีอายุ 5 ปีนับจากวันเผยแพร่ และ SEC เปิดรับความเห็นต่อแนวทางปรับปรุง",
        highlight: { label: "สรุปสำคัญ", note: "สหรัฐมีช่องทางที่ถูกกฎหมายให้หุ้นจริง ซึ่งมีสิทธิผู้ถือหุ้นครบและหยุดซื้อขายตามตลาดหลัก ซื้อขายบน Blockchain สาธารณะได้แล้ว — แต่เพดานจำนวนหุ้นและปริมาณทำให้เริ่มต้นแบบทดลองที่ควบคุมได้ ไม่ใช่ตลาดเปิดเต็มรูปแบบ" },
      },
    },
    {
      topic: "tokenization", source: "PR Newswire", time: "2d", url: "https://www.prnewswire.com/news-releases/blockchaincom-and-nyse-partner-to-explore-global-247365-trading-of-tokenized-securities-302887041.html",
      hlType: "quote",
      en: {
        title: ["NYSE lines up Blockchain.com's ", "44 million accounts", " for its tokenized stock venue"],
        body: "Blockchain.com and NYSE Group signed a memorandum of understanding on a distribution plan that would give Blockchain.com's users access to tokenized US exchange-listed equities and ETFs on the NYSE's previously announced digital ATS, subject to any required regulatory approvals. The MOU also includes bidirectional market-data distribution, with Blockchain.com planning to incorporate certain ICE and NYSE exchange data feeds into its app for its more than 44 million confirmed accounts. The release cites a Citi Institute base case of $5.5 trillion in tokenized assets by 2030.",
        highlight: { note: "The future of capital markets belongs to institutions that unite the trust of traditional finance with the innovation and accessibility of digital assets.", by: "Lynn Martin, President, NYSE Group" },
      },
      th: {
        title: ["NYSE ดึง ", "44 ล้านบัญชีของ Blockchain.com", " เข้ากระดานหุ้นแบบ Token"],
        body: "Blockchain.com และ NYSE Group ลงนามบันทึกความเข้าใจ (MOU) ว่าด้วยแผนการจัดจำหน่าย ที่จะเปิดให้ผู้ใช้ของ Blockchain.com เข้าถึงหุ้นและ ETF ที่จดทะเบียนในสหรัฐแบบ Token บน digital ATS ของ NYSE ที่ประกาศไว้ก่อนหน้า ขึ้นอยู่กับการได้รับอนุมัติตามกฎเกณฑ์ที่เกี่ยวข้อง MOU ยังครอบคลุมการแลกเปลี่ยนข้อมูลตลาดแบบสองทาง โดย Blockchain.com มีแผนนำข้อมูลราคาบางส่วนของ ICE และ NYSE เข้าแอปสำหรับบัญชีที่ยืนยันตัวตนแล้วกว่า 44 ล้านบัญชี ทั้งนี้ประกาศอ้างประมาณการกรณีฐานของ Citi Institute ว่าสินทรัพย์แบบ Token จะมีมูลค่า 5.5 ล้านล้านดอลลาร์ภายในปี 2030",
        highlight: { note: "อนาคตของตลาดทุนเป็นของสถาบันที่ผสานความเชื่อมั่นของการเงินดั้งเดิม เข้ากับนวัตกรรมและการเข้าถึงได้ง่ายของ Digital Asset", by: "Lynn Martin, President, NYSE Group" },
      },
    },
    {
      topic: "tokenization", source: "The Block", time: "3d", url: "https://www.theblock.co/news/business/2026-09-23-canada-banks-tokenized-deposit-system-416129",
      hlType: "know",
      en: {
        title: ["Canada's six largest banks explore ", "a CAD tokenized deposit system", ""],
        body: "Bank of Montreal, CIBC, National Bank of Canada, Royal Bank of Canada, The Bank of Nova Scotia and TD Bank Group are jointly exploring a Canadian-dollar tokenized deposit system, which seeks to 'deliver faster, more efficient and programmable payments to Canadian customers while preserving safety, stability, and effective regulatory oversight.' The first phase involves moving tokenized deposits efficiently across financial institutions, and other deposit-taking institutions may join at an appropriate time. The effort follows Project Samara, a tokenization pilot on government bond issuance and settlement completed in March by the Bank of Canada, Export Development Canada, RBC and TD.",
        highlight: { label: "Know this", note: "Unlike a stablecoin, a tokenized deposit is still a bank deposit — Canada's regulator OSFI said earlier in September that tokenized deposits are 'not legally distinct from traditional deposits'." },
      },
      th: {
        title: ["6 ธนาคารใหญ่สุดของแคนาดาร่วมศึกษา ", "ระบบเงินฝากแบบ Token สกุล CAD", ""],
        body: "Bank of Montreal, CIBC, National Bank of Canada, Royal Bank of Canada, The Bank of Nova Scotia และ TD Bank Group ร่วมกันศึกษาระบบเงินฝากแบบ Token (tokenized deposit) สกุลดอลลาร์แคนาดา เพื่อ 'มอบการชำระเงินที่เร็วขึ้น มีประสิทธิภาพขึ้น และโปรแกรมได้ ให้ลูกค้าชาวแคนาดา โดยยังคงความปลอดภัย เสถียรภาพ และการกำกับดูแลที่มีประสิทธิภาพ' เฟสแรกมุ่งเคลื่อนย้ายเงินฝากแบบ Token ระหว่างสถาบันการเงินอย่างมีประสิทธิภาพ และอาจเปิดให้สถาบันรับฝากเงินรายอื่นเข้าร่วมในเวลาที่เหมาะสม โครงการนี้ต่อยอดจาก Project Samara ซึ่งเป็นโครงการนำร่อง Tokenization ด้านการออกและชำระราคาพันธบัตรรัฐบาล ที่ Bank of Canada, Export Development Canada, RBC และ TD ทำสำเร็จเมื่อเดือนมีนาคม",
        highlight: { label: "รู้ไว้", note: "ต่างจาก Stablecoin — เงินฝากแบบ Token ยังคงเป็นเงินฝากธนาคาร โดย OSFI ผู้กำกับของแคนาดาระบุเมื่อต้นเดือนกันยายนว่าเงินฝากแบบ Token 'ไม่ได้มีความแตกต่างทางกฎหมายจากเงินฝากแบบดั้งเดิม'" },
      },
    },
    {
      topic: "tokenization", source: "CFTC", time: "1d", url: "https://www.cftc.gov/PressRoom/PressReleases/9303-26",
      hlType: "takeaway",
      en: {
        title: ["CFTC staff clear ", "tokenized investments of customer funds", ""],
        body: "Three CFTC divisions — Market Participants, Market Oversight, and Clearing and Risk — updated their FAQs on crypto assets and blockchain technologies to address investments of customer funds in tokenized forms of permitted investments, and the use of blockchain technologies to satisfy a registrant's recordkeeping requirements. The FAQs were originally released on 20 March 2026 and build on CFTC Staff Letter 25-39 (Tokenized Collateral Guidance) and Staff Letter 26-05 (a no-action position on digital assets accepted as margin collateral). Chairman Michael S. Selig said the update was consistent with the agency's ongoing efforts to provide regulatory clarity for the crypto industry.",
        highlight: { label: "Key takeaway", note: "US futures brokers and clearinghouses gain staff-level cover to hold customer money in tokenized versions of assets they can already buy — a new pool of institutional demand for tokenized treasuries and funds outside the SEC's perimeter." },
      },
      th: {
        title: ["CFTC เปิดทาง ", "นำเงินลูกค้าลงทุนในรูปแบบ Token", ""],
        body: "3 ฝ่ายของ CFTC ได้แก่ Market Participants, Market Oversight และ Clearing and Risk ปรับปรุง FAQ ด้าน crypto asset และ Blockchain ให้ครอบคลุมการนำเงินของลูกค้าไปลงทุนในตราสารที่ได้รับอนุญาตในรูปแบบ Token และการใช้ Blockchain เพื่อจัดเก็บบันทึกตามที่กฎหมายกำหนด โดย FAQ ชุดนี้ออกครั้งแรกเมื่อ 20 มีนาคม 2026 ต่อยอดจาก Staff Letter 25-39 (แนวทางหลักประกันแบบ Token) และ Staff Letter 26-05 (no-action ด้านการรับ Digital Asset เป็นหลักประกัน margin) ประธาน Michael S. Selig ระบุว่าการปรับปรุงนี้สอดคล้องกับความพยายามต่อเนื่องของหน่วยงานในการสร้างความชัดเจนด้านกฎเกณฑ์ให้อุตสาหกรรมคริปโต",
        highlight: { label: "สรุปสำคัญ", note: "โบรกเกอร์ฟิวเจอร์สและสำนักหักบัญชีสหรัฐได้แนวทางระดับเจ้าหน้าที่รองรับการถือเงินลูกค้าในตราสารแบบ Token ที่ลงทุนได้อยู่แล้ว — เปิดดีมานด์สถาบันกลุ่มใหม่ต่อพันธบัตรและกองทุนแบบ Token นอกขอบเขตของ SEC" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "European Central Bank", time: "4d", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260921~e754847a7b.en.html",
      hlType: "quote",
      en: {
        title: ["Pontes goes live: euro-area ", "tokenised settlement in central bank money", ""],
        body: "The Eurosystem launched Pontes, a solution that enables wholesale transactions in tokenised assets to be settled in central bank money — the first initiative under its strategic programme to make central bank money fit for a tokenised future, building on its 2024 DLT settlement tests. The first market participants are ABANCA, BayernLB, Caisse des Dépôts et Consignations, Cecabank, Deutsche Bank, Deka Bank, DZ Bank, the European Investment Bank, KfW, Memo Bank, NRW.BANK, Santander and Société Générale, with Axiology, Cashlink, Clearstream and SWIAT as market DLT operators and the Deutsche Bundesbank onboarded as a participant. Pontes starts with a core set of services; enhanced features and longer operating hours will be introduced gradually, with full implementation expected by 2028.",
        highlight: { note: "Pontes brings the stability and trust of central bank money to the European tokenised finance ecosystem.", by: "Piero Cipollone, Member of the Executive Board, ECB" },
      },
      th: {
        title: ["Pontes เปิดใช้งานแล้ว: ", "ชำระราคาสินทรัพย์ Token ด้วยเงินธนาคารกลาง", " ในยูโรโซน"],
        body: "Eurosystem เปิดใช้งาน Pontes ระบบที่ให้ธุรกรรมขายส่ง (wholesale) ของสินทรัพย์แบบ Token ชำระราคาด้วยเงินของธนาคารกลางได้ นับเป็นโครงการแรกภายใต้แผนยุทธศาสตร์ที่จะทำให้เงินธนาคารกลางพร้อมสำหรับโลกการเงินแบบ Token โดยต่อยอดจากการทดสอบ DLT เพื่อการชำระราคาในปี 2024 ผู้ร่วมตลาดกลุ่มแรก ได้แก่ ABANCA, BayernLB, Caisse des Dépôts et Consignations, Cecabank, Deutsche Bank, Deka Bank, DZ Bank, European Investment Bank, KfW, Memo Bank, NRW.BANK, Santander และ Société Générale มี Axiology, Cashlink, Clearstream และ SWIAT เป็นผู้ให้บริการ DLT และ Deutsche Bundesbank เข้าร่วมในฐานะผู้ร่วมตลาด Pontes เริ่มด้วยบริการหลักชุดแรก แล้วจะเพิ่มฟีเจอร์และขยายเวลาทำการทีละขั้น โดยคาดว่าจะใช้งานเต็มรูปแบบภายในปี 2028",
        highlight: { note: "Pontes นำเสถียรภาพและความเชื่อมั่นของเงินธนาคารกลาง มาสู่ระบบนิเวศการเงินแบบ Token ของยุโรป", by: "Piero Cipollone, Member of the Executive Board, ECB" },
      },
    },
    {
      topic: "blockchain", source: "Circle", time: "9d", url: "https://www.circle.com/pressroom/circle-launches-arc-mainnet-an-economic-operating-system-for-the-internet",
      hlType: "quote",
      en: {
        title: ["Circle's Arc mainnet goes live with ", "BlackRock, DTCC and Visa", " as validators"],
        body: "Circle announced the public mainnet launch of Arc, an open Layer 1 blockchain for financial markets, real-time money movement and agentic economic activity, with more than 100 applications and more than 100 institutional and ecosystem builders live on day one. Founding validators are BlackRock, DTCC, Galaxy, ICE, Mastercard, MoneyGram, SBI Group, Standard Chartered, Sumitomo Corporation, Visa and Worldpay (now Global Payments). Fees are paid in USDC with no volatile native token required and settlement is deterministic; the testnet processed more than 700 million transactions in under a year, and Circle completed the genesis mint of the ARC token with an initial supply of 10 billion.",
        highlight: { note: "Arc is the single most significant launch in Circle's history since USDC itself.", by: "Jeremy Allaire, Co-Founder, Chairman and CEO, Circle" },
      },
      th: {
        title: ["Arc mainnet ของ Circle เปิดใช้งาน มี ", "BlackRock, DTCC และ Visa", " เป็น validator"],
        body: "Circle เปิด public mainnet ของ Arc ซึ่งเป็น Blockchain Layer 1 แบบเปิด ออกแบบเพื่อตลาดการเงิน การโอนเงินแบบเรียลไทม์ และกิจกรรมเศรษฐกิจของ AI agent โดยมีแอปพลิเคชันกว่า 100 รายการ และผู้พัฒนาทั้งสถาบันและระบบนิเวศกว่า 100 รายเริ่มใช้งานตั้งแต่วันแรก validator ผู้ก่อตั้ง ได้แก่ BlackRock, DTCC, Galaxy, ICE, Mastercard, MoneyGram, SBI Group, Standard Chartered, Sumitomo Corporation, Visa และ Worldpay (ปัจจุบันคือ Global Payments) ค่าธรรมเนียมจ่ายเป็น USDC โดยไม่ต้องใช้เหรียญประจำเชนที่ผันผวน และการชำระเสร็จสิ้นแน่นอน (deterministic) ช่วง testnet มีธุรกรรมกว่า 700 ล้านรายการในเวลาไม่ถึงปี และ Circle ได้ mint Token ARC ตั้งต้น จำนวน 1 หมื่นล้าน Token",
        highlight: { note: "Arc คือการเปิดตัวที่สำคัญที่สุดในประวัติศาสตร์ของ Circle นับตั้งแต่ USDC", by: "Jeremy Allaire, Co-Founder, Chairman and CEO, Circle" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "1d", url: "https://www.coindesk.com/markets/2026/09/25/bitget-s-usd351-million-hack-happened-via-spoofed-transfers-not-private-keys-ceo-gray-chen-says",
      hlType: "data",
      en: {
        title: ["Bitget loses ", "$351.6M", " as attackers spoof its own approval flow"],
        body: "Bitget CEO Gracy Chen confirmed the exchange lost $351.6 million in an overnight hack in which attackers compromised a critical backend system in its wallet infrastructure, spoofed transaction data and triggered Bitget's own authorization process to move funds out; private-key compromise has been ruled out. Hot and warm wallets were hit while cold storage remained secure, and Bitget's $464 million User Protection Fund will cover the full loss. Withdrawals are frozen as a precaution pending a security review, with no timeline announced.",
        highlight: { label: "By the numbers", value: "$351.6M", note: "no keys were stolen — the breach ran through the signing and approval pipeline, the control layer that custody reviews often treat as trusted" },
      },
      th: {
        title: ["Bitget สูญ ", "351.6 ล้านดอลลาร์", " หลังถูกปลอมข้อมูลผ่านระบบอนุมัติของตัวเอง"],
        body: "Gracy Chen ซีอีโอของ Bitget ยืนยันว่ากระดานเทรดสูญเงิน 351.6 ล้านดอลลาร์จากการถูกแฮ็กข้ามคืน โดยผู้โจมตีเจาะระบบ backend สำคัญในโครงสร้าง wallet ปลอมแปลงข้อมูลธุรกรรม แล้วสั่งให้กระบวนการอนุมัติของ Bitget เองโอนเงินออกไป ทั้งนี้ตัดประเด็น private key รั่วออกแล้ว hot wallet และ warm wallet ได้รับผลกระทบ ส่วน cold storage ยังปลอดภัย และกองทุน User Protection Fund มูลค่า 464 ล้านดอลลาร์จะชดเชยความเสียหายทั้งหมด ขณะนี้ระงับการถอนไว้ก่อนเพื่อตรวจสอบความปลอดภัย โดยยังไม่ระบุกรอบเวลา",
        highlight: { label: "ตัวเลขสำคัญ", value: "$351.6M", note: "ไม่มี key ถูกขโมย — การเจาะเกิดผ่านขั้นตอนลงนามและอนุมัติธุรกรรม ซึ่งเป็นชั้นควบคุมที่การตรวจระบบ custody มักถือว่าเชื่อถือได้" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "1w", url: "https://www.coindesk.com/tech/2026/09/18/ethereum-confirms-glamsterdam-dates-but-warns-fake-builders-could-stall-the-chain",
      hlType: "know",
      en: {
        title: ["Ethereum sets ", "6 October", " for its Glamsterdam test on Sepolia"],
        body: "Ethereum developers locked in 6 October for the Glamsterdam upgrade's test on the Sepolia testnet, with client teams due to release Sepolia-ready software by 29 September — seven days before the fork, half the 14 days the normal upgrade process reserves. Hoodi testing is tentatively set for 27 October and mainnet activation remains unscheduled. The upgrade targets a block gas limit of about 200 million, but developers warned that fake block builders using free test ether could win auctions and withhold data, and production builder software from Titan and Ultrasound has not yet completed a Glamsterdam fork transition.",
        highlight: { label: "Know this", note: "Ethereum block building runs as an auction: specialist builders bid to assemble the next block and validators accept the best bid. A builder that wins and then withholds the block's data stalls the slot — which is why cheap fake builders on a testnet are a real risk to the rehearsal." },
      },
      th: {
        title: ["Ethereum กำหนด ", "6 ตุลาคม", " ทดสอบ Glamsterdam บน Sepolia"],
        body: "นักพัฒนา Ethereum กำหนดวันที่ 6 ตุลาคมสำหรับทดสอบอัปเกรด Glamsterdam บน testnet Sepolia โดยทีม client ต้องออกซอฟต์แวร์ที่พร้อมสำหรับ Sepolia ภายใน 29 กันยายน หรือ 7 วันก่อน fork ซึ่งเป็นครึ่งหนึ่งของ 14 วันตามกระบวนการปกติ การทดสอบบน Hoodi กำหนดไว้เบื้องต้นที่ 27 ตุลาคม ส่วน mainnet ยังไม่มีกำหนด อัปเกรดนี้ตั้งเป้า gas limit ต่อบล็อกราว 200 ล้าน แต่นักพัฒนาเตือนว่า block builder ปลอมที่ใช้ ether ทดสอบฟรีอาจชนะการประมูลแล้วไม่ส่งข้อมูลบล็อก และซอฟต์แวร์ builder ที่ใช้งานจริงของ Titan และ Ultrasound ก็ยังไม่ผ่านการเปลี่ยนผ่าน fork Glamsterdam",
        highlight: { label: "รู้ไว้", note: "การสร้างบล็อกของ Ethereum เป็นระบบประมูล — builder เสนอราคาเพื่อประกอบบล็อกถัดไป แล้ว validator เลือกข้อเสนอที่ดีที่สุด หาก builder ที่ชนะไม่ส่งข้อมูลบล็อก slot นั้นจะว่างเปล่า builder ปลอมต้นทุนต่ำบน testnet จึงเป็นความเสี่ยงจริงต่อการซ้อมอัปเกรด" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/tech/2026/09/23/solana-starts-testing-upgrade-that-could-cut-finality-from-12-8-seconds-to-150-milliseconds",
      hlType: "data",
      en: {
        title: ["Solana tests Alpenglow, cutting finality to ", "150 milliseconds", ""],
        body: "Solana's Alpenglow consensus upgrade has moved to the network's public testnet, aiming to cut the time for transactions to become final from about 12.8 seconds to 0.15 seconds. It replaces TowerBFT — under which validators record votes on-chain and stack them across 32 slots before a block is final — with Votor, in which validators send votes directly to one another and can settle a block after one or two rounds. Validators need Agave 4.3, Firedancer and Frankendancer do not yet support the test, and 28 September appears in Anza's schedule only as a tentative date, not a confirmed mainnet launch.",
        highlight: { label: "By the numbers", value: "150ms", note: "down from ~12.8 seconds — near-instant irreversibility would change how exchanges, bridges and payment firms treat Solana settlement" },
      },
      th: {
        title: ["Solana ทดสอบ Alpenglow ลดเวลา finality เหลือ ", "150 มิลลิวินาที", ""],
        body: "อัปเกรดกลไกฉันทามติ Alpenglow ของ Solana ขึ้นทดสอบบน testnet สาธารณะแล้ว ตั้งเป้าลดเวลาที่ธุรกรรมเป็นที่สิ้นสุด (final) จากราว 12.8 วินาที เหลือ 0.15 วินาที โดยแทนที่ TowerBFT ซึ่ง validator ต้องบันทึกการโหวตบนเชนสะสมข้าม 32 slot ก่อนบล็อกจะ final ด้วย Votor ที่ validator ส่งโหวตถึงกันโดยตรงและยืนยันบล็อกได้ภายใน 1–2 รอบ ผู้เข้าร่วมต้องใช้ Agave 4.3 ขณะที่ Firedancer และ Frankendancer ยังไม่รองรับการทดสอบนี้ และวันที่ 28 กันยายนในตารางของ Anza เป็นเพียงวันที่เบื้องต้น ไม่ใช่วันเปิด mainnet ที่ยืนยันแล้ว",
        highlight: { label: "ตัวเลขสำคัญ", value: "150ms", note: "จากราว 12.8 วินาทีในปัจจุบัน — การชำระที่ย้อนกลับไม่ได้แทบทันที จะเปลี่ยนวิธีที่กระดานเทรด bridge และผู้ให้บริการชำระเงินมองการชำระราคาบน Solana" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "Federal Reserve", time: "1d", url: "https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260924a.htm",
      hlType: "takeaway",
      en: {
        title: ["The Fed proposes its ", "GENIUS Act rules", " for bank-issued stablecoins"],
        body: "The Federal Reserve Board requested public comment on two proposals for Board-supervised payment stablecoin issuers under the GENIUS Act. The first would require issuers to fully back their stablecoins with permissible reserve assets such as short-term Treasury bills and other high-quality liquid assets, set standardized capital requirements for credit and operational risks alongside risk management standards, and introduce rules for Board-supervised firms that safekeep reserve assets. The second creates an application process for Board-supervised banks seeking approval for a subsidiary to issue payment stablecoins — requiring a business plan and financial information, with procedures for appeals, hearings and final determinations; comments close 60 days after Federal Register publication.",
        highlight: { label: "Key takeaway", note: "Bank-issued stablecoins now have a draft Fed rulebook — full reserve backing in T-bills and similar liquid assets plus capital charges for credit and operational risk — which sets the cost base banks will price their stablecoins against." },
      },
      th: {
        title: ["Fed เสนอ ", "เกณฑ์ตาม GENIUS Act", " สำหรับ Stablecoin ที่ธนาคารออก"],
        body: "คณะกรรมการธนาคารกลางสหรัฐ (Fed) เปิดรับฟังความเห็นต่อร่างเกณฑ์ 2 ฉบับสำหรับผู้ออก payment Stablecoin ที่อยู่ภายใต้การกำกับของ Fed ตาม GENIUS Act ฉบับแรกกำหนดให้ผู้ออกต้องมีสินทรัพย์สำรองที่อนุญาตหนุนหลัง Stablecoin เต็มจำนวน เช่น ตั๋วเงินคลังระยะสั้นและสินทรัพย์สภาพคล่องสูงอื่น พร้อมกำหนดเงินกองทุนมาตรฐานสำหรับความเสี่ยงด้านเครดิตและปฏิบัติการ มาตรฐานบริหารความเสี่ยง และเกณฑ์สำหรับผู้เก็บรักษาสินทรัพย์สำรอง ฉบับที่สองวางกระบวนการยื่นขออนุมัติสำหรับธนาคารที่ต้องการตั้งบริษัทลูกเพื่อออก payment Stablecoin โดยต้องยื่นแผนธุรกิจและข้อมูลทางการเงิน พร้อมขั้นตอนอุทธรณ์ การไต่สวน และการวินิจฉัยขั้นสุดท้าย ทั้งนี้เปิดรับความเห็น 60 วันหลังเผยแพร่ใน Federal Register",
        highlight: { label: "สรุปสำคัญ", note: "Stablecoin ที่ธนาคารออกมีร่างกติกาจาก Fed แล้ว — ต้องหนุนหลังเต็มจำนวนด้วยตั๋วเงินคลังและสินทรัพย์สภาพคล่องสูง บวกเงินกองทุนรองรับความเสี่ยงเครดิตและปฏิบัติการ ซึ่งจะกลายเป็นฐานต้นทุนที่ธนาคารใช้ตั้งราคา Stablecoin ของตน" },
      },
    },
    {
      topic: "fintech", source: "SoFi", time: "3d", url: "https://investors.sofi.com/news/news-details/2026/SoFi-Becomes-First-National-Bank-to-Go-Live-with-Stablecoin-Settlement-across-Mastercards-Global-Payments-Network/default.aspx",
      hlType: "data",
      en: {
        title: ["SoFi moves its ", "$25B card program", " to stablecoin settlement on Mastercard"],
        body: "SoFi and Mastercard said stablecoin settlement is now live across SoFi Bank, N.A.'s debit and credit card program, with SoFi migrating its entire $25 billion card program to settlement in SoFiUSD — described as the first stablecoin issued by a nationally chartered bank. SoFiUSD is issued by the OCC-regulated SoFi Bank, fully redeemable 1:1 for US dollars and supported by reserves consisting primarily of cash. Merchants do not need to hold stablecoins: through SoFi's Big Business Banking platform they receive settlement funds instantly in a SoFi Bank account and can withdraw to cash around the clock at zero cost, and SoFi is in discussions with large US merchants.",
        highlight: { label: "By the numbers", value: "$25B", note: "an entire bank card program — not a pilot slice — now settles in a bank-issued stablecoin in live production" },
      },
      th: {
        title: ["SoFi ย้าย ", "พอร์ตบัตร 2.5 หมื่นล้านดอลลาร์", " ไปชำระด้วย Stablecoin บน Mastercard"],
        body: "SoFi และ Mastercard ประกาศว่าการชำระราคาด้วย Stablecoin เปิดใช้งานจริงแล้วกับบัตรเดบิตและบัตรเครดิตของ SoFi Bank, N.A. โดย SoFi กำลังย้ายพอร์ตบัตรทั้งหมดมูลค่า 2.5 หมื่นล้านดอลลาร์ไปชำระด้วย SoFiUSD ซึ่งระบุว่าเป็น Stablecoin ตัวแรกที่ออกโดยธนาคารที่มีใบอนุญาตระดับชาติ SoFiUSD ออกโดย SoFi Bank ที่อยู่ภายใต้การกำกับของ OCC แลกคืนเป็นดอลลาร์ได้ 1:1 เต็มจำนวน และหนุนด้วยสินทรัพย์สำรองที่ส่วนใหญ่เป็นเงินสด ร้านค้าไม่ต้องถือ Stablecoin เอง — ผ่านแพลตฟอร์ม Big Business Banking ร้านค้าจะได้รับเงินทันทีในบัญชี SoFi Bank และถอนเป็นเงินสดได้ตลอด 24 ชั่วโมงโดยไม่มีค่าใช้จ่าย ขณะที่ SoFi อยู่ระหว่างหารือกับร้านค้ารายใหญ่ในสหรัฐ",
        highlight: { label: "ตัวเลขสำคัญ", value: "$25B", note: "พอร์ตบัตรทั้งหมดของธนาคาร ไม่ใช่แค่โครงการนำร่อง ชำระราคาด้วย Stablecoin ที่ธนาคารออกเองบนระบบใช้งานจริง" },
      },
    },
    {
      topic: "fintech", source: "American Banker", time: "1w", url: "https://www.americanbanker.com/news/occ-approves-trust-charters-for-bastion-agora-and-catena",
      hlType: "know",
      en: {
        title: ["OCC conditionally charters ", "three stablecoin trust banks", ""],
        body: "The OCC published conditional approvals for national trust bank charters for Bastion Platforms, Agora and Catena Labs. Bastion is converting its New York state charter to a national one with $6 million of working capital, while Agora and Catena each face a $10 million requirement; Agora intends to transition issuance of its AUSD stablecoin from Agora Bermuda to the new bank. Catena, founded by Circle co-founder Sean Neville, is building an 'AI-native financial institution' offering investment management, digital asset custody and trust services.",
        highlight: { label: "Know this", note: "A national trust bank charter lets a firm hold assets in custody and act as a fiduciary under federal supervision without taking insured deposits — a lighter route into the federal perimeter for stablecoin issuers and custodians." },
      },
      th: {
        title: ["OCC อนุมัติแบบมีเงื่อนไข ", "ธนาคารทรัสต์สาย Stablecoin 3 ราย", ""],
        body: "OCC ประกาศอนุมัติแบบมีเงื่อนไขให้ Bastion Platforms, Agora และ Catena Labs ได้ใบอนุญาตธนาคารทรัสต์ระดับชาติ (national trust bank charter) โดย Bastion เปลี่ยนจากใบอนุญาตระดับรัฐนิวยอร์กมาเป็นระดับชาติ ด้วยเงินทุนหมุนเวียน 6 ล้านดอลลาร์ ส่วน Agora และ Catena ต้องมีรายละ 10 ล้านดอลลาร์ ทั้งนี้ Agora ตั้งใจย้ายการออก Stablecoin AUSD จาก Agora Bermuda มาไว้ที่ธนาคารใหม่ ขณะที่ Catena ซึ่งก่อตั้งโดย Sean Neville ผู้ร่วมก่อตั้ง Circle กำลังสร้าง 'สถาบันการเงินแบบ AI-native' ที่ให้บริการบริหารการลงทุน custody ของ Digital Asset และบริการทรัสต์",
        highlight: { label: "รู้ไว้", note: "ใบอนุญาตธนาคารทรัสต์ระดับชาติ ให้บริษัทเก็บรักษาทรัพย์สิน (custody) และทำหน้าที่ผู้ดูแลผลประโยชน์ภายใต้การกำกับระดับรัฐบาลกลาง โดยไม่ต้องรับเงินฝากที่มีประกัน — เป็นทางเข้าสู่ระบบกำกับของรัฐบาลกลางที่เบากว่าสำหรับผู้ออก Stablecoin และผู้ให้บริการ custody" },
      },
    },
    {
      topic: "fintech", source: "CoinDesk", time: "1d", url: "https://www.coindesk.com/business/2026/09/24/uk-s-largest-banks-complete-world-s-first-interbank-transactions-using-tokenized-deposits",
      hlType: "quote",
      en: {
        title: ["Seven UK banks complete the first ", "live tokenized-deposit payments", ""],
        body: "Barclays, HSBC, Lloyds Banking Group, Monzo, Nationwide, NatWest and Santander completed what CoinDesk describes as the world's first customer transactions using tokenized British pound deposits across multiple institutions, on a shared platform built by Quant. The trial included remortgage payments and a test consumer purchase. Unlike stablecoins, tokenized deposits remain a liability of the issuing bank and retain the protections attached to conventional deposits; the group will next test settling digital assets with tokenized customer money.",
        highlight: { note: "Tokenized deposits have the potential to play a key role in the evolution of digital money and payments in the U.K. and beyond.", by: "Gilbert Verdian, Founder and CEO, Quant" },
      },
      th: {
        title: ["7 ธนาคารอังกฤษทำธุรกรรมจริงครั้งแรกด้วย ", "เงินฝากแบบ Token", ""],
        body: "Barclays, HSBC, Lloyds Banking Group, Monzo, Nationwide, NatWest และ Santander ทำธุรกรรมของลูกค้าด้วยเงินฝากปอนด์แบบ Token ข้ามหลายสถาบันบนแพลตฟอร์มร่วมที่ Quant พัฒนา ซึ่ง CoinDesk ระบุว่าเป็นครั้งแรกของโลก ธุรกรรมที่ทดลองรวมถึงการชำระเงินรีไฟแนนซ์บ้านและการทดสอบซื้อสินค้าของผู้บริโภค ต่างจาก Stablecoin — เงินฝากแบบ Token ยังคงเป็นหนี้สินของธนาคารผู้ออกและได้รับความคุ้มครองแบบเงินฝากปกติ ขั้นต่อไปกลุ่มธนาคารจะทดสอบการชำระราคา Digital Asset ด้วยเงินลูกค้าแบบ Token",
        highlight: { note: "เงินฝากแบบ Token มีศักยภาพจะเป็นกลไกสำคัญในวิวัฒนาการของเงินดิจิทัลและการชำระเงินในสหราชอาณาจักรและที่อื่น ๆ", by: "Gilbert Verdian, Founder and CEO, Quant" },
      },
    },
    {
      topic: "fintech", source: "American Banker", time: "10d", url: "https://www.americanbanker.com/news/crypto-market-structure-bill-fails-in-senate-vote-49-50",
      hlType: "data",
      en: {
        title: ["The crypto market structure bill fails a ", "49–50 Senate vote", ""],
        body: "A procedural vote on the crypto market structure bill failed 49 to 50 in the US Senate, with Republican Senators Josh Hawley, Susan Collins and Jerry Moran among those voting against. Minority Leader Chuck Schumer said talks broke down over ethics provisions, with Democrats seeking stricter measures to stop federal officials or their families profiting from crypto, while for banks the leading issue was how far stablecoin companies could offer yield-like products. The failure likely ends market structure legislation in this Congress, leaving the bill to restart in the next one.",
        highlight: { label: "By the numbers", value: "49–50", note: "with market structure legislation likely stalled until the next Congress, the GENIUS Act and its rulemakings remain the main US federal rulebook for the sector" },
      },
      th: {
        title: ["ร่างกฎหมายโครงสร้างตลาดคริปโตตกไป ", "ด้วยเสียง 49–50", " ในวุฒิสภา"],
        body: "การลงมติเชิงกระบวนการต่อร่างกฎหมายโครงสร้างตลาดคริปโตในวุฒิสภาสหรัฐไม่ผ่านด้วยคะแนน 49 ต่อ 50 โดยมีวุฒิสมาชิกรีพับลิกัน Josh Hawley, Susan Collins และ Jerry Moran อยู่ในกลุ่มที่ลงมติไม่เห็นด้วย Chuck Schumer ผู้นำเสียงข้างน้อยระบุว่าการเจรจาล่มเพราะประเด็นจริยธรรม ซึ่งฝ่ายเดโมแครตต้องการมาตรการเข้มขึ้นเพื่อป้องกันเจ้าหน้าที่รัฐหรือครอบครัวแสวงประโยชน์จากคริปโต ขณะที่ประเด็นหลักของฝั่งธนาคารคือขอบเขตที่บริษัท Stablecoin จะเสนอผลิตภัณฑ์ลักษณะคล้าย yield ได้ ผลครั้งนี้น่าจะทำให้กฎหมายโครงสร้างตลาดไม่ผ่านในสภาชุดนี้ และต้องเริ่มใหม่ในสภาชุดหน้า",
        highlight: { label: "ตัวเลขสำคัญ", value: "49–50", note: "เมื่อกฎหมายโครงสร้างตลาดน่าจะค้างไปถึงสภาชุดหน้า GENIUS Act และเกณฑ์ลูกที่ตามมาจึงยังเป็นกติกาหลักระดับรัฐบาลกลางของอุตสาหกรรมนี้" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", esg: true, source: "Kaohoon", time: "6d", url: "https://www.kaohoon.com/news/864578",
      hlType: "quote",
      en: {
        title: ["DITTO and Token X map ", "Blu Green Token's next steps", ""],
        body: "At the seminar 'Opening the world of alternative assets', DITTO CEO Thakorn Rattanakamonporn said the company develops mangrove-planting projects to generate carbon credits from more than 170,000 rai under its care across more than 10 provinces in the south and east, and — because Thai carbon credits still trade through bilateral matching with no convenient public market — tokenized credits from about 10% of the developed project area through Blu Green Token, which applies the ICMA standard used for green bonds. He added that there have been discussions on the possibility of trading the token on a platform in Singapore, which would widen its investor base. Wannapat Phasayawan of Token X's Investment Banking and Tokenization unit said Blu Green took about three to four years to develop, and that tokenization is spreading beyond real estate and carbon credits to gold, with scope to reach securities, funds and tokenized money market funds — cutting settlement from T+2 to T+1 or T+0 and enabling 24/7 trading.",
        highlight: { note: "Mangrove carbon-credit projects do not benefit only investors — they also benefit the environment, communities and the country's economy.", by: "Thakorn Rattanakamonporn, CEO, DITTO (Thailand)" },
      },
      th: {
        title: ["DITTO–Token X ฉายภาพ ", "ก้าวต่อไปของ Blu Green Token", ""],
        body: "ในงานสัมมนา 'เปิดโลกสินทรัพย์ทางเลือก เติมเต็มโอกาสการลงทุน' นายฐกร รัตนกมลพร ประธานเจ้าหน้าที่บริหาร DITTO ระบุว่าบริษัทพัฒนาโครงการปลูกป่าชายเลนเพื่อสร้างคาร์บอนเครดิต จากพื้นที่ที่ดูแลมากกว่า 170,000 ไร่ ในกว่า 10 จังหวัดภาคใต้และภาคตะวันออก และเนื่องจากการซื้อขายคาร์บอนเครดิตในไทยยังต้องจับคู่กันเองโดยไม่มีตลาดสาธารณะที่สะดวก DITTO จึงนำคาร์บอนเครดิตจากราว 10% ของพื้นที่โครงการที่พัฒนามาผ่าน Tokenization เป็น Blu Green Token ซึ่งนำมาตรฐาน ICMA ที่ใช้กับ Green Bond มาประยุกต์ใช้ พร้อมเผยว่ามีการหารือความเป็นไปได้ที่จะนำ Token ไปซื้อขายบนแพลตฟอร์มในสิงคโปร์เพื่อขยายฐานผู้ลงทุน ด้านนางสาววรรณพรรธน์ ภาษยะวรรณ์ ผู้ช่วยผู้จัดการแผนก Investment Banking and Tokenization ของ Token X (กลุ่ม SCBX) ระบุว่า Blu Green ใช้เวลาพัฒนาราว 3–4 ปี และ Tokenization กำลังขยายจากอสังหาริมทรัพย์และคาร์บอนเครดิตไปสู่ทองคำ และมีโอกาสไปถึงหลักทรัพย์ กองทุน และ Tokenized Money Market Fund ช่วยลดระยะเวลาชำระราคาจาก T+2 เป็น T+1 หรือ T+0 และซื้อขายได้ 24 ชั่วโมง 7 วัน",
        highlight: { note: "โครงการคาร์บอนเครดิตจากป่าชายเลนไม่ได้สร้างประโยชน์เฉพาะนักลงทุน แต่ยังสร้างประโยชน์ต่อสิ่งแวดล้อม ชุมชน และเศรษฐกิจของประเทศ", by: "ฐกร รัตนกมลพร, ประธานเจ้าหน้าที่บริหาร DITTO" },
      },
    },
    {
      topic: "set", source: "SEC / RYT9", time: "2d", url: "https://www.ryt9.com/s/prg/12846054",
      hlType: "takeaway",
      en: {
        title: ["Thai House backs ", "four capital-market bills", ", including a Digital Asset Decree amendment"],
        body: "On 23 September the House of Representatives accepted in principle four capital-market bills proposed by the cabinet — amending the Securities and Exchange Act, the Derivatives Act, the Trust for Transactions in Capital Market Act and the Emergency Decree on Digital Asset Businesses B.E. 2561 (2018) — and set up an ad-hoc committee to review them. The bills cover six areas, starting with promoting a digital capital market through full legal support for electronic processes and new provisions on system providers significant to the capital market; they also give SEC officers joint investigative powers over certain serious offences and replace criminal penalties with administrative fines for minor ones. After committee review, the bills go through the House and the Senate before publication in the Royal Gazette.",
        highlight: { label: "Key takeaway", note: "The 2018 Digital Asset Decree and the Securities Act are now on the same amendment track toward a digital capital market — but committee, House and Senate stages are still ahead." },
      },
      th: {
        title: ["สภาฯ รับหลักการ ", "ร่างกฎหมายตลาดทุน 4 ฉบับ", " รวมร่างแก้ไข พ.ร.ก. สินทรัพย์ดิจิทัล"],
        body: "สภาผู้แทนราษฎรในการประชุมเมื่อ 23 กันยายน 2569 ลงมติรับหลักการร่างกฎหมายตลาดทุน 4 ฉบับที่ ครม. เสนอ ได้แก่ ร่างแก้ไข พ.ร.บ. หลักทรัพย์และตลาดหลักทรัพย์, พ.ร.บ. สัญญาซื้อขายล่วงหน้า, พ.ร.บ. ทรัสต์เพื่อธุรกรรมในตลาดทุน และร่าง พ.ร.บ. แก้ไข พ.ร.ก. การประกอบธุรกิจสินทรัพย์ดิจิทัล พ.ศ. 2561 พร้อมตั้งคณะกรรมาธิการวิสามัญพิจารณารายละเอียด สาระครอบคลุม 6 เรื่อง เริ่มจากการส่งเสริมตลาดทุนดิจิทัล เช่น รองรับกระบวนการทางอิเล็กทรอนิกส์ในตลาดทุนให้ครบถ้วน และเพิ่มบทบัญญัติเกี่ยวกับผู้ให้บริการระบบที่มีนัยสำคัญต่อตลาดทุน รวมถึงให้พนักงานเจ้าหน้าที่ของ SEC มีอำนาจสอบสวนร่วมในความผิดร้ายแรงบางประเภท และใช้การปรับเป็นพินัยแทนโทษอาญาสำหรับความผิดไม่ร้ายแรง หลังผ่านกรรมาธิการ ร่างกฎหมายจะเข้าสู่การพิจารณาของสภาฯ และวุฒิสภาตามลำดับ ก่อนประกาศในราชกิจจานุเบกษา",
        highlight: { label: "สรุปสำคัญ", note: "พ.ร.ก. สินทรัพย์ดิจิทัล ปี 2561 และ พ.ร.บ. หลักทรัพย์ฯ เดินอยู่บนเส้นทางแก้ไขเดียวกันสู่ตลาดทุนดิจิทัลแล้ว — แต่ยังเหลือขั้นกรรมาธิการ สภาฯ และวุฒิสภา" },
      },
    },
    {
      topic: "set", source: "InfoQuest / RYT9", time: "1d", url: "https://www.ryt9.com/s/iq/12846087",
      hlType: "know",
      en: {
        title: ["Krungthai launches ", "PromptFund", " for real-time fund trading on Blockchain"],
        body: "Krungthai Bank (KTB) launched PromptFund, a real-time mutual fund trading service using blockchain technology, under the Digital Securities Ecosystem (DSE) framework the SEC is pushing to enable the issuance and servicing of security tokens. CEO Payong Srivanich said customers can buy and sell funds with the bank instantly, at any time and every day including holidays — receiving cash immediately on a sale or units immediately on a purchase — and see real-time prices before transacting. SEC Secretary-General Pornanong Budsaratragoon said the SEC supports the use of DLT and blockchain in the capital market and encourages businesses to test use cases in its Regulatory Sandbox.",
        highlight: { label: "Know this", note: "The DSE is the SEC's framework for bringing securities — fund units included — into token form on DLT. PromptFund is an early mass-market case where the blockchain is invisible to the customer, who simply sees instant fund settlement." },
      },
      th: {
        title: ["กรุงไทยเปิดตัว ", "PromptFund", " ซื้อขายกองทุนแบบ Real-time ด้วย Blockchain"],
        body: "ธนาคารกรุงไทย (KTB) เปิดตัว PromptFund บริการซื้อขายกองทุนแบบ Real-time ที่ใช้เทคโนโลยี Blockchain ภายใต้กรอบ Digital Securities Ecosystem (DSE) ที่ SEC ผลักดันให้เกิดการออกและให้บริการหลักทรัพย์โทเคน (Securities Token) นายผยง ศรีวณิช กรรมการผู้จัดการใหญ่ ระบุว่าลูกค้าซื้อขายกองทุนกับธนาคารได้ทันที ทุกเวลา ทุกวันไม่เว้นวันหยุด ขายแล้วได้รับเงินทันที ซื้อแล้วได้รับหน่วยลงทุนทันที และเห็นราคาแบบ Real-time ก่อนทำรายการ ด้านนางพรอนงค์ บุษราตระกูล เลขาธิการ SEC กล่าวว่า SEC สนับสนุนการนำ DLT และ Blockchain มาใช้ในตลาดทุน และสนับสนุนให้ภาคธุรกิจนำ use case มาทดสอบใน Regulatory Sandbox",
        highlight: { label: "รู้ไว้", note: "DSE คือกรอบของ SEC ที่นำหลักทรัพย์ รวมถึงหน่วยลงทุน มาอยู่ในรูป Token บน DLT — PromptFund เป็นตัวอย่างแรก ๆ ในตลาดมวลชนที่ลูกค้าไม่ต้องรู้จัก Blockchain เลย เห็นเพียงการชำระราคากองทุนที่เกิดขึ้นทันที" },
      },
    },
    {
      topic: "set", source: "ThaiPR.net", time: "10d", url: "https://www.thaipr.net/finance/3759998",
      hlType: "data",
      en: {
        title: ["MTS Gold and kubix ", "complete the gold Investment Token offering", ""],
        body: "MTS Gold (Mae Thong Suk) group and ICO portal kubix, with seven partner firms, said the offering of 'MTS Gold Investment Token' — Thailand's first digital token for investing in a gold-trading business — has been completed; the announcement did not disclose the amount raised. At least 90% of the proceeds will buy 96.5% gold bars as inventory for Mae Thong Suk's 13 branches in Bangkok and its vicinity, with up to 10% used as working capital. Holders are entitled to a fixed 3.00% annual return paid once a year over the three-year term, a possible bonus from gold-price gains on the inventory at maturity, and return of the initial investment in full after three years.",
        highlight: { label: "By the numbers", value: "3.00%", note: "fixed annual return over three years, paid from trading margins on the token-funded gold inventory — the first Thai Investment Token tied to a gold-trading business" },
      },
      th: {
        title: ["แม่ทองสุก–kubix ", "ปิดการเสนอขาย MTS Gold Investment Token", ""],
        body: "กลุ่มบริษัทในเครือ MTS GOLD (แม่ทองสุก) ร่วมกับ kubix ผู้ให้บริการระบบเสนอขายโทเคนดิจิทัล (ICO Portal) และบริษัทพันธมิตร 7 ราย ประกาศว่าการเสนอขาย 'MTS Gold Investment Token' โทเคนดิจิทัลเพื่อการลงทุนในธุรกิจค้าทองคำเป็นครั้งแรกในไทย แล้วเสร็จเรียบร้อย โดยไม่ได้เปิดเผยยอดเงินที่ระดมได้ บริษัทจะนำเงินไม่น้อยกว่า 90% ไปซื้อทองคำแท่ง 96.5% เป็นสินค้าคงคลังสำหรับห้างทองแม่ทองสุก 13 สาขาในกรุงเทพฯ และปริมณฑล และไม่เกิน 10% เป็นเงินทุนหมุนเวียน ผู้ถือมีสิทธิรับผลตอบแทนคงที่ 3.00% ต่อปี (จ่ายปีละครั้ง) ตลอดอายุ 3 ปี มีโอกาสได้โบนัสจากกำไรส่วนต่างราคาทองคำคงคลังเมื่อครบอายุ และได้รับเงินลงทุนเริ่มต้นคืนเต็มจำนวนเมื่อครบ 3 ปี",
        highlight: { label: "ตัวเลขสำคัญ", value: "3.00%", note: "ผลตอบแทนคงที่ต่อปีตลอด 3 ปี มาจากส่วนต่างราคาซื้อขายทองคำคงคลังที่ซื้อด้วยเงินระดมทุน — Investment Token ตัวแรกของไทยที่ผูกกับธุรกิจค้าทองคำ" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    // ข่าว Token X ย้อนหลัง (25 และ 31 ส.ค.) — หลุดจากฉบับ 9 ใส่เป็นข่าวสั้นตามที่ผู้จัดทำขอ · ระบุวันที่ในข้อความให้ผู้อ่านเห็นว่าเป็นข่าวย้อนหลัง
    { color: "#6366F1", url: "https://www.thaipr.net/finance/3755558",
      en: { strong: "Token X and Siam TC brought in SBI Digital Markets", text: " (announced 31 Aug) to widen investment access to Blu Green Token across Asia-Pacific. The Singapore digital-asset firm, regulated by the MAS under a Capital Markets Services licence, acts as Blu Green's overseas partner through post-ICO support — which the partners describe as Thailand's first bridge between a Thai carbon-credit project and regional institutional capital. The token's reference project covers 17,531.04 rai of mangrove forest registered with TGO under the Standard T-VER and Premium T-VER standards.", src: "ThaiPR.net" },
      th: { strong: "Token X และ Siam TC ผนึก SBI Digital Markets", text: " (ประกาศ 31 ส.ค.) ขยายโอกาสการลงทุนใน Blu Green Token สู่ภูมิภาคเอเชียแปซิฟิก โดย SBIDM บริษัทสินทรัพย์ดิจิทัลจากสิงคโปร์ที่ถือใบอนุญาต Capital Markets Services License ภายใต้การกำกับของ MAS ทำหน้าที่พันธมิตรต่างประเทศผ่านการสนับสนุนภายหลังการเสนอขาย (ICO) ซึ่งระบุว่าเป็นโครงการแรกของไทยที่เชื่อมโครงการคาร์บอนเครดิตไทยกับฐานเงินทุนสถาบันระดับภูมิภาค · โครงการอ้างอิงของ Blu Green Token คือป่าชายเลน 17,531.04 ไร่ ที่ขึ้นทะเบียนกับ อบก. ภายใต้มาตรฐาน Standard T-VER และ Premium T-VER แล้ว", src: "ThaiPR.net" } },
    { color: "#6366F1", url: "https://www.thaipr.net/finance/3753897",
      en: { strong: "CP Group's CPP appointed Token X", text: " (25 Aug) as its SEC-licensed ICO portal to study Green Tokenization of environmental projects — rubber plantations, forestry and alternate-wetting-and-drying rice farming — aiming at carbon-credit projects under Thailand's voluntary greenhouse-gas standard developed by TGO and, potentially, biodiversity credits. CPP's government-partnered rubber carbon-credit project alone spans 500,000 rai in five provinces and more than 60,000 farming households; Token X said any token issuance and offering will be considered at a later stage.", src: "ThaiPR.net" },
      th: { strong: "CPP ในเครือเจริญโภคภัณฑ์ แต่งตั้ง Token X", text: " (25 ส.ค.) เป็น ICO Portal ที่ได้รับอนุญาตจาก ก.ล.ต. เพื่อศึกษา Green Tokenization กับโครงการด้านสิ่งแวดล้อม ทั้งสวนยางพารา โครงการป่าไม้ และนาข้าวแบบเปียกสลับแห้ง (AWD) มุ่งพัฒนาโครงการคาร์บอนเครดิตตามมาตรฐานภาคสมัครใจของไทยที่พัฒนาโดย อบก. และอาจต่อยอดสู่ Biodiversity Credits · เฉพาะโครงการคาร์บอนเครดิตในสวนยางที่ทำร่วมกับภาครัฐมีพื้นที่ 500,000 ไร่ใน 5 จังหวัด ครอบคลุมเกษตรกรกว่า 60,000 ครัวเรือน ทั้งนี้ Token X ระบุว่าการออกและเสนอขาย Token จะพิจารณาในขั้นตอนต่อไปตามความเหมาะสม", src: "ThaiPR.net" } },
    { color: "#A855F7", url: "https://ir.wisdomtree.com/news-events/press-releases/detail/805/wisdomtree-and-moonpay-collaborate-to-expand-u-s-access-to",
      en: { strong: "WisdomTree and MoonPay", text: " will widen US access to WTGXX, WisdomTree's tokenized Treasury money market fund, giving eligible investors another way in through MoonPay's technology and network of more than 35 million accounts. MoonPay also plans to use WTGXX as part of its stablecoin reserve management — tokenized treasury funds increasingly sitting behind stablecoins as the reserve asset.", src: "WisdomTree" },
      th: { strong: "WisdomTree และ MoonPay", text: " ร่วมกันขยายการเข้าถึง WTGXX กองทุนตลาดเงินพันธบัตรรัฐบาลสหรัฐแบบ Token ของ WisdomTree ให้ผู้ลงทุนสหรัฐที่มีคุณสมบัติ ผ่านเทคโนโลยีและเครือข่ายกว่า 35 ล้านบัญชีของ MoonPay โดย MoonPay ยังวางแผนใช้ WTGXX เป็นส่วนหนึ่งในการบริหารเงินสำรองของ Stablecoin — สะท้อนว่ากองทุนพันธบัตรแบบ Token กำลังกลายเป็นสินทรัพย์สำรองเบื้องหลัง Stablecoin", src: "WisdomTree" } },
    { color: "#D946EF", url: "https://www.coindesk.com/business/2026/09/23/moonpay-to-acquire-sec-registered-north-capital-in-usd60-million-all-stock-deal",
      en: { strong: "MoonPay agreed to acquire North Capital", text: " in an all-stock deal valued at over $60 million, subject to regulatory approval. North Capital's affiliates hold SEC broker-dealer, trading, transfer and investment advisory registrations, and the platform has handled around $9 billion in primary and secondary volume; CEO Ivan Soto-Wright tied the deal to building 'the regulatory foundation to support mass adoption of tokenized real-world assets.'", src: "CoinDesk" },
      th: { strong: "MoonPay ตกลงซื้อกิจการ North Capital", text: " ด้วยการแลกหุ้นทั้งหมด มูลค่ากว่า 60 ล้านดอลลาร์ ขึ้นกับการอนุมัติของหน่วยงานกำกับ โดยบริษัทในเครือของ North Capital ถือใบอนุญาตจาก SEC สหรัฐทั้งด้าน broker-dealer การซื้อขาย transfer agent และที่ปรึกษาการลงทุน และมีปริมาณธุรกรรมตลาดแรกและตลาดรองราว 9 พันล้านดอลลาร์ ซีอีโอ Ivan Soto-Wright ระบุว่าดีลนี้คือการวาง 'รากฐานด้านกฎเกณฑ์เพื่อรองรับการใช้งาน Real World Asset แบบ Token ในวงกว้าง'", src: "CoinDesk" } },
    { color: "#2DD4BF", url: "https://www.ledgerinsights.com/hong-kong-plans-wcbdc-by-years-end-to-test-tokenized-government-bills/",
      en: { strong: "The HKMA plans", text: " to make a wholesale CBDC available by year-end for interbank settlement of tokenized deposits under Project EnsembleTX, enabling 24/7 payments, as announced in the Chief Executive's 2026 Policy Address. Live pilot transactions since late 2025 had settled interbank legs through the conventional RTGS system, limiting them to its operating hours; HKEX also plans to use the wholesale CBDC to settle after-hours derivatives trading.", src: "Ledger Insights" },
      th: { strong: "HKMA วางแผน", text: " เปิดใช้ wholesale CBDC ภายในสิ้นปี เพื่อชำระราคาระหว่างธนาคารสำหรับเงินฝากแบบ Token ภายใต้ Project EnsembleTX ให้ชำระเงินได้ 24/7 ตามที่ผู้บริหารสูงสุดฮ่องกงประกาศใน Policy Address ปี 2026 ก่อนหน้านี้ธุรกรรมนำร่องจริงตั้งแต่ปลายปี 2025 ยังชำระระหว่างธนาคารผ่านระบบ RTGS แบบเดิม จึงทำได้เฉพาะช่วงเวลาทำการของระบบ ขณะที่ HKEX ก็มีแผนใช้ wholesale CBDC ชำระราคาการซื้อขายอนุพันธ์นอกเวลาทำการ", src: "Ledger Insights" } },
    { color: "#F59E0B", url: "https://www.ledgerinsights.com/the-clearing-house-selects-quant-for-tokenized-deposit-interoperability/",
      en: { strong: "The Clearing House selected Quant", text: " to provide the interoperability, orchestration and transaction management layer for clearing and settling interbank payments in tokenized deposits, targeting launch in the first half of 2027. Large US banks already run their own tokenized deposit networks but mainly for their own clients; TCH's system is meant to let customers of different banks pay each other. Quant already supplies a similar solution to the UK's Great British Tokenised Deposit.", src: "Ledger Insights" },
      th: { strong: "The Clearing House เลือก Quant", text: " เป็นผู้ให้บริการชั้น interoperability การประสานงาน และการจัดการธุรกรรม สำหรับการหักบัญชีและชำระราคาการชำระเงินระหว่างธนาคารด้วยเงินฝากแบบ Token โดยตั้งเป้าเปิดใช้ครึ่งแรกของปี 2027 ปัจจุบันธนาคารใหญ่ในสหรัฐมีระบบเงินฝากแบบ Token ของตัวเองแต่ให้บริการลูกค้าของตนเป็นหลัก ระบบของ TCH จะช่วยให้ลูกค้าต่างธนาคารชำระเงินถึงกันได้ ทั้งนี้ Quant ให้บริการลักษณะเดียวกันกับ Great British Tokenised Deposit ของอังกฤษอยู่แล้ว", src: "Ledger Insights" } },
    { color: "#F59E0B", url: "https://www.circle.com/pressroom/binance-invests-100-million-in-circle-expands-strategic-partnership-and-renews-commercial-agreement-for-five-years",
      en: { strong: "Binance invested $100 million in Circle", text: " as a strategic equity investment and signed a new five-year commercial agreement focused on expanding USDC access across emerging markets. Under the deal, Binance will accelerate the promotion, awareness and integration of USDC on its platform, while Circle provides the infrastructure services that support holding and using USDC.", src: "Circle" },
      th: { strong: "Binance ลงทุน 100 ล้านดอลลาร์ใน Circle", text: " เป็นการลงทุนเชิงกลยุทธ์ในหุ้น พร้อมลงนามข้อตกลงเชิงพาณิชย์ฉบับใหม่ 5 ปี มุ่งขยายการเข้าถึง USDC ในตลาดเกิดใหม่ โดย Binance จะเร่งโปรโมต สร้างการรับรู้ และผนวก USDC บนแพลตฟอร์ม ขณะที่ Circle ให้บริการโครงสร้างพื้นฐานที่รองรับการถือและใช้งาน USDC", src: "Circle" } },
    { color: "#6366F1", url: "https://www.bangkokbiznews.com/finance/cryptocurrency/1252206",
      en: { strong: "Thai SEC set out the stablecoin split", text: " with the Bank of Thailand: a Thai-baht stablecoin would fall under the BOT, while global stablecoins such as USDT and USDC would be overseen jointly. USDT transfers in and out are capped at ฿5 million per day per transaction unless the purpose and the customer's financial suitability are checked, and a Customer Profiling system grades clients S, M and L — with withdrawal delays and daily limits for small or newly opened accounts.", src: "Bangkok Biz News" },
      th: { strong: "ก.ล.ต. แบ่งบทบาทกำกับ Stablecoin", text: " ร่วมกับ BOT: Thai Baht Stablecoin จะอยู่ภายใต้การดูแลของแบงก์ชาติ ส่วน Global Stablecoin เช่น USDT และ USDC จะกำกับร่วมกันสองหน่วยงาน การโอนเข้าออก USDT จำกัดไม่เกิน 5 ล้านบาทต่อวันต่อครั้ง หากเกินต้องระบุวัตถุประสงค์และตรวจสอบความเหมาะสมกับฐานะการเงิน พร้อมใช้ระบบ Customer Profiling จัดเกรดลูกค้าเป็น S, M และ L โดยลูกค้ารายย่อยขนาดเล็กหรือบัญชีเปิดใหม่จะถูกหน่วงเวลาและจำกัดวงเงินถอนต่อวัน", src: "Bangkok Biz News" } },
  ],
});
