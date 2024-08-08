let express = require('express');
let app = express();
let PORT=3000;

//1.welcome

function getWelcomeMessage(){
  return "Welcome to our service!";
}
app.get('/welcome',(req,res)=>{
  res.send(getWelcomeMessage());
});

//2.greet
function getGreetMessage(name){
  return "Hello, "+name+"!";
}
app.get('/greet',(req,res)=>{
  let username=req.query.username;
  res.send(getGreetMessage(username));
});

//3.check-password
function checkPasswordStrength(password){
  if (password.length>15){
    return "Password is strong";
  }else{
    return "Password is weak";
  }
}
app.get('/check-password',(req,res)=>{
  let password=req.query.password;
  res.send(checkPasswordStrength(password));
});

// 4.sum
function getSum(a,b){
  return a+b;
}
app.get('/sum',(req,res)=>{
  let num1=parseInt(req.query.num1);
  let num2=parseInt(req.query.num2);
  res.send(getSum(num1,num2).toString());
});

//5.subscription-status
function getSubscriptionStatus(username,isSubscribed){
  if (isSubscribed){
    return username+" is subscribed";
  }else{
    return username+" is not subscribed";
  }
}
app.get('/subscription-status',(req,res)=>{
  let username=req.query.username;
  let isSubscribed=req.query.isSubscribed==='true';
  res.send(getSubscriptionStatus(username,isSubscribed));
});

//6.discounted-price
function getDiscountedPrice(price,discount){
  return (price - (price*discount/100));
}
app.get('/discounted-price',(req,res)=>{
  let price=parseInt(req.query.price);
  let discount=parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price,discount).toString());
});

//7.Function to return a personalized greeting message
function getPersonalizedGreeting(age, gender, name) {
    return "Hello, "+name+"! You are a "+age + " year old "+ gender + ".";
}
app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

//8.final-price
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price (price* (discount / 100)); 
  return discountedPrice + (discountedPrice* (tax / 100));
}
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});