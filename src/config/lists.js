export const ALL_IN_ONE = [
    {
        number: 1,
        title: '¡Controla tus campañas!',
        description_one: 'Maneja todas tus campañas de marketing en una sola plataforma',
        description_two: 'Realiza el seguimiento del desempeño que estás teniendo en tu marca'
    },
    {
        number: 2,
        title: '¡Maneja tu estrategia!',
        description_one: 'Gestiona tu plan de marketing en una sola plataforma',
        description_two: 'Recibe recomendaciones para alcanzar más clientes que harán crecer tu negocio'
    },
    {
        number: 3,
        title: '¡Conoce tus datos!',
        description_one: 'Analiza el resultado de tu campaña y el comportamiento de tus clientes',
        description_two: 'Obtén los enfoques que debes tener para guiar a tu negocio al crecimiento y cumplimiento de objetivos'
    }
]

export const MAKE_IT_HAPPEN = [
    {
        img: 'point.jpg',
        title: 'Decide a quién quieres llegar',
        description: 'Define la segmentación de tu campaña y nosotros nos adaptamos al objetivo de tu marca'
    },
    {
        img: 'phone.jpg',
        title: 'Elige dónde quieres estar',
        description: 'Selecciona los medios donde podrás encontrar clientes potenciales y generar un mayor reconocimiento de marca'
    },
    {
        img: 'computer.jpg',
        title: 'Añade los creativos',
        description: 'Agrega los videos e imágenes que le asegurarán una mayor visibilidad a tu marca'
    }
]

export const MEDIA_IMAGES = [
    { name: 'mastek', src: 'mastek-w.svg' },
    { name: 'tyn', src: 'tyn-w.svg' },
    { name: 'gerente', src: 'gerente-w.svg' },
    { name: 'hsb', src: 'hsb-w.svg' },
    { name: 'latinpyme', src: 'latinpyme-w.svg' },
    { name: 'acis', src: 'acis-w.svg' },
    { name: 'tecnogus', src: 'tecnogus-w.svg' },
    { name: 'valora', src: 'valora-w.svg' }
]

export const MEDIOS_IMAGES = [
    { name: 'la.republica', src: 'la.republica.svg' },
    { name: 'caracol', src: 'caracol.svg' },
    { name: 'minuto.30', src: 'minuto.30.svg' },
    { name: 'pulzo', src: 'pulzo.svg' },
    { name: 'el.tiempo', src: 'el.tiempo.svg' },
    { name: 'valora', src: 'valora.svg' },
    { name: 'publimetro', src: 'publimetro.svg' },
    { name: 'el.colombiano', src: 'el.colombiano.svg' },
    { name: 'portafolio', src: 'portafolio.svg' },
    { name: 'tiktok', src: 'tiktok.svg' },
    { name: 'spotify', src: 'spotify.svg' },
    { name: 'shock', src: 'shock.svg' },
    { name: 'el.espectador', src: 'el.espectador.svg' },
    { name: 'fondo.banner', src:'fondo.banner.png'},
    { name: 'imagen.banner', src:'phone.image.png'}
 
  
]



export const customConfig = {
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
}
/*endpoint */
export const BASE_URL = 'https://shareflow-api-prod.up.railway.app/v1/site/invitation'