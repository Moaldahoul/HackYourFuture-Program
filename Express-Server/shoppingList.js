class ShoppingList{
    constructor(){
        this.list_of_item = [];
    }

// trying to work with static
    static mergeLists(...ShoppingLists){
        console.log("ShoppingLists", ShoppingLists);
        let biglist = [];
        ShoppingLists.forEach((ShoppingList)=>{
            ShoppingList.forEach((item_in_shoppingList) =>{
                if(biglist.length === 0){
                    biglist.push(item_in_shoppingList)
                }else{
                    const exist = biglist.some((item_in_biglist, i)=>{
                        if(item_in_shoppingList.name === item_in_biglist.name){
                            // biglist[i].amount += item_in_shoppingList.amount;
                            // biglist[i].amount = item_in_shoppingList.amount + item_in_shoppingList.amount;
                            return true;
                        }
                    });
                    if(!exist){
                        biglist.push(item_in_shoppingList)
                    }
                }
            })
        })
    }

    addItem(shoppingItem){
       
       if(shoppingItem.name === "" || shoppingItem.price<0 ||shoppingItem.amount<0) {
           console.log("the item is not valid!");
       } else{
            this.list_of_item.push(shoppingItem);
            console.log(shoppingItem.name, "added!");
        }}
        
        
    removeItem(i){
        if(this.list_of_item(i)){
            this.list_of_item.splice(i,1);
        }
    }

    totalPrice(){
        let total_price = 0;
       
        for (let i=0; i < this.list_of_item.length; i++){
            total_price = total_price + this.list_of_item[i].amount * this.list_of_item[i].price
        }
        return total_price;
    }

}

class ShoppingItem {
    /**
     * 
     * @param {string} name is the name of the shopping items
     * @param {number} amount is the amount of the shopping items
     * @param {number} amount is the price of the one item, currency is DKK
     */
    
    constructor(name, amount,price){
        this.name = name;
        this.amount = amount;
        this.price = price;
    }
}

//merge class
class MergedShoppingList{
    constructor(shoppingLists1, shoppingLists2){
        this.shoppingLists1 = shoppingLists1;
        this.shoppingLists2 = shoppingLists2;
    }
    mergeLists(){
        let item_in_first_list = "";
        let item_in_second_list = "";
        this.shoppingLists1.forEach((item_in_shoppinglist1) => {
            item_in_first_list = item_in_shoppinglist1.name;
            let exist = false;
            this.shoppingLists2.forEach((item_in_shoppinglist2)=>{
                item_in_second_list = item_in_shoppinglist2.name;
                if(item_in_first_list === item_in_second_list) {
                    console.log("the item is existed!");
                    exist = true;
                    item_in_shoppinglist2.amount = item_in_shoppinglist1.amount + item_in_shoppinglist2.amount;
                    
                }
            });
            if(!exist){
                this.shoppingLists2.push(item_in_shoppinglist1);
            }

            
        });
        return this.shoppingLists2;
    }
}

const my_shoppingList1 = new ShoppingList();
const my_shoppingList2 = new ShoppingList();
const my_bought_item1 = new ShoppingItem ("milk", 1, 6);
const my_bought_item2 = new ShoppingItem ("pack_of_ris", 2, 16);
const my_bought_item3 = new ShoppingItem ("pack_of_carrot", 1, 10);
const my_bought_item4 = new ShoppingItem ("pack_of_pork", 1, 40);
const my_bought_item5 = new ShoppingItem ("duck", -2, 2);

// my_shoppingList1.addItem({
//     name: "milk",
//     amount:1,
//     price:16,
// });
// my_shoppingList1.addItem({
//     name: "pack_of_ris",
//     amount:2,
//     price:16,
// });
my_shoppingList1.addItem(my_bought_item3);
my_shoppingList1.addItem(my_bought_item4);
my_shoppingList1.addItem(my_bought_item5);

my_shoppingList2.addItem(my_bought_item1);
my_shoppingList2.addItem(my_bought_item3);
my_shoppingList2.addItem(my_bought_item5);
// my_shoppingList2.addItem({
//     name: "pack_of_ris",
//     amount:2,
//     price:16,
// });
// my_shoppingList2.addItem({
//     name: "pack_of_pork",
//     amount:1,
//     price:40,
// });


let total_price = my_shoppingList1.totalPrice();

console.log("my shopping list1", my_shoppingList1);
console.log("my shopping list2", my_shoppingList2);
console.log("moneyBag", total_price);

//merge lists
// const {mergeLists}=require('./extra.js');
// const one_big_list = mergeLists(my_shoppingList1, my_shoppingList2);
// console.log("big list", one_big_list );

// const shoppingLists1 = [{ name: 'milk', amount: 1, price: 6 },{ name: 'pack_of_ris', amount: 2, price: 16 }];
// const shoppingLists2 = [{ name: 'pack_of_ris', amount: 2, price: 16 },  {name: 'pack_of_pork', amount: 1, price: 40 }];
// const my_MergedShoppingLists1 = new MergedShoppingList(shoppingLists1, shoppingLists2);
const my_MergedShoppingLists2 = new MergedShoppingList(my_shoppingList1.list_of_item, my_shoppingList2.list_of_item);
// my_MergedShoppingLists1.mergeLists();
my_MergedShoppingLists2.mergeLists();
console.log("biglist", my_MergedShoppingLists2.shoppingLists2);

