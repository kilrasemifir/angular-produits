export class UtilisateurModel {
  constructor(
    public nom: string = "",
    public prenom: string = "",
    public email: string = "",
    public entreprise: string = "",
    public telephones: string[] = [],
  ){}
}