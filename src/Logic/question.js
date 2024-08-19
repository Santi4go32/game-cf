const questions = [
  {
    question: '¿Cuál es la principal ventaja de tener una cuenta de ahorros?',
    answers: [
      'a. No pagar impuestos.',
      'b. Obtener préstamos sin intereses.',
      'c. Ganar intereses sobre el dinero depositado.',
      'd. Evitar cualquier tipo de gasto.'
    ],
    correct: 2
  },
  {
    question: '¿Qué es una inversión a largo plazo?',
    answers: [
      'a. Una inversión que se mantiene durante más de un año.',
      'b. Una inversión sin ningún tipo de riesgo.',
      'c. Una inversión con rendimientos garantizados.',
      'd. Una inversión que se puede vender en cualquier momento.'
    ],
    correct: 0
  },
  {
    question: '¿Cómo se calcula el interés simple?',
    answers: [
      'a. Sumando el capital y la tasa de interés.',
      'b. Multiplicando el capital por la tasa de interés y por el tiempo.',
      'c. Dividiendo la tasa de interés por el tiempo.',
      'd. Restando la tasa de interés del capital.'
    ],
    correct: 1
  },
  {
    question: '¿Qué es el interés compuesto?',
    answers: [
      'a. Interés que no varía durante todo el periodo de la inversión.',
      'b. Interés que se calcula solo sobre el capital inicial.',
      'c. Interés calculado sobre el capital inicial y los intereses acumulados.',
      'd. Interés que se paga una sola vez al final del periodo.'
    ],
    correct: 2
  },
  {
    question: '¿Qué caracteriza a una inversión de rentabilidad fija?',
    answers: [
      'a. La tasa de interés no cambia durante la duración de la inversión.',
      'b. La rentabilidad depende de la bolsa de valores.',
      'c. Los intereses se pagan en diferentes momentos sin un calendario fijo.',
      'd. La rentabilidad es mayor cuanto mayor es el riesgo.'
    ],
    correct: 0
  },
  {
    question: '¿Qué es una inversión de rentabilidad variable?',
    answers: [
      'a. Una inversión sin ningún tipo de riesgo.',
      'b. Una inversión con tasa de interés fija.',
      'c. Una inversión que siempre garantiza ganancias.',
      'd. Una inversión cuyo retorno puede fluctuar.'
    ],
    correct: 3
  },
  {
    question: '¿Qué es un derivado financiero?',
    answers: [
      'a. Una inversión en bienes raíces.',
      'b. Un contrato cuyo valor se basa en el precio de un activo subyacente.',
      'c. Un tipo de cuenta de ahorro.',
      'd. Una inversión en acciones de alto rendimiento.'
    ],
    correct: 1
  },
  {
    question: '¿Cuál de los siguientes es un instrumento financiero?',
    answers: [
      'a. Acciones.',
      'b. Electrodomésticos.',
      'c. Automóviles.',
      'd. Propiedades residenciales.'
    ],
    correct: 0
  },
  {
    question: '¿Qué mide el Valor Presente Neto (VPN)?',
    answers: [
      'a. La tasa de interés anual.',
      'b. La diferencia entre el valor presente de los flujos de efectivo y el costo inicial de la inversión.',
      'c. El valor de mercado de una acción.',
      'd. La cantidad de intereses acumulados en una cuenta de ahorro.'
    ],
    correct: 1
  },
  {
    question: '¿Qué caracteriza a un fondo de cobertura?',
    answers: [
      'a. Garantía de rentabilidad fija.',
      'b. Estrategias de inversión diversificadas y a menudo de alto riesgo.',
      'c. Solo invierte en bienes raíces.',
      'd. Es accesible para cualquier inversor minorista.'
    ],
    correct: 1
  },
  {
    question: '¿Qué es un fondo de inversión?',
    answers: [
      'a. Una cuenta de ahorro con alta rentabilidad.',
      'b. Un préstamo a corto plazo.',
      'c. Una inversión en un solo tipo de activo.',
      'd. Un vehículo de inversión que agrupa el dinero de muchos inversores para comprar una cartera diversificada de valores.'
    ],
    correct: 3
  },
  {
    question: '¿Qué función principal cumple un banco central?',
    answers: [
      'a. Controla la política monetaria de un país.',
      'b. Ofrece préstamos personales.',
      'c. Gestiona cuentas de ahorro y corrientes.',
      'd. Invierten en bienes raíces.'
    ],
    correct: 0
  },
  {
    question: '¿Qué factor afecta principalmente el precio del oro?',
    answers: [
      'a. La tasa de inflación local.',
      'b. El rendimiento de los bonos gubernamentales.',
      'c. La oferta y demanda en el mercado global.',
      'd. Las políticas fiscales del gobierno.'
    ],
    correct: 2
  },
  {
    question: '¿Qué puede causar un aumento en los precios del petróleo?',
    answers: [
      'a. Conflictos geopolíticos en regiones productoras de petróleo.',
      'b. Incremento en la producción de petróleo.',
      'c. Descenso en la demanda mundial de energía.',
      'd. Políticas de ahorro energético.'
    ],
    correct: 0
  },
  {
    question: '¿Cuál es una ventaja de invertir en bienes raíces?',
    answers: [
      'a. Potencial de apreciación del capital y generación de ingresos pasivos.',
      'b. Alta liquidez inmediata.',
      'c. Garantía de rentabilidad fija.',
      'd. No requiere mantenimiento.'
    ],
    correct: 0
  },
  {
    question: '¿Qué es la diversificación en inversiones?',
    answers: [
      'a. Solo invertir en mercados internacionales.',
      'b. Mantener el capital en efectivo.',
      'c. Distribuir las inversiones en diferentes tipos de activos para reducir el riesgo.',
      'd. Invertir todo el capital en un solo activo de alta rentabilidad.'
    ],
    correct: 2
  },
  {
    question: '¿Qué significa que una inversión sea líquida?',
    answers: [
      'a. Puede convertirse rápidamente en efectivo sin pérdida de valor.',
      'b. Tiene una tasa de interés alta.',
      'c. Su valor aumenta con el tiempo.',
      'd. Solo se puede vender después de un periodo específico.'
    ],
    correct: 0
  },
  {
    question: '¿Qué tipo de riesgo se asocia con las inversiones en acciones?',
    answers: [
      'a. Garantía de retorno.',
      'b. Riesgo de mercado, donde el valor de las acciones puede fluctuar.',
      'c. Riesgo de tasa de interés fija.',
      'd. Ausencia de riesgo.'
    ],
    correct: 1
  },
  {
    question: '¿Qué es un bono corporativo?',
    answers: [
      'a. Una cuenta de ahorro de alta rentabilidad.',
      'b. Una acción que otorga derechos de voto en la empresa.',
      'c. Una inversión garantizada por el gobierno.',
      'd. Un tipo de deuda emitida por una empresa para financiar sus operaciones.'
    ],
    correct: 3
  },
  {
    question: '¿Qué es el índice bursátil?',
    answers: [
      'a. Un tipo de acción de alto rendimiento.',
      'b. Un indicador que muestra el rendimiento general de un conjunto de acciones.',
      'c. Un fondo de cobertura.',
      'd. Una inversión a corto plazo.'
    ],
    correct: 1
  }
];

export default questions;
