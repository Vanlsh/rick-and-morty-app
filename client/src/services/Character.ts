export interface CharacterModel{
    id: number
    name: string
    species: string
    gender: string
    location: {
        name: string
    }
    status: string
    created: string
    like: boolean
    episodes: number []
    img: string | null
}
// export class CharacterModel{
//
//     constructor(
//         id:number,
//         name: string,
//         species: string,
//         gender: string,
//         location: string,
//         status: string,
//         created: string) {
//         this.id = id;
//         this.name = name;
//         this.species = species;
//         this.gender = gender;
//         this.location = location;
//         this.status = status;
//         this.created = created;
//     }
//     setLikeState(){
//         if (this.like){
//             this.like = false
//         } else {
//             this.like = true
//         }
//     }
// }