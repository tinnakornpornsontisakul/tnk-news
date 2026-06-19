// ============================================================================
//  TokenX Weekly Roundup — DATA LOADER (ตัวรวมไฟล์ข้อมูลรายสัปดาห์)
// ----------------------------------------------------------------------------
//  โมเดลข้อมูล:  "1 สัปดาห์ = 1 ไฟล์"  ในโฟลเดอร์  weeks/
//    • แต่ละไฟล์  weeks/YYYY-MM-DD.js  เรียก
//        registerWeek({ meta, market, lead, stories, briefs })
//    • ไฟล์นี้โหลดทุกไฟล์ตาม manifest ด้านล่าง แล้วประกอบเป็น
//        window.RWA_NEWS_ARCHIVE   (เรียงใหม่→เก่า ตาม meta.date อัตโนมัติ)
//        window.RWA_NEWS           (= ฉบับล่าสุด, เผื่อโค้ดเดิม)
//
//  ➕ เพิ่มสัปดาห์ใหม่ (3 ขั้น):
//     1) คัดลอก  weeks/_TEMPLATE.js  →  weeks/YYYY-MM-DD.js  (วันที่ของฉบับ)
//     2) กรอกข่าวของสัปดาห์นั้น  (ดูวิธีเขียนใน SKILL.md)
//     3) เพิ่มชื่อไฟล์ 1 บรรทัดใน  WEEK_FILES  ด้านล่าง
//
//  ลบ/เก็บถาวร: ไม่ต้องแตะไฟล์เก่า — แค่เพิ่ม/นำชื่อออกจาก WEEK_FILES
// ============================================================================

(function () {
  window.RWA_WEEKS = [];                      // รีเซ็ตทุกครั้งที่ loader รัน กันลงทะเบียนซ้ำ
  window.registerWeek = function (w) {
    if (w && w.meta) window.RWA_WEEKS.push(w);
  };

  // ── manifest: รายชื่อไฟล์สัปดาห์ (ลำดับใดก็ได้ — ระบบเรียงตามวันที่ให้เอง) ──
  var WEEK_FILES = [
    'weeks/2026-06-18.js',
  ];

  function assemble() {
    var seen = {};
    var weeks = window.RWA_WEEKS
      .filter(function (w) {                   // กันซ้ำตามวันที่ (เผื่อไฟล์ถูกโหลดมากกว่าหนึ่งครั้ง)
        var k = String(w.meta.date || '');
        if (seen[k]) return false;
        seen[k] = 1; return true;
      })
      .sort(function (a, b) {
        return String(b.meta.date || '').localeCompare(String(a.meta.date || ''));
      });
    window.RWA_NEWS_ARCHIVE = weeks;          // ใหม่→เก่า
    window.RWA_NEWS = weeks[0] || null;       // ฉบับล่าสุด
  }

  // หา path ฐานจากตำแหน่งไฟล์ loader เอง เพื่อให้ weeks/ อ้างถูกไม่ว่าจะ host ที่ไหน
  var here = (document.currentScript && document.currentScript.src) || '';
  var base = here ? here.slice(0, here.lastIndexOf('/') + 1) : '';

  var remaining = WEEK_FILES.length;
  if (!remaining) { assemble(); return; }

  function done() { if (--remaining === 0) assemble(); }

  WEEK_FILES.forEach(function (f) {
    var s = document.createElement('script');
    s.src = base + f;
    s.onload = done;
    s.onerror = function () { console.warn('[RWA] โหลดไฟล์สัปดาห์ไม่สำเร็จ:', f); done(); };
    document.head.appendChild(s);
  });
})();
