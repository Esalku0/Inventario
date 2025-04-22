// Importamos los módulos necesarios
const express = require("express"); // Framework para crear el servidor y manejar rutas.
const mysql = require("mysql"); // Módulo para conectar a la base de datos MySQL.
const cors = require("cors"); // Permite realizar peticiones desde distintos dominios (CORS).
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Para generar tokens JWT
const http = require('http');

const path = require('path');

const app = express(); // Inicializamos la aplicación de Express.
app.use(cors()); // Habilitamos CORS para permitir el acceso desde otros orígenes.
app.use(express.json()); // Permite procesar datos en formato JSON que llegan en las solicitudes.

const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 0;

// 🔌 Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost", // Dirección del servidor de la base de datos (local en este caso).
  user: "root", // Usuario de la base de datos.
  password: "", // Contraseña del usuario.
  database: "inventario" // Nombre de la base de datos a utilizar.
});

// Establecemos la conexión con la base de datos.
db.connect(err => {
  if (err) throw err; // Si hay un error, se muestra y se detiene el proceso.
  console.log("✅ Conectado a la base de datos"); // Mensaje de confirmación en consola.
});

// 🧠 Función genérica para rutas GET dinámicas con filtros
function createFilteredGetRoute(table, idField) {

  // Ruta GET para obtener todos los registros de una tabla con opción de filtro dinámico
  app.get(`/${table}`, (req, res) => {
    let query = `SELECT * FROM ${table}`; // Base de la consulta SQL
    const values = []; // Array para almacenar los valores de los filtros.

    const searchParams = Object.keys(req.query); // Obtiene los parámetros de búsqueda de la URL.
    if (searchParams.length > 0) { // Verifica si hay filtros en la petición.
      //BASICAMENTE ESTO ES LO SIGUIENTE, SI YO LE PASOUNA URL ASI http://localhost:3000/categories?name=Electrónica&description=Dispositivos
      //me va a pillar los campos y me  los va a meter en una array diferente sin tocarme la url
      //
      const conditions = searchParams.map(key => {
        
        values.push(`%${req.query[key]}%`); // Escapa y agrega el valor al array.
        return `${key} LIKE ?`; // Agrega la condición LIKE para el filtro.
      });
      query += " WHERE " + conditions.join(" AND "); // Construimos las condiciones en la consulta SQL.
    }

    // Ejecutamos la consulta en la base de datos.
    db.query(query, values, (err, results) => {
      console.log(query);
      if (err) return res.status(500).send("Error en la consulta a la base de datos."); // Manejo de errores.
      res.json(results); // Respondemos con los resultados obtenidos.
    });
  });

  // Ruta GET para obtener un registro específico por su ID
  app.get(`/${table}/:id`, (req, res) => {
    db.query(`SELECT * FROM ${table} WHERE ${idField} = ?`, [req.params.id], (err, result) => {
      if (err) return res.status(500).send(err); // Manejo de errores en la consulta.
      res.json(result[0]); // Respondemos con el primer resultado obtenido.
    });
  });
  // Ruta POST para insertar un nuevo registro en la tabla
  app.post(`/${table}`, (req, res) => {
    console.log("xivato1");
    db.query(`INSERT INTO ${table} SET ?`, req.body, (err, result) => {
      if (err) return res.status(500).send(err); // Manejo de errores al insertar.
      res.json({ id: result.insertId }); // Respondemos con el ID del registro insertado.
    });
  });

  // Ruta PUT para actualizar un registro existente por su ID
  app.put(`/${table}/:id`, (req, res) => {
    db.query(`UPDATE ${table} SET ? WHERE ${idField} = ?`, [req.body, req.params.id], err => {
      if (err) return res.status(500).send(err); // Manejo de errores al actualizar.
      res.sendStatus(200); // Enviamos un estado de éxito sin contenido.
    });
  });

  // Ruta DELETE para eliminar un registro por su ID
  app.delete(`/${table}/:id`, (req, res) => {
    db.query(`DELETE FROM ${table} WHERE ${idField} = ?`, [req.params.id], err => {
      if (err) return res.status(500).send(err); // Manejo de errores al eliminar.
      res.sendStatus(200); // Enviamos un estado de éxito sin contenido.
    });
  });
}

// 🧩 Tablas y sus claves primarias para la generación dinámica de rutas
const tablas = [
  { nombre: "articles", clave: "id" },
  { nombre: "categories", clave: "idCategory" },
  { nombre: "departamentos", clave: "idDepartamento" },
  { nombre: "proyectos", clave: "idProyecto" },
  { nombre: "roles", clave: "idRol" },
  { nombre: "types", clave: "idType" },
  { nombre: "ubicaciones", clave: "id" },
  { nombre: "usuarios", clave: "id" },
  { nombre: "viewmovements", clave: "id" }
];

// 🔄 Creación de todas las rutas dinámicamente
tablas.forEach(t => createFilteredGetRoute(t.nombre, t.clave));


// Ruta POST para insertar un nuevo artículo y generar su movimiento de entrada
app.post("/articles-add", (req, res) => {
  console.log("📌 Insertando nuevo artículo...");
  
  db.query("INSERT INTO articles SET ?", req.body, (err, result) => {
    if (err) return res.status(500).send(err); // 🚨 Manejo de errores
    
    const newArticleId = result.insertId; // 🔥 Obtiene el ID del artículo recién insertado

    // 📌 Crear el movimiento de entrada automático
    const movementData = {
      idArticle: newArticleId,
      entryDate: new Date(), // 🗓 Fecha actual
      stock: req.body.stock, // 🔢 Stock inicial
      quantityEntry: req.body.stock, // 🔢 Cantidad ingresada
      location: req.body.location || "Sin ubicación", // 📍 Ubicación opcional
      material: req.body.material || "No especificado",
      model: req.body.modelo || "Desconocido"
    };

    db.query("INSERT INTO viewmovements SET ?", movementData, (err) => {
      if (err) return res.status(500).send(err); // 🚨 Manejo de errores
      
      console.log("✅ Movimiento de entrada registrado");
      res.json({ id: newArticleId, message: "Artículo añadido y movimiento registrado correctamente" });
    });
  });
});



// Ruta POST para registrar usuarios con contraseñas encriptadas

app.post("/registro", async (req, res) => {
  const { nombre, apellidos, email, contrasenya,idRol,idDepartamento } = req.body;

  console.log("Datos recibidos:", req.body);

  if (!nombre || !apellidos || !email || !contrasenya) {
    console.error("Faltan campos obligatorios");
    return res.status(400).send("Todos los campos son obligatorios");
  }

  try {
    console.log("Iniciando el hash de la contraseña...");
    const hashedPassword = await bcrypt.hash(contrasenya, 10);
    console.log("Hash generado:", hashedPassword);

    const query =
      "INSERT INTO usuarios (nombre, apellidos, email, contrasenya, idRol,idDepartamento) VALUES (?, ?, ?, ?, ?,?)";

      console.log(query, [nombre, apellidos, email, hashedPassword,idRol,idDepartamento]);

    db.query(query, [nombre, apellidos, email, hashedPassword,idRol,idDepartamento], (err, result) => {
      if (err) {
        console.error("Error en la base de datos:", err);
        return res.status(500).send("Error en el servidor");
      }

      console.log("Usuario registrado correctamente:", result);
      res.status(200).json({ message: "Usuario registrado correctamente" });
    });
  } catch (error) {
    console.error("Error encriptando la contraseña:", error);
    res.status(500).send("Error en el servidor");
  }
});

// Ruta POST para login con autenticación JWT
app.post("/login", (req, res) => {
  console.log("Datos recibidos:", req.body);
  const { usuario, pass } = req.body; // Capturamos los datos enviados.
  console.log(req.body.username);
  console.log(req.body.password);
  db.query("SELECT id, idRol, contrasenya FROM usuarios WHERE email = ?", req.body.username, async (err, result) => {
    console.log("aqui");
    if (err) {
      console.error("Error en la consulta SQL:", err);
      return res.status(500).send("Error en el servidor");
    }

    console.log("SELECT id, idRol, contrasenya FROM usuarios WHERE email = ?", req.body.username);
    if (result.length === 0) {
      console.log("Usuario no encontrado");
      return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }

    const user = result[0];
    console.log("Resultado de la consulta:", user);

    if (!user.contrasenya) {
      console.error("El campo contrasenya está vacío o es nulo");
      return res.status(500).send("Error en el servidor");
    }

    console.log(String(user.contrasenya));
    console.log(String(req.body.password));
    const isMatch = await bcrypt.compare(String(req.body.password), String(user.contrasenya)); // Comparamos la contraseña ingresada con la encriptada.
    if (!isMatch) {
      console.log("Contraseña incorrecta");
      return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
    const token = jwt.sign({ id: user.id, IdRol: user.idRol }, "foriestanis", { expiresIn: "15m" });
    console.log(token,user.id, user.idRol);

    res.json({ token,id: user.id, idRol: user.idRol });
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// REVISIÓN DE CAMPOS OCULTOS DEPENDIENDO DEL TIPO!!!!!!

// Endpoint para obtener los tipos de artículos y sus características
// Endpoint para obtener los tipos de artículos y sus características
app.get('/api/tipos-articulos', (req, res) => {
  // Realizamos una consulta a la tabla 'tipos_articulos'
  db.query('SELECT * FROM types', (err, tiposResult) => {
    if (err) {
      console.error("Error al obtener tipos de artículos:", err);
      return res.status(500).send('Error al obtener tipos de artículos.');
    }

    // Verificamos si la consulta a tipos_articulos devuelve resultados
    console.log('Tipos de artículos:', tiposResult);

    const tipos = tiposResult.map((tipo) => {
      // Asegúrate de que 'tipo.id' sea un valor válido
      console.log('Tipo de artículo:', tipo);  // Imprimimos el tipo completo para verificar el id

      return new Promise((resolve, reject) => {
        db.query(
          'SELECT nombre FROM caracteristicas WHERE tipo_articulo_id = ?',
          [tipo.idType],  // Asegúrate de usar tipo.id correctamente
          (err, caracteristicasResult) => {
            if (err) return reject(err);
            console.log('Características para el tipo:', tipo.nombre, caracteristicasResult);
            resolve({
              tipo: tipo.nombre,
              caracteristicas: caracteristicasResult
            });
          }
        );
      });
    });

    Promise.all(tipos)
      .then((result) => {
        res.json(result);  // Devolvemos el resultado al frontend
      })
      .catch((err) => {
        console.error("Error al obtener características:", err);
        res.status(500).send('Error al obtener características.');
      });
  });
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.use(express.static(path.join(__dirname, "..", "dist", "inventario", "browser")));

// Redirigir todas las rutas a `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "inventario", "browser", "index.html"));
});

// Si tienes alguna carpeta de 'assets', puedes configurarla así

// Crear el servidor HTTP
const server = http.createServer(app);

// Escuchar en un puerto dinámico (0 dejará que el sistema seleccione uno)
server.listen(3002, '0.0.0.0', () => {
  const address = server.address();
  console.log(`Servidor Express corriendo en http://0.0.0.0:${address.port}`);
});