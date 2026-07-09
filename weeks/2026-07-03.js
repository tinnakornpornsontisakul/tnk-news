// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 3 · 26 มิ.ย. – 3 ก.ค. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน)
//  ราคาเหรียญอ่านจาก CoinGecko 3 ก.ค. 2026 · มูลค่า RWA รวมจาก RWA.xyz (2 ก.ค. 2026)
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 3,
    date: "2026-07-03",
    dateEN: "Jun 26 – Jul 3, 2026",
    dateTH: "26 มิ.ย. – 3 ก.ค. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (3 ก.ค. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$30.4B", delta: "-3.7%", up: false,
      points: [28, 30, 31, 31.5, 32, 31.9, 31.7, 31.5, 30.9, 30.4],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 88 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$115.75",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "+0.0%", up: true,  bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.2%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.13",   chg: "+0.1%", up: true,  bar: 48 },
      // ข) Tokenized Gold (ทองคำ ~$4,116/oz กลับมาบวก)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,116",   chg: "+2.5%", up: true,  bar: 87 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,113",   chg: "+2.5%", up: true,  bar: 85 },
      // ค) RWA platform / protocol tokens (สัปดาห์รีบาวด์แรงหลังเทขายรอบก่อน)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.330",   chg: "+7.9%",  up: true,  bar: 60 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.52",    chg: "+23.0%", up: true,  bar: 56 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.200",   chg: "-0.5%",  up: false, bar: 40 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0365",  chg: "+8.8%",  up: true,  bar: 35 },
      { sym: "PLUME", name: "Plume",            price: "$0.0101",  chg: "+9.3%",  up: true,  bar: 32 },
      { sym: "ENA",   name: "Ethena",           price: "$0.0765",  chg: "-4.6%",  up: false, bar: 48 },
      { sym: "SKY",   name: "Sky",              price: "$0.0585",  chg: "+12.6%", up: true,  bar: 46 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0515",  chg: "+4.8%",  up: true,  bar: 30 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.155",   chg: "+30.2%", up: true,  bar: 46 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0198",  chg: "+5.3%",  up: true,  bar: 26 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "-0.6%",  up: false, bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "Securitize / The Block",
    time: "1d",
    url: "https://www.prnewswire.com/news-releases/tokenizing-secz-securitize-brings-its-own-public-stock-onchain-at-listing-day-302816978.html",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["Securitize lists on NYSE — and ", "tokenizes its own stock", " on day one"],
      body: [
        "Securitize began trading on the New York Stock Exchange under ticker SECZ on July 2 and, the same day, launched issuer-sponsored tokenized versions of its common stock on Avalanche and Solana — the first newly public company to bring its own stock on-chain at the start of its life as a public company. Tokenized SECZ is available to eligible U.S. investors through Securitize's regulated platform with full KYC/AML and eligibility checks, and the company expects it to become the world's largest tokenized stock.",
        "The listing completes the merger with Cantor Equity Partners II, which The Block reports raised about $400 million including an oversubscribed $225 million PIPE, with redemptions below 30%. Securitize manages over $4 billion in tokenized assets as of June 2026 — including BlackRock's BUIDL fund at $3 billion-plus in TVL — making SECZ the first pure-play tokenization stock on a major U.S. exchange.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["Securitize เข้าเทรด NYSE พร้อม ", "Tokenize หุ้นตัวเอง", " ตั้งแต่วันแรก"],
      body: [
        "Securitize เข้าซื้อขายในตลาดหลักทรัพย์ New York Stock Exchange ภายใต้สัญลักษณ์ SECZ เมื่อ 2 ก.ค. พร้อมเปิดตัวหุ้นสามัญของตัวเองแบบ Token ที่ผู้ออกหลักทรัพย์ทำเอง (issuer-sponsored) บน Avalanche และ Solana ในวันเดียวกัน นับเป็นบริษัทมหาชนรายแรกที่นำหุ้นตัวเองขึ้นเชนตั้งแต่วันแรกของการเป็นบริษัทจดทะเบียน โดย Tokenized SECZ เปิดให้ผู้ลงทุนสหรัฐที่มีคุณสมบัติเข้าถึงผ่านแพลตฟอร์มภายใต้การกำกับของบริษัท พร้อมขั้นตอน KYC/AML ครบ และบริษัทคาดว่าจะกลายเป็นหุ้นแบบ Token ที่ใหญ่ที่สุดในโลก",
        "การเข้าตลาดครั้งนี้ปิดดีลควบรวมกับ Cantor Equity Partners II ซึ่ง The Block รายงานว่าระดมทุนได้ราว 400 ล้านดอลลาร์ รวม PIPE 225 ล้านดอลลาร์ที่มีผู้จองซื้อเกิน และมีผู้ขอไถ่ถอนต่ำกว่า 30% ทั้งนี้ Securitize บริหารสินทรัพย์แบบ Token กว่า 4 พันล้านดอลลาร์ (ณ มิ.ย. 2026) รวมถึงกองทุน BUIDL ของ BlackRock ที่มี TVL กว่า 3 พันล้านดอลลาร์ — ทำให้ SECZ เป็นหุ้น pure-play ด้าน Tokenization ตัวแรกบนตลาดหลักของสหรัฐ",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "SECZ is not a synthetic token or offshore wrapper. It is issuer-sponsored tokenization of the same common stock trading on the NYSE, made available through regulated infrastructure.", by: "Carlos Domingo, Co-Founder and CEO, Securitize" },
      th: { note: "SECZ ไม่ใช่ Token สังเคราะห์หรือ wrapper นอกประเทศ แต่คือ Tokenization โดยผู้ออกหลักทรัพย์เอง ของหุ้นสามัญตัวเดียวกับที่ซื้อขายบน NYSE ผ่านโครงสร้างที่อยู่ภายใต้การกำกับ", by: "Carlos Domingo, Co-Founder and CEO, Securitize" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "The Block", time: "1d", url: "https://www.theblock.co/post/407031/ondo-tokenizes-blackrocks-ivv-etf-and-micron-stock-under-us-custodial-model",
      hlType: "takeaway",
      en: {
        title: ["Ondo tokenizes ", "BlackRock's IVV ETF", " under the SEC's custodial model"],
        body: "Ondo Finance launched tokenized versions of BlackRock's iShares Core S&P 500 ETF (IVV) and Micron (MU) shares — the first time a third party has tokenized U.S.-listed securities on a public blockchain while staying inside existing U.S. regulatory and market infrastructure. Underlying shares remain in the conventional custody chain while Oasis Pro TA, Ondo's SEC-registered transfer agent, mints tokens backed 1:1 on Ethereum; holders keep full shareholder rights, including on-chain proxy voting via Broadridge's ProxyVote.com.",
        highlight: { label: "Key takeaway", note: "The SEC's January custodial framework just moved from staff statement to production — a compliance template for putting U.S. equities and ETFs on-chain without leaving the custody chain." },
      },
      th: {
        title: ["Ondo แปลง ", "ETF ของ BlackRock เป็น Token", " ใต้กรอบ SEC"],
        body: "Ondo Finance เปิดตัวเวอร์ชัน Token ของ iShares Core S&P 500 ETF (IVV) ของ BlackRock และหุ้น Micron (MU) — ครั้งแรกที่บุคคลที่สาม Tokenize หลักทรัพย์จดทะเบียนสหรัฐบนเชนสาธารณะโดยอยู่ในโครงสร้างตลาดและการกำกับดูแลเดิมทั้งหมด หุ้นอ้างอิงยังอยู่ในระบบ custody ปกติ ขณะที่ Oasis Pro TA (transfer agent ที่จดทะเบียนกับ SEC ในเครือ Ondo) ทำหน้าที่ mint Token หนุนหลัง 1:1 บน Ethereum ผู้ถือได้สิทธิ์ผู้ถือหุ้นครบถ้วน รวมถึงการโหวต proxy บนเชนผ่าน ProxyVote.com ของ Broadridge",
        highlight: { label: "สรุปสำคัญ", note: "กรอบ custodial ของ SEC ที่ออกเมื่อมกราคม เพิ่งถูกใช้งานจริงเป็นครั้งแรก — เป็นแม่แบบด้าน compliance สำหรับนำหุ้นและ ETF สหรัฐขึ้นเชนโดยไม่ต้องออกจากระบบ custody เดิม" },
      },
    },
    {
      topic: "rwa", source: "The Block", time: "3d", url: "https://www.theblock.co/post/406696/new-york-life-first-tokenized-centrifuge-high-yield-corporate-bond-strategy",
      hlType: "data",
      en: {
        title: ["New York Life's ", "$807B manager", " debuts its first tokenized fund"],
        body: "New York Life Investment Management partnered with Centrifuge to launch the NYLIM Anemoy U.S. High Yield Corporate Bond Segregated Portfolio (HYB) — its first tokenized offering and one of the first high-yield corporate bond strategies available on-chain. Subscriptions and redemptions settle in Circle's USDC; the current Reg S structure excludes U.S. investors, targeting stablecoin issuers seeking yield, DeFi users and DAO treasury managers instead.",
        highlight: { label: "By the numbers", value: "$807B", note: "AUM of the insurer-owned manager making its tokenization debut — extending on-chain fixed income beyond Treasuries into high yield" },
      },
      th: {
        title: ["ผู้จัดการเงิน ", "$807B ของ New York Life", " ออกกองทุนแบบ Token กองแรก"],
        body: "New York Life Investment Management จับมือ Centrifuge เปิดตัวกองทุน NYLIM Anemoy U.S. High Yield Corporate Bond Segregated Portfolio (HYB) — ผลิตภัณฑ์แบบ Token ตัวแรกของบริษัท และเป็นหนึ่งในกลยุทธ์ตราสารหนี้ high yield กลุ่มแรกที่มีบนเชน การจองซื้อและไถ่ถอนชำระราคาด้วย Stablecoin USDC ของ Circle โดยโครงสร้าง Reg S ปัจจุบันยังไม่เปิดให้ผู้ลงทุนสหรัฐ เจาะกลุ่มผู้ออก Stablecoin ที่ต้องการ yield, ผู้ใช้ DeFi และผู้บริหารคลังของ DAO",
        highlight: { label: "ตัวเลขสำคัญ", value: "$807B", note: "ขนาด AUM ของผู้จัดการสินทรัพย์ในเครือบริษัทประกันที่เพิ่งเดบิวต์งาน Tokenization — ขยายตราสารหนี้บนเชนจากพันธบัตรรัฐบาลสู่ high yield" },
      },
    },

    {
      topic: "rwa", esg: true, source: "Verra", time: "2w", url: "https://verra.org/verra-and-sp-global-energy-to-launch-next-generation-registry-on-july-27/",
      hlType: "takeaway",
      en: {
        title: ["Verra's next-gen ", "carbon registry", " goes live July 27 with S&P Global"],
        body: "Verra will switch on its next-generation registry on July 27, developed with S&P Global Energy to support its standards programs, including the Verified Carbon Standard (VCS) — the world's leading greenhouse-gas crediting program. The launch brings a modern interface, integration with the Verra Project Hub and improved transparency, traceability and efficiency across the carbon-credit lifecycle, with later phases adding transaction-ready APIs and automated transfers and retirements that connect to exchanges, brokers, marketplaces and other market infrastructure.",
        highlight: { label: "Key takeaway", note: "The registry layer of the voluntary carbon market is being rebuilt as connected, API-ready digital infrastructure — the prerequisite for carbon credits to trade through exchanges and tokenized markets at institutional scale." },
      },
      th: {
        title: ["Verra เตรียมเปิด ", "ทะเบียนคาร์บอนยุคใหม่", " 27 ก.ค. ร่วมกับ S&P Global"],
        body: "Verra จะเปิดใช้ระบบทะเบียน (registry) รุ่นใหม่ในวันที่ 27 ก.ค. ซึ่งพัฒนาร่วมกับ S&P Global Energy เพื่อรองรับมาตรฐานของ Verra รวมถึง Verified Carbon Standard (VCS) โปรแกรมรับรองคาร์บอนเครดิตชั้นนำของโลก มาพร้อมหน้าจอใช้งานสมัยใหม่ การเชื่อมต่อ Verra Project Hub และความโปร่งใส-ตรวจสอบย้อนกลับที่ดีขึ้นตลอดวงจรคาร์บอนเครดิต ส่วนเฟสถัดไปจะเพิ่ม API แบบพร้อมทำธุรกรรม การโอนและ retire เครดิตอัตโนมัติ เชื่อมกับกระดานเทรด โบรกเกอร์ และโครงสร้างตลาดอื่น ๆ",
        highlight: { label: "สรุปสำคัญ", note: "ชั้นทะเบียนของตลาดคาร์บอนภาคสมัครใจกำลังถูกสร้างใหม่เป็นโครงสร้างดิจิทัลที่เชื่อมต่อได้ผ่าน API — เงื่อนไขจำเป็นก่อนคาร์บอนเครดิตจะซื้อขายผ่านกระดานและตลาดแบบ Token ในสเกลสถาบันได้จริง" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "The Block", time: "2d", url: "https://www.theblock.co/post/406918/robinhood-chain-goes-live-mainnet-alongside-24-7-tokenized-stocks-lighter-perps-planned-crypto-agentic-trading",
      hlType: "data",
      en: {
        title: ["Robinhood Chain hits mainnet with ", "24/7 tokenized stocks", ""],
        body: "Robinhood launched the public mainnet of Robinhood Chain, an Ethereum Layer-2 built on Arbitrum's tech stack, with day-one integrations from Uniswap, Chainlink, BitGo and Alchemy. Its Stock Tokens — tokenized debt securities giving economic exposure without ownership rights — trade 24/7 for eligible users in more than 120 countries (not the U.S., Canada, UK or Switzerland), and the app adds USDG stablecoin lending at an estimated 7% APY via Morpho, insured through Lloyd's of London and RELM.",
        highlight: { label: "By the numbers", value: "120+", note: "countries where eligible users can trade Stock Tokens around the clock via Robinhood Wallet" },
      },
      th: {
        title: ["Robinhood Chain ขึ้น mainnet ", "หุ้น Token เทรดได้ 24/7", ""],
        body: "Robinhood เปิด mainnet สาธารณะของ Robinhood Chain เชน Layer-2 บน Ethereum ที่สร้างด้วยเทคโนโลยีของ Arbitrum พร้อมพันธมิตรตั้งแต่วันแรกทั้ง Uniswap, Chainlink, BitGo และ Alchemy โดย Stock Token — ตราสารหนี้แบบ Token ที่ให้ exposure เชิงเศรษฐกิจโดยไม่ให้กรรมสิทธิ์ในหุ้นจริง — ซื้อขายได้ตลอด 24 ชั่วโมงทุกวันสำหรับผู้ใช้ที่มีคุณสมบัติในกว่า 120 ประเทศ (ยกเว้นสหรัฐ แคนาดา สหราชอาณาจักร และสวิตเซอร์แลนด์) พร้อมเพิ่มบริการปล่อยกู้ Stablecoin USDG ผลตอบแทนราว 7% ต่อปีผ่าน Morpho โดยมีประกันจาก Lloyd's of London และ RELM",
        highlight: { label: "ตัวเลขสำคัญ", value: "120+", note: "จำนวนประเทศที่ผู้ใช้ที่มีคุณสมบัติเทรด Stock Token ได้ตลอดเวลาผ่าน Robinhood Wallet" },
      },
    },
    {
      topic: "tokenization", source: "Clearstream / EIB", time: "4d", url: "https://www.clearstream.com/clearstream-en/newsroom/260629-5355756",
      hlType: "know",
      en: {
        title: ["EIB's first ", "DLT-native commercial paper", " doubles as Bundesbank collateral"],
        body: "The European Investment Bank issued a EUR 77.5 million, 10-business-day DLT-native commercial paper on Clearstream's D7 platform, with Citi as sole dealer and issuing and paying agent, and DekaBank, DZ BANK, Eurex Clearing, Union Investment, BIL and Volksbank Mittlerer Schwarzwald as primary investors. DekaBank and Eurex Clearing then mobilized the instrument as collateral with the Bundesbank via Clearstream's triparty solution and the ECMS — all inside a CSDR-compliant framework.",
        highlight: { label: "Know this", note: "The ECB now accepts DLT-native securities issued via CSDs as collateral in Eurosystem credit operations — so tokenized paper can be pledged for central-bank liquidity, closing the loop from on-chain issuance to the lender of last resort." },
      },
      th: {
        title: ["ตราสาร ", "DLT-native ตัวแรกของ EIB", " ใช้เป็นหลักประกันกับ Bundesbank ได้"],
        body: "European Investment Bank (EIB) ออกตราสารหนี้ระยะสั้น (commercial paper) แบบ DLT-native มูลค่า 77.5 ล้านยูโร อายุ 10 วันทำการ บนแพลตฟอร์ม D7 ของ Clearstream โดยมี Citi เป็น sole dealer และ issuing & paying agent ส่วนผู้ลงทุนหลักได้แก่ DekaBank, DZ BANK, Eurex Clearing, Union Investment, BIL และ Volksbank Mittlerer Schwarzwald จากนั้น DekaBank และ Eurex Clearing นำตราสารไปใช้เป็นหลักประกันกับ Bundesbank ผ่านระบบ triparty ของ Clearstream และ ECMS — ทั้งหมดอยู่ในกรอบที่สอดคล้องกับกฎ CSDR",
        highlight: { label: "รู้ไว้", note: "ECB เปิดรับหลักทรัพย์ DLT-native ที่ออกผ่าน CSD เป็นหลักประกันในธุรกรรมสินเชื่อของ Eurosystem แล้ว — ตราสารแบบ Token จึงนำไปวางค้ำเพื่อรับสภาพคล่องจากธนาคารกลางได้ ปิดวงจรจากการออกตราสารบนเชนถึงผู้ให้กู้แหล่งสุดท้าย" },
      },
    },
    {
      topic: "tokenization", source: "Ledger Insights", time: "2d", url: "https://www.ledgerinsights.com/tradeweb-executes-tokenized-treasury-transaction-against-stablecoins-on-canton/",
      hlType: "quote",
      en: {
        title: ["Tradeweb settles tokenized Treasuries ", "against stablecoin", " on Canton"],
        body: "Tradeweb executed a tokenized U.S. Treasury transaction on the Canton Network in which Franklin Templeton sold a tokenized Treasury to market maker Virtu Financial, with the cash leg settled in USDCx tokens. Digital Asset, Blockdaemon and Societe Generale also took part; Tradeweb, which operates one of Canton's 13 super validator nodes, frames the trade as groundwork for DTCC's tokenization services anticipated this fall.",
        highlight: { note: "Every transaction like this is a building block toward a 24/7 liquidity layer, where high-quality assets move with the trust and rigor institutions demand, free of traditional market-hour constraints.", by: "Tony Pecore, SVP, Director of Digital Asset Management, Franklin Templeton" },
      },
      th: {
        title: ["Tradeweb ชำระ Treasury แบบ Token ", "ด้วย Stablecoin", " บน Canton"],
        body: "Tradeweb ประมวลผลธุรกรรมพันธบัตรรัฐบาลสหรัฐแบบ Token บน Canton Network โดย Franklin Templeton ขายพันธบัตรแบบ Token ให้ market maker Virtu Financial และชำระราคาขาเงินสดด้วย Token USDCx ผู้ร่วมธุรกรรมยังมี Digital Asset, Blockdaemon และ Societe Generale ทั้งนี้ Tradeweb ซึ่งรันหนึ่งใน super validator 13 โหนดของ Canton วางธุรกรรมนี้เป็นการปูทางสู่บริการ Tokenization ของ DTCC ที่คาดว่าจะเปิดในฤดูใบไม้ร่วงนี้",
        highlight: { note: "ทุกธุรกรรมแบบนี้คืออิฐอีกก้อนของเลเยอร์สภาพคล่อง 24/7 ที่สินทรัพย์คุณภาพสูงเคลื่อนที่ได้ด้วยความเชื่อมั่นและมาตรฐานที่สถาบันต้องการ โดยไม่ติดข้อจำกัดเวลาทำการของตลาด", by: "Tony Pecore, SVP, Director of Digital Asset Management, Franklin Templeton" },
      },
    },

    {
      topic: "tokenization", source: "Ledger Insights", time: "1d", url: "https://www.ledgerinsights.com/hong-kong-explores-smoothing-regulatory-path-for-digital-bonds/",
      hlType: "data",
      en: {
        title: ["Hong Kong clears the legal path for ", "digital bonds", " after $2B in H1"],
        body: "Five organizations issued digital bonds worth more than $2 billion in Hong Kong in the first half of 2026 — four of them Korean issuers, drawn partly by subsidies for issuance costs — keeping the city the leading venue for tokenized debt. With phase one of legal work complete, including Companies Registry guidance that a DLT-based register of debenture holders satisfies the Companies Ordinance, the FSTB and HKMA now start phase two: recognizing e-signatures in trust creation and clarifying possession and transfer of tokenized fixed-income instruments.",
        highlight: { label: "By the numbers", value: "$2B", note: "digital bonds issued in Hong Kong in H1 2026 by five organizations — four of them Korean issuers drawn by the city's issuance subsidies" },
      },
      th: {
        title: ["ฮ่องกงเคลียร์ทางกฎหมาย ", "Digital Bond", " หลังยอด H1 ทะลุ $2B"],
        body: "องค์กร 5 รายออก digital bond ในฮ่องกงรวมมูลค่ากว่า 2 พันล้านดอลลาร์ในครึ่งแรกของปี 2026 — เป็นผู้ออกจากเกาหลีถึง 4 ราย ที่ส่วนหนึ่งถูกดึงดูดด้วยเงินอุดหนุนค่าใช้จ่ายการออก — ตอกย้ำสถานะเวทีอันดับหนึ่งของตราสารหนี้แบบ Token เมื่อจบเฟสแรกของงานด้านกฎหมายแล้ว (รวมถึงแนวปฏิบัติของ Companies Registry ที่ยืนยันว่าทะเบียนผู้ถือหุ้นกู้บน DLT ใช้ได้ตามกฎหมายบริษัท) FSTB และ HKMA ก็เริ่มเฟสสอง: รับรอง e-signature ในการจัดตั้งทรัสต์ และทำความชัดเจนเรื่องการครอบครองและการโอนตราสารหนี้แบบ Token",
        highlight: { label: "ตัวเลขสำคัญ", value: "$2B", note: "มูลค่า digital bond ที่ออกในฮ่องกงช่วง H1 2026 จากผู้ออก 5 ราย — เป็นองค์กรเกาหลี 4 รายที่มาเพราะเงินอุดหนุนการออกของเมือง" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "Standard Chartered", time: "2d", url: "https://www.sc.com/en/press-release/standard-chartered-and-lmax-group-execute-first-live-digital-asset-prime-brokerage-trades/",
      hlType: "know",
      en: {
        title: ["Standard Chartered runs first ", "digital-asset prime brokerage", " trades"],
        body: "Standard Chartered became one of the first global systemically important banks (G-SIBs) to execute digital asset prime brokerage trades, piloting spot Bitcoin (XBT/USD) and Ether (XET/USD) transactions on LMAX Digital with T+1 settlement through its UK branch and custody on its DIFC platform in Dubai. The bank's prime brokerage arm acted as credit intermediary between counterparties, testing execution and matching technology, client connectivity, messaging and netting approaches.",
        highlight: { label: "Know this", note: "In prime brokerage the bank stands between trading counterparties and absorbs their credit risk — the intermediation layer many institutional funds require before they will touch a new asset class." },
      },
      th: {
        title: ["Standard Chartered เริ่มเทรด ", "prime brokerage สินทรัพย์ดิจิทัล", " รายแรก ๆ ของ G-SIB"],
        body: "Standard Chartered เป็นหนึ่งในธนาคารสำคัญเชิงระบบระดับโลก (G-SIB) รายแรก ๆ ที่ทำธุรกรรม prime brokerage ด้าน Digital Asset โดยนำร่องเทรด Bitcoin (XBT/USD) และ Ether (XET/USD) แบบ spot บนกระดาน LMAX Digital ชำระราคาแบบ T+1 ผ่านสาขาสหราชอาณาจักร และเก็บรักษาทรัพย์สินบนแพลตฟอร์ม custody ของธนาคารใน DIFC ดูไบ โดยหน่วย prime brokerage ของธนาคารรับบทตัวกลางด้านเครดิตระหว่างคู่สัญญา พร้อมทดสอบระบบจับคู่คำสั่ง การเชื่อมต่อลูกค้า การรับส่งข้อความ และแนวทาง netting",
        highlight: { label: "รู้ไว้", note: "ใน prime brokerage ธนาคารยืนกลางระหว่างคู่เทรดและรับความเสี่ยงด้านเครดิตแทน — เป็นชั้นตัวกลางที่กองทุนสถาบันจำนวนมากต้องมีก่อนจะแตะสินทรัพย์ประเภทใหม่" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/tech/2026/07/01/ethereum-gets-a-new-nonprofit-focused-on-institutional-adoption",
      hlType: "takeaway",
      en: {
        title: ["'Ethereum Institutional' launches as a ", "front door for banks", ""],
        body: "A new independent nonprofit, Ethereum Institutional, launched with the goal of accelerating institutional adoption of Ethereum — giving banks and asset managers a neutral point of contact for evaluating the network for tokenization, stablecoins and on-chain financial infrastructure. It debuts with backing from BitMine, Nasdaq-listed SharpLink Gaming and Ethereum co-founder Joseph Lubin, and is led by David Walsh, Marius Smith and Matthew Dawson.",
        highlight: { label: "Key takeaway", note: "Ethereum now has a dedicated institutional go-to-market organization — arriving just as U.S. and European rulebooks for tokenized finance are being finalized." },
      },
      th: {
        title: ["'Ethereum Institutional' เปิดตัวเป็น ", "ประตูสู่สถาบัน", ""],
        body: "องค์กรไม่แสวงกำไรอิสระชื่อ Ethereum Institutional เปิดตัวโดยมีเป้าหมายเร่งการใช้งาน Ethereum ในหมู่สถาบัน — เป็นจุดติดต่อกลางให้ธนาคารและผู้จัดการสินทรัพย์ที่ต้องการประเมินการใช้เครือข่ายสำหรับ Tokenization, Stablecoin และโครงสร้างการเงินบนเชน โดยมีผู้สนับสนุนเริ่มต้นคือ BitMine, SharpLink Gaming (จดทะเบียนใน Nasdaq) และ Joseph Lubin ผู้ร่วมก่อตั้ง Ethereum นำทีมโดย David Walsh, Marius Smith และ Matthew Dawson",
        highlight: { label: "สรุปสำคัญ", note: "Ethereum มีองค์กร go-to-market สำหรับสถาบันโดยเฉพาะแล้ว — มาในจังหวะที่กติกา Tokenized Finance ของทั้งสหรัฐและยุโรปกำลังเข้าเส้นชัยพอดี" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "The Block", time: "3d", url: "https://www.theblock.co/post/406736/visa-stripe-coinbase-join-open-usd-stablecoin-shares-reserve-revenue",
      hlType: "takeaway",
      en: {
        title: ["Visa, Mastercard and 140+ firms back ", "'Open USD' shared stablecoin", ""],
        body: "More than 140 companies — including Visa, Mastercard, Stripe, American Express, BlackRock, BNY, Standard Chartered, U.S. Bank, Google, Shopify, Coinbase and Ripple — joined Open Standard, a consortium launching Open USD (OUSD), a shared U.S. dollar stablecoin expected later this year. Businesses will mint and redeem without fees or volume limits, most reserve income is distributed to participants after a small management fee, and governance sits with an independent organization rather than a single issuer.",
        highlight: { label: "Key takeaway", note: "A consortium stablecoin that hands reserve yield back to its distributors is a direct challenge to the single-issuer economics of Circle and Tether." },
      },
      th: {
        title: ["Visa, Mastercard และ 140+ บริษัท หนุน ", "Stablecoin กลาง 'Open USD'", ""],
        body: "บริษัทกว่า 140 ราย — รวมถึง Visa, Mastercard, Stripe, American Express, BlackRock, BNY, Standard Chartered, U.S. Bank, Google, Shopify, Coinbase และ Ripple — เข้าร่วม Open Standard กลุ่มความร่วมมือที่จะออก Open USD (OUSD) Stablecoin ดอลลาร์แบบใช้ร่วมกัน คาดเปิดตัวภายในปีนี้ ธุรกิจที่ร่วมโครงการ mint และไถ่ถอนได้โดยไม่มีค่าธรรมเนียมหรือเพดานปริมาณ รายได้ส่วนใหญ่จากเงินสำรองจะถูกแบ่งคืนให้ผู้ร่วมโครงการหลังหักค่าบริหารเล็กน้อย และการกำกับดูแลอยู่กับองค์กรอิสระแทนที่จะเป็นผู้ออกรายเดียว",
        highlight: { label: "สรุปสำคัญ", note: "Stablecoin แบบ consortium ที่คืน yield จากเงินสำรองให้ผู้กระจายเหรียญ คือการท้าชนโมเดลผู้ออกรายเดียวของ Circle และ Tether โดยตรง" },
      },
    },
    {
      topic: "fintech", source: "The Block", time: "2d", url: "https://www.theblock.co/post/406766/europes-mica-crypto-regime-is-fully-in-force-heres-who-wins-and-loses",
      hlType: "data",
      en: {
        title: ["MiCA now ", "fully in force", " — only 244 firms made the cut"],
        body: "Europe's final MiCA transition period ended July 1: firms without a Crypto-Asset Service Provider authorization must wind down or restrict services to EU clients. Only 244 CASPs were authorized as of the prior week — versus more than 3,000 firms that operated under old national regimes — while licensed exchanges already account for roughly 83% of European trading volume. Binance entered the deadline without MiCA authorization after withdrawing its Greek application.",
        highlight: { label: "By the numbers", value: "244", note: "authorized CASPs vs 3,000+ firms under prior national regimes — Germany leads with 57, and licensed venues already carry ~83% of EU volume" },
      },
      th: {
        title: ["MiCA ", "มีผลเต็มรูปแบบ", " — เหลือผู้ได้ใบอนุญาตแค่ 244 ราย"],
        body: "ช่วงเปลี่ยนผ่านสุดท้ายของกฎ MiCA ยุโรปสิ้นสุดเมื่อ 1 ก.ค. — บริษัทที่ไม่มีใบอนุญาต Crypto-Asset Service Provider (CASP) ต้องยุติหรือจำกัดการให้บริการลูกค้าใน EU โดยสัปดาห์ก่อนเส้นตายมี CASP ที่ได้รับอนุญาตเพียง 244 ราย เทียบกับกว่า 3,000 รายที่เคยดำเนินการภายใต้ระบบกำกับรายประเทศแบบเดิม ขณะที่กระดานเทรดที่มีใบอนุญาตครองปริมาณซื้อขายราว 83% ของยุโรปแล้ว ส่วน Binance เข้าสู่เส้นตายโดยไม่มีใบอนุญาต MiCA หลังถอนคำขอที่ยื่นในกรีซ",
        highlight: { label: "ตัวเลขสำคัญ", value: "244", note: "จำนวน CASP ที่ได้รับอนุญาต เทียบกับ 3,000+ รายในระบบเดิม — เยอรมนีนำที่ 57 ราย และกระดานที่มีใบอนุญาตครอง ~83% ของปริมาณเทรด EU" },
      },
    },
    {
      topic: "fintech", source: "CACEIS", time: "2d", url: "https://www.caceis.com/press-releases/credit-agricole-launches-eurxt-its-euro-denominated-stablecoin",
      hlType: "know",
      en: {
        title: ["Credit Agricole issues ", "euro stablecoin EURXT", " via CACEIS"],
        body: "Credit Agricole launched EURXT (EURO eXchange Token), a MiCA-compliant euro-pegged e-money token issued by its asset-servicing arm CACEIS on Ethereum (ERC-20), initially for institutional and corporate clients and secured by dedicated cash reserves on CACEIS Bank's balance sheet. The launch included the first subscription to a tokenized Luxembourg-domiciled UCITS money market fund settled in a euro stablecoin at European level, under the group's ACT 2028 plan.",
        highlight: { label: "Know this", note: "Under MiCA an 'e-money token' is a stablecoin pegged to a single fiat currency and redeemable at par — the regulated wrapper that lets EU banks issue digital cash." },
      },
      th: {
        title: ["Crédit Agricole ออก ", "Stablecoin ยูโร EURXT", " ผ่าน CACEIS"],
        body: "Crédit Agricole เปิดตัว EURXT (EURO eXchange Token) — e-money token อิงเงินยูโรที่สอดคล้องกับกฎ MiCA ออกโดย CACEIS หน่วยงาน asset servicing ของกลุ่ม บน Ethereum (มาตรฐาน ERC-20) เริ่มให้บริการลูกค้าสถาบันและองค์กรก่อน โดยหนุนหลังด้วยเงินสดสำรองเฉพาะบนงบดุลของ CACEIS Bank พร้อมกันนี้ยังเกิดการจองซื้อกองทุนตลาดเงิน UCITS แบบ Token (จดทะเบียนในลักเซมเบิร์ก) ที่ชำระราคาด้วย Stablecoin ยูโรเป็นครั้งแรกในระดับยุโรป ภายใต้แผนกลยุทธ์ ACT 2028 ของกลุ่ม",
        highlight: { label: "รู้ไว้", note: "ตามกฎ MiCA 'e-money token' คือ Stablecoin ที่อิงสกุลเงิน fiat สกุลเดียวและไถ่ถอนได้ที่ราคา par — เป็นกรอบภายใต้การกำกับที่เปิดให้ธนาคาร EU ออกเงินสดดิจิทัลได้" },
      },
    },

    {
      topic: "fintech", esg: true, source: "Gprnt / SGX", time: "1d", url: "https://www.gprnt.ai/newsroom/gprnt-partners-sgxgroup-to-strengthen-climate-reporting-transition-planning-on-esgenome",
      hlType: "know",
      en: {
        title: ["Singapore wires ESG data into SGX with a ", "Gprnt–ESGenome", " revamp"],
        body: "Gprnt — the digital sustainability-reporting utility launched by the Monetary Authority of Singapore in 2023 — partnered with SGX Group to upgrade the ESGenome disclosure portal, now fully migrated onto the Gprnt platform. Listed companies get ISSB-aligned climate-disclosure modules, automated Scope 1–2 emissions calculations from trusted government data and decision-useful data for Scope 3 reporting, with AI-powered disclosure and transition-planning tools arriving in phases — feeding into the 'Green 100' initiative and access to green financing.",
        highlight: { label: "Know this", note: "Gprnt is regulator-built ESG data infrastructure: company disclosures become verified, machine-readable data that banks and investors can reuse for green-financing decisions." },
      },
      th: {
        title: ["สิงคโปร์ฝังข้อมูล ESG เข้า SGX ด้วย ", "Gprnt–ESGenome", " โฉมใหม่"],
        body: "Gprnt — utility ด้านรายงานความยั่งยืนดิจิทัลที่ Monetary Authority of Singapore (MAS) ก่อตั้งเมื่อปี 2023 — จับมือ SGX Group ยกระดับพอร์ทัลเปิดเผยข้อมูล ESGenome ซึ่งย้ายขึ้นแพลตฟอร์ม Gprnt เต็มรูปแบบแล้ว บริษัทจดทะเบียนจะได้โมดูลเปิดเผยข้อมูลสภาพภูมิอากาศตามมาตรฐาน ISSB การคำนวณการปล่อยก๊าซ Scope 1–2 อัตโนมัติจากข้อมูลภาครัฐที่เชื่อถือได้ และข้อมูลสนับสนุนการรายงาน Scope 3 พร้อมเครื่องมือ AI ช่วยจัดทำรายงานและแผน transition ที่จะทยอยเปิดใช้ โดยข้อมูลทั้งหมดเชื่อมเข้ากับโครงการ 'Green 100' และการเข้าถึง green financing",
        highlight: { label: "รู้ไว้", note: "Gprnt คือโครงสร้างข้อมูล ESG ที่หน่วยงานกำกับสร้างเอง — ข้อมูลเปิดเผยของบริษัทถูกแปลงเป็นข้อมูลที่ผ่านการตรวจสอบและเครื่องอ่านได้ ให้ธนาคารและผู้ลงทุนใช้ตัดสินใจด้าน green financing ต่อได้ทันที" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", esg: true, source: "DITTO / Infoquest", time: "now", url: "https://www.ryt9.com/s/iq/12826886",
      hlType: "data",
      en: {
        title: ["Blu Green Token opens ", "฿480M subscription", " on Token X, July 3–13"],
        body: "DITTO's Blu Green Token (BLU) — Thailand's first investment token backed by mangrove carbon credits — opens for subscription July 3–13 via the Token X app (from 9:00 on day one to 15:30 on the final day) at ฿1.20 per token: 400 million tokens raising up to ฿480 million, with a ฿1,200 minimum and a ฿300,000 cap per retail investor, and InnovestX as token introducing agent. The 7-year project references carbon-credit income from 17,531 rai of mangrove forest managed by DITTO subsidiary Siam TC Technology (STCT), registered under Thailand's T-VER and Premium T-VER standards.",
        highlight: { label: "By the numbers", value: "10.35%", note: "projected base-case IRR per year — with DITTO guaranteeing a 3% minimum annual return plus principal if carbon-credit sales underperform" },
      },
      th: {
        title: ["Blu Green Token เปิดจอง ", "฿480 ล้านผ่าน Token X", " 3–13 ก.ค. นี้"],
        body: "Blu Green Token (BLU) ของ DITTO — Token เพื่อการลงทุนตัวแรกของไทยที่หนุนด้วยคาร์บอนเครดิตป่าชายเลน — เปิดจองซื้อ 3–13 ก.ค. ผ่านแอป Token X (เริ่ม 9:00 น. วันแรก ถึง 15:30 น. วันสุดท้าย) ที่ราคา ฿1.20 ต่อโทเคน รวม 400 ล้านโทเคน ระดมทุนไม่เกิน ฿480 ล้าน จองขั้นต่ำ ฿1,200 และจำกัดรายย่อยไม่เกิน ฿300,000 ต่อราย โดยมี InnovestX เป็นตัวแทนแนะนำโทเคน โครงการอายุ 7 ปี อิงรายได้คาร์บอนเครดิตจากป่าชายเลน 17,531 ไร่ ที่ดูแลโดย Siam TC Technology (STCT) บริษัทย่อยของ DITTO และขึ้นทะเบียนมาตรฐาน T-VER และ Premium T-VER",
        highlight: { label: "ตัวเลขสำคัญ", value: "10.35%", note: "IRR ประมาณการกรณีฐานต่อปี — โดย DITTO การันตีผลตอบแทนขั้นต่ำ 3% ต่อปีพร้อมคืนเงินต้น หากขายคาร์บอนเครดิตได้ต่ำกว่าแผน" },
      },
    },
    {
      topic: "set", esg: true, source: "Thansettakij", time: "1w", url: "https://www.thansettakij.com/sustainable/662207",
      hlType: "quote",
      en: {
        title: ["Big corporates and HNW investors ", "line up for Blu Green Token", ""],
        body: "DITTO says large corporate groups across retail, food, energy, logistics and transport — along with high-net-worth investors — have shown interest in Blu Green Token ahead of its third-quarter subscription. The underlying mangrove plantation in Rayong spans 17,531 rai and is expected to generate about 400,000 tonnes of carbon credits over the 7-year project (extendable to 9 years), with carbon-credit sales revenue starting from year 5.",
        highlight: { note: "Feedback from businesses and investors is trending in a positive direction.", by: "Thakorn Rattanakamolporn, CEO, DITTO (Thailand)" },
      },
      th: {
        title: ["ทุนใหญ่หลายอุตสาหกรรม–HNW ", "จ่อคิว Blu Green Token", ""],
        body: "DITTO เผยว่ากลุ่มทุนขนาดใหญ่ในหลายอุตสาหกรรม ทั้งค้าปลีก อาหาร พลังงาน โลจิสติกส์ และคมนาคม รวมถึงนักลงทุนรายใหญ่ (High Net Worth) แสดงความสนใจ Blu Green Token ก่อนเปิดจองซื้อในไตรมาส 3 โดยแปลงป่าชายเลนอ้างอิงที่จังหวัดระยองครอบคลุม 17,531 ไร่ คาดสร้างคาร์บอนเครดิตราว 400,000 ตันตลอดโครงการ 7 ปี (ขยายได้ถึง 9 ปี) และเริ่มรับรู้รายได้จากการขายเครดิตตั้งแต่ปีที่ 5 เป็นต้นไป",
        highlight: { note: "กระแสตอบรับจากภาคธุรกิจและนักลงทุนอยู่ในทิศทางที่ดี", by: "ฐกร รัตนกมลพร (Thakorn Rattanakamolporn), CEO, DITTO (Thailand)" },
      },
    },
    {
      topic: "set", esg: true, source: "BOT / The Standard", time: "1w", url: "https://thestandard.co/bank-thailand-stablecoin-forex/",
      hlType: "takeaway",
      en: {
        title: ["Bank of Thailand studies a ", "'Thai Baht Stablecoin'", " issued by banks"],
        body: "BOT Governor Vitai Ratanakorn said the central bank is studying a Thai Baht Stablecoin — pegged 1:1 to the baht — and will open a public hearing within this year, alongside plans to let financial institutions conduct selected digital-asset business in support of green finance such as carbon-credit transactions. He stressed the BOT has no intention of licensing speculative FX trading.",
        highlight: { label: "Key takeaway", note: "Baht-backed stablecoins issued by regulated banks would give Thailand's tokenized-asset and carbon-credit markets the settlement rail they have been missing." },
      },
      th: {
        title: ["ธปท. ศึกษา ", "'Thai Baht Stablecoin'", " เปิดทางแบงก์ออกเหรียญบาท"],
        body: "วิทัย รัตนากร ผู้ว่าการ BOT เผยว่ากำลังศึกษา Thai Baht Stablecoin ที่อิงมูลค่ากับเงินบาทในอัตรา 1:1 และเตรียมเปิดรับฟังความคิดเห็น (hearing) ภายในปีนี้ พร้อมเปิดทางให้สถาบันการเงินเข้าไปทำธุรกิจบางส่วนที่เกี่ยวกับ Digital Asset เพื่อสนับสนุนการเงินสีเขียว เช่น ธุรกรรมคาร์บอนเครดิต โดยย้ำว่า BOT ไม่มีแนวคิดเปิดให้ทำธุรกิจซื้อขายเงินตราต่างประเทศ (FX) เพื่อเก็งกำไร",
        highlight: { label: "สรุปสำคัญ", note: "Stablecoin บาทที่ออกโดยธนาคารภายใต้การกำกับ จะเป็นรางการชำระราคาที่ตลาดสินทรัพย์แบบ Token และคาร์บอนเครดิตของไทยรอคอยมานาน" },
      },
    },
    {
      topic: "set", source: "SEC", time: "1w", url: "https://www.ryt9.com/s/prg/12825662",
      hlType: "know",
      en: {
        title: ["Thai SEC opens hearing on ", "digital-asset Travel Rule", ""],
        body: "The SEC opened a public hearing on draft rules setting Travel Rule standards for digital-asset transfers: operators must transmit sender and recipient information along with transfer orders, verify ownership and control of self-hosted wallets, and retain transfer records for at least five years — the first two in a format regulators can audit immediately. Comments are open until July 10.",
        highlight: { label: "Know this", note: "Under the Travel Rule, identity data must 'travel' with every token transfer between operators — keeping transactions traceable end-to-end in line with international AML standards." },
      },
      th: {
        title: ["ก.ล.ต. เปิดรับฟังเกณฑ์ ", "Travel Rule สินทรัพย์ดิจิทัล", ""],
        body: "SEC เปิดรับฟังความคิดเห็นร่างประกาศกำหนดมาตรฐาน Travel Rule สำหรับการโอน Digital Asset — ผู้ประกอบธุรกิจต้องส่งข้อมูลผู้โอนและผู้รับโอนไปพร้อมคำสั่งโอน ตรวจสอบความเป็นเจ้าของและอำนาจควบคุมของ self-hosted wallet และเก็บบันทึกธุรกรรมโอนอย่างน้อย 5 ปี โดย 2 ปีแรกต้องอยู่ในรูปแบบที่หน่วยงานกำกับเรียกดูตรวจสอบได้ทันที เปิดรับความเห็นถึง 10 ก.ค. นี้",
        highlight: { label: "รู้ไว้", note: "หลัก Travel Rule คือข้อมูลตัวตนต้อง 'เดินทาง' ไปพร้อมกับทุกธุรกรรมโอน Token ระหว่างผู้ประกอบการ — ให้ตรวจสอบย้อนกลับได้ตลอดเส้นทาง ตามมาตรฐานสากลด้านการป้องกันฟอกเงิน" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#00012C", url: "https://www.innovestx.co.th/cafeinvest/research/alternative-assets-analysis/ico/blugreen-investment-token-20260604",
      en: { strong: "InnovestX research", text: " sized up Blu Green Token's return scenarios — 10.35% base-case IRR, 20.04% best case and a 3% p.a. cumulative floor backed by DITTO — assuming carbon prices of ฿1,875–2,462/tonne in years 5–7, with no distributions in years 1–4.", src: "InnovestX" },
      th: { strong: "บทวิเคราะห์ InnovestX", text: " ประเมิน Blu Green Token ไว้ 3 กรณี — IRR กรณีฐาน 10.35% ต่อปี กรณีดีสุด 20.04% และกรณีแย่สุดยังได้ขั้นต่ำ 3% ต่อปี (สะสม) โดยมี DITTO หนุนหลัง — อิงสมมติฐานราคาคาร์บอน ฿1,875–2,462/ตันในปีที่ 5–7 และยังไม่มีการจ่ายผลตอบแทนในปีที่ 1–4", src: "InnovestX" } },
    { color: "#C9C400", url: "https://www.ledgerinsights.com/uk-finalizes-stablecoin-and-crypto-framework-with-no-explicit-systemic-threshold/",
      en: { strong: "UK FCA", text: " published its final crypto and stablecoin rulebook — the FCA oversees all issuers while the Bank of England takes systemic ones; authorization applications open September 30 ahead of the regime going live in October 2027.", src: "Ledger Insights" },
      th: { strong: "UK FCA", text: " ออกกติกาคริปโตและ Stablecoin ฉบับสุดท้าย — FCA กำกับผู้ออกทุกราย ส่วน Bank of England ดูแลรายที่สำคัญเชิงระบบ เปิดยื่นขอใบอนุญาต 30 ก.ย. ก่อนกฎมีผลจริง ต.ค. 2027", src: "Ledger Insights" } },
    { color: "#BA6AF2", url: "https://www.ledgerinsights.com/invesco-to-launch-tokenized-stablecoin-reserve-fund/",
      en: { strong: "Invesco", text: " filed with the SEC to register the Invesco Stablecoin Reserves Onchain Fund, a tokenized money-market fund for stablecoin issuers holding GENIUS Act-eligible assets, with Superstate as sub-transfer agent — effective around late August.", src: "Ledger Insights" },
      th: { strong: "Invesco", text: " ยื่น SEC จดทะเบียน Invesco Stablecoin Reserves Onchain Fund กองทุนตลาดเงินแบบ Token สำหรับผู้ออก Stablecoin ถือสินทรัพย์ตามเกณฑ์ GENIUS Act โดยมี Superstate เป็น sub-transfer agent — คาดมีผลราวปลาย ส.ค.", src: "Ledger Insights" } },
    { color: "#CE5FFC", url: "https://www.ledgerinsights.com/tokenized-deposits-ramp-up-in-us-as-cari-grows-to-30-banks-ahead-of-pilot/",
      en: { strong: "Cari Network", text: " — the tokenized-deposit platform founded by ex-Comptroller Eugene Ludwig — passed 30 member banks with ~40 more in talks (over $10T in combined assets) and joined the American Bankers Association's Premier Partner Network.", src: "Ledger Insights" },
      th: { strong: "Cari Network", text: " แพลตฟอร์มเงินฝากแบบ Token ที่ก่อตั้งโดยอดีต Comptroller Eugene Ludwig มีธนาคารสมาชิกทะลุ 30 แห่ง (เจรจาเพิ่มอีก ~40 แห่ง สินทรัพย์รวมกว่า $10T) และเข้าร่วม Premier Partner Network ของสมาคมธนาคารสหรัฐ (ABA)", src: "Ledger Insights" } },
    { color: "#2BB6AE", url: "https://www.coindesk.com/markets/2026/07/02/taiko-s-bridge-is-back-online-after-usd1-7-million-hack-and-its-token-is-up-a-staggering-136",
      en: { strong: "Taiko", text: " fully reopened its Ethereum Layer-2 bridge 10 days after a $1.7M exploit caused by an SGX signing key exposed on GitHub — all users made whole and reserves restored to 1:1, with conservative withdrawal quotas at restart.", src: "CoinDesk" },
      th: { strong: "Taiko", text: " เปิดสะพานข้ามเชนของ Layer-2 บน Ethereum อีกครั้งหลังถูกโจมตี $1.7M จาก SGX signing key ที่หลุดบน GitHub เมื่อ 10 วันก่อน — ชดเชยผู้ใช้ครบทุกราย เงินสำรองกลับมาหนุน 1:1 พร้อมจำกัดโควตาถอนช่วงแรก", src: "CoinDesk" } },
  ],
});
