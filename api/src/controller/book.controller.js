const {pool} = require("../database");

const getBooks = async (request, response) => 
{
    try{

        let params;
        let sql;

        if(request.query.id_book != 0 && request.query.id_book){
            request.query.id_book = "%"+request.query.id_book;
            sql = "SELECT * FROM book "+
            "WHERE id_user = ? AND id_book LIKE ?";
            params = [request.query.id_user, request.query.id_book];
        }else{
            sql = "SELECT * FROM book "+
                "WHERE id_user = ?";
            params = [request.query.id_user];

        }
        
        let [result] = await pool.query(sql, params);
        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libreria",
            data: result
        }
        response.send(respuesta);

        console.log(result);

    }catch(err){
        console.log(err);
    }
}

const postBook = async (request, response) => {
    try{
        
        let params = [request.query.id_user, request.body.title, request.body.type, request.body.author, request.body.price, request.body.photo];
        let sql = "INSERT INTO book (id_user, title, type, author, price, photo) "+
                "VALUES (?, ?, ?, ?, ?, ?)";
        let [result] = await pool.query(sql, params);
        
        
        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro Añadido",
            data: result
        };
        
        response.send(respuesta);
        console.log(respuesta);
    }catch(err){
        console.log(err);
    }
}



const putBook = async (request, response) => {
    try{
        
        let params = [request.body.title, request.body.type, request.body.author, request.body.price, request.body.photo, request.query.id_book, request.query.id_user];
        let sql = "UPDATE book SET title = COALESCE(?, title), type = COALESCE(?, type), author = COALESCE(?, author), price = COALESCE(?, price), photo = COALESCE(?, photo) "+
                "WHERE id_book = ?";
        let [result] = await pool.query(sql, params);
        
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro Modificado",
            data: result
        };

        response.send(respuesta);
    }catch(err){
        console.log(err);
    }
}


const deleteBook = async (request, response) => {
    try{
        let params = [request.query.id_book];
        //! No pongo el id_user porque id_book es autoincremental y por lo tanto no va a haber dos id_books iguales
        let sql = "DELETE FROM book "+
                "WHERE id_book = ?";
        
        let [result] = await pool.query(sql, params);

        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro eliminado",
            data: result
        };

        response.send(respuesta);
        console.log(respuesta);

    }catch(err){
        console.log(err);
    }
}


module.exports = {getBooks, postBook, putBook, deleteBook};