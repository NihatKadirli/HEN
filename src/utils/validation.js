export const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
export const normalizePhone = value => { let digits = value.replace(/\D/g, ''); if (digits.startsWith('90')) digits = digits.slice(2); if (digits.length === 10) digits = `0${digits}`; return digits; };
export function validateAppointment(values, step) {
 const errors = {};
 if (step === 0 || step === undefined) {
  if (!values.service) errors.service = 'Lütfen bir temizlik hizmeti seçin.';
  if (!values.area) errors.area = 'Lütfen alan türünü seçin.';
  if (!values.squareMeters || !Number.isFinite(Number(values.squareMeters)) || Number(values.squareMeters) < 10 || Number(values.squareMeters) > 10000) errors.squareMeters = '10 ile 10.000 arasında bir metrekare girin.';
 }
 if (step === 1 || step === undefined) {
  if (values.address.trim().length < 10) errors.address = 'İlçe, mahalle ve açık adresinizi en az 10 karakterle belirtin.';
  const today = localDate(); const maxDate = new Date(); maxDate.setFullYear(maxDate.getFullYear() + 1);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date) || values.date < today || values.date > localDate(maxDate)) errors.date = 'Bugünden itibaren bir yıl içinde geçerli bir tarih seçin.';
  if (!values.time) errors.time = 'Lütfen tercih ettiğiniz saati seçin.';
  else if (values.date === today && new Date(`${values.date}T${values.time}:00`).getTime() <= Date.now()) errors.time = 'Bugün için ileri bir saat seçin.';
 }
 if (step === 2 || step === undefined) {
  if (values.name.trim().split(/\s+/).length < 2 || values.name.trim().length < 5) errors.name = 'Lütfen adınızı ve soyadınızı yazın.';
  if (!/^05\d{9}$/.test(normalizePhone(values.phone))) errors.phone = 'Geçerli bir cep telefonu girin: 05XX XXX XX XX.';
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Geçerli bir e-posta adresi girin veya alanı boş bırakın.';
  if (!values.consent) errors.consent = 'Devam etmek için KVKK ve iletişim koşullarını okuyup onaylayın.';
 }
 return errors;
}
