export function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");      // sadece rakam
  const d = digits.slice(0, 11);              // 0 ile başlıyorsa max 11

  // 05xxxxxxxxx bekliyoruz
  const p2 = d.slice(0, 3);   // 5xx
  const p3 = d.slice(3, 6);   // xxx
  const p4 = d.slice(6, 8);   // xx
  const p5 = d.slice(8, 10);  // xx

  let out = "";
  if (p2) out += ` (${p2}`;
  if (p2.length === 3) out += `)`;
  if (p3) out += ` ${p3}`;
  if (p4) out += ` ${p4}`;
  if (p5) out += ` ${p5}`;

  return out.trim();
}