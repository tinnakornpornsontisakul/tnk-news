// ============================================================================
//  TokenX Weekly Roundup — โครงข้อมูล 1 สัปดาห์ (TEMPLATE / placeholder)
// ----------------------------------------------------------------------------
//  วิธีใช้:
//    1. คัดลอกไฟล์นี้ → weeks/YYYY-MM-DD.js  (ใช้วันที่ของฉบับเป็นชื่อไฟล์)
//    2. กรอกข่าวแทน [ข้อความในวงเล็บเหลี่ยม]  ลบ/เพิ่ม story ได้ตามจริง
//    3. เพิ่มชื่อไฟล์ใหม่ใน WEEK_FILES ของ news-data.js
//  อ่านกฎการคัดข่าว + การเขียน 2 ภาษา + คำทับศัพท์ ได้ที่ SKILL.md
//
//  topic:  rwa | tokenization | blockchain | fintech | set
//  hlType: 'data' | 'know' | 'takeaway' | 'quote' | (ไม่ใส่ = ไม่มีกล่อง)
//  title:  array 3 ช่อง  [ก่อน, คำที่เน้นสี, หลัง]   ช่องที่ไม่ใช้ใส่ ""
// ============================================================================

registerWeek({

  // ── หัวฉบับ ────────────────────────────────────────────────────────────────
  meta: {
    issue: 0,                       // [เลขฉบับ]
    date:  "2026-01-01",            // [วันที่ของฉบับ — ISO YYYY-MM-DD · ปฏิทินใช้ค่านี้]
    dateEN: "Mon D–D, YYYY",        // [ช่วงวันที่ ภาษาอังกฤษ]
    dateTH: "D–D ม.ค. YYYY",         // [ช่วงวันที่ ภาษาไทย]
  },

  // ── แดชบอร์ดภาพรวม (แสดงตอนเลือกตัวกรอง "ทั้งหมด") · อัปเดตตัวเลขรายสัปดาห์ ──
  market: {
    growth: {
      label: { en: "Tokenized RWA · on-chain value", th: "มูลค่า Tokenized RWA บนเชน" },
      value: "$00.0B",            // [มูลค่ารวมล่าสุด]
      delta: "+0.0%", up: true,   // [% เปลี่ยนแปลง + ทิศทาง up:true=ขึ้น]
      points: [12, 13, 12.5, 15, 17, 16.5, 19, 22, 21, 25, 27, 28], // [แนวโน้ม ~8–12 จุด]
    },
    tokens: [   // [ราคาเหรียญ RWA — 20 ตัวมาตรฐาน (ดู SKILL ข้อ 8C.1) · อัปเดต price/chg/up/bar จากแหล่งจริง · bar = แท่งเปรียบเทียบ 0–100]
      // ก) Tokenized Treasuries / Money-Market (ราคานิ่งใกล้ NAV ~$1)
      { sym: "BUIDL",  name: "BlackRock USD",    price: "$1.00",  chg: "+0.0%", up: true,  bar: 90 },
      { sym: "BENJI",  name: "Franklin OnChain", price: "$1.00",  chg: "+0.0%", up: true,  bar: 70 },
      { sym: "OUSG",   name: "Ondo Short Gov",   price: "$000.0", chg: "+0.0%", up: true,  bar: 72 },
      { sym: "USDY",   name: "Ondo Yield",       price: "$0.00",  chg: "+0.0%", up: true,  bar: 54 },
      { sym: "USYC",   name: "Circle USYC",      price: "$0.00",  chg: "+0.0%", up: true,  bar: 50 },
      { sym: "TBILL",  name: "OpenEden",         price: "$000.0", chg: "+0.0%", up: true,  bar: 50 },
      { sym: "USTB",   name: "Superstate",       price: "$00.0",  chg: "+0.0%", up: true,  bar: 50 },
      // ข) Tokenized Gold
      { sym: "PAXG",   name: "PAX Gold",         price: "$0,000", chg: "+0.0%", up: true,  bar: 84 },
      { sym: "XAUT",   name: "Tether Gold",      price: "$0,000", chg: "+0.0%", up: true,  bar: 83 },
      // ค) RWA platform / protocol tokens (ราคาผันผวน)
      { sym: "ONDO",   name: "Ondo Finance",     price: "$0.00",  chg: "+0.0%", up: true,  bar: 60 },
      { sym: "PENDLE", name: "Pendle",           price: "$0.00",  chg: "+0.0%", up: true,  bar: 55 },
      { sym: "CFG",    name: "Centrifuge",       price: "$0.00",  chg: "+0.0%", up: true,  bar: 45 },
      { sym: "POLYX",  name: "Polymesh",         price: "$0.00",  chg: "+0.0%", up: true,  bar: 40 },
      { sym: "PLUME",  name: "Plume",            price: "$0.00",  chg: "+0.0%", up: true,  bar: 40 },
      { sym: "ENA",    name: "Ethena",           price: "$0.00",  chg: "+0.0%", up: true,  bar: 58 },
      { sym: "SKY",    name: "Sky",              price: "$0.00",  chg: "+0.0%", up: true,  bar: 50 },
      { sym: "GFI",    name: "Goldfinch",        price: "$0.00",  chg: "+0.0%", up: true,  bar: 38 },
      { sym: "MPL",    name: "Maple",            price: "$0.00",  chg: "+0.0%", up: true,  bar: 44 },
      { sym: "CPOOL",  name: "Clearpool",        price: "$0.00",  chg: "+0.0%", up: true,  bar: 36 },
      { sym: "TRU",    name: "TrueFi",           price: "$0.00",  chg: "+0.0%", up: true,  bar: 34 },
    ],
  },

  // ── ข่าวเด่นประจำฉบับ (อยู่บนสุดของหมวด RWA) ────────────────────────────────
  lead: {
    topic: "rwa",
    source: "[แหล่งข่าว]", time: "[Xd]", url: "https://[ลิงก์อ้างอิง]",
    en: {
      kicker: "Lead story · Real-world assets",
      title: ["[Lead headline part 1] ", "[highlighted phrase]", " [part 3]"],
      body: [
        "[ย่อหน้าแรกภาษาอังกฤษ — สรุปประเด็นหลักของข่าวเด่น 2–3 ประโยค]",
        "[ย่อหน้าที่สอง — บริบท ตัวเลข หรือผลกระทบ]",
      ],
    },
    th: {
      kicker: "ข่าวเด่น · Real World Asset",
      title: ["[พาดหัวข่าวเด่น ส่วนที่ 1] ", "[คำที่เน้นสี]", " [ส่วนที่ 3]"],
      body: [
        "[ย่อหน้าแรกภาษาไทย — ใช้คำทับศัพท์ตาม SKILL.md เช่น Token, Blockchain]",
        "[ย่อหน้าที่สอง — บริบทเพิ่มเติม]",
      ],
    },
    hlType: "data",
    highlight: {
      en: { label: "By the numbers", value: "[ตัวเลข]", note: "[คำอธิบายตัวเลขสั้น ๆ]" },
      th: { label: "ตัวเลขสำคัญ", value: "[ตัวเลข]", note: "[คำอธิบายตัวเลขสั้น ๆ]" },
    },
  },

  // ── ข่าวตามหมวด (ตั้งเป้า 2–4 ข่าว/หมวด — ดู SKILL.md) ──────────────────────
  stories: [
    {
      topic: "rwa", source: "[แหล่งข่าว]", time: "[Xd]", url: "https://[ลิงก์]",
      hlType: "data",
      en: { title: ["", "[highlighted phrase]", " [rest of headline]"],
        body: "[เนื้อข่าวภาษาอังกฤษ 2–3 ประโยค]",
        highlight: { label: "Why it matters", value: "[ตัวเลข]", note: "[คำอธิบาย]" } },
      th: { title: ["", "[คำที่เน้นสี]", " [ส่วนที่เหลือของพาดหัว]"],
        body: "[เนื้อข่าวภาษาไทย — ใส่คำทับศัพท์ตามคู่มือ]",
        highlight: { label: "ทำไมจึงสำคัญ", value: "[ตัวเลข]", note: "[คำอธิบาย]" } },
    },
    {
      topic: "tokenization", source: "[แหล่งข่าว]", time: "[Xd]", url: "https://[ลิงก์]",
      hlType: "quote",
      en: { title: ["[part 1] ", "[highlighted phrase]", ""],
        body: "[เนื้อข่าวภาษาอังกฤษ]",
        highlight: { note: "[คำพูดอ้างอิงจากผู้บริหาร/ผู้เชี่ยวชาญ]", by: "[ชื่อ–ตำแหน่ง]" } },
      th: { title: ["[ส่วนที่ 1] ", "[คำที่เน้นสี]", ""],
        body: "[เนื้อข่าวภาษาไทย]",
        highlight: { note: "[คำพูดอ้างอิง]", by: "[ชื่อ–ตำแหน่ง]" } },
    },
    {
      topic: "blockchain", source: "[แหล่งข่าว]", time: "[Xd]", url: "https://[ลิงก์]",
      hlType: "takeaway",
      en: { title: ["[part 1] ", "[highlighted phrase]", ""],
        body: "[เนื้อข่าวภาษาอังกฤษ]",
        highlight: { label: "Key takeaway", note: "[ประโยคสรุปนัยสำคัญ 1 ประโยค]" } },
      th: { title: ["[ส่วนที่ 1] ", "[คำที่เน้นสี]", ""],
        body: "[เนื้อข่าวภาษาไทย]",
        highlight: { label: "สรุปสำคัญ", note: "[ประโยคสรุปนัยสำคัญ 1 ประโยค]" } },
    },
    {
      topic: "fintech", source: "[แหล่งข่าว]", time: "[Xd]", url: "https://[ลิงก์]",
      hlType: "know",
      en: { title: ["[part 1] ", "[highlighted phrase]", ""],
        body: "[เนื้อข่าวภาษาอังกฤษ]",
        highlight: { label: "Know this", note: "[อธิบายแนวคิด]" } },
      th: { title: ["[ส่วนที่ 1] ", "[คำที่เน้นสี]", ""],
        body: "[เนื้อข่าวภาษาไทย]",
        highlight: { label: "รู้ไว้", note: "[อธิบายแนวคิด]" } },
    },
    {
      topic: "set", source: "[SET / SEC / BOT ฯลฯ]", time: "[Xd]", url: "https://[ลิงก์]",
      hlType: "data",
      en: { title: ["[part 1] ", "[highlighted phrase]", " [rest]"],
        body: "[เนื้อข่าวภาษาอังกฤษ]",
        highlight: { label: "By the numbers", value: "[ตัวเลข]", note: "[คำอธิบาย]" } },
      th: { title: ["[ส่วนที่ 1] ", "[คำที่เน้นสี]", " [ส่วนที่เหลือ]"],
        body: "[เนื้อข่าวภาษาไทย]",
        highlight: { label: "ตัวเลขสำคัญ", value: "[ตัวเลข]", note: "[คำอธิบาย]" } },
    },
  ],

  // ── ข่าวสั้น "โดยสรุป" (แสดงเมื่อเลือก "ทั้งหมด") · 3–5 รายการ ─────────────────
  // color: RWA #BA6AF2 · Tokenization #CE5FFC · Blockchain #2BB6AE · Fintech #C9C400 · SET #00012C
  briefs: [
    { color: "#CE5FFC", url: "https://[ลิงก์]",
      en: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" },
      th: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" } },
    { color: "#2BB6AE", url: "https://[ลิงก์]",
      en: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" },
      th: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" } },
    { color: "#BA6AF2", url: "https://[ลิงก์]",
      en: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" },
      th: { strong: "[หัวเรื่องสั้น]", text: " [รายละเอียดสั้น ๆ]", src: "[แหล่ง]" } },
  ],

});
