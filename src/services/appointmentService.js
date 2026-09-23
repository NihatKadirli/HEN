import { normalizePhone, validateAppointment } from '../utils/validation';
export async function createAppointment(values, { signal, requestId, simulateError = false } = {}) {
 if (Object.keys(validateAppointment(values)).length) throw new Error('Lütfen formdaki bilgileri kontrol edin.');
 const endpoint = import.meta.env.VITE_APPOINTMENT_API_URL;
 if (!endpoint) {
  await new Promise((resolve, reject) => { const timer = setTimeout(resolve, 900); signal?.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); }, { once: true }); });
  if (simulateError) throw new Error('Talebiniz şu anda gönderilemedi. Lütfen tekrar deneyin.');
  return { id: requestId || crypto.randomUUID(), status: 'demo', demo: true };
 }
 const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': requestId || crypto.randomUUID() }, signal, body: JSON.stringify({ ...values, phone: normalizePhone(values.phone), email: values.email.trim(), name: values.name.trim() }) });
 if (!response.ok) throw new Error('Talebiniz şu anda gönderilemedi. Lütfen tekrar deneyin.');
 return { ...await response.json(), demo: false };
}
