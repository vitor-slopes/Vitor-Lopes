import { Client } from './Client'
import { Place } from './Place'
import { Residence } from './places/Residence'
import { Industry } from './places/Industry'
import { Commerce } from './places/Commerce'
import { ResidentialClient } from './clients/ResidentialClient'

// const newClient: Client = {
//     name: "Vitor",
//     registrationNumber: 1,
//     consumedEnergy: 1000,

//     calculateBill: () => {
//       return 2;
//     }
//   }
//   console.log(newClient.calculateBill())
//   console.log(newClient.name)
//   console.log(newClient.registrationNumber)
//   console.log(newClient.consumedEnergy)
//Ex1-a) consegui imprimir todas as propriedades pois não tem encapsulamento(são públicas)

// const newPlace: Place = new Place()
//Ex2-a) Cannot create an instance of an abstract class

// class newPlace extends Place {

// }

//Ex2-b) Criar uma classe como filha direta da classe Place

//Exercício 03
// const newResidence: Residence = new Residence(5, 'rua dos bobos, 0')
// console.log(newResidence.getResidentsQuantity())
// console.log(newResidence.getCep())

// const newIndustry: Industry = new Industry(6, 'rua dos bobos, 4')
// console.log(newIndustry.getMachinesQuantity())
// console.log(newIndustry.getCep())

// const newCommerce: Commerce = new Commerce(3, 'Rua dos Bobos, 6')
// console.log(newCommerce.geFloorsQuantity())
// console.log(newCommerce.getCep())

//Exercício 04
const newResidentialClient: ResidentialClient = new ResidentialClient('Vitor Lopes', 3, 1000, '333.333.333-33', 6, '11075-002')
console.log(newResidentialClient.calculateBill())
console.log(newResidentialClient.getCep())
console.log(newResidentialClient.getCpf())
console.log(newResidentialClient.getResidentsQuantity())
//4-a) Possui os métodos dela, do Residence e do Client