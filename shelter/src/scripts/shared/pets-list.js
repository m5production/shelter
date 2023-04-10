export class PetsListData{
  constructor(petsDataCollection){
    this.lastUsedId = 0;
    this.petsData = [];
    petsDataCollection.forEach(item => {
      this.petsData.push({id: this.lastUsedId++, ...item})
    });
  }

  findItemById(id){
    return this.petsData.find(elem => elem.id === id);
  }

  findItemByIndex(index){
    return this.petsData[index];
  }
}