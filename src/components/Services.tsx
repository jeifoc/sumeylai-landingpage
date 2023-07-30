import caries from '/src/assets/gifs/caries.gif';
import dentistChair from '/src/assets/gifs/dentist-chair.gif';
import gum from '/src/assets/gifs/gum.gif';
import smile from '/src/assets/gifs/smile.gif';
import toothDrill from '/src/assets/gifs/tooth-drill.gif';
import toothExtraction from '/src/assets/gifs/tooth-extraction.gif';

export default function Services() {
  return (
    <>
      <h3 className='services-title'>Nuestros servicios</h3>
      <div className='services'>
        <div className='service-container'>
          <img className='service--img' src={caries} alt='' />
          <h4 className='service--title'>Endodoncia</h4>
          <p className='service--description'>
            Nuestros especialistas en endodoncia eliminarán la infección o daño
            dentro del diente y limpiarán cuidadosamente los conductos
            radiculares. Este procedimiento salva dientes que de otra manera
            estarían condenados a ser extraídos.
          </p>
        </div>
        <div className='service-container'>
          <img className='service--img' src={dentistChair} alt='' />
          <h4 className='service--title'>Cirugía</h4>
          <p className='service--description'>
            Garantizamos resultados excepcionales en cada intervención. Ya sea
            una extracción o una cirugía más compleja, confía en nosotros para
            un proceso seguro.
          </p>
        </div>
        <div className='service-container'>
          <img className='service--img' src={gum} alt='' />
          <h4 className='service--title'>Tratamientos odontológicos</h4>
          <p className='service--description'>
            Estamos capacitados para realizar evaluaciones minuciosas de tu
            salud bucal para identificar posibles problemas y diseñar un plan de
            tratamiento a medida.
          </p>
        </div>
        <div className='service-container'>
          <img className='service--img' src={smile} alt='' />
          <h4 className='service--title'>Blanqueamiento</h4>
          <p className='service--description'>
            Nuestro blanqueamiento dental utiliza agentes blanqueadores seguros
            y eficaces para eliminar manchas y decoloraciones, logrando una
            sonrisa más brillante y rejuvenecida.
          </p>
        </div>
        <div className='service-container'>
          <img className='service--img' src={toothDrill} alt='' />
          <h4 className='service--title'>Coronas</h4>
          <p className='service--description'>
            Las coronas dentales que ofrecemos son restauraciones sólidas que
            cubren completamente el diente dañado o debilitado
          </p>
        </div>
        <div className='service-container'>
          <img className='service--img' src={toothExtraction} alt='' />
          <h4 className='service--title'>Extracciones</h4>
          <p className='service--description'>
            Realizamos extracciones dentales con destreza y delicadeza para
            garantizar una experiencia cómoda y resultados óptimos
          </p>
        </div>
      </div>
    </>
  );
}
