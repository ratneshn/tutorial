function placeAnorder(orderNumber){
  console.log("Customer orders"+orderNumber);

  cookAndDeliverFood(function (){
      console.log("order ready "+orderNumber);
  });
}

function cookAndDeliverFood(callback){
  setTimeout(callback, 5000);
}

placeAnorder(1);
placeAnorder(2);
placeAnorder(3);
placeAnorder(4);
placeAnorder(5);
