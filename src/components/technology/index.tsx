import { Card } from "../Card";

export function Technology() {
    return (
        <>
            <div className="flex w-full flex-col">
                <h1 className="text-5xl font-bold">Tecnologias</h1>
                <div className="flex w-full flex-col lg:flex-row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}