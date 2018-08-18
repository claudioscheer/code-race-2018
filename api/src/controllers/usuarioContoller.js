const uuid = require('uuid/v4');
const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');
const auth = require('./auth');

module.exports = {
    insert(req, res) {
        const usuario = req.body.data;
        usuario.id = uuid();
        provider.insert('usuarios', usuario).then(() => {
            res.json(retorno(200, true, 'Usuário inserido com sucesso.', usuario));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível inserir o usuário. ${erro}`));
        });
    },
    updateOne(req, res) {
        const { filter } = req.body;
        const user = req.body.data;
        delete user['_id'];
        provider.find('usuarios', filter).then((usuarios) => {
            const usuario = usuarios[0];
            if (!usuario.recomendacoes) {
                usuario.recomendacoes = [];
            }
            usuario.recomendacoes.push({
                loteId: user.filter.loteId,
                animalId: user.filter.animalId,
                insumos: user.insumos,
            });
            provider.updateOne('usuarios', filter, usuario).then(() => {
                res.status(200).json(retorno(200, true, 'Usuário alterado com sucesso.'));
            }).catch((erro) => {
                res.status(401).json(retorno(999, false, `Não foi possível alterar o usuário. ${erro}`));
            });
        });
    },
    delete(req, res) {
        const filter = { id: req.params.id };
        provider.delete('usuarios', filter).then(() => {
            res.status(200).json(retorno(200, true, 'Usuário excluído com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível excluir o usuário. ${erro}`));
        });
    },
    find(req, res) {
        const filter = req.params.id ? { id: req.params.id } : {};

        provider.find('usuarios', filter).then((usuarios) => {
            res.json(retorno(200, true, '', usuarios));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível consultar os usuários. ${erro}`));
        });
    },
    validateUser(req, res) {
        const { email, senha } = req.body;
        const query = {
            email,
            senha,
        };
        provider.find('usuarios', query)
            .then((usuarios) => {
                if (usuarios.length > 0) {
                    auth.createToken(usuarios).then((token) => {
                        if (token) {
                            const response = {
                                status: 200,
                                token,
                                data: usuarios[0],
                            };
                            res.json(response);
                        } else {
                            res.status(404).json(retorno(404, false, 'Não foi possível criar o token de autenticação.'));
                        }
                    });
                } else {
                    res.status(404).json(retorno(404, false, 'Usuário ou senha incorreto.'));
                }
            }).catch((error) => {
                console.log(error);
                res.status(500).json(retorno(500, false, 'Falha ao validar o usuário solicitado.'));
            });
    },
    findOne(req, res) {
        const { filter } = req.body;

        provider.find('usuarios', filter).then(() => {
            res.status(200).json(retorno(200, false, 'Consulta realizada com sucesso.'));
        }).catch(() => {
            res.status(500).json(retorno(500, false, 'Excessão interna na busca do usuário.'));
        });
    },
    findClientes(req, res) {
        const filter = { tipo: 'proprietario' }

        provider.find('usuarios', filter).then((usuarios) => {
            res.json(retorno(200, true, '', usuarios));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível consultar os usuários. ${erro}`));
        });
    },
    relatorio(req, res) {

        console.log(req.params);
        const filter = { id: req.params.id };

        provider.find('usuarios', filter).then(async (usuarios) => {
           
            const usuario = usuarios[0];
            const relatorio = [];
            const lotes = await provider.find('lotes', { idUsuario: usuario.id });
            let soma = 0;
            lotes.map((lote) => {
                lote.animais.filter(x => x.quantidade > 0).map((animal) => {
                    const insumos = usuario.recomendacoes
                        .filter(x => x.animalId === animal.id);
                    insumos.map((x) => {
                        Object.keys(x.insumos).map(async (y) => {
                           
                            const insumo = (await provider.find('insumos', { id: y }))[0];
                          
                            const s = parseFloat(insumo.valor.replace(',', '.')) * parseFloat(animal.quantidade.replace(',', '.')) * parseFloat(x.insumos[y].replace(',', '.'));
                            
                            
                            let itemRelatorio = {
                                tipoAnimal :animal.tipo,
                                gasto: s
                            }

                            relatorio.push(itemRelatorio);

                           

                        })
                    })
                    // let soma = insumos.mao(
                });
            });

            console.log(relatorio);
            // usuario.recomendacoes.map(async (recomendacao) => {

            //     lote.animais.map((animal) => {
            //         recomendacao.insumos.map((insumo) => {
            //             console.log(insumo)
            //         });
            //     });

            // const { animais } = lote;
            // const { insumos } = recomendacao;

            // console.log(insumos);

            // animais.filter(x => x.quantidade > 0).map((animal) => {
            //     insumos.map((insumo) => {
            //         if(animal.id === insumo.AnimalId){
            //             let soma = animal.quantidade * insumo.valor 
            //             console.log(soma);
            //         }
            //     })
            // });


            // });
        }).catch((erro) => {
            console.log(erro);
            res.status(401).json(retorno(401, false, `Não foi possível consultar os usuários. ${erro}`));
        });
    },
};
