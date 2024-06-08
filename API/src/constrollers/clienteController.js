const clienteModel = require('../models/clienteModel');
    



const clienteController = {

   
    //RETORNA TODOS OS CLIENTES;
    selectCliente: async (req, res) => {

        try {
            const clientes = await clienteModel.selectCliente();
            return res.json(clientes);

        } catch (error) {
            throw error;
        }


    },

    //RETORNA O CLIENTE COM BASE NO ID INFORMADO
    selectOneCliente: async (req, res) => {
        const { id } = req.params;

        try {
            const cliente = await clienteModel.selectOneCliente(id);
            return res.json(cliente);
        } catch (error) {
            return res.send('ID Não encontrado');
        }
    },


    //CREATE - CRIAR UM NOVO CLIENTE
    insertCliente: async (req, res) => {
        const { nome, data_nasc, cpf, data_cad} = req.body;
        const result2 = await clienteModel.insertCliente({ nome: nome, data_nasc: data_nasc, cpf: cpf, data_cad:data_cad});

        
        // const clientes = await clienteModel.selectCliente();
        return res.json(result2);
    },

    //UPDATE - ATUALIZANDO UM CLIENTE
    updateCliente: async (req, res) => {
        const { id } = req.params;
        const { nome, data_nasc, cpf, data_cad } = req.body;
        const result2 = await clienteModel.updateCliente(id, { nome: nome, data_nasc: data_nasc, cpf: cpf, data_cad:data_cad });

        // const clientes = await clienteModel.selectCliente();
        return res.json(result2);
    },

    // EXCLUINDO UM CLIENTE
    deleteCliente: async (req, res) => {
        const { id } = req.params;
        const result = await clienteModel.deleteCliente(id);
        return res.json(result)
    },

}


module.exports = clienteController ;