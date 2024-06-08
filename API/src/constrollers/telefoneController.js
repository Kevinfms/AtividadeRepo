const telefoneModel = require('../models/telefoneModel');
    



const telefoneController = {

   
    //RETORNA TODOS OS TELEFONES;
    selectTel: async (req, res) => {

        try {
            const telefone = await telefoneModel.selectTel();
            return res.json(telefone);

        } catch (error) {
            throw error;
        }


    },

    //RETORNA O TELEFONE COM BASE NO ID INFORMADO
    selectOneTel: async (req, res) => {
        const { id } = req.params;

        try {
            const telefone = await telefoneModel.selectOneTel(id);
            return res.json(telefone);
        } catch (error) {
            return res.send('ID Não encontrado');
        }
    },


    //CREATE - CRIAR UM NOVO TELEFONE
    insertTel: async (req, res) => {
        const { id_cliente, tipo, numero, data_cad} = req.body;
        const result2 = await telefoneModel.insertTel({ id_cliente: id_cliente, tipo: tipo, numero: numero, data_cad:data_cad});

        
        // const telefone = await telefoneModel.selectTel();
        return res.json(result2);
    },

    //UPDATE - ATUALIZANDO UM TELEFONE
    updateTel: async (req, res) => {
        const { id } = req.params;
        const { id_cliente, tipo, numero, data_cad } = req.body;
        const result2 = await telefoneModel.updateTel(id, { id_cliente: id_cliente, tipo: tipo, numero: numero, data_cad:data_cad });

        // const telefone = await telefoneModel.updateTel();
        return res.json(result2);
    },

    // EXCLUINDO UM TELEFONE
    deleteTel: async (req, res) => {
        const { id } = req.params;
        const result = await telefoneModel.deleteTel(id);
        return res.json(result)
    },

}


module.exports = telefoneController;