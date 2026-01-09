
import { ScannedLesson } from '../types';

export const PRESET_LESSONS: ScannedLesson[] = [
  // --- EXISTING SAMPLES ---
  {
    id: 'p1',
    title: 'Contrato de Alquiler (賃貸契約書)',
    category: 'Vivienda',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400',
    transcription: '本契約の有効期間は、令和〇年〇月〇日から二年間とする。更新を希望する場合は、期間満了の三ヶ月前までに書面にて通知しなければならない。',
    translation: 'El periodo de validez de este contrato será de dos años a partir del día X del mes X del año Reiwa X. Si desea renovarlo, debe notificarlo por escrito al menos tres meses antes de la finalización del periodo.',
    explanations: [
      { phrase: '本契約', reading: 'ほんけいやく', meaning: 'Este contrato', context: 'Término formal para referirse al documento actual.' },
      { phrase: '有効期間', reading: 'ゆうこうきかん', meaning: 'Periodo de validez', context: 'Tiempo durante el cual el contrato tiene efecto legal.' },
      { phrase: '令和', reading: 'れいわ', meaning: 'Reiwa', context: 'Nombre de la era actual en el calendario japonés.' },
      { phrase: '二年間とする', reading: 'にねんかんとする', meaning: 'Se establece en dos años', context: 'Estructura gramatical formal para definir una regla.' },
      { phrase: '更新', reading: 'こうしん', meaning: 'Renovación', context: 'Extender la vigencia de un contrato.' },
      { phrase: '希望', reading: 'きぼう', meaning: 'Deseo / Petición', context: 'Manifestar la voluntad de hacer algo.' },
      { phrase: '期間満了', reading: 'きかんまんりょう', meaning: 'Expiración del periodo', context: 'Fin del tiempo estipulado.' },
      { phrase: '三ヶ月前', reading: 'さんかげつまえ', meaning: 'Tres meses antes', context: 'Plazo límite establecido.' },
      { phrase: '書面にて', reading: 'しょめんにて', meaning: 'Por escrito', context: 'Indica que no basta con una comunicación verbal.' },
      { phrase: '通知', reading: 'つうち', meaning: 'Notificación', context: 'Comunicar formalmente una decisión.' }
    ],
    exercises: [
      { question: '¿Cuándo debe notificarse la renovación?', answer: '3 meses antes', options: ['1 mes antes', '3 meses antes', 'Al finalizar', '6 meses antes'] }
    ]
  },

  // --- BANKING SAMPLES (32 Total) ---
  {
    id: 'b1',
    title: 'Apertura de Cuenta Fija (定期預金の作成)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=400',
    transcription: '中途解約時の利息は、約定利率ではなく、当行規定の期限前解約利率が適用されますのでご留意ください。',
    translation: 'Tenga en cuenta que en caso de cancelación anticipada, no se aplicará la tasa de interés acordada, sino la tasa de interés por cancelación antes del plazo establecida por el banco.',
    explanations: [
      { phrase: '中途解約', reading: 'ちゅうとかいやく', meaning: 'Cancelación anticipada', context: 'Finalizar un depósito antes de la fecha de vencimiento.' },
      { phrase: '利息', reading: 'りそく', meaning: 'Interés', context: 'Ganancia generada por el capital ahorrado.' },
      { phrase: '約定利率', reading: 'やくじょうりりつ', meaning: 'Tasa de interés pactada', context: 'El porcentaje de interés prometido al inicio.' },
      { phrase: '当行規定', reading: 'とうこうきてい', meaning: 'Regulaciones de este banco', context: 'Normas internas de la entidad financiera.' },
      { phrase: '期限前解約利率', reading: 'きげんぜんかいやくりりつ', meaning: 'Tasa por cancelación antes del plazo', context: 'Tasa reducida que se aplica por no cumplir el plazo.' },
      { phrase: '適用', reading: 'てきよう', meaning: 'Aplicación', context: 'Poner en práctica una norma o tasa.' },
      { phrase: 'ご留意ください', reading: 'ごりゅういください', meaning: 'Tenga en cuenta / Sea consciente', context: 'Expresión muy formal para pedir atención sobre un aviso.' }
    ],
    exercises: [
      { question: '¿Qué interés se aplica si cancelas antes de tiempo?', answer: 'Tasa por cancelación antes del plazo', options: ['Tasa pactada', 'Tasa por cancelación antes del plazo', 'Ninguna', 'Tasa duplicada'] }
    ]
  },
  {
    id: 'b2',
    title: 'Extravío de Tarjeta (カード紛失時の対応)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=400',
    transcription: '盗難や紛失の際は、直ちに利用停止の手続きを行ってください。不正利用による損害を最小限に抑えるため、警察への届出も必要です。',
    translation: 'En caso de robo o extravío, realice inmediatamente el trámite para suspender el uso. También es necesario informar a la policía para minimizar los daños por uso no autorizado.',
    explanations: [
      { phrase: '盗難', reading: 'とうなん', meaning: 'Robo', context: 'Sustracción ilegal de la propiedad.' },
      { phrase: '紛失', reading: 'ふんしつ', meaning: 'Extravío / Pérdida', context: 'Perder algo por descuido.' },
      { phrase: '直ちに', reading: 'ただちに', meaning: 'Inmediatamente', context: 'Sin ninguna demora.' },
      { phrase: '利用停止', reading: 'りようていし', meaning: 'Suspensión de uso', context: 'Bloquear la cuenta o tarjeta.' },
      { phrase: '手続き', reading: 'てつづき', meaning: 'Trámite / Procedimiento', context: 'Pasos formales para completar una acción.' },
      { phrase: '不正利用', reading: 'ふせいりよう', meaning: 'Uso fraudulento', context: 'Uso de la tarjeta por una persona no autorizada.' },
      { phrase: '損害', reading: 'そんがい', meaning: 'Daño / Perjuicio', context: 'Pérdida monetaria sufrida.' },
      { phrase: '最小限に抑える', reading: 'さいしょうげんにおさえる', meaning: 'Reducir al mínimo', context: 'Intentar que el impacto negativo sea lo menor posible.' },
      { phrase: '警察', reading: 'けいさつ', meaning: 'Policía', context: 'Autoridad de seguridad pública.' },
      { phrase: '届出', reading: 'とどけで', meaning: 'Reporte / Notificación', context: 'Informar formalmente de un incidente.' }
    ],
    exercises: [
      { question: '¿Por qué es necesario informar a la policía?', answer: 'Para minimizar daños', options: ['Para recibir dinero', 'Para minimizar daños', 'Para pedir una tarjeta nueva', 'No es necesario'] }
    ]
  },
  {
    id: 'b3',
    title: 'Solicitud de Préstamo Vivienda (住宅ローンの審査)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400',
    transcription: '融資の審査にあたり、源泉徴収票や住民税決定通知書などの公的書類の原本提出が不可欠となります。',
    translation: 'Para la evaluación del préstamo, es indispensable presentar los originales de documentos públicos como el certificado de retenciones o la notificación de impuestos municipales.',
    explanations: [
      { phrase: '融資', reading: 'ゆうし', meaning: 'Financiamiento / Préstamo', context: 'Dinero prestado por una entidad para un fin específico.' },
      { phrase: '審査', reading: 'しんさ', meaning: 'Evaluación / Examen', context: 'Proceso de decidir si se otorga o no el crédito.' },
      { phrase: '源泉徴収票', reading: 'げんせんちょうしゅうひょう', meaning: 'Certificado de retenciones', context: 'Documento que muestra tus ingresos y los impuestos pagados por tu empresa.' },
      { phrase: '住民税決定通知書', reading: 'じゅうみんぜいけっていつうちしょ', meaning: 'Aviso de determinación de impuestos residentes', context: 'Documento oficial que indica cuánto impuesto municipal debes pagar.' },
      { phrase: '公的書類', reading: 'こうてきしょるい', meaning: 'Documentos oficiales / públicos', context: 'Papeles emitidos por el gobierno o municipalidad.' },
      { phrase: '原本提出', reading: 'げんぽんていしゅつ', meaning: 'Entrega de original', context: 'No se aceptan copias.' },
      { phrase: '不可欠', reading: 'ふかけつ', meaning: 'Indispensable', context: 'Algo que no puede faltar bajo ninguna circunstancia.' }
    ],
    exercises: [
      { question: '¿Qué tipo de documentos se requieren?', answer: 'Originales públicos', options: ['Copias simples', 'Originales públicos', 'Fotos de celular', 'Solo el contrato'] }
    ]
  },
  {
    id: 'b4',
    title: 'Transferencia al Extranjero (海外送金の制限)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1621416848446-991125c75b06?auto=format&fit=crop&q=80&w=400',
    transcription: 'マネーロンダリング防止のため、一回あたりの送金限度額が設定されており、目的の確認が必須です。',
    translation: 'Para prevenir el lavado de dinero, se ha establecido un límite de remesas por transacción y es obligatorio confirmar el propósito del envío.',
    explanations: [
      { phrase: '防止', reading: 'ぼうし', meaning: 'Prevención', context: 'Evitar que algo malo suceda.' },
      { phrase: '一回あたり', reading: 'いっかいあたり', meaning: 'Por cada vez / Por transacción', context: 'Indica la unidad de medida del límite.' },
      { phrase: '送金限度額', reading: 'そうきんげんどがく', meaning: 'Límite de remesa', context: 'Cantidad máxima de dinero que se puede enviar.' },
      { phrase: '設定', reading: 'せってい', meaning: 'Configuración / Establecimiento', context: 'Fijar una regla o valor.' },
      { phrase: '目的', reading: 'もくてき', meaning: 'Propósito / Objetivo', context: 'Razón por la cual se envía el dinero.' },
      { phrase: '必須', reading: 'ひっす', meaning: 'Obligatorio / Requerido', context: 'Algo que se debe hacer por ley o norma.' }
    ],
    exercises: []
  },
  {
    id: 'b5',
    title: 'Inversión en NISA (非課税投資制度)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1611974714158-f8a7506972e3?auto=format&fit=crop&q=80&w=400',
    transcription: '少額投資非課税制度を利用すれば、配当金や売却益にかかる税金が全額免除されます。長期的な資産形成に有効です。',
    translation: 'Si utiliza el sistema de inversión libre de impuestos para pequeñas cantidades, los impuestos sobre dividendos y ganancias de capital estarán totalmente exentos. Es eficaz para la formación de activos a largo plazo.',
    explanations: [
      { phrase: '少額投資', reading: 'しょうがくとうし', meaning: 'Inversión de pequeñas cantidades', context: 'Invertir poco dinero regularmente.' },
      { phrase: '非課税制度', reading: 'ひかぜいせいど', meaning: 'Sistema libre de impuestos', context: 'Un programa legal donde no se cobran impuestos.' },
      { phrase: '配当金', reading: 'はいとうきん', meaning: 'Dividendos', context: 'Ganancias que una empresa reparte a sus accionistas.' },
      { phrase: '売却益', reading: 'ばいきゃくえき', meaning: 'Ganancia por venta (Plusvalía)', context: 'Ganancia obtenida al vender un activo a mayor precio del que se compró.' },
      { phrase: '全額免除', reading: 'ぜんがくめんじょ', meaning: 'Exención total', context: 'No pagar absolutamente nada de impuesto.' },
      { phrase: '資産形成', reading: 'しさんけいせい', meaning: 'Formación de activos / Patrimonio', context: 'Construir riqueza a lo largo del tiempo.' }
    ],
    exercises: []
  },
  {
    id: 'b6',
    title: 'Débito Automático (公共料金の口座振替)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=400',
    transcription: '残高不足により振替が不成立となった場合、延滞金が発生する恐れがありますのでご注意ください。',
    translation: 'Tenga en cuenta que si la transferencia no se realiza debido a saldo insuficiente, existe el riesgo de que se generen cargos por mora.',
    explanations: [
      { phrase: '残高不足', reading: 'ざんだかぶそく', meaning: 'Saldo insuficiente', context: 'No tener suficiente dinero en la cuenta para un pago.' },
      { phrase: '振替', reading: 'ふりかえ', meaning: 'Transferencia automática / Cargo en cuenta', context: 'Sistema de pago automático para facturas.' },
      { phrase: '不成立', reading: 'ふせいりつ', meaning: 'No concretado / Fallido', context: 'Cuando un proceso no llega a su fin exitosamente.' },
      { phrase: '延滞金', reading: 'えんたいきん', meaning: 'Cargos por mora / Interés de demora', context: 'Multa por pagar tarde.' },
      { phrase: '恐れがあります', reading: 'おそれがあります', meaning: 'Existe el riesgo de...', context: 'Expresión para advertir sobre una consecuencia negativa.' }
    ],
    exercises: []
  },
  {
    id: 'b7',
    title: 'Identificación Personal (本人確認の実施)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1512428559083-5607e3096b6c?auto=format&fit=crop&q=80&w=400',
    transcription: '住所変更の際は、在留カード等の本人確認書類を提示の上、窓口にて所定の届出書をご提出ください。',
    translation: 'Al cambiar de dirección, presente documentos de identificación como su tarjeta de residencia y entregue el formulario de notificación prescrito en la ventanilla.',
    explanations: [
      { phrase: '住所変更', reading: 'じゅうしょへんこう', meaning: 'Cambio de dirección', context: 'Trámite necesario al mudarse.' },
      { phrase: '在留カード', reading: 'ざいりゅうかーど', meaning: 'Tarjeta de residencia', context: 'ID principal para extranjeros en Japón.' },
      { phrase: '本人確認書類', reading: 'ほんにんかくにんしょるい', meaning: 'Documentos de identidad', context: 'Papeles que prueban quién eres.' },
      { phrase: '提示', reading: 'ていじ', meaning: 'Presentación / Mostrar', context: 'Enseñar el documento al encargado.' },
      { phrase: '所定', reading: 'しょてい', meaning: 'Prescrito / Determinado', context: 'Usar el formato específico del banco.' },
      { phrase: '届出書', reading: 'とどけでしょ', meaning: 'Formulario de notificación', context: 'Documento para informar de un cambio.' }
    ],
    exercises: []
  },
  {
    id: 'b8',
    title: 'Tasa de Cambio (為替変動リスク)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1611974714158-f8a7506972e3?auto=format&fit=crop&q=80&w=400',
    transcription: '外貨預金には為替変動リスクがあり、円貨ベースでの元本割れが生じる可能性があります。',
    translation: 'Los depósitos en moneda extranjera conllevan riesgos de fluctuación cambiaria y existe la posibilidad de que el capital caiga por debajo del valor original en yenes.',
    explanations: [
      { phrase: '外貨預金', reading: 'がいかよきん', meaning: 'Depósito en moneda extranjera', context: 'Ahorrar en dólares, euros, etc.' },
      { phrase: '為替変動', reading: 'かわせへんどう', meaning: 'Fluctuación cambiaria', context: 'Cambios en el valor de las monedas.' },
      { phrase: '円貨ベース', reading: 'えんかべーす', meaning: 'Basado en yenes', context: 'Calcular el valor final en la moneda local japonesa.' },
      { phrase: '元本割れ', reading: 'がんぽんわれ', meaning: 'Pérdida de capital / Valor menor al principal', context: 'Cuando el valor actual es menor que lo invertido inicialmente.' },
      { phrase: '生じる', reading: 'しょうじる', meaning: 'Ocurrir / Producirse', context: 'Verbo formal para indicar que algo sucede.' }
    ],
    exercises: []
  },
  {
    id: 'b9',
    title: 'Seguridad en Línea (二段階認証)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    transcription: '不正ログインを防ぐため、ワンタイムパスワードによる二段階認証を推奨しております。',
    translation: 'Para evitar el inicio de sesión no autorizado, recomendamos la autenticación de dos pasos mediante una contraseña de un solo uso.',
    explanations: [
      { phrase: '不正ログイン', reading: 'ふせいろぐいん', meaning: 'Inicio de sesión no autorizado', context: 'Acceso ilegal a tu cuenta.' },
      { phrase: '防ぐ', reading: 'ふせぐ', meaning: 'Prevenir / Evitar', context: 'Tomar medidas de seguridad.' },
      { phrase: '推奨', reading: 'すいしょう', meaning: 'Recomendación', context: 'Sugerir algo por ser beneficioso.' },
      { phrase: '二段階認証', reading: 'にだんかいにんしょう', meaning: 'Autenticación de dos pasos', context: 'Sistema extra de seguridad.' }
    ],
    exercises: []
  },
  {
    id: 'b10',
    title: 'Actualización de Libreta (通帳繰越)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400',
    transcription: '記帳欄が満杯になりましたら、ATMにて通帳繰越の手続きを行ってください。',
    translation: 'Cuando las columnas de registro estén llenas, realice el trámite de renovación de libreta en el cajero automático (ATM).',
    explanations: [
      { phrase: '記帳欄', reading: 'きちょうらん', meaning: 'Columnas de registro', context: 'Espacio donde se imprimen los movimientos en la libreta.' },
      { phrase: '満杯', reading: 'まんぱい', meaning: 'Lleno', context: 'Cuando no queda más espacio.' },
      { phrase: '通帳繰越', reading: 'つうちょうくりこし', meaning: 'Renovación de libreta', context: 'Obtener una libreta nueva cuando la vieja se acaba.' }
    ],
    exercises: []
  },
  {
    id: 'b11',
    title: 'Impuesto sobre Interés (源泉分離課税)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=400',
    transcription: '預金利息には一律20.315％の源泉分離課税が適用され、税引き後の金額が口座に入金されます。',
    translation: 'A los intereses de los depósitos se les aplica un impuesto de retención del 20.315% y el monto tras impuestos se deposita en la cuenta.',
    explanations: [
      { phrase: '一律', reading: 'いちりつ', meaning: 'Uniforme / Por igual', context: 'Tasa fija para todos.' },
      { phrase: '源泉分離課税', reading: 'げんせんぶんりかぜい', meaning: 'Impuesto de retención separado', context: 'Impuesto que el banco retiene automáticamente antes de pagarte.' },
      { phrase: '税引き後', reading: 'ぜいびきご', meaning: 'Después de impuestos / Neto', context: 'Lo que queda tras pagar al estado.' },
      { phrase: '入金', reading: 'にゅうきん', meaning: 'Depósito / Ingreso', context: 'Entrada de dinero a la cuenta.' }
    ],
    exercises: []
  },
  {
    id: 'b12',
    title: 'Mantenimiento de ATM (保守点検のお知らせ)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400',
    transcription: 'システム保守点検のため、下記の日時はATMおよびインターネットバンキングが一時休止いたします。',
    translation: 'Debido al mantenimiento del sistema, los cajeros automáticos (ATM) y la banca por internet estarán temporalmente fuera de servicio en el horario indicado abajo.',
    explanations: [
      { phrase: '保守点検', reading: 'ほしゅてんけん', meaning: 'Mantenimiento e inspección', context: 'Revisión técnica periódica.' },
      { phrase: '日時', reading: 'にちじ', meaning: 'Fecha y hora', context: 'Momento específico programado.' },
      { phrase: '一時休止', reading: 'いちじきゅうし', meaning: 'Pausa temporal / Fuera de servicio', context: 'Interrupción corta del servicio.' }
    ],
    exercises: []
  },
  {
    id: 'b13',
    title: 'Heredar una Cuenta (相続の手続き)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400',
    transcription: '名義人が亡くなられた場合、口座は凍結されます。相続人全員の同意書と遺産分割協議書をご用意ください。',
    translation: 'En caso de fallecimiento del titular, la cuenta será congelada. Por favor, prepare el consentimiento de todos los herederos y el acuerdo de división de la herencia.',
    explanations: [
      { phrase: '名義人', reading: 'めいぎにん', meaning: 'Titular de la cuenta', context: 'Persona a nombre de quien está la cuenta.' },
      { phrase: '凍結', reading: 'とうけつ', meaning: 'Congelación / Bloqueo', context: 'Impedir cualquier movimiento de dinero.' },
      { phrase: '相続人', reading: 'そうぞくにん', meaning: 'Heredero', context: 'Persona que recibe los bienes tras un fallecimiento.' },
      { phrase: '同意書', reading: 'どういしょ', meaning: 'Documento de consentimiento', context: 'Papel firmado aceptando algo.' },
      { phrase: '遺産分割協議書', reading: 'いさんぶんかつきょうぎしょ', meaning: 'Acuerdo de división de herencia', context: 'Documento legal que detalla cómo se reparten los bienes.' }
    ],
    exercises: []
  },
  {
    id: 'b14',
    title: 'Límite de Retiro (引き出し限度額の変更)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400',
    transcription: '防犯上の理由から、一回あたりの引き出し限度額を変更することをお勧めします。',
    translation: 'Por razones de seguridad, le recomendamos cambiar el límite de retiro por transacción.',
    explanations: [
      { phrase: '防犯上', reading: 'ぼうはんじょう', meaning: 'Por seguridad / Prevención de delitos', context: 'Razón para proteger tus fondos.' },
      { phrase: '引き出し', reading: 'ひきだし', meaning: 'Retiro de efectivo', context: 'Sacar dinero del cajero.' },
      { phrase: 'お勧めします', reading: 'おすすします', meaning: 'Recomendar', context: 'Forma cortés de dar un consejo.' }
    ],
    exercises: []
  },
  {
    id: 'b15',
    title: 'Garantía de Depósitos (預金保険制度)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400',
    transcription: '当行が破綻した場合でも、預金保険制度により元本1,000万円とその利息までが保護されます。',
    translation: 'Incluso si el banco quiebra, hasta 10 millones de yenes de capital y sus intereses están protegidos por el sistema de seguro de depósitos.',
    explanations: [
      { phrase: '破綻', reading: 'はたん', meaning: 'Quiebra / Bancarrota', context: 'Cuando una empresa no puede pagar sus deudas.' },
      { phrase: '預金保険制度', reading: 'よきんほけんせいど', meaning: 'Sistema de seguro de depósitos', context: 'Seguro del gobierno para proteger a los ahorradores.' },
      { phrase: '保護', reading: 'ほご', meaning: 'Protección / Amparo', context: 'Asegurar que el dinero no se pierda.' }
    ],
    exercises: []
  },
  {
    id: 'b16',
    title: 'Préstamo para Autos (マイカーローンの金利)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400',
    transcription: 'キャンペーン期間中は特別低金利が適用されます。固定金利か変動金利かを選択可能です。',
    translation: 'Durante el periodo de campaña se aplicará una tasa de interés baja especial. Puede elegir entre interés fijo o interés variable.',
    explanations: [
      { phrase: '特別低金利', reading: 'とくべつていきんり', meaning: 'Tasa de interés baja especial', context: 'Oferta temporal con mejores condiciones.' },
      { phrase: '固定金利', reading: 'こていきんり', meaning: 'Interés fijo', context: 'Tasa que no cambia durante el préstamo.' },
      { phrase: '変動金利', reading: 'へんどうきんり', meaning: 'Interés variable', context: 'Tasa que cambia según el mercado.' }
    ],
    exercises: []
  },
  {
    id: 'b17',
    title: 'Crédito y Recompensa (ポイント還元)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400',
    transcription: '提携店舗でのご利用により、決済額の1％分がポイントとして還元され、次回の支払いに充当できます。',
    translation: 'Al usarlo en tiendas afiliadas, el 1% del monto pagado se reembolsa en puntos, los cuales pueden aplicarse al siguiente pago.',
    explanations: [
      { phrase: '提携店舗', reading: 'ていけいてんぽ', meaning: 'Tiendas afiliadas / asociadas', context: 'Negocios con convenio con el banco/tarjeta.' },
      { phrase: '決済額', reading: 'けっさいがく', meaning: 'Monto del pago / liquidación', context: 'Cantidad total de la compra.' },
      { phrase: '還元', reading: 'かんげん', meaning: 'Reembolso / Devolución', context: 'Recibir algo de vuelta tras un gasto.' },
      { phrase: '充当', reading: 'じゅうとう', meaning: 'Asignación / Aplicación de fondos', context: 'Usar los puntos para cubrir un gasto.' }
    ],
    exercises: []
  },
  {
    id: 'b18',
    title: 'Tarifa por Ventanilla (窓口利用手数料)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b7c?auto=format&fit=crop&q=80&w=400',
    transcription: '窓口での現金振込は、ATMをご利用の場合に比べて手数料が高くなりますのでご了承ください。',
    translation: 'Tenga en cuenta que las transferencias en efectivo en ventanilla tienen una comisión más alta que si se realizan a través de un cajero automático (ATM).',
    explanations: [
      { phrase: '現金振込', reading: 'げんきんふりこみ', meaning: 'Transferencia en efectivo', context: 'Enviar dinero sin usar una cuenta directamente.' },
      { phrase: '比べて', reading: 'くらべて', meaning: 'En comparación con...', context: 'Estructura comparativa.' },
      { phrase: '手数料', reading: 'てすうりょう', meaning: 'Comisión / Cargo por servicio', context: 'Lo que el banco cobra por el trámite.' },
      { phrase: 'ご了承ください', reading: 'ごりょうしょうください', meaning: 'Por favor, comprenda / Acepte', context: 'Expresión formal para informar de una regla.' }
    ],
    exercises: []
  },
  {
    id: 'b19',
    title: 'Pago de Impuestos (公金受取口座の登録)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400',
    transcription: '還付金や給付金の迅速な受取のため、マイナポータルにて公金受取口座の登録が推奨されています。',
    translation: 'Para recibir reembolsos y subsidios de manera rápida, se recomienda registrar su cuenta bancaria para fondos públicos en el portal Myna.',
    explanations: [
      { phrase: '還付金', reading: 'かんぷきん', meaning: 'Reembolso de impuestos', context: 'Dinero devuelto tras el ajuste de impuestos.' },
      { phrase: '給付金', reading: 'きゅうふきん', meaning: 'Subsidio / Ayuda económica', context: 'Dinero otorgado por el gobierno.' },
      { phrase: '迅速', reading: 'じんそく', meaning: 'Rápido / Veloz', context: 'Sin demora administrativa.' },
      { phrase: '公金受取口座', reading: 'こうきんうけとりこうざ', meaning: 'Cuenta de recepción de fondos públicos', context: 'Cuenta vinculada al gobierno para pagos.' }
    ],
    exercises: []
  },
  {
    id: 'b20',
    title: 'Certificado de Saldo (残高証明書の発行)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    transcription: 'ビザ更新等で残高証明書が必要な場合は、前日までの残高を基準として即日発行が可能です。',
    translation: 'Si necesita un certificado de saldo para la renovación de visa u otros trámites, es posible emitirlo el mismo día basándose en el saldo del día anterior.',
    explanations: [
      { phrase: '残高証明書', reading: 'ざんだかしょうめいしょ', meaning: 'Certificado de saldo', context: 'Prueba oficial de cuánto dinero tienes.' },
      { phrase: '基準として', reading: 'きじゅんとして', meaning: 'Basándose en...', context: 'Criterio para el cálculo.' },
      { phrase: '即日発行', reading: 'そくじつはっこう', meaning: 'Emisión el mismo día', context: 'Trámite rápido que no requiere espera de días.' }
    ],
    exercises: []
  },
  {
    id: 'b21',
    title: 'Débito Inmediato (デビットカードの仕組み)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=400',
    transcription: 'デビットカードは決済と同時に口座から即時引き落とされるため、使いすぎを防ぐのに最適です。',
    translation: 'Dado que las tarjetas de débito se cargan instantáneamente en la cuenta al momento del pago, son ideales para evitar gastos excesivos.',
    explanations: [
      { phrase: '同時', reading: 'どうじ', meaning: 'Al mismo tiempo', context: 'Sincronía entre compra y cargo.' },
      { phrase: '即時', reading: 'そくじ', meaning: 'Instantáneo', context: 'Sin retraso temporal.' },
      { phrase: '引き落とされる', reading: 'ひきおとされる', meaning: 'Ser debitado / cargado', context: 'Voz pasiva de sacar dinero de la cuenta.' },
      { phrase: '最適', reading: 'さいてき', meaning: 'Lo más adecuado / Ideal', context: 'Mejor opción para un fin.' }
    ],
    exercises: []
  },
  {
    id: 'b22',
    title: 'Contrato de Préstamo (金銭消費貸借契約)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1589216532372-1c2a13f48d52?auto=format&fit=crop&q=80&w=400',
    transcription: '金銭消費貸借契約を締結する際、遅延損害金や連帯保証人の有無について十分確認してください。',
    translation: 'Al firmar un contrato de préstamo, asegúrese de revisar cuidadosamente los cargos por mora y la existencia de un avalista solidario.',
    explanations: [
      { phrase: '金銭消費貸借契約', reading: 'きんせんしょうひたいしゃくけいやく', meaning: 'Contrato de préstamo de dinero', context: 'Nombre legal formal para un préstamo.' },
      { phrase: '締結', reading: 'ていけつ', meaning: 'Firma / Conclusión de contrato', context: 'Cerrar un acuerdo legal.' },
      { phrase: '遅延損害金', reading: 'ちえんそんがいきん', meaning: 'Indemnización por retraso', context: 'Multa por no pagar a tiempo.' },
      { phrase: '連帯保証人', reading: 'れんたいほしょうにん', meaning: 'Avalista solidario', context: 'Persona que asume la deuda si el titular no paga.' }
    ],
    exercises: []
  },
  {
    id: 'b23',
    title: 'Cajero sin Tarjeta (スマホATM)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1621416848446-991125c75b06?auto=format&fit=crop&q=80&w=400',
    transcription: '専用アプリを起動し、ATMに表示されるQRコードを読み取ることで、カードなしで入出金が可能です。',
    translation: 'Iniciando la aplicación dedicada y escaneando el código QR mostrado en el cajero automático (ATM), es posible realizar depósitos y retiros sin necesidad de tarjeta.',
    explanations: [
      { phrase: '専用アプリ', reading: 'せんようあぷり', meaning: 'Aplicación dedicada', context: 'App específica del banco.' },
      { phrase: '起動', reading: 'きどう', meaning: 'Inicio / Lanzamiento', context: 'Abrir un programa o app.' },
      { phrase: '入出金', reading: 'にゅうしゅつきん', meaning: 'Depósitos y retiros', context: 'Término que engloba meter y sacar dinero.' }
    ],
    exercises: []
  },
  {
    id: 'b24',
    title: 'Tasa de Interés Variable (変動金利の見直し)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=400',
    transcription: '市場金利の動向に基づき、半年に一度、適用金利の見直しが行われます。返済額が変動する場合があります。',
    translation: 'Basándose en las tendencias de las tasas de interés del mercado, se revisa la tasa aplicada una vez cada seis meses. El monto de la cuota de reembolso puede variar.',
    explanations: [
      { phrase: '市場金利', reading: 'しじょうきんり', meaning: 'Tasa de interés de mercado', context: 'El costo del dinero en el sistema financiero global.' },
      { phrase: '動向', reading: 'どうこう', meaning: 'Tendencia / Dirección', context: 'Hacia dónde se mueven los valores.' },
      { phrase: '半年に一度', reading: 'はんとしにいちど', meaning: 'Una vez cada seis meses', context: 'Frecuencia de la revisión.' },
      { phrase: '見直し', reading: 'みなおし', meaning: 'Revisión / Reevaluación', context: 'Actualizar las condiciones.' },
      { phrase: '返済額', reading: 'へんさいがく', meaning: 'Monto del reembolso / cuota', context: 'Lo que pagas cada mes por el préstamo.' }
    ],
    exercises: []
  },
  {
    id: 'b25',
    title: 'Depósito a la Vista (普通預金の特徴)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400',
    transcription: '普通預金は流動性が高く、いつでも出し入れ可能ですが、定期預金と比較して金利は低く設定されています。',
    translation: 'Los depósitos ordinarios tienen una alta liquidez y permiten depósitos y retiros en cualquier momento, pero la tasa de interés es menor en comparación con los depósitos a plazo fijo.',
    explanations: [
      { phrase: '普通預金', reading: 'ふつうよきん', meaning: 'Depósito ordinario / Cuenta corriente', context: 'Cuenta bancaria estándar.' },
      { phrase: '流動性', reading: 'りゅうどうせい', meaning: 'Liquidez', context: 'Facilidad para convertir activos en efectivo.' },
      { phrase: '出し入れ可能', reading: 'だしいれかのう', meaning: 'Disponible para depósitos y retiros', context: 'Puedes usar el dinero libremente.' },
      { phrase: '比較して', reading: 'ひかくして', meaning: 'En comparación con...', context: 'Estructura comparativa formal.' }
    ],
    exercises: []
  },
  {
    id: 'b26',
    title: 'Phishing (フィッシング詐欺)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    transcription: '銀行を装った偽メールにより、個人情報を盗み取る詐欺が急増しています。不審なリンクは絶対にクリックしないでください。',
    translation: 'Están aumentando rápidamente las estafas que roban información personal mediante correos falsos que se hacen pasar por bancos. No haga clic bajo ninguna circunstancia en enlaces sospechosos.',
    explanations: [
      { phrase: '装った', reading: 'よそおった', meaning: 'Disfrazado de / Fingiendo ser', context: 'Hacerse pasar por otra entidad.' },
      { phrase: '偽メール', reading: 'にせめーる', meaning: 'Correo falso / phishing', context: 'Emails engañosos.' },
      { phrase: '盗み取る', reading: 'ぬすみとる', meaning: 'Robar / Sustraer', context: 'Quitar algo sin permiso.' },
      { phrase: '不審な', reading: 'ふしんな', meaning: 'Sospechoso', context: 'Que genera duda o desconfianza.' }
    ],
    exercises: []
  },
  {
    id: 'b27',
    title: 'Caja de Seguridad (貸金庫の利用)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=400',
    transcription: '権利書や貴金属などの貴重品を安全に保管するため、貸金庫のご利用をご検討ください。年間利用料が必要です。',
    translation: 'Para guardar de forma segura objetos de valor como escrituras o metales preciosos, considere el uso de una caja fuerte de alquiler. Se requiere el pago de una tarifa anual.',
    explanations: [
      { phrase: '権利書', reading: 'けんりしょ', meaning: 'Escritura / Título de propiedad', context: 'Documento legal de posesión.' },
      { phrase: '貴重品', reading: 'きちょうひん', meaning: 'Objetos de valor', context: 'Cosas caras o importantes.' },
      { phrase: '保管', reading: 'ほかん', meaning: 'Almacenamiento / Custodia', context: 'Guardar algo bajo llave.' },
      { phrase: '貸金庫', reading: 'かしきんこ', meaning: 'Caja fuerte de alquiler', context: 'Servicio del banco para guardar bienes.' }
    ],
    exercises: []
  },
  {
    id: 'b28',
    title: 'Bloqueo de Cuenta (暗証番号の相違)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=400',
    transcription: '暗証番号の入力を規定回数以上間違えると、セキュリティ上の理由からカードが一時無効となります。',
    translation: 'Si introduce el código PIN incorrectamente más veces de las permitidas, la tarjeta quedará temporalmente invalidada por razones de seguridad.',
    explanations: [
      { phrase: '暗証番号', reading: 'あんしょうばんごう', meaning: 'Código PIN / Contraseña numérica', context: 'Número secreto para usar la tarjeta.' },
      { phrase: '規定回数', reading: 'きていかいすう', meaning: 'Número de veces reglamentario', context: 'Límite de intentos permitidos.' },
      { phrase: '相違', reading: 'そうい', meaning: 'Diferencia / Error', context: 'Cuando lo introducido no coincide con lo registrado.' },
      { phrase: '無効', reading: 'むこう', meaning: 'Inválido / Nulo', context: 'Estado en el que algo deja de funcionar.' }
    ],
    exercises: []
  },
  {
    id: 'b29',
    title: 'Cierre de Cuenta (口座解約の案内)',
    category: 'Finanzas',
    difficulty: 'N2',
    originalImage: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=400',
    transcription: '帰国等の理由で口座を解約される場合は、通帳、印鑑、在留カードをお持ちの上、窓口へお越しください。',
    translation: 'Si desea cerrar su cuenta por motivos como el regreso a su país, acuda a la ventanilla con su libreta, sello (inkan) y tarjeta de residencia.',
    explanations: [
      { phrase: '帰国', reading: 'きこく', meaning: 'Regreso al país de origen', context: 'Volver a casa definitivamente.' },
      { phrase: '解約', reading: 'かいやく', meaning: 'Cancelación de contrato / cierre', context: 'Terminar la relación con el banco.' },
      { phrase: '印鑑', reading: 'いんかん', meaning: 'Sello personal', context: 'Sello usado para transacciones oficiales en Japón.' }
    ],
    exercises: []
  },
  {
    id: 'b30',
    title: 'Puntaje de Crédito (信用情報の照会)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=400',
    transcription: 'クレジットカードの延滞履歴は、指定信用情報機関に記録され、将来の融資審査に影響を及ぼします。',
    translation: 'El historial de morosidad en tarjetas de crédito se registra en agencias de información crediticia designadas y afectará las evaluaciones de préstamos en el futuro.',
    explanations: [
      { phrase: '延滞履歴', reading: 'えんたいりれき', meaning: 'Historial de morosidad / retrasos', context: 'Registro de pagos no realizados a tiempo.' },
      { phrase: '指定信用情報機関', reading: 'していしんようじょうほうきかん', meaning: 'Agencia de información crediticia designada', context: 'Entidad que rastrea el comportamiento crediticio.' },
      { phrase: '影響を及ぼす', reading: 'えいきょうをおよぼす', meaning: 'Ejercer influencia / Afectar', context: 'Tener un impacto significativo en algo.' }
    ],
    exercises: []
  },
  {
    id: 'b31',
    title: 'Tasa Efectiva (実質年率)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=400',
    transcription: '実質年率には利息のほか、保証料や手数料が含まれており、借入の際の本当のコストを示します。',
    translation: 'La tasa anual efectiva incluye, además del interés, las primas de garantía y las comisiones, mostrando el costo real del préstamo.',
    explanations: [
      { phrase: '実質年率', reading: 'じっしつねんりつ', meaning: 'Tasa anual efectiva (TAE)', context: 'Costo total del crédito expresado en porcentaje.' },
      { phrase: '保証料', reading: 'ほしょうりょう', meaning: 'Prima de garantía', context: 'Pago para asegurar el préstamo.' },
      { phrase: '借入', reading: 'かりいれ', meaning: 'Préstamo / Deuda tomada', context: 'El acto de pedir dinero prestado.' }
    ],
    exercises: []
  },
  {
    id: 'b32',
    title: 'Protección de Datos (個人情報保護方針)',
    category: 'Finanzas',
    difficulty: 'N1',
    originalImage: 'https://images.unsplash.com/photo-1512428559083-5607e3096b6c?auto=format&fit=crop&q=80&w=400',
    transcription: '当行は、個人情報保護法に基づき、お客様からお預かりした情報を厳重に管理し、目的外利用はいたしません。',
    translation: 'Basándonos en la Ley de Protección de Datos Personales, gestionamos estrictamente la información confiada por nuestros clientes y no la utilizamos para fines distintos a los previstos.',
    explanations: [
      { phrase: '保護法', reading: 'ほごほう', meaning: 'Ley de protección', context: 'Marco legal que resguarda derechos.' },
      { phrase: '厳重に管理', reading: 'げんじゅうにかんり', meaning: 'Gestionar estrictamente', context: 'Trato muy cuidadoso de la información.' },
      { phrase: '目的外利用', reading: 'もくてきがいりよう', meaning: 'Uso para fines no previstos', context: 'Utilizar datos para algo que no se avisó al cliente.' }
    ],
    exercises: []
  }
];
