import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

// Aqui traigo el ruteo
import ruteo from './router/index.js'

const app = express()

const allowedOrigins = [
    '*',  // Vamos a dejar pasar todo, no es lo adecuado pero bueno    
    'http://localhost:5173',
    'http://localhost:5174'
];

const corsOptions = {
    // origin es una función que decide si deja pasar la petición.
    origin: (origin, callback) => {
        // Las peticiones sin origin (como curl o apps móviles) se permiten.
        if (!origin) return callback(null, true);

        // Si el vector contiene '*', permitimos todos los orígenes.
        if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        console.warn(`Origen no permitido por CORS: ${origin}`);
        return callback(new Error('No permitido por CORS'));
    },
    credentials: true,
};


app.use(cors(corsOptions));

app.use(morgan('dev'))   
app.use(express.json())   
app.use(express.urlencoded({ extended: true })) 


app.use('/api', ruteo)

export default app