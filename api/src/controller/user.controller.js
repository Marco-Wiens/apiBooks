const {pool} = require("../database");

const postRegister = async (request, response) => 
{

    try{
        let params = [request.body.name, request.body.last_name, request.body.email, request.body.photo, request.body.password];
        let sql = "INSERT INTO user "+
        "(name, last_name, email, photo, password) "+
        "VALUES(?, ?, ?, ?, ?)";

        let [result] = await pool.query(sql, params);

        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Usuario Registrado', 
            data: result
          };
        response.send(respuesta);

        console.log(respuesta);
    }catch(err){
        console.log(err);
    }
}

const postLogin = async (request, response) => 
{

    try{
        let respuesta;
        let params = [request.body.email, request.body.password];
        let sql = "SELECT * FROM user "+
        "WHERE email = ? AND password = ?";

        let [result] = await pool.query(sql, params);

        if(result.length > 0){
            respuesta ={
                error: false,
                codigo: 200,
                mensaje: "Bienvenido a la Libreria",
                data: result
            }
        }else{
            respuesta ={
                error: true,
                codigo: 200,
                mensaje: "Datos introducidos incorrectos."
            }
        }

        response.send(respuesta);

        console.log(respuesta.mensaje);
    }catch(err){
        console.log(err);
    }
}

const putUser = async (request, response) => {
    try{
        let params = [request.body.name, request.body.last_name, request.body.email, request.body.photo, request.body.password ,request.body.id_user];
        let sql = "UPDATE user SET name = COALESCE (?, name), last_name = COALESCE (?, last_name), email = COALESCE(?, email), photo = COALESCE (?, photo), password = COALESCE(?, password) WHERE id_user = ?";
        let [res1] = await pool.query(sql, params);
        let [res2] = await pool.query("SELECT * from user WHERE id_user = ?", [request.body.id_user]);
        let datosUser = res2;
        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Modificado correctamente",
            data: datosUser
        };

        response.send(res1);
        response.send(respuesta);
        console.log(respuesta);
        console.log(res1);
    }catch(err){
        console.log(err);
    }
}


module.exports = {postRegister, postLogin, putUser};