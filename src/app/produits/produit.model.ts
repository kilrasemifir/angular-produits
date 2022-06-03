export class Produit {
  constructor(
    public id: number = -1,
    public titre:string = "",
    public imgUrl: string = "",
    public description: string = "",
    public dateSortie: Date = new Date(),
    public realisateur: string = "",
    public acteurs: string[] = [],
    public categorie: string = "films"
    ){}
}

export type ProduitCategorie = {titre:string, produits:Produit[]}