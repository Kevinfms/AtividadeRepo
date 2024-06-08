const { connect } = require('../config/db');

const modelCliente = {

    selectCliente: async () => {

        try {
            const conn = await connect();
            const [rows] = await conn.query('select * from tbl_cliente;');
            return rows;

        } catch (error) {
            throw error;
        }


    },

    // SELECIONA O REGISTRO DESEJADO NA TABELA CLIENTES;
    selectOneCliente: async (nome) => {
        const conn = await connect();
        const sql = 'SELECT * FROM tbl_cliente WHERE nome=?;';
        const values = nome;

        const [rows] = await conn.query(sql, values);

        if (rows.length === 0) {
            throw new Error('Cliente não encontrado');
        }

        return rows;
    },

    //INSERE UM NOVO REGISTRO NA TABELA CLIENTES;
    insertCliente: async (cliente) => {
        const conn = await connect();
        const sql = 'INSERT INTO tbl_clientes(nome,data_nasc,cpf,data_cad) VALUES (?,?,?,?);';
        const values = [cliente.nome, cliente.data_nasc, cliente.cpf, cliente.data_cad];
        return await conn.query(sql, values);
    },


    // ATUALIZA UM REGISTRO DA TABELA CLIENTES;
    updateCliente: async (id, cliente) => {
        const conn = await connect();
        const sql = 'UPDATE tbl_cliente SET nome=?, data_nasc=?, cpf=?, data_cad=? WHERE id=?;';
        const values = [cliente.nome, cliente.data_nasc, cliente.cpf, cliente.data_cad, id];

        return await conn.query(sql, values);
    },


    // DELETA UM REGISTRO DA TABELA CLIENTES;
    deleteCliente: async (id) => {
        const conn = await connect();
        const sql = 'DELETE FROM tbl_cliente WHERE id=?;';

        return await conn.query(sql, [id]);
    },



};


    module.exports = modelCliente;