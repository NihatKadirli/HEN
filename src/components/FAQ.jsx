import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { faq } from '../data/faq';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <section className="section faq-section">
      <div className="container">
        <SectionTitle
          eyebrow="SIKÇA SORULANLAR"
          title={<>Aklınıza takılanlar</>}
          description="Cevabını bulamadığınız bir soru varsa bize yazın, memnuniyetle yardımcı olalım."
        />
        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${base}-panel-${index}`;
            const buttonId = `${base}-button-${index}`;
            return (
              <div className="faq-item" key={item.question} data-open={isOpen}>
                <h3 style={{ margin: 0 }}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId}>
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
