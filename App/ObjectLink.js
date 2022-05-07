
class ObjectLink{
    constructor(OriginalLink, shortLink){
        this.OriginalLink=OriginalLink;
        this.shortLink=shortLink;
        this.RandomNumber = this.Random();
    }

    Random(){

        let number = Math.floor(Math.random() * 10000) + 1;
        return number
    }
}
export default ObjectLink;