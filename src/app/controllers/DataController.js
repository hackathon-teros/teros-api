"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = __importDefault(require("../models/Data"));
class DataController {
    store(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { file } = request.body;
            const fileMapped = file.map(item => {
                const removeSymbols = (value) => +value.replaceAll('.', '');
                const { Codigo_da_oportunidade, id_fechou, numero_relacionamentos, numero_relacionamentos_convertidos, intervalo_tempo, ano, Valor_corrigido2, Concorrentes, n_solucoes, Software, Comissao_sobre_Parceiros, Cybersecurity, Desdobramento_de_metas, ESG, Equilibrio_fiscal, Skill_dev, Gestao_Estrategica, Gestao_da_Educacao, Gestao_da_Operacao, Gestao_da_Receita, Gestao_da_Saude, Gestao_da_Seguranca_Publica, Gestao_da_Seguranca_Viaria, Gestao_de_Gastos, Gestao_de_operacoes_projetizadas, Gestao_de_pessoas, Processes_Excellenses, Produtos_digitais, S_amp_OP_S_amp_OE, Transformacao_Digital, Treinamentos, Roadmap, Segmentacao, Total_HH, Custo_Total, Margem_Total, ID_cliente } = item;
                return Object.assign(Object.assign({}, item), { Codigo_da_oportunidade: +Codigo_da_oportunidade, id_fechou: +id_fechou, numero_relacionamentos: +numero_relacionamentos, numero_relacionamentos_convertidos: +numero_relacionamentos_convertidos, intervalo_tempo: removeSymbols(intervalo_tempo), ano: +ano, Valor_corrigido2: removeSymbols(Valor_corrigido2), Concorrentes: +Concorrentes, n_solucoes: +n_solucoes, Software: +Software, Comissao_sobre_Parceiros: +Comissao_sobre_Parceiros, Cybersecurity: +Cybersecurity, Desdobramento_de_metas: +Desdobramento_de_metas, ESG: +ESG, Equilibrio_fiscal: +Equilibrio_fiscal, Skill_dev: +Skill_dev, Gestao_Estrategica: +Gestao_Estrategica, Gestao_da_Educacao: +Gestao_da_Educacao, Gestao_da_Operacao: +Gestao_da_Operacao, Gestao_da_Receita: +Gestao_da_Receita, Gestao_da_Saude: +Gestao_da_Saude, Gestao_da_Seguranca_Publica: +Gestao_da_Seguranca_Publica, Gestao_da_Seguranca_Viaria: +Gestao_da_Seguranca_Viaria, Gestao_de_Gastos: +Gestao_de_Gastos, Gestao_de_operacoes_projetizadas: +Gestao_de_operacoes_projetizadas, Gestao_de_pessoas: +Gestao_de_pessoas, Processes_Excellenses: +Processes_Excellenses, Produtos_digitais: +Produtos_digitais, S_amp_OP_S_amp_OE: +S_amp_OP_S_amp_OE, Transformacao_Digital: +Transformacao_Digital, Treinamentos: +Treinamentos, Roadmap: +Roadmap, Segmentacao: +Segmentacao, Total_HH: +Total_HH, Custo_Total: removeSymbols(Custo_Total), Margem_Total: removeSymbols(Margem_Total), ID_cliente: +ID_cliente });
            });
            const data = yield Data_1.default.create(fileMapped);
            return response.status(201).json(data);
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Data_1.default.find({});
            const dataMapped = data.map(item => {
                const { Total_HH, Faixa_de_Faturamento_Agregado, Valor_corrigido2, Carteira_Nova, Segmento_Agregado2, Custo_Total, Margem_Total } = item;
                return { Total_HH, Faixa_de_Faturamento_Agregado, Valor_corrigido2, Carteira_Nova, Segmento_Agregado2, Custo_Total, Margem_Total };
            });
            return response.json({
                data: dataMapped,
            }).status(200);
        });
    }
}
exports.default = new DataController();
