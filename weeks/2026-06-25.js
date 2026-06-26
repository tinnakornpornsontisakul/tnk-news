// ============================================================================
//  TokenX Weekly Roundup — ฉบับที่ 2 · 19–25 มิ.ย. 2026
//  1 สัปดาห์ = 1 ไฟล์ · ไฟล์นี้ลงทะเบียนตัวเองผ่าน registerWeek(...)
//  เพิ่มไฟล์นี้ใน WEEK_FILES ของ news-data.js เพื่อให้แสดงผล
//  ทุกข่าว verify จากบทความต้นทางจริง (หัวข้อ/เนื้อหา/แหล่งตรงกัน) · ราคาเหรียญอ่านจาก CoinGecko 26 มิ.ย. 2026
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 2,
    date: "2026-06-25",
    dateEN: "Jun 19–25, 2026",
    dateTH: "19–25 มิ.ย. 2026",
  },

  // ── แดชบอร์ดภาพรวม · ตัวเลขอ่านจาก RWA.xyz + CoinGecko (26 มิ.ย. 2026) ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$31.5B", delta: "-1.4%", up: false,
      points: [25, 27, 28, 30, 31, 31.5, 32, 31.9, 31.7, 31.5],
    },
    tokens: [
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV)
      { sym: "BUIDL", name: "BlackRock USD",    price: "$1.00",    chg: "+0.0%", up: true,  bar: 88 },
      { sym: "BENJI", name: "Franklin OnChain", price: "$1.00",    chg: "+0.0%", up: true,  bar: 64 },
      { sym: "OUSG",  name: "Ondo Short Gov",   price: "$115.69",  chg: "+0.1%", up: true,  bar: 70 },
      { sym: "USDY",  name: "Ondo Yield",       price: "$1.14",    chg: "-0.2%", up: false, bar: 80 },
      { sym: "USYC",  name: "Circle USYC",      price: "$1.13",    chg: "+0.2%", up: true,  bar: 90 },
      { sym: "TBILL", name: "OpenEden",         price: "$1.15",    chg: "+0.1%", up: true,  bar: 44 },
      { sym: "USTB",  name: "Superstate",       price: "$11.13",   chg: "+0.1%", up: true,  bar: 48 },
      // ข) Tokenized Gold (อิงราคาทองคำ ~$4,036/oz)
      { sym: "PAXG",  name: "PAX Gold",         price: "$4,036",   chg: "-3.0%", up: false, bar: 86 },
      { sym: "XAUT",  name: "Tether Gold",      price: "$4,034",   chg: "-2.8%", up: false, bar: 84 },
      // ค) RWA platform / protocol tokens (สัปดาห์ risk-off ปรับลงทั้งกลุ่ม)
      { sym: "ONDO",  name: "Ondo Finance",     price: "$0.312",   chg: "-10.4%", up: false, bar: 58 },
      { sym: "PENDLE",name: "Pendle",           price: "$1.25",    chg: "-7.3%",  up: false, bar: 52 },
      { sym: "CFG",   name: "Centrifuge",       price: "$0.204",   chg: "-8.4%",  up: false, bar: 40 },
      { sym: "POLYX", name: "Polymesh",         price: "$0.0346",  chg: "-9.4%",  up: false, bar: 33 },
      { sym: "PLUME", name: "Plume",            price: "$0.0094",  chg: "-16.1%", up: false, bar: 30 },
      { sym: "ENA",   name: "Ethena",           price: "$0.079",   chg: "-9.7%",  up: false, bar: 50 },
      { sym: "SKY",   name: "Sky",              price: "$0.0516",  chg: "-12.4%", up: false, bar: 42 },
      { sym: "GFI",   name: "Goldfinch",        price: "$0.0508",  chg: "-18.0%", up: false, bar: 28 },
      { sym: "SYRUP", name: "Maple Finance",    price: "$0.120",   chg: "-11.2%", up: false, bar: 40 },
      { sym: "CPOOL", name: "Clearpool",        price: "$0.0190",  chg: "-13.7%", up: false, bar: 24 },
      { sym: "USDM",  name: "Mountain USDM",    price: "$1.00",    chg: "+0.5%",  up: true,  bar: 50 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ ───────────────────────────────────────────────────────
  lead: {
    topic: "rwa",
    source: "CoinDesk / Ledger Insights",
    time: "3d",
    url: "https://www.coindesk.com/business/2026/06/22/tradfi-fund-manager-baillie-gifford-introduces-solana-ethereum-tokenized-fund-with-bny",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["Baillie Gifford issues a ", "fund natively on-chain", " on Ethereum and Solana"],
      body: [
        "Baillie Gifford, the 118-year-old asset manager with about $237 billion under management, launched the Baillie Gifford Enhanced Yield Fund (BAGEY) — a regulated, USD-denominated short-duration corporate bond fund targeting around 7% yield — issued natively on Ethereum and Solana, with BNY providing the tokenization and wallet infrastructure and NatWest acting as depositary.",
        "Unlike a wrapper that mirrors an off-chain fund, BAGEY is issued directly on-chain with the blockchain as its register of record. It is Baillie Gifford's first publicly available tokenized fund, open to eligible investors in the U.K., Switzerland and the Cayman Islands — a signal that mainstream managers now treat public-chain issuance as live product, not pilot.",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["Baillie Gifford ออกกองทุน ", "บนเชนโดยตรง", " ทั้ง Ethereum และ Solana"],
      body: [
        "Baillie Gifford ผู้จัดการสินทรัพย์อายุ 118 ปีที่บริหารเงินราว 2.37 แสนล้านดอลลาร์ เปิดตัวกองทุน Baillie Gifford Enhanced Yield Fund (BAGEY) — กองทุนตราสารหนี้ภาคเอกชนระยะสั้นสกุลดอลลาร์ที่อยู่ภายใต้การกำกับ ตั้งเป้า yield ราว 7% — โดยออกเป็น Token บน Ethereum และ Solana โดยตรง มี BNY วางโครงสร้าง Tokenization และ wallet ส่วน NatWest เป็นผู้เก็บรักษาทรัพย์สิน",
        "ต่างจาก wrapper ที่เป็นเพียง Token สะท้อนกองทุนนอกเชน BAGEY ออกบนเชนโดยตรงและใช้บล็อกเชนเป็นทะเบียนหลัก (register of record) ถือเป็นกองทุนแบบ Token ตัวแรกที่ Baillie Gifford เปิดขายต่อสาธารณะ เปิดให้ผู้ลงทุนที่มีคุณสมบัติในสหราชอาณาจักร สวิตเซอร์แลนด์ และหมู่เกาะเคย์แมน — สะท้อนว่าผู้จัดการกองทุนกระแสหลักเริ่มมองการออกหลักทรัพย์บนเชนสาธารณะเป็นผลิตภัณฑ์จริง ไม่ใช่แค่โครงการนำร่อง",
      ],
    },
    hlType: "quote",
    highlight: {
      en: { note: "The Baillie Gifford Enhanced Yield Fund is not a token placed on top of a fund. It is a fund issued onchain, with the blockchain serving as the register of record.", by: "Theo Golden, Head of Digital Assets & Tokenization, Baillie Gifford" },
      th: { note: "Baillie Gifford Enhanced Yield Fund ไม่ใช่ Token ที่วางทับกองทุน แต่เป็นกองทุนที่ออกบนเชนโดยตรง โดยมีบล็อกเชนทำหน้าที่เป็นทะเบียนหลัก", by: "Theo Golden, Head of Digital Assets & Tokenization, Baillie Gifford" },
    },
  },

  // ── ข่าวตามหมวด ─────────────────────────────────────────────────────────────
  stories: [
    // ---------- RWA ----------
    {
      topic: "rwa", source: "The Block", time: "1d", url: "https://www.theblock.co/post/405963/black-lake-nuva-labs-tokenize-25-million-in-mortgage-loans-on-provenance-in-rwa-push",
      hlType: "data",
      en: {
        title: ["", "$25M of mortgage loans", " tokenized on Provenance"],
        body: "Black Lake Digital Markets and Nuva Labs completed what they call the first on-chain minting and transfer of $25 million in institutional mortgage loans on Provenance Blockchain, with each loan minted as an NFT and pooled through Nuva's vault infrastructure. A patent-pending model lets investors verify every loan's eligibility and compliance on-chain without exposing borrower data.",
        highlight: { label: "By the numbers", value: "$25M", note: "first on-chain minting of institutional mortgage loans on Provenance, which now domiciles ~$19B in RWAs" },
      },
      th: {
        title: ["", "สินเชื่อบ้าน $25M", " แปลงเป็น Token บน Provenance"],
        body: "Black Lake Digital Markets และ Nuva Labs ทำการ mint และโอนสินเชื่อที่อยู่อาศัยระดับสถาบันมูลค่า 25 ล้านดอลลาร์บน Provenance Blockchain เป็นครั้งแรกบนเชน โดยแต่ละสัญญาถูก mint เป็น NFT แล้วรวมเป็นพูลผ่านโครงสร้าง vault ของ Nuva พร้อมโมเดลตรวจสอบ (อยู่ระหว่างจดสิทธิบัตร) ที่ให้ผู้ลงทุนยืนยันคุณสมบัติและการปฏิบัติตามเกณฑ์ของสินเชื่อแต่ละก้อนบนเชนได้เอง โดยไม่เปิดเผยข้อมูลผู้กู้",
        highlight: { label: "ตัวเลขสำคัญ", value: "$25M", note: "การ mint สินเชื่อบ้านระดับสถาบันครั้งแรกบนเชน Provenance ซึ่งปัจจุบันมี RWA อยู่ราว $19B" },
      },
    },
    {
      topic: "rwa", source: "RWA.xyz / CoinGecko", time: "now", url: "https://app.rwa.xyz",
      hlType: "takeaway",
      en: {
        title: ["On-chain RWA value holds near ", "$31 billion", " as tokens sell off"],
        body: "Tokenized real-world assets held around $31.5 billion on-chain this week even as the RWA protocol tokens tied to them fell broadly — Goldfinch -18%, Plume -16%, Sky -12% and Ondo near -10% over seven days. The split underlines a distinction institutions watch: the on-chain asset base of treasuries, credit and funds is sticky, while the governance tokens of the platforms that issue them trade like risk assets.",
        highlight: { label: "Key takeaway", note: "The value of tokenized assets and the price of RWA platform tokens are two different things — the asset base held near $31.5B while protocol tokens had a red week." },
      },
      th: {
        title: ["มูลค่า RWA บนเชนยืนใกล้ ", "$31 พันล้าน", " ขณะ Token เทขาย"],
        body: "Real World Asset แบบ Token บนเชนยืนอยู่ราว 3.15 หมื่นล้านดอลลาร์ในสัปดาห์นี้ แม้ Token ของโปรโตคอล RWA จะปรับลงเป็นวงกว้าง — Goldfinch -18%, Plume -16%, Sky -12% และ Ondo ราว -10% ในรอบ 7 วัน ความต่างนี้ตอกย้ำสิ่งที่สถาบันจับตา: ฐานสินทรัพย์บนเชนทั้งพันธบัตร สินเชื่อ และกองทุนค่อนข้างนิ่ง ขณะที่ Token ของแพลตฟอร์มผู้ออกซื้อขายเหมือนสินทรัพย์เสี่ยง",
        highlight: { label: "สรุปสำคัญ", note: "มูลค่าสินทรัพย์แบบ Token กับราคา Token ของแพลตฟอร์ม RWA เป็นคนละเรื่อง — ฐานสินทรัพย์ยืนใกล้ $31.5B ขณะที่ Token โปรโตคอลเป็นสัปดาห์สีแดง" },
      },
    },

    // ---------- TOKENIZATION ----------
    {
      topic: "tokenization", source: "Anchorage", time: "3d", url: "https://www.anchorage.com/insights/anchorage-digital-launches-tokenized-deposit-infrastructure-for-banks-delivering-24-7-settlement-without-replacing-core-systems",
      hlType: "quote",
      en: {
        title: ["Anchorage launches ", "tokenized-deposit infrastructure", " for banks"],
        body: "Anchorage Digital — the first U.S. federally chartered crypto bank — launched infrastructure that lets banks issue tokenized deposits for 24/7 settlement without replacing core systems. Its 'Blockchain Deposit Account' runs as a parallel ledger reconciled to a traditional demand-deposit account, keeping customer funds and data inside the bank while adding programmable, always-on settlement. Banks can go live in weeks rather than years.",
        highlight: { note: "Tokenized deposits aren't about replacing the trust banks have built, they're about enhancing it.", by: "Nathan McCauley, CEO, Anchorage Digital" },
      },
      th: {
        title: ["Anchorage เปิด ", "โครงสร้างเงินฝากแบบ Token", " ให้ธนาคาร"],
        body: "Anchorage Digital — ธนาคารคริปโตที่ได้รับใบอนุญาตระดับชาติแห่งแรกของสหรัฐ — เปิดตัวโครงสร้างที่ให้ธนาคารออกเงินฝากแบบ Token เพื่อชำระราคาได้ตลอด 24 ชั่วโมง โดยไม่ต้องรื้อระบบหลัก ผ่าน 'Blockchain Deposit Account' ที่ทำงานเป็นบัญชีแยกประเภทคู่ขนานและกระทบยอดกับบัญชีเงินฝากเดิม เก็บทั้งเงินและข้อมูลลูกค้าไว้ในธนาคาร พร้อมเพิ่มการชำระแบบโปรแกรมได้ที่ทำงานตลอดเวลา ธนาคารเริ่มใช้งานได้ภายในไม่กี่สัปดาห์แทนที่จะเป็นปี",
        highlight: { note: "เงินฝากแบบ Token ไม่ได้มาแทนความเชื่อมั่นที่ธนาคารสร้างมา แต่มาเสริมให้แข็งแกร่งขึ้น", by: "Nathan McCauley, CEO, Anchorage Digital" },
      },
    },
    {
      topic: "tokenization", source: "Crypto Briefing", time: "1d", url: "https://cryptobriefing.com/ondo-24-7-minting-tokenized-stocks-etfs/",
      hlType: "data",
      en: {
        title: ["Ondo turns on ", "24/7 minting", " for tokenized stocks"],
        body: "Ondo Global Markets switched on 24/7 instant minting and redemption for its tokenized U.S. stocks and ETFs, extending creation and redemption to weekends and market holidays from the previous 24/5 schedule. The platform lists 200-plus tokenized equities — part of a 430-plus asset catalog across its ecosystem — for non-U.S. qualified investors, with a $1 minimum and waived mint and redeem fees.",
        highlight: { label: "By the numbers", value: "24/7", note: "always-on primary-market minting and redemption for 200+ tokenized stocks and ETFs" },
      },
      th: {
        title: ["Ondo เปิด ", "mint 24/7", " สำหรับหุ้นแบบ Token"],
        body: "Ondo Global Markets เปิดให้ mint และไถ่ถอนหุ้นและ ETF สหรัฐแบบ Token ได้ทันทีตลอด 24 ชั่วโมงทุกวัน ขยายจากเดิมที่ทำได้แบบ 24/5 ให้ครอบคลุมวันหยุดสุดสัปดาห์และวันหยุดตลาด แพลตฟอร์มมีหุ้นแบบ Token กว่า 200 รายการ ซึ่งเป็นส่วนหนึ่งของแคตตาล็อกกว่า 430 สินทรัพย์ในระบบ สำหรับผู้ลงทุนที่มีคุณสมบัตินอกสหรัฐ ขั้นต่ำ 1 ดอลลาร์ และยกเว้นค่าธรรมเนียม mint/ไถ่ถอน",
        highlight: { label: "ตัวเลขสำคัญ", value: "24/7", note: "การ mint และไถ่ถอนในตลาดแรกแบบทำงานตลอดเวลา สำหรับหุ้นและ ETF แบบ Token กว่า 200 รายการ" },
      },
    },

    // ---------- BLOCKCHAIN ----------
    {
      topic: "blockchain", source: "The Block / MoneyGram", time: "3d", url: "https://www.theblock.co/post/405568/moneygram-solana-validator-blockchain-payments",
      hlType: "takeaway",
      en: {
        title: ["MoneyGram becomes a ", "Solana validator", ""],
        body: "MoneyGram became an active validator on Solana, staking SOL and processing blocks rather than simply using the chain. Solana is the third network where the payments firm runs validator infrastructure, alongside Tempo and Midnight, and follows its MGUSD stablecoin issued via Stripe-owned Bridge on Stellar.",
        highlight: { label: "Key takeaway", note: "A regulated payments company helping secure a public chain — not just settling on it — is a deeper class of institutional commitment to blockchain rails." },
      },
      th: {
        title: ["MoneyGram ขึ้นเป็น ", "ผู้ตรวจสอบบน Solana", ""],
        body: "MoneyGram ขึ้นเป็นผู้ตรวจสอบ (validator) ที่ใช้งานจริงบน Solana โดย stake SOL และประมวลผลบล็อก ไม่ใช่แค่ใช้งานเชนเฉย ๆ นับเป็นเชนที่สามที่บริษัทด้านการชำระเงินรายนี้รันโครงสร้าง validator ต่อจาก Tempo และ Midnight และต่อยอดจาก Stablecoin MGUSD ที่ออกผ่าน Bridge (บริษัทในเครือ Stripe) บน Stellar",
        highlight: { label: "สรุปสำคัญ", note: "บริษัทชำระเงินที่อยู่ภายใต้การกำกับเข้ามาช่วยรักษาความปลอดภัยของเชนสาธารณะ ไม่ใช่แค่ชำระราคาบนเชน ถือเป็นความผูกพันเชิงสถาบันต่อโครงสร้างบล็อกเชนที่ลึกขึ้น" },
      },
    },
    {
      topic: "blockchain", source: "CoinDesk", time: "2d", url: "https://www.coindesk.com/markets/2026/06/23/chainlink-teams-up-with-47-south-korean-european-banks-to-speed-up-international-money-transfers",
      hlType: "data",
      en: {
        title: ["Chainlink and ~47 banks target ", "T+0 FX settlement", " with stablecoins"],
        body: "Chainlink joined Project Pangea, a consortium of around 47 European and Korean banks — via the euro-stablecoin group Qivalis and Korea's UniKA alliance, together representing more than $10 trillion in assets — aiming to move cross-border FX from T+2 to near-instant T+0. The design uses atomic payment-versus-payment swaps of regulated EUR- and KRW-pegged stablecoins on a dedicated settlement chain with Swift messaging; participants target live transactions within a legal framework over the next 12 months.",
        highlight: { label: "By the numbers", value: "T+0", note: "atomic EUR-to-KRW stablecoin settlement across ~47 banks representing $10T+ in assets, versus today's T+2" },
      },
      th: {
        title: ["Chainlink จับมือ ~47 ธนาคาร ตั้งเป้า ", "ชำระ FX แบบ T+0", " ด้วย Stablecoin"],
        body: "Chainlink เข้าร่วม Project Pangea กลุ่มความร่วมมือของธนาคารยุโรปและเกาหลีราว 47 แห่ง — ผ่านกลุ่ม Euro Stablecoin 'Qivalis' และพันธมิตร 'UniKA' ของเกาหลี รวมสินทรัพย์ภายใต้การบริหารกว่า 10 ล้านล้านดอลลาร์ — ตั้งเป้าย่นการชำระ FX ข้ามพรมแดนจาก T+2 สู่ใกล้เรียลไทม์แบบ T+0 ด้วยการสลับ Stablecoin ที่อิงเงินยูโรและวอนแบบ payment-versus-payment บนเชนชำระราคาเฉพาะ ใช้ระบบข้อความ Swift โดยตั้งเป้าทำธุรกรรมจริงภายใต้กรอบกฎหมายภายใน 12 เดือน",
        highlight: { label: "ตัวเลขสำคัญ", value: "T+0", note: "การชำระ Stablecoin ยูโร-วอนแบบ atomic ข้าม ~47 ธนาคารที่มีสินทรัพย์รวมกว่า $10T เทียบกับ T+2 ในปัจจุบัน" },
      },
    },

    // ---------- FINTECH ----------
    {
      topic: "fintech", source: "NCUA / FinCEN", time: "1w", url: "https://ncua.gov/newsroom/press-release/2026/agencies-request-comment-customer-identification-program-requirements-permitted-payment-stablecoin",
      hlType: "takeaway",
      en: {
        title: ["U.S. regulators propose ", "KYC rules for stablecoin issuers", ""],
        body: "Five U.S. agencies — FinCEN, the OCC, the Federal Reserve, the FDIC and NCUA — jointly proposed a rule requiring permitted payment stablecoin issuers to run a bank-grade customer identification program, treating them as financial institutions under the Bank Secrecy Act. It is a core piece of implementing the GENIUS Act, extending bank-style identity checks to issuers of permitted payment stablecoins; the comment period runs 60 days.",
        highlight: { label: "Key takeaway", note: "Under the proposal a stablecoin issuer is a 'financial institution' with the same customer-identification duties as a bank — KYC at the point of issuance and redemption." },
      },
      th: {
        title: ["หน่วยงานสหรัฐเสนอ ", "เกณฑ์ KYC ผู้ออก Stablecoin", ""],
        body: "หน่วยงานสหรัฐ 5 แห่ง — FinCEN, OCC, Federal Reserve, FDIC และ NCUA — ร่วมกันเสนอกฎที่กำหนดให้ผู้ออก Stablecoin เพื่อการชำระเงินที่ได้รับอนุญาตต้องมีระบบพิสูจน์ตัวตนลูกค้า (KYC) ระดับธนาคาร โดยถือเป็นสถาบันการเงินภายใต้ Bank Secrecy Act นับเป็นชิ้นส่วนสำคัญในการบังคับใช้กฎหมาย GENIUS Act โดยขยายการตรวจสอบตัวตนแบบธนาคารไปยังผู้ออก Stablecoin เพื่อการชำระเงินที่ได้รับอนุญาต เปิดรับฟังความเห็น 60 วัน",
        highlight: { label: "สรุปสำคัญ", note: "ภายใต้ข้อเสนอนี้ ผู้ออก Stablecoin คือ 'สถาบันการเงิน' ที่มีหน้าที่พิสูจน์ตัวตนลูกค้าเท่ากับธนาคาร — ทำ KYC ตั้งแต่ตอนออกและไถ่ถอน" },
      },
    },
    {
      topic: "fintech", source: "Ripple / SBI", time: "1d", url: "https://ripple.com/ripple-press/ripple-and-sbi-group-partner-to-launch-ripple-usd-in-japan/",
      hlType: "know",
      en: {
        title: ["Ripple and SBI launch ", "RLUSD in Japan", " after JFSA approval"],
        body: "Ripple and SBI Group launched the RLUSD stablecoin in Japan through SBI VC Trade's VCTRADE platform, following approval from the Financial Services Agency. RLUSD — which has reached about $1.7 billion in market value since late 2024 — is offered to both institutional and retail users as one of the first dollar stablecoins admitted under Japan's regulated regime.",
        highlight: { label: "Know this", note: "Under Japan's Payment Services Act a vetted foreign stablecoin like RLUSD is recognized as an 'electronic payment instrument' — the legal gate it must pass to list domestically." },
      },
      th: {
        title: ["Ripple และ SBI เปิดตัว ", "RLUSD ในญี่ปุ่น", " หลัง JFSA ไฟเขียว"],
        body: "Ripple และ SBI Group เปิดตัว Stablecoin RLUSD ในญี่ปุ่นผ่านแพลตฟอร์ม VCTRADE ของ SBI VC Trade หลังได้รับอนุมัติจาก Financial Services Agency (JFSA) โดย RLUSD ซึ่งมีมูลค่าตลาดราว 1.7 พันล้านดอลลาร์ตั้งแต่เปิดตัวปลายปี 2024 เปิดให้ทั้งผู้ลงทุนสถาบันและรายย่อย นับเป็นหนึ่งใน Stablecoin ดอลลาร์กลุ่มแรกที่ได้รับอนุญาตภายใต้ระบบกำกับของญี่ปุ่น",
        highlight: { label: "รู้ไว้", note: "ภายใต้ Payment Services Act ของญี่ปุ่น Stablecoin ต่างชาติที่ผ่านการตรวจสอบอย่าง RLUSD จะถูกจัดเป็น 'electronic payment instrument' ซึ่งเป็นด่านกฎหมายที่ต้องผ่านก่อนลิสต์ในประเทศ" },
      },
    },

    // ---------- SET (Thai capital market — digital assets only) ----------
    {
      topic: "set", source: "ก.ล.ต. / Kaohoon", time: "1w", url: "https://www.kaohoon.com/news/local/839737",
      hlType: "know",
      en: {
        title: ["Thai SEC clarifies ", "'Digital Securities'", " are not crypto"],
        body: "After Thailand's House passed a draft amendment to the Securities and Exchange Act on first reading in June, the SEC clarified that the new 'Digital Securities' are the electronic issuance of existing securities — shares, bonds and fund units — not a new crypto asset. They remain under existing securities law, and holders of paper certificates keep their rights with no forced conversion.",
        highlight: { label: "Know this", note: "Digital Securities are dematerialized versions of ordinary securities, issued and recorded electronically — distinct from the digital tokens regulated under Thailand's Digital Asset Decree." },
      },
      th: {
        title: ["ก.ล.ต. ย้ำ ", "'หลักทรัพย์อิเล็กทรอนิกส์'", " ไม่ใช่คริปโต"],
        body: "หลังสภาผู้แทนราษฎรผ่านร่างแก้ไข พ.ร.บ. หลักทรัพย์ฯ ในวาระแรกเมื่อเดือนมิถุนายน ก.ล.ต. ออกมาชี้แจงว่า 'หลักทรัพย์อิเล็กทรอนิกส์' (Digital Securities) คือการออกหลักทรัพย์เดิม — หุ้น พันธบัตร และหน่วยลงทุน — ในรูปแบบอิเล็กทรอนิกส์ ไม่ใช่สินทรัพย์คริปโตชนิดใหม่ ยังอยู่ภายใต้กฎหมายหลักทรัพย์เดิม และผู้ถือใบหุ้นกระดาษยังคงสิทธิ์ครบโดยไม่ถูกบังคับแปลง",
        highlight: { label: "รู้ไว้", note: "หลักทรัพย์อิเล็กทรอนิกส์คือหลักทรัพย์ทั่วไปในรูปแบบไร้ใบ (dematerialized) ที่ออกและบันทึกทางอิเล็กทรอนิกส์ ต่างจากดิจิทัล Token ที่กำกับภายใต้ พ.ร.ก. สินทรัพย์ดิจิทัล" },
      },
    },
    {
      topic: "set", source: "Token X / Thairath", time: "3w", url: "https://www.thairath.co.th/money/investment/digital_assets/2937301",
      hlType: "data",
      en: {
        title: ["Thailand's first ", "carbon-credit RWA token", " targets a ฿480M offering"],
        body: "SET-listed DITTO, with SCBX-group ICO portal Token X, unveiled Blu Green Token — billed as Thailand's first RWA investment token backed by mangrove carbon credits. The offering is up to 400 million tokens at ฿1.20 (฿480 million), tied to a mangrove reforestation project generating about 400,000 tonnes of carbon credits, with a 3% compound annual floor plus principal if credits go unsold. Subscription and listing on a digital-asset exchange are targeted for the third quarter of 2026.",
        highlight: { label: "By the numbers", value: "฿480M", note: "400 million tokens backed by ~400,000 tonnes of mangrove carbon credits — 1,000 tokens per tonne of CO2" },
      },
      th: {
        title: ["RWA Token คาร์บอนเครดิตตัวแรกของไทย ", "มูลค่า ฿480 ล้าน", ""],
        body: "DITTO บริษัทจดทะเบียนใน SET ร่วมกับ Token X (ICO Portal ในเครือ SCBX) เปิดตัว Blu Green Token — ระบุเป็น RWA Token เพื่อการลงทุนตัวแรกของไทยที่หนุนด้วยคาร์บอนเครดิตจากป่าชายเลน เสนอขายไม่เกิน 400 ล้านโทเคนที่ราคา ฿1.20 (รวม ฿480 ล้าน) อิงโครงการปลูกป่าชายเลนที่สร้างคาร์บอนเครดิตราว 400,000 ตัน พร้อมการันตีผลตอบแทนขั้นต่ำ 3% ต่อปีแบบทบต้นและคืนเงินต้นหากขายเครดิตไม่ได้ตามแผน ตั้งเป้าเปิดจองและลิสต์บน Digital Asset Exchange ภายในไตรมาส 3 ปี 2026",
        highlight: { label: "ตัวเลขสำคัญ", value: "฿480M", note: "400 ล้านโทเคน หนุนด้วยคาร์บอนเครดิตป่าชายเลนราว 400,000 ตัน — 1,000 โทเคนต่อ CO2 1 ตัน" },
      },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" ───────────────────────────────────────────────────────
  briefs: [
    { color: "#C9C400", url: "https://ripple.com/ripple-press/ripple-secures-preliminary-MiCA-CASP-license/",
      en: { strong: "Ripple", text: " won preliminary MiCA CASP approval from Luxembourg's CSSF, opening regulated crypto services across all 30 EEA countries.", src: "Ripple" },
      th: { strong: "Ripple", text: " ได้รับอนุมัติ MiCA CASP เบื้องต้นจาก CSSF ลักเซมเบิร์ก เปิดให้บริการคริปโตภายใต้การกำกับทั่ว 30 ประเทศ EEA", src: "Ripple" } },
    { color: "#BA6AF2", url: "https://cryptoslate.com/tokenized-stocks-defi-collateral-venus/",
      en: { strong: "Venus Protocol", text: " added tokenized Tesla, Nvidia and SpaceX as collateral on BNB Chain — with borrowing disabled at launch as a controlled test.", src: "CryptoSlate" },
      th: { strong: "Venus Protocol", text: " เพิ่มหุ้น Tesla, Nvidia และ SpaceX แบบ Token เป็นหลักประกันบน BNB Chain โดยปิดการกู้ยืมตอนเปิดตัวเพื่อทดสอบแบบควบคุม", src: "CryptoSlate" } },
    { color: "#CE5FFC", url: "https://www.caceis.com/press-releases/amundi-caceis-and-ant-international-collaborate-to-advance-blockchain-powered-treasury-and-tokenised-investment-solutions",
      en: { strong: "Amundi", text: ", CACEIS and Ant International launched tokenized EUR and USD money-market fund share classes for on-chain corporate treasury.", src: "CACEIS" },
      th: { strong: "Amundi", text: ", CACEIS และ Ant International เปิดตัวหน่วยกองทุนตลาดเงินสกุล EUR และ USD แบบ Token สำหรับบริหารเงินสดองค์กรบนเชน", src: "CACEIS" } },
    { color: "#00012C", url: "https://thestandard.co/dsi-forex-special-case-digital-assets/",
      en: { strong: "Thailand's DSI", text: " raided 24 sites in an illegal-forex laundering bust, seizing ~฿65M plus Bitcoin and USDT; 500+ victims and over ฿1B in losses.", src: "The Standard" },
      th: { strong: "DSI ไทย", text: " บุกค้น 24 จุดทลายเครือข่ายฟอกเงินฟอเร็กซ์เถื่อน ยึดเงินสดราว ฿65M พร้อม Bitcoin และ USDT ผู้เสียหาย 500+ ราย เสียหายกว่า ฿1B", src: "The Standard" } },
  ],
});
