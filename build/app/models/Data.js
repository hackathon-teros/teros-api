"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    Codigo_da_oportunidade: Number,
    Classificacao_da_Oportunidade: String,
    Data_de_criacao: String,
    Faixa_de_Faturamento_Agregado: String,
    Data_Real_de_Encerramento_da_Opp2: String,
    id_fechou: Number,
    numero_relacionamentos: Number,
    numero_relacionamentos_convertidos: Number,
    intervalo_tempo: Number,
    ano: Number,
    Valor_corrigido2: String,
    Forma_de_Contratacao_Agregado: String,
    Concorrentes: Number,
    n_solucoes: Number,
    Software: Number,
    Comissao_sobre_Parceiros: Number,
    Cybersecurity: Number,
    Desdobramento_de_metas: Number,
    ESG: Number,
    Equilibrio_fiscal: Number,
    Skill_dev: Number,
    Gestao_Estrategica: Number,
    Gestao_da_Educacao: Number,
    Gestao_da_Operacao: Number,
    Gestao_da_Receita: Number,
    Gestao_da_Saude: Number,
    Gestao_da_Segurança_Publica: Number,
    Gestao_da_Segurança_Viaria: Number,
    Gestao_de_Gastos: Number,
    Gestao_de_operações_projetizadas: Number,
    Gestao_de_pessoas: Number,
    Processes_Excellence: Number,
    Produtos_digitais: Number,
    S_amp_OP_S_amp_OE: Number,
    Transformacao_Digital: Number,
    Treinamentos: Number,
    Roadmap: Number,
    Segmentacao: Number,
    Carteira_Nova: String,
    Segmento_Agregado2: String,
    Total_HH: Number,
    Custo_Total: Number,
    Margem_Total: Number,
    ID_cliente: Number
});
exports.default = (0, mongoose_1.model)('ideias', dataSchema);
