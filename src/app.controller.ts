import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('exercicio/1')
    getQuestao1(): string {
        return this.appService.questao1();
    }

    @Get('exercicio/2')
    getQuestao2(@Query('numero') numero: number): string {
        return this.appService.questao2(numero);
    }

    @Get('exercicio/3')
    getQuestao3(): string {
        const faturamentoMensal = [
            { dia: 1, valor: 100 },
            { dia: 2, valor: 200 },
            { dia: 3, valor: 0 },
            { dia: 4, valor: 300 },
            { dia: 5, valor: 400 },
            { dia: 6, valor: 0 }
        ];
        return this.appService.questao3(faturamentoMensal);
    }

    @Get('exercicio/4')
    getQuestao4(): string {
        return this.appService.questao4();
    }

    @Get('exercicio/5')
    getQuestao5(@Query('texto') texto: string): string {
        return this.appService.questao5(texto);
    }
}
