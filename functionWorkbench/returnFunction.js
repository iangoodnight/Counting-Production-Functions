function testFunction1() {
  var Arr1,
      Arr2,
      Arr3;
  Arr1 = "PICKFLOOR, HIGHBAY, HIGHBAY, OVERSTOCK";
  Arr2 = "10-11-28, 11-12-12, 11-13-10, 12-09-10";
  Arr3 = "4, 6, 8, 11";
  console.log("function testFunction1():::::" +
            "\nthis: " + this +
            "\nArr1: " + Arr1 +
            "\nArr2: " + Arr2 +
            "\nArr3: " + Arr3 +
            "\n----------");
  var results = processRaw(Arr1, Arr2, Arr3);
  console.log("results: " + results);
};

function testFunction2() {
  var Arr1,
      Arr2,
      Arr3;
  Arr1 = "null";
  Arr2 = "null";
  Arr2 = "null";
  console.log(processRaw(Arr1, Arr2, Arr3));
};

function getPickFloorQty(Arr1, Arr2) {
  var locations,
      quantities,
      pickFloor,
      pickFloorArr,
      pickFloorTotal,
      pickFloorQty,
      i,
      j,
      empty;
  
  pickFloor = [];
  pickFloorArr = [];
  pickFloorTotal = 0;
  locations = Arr1.split(",");
  quantities = Arr2.split(",");
  
  for (i = 0; i < locations.length; i++) {

    if (locations[i].trim() === "PICKFLOOR") {
      pickFloor.push(quantities[i]);
      pickFloorArr.push(parseInt(quantities[i]));
   
    };
  };
  
  for (j in pickFloorArr) {
    pickFloorTotal += pickFloorArr[j];
  };
  
  if (pickFloorTotal === 0) {
    empty = "---";
    return empty;
  } else {
  return pickFloorTotal;
  };
//  return pickFloor;
};

function getHighbayQty(Arr1, Arr2) {
  var locations,
      quantities,
      highbay,
      highbayArr,
      highbayTotal,
      highbayQty,
      i,
      j,
      empty;
  
  highbay = [];
  highbayArr = [];
  highbayTotal = 0;
  locations = Arr1.split(",");
  quantities = Arr2.split(",");
  
  for (i = 0; i < locations.length; i++) {

    if (locations[i].trim() === "HIGHBAY") {
      highbay.push(quantities[i]);
      highbayArr.push(parseInt(quantities[i]));
   
    };
  };
  
  for (j in highbayArr) {
    highbayTotal += highbayArr[j];
  };
  
  if (highbayTotal === 0) {
    empty = "---";
    return empty;
  } else {
  return highbayTotal;
  };
//  return highbay;
};

function otherQty(Arr1, Arr2) {
  var locations,
      quantities,
      other,
      otherArr,
      otherTotal,
      otherQty,
      i,
      j,
      empty;
  
  other = [];
  otherArr = [];
  otherTotal = 0;
  locations = Arr1.split(",");
  quantities = Arr2.split(",");
  
  for (i = 0; i < locations.length; i++) {

    if (locations[i].trim() === "OTHER") {
      other.push(quantities[i]);
      otherArr.push(parseInt(quantities[i]));
   
    };
  };
  
  for (j in otherArr) {
    otherTotal += otherArr[j];
  };
  
  if (otherTotal === 0) {
    empty = "---";
    return empty;
  } else {
  return otherTotal;
  };
//  return other;
};

function processRaw(warehouse, location, quantity) {


  var warehouseArr,
      locationArr,
      quantityArr,
      processed,
      pickFloorLocations,
      pickfloorQty,
      highbayLocations, 
      highbayQtys,  
      totalHighbayQty,  
      overstockLocations, 
      overstockQty,
      processed;

  warehouseArr = warehouse.split(',');
  locationArr = location.split(',');
  quantityArr = quantity.split(',');

  for (i in warehouseArr) {

    switch(warehouseArr[i]) {

      case (warehouseArr[i].trim() === "PICKFLOOR"):
        
        pickFloorLocations = locationArr[i].trim();
        pickfloorQty = quantityArr[i].trim();

        break;

      case (warehouseArr[i].trim() === "HIGHBAY"):

        highbayLocations = locationArr[i].trim();
        highbayQtys = quantityArr[i].trim();

        break;

      case (warehouseArr[i].trim() === "OVERSTOCK"):

        overstockLocations = locationArr[i].trim();
        overstockQty = quantityArr[i].trim();

        break;
    };

  };

  processed = [pickFloorLocations.toString(),pickfloorQty,highbayLocations,highbayQtys,totalHighbayQty,overstockLocations,overstockQty];

  return processed;
  // return warehouse;
  // var results = "function processRaw(warehouse, location, quantity):::::" +
  //             "\nthis: " + this + 
  //             "\nwarehouse: " + warehouse + 
  //             "\nlocation: " + location +
  //             "\nquantity: " + quantity +
  //             "\nwarehouseArr: " + warehouseArr + 
  //             "\nlocationArr: " + locationArr +
  //             "\nquantityArr: " + quantityArr +
  //             "\n----------" ;
  // return results;
};

testFunction1();
// testFunction2();




