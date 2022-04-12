class Calculatrice {

    public static additionSimple(nb1: number, nb2: number): number {
        return nb1 + nb2;
    }

    public static addition(...nombres: number[]): number {
        return nombres.reduce((precedent: number, actuel: number) => {
            return precedent + actuel;
        });
    }

    public static division(nb1: number, nb2: number) {
        if(nb2 == 0) throw new Error("Division par 0");
        return nb1 / nb2;
    }
}

export default Calculatrice;
