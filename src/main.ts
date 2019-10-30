abstract class Animal {
    abstract fazBarulho(): void;
    move(): void {
        console.log("lentamente...");
    }
}

class Cachorro extends Animal{
fazBarulho(): void{
    console.log("au");
}
}