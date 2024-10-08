import { Card } from "../Card";

export function Technology() {
    return (
        <>
            <div className="flex w-full flex-col items-center">
                <h1 className="text-5xl font-bold text-center my-8 cl-white">Tecnologias</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                    <div className="flex justify-center">
                        <Card
                            title="Embarcadero Delphi"
                            text="Minha área de maior domínio, Plataforma desktop com Delphi 2006 e 10.4."
                            imageUrl="https://media.licdn.com/dms/image/D4E12AQF0qAVb81rXsg/article-cover_image-shrink_720_1280/0/1691757668644?e=2147483647&v=beta&t=48_p3mE1-9NppCZYmzBDZVktd8-2JwJXtU8YgyxI7q8"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Laravel"
                            text="Possuo experiência com pequenos projetos pessoais e na Efisim Sistemas."
                            imageUrl="https://belenos.me/media/2021-06-laravel.webp"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Java - Spring Boot"
                            text="Conhecimento obtido da faculdade de Análise e Desenvolvimento de Sistemas."
                            imageUrl="https://rdrblog.com.br/wp-content/uploads/2020/08/Spring-BOOT-Interview-questions-1.jpg"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Card
                            title="Banco de Dados SQL"
                            text="Experiência com PostgreSQL, FirebirdSQL e MySQL."
                            imageUrl="https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fbf0353ae89496-O-que-e-SQL-Server.jpg"
                        />
                    </div>

                    {/* Alinhando o título de Formação ao centro */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
                        <h1 className="text-5xl font-bold text-center my-8 cl-white">Formação</h1>
                    </div>

                    {/* Card de Formação ocupando todas as colunas */}
                    <div className="flex justify-center col-span-1 sm:col-span-2 lg:col-span-4">
                        <Card
                            title="Formação"
                            text="Formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul."
                            imageUrl="https://www.ifms.edu.br/noticias/elaine-cassiano-e-nomeada-reitora-pelos-proximos-quatro-anos/mat-ifms-2.png"
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}
