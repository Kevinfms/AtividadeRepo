const { connect } = require('../config/db');

const modelTelefone = {

    selectTel: async () => {

        try {
            const conn = await connect();
            const [rows] = await conn.query('select * from telefone;');
            return rows;

        } catch (error) {
            throw error;
        }


    },

    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES;
    selectOneTel: async (id_cliente) => {
        const conn = await connect();
        const sql = 'SELECT * FROM telefone WHERE id_cliente=?;';
        const values = id_cliente;

        const [rows] = await conn.query(sql, values);

        if (rows.length === 0) {
            throw new Error('Cliente não encontrado');
        }

        return rows;
    },

    //INSERE UM NOVO REGISTRO NA TABELA CLIENTES;
    insertTel: async (telefone) => {
        const conn = await connect();
        const sql = 'INSERT INTO telefone(id_cliente,tipo,numero,data_cad) VALUES (?,?,?,?);';
        const values = [telefone.nome, telefone.id_cliente, telefone.numero, telefone.data_cad];
        return await conn.query(sql, values);
    },


    // ATUALIZA UM REGISTRO DA TABELA CLIENTES;
    updateTel: async (id_cliente, telefone) => {
        const conn = await connect();
        const sql = 'UPDATE telefone SET id_cliente=?, tipo=?, numero=?, data_cad=? WHERE id=?;';
        const values = [telefone.id_cliente, telefone.tipo, telefone.numero, telefone.data_cad, id_cliente];

        return await conn.query(sql, values);
    },


    // DELETA UM REGISTRO DA TABELA CLIENTES;
    deleteTel: async (id) => {
        const conn = await connect();
        const sql = 'DELETE FROM telefone WHERE id=?;';

        return await conn.query(sql, [id]);
    },



};


    module.exports = modelTelefone;