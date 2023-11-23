// Cria uma interface para Pessoa, que define quais atributos terá um objeto e quais os seus tipos
interface Pessoa {
    nome: string, // atriuto "nome" do tipo string e obrigatório
    idade: number // atriuto "idade" do tipo number e obrigatório
    profissao?: string // atriuto "profissao" do tipo string e NAO obrigatório (adicionando o ? após o atributo)
}

// Um objeto Pessoa seguindo os atributos obrigatórios
const pessoa: Pessoa = {
    nome: 'Gabriel',
    idade: 24
}

// Um objeto Pessoa seguindo todos os atributos
const outraPessoa: Pessoa = {
    nome: 'Aline',
    idade: 25,
    profissao: 'secretária'
}

// Declaração de tipo de um array | Array<TIPO_DOS_DADOS>
const arrayPessoas: Array<Pessoa> = [pessoa, outraPessoa];

const arrayNumbers: Array<number> = [1, 2, 3];

const arrayString: Array<string> = ['a', 'b', 'c'];


console.log(arrayPessoas, arrayNumbers, arrayString);