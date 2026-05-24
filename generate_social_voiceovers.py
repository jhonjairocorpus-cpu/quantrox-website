import asyncio
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "social-videos" / "voiceovers"
OUT.mkdir(parents=True, exist_ok=True)

VOICE = "es-CO-GonzaloNeural"
RATE = "+13%"

SCRIPTS = {
    "01-desarrollamos-paginas-web": (
        "Tu negocio necesita una pagina web que venda, no solo que se vea bonita. "
        "En Quantrox Systems disenamos, programamos y publicamos paginas modernas, rapidas y listas para convertir visitantes en clientes. "
        "Cotiza tu proyecto digital hoy."
    ),
    "02-creamos-base-de-datos": (
        "Si tu empresa sigue manejando clientes, cotizaciones e inventario de forma manual, estas perdiendo tiempo. "
        "En Quantrox Systems creamos bases de datos, paneles y sistemas a medida para organizar tu operacion y tomar mejores decisiones. "
        "Hablemos de tu sistema."
    ),
    "03-caso-palacios-constructores": (
        "Asi ayudamos a Palacios Constructores a tener una presencia digital clara, profesional y lista para recibir contactos. "
        "Creamos paginas web para empresas que quieren mostrar sus servicios con confianza y generar mas oportunidades comerciales. "
        "Tu empresa puede ser la siguiente."
    ),
    "04-caso-palacios-rental": (
        "Para Palacios Rentals desarrollamos una pagina enfocada en mostrar equipos, proyectos y facilitar cotizaciones. "
        "En Quantrox Systems convertimos tus servicios en una experiencia digital clara, moderna y lista para vender. "
        "Escribenos y construyamos la tuya."
    ),
}


async def generate_one(name: str, text: str) -> None:
    script_path = OUT / f"{name}.txt"
    audio_path = OUT / f"{name}.mp3"
    script_path.write_text(text, encoding="utf-8")
    communicate = edge_tts.Communicate(text, voice=VOICE, rate=RATE, volume="+0%")
    await communicate.save(str(audio_path))
    print(audio_path)


async def main() -> None:
    for name, text in SCRIPTS.items():
      await generate_one(name, text)


if __name__ == "__main__":
    asyncio.run(main())
