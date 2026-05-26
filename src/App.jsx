import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  Palette,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from './assets/hero-tech.png';
import architectureImage from './assets/architecture-tech.png';
import quantroxLogo from './assets/quantrox-logo.png';
import './style.css';

const whatsapp =
  'https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20cotizar%20un%20proyecto%20digital';
const suiteAppUrl = 'https://jhonjairocorpus-cpu.github.io/suite-empresarial/';

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.62, ease: 'easeOut' },
};

const services = [
  {
    icon: Code2,
    title: 'Desarrollo web',
    text: 'Sitios corporativos, landing pages y plataformas rápidas con arquitectura moderna.',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    text: 'Interfaces premium, claras y pensadas para que cada visitante entienda, confíe y compre.',
  },
  {
    icon: MonitorCog,
    title: 'Software a medida',
    text: 'Paneles, cotizadores, CRMs, inventarios y herramientas internas para operar mejor.',
  },
  {
    icon: ShoppingCart,
    title: 'Tiendas online',
    text: 'Catálogos, carritos, pagos, WhatsApp comercial y experiencias ecommerce escalables.',
  },
  {
    icon: Bot,
    title: 'Automatización con IA',
    text: 'Flujos para atención, clasificación de clientes, reportes, respuestas y procesos repetitivos.',
  },
  {
    icon: ShieldCheck,
    title: 'Soporte continuo',
    text: 'Mantenimiento, mejoras, seguridad, contenido, hosting y evolución del producto digital.',
  },
];

const plans = [
  {
    name: 'Start',
    label: 'Para presencia rápida',
    features: ['Landing page premium', 'WhatsApp y formulario', 'SEO inicial', 'Entrega ágil'],
  },
  {
    name: 'Growth',
    label: 'Para vender mejor',
    featured: true,
    features: ['Web completa por secciones', 'Servicios y portafolio', 'Optimización para campañas', 'Analítica instalada'],
  },
  {
    name: 'Scale',
    label: 'Para operación digital',
    features: ['Panel administrativo', 'Automatizaciones', 'Base de datos', 'Integraciones API'],
  },
  {
    name: 'Custom',
    label: 'Para sistemas a medida',
    features: ['Cotizadores', 'Dashboards', 'CRM interno', 'Exportación PDF'],
  },
];

const portfolio = [
  ['Landing para campañas', 'Páginas enfocadas en convertir tráfico de Meta Ads, Google Ads o WhatsApp.', Rocket],
  ['Sistemas de cotización', 'Cotizaciones rápidas, historial de clientes, PDF y seguimiento comercial.', BriefcaseBusiness],
  ['Dashboards empresariales', 'Indicadores, reportes y control operativo en una interfaz clara.', LineChart],
  ['Ecommerce moderno', 'Tiendas preparadas para vender, medir y escalar sin fricción.', ShoppingCart],
  ['Automatizaciones', 'Flujos que reducen tareas manuales y conectan herramientas del negocio.', Workflow],
  ['Apps internas', 'Herramientas privadas para equipos, inventario, servicios o administración.', Database],
];

const faqs = [
  ['¿La web queda lista para celular?', 'Sí. Diseñamos mobile-first y verificamos que cada sección se adapte a celular, tablet y escritorio.'],
  ['¿Pueden ayudar con dominio y hosting?', 'Sí. Podemos orientar o encargarnos de la configuración técnica para publicar el proyecto.'],
  ['¿La página sirve para publicidad?', 'Sí. Creamos estructuras preparadas para campañas, formularios, WhatsApp, medición y eventos.'],
  ['¿También desarrollan sistemas completos?', 'Sí. Podemos construir desde una landing hasta software con base de datos, paneles, roles e integraciones.'],
];

const botAnswers = {
  servicios: {
    text: 'Creamos páginas web, tiendas online, software a medida, automatizaciones con IA, portales y sistemas empresariales.',
    target: '#servicios',
  },
  suite: {
    text: 'La Suite Empresarial integra facturación, POS, inventario, contabilidad, nómina, clientes, reportes y Supabase cloud.',
    target: '#suite',
  },
  inventario: {
    text: 'La app de inventario controla piezas, stock bajo, movimientos, reportes y puede conectarse con facturación.',
    target: '#inventario',
  },
  planes: {
    text: 'Tenemos planes Start, Growth, Scale y Custom. Si el proyecto requiere algo especial, lo cotizamos a medida.',
    target: '#planes',
  },
  contacto: {
    text: 'Puedes escribirnos por WhatsApp para cotizar, pedir una demo o revisar una idea de software.',
    target: '#contacto',
  },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div {...reveal} className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function App() {
  const [botOpen, setBotOpen] = useState(false);
  const [botMessages, setBotMessages] = useState([
    {
      type: 'bot',
      text: 'Hola, soy el asistente rápido de Quantrox. Te ayudo con servicios, precios, suite empresarial, inventario y soporte.',
    },
  ]);

  const answerBot = (key, rawQuestion = '') => {
    const normalized = key || rawQuestion.toLowerCase();
    const match =
      botAnswers[normalized] ||
      Object.entries(botAnswers).find(([answerKey]) => normalized.includes(answerKey))?.[1] ||
      botAnswers.contacto;
    const label = rawQuestion || Object.keys(botAnswers).find((answerKey) => botAnswers[answerKey] === match) || 'Consulta';
    setBotMessages((messages) => [...messages, { type: 'user', text: label }, { type: 'bot', text: match.text }]);
    if (match.target) {
      document.querySelector(match.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBotSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const question = String(form.get('question') || '').trim();
    if (!question) return;
    answerBot('', question);
    event.currentTarget.reset();
  };

  return (
    <>
      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="Quantrox Systems">
          <img src={quantroxLogo} alt="" />
          <b>Quantrox Systems</b>
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#inventario">Inventario</a>
          <a href={suiteAppUrl} target="_blank" rel="noopener">
            Suite empresarial
          </a>
          <a href="#planes">Planes</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href={whatsapp}>
          <MessageCircle size={18} />
          Cotizar
        </a>
        <button className="menu-button" aria-label="Abrir menú">
          <Menu size={22} />
        </button>
      </nav>

      <header id="inicio" className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: 'easeOut' }}
        >
          <img className="hero-logo" src={quantroxLogo} alt="Quantrox Systems" />
          <p className="eyebrow">
            <Sparkles size={16} />
            Agencia tecnológica premium
          </p>
          <h1>
            Creamos webs, software y automatizaciones que hacen crecer negocios.
          </h1>
          <p className="hero-lead">
            Desarrollo web, diseño UI/UX, tiendas online, sistemas a medida e IA aplicada para empresas que quieren verse profesionales y operar con tecnología real.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsapp}>
              Cotizar mi proyecto
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#servicios">
              Ver servicios
            </a>
            <a className="button app-button" href={suiteAppUrl} target="_blank" rel="noopener">
              Probar suite empresarial
            </a>
          </div>
          <div className="hero-stats">
            <span><b>React + Vite</b> Frontend moderno</span>
            <span><b>IA + APIs</b> Automatización</span>
            <span><b>SEO + Analytics</b> Medición inicial</span>
          </div>
        </motion.div>
      </header>

      <main>
        <section id="servicios" className="section">
          <SectionTitle
            eyebrow="Servicios"
            title="Soluciones digitales completas"
            text="Diseñamos y desarrollamos activos digitales listos para vender, automatizar y acompañar el crecimiento de tu empresa."
          />
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <motion.article {...reveal} className="service-card" key={title}>
                <Icon size={34} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="split-section">
          <motion.div {...reveal} className="split-copy">
            <p className="eyebrow">Tecnología actual</p>
            <h2>Tu web debe ser una herramienta, no solo una vitrina.</h2>
            <p>
              Construimos experiencias rápidas, responsivas y preparadas para integrarse con formularios, WhatsApp, analítica, APIs, bases de datos y procesos internos.
            </p>
            <div className="check-list">
              {['Arquitectura escalable', 'Diseño comercial y corporativo', 'Integraciones y automatización', 'Optimización para campañas'].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.figure {...reveal} className="architecture-card">
            <img src={architectureImage} alt="Visualización tecnológica de módulos de software conectados" />
          </motion.figure>
        </section>

        <section id="inventario" className="inventory-section">
          <motion.div {...reveal} className="inventory-copy">
            <p className="eyebrow">Producto Quantrox</p>
            <h2>Aplicación de inventario de piezas para controlar tu operación.</h2>
            <p>
              Una solución pensada para negocios que manejan repuestos, piezas, herramientas o insumos. Te ayuda a saber qué tienes, qué se está agotando, qué se vendió y cómo se mueve tu inventario en tiempo real.
            </p>
            <div className="inventory-actions">
              <a className="button primary" href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20conocer%20la%20aplicacion%20de%20inventario%20de%20piezas">
                Quiero conocer la app
              </a>
              <a className="button secondary" href="#contacto">
                Solicitar demo
              </a>
            </div>
          </motion.div>
          <motion.div {...reveal} className="inventory-panel">
            <div className="inventory-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="inventory-dashboard">
              <div className="inventory-metric">
                <small>Piezas activas</small>
                <strong>1,248</strong>
              </div>
              <div className="inventory-metric">
                <small>Stock bajo</small>
                <strong>37</strong>
              </div>
              <div className="inventory-metric">
                <small>Movimientos</small>
                <strong>286</strong>
              </div>
            </div>
            <div className="inventory-table">
              <div><b>Filtro de aceite</b><span>Disponible</span><em>124 und.</em></div>
              <div><b>Pastillas de freno</b><span className="warning">Stock bajo</span><em>8 und.</em></div>
              <div><b>Sensor ABS</b><span>Disponible</span><em>42 und.</em></div>
              <div><b>Correa de tiempo</b><span className="warning">Reordenar</span><em>5 und.</em></div>
            </div>
          </motion.div>
          <div className="inventory-features">
            {[
              ['Entradas y salidas', 'Registra compras, ventas, ajustes y movimientos internos sin perder trazabilidad.'],
              ['Alertas de stock', 'Detecta piezas agotadas o próximas a agotarse para comprar a tiempo.'],
              ['Búsquedas rápidas', 'Encuentra piezas por nombre, código, categoría, ubicación o proveedor.'],
              ['Reportes claros', 'Visualiza inventario, rotación, costos, existencias y actividad del negocio.'],
            ].map(([title, text]) => (
              <motion.article {...reveal} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div {...reveal} id="suite" className="business-systems">
            <div>
              <p className="eyebrow">Más soluciones</p>
              <h3>Suite empresarial lista para vender, controlar inventario y leer la contabilidad.</h3>
            <p>
                Una app instalable para oficina, celular y web. Conecta facturación, inventario, contabilidad, clientes, usuarios e historial de cambios por empresa.
              </p>
            </div>
            <div className="business-system-buttons">
              <a className="app-demo-link" href={suiteAppUrl} target="_blank" rel="noopener">
                Abrir Suite Empresarial
              </a>
              <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20informacion%20sobre%20un%20sistema%20contable">
                Sistema Contable
              </a>
              <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20informacion%20sobre%20un%20sistema%20POS%20y%20facturacion">
                Sistema POS y Facturación
              </a>
              <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20informacion%20sobre%20un%20sistema%20de%20nomina">
                Sistema de Nómina
              </a>
            </div>
          </motion.div>
          <motion.div {...reveal} className="suite-commerce">
            <div className="suite-commerce-head">
              <p className="eyebrow">Planes de la Suite</p>
              <h3>Elige el módulo que necesita tu negocio y nosotros creamos la cuenta.</h3>
              <p>Los clientes compran, reciben usuario, instalan la app y trabajan con datos sincronizados en Supabase.</p>
            </div>
            <div className="suite-tabs" aria-label="Módulos de la suite">
              <span>Facturación + Inventario</span>
              <span>POS</span>
              <span>Contabilidad</span>
              <span>Nómina</span>
              <span>Suite completa</span>
            </div>
            <div className="suite-steps">
              <span><b>1</b>Elige un plan</span>
              <i />
              <span><b>2</b>Creamos tu cuenta</span>
              <i />
              <span><b>3</b>Instalas la app</span>
            </div>
            <div className="suite-plan-grid">
              <article>
                <h4>Inicial</h4>
                <p>Para empezar organizado</p>
                <strong>$ 0</strong>
                <small>activación base</small>
                <ul><li>Inventario base</li><li>Clientes</li><li>Contabilidad inicial</li></ul>
                <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20activar%20el%20plan%20Inicial%20de%20la%20Suite">Solicitar activación</a>
              </article>
              <article className="featured">
                <em>Recomendado</em>
                <h4>Empresarial</h4>
                <p>Operación diaria conectada</p>
                <strong>$ 79.900</strong>
                <small>mensual desde</small>
                <ul><li>Facturación conectada a stock</li><li>Comparativos contables</li><li>Usuarios y bitácora</li></ul>
                <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20comprar%20el%20plan%20Empresarial%20de%20la%20Suite">Comprar plan</a>
              </article>
              <article>
                <h4>A medida</h4>
                <p>Para procesos propios</p>
                <strong>Cotizar</strong>
                <small>según alcance</small>
                <ul><li>Automatizaciones</li><li>WhatsApp y pagos</li><li>Portal de clientes</li></ul>
                <a href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20cotizar%20una%20Suite%20a%20medida">Hablar con asesor</a>
              </article>
            </div>
            <div className="suite-feature-grid">
              <span><b>F</b>Factura y descuenta inventario</span>
              <span><b>I</b>Stock, alertas y movimientos</span>
              <span><b>C</b>Ventas vs gastos por meses</span>
              <span><b>U</b>Usuarios con historial</span>
            </div>
            <div className="suite-commerce-actions">
              <a className="button primary" href={`${suiteAppUrl}?v=25`} target="_blank" rel="noopener">Ver planes en la app</a>
              <a className="button secondary" href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20quiero%20una%20cuenta%20para%20la%20Suite%20Empresarial">Crear cuenta para mi empresa</a>
            </div>
          </motion.div>
        </section>

        <section id="planes" className="section">
          <SectionTitle
            eyebrow="Planes"
            title="Elige el punto de partida"
            text="Cada plan se ajusta al alcance real de tu proyecto. Empezamos simple o construimos un sistema completo."
          />
          <div className="plan-grid">
            {plans.map((plan) => (
              <motion.article {...reveal} className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.label}</p>
                </div>
                <div className="plan-features">
                  {plan.features.map((feature) => (
                    <span key={feature}>
                      <CheckCircle2 size={17} />
                      {feature}
                    </span>
                  ))}
                </div>
                <a href={whatsapp}>
                  Solicitar cotización
                  <ChevronRight size={18} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="portafolio" className="portfolio-section">
          <SectionTitle
            eyebrow="Portafolio"
            title="Lo que podemos construir para tu empresa"
            text="No vendemos plantillas rígidas. Creamos la pieza digital correcta para el momento de tu negocio."
          />
          <div className="portfolio-grid">
            {portfolio.map(([title, text, Icon]) => (
              <motion.article {...reveal} className="portfolio-item" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <SectionTitle eyebrow="Proceso" title="De idea a lanzamiento" />
          <div className="process-grid">
            {['Descubrimiento', 'Diseño', 'Desarrollo', 'Ajustes', 'Publicación'].map((step, index) => (
              <motion.article {...reveal} className="process-step" key={step}>
                <b>0{index + 1}</b>
                <h3>{step}</h3>
                <p>
                  {[
                    'Entendemos el negocio, objetivos y alcance.',
                    'Definimos estructura visual y experiencia.',
                    'Construimos con tecnología moderna y limpia.',
                    'Revisamos detalles, rendimiento y responsive.',
                    'Lanzamos y dejamos la base lista para crecer.',
                  ][index]}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <motion.div {...reveal} className="contact-content">
            <p className="eyebrow">Contacto</p>
            <h2>Construyamos tu nueva presencia digital.</h2>
            <p>
              Cuéntanos qué necesitas y te proponemos una solución clara para lanzar, vender o automatizar.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={whatsapp}>
                <MessageCircle size={19} />
                Escribir por WhatsApp
              </a>
              <a className="button secondary" href="mailto:contacto@quantroxsystems.com">
                <Mail size={18} />
                Enviar correo
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#inicio">
          <img src={quantroxLogo} alt="" />
          <b>Quantrox Systems</b>
        </a>
        <p>Desarrollo web | Diseño web | Software a medida | Automatización empresarial</p>
        <p>Código que crea. Diseño que impacta. Tecnología que transforma.</p>
      </footer>

      <section className={`quick-bot ${botOpen ? 'open' : ''}`} aria-label="Bot de respuestas rápidas">
        <button className="bot-float" type="button" onClick={() => setBotOpen((open) => !open)} aria-label="Abrir bot de respuestas rápidas">
          <Bot size={26} strokeWidth={2.5} />
        </button>
        <div className="bot-panel" aria-live="polite">
          <header className="bot-header">
            <div>
              <span>RESPUESTAS RÁPIDAS</span>
              <h3>Bot Quantrox</h3>
            </div>
            <button type="button" onClick={() => setBotOpen(false)} aria-label="Cerrar bot">
              ×
            </button>
          </header>
          <div className="bot-messages">
            {botMessages.map((message, index) => (
              <p className={`bot-message ${message.type}`} key={`${message.type}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>
          <div className="bot-options">
            {Object.keys(botAnswers).map((key) => (
              <button type="button" key={key} onClick={() => answerBot(key)}>
                {key === 'suite' ? 'Suite empresarial' : key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <form className="bot-form" onSubmit={handleBotSubmit}>
            <input name="question" type="text" placeholder="Pregunta rápida..." autoComplete="off" />
            <button type="submit">Enviar</button>
          </form>
          <a className="bot-whatsapp" href="https://wa.me/573218247072?text=Hola%20Quantrox%20Systems,%20necesito%20ayuda%20con%20un%20proyecto%20digital" target="_blank" rel="noopener">
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href={whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Escribir a Quantrox Systems por WhatsApp"
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img">
            <path d="M16.04 3.2c-7.05 0-12.78 5.66-12.78 12.62 0 2.23.6 4.4 1.73 6.31L3.16 28.8l6.86-1.79a12.94 12.94 0 0 0 6.02 1.5c7.05 0 12.78-5.66 12.78-12.62S23.09 3.2 16.04 3.2Zm0 22.98c-1.9 0-3.76-.51-5.38-1.47l-.39-.23-4.07 1.06 1.09-3.92-.26-.4a10.2 10.2 0 0 1-1.57-5.4c0-5.67 4.75-10.29 10.58-10.29 5.84 0 10.59 4.62 10.59 10.29 0 5.74-4.75 10.36-10.59 10.36Zm5.8-7.72c-.32-.16-1.88-.92-2.17-1.02-.29-.11-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.56-.95-.84-1.59-1.87-1.78-2.19-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.71-.98-2.34-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.12 1.08-1.12 2.64 0 1.55 1.15 3.05 1.31 3.26.16.21 2.26 3.4 5.48 4.77.77.33 1.37.52 1.84.67.77.24 1.47.2 2.02.12.62-.09 1.88-.76 2.15-1.5.27-.74.27-1.37.19-1.5-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </span>
      </a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

