export class Character{
    id: number
    name: string
    species: string
    gender: string
    location: string
    episode: string
    status: string
    created: string
    like: boolean = false
    img: string | null = null
    constructor( id:number,
        name: string,
        species: string,
        gender: string,
        location: string,
        episode: string,
        status: string,
        created: string) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.gender = gender;
        this.location = location;
        this.episode = episode;
        this.status = status;
        this.created = created;
    }
    setLikeState(){
        if (this.like){
            this.like = false
        } else {
            this.like = true
        }
    }
}