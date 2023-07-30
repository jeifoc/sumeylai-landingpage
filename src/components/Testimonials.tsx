import profile01 from '/src/assets/images/profile/01.jpg';
import profile02 from '/src/assets/images/profile/02.jpg';
import profile03 from '/src/assets/images/profile/03.jpg';

export default function Testimonials() {
  return (
    <div className='section3'>
      <h2 className='section3--title'>Testimonios</h2>
      <div className='section3-container'>
        <div className='testimony'>
          <div className='testimony--header'>
            <img src={profile01} alt='' />
            <h5>Valentina López</h5>
          </div>
          <p>
            "¡Increíble experiencia! Hacía tiempo que no me sentía tan cómoda en
            una clínica dental. El trato del personal fue excepcional y el
            dentista me explicó todo detalladamente antes del tratamiento. Me
            realizaron una limpieza dental y quedé impresionada con los
            resultados. ¡Mi sonrisa nunca había estado tan brillante! Recomiendo
            totalmente este consultorio dental."
          </p>
        </div>
        <div className='testimony'>
          <div className='testimony--header'>
            <img src={profile02} alt='' />
            <h5>Isabella Rodríguez</h5>
          </div>
          <p>
            "Llegué al consultorio con mucho temor debido a malas experiencias
            pasadas en otros lugares. Sin embargo, desde el momento en que
            entré, me sentí en buenas manos. El equipo me brindó calidez y
            empatía, lo que me tranquilizó. Me realizaron una restauración
            dental y el resultado fue asombroso. No puedo agradecer lo
            suficiente al equipo por su profesionalismo y por devolverme la
            confianza en mi sonrisa."
          </p>
        </div>
        <div className='testimony'>
          <div className='testimony--header'>
            <img src={profile03} alt='' />
            <h5>Camila Pérez</h5>
          </div>
          <p>
            "Excelente atención y resultados. Me recomendaron este consultorio y
            superó mis expectativas. Me realizaron un tratamiento de
            blanqueamiento dental y el cambio fue sorprendente. El proceso fue
            cómodo y los resultados fueron rápidos. Definitivamente, volveré
            para futuros tratamientos. Gracias a todo el equipo por su
            amabilidad y eficiencia."
          </p>
        </div>
      </div>
    </div>
  );
}
