/* eslint-disable camelcase */
import { Request, Response } from 'express';
import Data from '../models/Data';

class DataController {
    async store(request: Request, response: Response) {
        const { file } = request.body;

        const fileMapped = file.map(item => {
            const removeSymbols = (value: any) => +value.replaceAll('.','');

            const { Codigo_da_oportunidade,id_fechou,numero_relacionamentos,numero_relacionamentos_convertidos,intervalo_tempo,ano,Valor_corrigido2,Concorrentes,n_solucoes,Software,Comissao_sobre_Parceiros,Cybersecurity,Desdobramento_de_metas,ESG,Equilibrio_fiscal,Skill_dev,Gestao_Estrategica,Gestao_da_Educacao,Gestao_da_Operacao,Gestao_da_Receita,Gestao_da_Saude,Gestao_da_Seguranca_Publica,Gestao_da_Seguranca_Viaria,Gestao_de_Gastos,Gestao_de_operacoes_projetizadas,Gestao_de_pessoas,Processes_Excellenses,Produtos_digitais,S_amp_OP_S_amp_OE,Transformacao_Digital,Treinamentos,Roadmap,Segmentacao,Total_HH,Custo_Total,Margem_Total,ID_cliente } = item;
            return {
                ...item,
                Codigo_da_oportunidade: +Codigo_da_oportunidade,
                id_fechou: +id_fechou,
                numero_relacionamentos: +numero_relacionamentos,
                numero_relacionamentos_convertidos: +numero_relacionamentos_convertidos,
                intervalo_tempo: removeSymbols(intervalo_tempo),
                ano: +ano,
                Valor_corrigido2: removeSymbols(Valor_corrigido2),
                Concorrentes: +Concorrentes,
                n_solucoes: +n_solucoes,
                Software: +Software,
                Comissao_sobre_Parceiros: +Comissao_sobre_Parceiros,
                Cybersecurity: +Cybersecurity,
                Desdobramento_de_metas: +Desdobramento_de_metas,
                ESG: +ESG,
                Equilibrio_fiscal: +Equilibrio_fiscal,
                Skill_dev: +Skill_dev,
                Gestao_Estrategica: +Gestao_Estrategica,
                Gestao_da_Educacao: +Gestao_da_Educacao,
                Gestao_da_Operacao: +Gestao_da_Operacao,
                Gestao_da_Receita: +Gestao_da_Receita,
                Gestao_da_Saude: +Gestao_da_Saude,
                Gestao_da_Seguranca_Publica: +Gestao_da_Seguranca_Publica,
                Gestao_da_Seguranca_Viaria: +Gestao_da_Seguranca_Viaria,
                Gestao_de_Gastos: +Gestao_de_Gastos,
                Gestao_de_operacoes_projetizadas: +Gestao_de_operacoes_projetizadas,
                Gestao_de_pessoas: +Gestao_de_pessoas,
                Processes_Excellenses: +Processes_Excellenses,
                Produtos_digitais: +Produtos_digitais,
                S_amp_OP_S_amp_OE: +S_amp_OP_S_amp_OE,
                Transformacao_Digital: +Transformacao_Digital,
                Treinamentos: +Treinamentos,
                Roadmap: +Roadmap,
                Segmentacao: +Segmentacao,
                Total_HH: +Total_HH,
                Custo_Total: removeSymbols(Custo_Total),
                Margem_Total: removeSymbols(Margem_Total),
                ID_cliente: +ID_cliente,
            };
        });

        const data = await Data.create(fileMapped);
        return response.json(data).status(201);
    }

    async index(request: Request, response: Response) {
        const datas = await Data.find({});

        return response.json(datas).status(200);
    }
}

export default new DataController();
