export default function Services() {
  return (
    <>
      <h3 className='services-title'>Nuestros servicios</h3>
      <div className='services'>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/caries.gif'
            alt=''
          />
          <h4 className='service--title'>Endodoncia</h4>
          <p className='service--description'>
            Nuestros especialistas en endodoncia eliminarán la infección o daño
            dentro del diente y limpiarán cuidadosamente los conductos
            radiculares. Este procedimiento salva dientes que de otra manera
            estarían condenados a ser extraídos.
          </p>
        </div>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/dentist-chair.gif'
            alt=''
          />
          <h4 className='service--title'>Cirugía</h4>
          <p className='service--description'>
            Garantizamos resultados excepcionales en cada intervención. Ya sea
            una extracción o una cirugía más compleja, confía en nosotros para
            un proceso seguro.
          </p>
        </div>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/gum.gif'
            alt=''
          />
          <h4 className='service--title'>Tratamientos odontológicos</h4>
          <p className='service--description'>
            Estamos capacitados para realizar evaluaciones minuciosas de tu
            salud bucal para identificar posibles problemas y diseñar un plan de
            tratamiento a medida.
          </p>
        </div>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/smile.gif'
            alt=''
          />
          <h4 className='service--title'>Blanqueamiento</h4>
          <p className='service--description'>
            Nuestro blanqueamiento dental utiliza agentes blanqueadores seguros
            y eficaces para eliminar manchas y decoloraciones, logrando una
            sonrisa más brillante y rejuvenecida.
          </p>
        </div>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/tooth-drill.gif'
            alt=''
          />
          <h4 className='service--title'>Coronas</h4>
          <p className='service--description'>
            Las coronas dentales que ofrecemos son restauraciones sólidas que
            cubren completamente el diente dañado o debilitado
          </p>
        </div>
        <div className='service-container'>
          <img
            className='service--img'
            src='./src/assets/gifs/tooth-extraction.gif'
            alt=''
          />
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
