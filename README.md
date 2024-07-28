# Face Detection App

Esta es una aplicación de detección y análisis facial que utiliza React y `face-api.js` para detectar rostros, edades, géneros y emociones en imágenes cargadas por el usuario.

## Características

- **Carga de Imágenes**: Permite al usuario cargar una imagen desde su dispositivo.
- **Detección Facial**: Detecta rostros en la imagen utilizando modelos preentrenados de `face-api.js`.
- **Análisis de Edad y Género**: Proporciona estimaciones de edad y género para cada rostro detectado.
- **Detección de Emociones**: Identifica la emoción predominante en cada rostro detectado.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Material-UI**: Biblioteca de componentes de React para un diseño visual consistente.
- **face-api.js**: Biblioteca para la detección y análisis de rostros en el navegador utilizando TensorFlow.js.

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local.

### Requisitos Previos

- Node.js (>=14.x)
- npm (>=6.x)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/AnthonyQuiranza/face-detection-app.git
cd face-detection-app
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Ejecutar la Aplicación

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
face-detection-app/
├── public/                # Archivos públicos (index.html, favicon, etc.)
├── src/                   # Código fuente de la aplicación
│   ├── components/        # Componentes reutilizables
│   │   ├── ImageUpload.js
│   │   └── ResultDisplay.js
│   ├── services/          # Servicios para la lógica de negocio
│   │   └── faceRecognitionService.js
│   ├── App.js             # Componente principal de la aplicación
│   ├── index.js           # Punto de entrada de la aplicación
│   ├── App.css            # Estilos para el componente App
│   ├── index.css          # Estilos globales
│   └── ...                # Otros archivos de configuración y pruebas
├── package.json           # Dependencias y scripts del proyecto
├── package-lock.json      # Archivo de lock de npm
└── README.md              # Documentación del proyecto
```

## Uso de la Aplicación

1. **Cargar una Imagen**: Haz clic en el botón "Subir Imagen" y selecciona una imagen desde tu dispositivo.
2. **Ver Resultados**: Una vez que la imagen se haya cargado y analizado, los resultados aparecerán en la sección "Resultados".

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna mejora, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
