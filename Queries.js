 //First I need to use the db
 //use MongoDbTask1

 //1.)Find all the information about each products
 db.Products.find();

 //2.)Find the product price which are between 400 to 800
 db.Products.find({product_price:{$gte:400,$lte:800}})

 //3.)Find the product price which are not between 400 to 600
 db.Products.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:600}}]})

 //4.)List the four product which are greater than 500 in price 
 db.Products.find({product_price:{$gt:500}}).limit(4)

 //5.)Find the product name and product material of each products
 db.Products.find({},{product_name:1,product_material:1})

 //6.)Find the product with a row id of 10
 db.Products.find({id:{$eq:"10"}})

 //7.)Find only the product name and product material
  db.Products.find({},{product_name:true,product_material:true})

  //8.)Find all products which contain the value of soft in product material 
  db.Products.find({product_material:{$eq:"soft",$eq:"Soft"}})

  //9.)Find products which contain product color indigo  and product price 492.00
  db.Products.find({$or:[{product_color:{$eq:"indigo"}},{product_price:{$eq:492}}]})
  db.Products.find({product_color:"indigo",product_price:492})

  //10.)Delete the products which product price value are 28
  db.Products.deleteMany({product_price:28})
