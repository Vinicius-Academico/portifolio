import { Card } from "../Card";

export function Technology() {
    return (
        <>
            <div className="flex w-full flex-col items-center">
                <h1 className="text-5xl font-bold text-center my-8">Tecnologias</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                    <div className="flex justify-center">
                        <Card
                            title="Embarcadero Delphi"
                            text="Minha área de maior domínio, Plataforma desktop com Delphi 2006 e 10.4."
                            imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Laravel"
                            text="Possuo experiência com pequenos projetos pessoais e na Efisim Sistemas."
                            imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Java - Spring Boot"
                            text="Conhecimento obtido da faculdade de Análise e Desenvolvimento de Sistemas."
                            imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Banco de Dados SQL"
                            text="Experiência com PostgreSQL, FirebirdSQL e MySQL."
                            imageUrl="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}