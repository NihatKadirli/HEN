import { useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal, ImageOff } from 'lucide-react';
export function ComparisonImage({ image, alt, priority = false }) {
 const [failed, setFailed] = useState(false);
 if (failed || !image) return <div className="image-fallback" role="img" aria-label={alt}><ImageOff size={28}/><span>Görsel hazırlanıyor</span></div>;
 if (typeof image === 'string') return <img src={image} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} draggable="false" onError={() => setFailed(true)}/>;
 const [x, y, width, height] = image.region;
 return <svg className="comparison-photo" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}><image href={image.src} x={-x} y={-y} width="1536" height="1024" onError={() => setFailed(true)}/></svg>;
}
export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'ÖNCE', afterLabel = 'SONRA', label = 'Temizlik', priority = false, caption = true }) {
 const [sliderPosition, setSliderPosition] = useState(50); const container = useRef(null); const dragging = useRef(false); const id = useId();
 const setPosition = value => setSliderPosition(Math.max(0, Math.min(100, value)));
 const move = event => { const rect = container.current.getBoundingClientRect(); setPosition((event.clientX - rect.left) / rect.width * 100); };
 const onDown = event => { if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return; dragging.current = true; container.current.setPointerCapture(event.pointerId); container.current.focus({ preventScroll: true }); move(event); };
 const stop = () => { dragging.current = false; };
 const onKey = event => { const offsets = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -10, PageUp: 10 }; if (event.key in offsets || event.key === 'Home' || event.key === 'End') { event.preventDefault(); setPosition(event.key === 'Home' ? 0 : event.key === 'End' ? 100 : sliderPosition + offsets[event.key]); } };
 return <figure className="comparison"><div ref={container} className="comparison-stage" role="slider" tabIndex={0} aria-label={`${label} önce ve sonra karşılaştırması`} aria-orientation="horizontal" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(sliderPosition)} aria-valuetext={`Yüzde ${Math.round(sliderPosition)} temizlik öncesi`} aria-describedby={caption ? id : undefined} onPointerDown={onDown} onPointerMove={e => { if (dragging.current) move(e); }} onPointerUp={stop} onPointerCancel={stop} onLostPointerCapture={stop} onKeyDown={onKey}><div className="comparison-layer"><ComparisonImage image={afterImage} alt={`${label}, temizlik sonrası`} priority={priority}/></div><div className="comparison-layer before-layer" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}><ComparisonImage image={beforeImage} alt={`${label}, temizlik öncesi`} priority={priority}/></div><span className="comparison-label label-before">{beforeLabel}</span><span className="comparison-label label-after"><span/>{afterLabel}</span><div className="comparison-divider" style={{ left: `${sliderPosition}%` }}><span className="comparison-handle"><ChevronLeft size={19}/><ChevronRight size={19}/></span></div><span className="comparison-bottom">AYNI ALAN. YEPYENİ BİR HİS.</span></div>{caption && <figcaption id={id}><MoveHorizontal size={16}/> Farkı görmek için kaydırın <span>veya ok tuşlarını kullanın</span></figcaption>}</figure>;
}
