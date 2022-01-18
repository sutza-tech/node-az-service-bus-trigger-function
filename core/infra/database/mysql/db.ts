import mysql = require('mysql');
import { dbConfig } from '../../../../config';

export default class MySQL {

    private static _instance: MySQL;

    cnn: mysql.Connection;

    conectado: boolean = false;

    constructor() {

        console.log('MySQL Client Initialized...');

        this.cnn = mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.username,
            password: dbConfig.password,
            database: dbConfig.database
        });

        this.conectarDB();
    }

    public static get instance(){
        return this._instance || ( this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: Function){

        this.instance.cnn.query(query, (err, results: Object[], fields) => {

            if(err){
                console.log('Error en la query');
                console.log(err);
                return callback(err);
            }

            if(results.length === 0){
                return callback('El registro solicitado no existe');
            }else{
                return callback(null, results);
            }
        });
    }

    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {

            if (err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('DB Online');

        })
    }

}